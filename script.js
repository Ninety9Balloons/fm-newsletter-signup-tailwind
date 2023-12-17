const form = document.getElementById("form");
const btn = document.getElementById("button");
const email = document.getElementById("email");
const error = document.getElementById("error");
const dismissBtn = document.getElementById("dismiss-btn");
const modal = document.getElementById("modal");
const modalEmail = document.getElementById("modal-email");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    validateInput();
});

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInput = () => {
    const emailValue = email.value.trim();

    if (!isValidEmail(emailValue)) {
        error.textContent = "Valid email required";
        email.classList.add("border-tomato", "text-red-800", "bg-red-100");
    } else {
        modalEmail.textContent = emailValue;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
};

dismissBtn.onclick = function () {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    error.textContent = "";
    email.value = "";
    email.classList.remove("error");
};
