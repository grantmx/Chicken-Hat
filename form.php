<?php

function strip_crlf($string){
    return str_replace("\r\n", "", $string);
}

if (! empty($_POST["send"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $volunteer = $_POST["volunteer"];
    $content = $_POST["content"];

    $toEmail = "admin@phppot_samples.com";
    // CRLF Injection attack protection
    $name = strip_crlf($name);
    $email = strip_crlf($email);

    if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "The email address is invalid.";

    } else {
        // appending \r\n at the end of mailheaders for end
        $mailHeaders = "From: " . $name . "<" . $email . ">\r\n";

        if (mail($toEmail, $subject, $content . $volunteer, $mailHeaders )) {
            $message = "Your contact information is received successfully.";
            $type = "success";
        }

    }
}

require_once "contact-view.php";

?>