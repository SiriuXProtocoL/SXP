(function() {
 
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
   
     //Get Elements
     const txtEmail = document.getElementById('Email');
     const txtPassword = document.getElementById('Password');
     //const phone = document.getElementById('ph');
     const btnRegister = document.getElementById('register_btn');


        //Add login Event
        btnRegister.addEventListener("click", e => { 
        //Get Email And Password
        const email = txtEmail.value;
        const pass = txtPassword.value;
        //const ph = phone.value;
        const auth = firebase.auth();
        //Sign in
        auth.createUserWithEmailAndPassword(email, pass)
        .then(function(user) {
            alert("Registration Successful");
            console.log(email);
            window.location.href = "login.html";
        })
        .catch(function(error) {
            console.log(error);
        })
      });

      //Add a real time Listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
    console.log(firebaseUser);
    } else {
        console.log('Not Logged In');
    }
});

}());