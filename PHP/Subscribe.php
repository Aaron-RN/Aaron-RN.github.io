<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $email_field = $_POST['email'];
        $email_field = htmlspecialchars($email_field);

        $to = "GveJohnson@gmail.com";
        $subject = "$email_field (Subscription Request)";

        // To send HTML mail, the Content-type header must be set
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';

        // Additional headers
        $headers[] = 'From: MoFireFitness.com';
        $body = "
        <html>
            <head>
                <Title> $email_field Mail Subscription Request </Title>
            </head>
            <body>
                <p><strong>E-Mail:</strong> $email_field</p>
            </body>
        </html>
        ";

        mail($to, $subject, $body, implode("\r\n", $headers));
        header('Location: \\index.html');
        header('Location: \\gallery.html');
        //$alert_msg = "Data has been submitted to $to!";
        //echo "<script type='text/javascript'>alert('$alert_msg');</script>";
        } else {
        echo "An error has occured while trying to submit this form data";
    }
?>