<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $name_field = $_POST['name'];
        $name_field = htmlspecialchars($name_field);
        
        $number_field = $_POST['number'];
        $number_field = htmlspecialchars($number_field);
        
        $email_field = $_POST['email'];
        $email_field = htmlspecialchars($email_field);
        
        $to = "aaron_newbold@hotmail.com";
        $subject = "$name_field (Contact Request)";
        $message = $_POST['message'];
        $message = htmlspecialchars($message);
            
        $message = wordwrap($message,70);
        // To send HTML mail, the Content-type header must be set
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';

        // Additional headers
        //$headers[] = 'To: Aveni <avenii@example.com>';
        $headers[] = 'From: Avenii.com';
        $body = "
        <html>
            <head>
                <Title> $name_field Contact Request </Title>
            </head>
            <body>
                <p><strong>From:</strong> $name_field</p>
                <p><strong>Number:</strong> $number_field</p>
                <p><strong>E-Mail:</strong> $email_field</p>
                <p><strong>Message:</strong></p> <p style='margin-left:4em;'>$message</p>
            </body>
        </html>
        ";

        mail($to, $subject, $body, implode("\r\n", $headers));
        header('Location: \\Contact.php');
        //$alert_msg = "Data has been submitted to $to!";
        //echo "<script type='text/javascript'>alert('$alert_msg');</script>";
        } else {
        echo "An error has occured while trying to submit this form data";
    }
?>