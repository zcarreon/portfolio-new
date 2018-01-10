<?php
	require_once('admin/scripts/config.php');
	if(isset($_POST['name'])){
		//echo "Yup.";
		$name = $_POST['name'];
		$email = $_POST['email'];
		$street = $_POST['street'];
    $about = $_POST['about'];
		$message = $_POST['message'];
		//echo $name;
		if($street === ""){
			//echo "send mail";
			$sendMail = submitMessage($direct, $name, $email, $about, $message);
		}else{
			//echo "Go away robots!";
			exit;
		}
	}
?>
