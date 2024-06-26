import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBneUIcjuWMxR94PEL-GOYU7ZoYyk2NPVc",
    authDomain: "augmend-4e43b.firebaseapp.com",
    projectId: "augmend-4e43b",
    storageBucket: "augmend-4e43b.appspot.com",
    messagingSenderId: "871684349105",
    appId: "1:871684349105:web:51b8348e1be427b13c5690",
    measurementId: "G-PQB9JX23GD"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
