import time
from flask import Flask, request
import io

# quantum imports
import matplotlib.pyplot as plt
import numpy as np
import random
from flask import Response
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure
# importing Qiskit
from qiskit import IBMQ, Aer, assemble, transpile
from qiskit import QuantumCircuit, ClassicalRegister, QuantumRegister
from math import pi,log
import matplotlib as mpl
# import basic plot tools
from qiskit.visualization import plot_histogram
from qiskit.quantum_info import Statevector

app = Flask(__name__)

@app.route('/time', methods={'GET'})
def get_current_time():
    return {'time': time.time()}

@app.route('/api/create_graphs', methods=['POST'])
def create_graphs():
    data = request.get_json()
    print(data)
    return data

@app.route('/api/get_graph_test', methods=['GET'])
def get_graph_test():
    '''qc = QuantumCircuit(4)
    qc.append(increment(4), [0,1,2,3])
    qc.measure_all()

    circuit_drawing = qc.decompose().draw(output='latex_source')'''
    fig = Figure()
    axis = fig.add_subplot(1, 1, 1)
    xs = range(100)
    ys = [random.randint(1, 50) for x in xs]
    axis.plot(xs, ys)

    output = io.BytesIO()
    FigureCanvas(fig).print_png(output)
    return Response(output.getvalue(), mimetype='image/png')

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