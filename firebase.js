import * as firebase from 'firebase'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDnt7emw7Kws8gB3cVh9C-AuTMZvELM5bI",
    authDomain: "campus-recruitment-syste-138d0.firebaseapp.com",
    projectId: "campus-recruitment-syste-138d0",
    storageBucket: "campus-recruitment-syste-138d0.appspot.com",
    messagingSenderId: "663648575935",
    appId: "1:663648575935:web:4381723950bcc008cf010a"
};

let app;
  
if(firebase.apps.length === 0){
  app=firebase.initializeApp(firebaseConfig);
}
else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth}