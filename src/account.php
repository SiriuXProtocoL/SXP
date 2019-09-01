<?php
session_start();
if(isset($_SESSION['username']))
{
    $_SESSION['msg'] = "You Must Log In First to View this page";
    header("location: login.php");

if(isset($_GET['logout']))
{
    session_destroy();
    unset($_SESSION['username']);
    header("location: login.php");
}
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Account</title>
    <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="css/mdb.min.css" rel="stylesheet">
  <!-- Your custom styles (optional) -->
  <link href="css/style.css" rel="stylesheet">
</head>
<body>

        <header>
        <!--Navbar-->
 <nav class="navbar navbar-expand-lg special-color-dark fixed-top scrolling-navbar">

  <div class="container">
    <!--Logo-->
    <img src="img/logo1.png" class="img-fluid" alt="logo" style="width: 50px">
  <!-- Navbar brand -->
  <a class="navbar-brand white-text font-weight-bold col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">SiriusXP</a>

  <!-- Collapse button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="Nav">

    <!-- Links -->
    <ul class="navbar-nav mr-auto col-md-12 text-center text-md-right">
      <li class="nav-item active">
        <a class="nav-link white-text font-weight-bold" href="home.html">Home
          <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link white-text font-weight-bold" href="index.html">Buy SXP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link white-text font-weight-bold" href="send_tokens.html">Sell SXP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link white-text font-weight-bold" href="account.html">Account</a>
      </li>
      <!-- Dropdown -->
      <li class="nav-item dropdown white-text font-weight-bold">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">Attendence</a>
        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="attendence.html">Students</a>
          <a class="dropdown-item" href="attendence.html">Faculties</a>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link white-text font-weight-bold" href="contact_us.html">Contact Us</a>
      </li>

    </ul>
    <!-- Links -->

      
  </div>
  <!-- Collapsible content -->
</div>
</nav>
<!--/.Navbar-->        
               
               
               <!--Mask-->
               <div id="Account" class="view">
               
                   <div class="mask rgba-black-strong">
                      <div class="container-fluid  justify-content-center h-100 col-md-10">
                          <div class="row d-flex justify-content-center text-center ">
        <?php if(isset($_SESSION['success'])) : ?>
                <div class=" mt-5 col-md-12 white-text font-weight-bold">
                    <h1 class="text-center mt-5">
                      Welcome!
                      <?php
                      echo $_SESSION['success'];
                      unset($_SESSION['success']);
                      ?>
                    </h1>
                  </div>
                  <?php endif ?>
                  <div class="col-md-10">
                      <?php if(isset($_SESSION['username'])) ?>
                      <div>
                      <h2 class="white-text font-weight-bold mt-5">
                          Hello
                        <?php echo $_SESSION['username']; ?>
                      </h2>
                    </div>
                  <div>
                    <h2 class="white-text font-weight-bold mt-5">
                      <p id="accountAddress"></p>
                    </h2>
                  </div>
                  <div>
                      <h2 class="white-text font-weight-bold mt-5">
                        Attendence Percentage
                      </h2>
                    </div>
                    <div>
                        <h2 class="white-text font-weight-bold mt-5">
                          SXP Balance
                          <p> <br/> <span class="tokens-sold"></span> </p>
                        </h2>
                      </div>
                      <a class="btn btn-success" href="faculty.html"> Take Attendence </a>
                      <a class="btn btn-info" href="student_attendence.html"> View Attendence </a>

                      <?php endif ?>
               </div>
               </div>
               </div>
               </div>
               </div>
               <!--/.Mask-->
               
               
               </header>
    
</body>
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="js/bootstrap.min.js"> </script>
<script src="js/web3.min.js"> </script>
<script src="js/truffle-contract.min.js"> </script>
<script src="js/account.js"></script>
<script src="js/app.js"> </script> 
</html>