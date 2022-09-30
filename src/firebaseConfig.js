import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCShADBHINoZHzW5R-38xPgP9nZFffszZo",
  authDomain: "crudreact-bfeeb.firebaseapp.com",
  projectId: "crudreact-bfeeb",
  storageBucket: "crudreact-bfeeb.appspot.com",
  messagingSenderId: "759620315176",
  appId: "1:759620315176:web:7d5f57f8d6bd1319fbad1d",
  measurementId: "G-T4WBXWPK26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default analytics;
