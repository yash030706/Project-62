import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBT-0zQo59yiN9W-gCio281mTm-pAC-5zg",
    authDomain: "attendenceproject-218e5.firebaseapp.com",
    databaseURL: "https://attendenceproject-218e5-default-rtdb.firebaseio.com",
    projectId: "attendenceproject-218e5",
    storageBucket: "attendenceproject-218e5.appspot.com",
    messagingSenderId: "618386719778",
    appId: "1:618386719778:web:e67a5e005fc4d9f803767b"
  };
firebase.initializeApp(firebaseConfig)
export default firebase.database()
 

  