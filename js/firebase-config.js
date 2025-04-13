import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDb2lloKHH687kw7t4qhoPrYmFlb3IGaZc",
    authDomain: "study-notes-c2f57.firebaseapp.com",
    databaseURL: "https://study-notes-c2f57-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "study-notes-c2f57",
    storageBucket: "study-notes-c2f57.firebasestorage.app",
    messagingSenderId: "827999396711",
    appId: "1:827999396711:web:3808e4980fe26139b745c2",
    measurementId: "G-6QGGMQ2CCD"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
