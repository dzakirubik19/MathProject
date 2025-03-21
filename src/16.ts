import numpy as np
from sklearn import tree

def classify_data(data):
    # Convert data into a matrix where each row is an example
    X = np.array([data])
    # Use the DecisionTreeClassifier to create a decision tree classifier model
    clf = tree.DecisionTreeClassifier()
    # Fit the model to the training data
    clf.fit(X, data)
    # Predict the class labels for the test examples
    predictions = clf.predict(X)
    return predictions

# Example usage
data = [[1, 2], [3, 4], [5, 6]]
predictions = classify_data(data)
print(predictions)
