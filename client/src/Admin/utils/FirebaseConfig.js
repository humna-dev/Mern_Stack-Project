
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBGFWbbE_G0oeYn8qWlTiK1Yc6wR3D6bwg",
  authDomain: "blahom.firebaseapp.com",
  projectId: "blahom",
  storageBucket: "blahom.appspot.com",
  messagingSenderId: "510114173452",
  appId: "1:510114173452:web:1d7d0354b6350e09ec9429",
  measurementId: "G-7R69ZKSSKS"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
