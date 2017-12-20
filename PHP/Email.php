<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $name_field = $_POST['fname'];
        $name_field = htmlspecialchars($name_field);

        $name_field = $_POST['lname'];
        $name_field = htmlspecialchars($name_field);
        
        $number_field = $_POST['number'];
        $number_field = htmlspecialchars($number_field);
        
        $email_field = $_POST['email'];
        $email_field = htmlspecialchars($email_field);
        
        $city_field = $_POST['city'];
        $city_field = htmlspecialchars($city_field);
        
        $state_field = $_POST['state'];
        $state_field = htmlspecialchars($state_field);
        
        $zip_field = $_POST['zip'];
        $zip_field = htmlspecialchars($zip_field);
        
        $how_field = $_POST['how'];
        $how_field = htmlspecialchars($how_field);
        
        $to = "info@marcos.com";
        $subject = "$name_field (Contact Request)";
        $message = $_POST['message'];
        $message = htmlspecialchars($message);
            
        $message = wordwrap($message,70);
        // To send HTML mail, the Content-type header must be set
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=iso-8859-1';

        // Additional headers
        //$headers[] = 'To: Marcos <marcos@example.com>';
        $headers[] = 'From: MarcosPizza.com';
        $body = "
        <html>
            <head>
                <Title> $name_field Contact Request </Title>
            </head>
            <body>
                <p><strong>From:</strong> $name_field</p>
                <p><strong>Number:</strong> $number_field</p>
                <p><strong>E-Mail:</strong> $email_field</p>
                <p><strong>City:</strong> $city_field</p>
                <p><strong>State:</strong> $state_field</p>
                <p><strong>Zip:</strong> $zip_field</p>
                <p><strong>How did you hear about us?:</strong> $how_field</p>
                <p><strong>Message:</strong></p> <p style='margin-left:4em;'>$message</p>
            </body>
        </html>
        ";

        mail($to, $subject, $body, implode("\r\n", $headers));
        header('Location: \\Contact.html');
        //$alert_msg = "Data has been submitted to $to!";
        //echo "<script type='text/javascript'>alert('$alert_msg');</script>";
        } else {
        echo "An error has occured while trying to submit this form data";
    }
?>