
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB_XV2q_glBY0orkGNy_wmsxigL2aIZt50",
      authDomain: "kwitter-7276c.firebaseapp.com",
      databaseURL: "https://kwitter-7276c-default-rtdb.firebaseio.com",
      projectId: "kwitter-7276c",
      storageBucket: "kwitter-7276c.appspot.com",
      messagingSenderId: "258665083277",
      appId: "1:258665083277:web:3a1ec8951e0f1644accdc4"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    

function getData()
 {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
