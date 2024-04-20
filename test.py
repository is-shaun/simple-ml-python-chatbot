import requests

url = "http://127.0.0.1:5000/api/chat"  # URL of the chatbot API

if __name__ == "__main__":
    while True:
        # Get user input
        input_data = str(input("Enter your question: "))

        # Send the question to the chatbot API
        data = {"question": input_data}

        # Get the response from the chatbot API
        response = requests.post(url, json=data)

        # Print the response
        print("Bot:", response.json()["response"])
