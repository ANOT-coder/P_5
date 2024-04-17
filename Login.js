<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>

<script>
    //  function to validate the password
    function validatePassword(password) {
        // Password should be at least 6 characters long
        if (password.length < 8) {
            return false;
        }
        return true;
    }

    // Function for form submission
    function Submit() {
        // Get user input
        var name = document.getElementById("name").value;
        var password = document.getElementById("password").value;

        // Validate password
        if (!validatePassword(password)) {
            alert("Password must be at least 8 characters long.");
            return false; // if criteria doesot meet prevents form submission
        }

        // If password is valid
        alert("Welcome, " + name + "!");
        return true; //if criteria  meets allows form submission
    }
</script>

<form onsubmit="return Submit()">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="password">Password:</label><br>
    <input type="password" id="password" name="password"><br><br>
    <input type="submit" value="Submit">
</form>

</body>
</html>
