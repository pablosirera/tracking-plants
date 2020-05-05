import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'tracking-plants.firebaseapp.com',
  databaseURL: 'https://tracking-plants.firebaseio.com',
  projectId: 'tracking-plants',
  storageBucket: 'tracking-plants.appspot.com',
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SEND_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()

const myPlantsCollection = database.collection('my-plants')

export { database, myPlantsCollection }
