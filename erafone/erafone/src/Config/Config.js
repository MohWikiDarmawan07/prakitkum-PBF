import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBVIr3AXMtbwWS_NSCTljhEId_gczLiU1M",
    authDomain: "tugasbesar-f0ee3.firebaseapp.com",
    databaseURL: "https://coba-52197-default-rtdb.firebaseio.com",
    projectId: "tugasbesar-f0ee3",
    storageBucket: "tugasbesar-f0ee3.appspot.com",
    messagingSenderId: "923731466177",
    appId: "1:923731466177:web:2a143ddaf1015c7b034140",
    measurementId: "G-XFN9BD676R"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }