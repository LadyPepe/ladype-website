<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer.php';
require 'SMTP.php';


function sendWelcomeMail($email) {
    $mail = new PHPMailer(true);
    $mail->SMTPDebug = SMTP::DEBUG_OFF;

   
    $mail->isSMTP();
    $mail->Host = '';
    $mail->SMTPAuth = true;
    $mail->Username = '';
    $mail->Password = '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = ;

    
    $mail->setFrom('newsletter@ladypepe.xyz', 'Lady Pepe');
    $mail->addAddress($email, 'Dear');
    $mail->isHTML(true);
    $mail->Subject = 'Welcome to the newsletter!';
    $mail->Body = '<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lady Pepe Newsletter</title>
    <style>
        body {
            background-color: #f2f2f2;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
        }
        .header {
            text-align: center;
            padding: 20px;
        }
        .header img {
            max-width: 100px;
        }
        .section {
            text-align: center;
            padding: 20px;
            max-width: 100%;
        }
        .section img {
            max-width: 100%;
            border-radius: 10px;
        }
        .social-icons {
            padding: 10px;
        }
        .social-icons a {
            margin: 5px;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #333333;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .airdrop {
            text-align: center;
            background-color: dimgrey;
            color: #ffffff;
            padding: 20px;
            border-radius: 10px;
        }
        .airdrop img {
            max-width: 100%;
        }
        .footer {
            text-align: center;
            padding: 20px;
        }
        .footer p {
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <a href="https://ladypepe.xyz" alt="Lady Pepe"><img src="https://ladypepe.xyz/images/logo.png" alt="Lady Pepe Logo"></a>
            <h1>Welcome to Lady Pepe Newsletter!</h1>
            <p>Lady Pepe Newsletter - October 2023</p>
        </div>
        <div class="section">
            <img src="https://ladypepe.xyz/images/newsletter.jpg" alt="Newsletter">
            <div class="section">
            <p>Thank you for subscribing to our newsletter and joining us on this exciting journey!</p>
            <p>You will soon be receiving updates about our progress, we invite you to join our social networks and follow us closely.</p>
        </div>
        </div>
        <div class="section">
            <p><h3>Connect with us on social media!</h3></p>
            <div class="social-icons">
                <a href="https://facebook.com/ladypepe" target="_blank"><img src="https://ladypepe.xyz/images/Facebook.png" alt="Facebook" width="50px"></a>
                <a href="https://twitter.com/ladypepe" target="_blank"><img src="https://ladypepe.xyz/images/twitter.png" alt="Twitter" width="50px"></a>
                <a href="https://t.me/ladypepe" target="_blank"><img src="https://ladypepe.xyz/images/Telegram.png" alt="Telegram" width="50px"></a>
                <a href="https://discord.gg/ladypepe" target="_blank"><img src="https://ladypepe.xyz/images/Discord.png" alt="Discord" width="50px"></a>
                <a href="https://linkedin.com/company/ladypepe" target="_blank"><img src="https://ladypepe.xyz/images/Linkedln.png" alt="LinkedIn" width="50px"></a>
                <a href="https://github.com/ladypepe" target="_blank"><img src="https://ladypepe.xyz/images/Github.png" alt="GitHub" width="50px"></a>
            </div>
            <p>Visit our website: <a href="https://ladypepe.xyz" target="_blank">https://ladypepe.xyz</a></p>
        </div>
        <div class="airdrop">
            <img src="https://ladypepe.xyz/images/odyssey.png" width="200px" alt="Exclusive Airdrop for Odyssey NFT Holders">
            <p>The Airdrop is Live! 50% of the total supply has been allocated for a giant launch. Claim your share of $500,000,000,000,000 LPEPE tokens!</p>
            <a href="https://ladypepe.xyz/airdrop" target="_blank" class="btn">Claim Airdrop</a>
        </div>
        <div class="footer">
            <p>Lady Pepe Team | Contact us: <a href="mailto:contact@ladypepe.xyz">contact@ladypepe.xyz</a></p>
        </div>
    </div>
</body>
</html>';




    try {
        $mail->send();
        return ["message" => "Welcome email sent successfully"];
    } catch (Exception $e) {
        return ["message" => "Error sending welcome email:" . $e->getMessage()];
    }
}
?>
