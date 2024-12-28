const db = getFirestore();

const docRef = doc(db, "collection", "document");

getDoc(docRef).then((doc) => {
  if (doc.exists()) {
    console.log("Document data:", doc.data());
  } else {
    console.error('Document does not exist. Check your path:', docRef.path);
  }
}).catch((error) => {
  console.error("Error getting document:", error);
  //Add more detailed error handling based on error type (e.g., permission errors)
});