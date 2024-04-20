import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression

# load the CSV file into a DataFrame
df = pd.read_csv('models/hate_speech_model.csv')

# split the data into feature and target variables
x = df['text']
y = df['is_toxic']

toxicity = 0

# Convert the text data into numerical vectors using a CountVectorizer
vectorizer = CountVectorizer()
x = vectorizer.fit_transform(x)

# Split the data into training and testing sets
x_train, x_test, y_train, y_test = train_test_split(
    x, y, test_size=0.2, random_state=42)

# train a logistic regression model on the training data
model = LogisticRegression()
model.fit(x_train, y_train)

# Function to check if a tweet contains hate speech
def is_toxic(text):
    vec = vectorizer.transform([text])
    percentage = round((model.predict_proba(vec)[0][1] * 100), 2)

    if percentage >= 65.00:
        return True
    else:
        return False