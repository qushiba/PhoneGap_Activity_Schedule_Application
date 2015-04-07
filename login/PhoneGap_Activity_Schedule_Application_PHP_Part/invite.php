<?php
require_once "connect.php";

$userdata=$_GET['userdata'];//id number
$date1=$_GET['datetime'];
$username=$_GET['username'];
//echo  $userdata,$date1,$username;

$conn=@mysql_connect($db_hostname,$db_username,$db_password);
if(!$conn){
	die("Unable to connnect to the database: ".mysql_error());
}
mysql_select_db("test",$conn);
$sql="INSERT INTO invite(userdata,date,username) VALUES('{$userdata}','{$date1}','{$username}')";
$result=mysql_query($sql) or die(mysql_error());


	$result="success";
	$jsondata=json_encode(array('result'=>$result));

	echo $_GET['callback'].'('.$jsondata.')';

?>