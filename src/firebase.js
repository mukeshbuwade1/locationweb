import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDfvlFW-QZLdWwTa9YKEa7y4T-8Ow5jI-s",
    authDomain: "trackerapp-2da80.firebaseapp.com",
    projectId: "trackerapp-2da80",
    storageBucket: "trackerapp-2da80.appspot.com",
    messagingSenderId: "112864037546",
    appId: "1:112864037546:web:5193ec99642f8e5e26ded3"
};

export const db = initializeApp(firebaseConfig);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDfvlFW-QZLdWwTa9YKEa7y4T-8Ow5jI-s",
//   authDomain: "trackerapp-2da80.firebaseapp.com",
//   projectId: "trackerapp-2da80",
//   storageBucket: "trackerapp-2da80.appspot.com",
//   messagingSenderId: "112864037546",
//   appId: "1:112864037546:web:5193ec99642f8e5e26ded3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);