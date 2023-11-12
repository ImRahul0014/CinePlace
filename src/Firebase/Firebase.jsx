import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDj9BdtII_6LHwLIMg-2vpBZ4wvz_tbKoU",
  authDomain: "cineplace-37678.firebaseapp.com",
  projectId: "cineplace-37678",
  storageBucket: "cineplace-37678.appspot.com",
  messagingSenderId: "449076122515",
  appId: "1:449076122515:web:f164a154e2bc6660198e66"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const movieRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;