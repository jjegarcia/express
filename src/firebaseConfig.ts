import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAxQa9ZpYSQO3rvRPEKv60ZfBL78lIvgNM",
    authDomain: "letterbox-860b7.firebaseapp.com",
    databaseURL: "https://letterbox-860b7-default-rtdb.firebaseio.com",
    projectId: "letterbox-860b7",
    storageBucket: "letterbox-860b7.appspot.com",
    messagingSenderId: "693213306946",
    appId: "1:693213306946:web:71fbc5602141f6aa304ddb",
    measurementId: "G-DSCPJBY3VS"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
