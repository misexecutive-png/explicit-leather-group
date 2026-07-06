<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $company = htmlspecialchars(trim($_POST['company']));
    $product = htmlspecialchars(trim($_POST['product']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "info@explicitleathergroup.com";
    $subject = "New Inquiry from Explicit Leather Group Website";

    $body = "
New Inquiry Received

------------------------------------

Name: $name

Email: $email

Company: $company

Product Requirement: $product

Message:
$message

------------------------------------
";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if(mail($to, $subject, $body, $headers)){
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Sorry! Your inquiry could not be sent.";
    }

} else {
    echo "Invalid Request.";
}

?>