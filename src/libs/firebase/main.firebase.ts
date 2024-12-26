// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_MAIN_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_MAIN_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_MAIN_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MAIN_FIREBASE_MEASURMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_MAIN_DATABASE_URL,
}

// Initialize Firebase
const mainApp = initializeApp(firebaseConfig)
const mainAuth = getAuth(mainApp)
const mainDatabase = getDatabase(mainApp)
const mainFirestore = getFirestore(mainApp)

export { mainApp, mainAuth, mainDatabase, mainFirestore }
