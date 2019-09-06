import firebase from 'firebase/app';
import 'firebase/firebase-firestore'

const firebaseConfig = firebase.initializeApp(
    {
        apiKey: "AIzaSyCurUo2bOmkNBafvVdPjHbKGuK-uThVzgA",
        authDomain: "todotiger-cce7e.firebaseapp.com",
        databaseURL: "https://todotiger-cce7e.firebaseio.com",
        projectId: "todotiger-cce7e",
        storageBucket: "todotiger-cce7e.appspot.com",
        messagingSenderId: "874682450669",
        appId: "1:874682450669:web:c05134760afbb7346942e4"
    }
)

export {firebaseConfig as firebase}