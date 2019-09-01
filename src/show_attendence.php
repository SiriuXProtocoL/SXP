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
</head>
<!-- Font Awesome -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
<!-- Bootstrap core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet">
<!-- Material Design Bootstrap -->
<link href="css/mdb.min.css" rel="stylesheet">
<!-- Your custom styles (optional) -->
<link href="css/style.css" rel="stylesheet">

<body class="im">
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
<!--/.Navbar class="d-none"-->
 
       <div class="container ">

      <h1><div class="well text-center mt-5 p-5  text-dark font-weight-bold">Attendence Status</div></h1>


      <div class="panel panel-default">
          <div class="panel-heading">
              <h2>
                  <a class="btn btn-success" href="account.html"> Account </a>
                  <a class="btn btn-info pull-right" href="home.html">Home </a>
      </h2>
      </div>
      <div class="panel-body">
      <form action="student_attendence.php" method="post">       
      <table id="table_body" class="table table-striped text-dark font-weight-bold">

        <div id="date" class="text-dark font-weight-bold p-5"></div>
<tr>
     <th>#serial Number</th><th>Student Name </th> <th>Roll Number </th> <th>Attendence Status </th> <th>SXP</th>
</tr>
        <?php $result = mysqli_query($con,"select * from attendence_records where date=$_POST[date]");
        $serialnumber = 0;
        $counter = 0;
        $sxp = 0;
          while($row = mysqli_fetch_array($result))
          {
            $serialnumber++;

        ?>
        <tr>
            <td> <?php echo $serialnumber; ?> </td>
            <td> <?php echo $row['student_name']; ?> </td>
            
            <td> <?php echo $row['roll_number']; ?> </td>
           
            <td> 
              <input type="checkbox" name="attendence_status[<?php echo $counter ?>]" value="Present">Present
              <input type="checkbox" name="attendence_status[<?php echo $counter ?>]" value="Absent">Absent
            </td>
            <td> <?php echo $row['sxp']; ?> </td>
            <input type="hidden" value="<?php echo $row['sxp']; ?>" name="sxp[]">
        </tr>    
        <?php
        $counter++;
        }
        ?>
      </table>
      <input type="submit" name="submit" value="submit" class="btn btn-primary">
      </form>
  
      </div>
      
      </div>
      </div> 
    </header>

     
      </body>
      </html>
