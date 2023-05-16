import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-functions.js';
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7Dhf1uOqqN2kWYqjw8A5-FlTwh9fXnXw",
    authDomain: "ihdeveloper.firebaseapp.com",
    databaseURL: "https://ihdeveloper.firebaseio.com",
    projectId: "ihdeveloper",
    storageBucket: "ihdeveloper.appspot.com",
    messagingSenderId: "791354586060",
    appId: "1:791354586060:web:05ddbd5f71b65f13486369",
    measurementId: "G-FY6XFSH923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const functions = getFunctions(app);
const generate = httpsCallable(functions, 'generateArabicBionic');

export { generate };
