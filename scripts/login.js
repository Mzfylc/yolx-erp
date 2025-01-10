
document.getElementById("login-button").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basit kullanıcı doğrulama
    if (username === "admin" && password === "123456") {
        // Giriş başarılı, ana sayfaya yönlendirme
        window.location.href = "index.html";
    } else {
        // Hatalı giriş, hata mesajı göster
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
});
