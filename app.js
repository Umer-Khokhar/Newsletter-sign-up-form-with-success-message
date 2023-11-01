const mainSection = document.getElementById("main");
const successSection = document.getElementById("success");
const errorMsg = document.getElementById("error");
const btn = document.getElementById("btn");
const dismissBtn = document.getElementById("dismiss-btn");
const emailInput = document.getElementById("email");

function emailValidation(email) {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
}

btn.addEventListener("click", () => {
    const email = emailInput.value.trim(); // Remove leading/trailing spaces
    if (emailValidation(email)) {
        mainSection.classList.add('inactive');
        successSection.classList.add('active');
    } else {
        emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
        emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
        errorMsg.style.color = 'hsl(4, 100%, 67%)';
        errorMsg.style.fontWeight = "bold";
        errorMsg.textContent = "Valid email required";
    }
});

emailInput.addEventListener("input", () => {
    // Clear the red border and error message when the user starts typing
    emailInput.style.border = "1px solid hsl(233, 9%, 81%)";
    emailInput.style.backgroundColor = "transparent";
    errorMsg.textContent = "";
});

dismissBtn.addEventListener("click", () => {
    mainSection.classList.remove('inactive');
    successSection.classList.remove('active');
    emailInput.value = ""
    
});
