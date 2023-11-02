
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
var_dump($_POST);

// Establish a database connection (if not already done)
$conn = new mysqli('localhost', 'root', 'root', 'my_database');

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the email and password from the form
    $email = $_POST["email"];
    $password = password_hash($_POST['psw'], PASSWORD_DEFAULT);

    // Insert $email and $password into the database
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

    if ($conn->query($sql) === TRUE) {
        // New record created successfully
        echo "New record created successfully";
    } else {
        // Handle errors
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection (if not using a persistent connection)
    $conn->close();
}
?>
