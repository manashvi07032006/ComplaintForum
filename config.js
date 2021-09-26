import * as firebase from 'firebase';
require('@firebase/firestore')

 const firebaseConfig = {
  apiKey: "AIzaSyBcmdETHULvqutlr_ubi7cmmkRqqfO8QO8",
  authDomain: "complaint-forum-78dd7.firebaseapp.com",
  projectId: "complaint-forum-78dd7",
  storageBucket: "complaint-forum-78dd7.appspot.com",
  messagingSenderId: "466329309366",
  appId: "1:466329309366:web:09176d6a953e4e480d5617"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();