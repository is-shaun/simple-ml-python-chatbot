import requests

url = "http://127.0.0.1:5000/api/chat"

if __name__ == "__main__":
    while True:
        input_data = str(input("Enter your question: "))
        data = {"question": input_data}
        response = requests.post(url, json=data)
        print("Bot:", response.json()["response"])