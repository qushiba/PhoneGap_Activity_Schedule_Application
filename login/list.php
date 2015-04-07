<?php
require_once "connect.php";

$username=$_GET['username'];
//echo  $userdata,$date1,$username;

$conn=@mysql_connect( $db_hostname, $db_username, $db_password );
if ( !$conn ) {
	die( "Unable to connnect to the database: ".mysql_error() );
}
mysql_select_db( "test", $conn );
//$sql="INSERT INTO invite(userdata,date,username) VALUES('{$userdata}','{$date1}','{$username}')";
//$sql="SELECT lat,lng,location_name FROM events WHERE userdata='$userdata'";

$sql="SELECT events.location_name, invite.date
	  FROM events, invite 
	  WHERE events.userdata=invite.userdata 
	  AND invite.username='$username'";
$result=mysql_query( $sql ) or die( mysql_error() );
$i=0;
while($row=mysql_fetch_assoc($result))
{
	$chat[$i]=$row;
	$i+=1;
  
}
//echo $_GET['callback'].'('.$jsondata.')';
	
	$jsondata=json_encode($chat);
	echo $_GET['callback'].'('.$jsondata.')';
?>
