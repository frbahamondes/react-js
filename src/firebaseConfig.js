// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
    apiKey: "AIzaSyB7m5F-xJ7zZYfI2ku05adLkduLzu4AesM",
    authDomain: "proyecto-react-js-96187.firebaseapp.com",
    projectId: "proyecto-react-js-96187",
    storageBucket: "proyecto-react-js-96187.firebasestorage.app",
    messagingSenderId: "772369864623",
    appId: "1:772369864623:web:8146a9a98fed1c1b2d415a"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore
export const db = getFirestore(app);