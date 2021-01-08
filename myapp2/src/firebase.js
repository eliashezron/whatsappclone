// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBCUa3dyqljoHqrHB8KnyWfcmnWMnAJXcE",
    authDomain: "whatsappclone-bc071.firebaseapp.com",
    databaseURL: "https://whatsappclone-bc071.firebaseio.com",
    projectId: "whatsappclone-bc071",
    storageBucket: "whatsappclone-bc071.appspot.com",
    messagingSenderId: "900521254208",
    appId: "1:900521254208:web:8e4b7dfd77b683beb46ea5",
    measurementId: "G-GHBC0R2GKD"
  };  

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db;
