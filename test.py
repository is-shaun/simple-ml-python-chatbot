import requests

url = "http://127.0.0.1:5000/api/chat"
data = {"question": "What is the current time?"}

response = requests.post(url, json=data)
print(response.json())