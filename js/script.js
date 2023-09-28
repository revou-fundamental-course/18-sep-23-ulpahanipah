document.getElementById("button").addEventListener("click", function() {
    let name = document.forms['content-form']['your-name'].value;
    let email = document.forms['content-form']['email'].value;
    let interest = document.forms['content-form']['interest'].value;

    if (!name) {
        document.getElementById("name-error").innerText = "Name cannot be blank";
    }
    
    if (!email) {
        document.getElementById("email-error").innerText = "Email cannot be blank";
    }
    
    if (!interest) {
        document.getElementById("interest-error").innerText = "Interest cannot be blank";
    }
})
