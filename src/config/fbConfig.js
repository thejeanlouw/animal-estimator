import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

var fbCconfig = {
    apiKey: "AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",
    authDomain: "parangelmata.firebaseapp.com",
    databaseURL: "https://parangelmata.firebaseio.com",
    projectId: "parangelmata",
    storageBucket: "parangelmata.appspot.com",
    messagingSenderId: "824823048409",
    appId: "1:824823048409:web:b667f9d23208d7003576c8",
    measurementId: "G-9JB6YF1SYF"
  };
  // Initialize Firebase
  firebase.initializeApp(fbCconfig);
  
  export default firebase;