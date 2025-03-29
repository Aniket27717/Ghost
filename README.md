<!doctype html>
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Firebase Authentication</title> 
    <!-- Link to the external CSS file -->
    <link rel="stylesheet" href="https://raw.githubusercontent.com/Aniket27717/Ghost/main/style.css">
</head> 
<body> 
    <div class="container"> 
        <h2 id="form-title">Login</h2> 
        <input type="email" id="email" placeholder="Enter Email"> 
        <input type="password" id="password" placeholder="Enter Password"> 
        <button id="auth-button">Login</button> 
        <p id="toggle-form">Don't have an account? <a href="#">Sign Up</a></p> 
        <p><a href="#" id="forgot-password">Forgot Password?</a></p> 
        <p id="status" style="color: red;"></p> 
    </div> 

    <!-- Link to the external JS file -->
    <script type="module" src="script.js" defer></script>
</body>
</html>
