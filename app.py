from flask import Flask, request, render_template, jsonify
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

app = Flask(__name__)


def load_responses(file_path):
    with open(file_path, "r") as file:
        data = json.load(file)

    return data


def train_model(data):
    questions = list(data.keys())
    responses = list(data.values())
    model = make_pipeline(TfidfVectorizer(), MultinomialNB())
    model.fit(questions, responses)

    return model


def get_response(question, model):
    return model.predict([question])[0]


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    question = request.form["question"]
    responses_data = load_responses("chat.json")
    
    model = train_model(responses_data)
    response = get_response(question, model)

    return jsonify({"response": response})


if __name__ == "__main__":
    app.run(debug=True)
