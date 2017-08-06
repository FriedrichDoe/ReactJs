import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBwDX3n3aGFtl5tR-CLAo_bz0_ye6DFfZw",
    authDomain: "goalcoach-2136f.firebaseapp.com",
    databaseURL: "https://goalcoach-2136f.firebaseio.com",
    projectId: "goalcoach-2136f",
    storageBucket: "goalcoach-2136f.appspot.com",
    messagingSenderId: "185109914399"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref("goals");
