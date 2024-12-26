// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_MEASURMENT_ID,
}

// Initialize Firebase
const adminApp = initializeApp(firebaseConfig)
const adminAuth = getAuth(adminApp)
const adminFirestore = getFirestore(adminApp)

export { adminApp, adminAuth, adminFirestore }
