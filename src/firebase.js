import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDUHPRxZ7Rg6UFuT7h2Owr1MwCo5xGrlFk",
  authDomain: "slack-clon-f69b4.firebaseapp.com",
  projectId: "slack-clon-f69b4",
  storageBucket: "slack-clon-f69b4.appspot.com",
  messagingSenderId: "199804672888",
  appId: "1:199804672888:web:6929c1cb425992f52b468d",
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;
