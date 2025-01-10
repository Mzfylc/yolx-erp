document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123456") {
        window.location.href = "index.html";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});
