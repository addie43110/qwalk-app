# importing Qiskit
import matplotlib.pyplot as plt
import numpy as np
from qiskit import IBMQ, Aer, assemble, transpile
from qiskit import QuantumCircuit, ClassicalRegister, QuantumRegister
from math import pi,log,ceil
import matplotlib as mpl
# import basic plot tools
from qiskit.visualization import plot_histogram
from qiskit.quantum_info import Statevector

# QUANTUM HELPERS
def increment(n_adder):
    qc = QuantumCircuit(n_adder)
    for i in range(n_adder-2):
        qc.mcx(list(range(i+1, n_adder)),i)
    qc.cx(n_adder-1, n_adder-2)
    qc.x(n_adder-1)

    U_inc = qc.to_gate()
    U_inc.name = "U$_{inc}$"
    return U_inc

def decrement(n_sub):
    qc = QuantumCircuit(n_sub)
    qc.x(n_sub-1)
    qc.cx(n_sub-1, n_sub-2)
    for i in range(n_sub-3, -1, -1):
        qc.mcx(list(range(i+1, n_sub)),i)
               
    U_dec = qc.to_gate()
    U_dec.name = "U$_{dec}$"
    return U_dec

def shift2D(n_dir, n_pos):    
    HALF_N = ceil(n_pos/2)

    qr = QuantumRegister(n_dir+n_pos)
    q_dir = qr[:n_dir]
    q_pos = qr[n_dir:]
    qc = QuantumCircuit(qr)
    
    # if direction is 00 (RIGHT)
    qc.x(q_dir)
    qc.append(increment(HALF_N).control(2), q_dir+q_pos[HALF_N:])
    qc.x(q_dir)
    # if direction is 01 (DOWN)
    qc.x(q_dir[0])
    qc.append(increment(HALF_N).control(2), q_dir+q_pos[:-HALF_N])
    qc.x(q_dir[0])
    # if direction is 10 (LEFT)
    qc.x(q_dir[1])
    qc.append(decrement(HALF_N).control(2), q_dir+q_pos[HALF_N:])
    qc.x(q_dir[1])
    # if direction is 11 (UP)
    qc.append(decrement(HALF_N).control(2), q_dir+q_pos[:-HALF_N])
    
    
    U_shift = qc.to_gate()
    U_shift.name = "U$_{shift}$"
    return U_shift

def round_remove_zeroes(np_dict):
    for a,d in np.ndenumerate(np_dict):
        for k,v in d.items():
            d[k] = round(v, 5)
    
    new_dict = {}
    for a,d in np.ndenumerate(np_dict):
        for k,v in d.items():
            if v:
                new_dict[k] = v
                
    return new_dict

def qwalk2D():
    n_dir = 2
    n_pos = 6
    iterations = 10
    qwalk_reg = QuantumRegister(n_dir+n_pos+1)

    # allocating qubits
    q_dir = qwalk_reg[:n_dir]
    q_pos = qwalk_reg[n_dir:n_dir+n_pos]
    q_anc = qwalk_reg[n_dir+n_pos]

    # lists of indices
    dir_ind = list(range(n_dir))
    pos_ind = list(range(n_dir+n_pos))[2:]
    anc_ind = n_dir+n_pos

    qwalk_circ = QuantumCircuit(qwalk_reg, ClassicalRegister(n_pos))

    # set up the initial position
        
    # set up the initial direction(s)
    for qubit in q_dir:
        qwalk_circ.h(qubit)

    states = []

    states.append(Statevector.from_instruction(qwalk_circ))
    for i in range(iterations):
        
        ''' Uncomment to add target state (Sticky walk) functionality'''
        #qwalk_circ.mcx(pos_ind, anc_ind) oracle, target is |11111..1>
        
        '''controlled shift where ancilla is control
        only shift if we are in a non-target state'''
        qwalk_circ.x(q_anc)
        qwalk_circ.append(shift2D(n_dir, n_pos).control(1), [anc_ind]+dir_ind+pos_ind)

        # add state to list
        states.append(Statevector.from_instruction(qwalk_circ))
        
        qwalk_circ.x(q_anc)
        
        '''Uncomment to add target state (Sticky walk) functionality'''
        #qwalk_circ.reset(q_anc)

        qwalk_circ.h(q_dir)

    return states

def create_plots2D(states):
    # PLOTTING FOR 8 x 8 GRID
    sum_data = np.zeros((8,8))
    meta_states = []

    states = states[len(states)-1:]

    for state in states:
        
        np_dict = round_remove_zeroes(np.array(state.probabilities_dict([7,6,5,4,3,2])))         
        #print("Position qubits:",np_dict)
        
        data = np.around(np.array(state.probabilities([7,6,5,4,3,2])), 5)
        data = np.reshape(data, (8,8))
        sum_data = sum_data + data
        meta_states.append(sum_data)
        d = state.probabilities_dict([7,6,5,4,3,2])
        
        # customizing plot
        plt.title("Current States")
        pixel_plot = plt.imshow(data, cmap='hot')

        plt.colorbar(pixel_plot)

        plt.savefig('./images/new_plot.png')