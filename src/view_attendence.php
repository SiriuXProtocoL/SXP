<?php
include("db.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Add Students to SXP</title>
    <!--<script src="https://www.gstatic.com/firebasejs/5.8.5/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.8.4/firebase-firestore.js"></script>-->
</head>
<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
<!-- Bootstrap core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="css/mdb.min.css" rel="stylesheet">
<!-- Your custom styles (optional) -->
<link href="css/style.css" rel="stylesheet">
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
  <div id="std" class="view">
 
 <div class="mask rgba-black-strong">

       <div class="container ">

      <h1><div class="well text-center mt-5 p-5  white-text font-weight-bold">Student Attendence</div></h1>


      <div class="panel panel-default">
          <div class="panel-heading">
              <h2>
                  <a class="btn btn-success" href="account.html"> Account </a>
                  <a class="btn btn-info pull-right" href="home.html"> Home </a>
      </h2>
      </div>
      
      <div class="panel-body">
      
      <table class="table table-striped white-text font-weight-bold">
<tr>
      <th>Serial Number</th> <th>Dates</th> <th>Show Attendence</th>
   </tr>        
   <?php $result = mysqli_query($con,"select distinct date from attendence_records");
        $serialnumber = 0;
          while($row = mysqli_fetch_array($result))
          {
            $serialnumber++;

        ?>
        <tr>
            <td> <?php echo $serialnumber; ?> </td>
            <td> <?php echo $row['date']; ?>
            </td>
            <td>
            <form action="show_attendence.php" method="post">
            <input type="hidden" value="<?php echo $row['date'] ?>" name="date" >
            <input type="submit" value="Show Attendence" class="btn btn-primary">
          </form>
          </td>
        </tr>    
        <?php
        }
        ?>
      </table>      
      </div> 
      </div>
      </div>
      </div>
      </div>
    

      </header>
      </body>
      </html>
