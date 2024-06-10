import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'realtime-chat-9fbda.firebaseapp.com',
  projectId: 'realtime-chat-9fbda',
  storageBucket: 'realtime-chat-9fbda.appspot.com',
  messagingSenderId: '804610230934',
  appId: '1:804610230934:web:d476eaac9cef1bb8e390b7',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
