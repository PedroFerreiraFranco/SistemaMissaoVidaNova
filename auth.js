// auth.js
document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o usuário está logado
    if (sessionStorage.getItem("loggedIn") !== "true") {
        alert("Você precisa estar logado para acessar esta página.");
        window.location.href = "login.html";
    }
});
