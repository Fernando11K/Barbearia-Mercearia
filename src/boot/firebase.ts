// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyABqMyEk1oSJEFTvS0E8CqpOwQ6eTeeXDM',
  authDomain: 'barbearia-e-mercearia.firebaseapp.com',
  projectId: 'barbearia-e-mercearia',
  storageBucket: 'barbearia-e-mercearia.appspot.com',
  messagingSenderId: '299336766206',
  appId: '1:299336766206:web:de10ab2426cb0797928baf',
  measurementId: 'G-P25WE9Z1GB'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export {firebaseApp, analytics }

