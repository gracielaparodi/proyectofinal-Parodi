function saveData() {
    let name, email, subject, message;
    name = document.getElementById("username-field").value;
    email = document.getElementById("email-field").value;
    subject = document.getElementById("subject-field").value;
    message = document.getElementById("message-field").value;

    localStorage.setItem("username-field", name)
    localStorage.setItem("email-field", email)
    localStorage.setItem("subject-field", subject)
    localStorage.setItem("message-field", message)

}