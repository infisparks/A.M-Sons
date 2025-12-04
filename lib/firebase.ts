import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app"
import { getDatabase, ref, push, onValue, type Database } from "firebase/database"
import { getAuth, type Auth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCC1X1Rstn7d2IaalEQdn2uyyKXfnPnxjU",
  authDomain: "am-sons.firebaseapp.com",
  databaseURL: "https://am-sons-default-rtdb.firebaseio.com",
  projectId: "am-sons",
  storageBucket: "am-sons.firebasestorage.app",
  messagingSenderId: "575135330950",
  appId: "1:575135330950:web:d0ff267e28158821a79707",
  measurementId: "G-T72C19YDE2",
}

let app: FirebaseApp

if (typeof window !== "undefined") {
  // Ensure we don't re-initialize in the browser
  app = getApps().length ? getApp() : initializeApp(firebaseConfig)
} else {
  // For safety on the server (though we'll mainly use client-side)
  app = getApps().length ? getApp() : initializeApp(firebaseConfig)
}

export const db: Database = getDatabase(app)
export const auth: Auth = getAuth(app)

// Helper to create a new message entry under message/[uniqueId]
export function createMessage(data: {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  createdAt?: number
}) {
  const messagesRef = ref(db, "message")
  const payload = {
    ...data,
    createdAt: data.createdAt ?? Date.now(),
  }
  const newRef = push(messagesRef, payload)
  return newRef
}

// Helper to create a new product request under product-request-details/[productName]/[uniqueId]
export function createProductRequest(data: {
  productName: string
  customerName: string
  email: string
  phone: string
  message: string
  createdAt?: number
}) {
  const safeProductName = data.productName.replace(/[.#$/\[\]]/g, "_")
  const productRef = ref(db, `product-request-details/${safeProductName}`)
  const payload = {
    ...data,
    createdAt: data.createdAt ?? Date.now(),
  }
  const newRef = push(productRef, payload)
  return newRef
}

// Generic listeners used by admin page
export function listenToMessages(callback: (value: Record<string, any> | null) => void) {
  const messagesRef = ref(db, "message")
  return onValue(messagesRef, (snapshot) => {
    callback(snapshot.val())
  })
}

export function listenToProductRequests(
  callback: (value: Record<string, Record<string, any>> | null) => void,
) {
  const productRef = ref(db, "product-request-details")
  return onValue(productRef, (snapshot) => {
    callback(snapshot.val())
  })
}


