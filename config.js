import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyAEil29IyzvVIpVYerH7LobSWILSwm5f90",
  authDomain: "c-71-3069d.firebaseapp.com",
  projectId: "c-71-3069d",
  storageBucket: "c-71-3069d.appspot.com",
  messagingSenderId: "583717159863",
  appId: "1:583717159863:web:1bbbac63222a7ffeaf1e32"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()

