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
    
     var logout = document.getElementById('logout');

     logout.addEventListener("click", e => { 
        //auth.signOut().then(function(){
           // user ="";
            //localStorage.removeItem('email');
            localStorage.clear();
            window.location.href = "login.html";
            console.log("log out");
    // })
    })

    });     
