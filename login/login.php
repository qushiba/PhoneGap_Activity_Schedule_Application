<?php
	
require_once 'connect.php';

$name=$_GET['name'];
$pwd=$_GET['password'];
//echo $name;
	
	$conn = @mysql_connect($db_hostname,$db_username,$db_password);
if (!$conn){
    die("Unable to select database:" . mysql_error());
}

mysql_select_db("test",$conn);

$password=md5($pwd);

$sql="SELECT password FROM user WHERE username='$name'";
$result=mysql_query($sql)or die(mysql_error());
$row=mysql_fetch_row($result);
//echo $row[0];
/*
$test=array('name'=>$row['name'],'password'=>$row['password']);
$json_test=json_encode($test);
echo "var json=".$json_test;

*/



if($row[0]==$password){
	$confirm='yes';
	$jsondata=json_encode(array('name'=>$name,'confirm'=>$confirm));
	
	echo $_GET['callback'].'('.$jsondata.')';

	
	//mysql_close($db_server);
}

else{
	$confirm='no';
	
	$jsondata=json_encode(array('name'=>$name,'confirm'=>$confirm));
	echo $_GET['callback'].'('.$jsondata.')';

	
	//mysql_close($db_server);
}



?>