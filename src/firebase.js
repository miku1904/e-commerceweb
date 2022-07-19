import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCda_aadtut-jb3yRpg5hXP_pr4VQUUUis",
    authDomain: "shopping-cart-5a054.firebaseapp.com",
    projectId: "shopping-cart-5a054",
    storageBucket: "shopping-cart-5a054.appspot.com",
    messagingSenderId: "179576882327",
    appId: "1:179576882327:web:21f967f29500c34e4995d2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}