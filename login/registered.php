<?php
require_once 'connect.php';

$name=$_GET['name'];
$email=$_GET['email'];
$pwd=$_GET['password'];
//$test=array('name'=>$name,'email'=>$email,'passwrod'=>$pwd);


$conn = @mysql_connect($db_hostname,$db_username,$db_password);
if (!$conn){
    die("Unable to select database:" . mysql_error());
}

mysql_select_db("test", $conn);
//mysql_query("set names 'gbk'");	 //avoiding chinese characters choas
//mysql_query("set names 'utf8'");	//used when php using UTF-8

$password = md5($pwd);
$regdate = time();
//$sql = "INSERT INTO user(username, password, email, regdate)VALUES('{$name}','{$password}','{$email}','{$regdate}')";
$sql="INSERT INTO user(username,password,email,regdate)VALUES('{$name}','{$password}','{$email}','{regdate}');";
$result=mysql_query($sql)or die(mysql_error());


// it can use SELECT to validate the INSERT query


$confirm='yes';
$data=array('name'=>$name,'confirm'=>$confirm);
$jsondata=json_encode($data);
	
echo $_GET['callback'].'('.$jsondata.')';

 
//exit($sql);
/*
if(!mysql_query($sql,$conn)){
    echo "update data failed：".mysql_error();
    exit;
} else {
    echo "update data success";

}

 */

?>