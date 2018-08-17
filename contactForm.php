<?php


    $email = $_POST['email'];
    $subjct = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "albert@albertjgonzalez.com";
    $headers = "From:".$email";
    $txt = "$contactmessage";

    mail($mailTo, $subjct, $txt, $headers);


 ?>
