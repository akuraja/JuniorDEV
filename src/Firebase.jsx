import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyADlPqX03OwXjp0xPTigdh20PULg5pR0UQ",
    authDomain: "animalshelter-62226.firebaseapp.com",
    projectId: "animalshelter-62226",
    storageBucket: "animalshelter-62226.appspot.com",
    messagingSenderId: "1015427746617",
    appId: "1:1015427746617:web:dcf73831d13984975df6e8",
    measurementId: "G-R8NDF3WTQM"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { app, database, analytics, auth, signInWithEmailAndPassword };
