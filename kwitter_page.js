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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
   console.log(message_da ta);
   name = message_data['name'];
   message = message_data['message'];
   like= message_data['like'];
   name_with_tag = "<h4>"+ name +"<img class = 'user_tick' src = 'tick.png> </h4>" ;
   message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
   like_button = "<button class = 'btn btn-warning' id ="+firebase_message_id+"value="+like_" onclick='updateLike(this.id)'>";
   span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> </hr>";

   row = name_with_tag + message_with_tag + like_button + span_with_tag;
   document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("click on like bitton -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value ;
      update_Likes = Number(likes) + 1;
      console.log("updated_Likes");

      firebase.database().ref(room_name).child(message_id).update({
            likes : updated_Likes
      })
}



function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_html";
}

function send()
{
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push ({
            name:user_name,
            Message = msg,
            like:0
      });
      document.getElementById("msg").value = "";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location .replace("kwitter.html");
}