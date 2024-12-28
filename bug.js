const db = getFirestore();

const docRef = doc(db, "collection", "document");

getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    console.log("Document data:", doc.data());
  } else {
    // The document does not exist.
    console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});