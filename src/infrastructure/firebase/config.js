import { firestore, initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk21OxI45RPTuSN6S4Wuok4Z5hopY08lg",
  authDomain: "sensei-edfdf.firebaseapp.com",
  databaseURL: "https://sensei-edfdf.firebaseio.com",
  projectId: "sensei-edfdf",
  storageBucket: "sensei-edfdf.appspot.com",
  messagingSenderId: "593697307324",
  appId: "1:593697307324:web:a8a65125a55e7076ed6eb9",
};

initializeApp(firebaseConfig);

const projectFirestore = firestore();

export default projectFirestore;
