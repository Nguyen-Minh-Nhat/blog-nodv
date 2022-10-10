import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: 'blog-nodv.firebaseapp.com',
	projectId: 'blog-nodv',
	storageBucket: 'blog-nodv.appspot.com',
	messagingSenderId: '255721291089',
	appId: '1:255721291089:web:d08e9dae98a7de8284a770',
	measurementId: 'G-5YLX668RVM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
