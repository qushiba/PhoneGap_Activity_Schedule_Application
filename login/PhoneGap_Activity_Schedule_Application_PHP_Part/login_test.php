<?php
$name=$_GET['name'];
$jsondata=array('name' =>$name , 'password' => 120);
$jsondata=json_encode($jsondata);
//$jsondata=json_encode(array('name'=>,'password'=>120));

//$jsondata="{name:".$name.",password:120}";
//$jsondata="{name:'$name',password:120}";
echo $_GET['callback'].'('.$jsondata.')';



?>