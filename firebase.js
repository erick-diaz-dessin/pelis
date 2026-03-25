// Importar desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  addDoc 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWHLkvYjVGvdA-QLh7Nmu9PiNYb8h3rZU",
  authDomain: "movie-tracker-67399.firebaseapp.com",
  projectId: "movie-tracker-67399",
  storageBucket: "movie-tracker-67399.firebasestorage.app",
  messagingSenderId: "537030759923",
  appId: "1:537030759923:web:8282164545bb3ccc082e86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);