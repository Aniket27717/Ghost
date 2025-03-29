<html><head></head><body>import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAkef4YRIeJSMpmL4Mm-Y5TOMG_sy0KVc4",
    authDomain: "chat-45809.firebaseapp.com",
    databaseURL: "https://chat-45809-default-rtdb.firebaseio.com",
    projectId: "chat-45809",
    storageBucket: "chat-45809.appspot.com",
    messagingSenderId: "110882798857",
    appId: "1:110882798857:web:98ba57db5c40588231a7d8",
    measurementId: "G-N4TZLZPGCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let isLogin = true;

document.getElementById("toggle-form").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent page refresh
    isLogin = !isLogin;
    document.getElementById("form-title").textContent = isLogin ? "Login" : "Sign Up";
    document.getElementById("auth-button").textContent = isLogin ? "Login" : "Sign Up";
    this.innerHTML = isLogin ? `Don't have an account? <a href="#">Sign Up</a>` : `Already have an account? <a href="#">Login</a>`;
});

document.getElementById("auth-button").addEventListener("click", async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = document.getElementById("status");

    if (!email || !password) {
        status.textContent = "Please enter email and password!";
        return;
    }

    try {
        if (isLogin) {
            await signInWithEmailAndPassword(auth, email, password);
            status.style.color = "green";
            status.textContent = "Login Successful!";
            setTimeout(() =&gt; window.location.href = "dashboard.html", 2000);
        } else {
            await createUserWithEmailAndPassword(auth, email, password);
            status.style.color = "green";
            status.textContent = "Sign Up Successful!";
        }
    } catch (error) {
        status.style.color = "red";
        status.textContent = error.message;
    }
});

document.getElementById("forgot-password").addEventListener("click", async function () {
    const email = document.getElementById("email").value;
    const status = document.getElementById("status");

    if (!email) {
        status.textContent = "Please enter your email to reset password.";
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        status.style.color = "green";
        status.textContent = "Password reset email sent! Check your inbox.";
    } catch (error) {
        status.style.color = "red";
        status.textContent = error.message;
    }
});
</body></html>