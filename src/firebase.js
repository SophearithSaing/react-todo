import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAMgtZn2kUsZ-HNUB6tbSlA1MylsZbz2UU',
  authDomain: 'react-todo-fc5fc.firebaseapp.com',
  projectId: 'react-todo-fc5fc',
  storageBucket: 'react-todo-fc5fc.appspot.com',
  messagingSenderId: '60817476622',
  appId: '1:60817476622:web:863c0a9302a3bc32a4c05f',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
