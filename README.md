# Firebase getDoc() returns 'No such document!' even when document exists

This repository demonstrates a common issue with Firebase's `getDoc()` method where it returns 'No such document!' even when a document clearly exists in the database.  The issue often stems from incorrect path specifications or data inconsistencies.

## Bug Description
The `getDoc()` function is used to retrieve a document from the Firestore database. In this scenario, despite the document's presence in the database, the function returns an error indicating that the document does not exist.

## Bug Reproduction
1. Ensure you have a Firebase project setup and initialized.
2. Create a Firestore collection and add a document.
3. Run the code in `bug.js`. Observe the output.

## Solution
The solution often involves carefully reviewing the path used in `doc()`. Verify the collection name and document ID.  Potential problems include:
* **Case sensitivity:**  Firestore is case-sensitive in the path
* **Incorrect collection or document ID:** Double-check for typos.
* **Data inconsistency:**  Ensure the document's data matches your expectations.

The corrected code, which includes more robust error handling, is found in `bugSolution.js`.