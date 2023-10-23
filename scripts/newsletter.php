<?php
$servername = "";
$username = ""; 
$password = ""; 
$database = ""; 

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die(" Database connection failed: " . $conn->connect_error);
}

if (isset($_POST['email'])) {
    $email = $_POST['email'];

    $checkSql = "SELECT * FROM ladypepe_users WHERE email = '$email'";
    $result = $conn->query($checkSql);

    if ($result->num_rows > 0) {
        $response = ["message" => "Oops! It looks like you have already subscribed."];
    } else {
        $sql = "INSERT INTO ladypepe_users (email) VALUES ('$email')";
        if ($conn->query($sql) === TRUE) {
            $response = ["message" => "Welcome to the Newsletter!"];

            require 'send.php';

            $result = sendWelcomeMail($email);

            $response = array_merge($response, $result);
        } else {
            $response = ["message" => "Failed to subscribe" . $conn->error];
        }
    }

    header("Content-Type: application/json");
    echo json_encode($response);
}

$conn->close();
?>
