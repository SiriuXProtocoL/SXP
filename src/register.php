<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
    <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <!-- Material Design Bootstrap -->
  <link href="css/mdb.min.css" rel="stylesheet">
  <!-- Your custom styles (optional) -->
  <link href="css/style.css" rel="stylesheet">
  <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js"></script>

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
<div id="Register" class="view">

    <div class="mask rgba-black-strong">

		<div class=" mt-5 p-5 h-25">

        <div class="container d-flex align-items-center justify-content-center ">

            <div class="col d-flex justify-content-center text-center">

                <div class="col-md-5">

<!-- Default form register -->
<form class="text-center border border-light p-4" action="register.php" method="post">
  <?php include('errors.php') ?>

    <p class="h4 mb-4 font-weight-bold white-text">Register</p>

    <hr class="hr-light p-2">

    <!--username-->
    <input type="name" id="username" class="form-control mb-4" placeholder="username" name="username" required>
 
    <!-- E-mail -->
    <input type="email" id="Email" class="form-control mb-4" placeholder="E-mail" name="email" required>
  
    <!-- Password -->
    <input type="password" id="Password" name="password" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" value="<?php  ?>" required>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>
   
    <!-- confirm Password -->
    <input type="password" name="password_confirm" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" value="<?php  ?>" required>
    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
        At least 8 characters and 1 digit
    </small>
  
    <!-- Sign up button -->
    <input class="btn btn-info my-4 btn-block" id="register_btn" type="submit" name="submit_register" value="Sign in">

    <!-- Social register -->
    <p class="white-text">or sign up with:</p>

    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-facebook-f"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-twitter"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-linkedin-in"></i>
    </a>
    <a type="button" class="light-blue-text mx-2">
        <i class="fab fa-github"></i>
    </a>

    <hr>

    <!-- Terms of service -->
    <p class="white-text">By clicking
        <em>Sign up</em> you agree to our
        <a href="" target="_blank">terms of service</a> </p>

</form>
<!-- Default form register -->
</div>


      </div>

    </div>

  </div>

</div>

</div>
<!--/.Mask-->


</header>
</body>
<script src="js/register.js"></script>
</html>