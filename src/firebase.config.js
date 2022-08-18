
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
        apiKey: "AIzaSyB0yN7xtK7QHWIDWbFpJExRgH1VAJKSjBs",
        authDomain: "restaurant-app-96366.firebaseapp.com",
        databaseURL: "https://restaurant-app-96366-default-rtdb.firebaseio.com",
        projectId: "restaurant-app-96366",
        storageBucket: "restaurant-app-96366.appspot.com",
        messagingSenderId: "643420960820",
        appId: "1:643420960820:web:e076eb05fb33d3f2b0b261",
        measurementId: "G-GJ5Y0N4KL8"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app)
export { app, firestore, storage };