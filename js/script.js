"use strict";

const submitBtn = document.querySelector("form button");
const emailInput = document.querySelector("#email");
const main = document.querySelector("main");

const dialogElement = document.querySelector("dialog");
const dismissBtn = document.querySelector("dialog.succes button");

const validateEmail = function (inputText) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputText.value.match(mailformat)) {
        return true;
    } else {
        return false;
    }
};

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (emailInput.value === "" || emailInput.value === null) {
        emailInput.focus();
    }

    if (validateEmail(emailInput)) {
        main.classList.add("hidden");
        dialogElement.showModal();

        emailInput.value = "";
    } else {
        emailInput.value = "";
        emailInput.focus();
        console.log("invalid email");
    }
});

dismissBtn.addEventListener("click", function () {
    dialogElement.close();
    main.classList.remove("hidden");
});
