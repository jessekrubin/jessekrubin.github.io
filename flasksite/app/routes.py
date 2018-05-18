from flask import render_template, Flask
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    return render_template('index.html', title='Home', user=user)

@app.route('/aboot')
def aboot():
    return render_template('aboot.html', title='Aboot')

@app.route('/ThrooEarth')
def throoearth():
    return render_template('throoearth.html', title='te')
# # hello_world.py
#
# from flask import Flask
# app = Flask(__name__)
#
# @app.route('/')
# def hello_world():
#     return 'Hello World!'