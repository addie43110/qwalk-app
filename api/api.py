import time
from flask import Flask, request, render_template
import io

import random
from flask import Response
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from matplotlib.figure import Figure

from quantum_functions import qwalk2D, create_plots2D

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
    fig = Figure()
    axis = fig.add_subplot(1, 1, 1)
    xs = range(100)
    ys = [random.randint(1, 50) for x in xs]
    axis.plot(xs, ys)

    output = io.BytesIO()
    FigureCanvas(fig).print_png(output)
    return Response(output.getvalue(), mimetype='image/png')

@app.route('/api/get_qw_test', methods=['GET'])
def get_qw_test():
    create_plots2D(qwalk2D())
    return render_template('untitled1.html', name = 'new_plot', url ='./images/new_plot.png')

if __name__ == "__main__":
    app.run(port=8000, debug=True)