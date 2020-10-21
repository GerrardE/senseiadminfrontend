import { firestore, initializeApp } from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {};

initializeApp(firebaseConfig);

const projectFirestore = firestore();

export default projectFirestore;
