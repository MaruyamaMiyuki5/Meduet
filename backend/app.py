from flask import Flask, request
from flask import jsonify
import json
from flask_cors import CORS

from db_control import crud, mymodels

import requests

# Azure Database for MySQL
# REST APIでありCRUDを持っている
app = Flask(__name__)
CORS(app)
 

@app.route("/")
def index():
    return "<p>Flask top page!</p>"
 
@app.route("/customers", methods=['POST'])
def create_customer():
    values = request.get_json()
    tmp = crud.myinsert(mymodels.Customers, values)
    result = crud.myselect(mymodels.Customers, values.get("customer_id"))
    return result, 200

@app.route("/customers", methods=['GET'])
def read_one_customer():
    model = mymodels.Customers
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.myselect(mymodels.Customers, target_id)
    return result, 200

@app.route("/allcustomers", methods=['GET'])
def read_all_customer():
    model = mymodels.Customers
    result = crud.myselectAll(mymodels.Customers)
    return result, 200

@app.route("/customers", methods=['PUT'])
def update_customer():
    print("I'm in")
    values = request.get_json()
    values_original = values.copy()
    model = mymodels.Customers
    # values = {  "customer_id": "C004",
    #             "customer_name": "鈴木C子",
    #             "age": 44,
    #             "gender": "男"}
    tmp = crud.myupdate(model, values)
    result = crud.myselect(mymodels.Customers, values_original.get("customer_id"))
    return result, 200

@app.route("/customers", methods=['DELETE'])
def delete_customer():
    model = mymodels.Customers
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.mydelete(model, target_id)
    return result, 200

@app.route("/fetchtest")
def fetchtest():
    response = requests.get('https://jsonplaceholder.typicode.com/users')
    return response.json(), 200




### ↓test
@app.route("/customers2", methods=['POST'])
def create_customers2():
    values = request.get_json()
    tmp = crud.myinsert(mymodels.Customers2, values)
    result = crud.myselect2(mymodels.Customers2, values.get("customer_id"))
    return result, 200

@app.route("/customers2", methods=['GET'])
def read_one_customers2():
    model = mymodels.Customers2
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.myselect2(mymodels.Customers2, target_id)
    return result, 200

@app.route("/allcustomers2", methods=['GET'])
def read_all_customers2():
    model = mymodels.Customers2
    result = crud.myselectAll(mymodels.Customers2)
    return result, 200

@app.route("/customers2", methods=['PUT'])
def update_customers2():
    print("I'm in")
    values = request.get_json()
    values_original = values.copy()
    model = mymodels.Customers2
    # values = {  "customer_id": "C004",
    #             "customer_name": "鈴木C子",
    #             "age": 44,
    #             "gender": "男"}
    tmp = crud.myupdate(model, values)
    result = crud.myselect2(mymodels.Customers2, values_original.get("customer_id"))
    return result, 200

@app.route("/customers2", methods=['DELETE'])
def delete_customers2():
    model = mymodels.Customers2
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.mydelete(model, target_id)
    return result, 200



### ↓SYMPTOM
@app.route("/customers3", methods=['POST'])
def create_customers3():
    values = request.get_json()
    tmp = crud.myinsert(mymodels.Customers3, values)
    result = crud.myselect3(mymodels.Customers3, values.get("customer_id"))
    return result, 200

@app.route("/customers3", methods=['GET'])
def read_one_customers3():
    model = mymodels.Customers3
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.myselect3(mymodels.Customers3, target_id)
    return result, 200

@app.route("/allcustomers3", methods=['GET'])
def read_all_customers3():
    model = mymodels.Customers3
    result = crud.myselectAll(mymodels.Customers3)
    return result, 200

@app.route("/customers3", methods=['PUT'])
def update_customers3():
    print("I'm in")
    values = request.get_json()
    values_original = values.copy()
    model = mymodels.Customers3
    tmp = crud.myupdate(model, values)
    result = crud.myselect3(mymodels.Customers3, values_original.get("customer_id"))
    return result, 200

@app.route("/customers3", methods=['DELETE'])
def delete_customers3():
    model = mymodels.Customers3
    target_id = request.args.get('customer_id') #クエリパラメータ
    result = crud.mydelete(model, target_id)
    return result, 200

