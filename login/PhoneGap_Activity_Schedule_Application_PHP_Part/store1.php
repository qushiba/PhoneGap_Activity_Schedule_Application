<?php
require_once "connect.php";

//$msg=$_GET['msg'];

$userdata=$_GET['userdata'];//id number
$lat=$_GET['lat'];
$lng=$_GET['lng'];
$location_name=$_GET['location_name'];
//$username=$_GET['username'];


$conn=@mysql_connect($db_hostname,$db_username,$db_password);
if(!$conn){
	die("Unable to connnect to the database: ".mysql_error());
}
mysql_select_db("test",$conn);
$sql="INSERT INTO events(userdata,lat,lng,location_name) VALUES('{$userdata}','{$lat}','{$lng}','{$location_name}')";
$result=mysql_query($sql) or die(mysql_error());


	$result="success";
	$jsondata=json_encode(array('result'=>$result));

	echo $_GET['callback'].'('.$jsondata.')';

?>