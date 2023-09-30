import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const config = {
    apiKey: "AIzaSyCXWoSLREsAeNxOcGm1dMlqCri3F99mBNI",
    authDomain: "marvel-quiz-69ad7.firebaseapp.com",
    projectId: "marvel-quiz-69ad7",
    storageBucket: "marvel-quiz-69ad7.appspot.com",
    messagingSenderId: "558727405937",
    appId: "1:558727405937:web:b9540a15510145104616d0",
    measurementId: "G-FZCH2GD241"
  };

const app = initializeApp(config);
export const auth = getAuth(app);