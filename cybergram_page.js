//Firebase Links\\
var firebaseConfig = {


      apiKey: "AIzaSyCfrfF_zozVkB1N8fhX7RwgxyjVjK809QA",
    
      authDomain: "cybergram-d4cd5.firebaseapp.com",
      
      databaseURL: "https://cybergram-d4cd5-default-rtdb.firebaseio.com",
      
      projectId: "cybergram-d4cd5",
      
      storageBucket: "cybergram-d4cd5.appspot.com",
      
      messagingSenderId: "886757924474",
      
      appId: "1:886757924474:web:6e840e14dcd024d4ec25c3",
      
      measurementId: "G-2S3L8S2B40"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

