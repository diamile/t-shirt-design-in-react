import firebase from 'firebase/app';
import 'firebase/storage';

//Utilisation de firebase afin stocker mes images
var firebaseConfig = {
    apiKey: "AIzaSyBZm6Y7_uK8vWPX2Twm8SIpDnyLrSQ1_-U",
    authDomain: "myapp-97905.firebaseapp.com",
    databaseURL: "https://myapp-97905.firebaseio.com",
    projectId: "myapp-97905",
    storageBucket: "myapp-97905.appspot.com",
    messagingSenderId: "208719009457",
    appId: "1:208719009457:web:19c1e9ed708a18a51af490",
    measurementId: "G-39G60K8CKZ"
  };
  
  // Initialisation de  Firebase
  firebase.initializeApp(firebaseConfig);

//creation d'un storage
  const storage=firebase.storage();

  export{
      storage,firebase as default
  }

