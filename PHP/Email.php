<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $to = "aaron_newbold@hotmail.com";
        $subject = "Form Avenii.com";
        $name_field = $_POST['name'];
        $number_field = $_POST['number'];
        $email_field = $_POST['email'];
        $message = $_POST['message'];
        $message = wordwrap($message,70);
        $headers = "From: webmaster@example.com";

        $body = "From: $name_field\n Number: $number_field\n E-Mail: $email_field\n Message:\n $message";

        echo "Data has been submitted to $to!";
        mail($to, $subject, $body, $headers);
        } else {
        echo "blarg!";
    }
?>