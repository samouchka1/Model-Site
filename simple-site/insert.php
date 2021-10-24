<?php

if(isset($_POST['submit'])){ //name of input element (in contact.html) is 'submit'
    $name = $_POST['name'];
    $emailFrom = $_POST['email']; //again, notice use of name to access html tag
    $comments = $_POST['message'];

    $emailTo = "mchio421@protonmail.com";
    $headers = "From: ".$emailFrom;
    $text = "You received an email from: ".$name."\n\n".$message;

    mail($emailTo, $text, $headers);
    // header("Location: contact.html?mailsend");
}
?>