import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyARxiXN82p1-HusLkmm-pThpXIp_DSpnkY",
  authDomain: "chit-chat-talk.firebaseapp.com",
  projectId: "chit-chat-talk",
  storageBucket: "chit-chat-talk.appspot.com",
  messagingSenderId: "144327029744",
  appId: "1:144327029744:web:432273c585dffcdfece335",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
