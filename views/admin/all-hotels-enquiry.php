<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Hotel Enquiries</title>

<% include ../partials/header %>
<% include ../partials/admin-sidebar %>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Welcome!</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">

      <!--------------------------
        | Your Page Content Here |
        -------------------------->

          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Hotel Enquiries</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table class="table table-hover">
                <tr>
                  <th>Hotel Name</th>
                  <th>Hotel ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Check-In Date</th>
                  <th>Check-Out Date</th>
                  <th>Rooms Required</th>
                  <th>Child</th>
                  <th>Adult</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
                <?php
                    require 'config.php';

                    if($_SESSION["user_role"]=="Admin")
                    {
                      $statement="SELECT * from hotel_enquiry, hotels where hotel_enquiry.hotel_id= hotels.hotel_id and hotels.deletedAt is NULL and hotel_enquiry.deletedAt is NULL";
                      $result = mysqli_query($conn, $statement);

                      if (mysqli_num_rows($result) > 0)
                      {
                          while($row = mysqli_fetch_assoc($result))
                          {
                            echo "<tr>"; 
                            echo "<td>".$row['title']."</td>";
                            echo "<td>".$row['hotel_id']."</td>";
                            echo "<td>".$row['name']."</td>";
                            echo "<td>".$row['email']."</td>";
                            echo "<td>".$row['phone']."</td>";
                            echo "<td>".$row['checkin']."</td>";
                            echo "<td>".$row['checkout']."</td>";
                            echo "<td>".$row['total_room']."</td>";
                            echo "<td>".$row['child']."</td>";
                            echo "<td>".$row['adult']."</td>";
                            echo "<td>".$row['message']."</td>";
                            echo "<td><a href=\"cancel-hotels-enquiries.php?enquiry_id=$row[enquiry_id]\" onClick=\"return confirm('Are you sure you want to Cancel?')\">Cancel</a></td>";
                            //echo "<td><a href=\"change_status_hotel.php?enquiry_id=$row[enquiry_id]\">$row[status]</a></td>";
                            echo "</tr>";
                          }
                      }
                      else
                      {
                          echo "Nothing found in db";
                      }                      
                    }
                    else if($_SESSION["user_role"]=="Owner")
                    {
                      $statement="SELECT * from hotel_enquiry, hotels where hotel_enquiry.hotel_id= hotels.hotel_id and hotels.deletedAt is NULL and hotel_enquiry.deletedAt is NULL and hotels.owner='$_SESSION[user]' ";
                      $result = mysqli_query($conn, $statement);

                      if (mysqli_num_rows($result) > 0)
                      {
                          while($row = mysqli_fetch_assoc($result))
                          {
                            echo "<tr>"; 
                            echo "<td>".$row['title']."</td>";
                            echo "<td>".$row['hotel_id']."</td>";
                            echo "<td>".$row['name']."</td>";
                            echo "<td>".$row['email']."</td>";
                            echo "<td>".$row['phone']."</td>";
                            echo "<td>".$row['checkin']."</td>";
                            echo "<td>".$row['checkout']."</td>";
                            echo "<td>".$row['total_room']."</td>";
                            echo "<td>".$row['child']."</td>";
                            echo "<td>".$row['adult']."</td>";
                            echo "<td>".$row['message']."</td>";
                            echo "<td><a href=\"cancel-hotels-enquiries.php?enquiry_id=$row[enquiry_id]\" onClick=\"return confirm('Are you sure you want to Cancel?')\">Cancel</a></td>";
                            //echo "<td><a href=\"change_status_hotel.php?enquiry_id=$row[enquiry_id]\">$row[status]</a></td>";
                            echo "</tr>";
                          }
                      }                      
                    }


                    mysqli_close($conn);
                ?>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->

    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

<?php include 'footer.php';?>