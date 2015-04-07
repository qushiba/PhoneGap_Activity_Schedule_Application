<?php
require_once "connect.php";
$userdata=$_GET['userdata'];
$uesrname=$_GET['username'];
$date=$_GET['date'];
$long=$_GET['long'];
$lati=$_GET['lati'];

$conn=@mysql_connect($db_hostname,$db_username,$db_password);
if(!$conn){
	die("Unable to connnect to the database: ".mysql_error());
}
mysql_select_db("test",$conn);
$sql="INSERT INTO event(username,userdata,date,long,lati) VALUES('{$username}','{$userdata}','{$date}','{$long}','{$lati}')";
$result=mysql_query($sql) or die(mysql_error());

$sql1="SELECT long FROM event WHERE userdata='$userdata'";
$result=mysql_query($sql1);

$row=mysql_fetch_row($result);

if($row[0]==$long){
	$result="success";
	$jsondata=json_encode(array('result'=>$result));

	echo $_GET['callback'].'('.$jsondata.')';
}else{
	$resutl="failed";
	$jsondata=json_encode(array('result'=>$result));

	echo $_GET['callback'].'('.$jsondata.')';
}
	
?>