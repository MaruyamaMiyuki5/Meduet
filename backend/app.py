stores = [
  {
    "name":"Store1",
    "items":[
        {
          "name":"Chair",
          "price":15.99
        }
    ]
  }
]

from flask import Flask
import requests
app = Flask(__name__)

@app.route("/store")
def get_stores():
  return {"stores":stores}

@app.route("/fetchtest")
def fetchtest():
  res = requests.get('https://jsonplaceholder.typicode.com/users')
  return res.json(), 200


