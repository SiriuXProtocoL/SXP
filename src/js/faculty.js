    console.log("qwerty");
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCcRR-8JzwdftzyYOy_3pqr0iDE1Ei4l4A",
    authDomain: "siriusxp-1d049.firebaseapp.com",
    databaseURL: "https://siriusxp-1d049.firebaseio.com",
    projectId: "siriusxp-1d049",
    storageBucket: "siriusxp-1d049.appspot.com",
    messagingSenderId: "640101814778"
  };
  firebase.initializeApp(config);
    function datastore() {
      console.log("qwerty");
     var db = firebase.firestore();


       var inputName = document.getElementById("name").value;
       var inputRoll = document.getElementById("roll").value;
       
       //Add a new element
       db.collection("Student").doc().set({
         stdName: inputName,
         stdRoll: inputRoll,
         p_Counter : false, 
         a_Counter : false, 
         sxp: 0,
         date: " "
       }).then(function() {
         console.log("Document Successfully Written");
         alert("Student Registered");
         name = " ";
         roll = " ";
         console.log("qwerty");
       })
       .catch(function(error) {
         console.log("Error writing Document", error);
       });
      };


