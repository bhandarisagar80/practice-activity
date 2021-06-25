
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDHY5KyLcUyWWdsy_ILyNNkqFaFxL958p8",
    authDomain: "practice-activity-28882.firebaseapp.com",
    databaseURL: "https://practice-activity-28882-default-rtdb.firebaseio.com",
    projectId: "practice-activity-28882",
    storageBucket: "practice-activity-28882.appspot.com",
    messagingSenderId: "916282227288",
    appId: "1:916282227288:web:7b0c270ea24fc3be17e82d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      username=document.getElementById("username").value;
      firebase.database().ref("/").child(username).update({
          purpose:"adding user"
      });
  }