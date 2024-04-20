# Chatbot API Documentation

## Introduction

Welcome to the Chatbot API documentation. This API allows you to interact with a chatbot to get responses to various queries.

You can change port by passing `--port` argument to the `app.py` file.

```bash
python app.py --port 4000
```

or

```bash
python app.py -p 4000
```

> Note: The default port is `5000`.

## Getting Started

To start using the API, follow these steps:

1. Ensure you have a client capable of making HTTP requests.
2. Use the provided endpoints to send requests and receive responses from the chatbot.

## Base URL

The base URL for accessing the API is `http://127.0.0.1:5000` if running locally. If deployed to a server, replace `127.0.0.1:5000` with the server's domain.

## Endpoints

### 1. Chat

- **URL**: `/api/chat`
- **Method**: `POST`
- **Request Body**:
  - `question`: The query you want to ask the chatbot.
- **Sample Request**:
  ```json
  {
    "question": "What is the current time?"
  }
  ```
- **Sample Response**:
  ```json
  {
    "response": "The current time is 03:30 PM"
  }
  ```
- **Error Response**:
  If the request body is missing the `question` parameter:
  ```json
  {
    "error": "Question parameter missing"
  }
  ```

## Example Usage

### Python Example using `requests`

```python
import requests

url = "http://127.0.0.1:5000/api/chat"
data = {"question": "What is the current time?"}

response = requests.post(url, json=data)
print(response.json())
```

### cURL Example

```bash
curl -X POST \
  http://127.0.0.1:5000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{
    "question": "What is the current time?"
  }'
```

## Error Handling

- **404 Not Found**: Returned when accessing an invalid endpoint.
- **500 Internal Server Error**: Returned for other server errors.

## Rate Limiting

There is currently no rate limiting implemented on this API. However, excessive use may result in temporary bans.

> This will be implemented in future versions.

## Conclusion

You should now be able to interact with the chatbot API using the provided endpoints. If you encounter any issues or have any questions, please refer to the documentation or contact the API provider.
