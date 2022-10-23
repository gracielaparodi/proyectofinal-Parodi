

function saveData() {
    let name, email, password;
    name = document.getElementById("username-field").value;
    email = document.getElementById("email-field").value;
    password = document.getElementById("password-field").value;

    localStorage.setItem("username-field", name)
    localStorage.setItem("email-field", email)
    localStorage.setItem("password-field", password)
}

