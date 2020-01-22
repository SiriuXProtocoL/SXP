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
  const txtEmail = document.getElementById('email');
  const txtPassword = document.getElementById('pass');
  const btnLogin = document.getElementById('login_btn');

    //Add login Event
    btnLogin.addEventListener("click", e => { 
    //Get Email And Password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    auth.signInWithEmailAndPassword(email, pass)
    .then(function(user) {
        console.log(email);
        window.location.href = "account.html"

    })
    .catch(function(error) {
        console.log(error);
    })
  });

  //Add a real time Listener
 /* firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
      console.log(firebaseUser);
      } else {
          console.log('Not Logged In');
      }
  });*/

}());
