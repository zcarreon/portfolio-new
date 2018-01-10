<?php

  function redirect to ($location) {
    if ($location != NULL) {
        header("Location : {$location}");
        exit;
    }
  }

  //echo "From mail.php";
  function submitMessage($direct, $name, $email, $about, $message) {
    //echo "From submitMessage";
    $to = "email@zacharycarreonweb.com";
    $subject = $about;
		$extra = "Reply to: " + $email;
		$msg = "Name: ".$name."\n\nEmail: ".$email."\n\nMessage: ".$message;
		mail($to, $subject, $msg, $extra);
  }
?>
