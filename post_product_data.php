<?php
//get the db connection settings
//Make changes where needed to connect to database
$data = json_decode(file_get_contents("php://input"));
echo $data->author;
echo '<br/>'.$_SERVER['HTTP_HOST'];
//print_r($data);
exit();
$server_name = "127.0.0.1";//localhost
$user = "root";
$password = "";//premier_231
$database_name = "shopping_cart_db";

$db_connection = mysql_connect($server_name,$user,$password) or die("Failed to connect to the database!");

if(!$db_connection){
	die("Could not connect to the database!");
} 
	
if(!mysql_select_db($database_name,$db_connection)){
 	die("No database selected.");
}
$_POST['name'] = "me";
echo json_encode($_POST);
?>