<?php
require_once 'connect.php';
function index() {
	$method=$this->get( 'method' );
	$this->$method();
	exit();
}
function itemsSearchGet() {
	$name=$_GET( 'name' );
	
	$conn = @mysql_connect( "localhost", "root", "123456" );
	if ( !$conn ) {die( "Unable to select database:" . mysql_error() );
	}

	mysql_select_db( "test", $conn );

	
	$sql="SELECT * FROM user WHERE username='$name'";
	$result=mysql_query( $sql )or die( mysql_error() );
	$row=mysql_fetch_array($result);
	$itemsSearchRel=array('name'=>$row['name'],'password'=>$row['password']);

	$itemsSearchRel=json_encode($itemsSearchRel);
	$callback=$_GET['callback'];

	echo $callback."($itemsSearchRel)";
	exit;
	}
?>
