import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBwV3p5sEMeuw0484eGTeCbLzy5Ppzl-Ho",
    authDomain: "slack-clone-react-6934f.firebaseapp.com",
    databaseURL: "https://slack-clone-react-6934f.firebaseio.com",
    projectId: "slack-clone-react-6934f",
    storageBucket: "slack-clone-react-6934f.appspot.com",
    messagingSenderId: "1015872541314",
    appId: "1:1015872541314:web:8dcd2e6e6a090472ac5a9b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
  export default db