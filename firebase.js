import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = {
    apiKey: import.meta.env.VITE_APY_KEY,
    authDomain: import.meta.env.VITE_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
}
const app = initializeApp(firebaseApp);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db }