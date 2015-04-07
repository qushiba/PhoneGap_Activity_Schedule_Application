<?php
require_once "connect.php";

$userdata=$_GET['userdata'];//id number

//echo  $userdata;

$conn=@mysql_connect( $db_hostname, $db_username, $db_password );
if ( !$conn ) {
	die( "Unable to connnect to the database: ".mysql_error() );
}
mysql_select_db( "test", $conn );
$sql="SELECT lat,lng,location_name FROM events WHERE userdata='$userdata'";
$result=mysql_query($sql) or die( mysql_error() );
$row=mysql_fetch_row($result);

//echo $row[0],$row[1],$row[2];
$jsondata=json_encode(array('lat'=>$row[0],'lng'=>$row[1],'location_name'=>$row[2]));

//$result="success";
//$jsondata=json_encode( array( 'result'=>$result ) );

echo $_GET['callback'].'('.$jsondata.')';

?>
