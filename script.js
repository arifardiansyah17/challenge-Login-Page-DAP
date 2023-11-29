function checkLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "Muhammad Arif Ardiansyah" && password === "225150601111003") {
        alert("Login berhasil");
    } else {
        alert("Login gagal");
    }
}