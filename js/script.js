"use strict";

const submitBtn = document.querySelector("form button");
const emailInput = document.querySelector("#email");
const main = document.querySelector("main");
const succesState = document.querySelector(".succes");

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

    const markup = `<div>
                        <figure>
                             <img src="assets//images/icon-success.svg" alt="" />
                        </figure>
                        <h2>Thanks for subscribing!</h2>
                        <p>A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.</p>
                    </div>
                        <button>Dismiss message</button>`;

    if (emailInput.value === "" || emailInput.value === null) {
        emailInput.focus();
    }

    if (validateEmail(emailInput)) {
        main.classList.add("hidden");

        succesState.classList.remove("hidden");
        succesState.insertAdjacentHTML("afterbegin", markup);

        emailInput.value = "";

        const dismissBtn = document.querySelector(".succes button");
        dismissBtn.addEventListener("click", function () {
            succesState.classList.add("hidden");
            main.classList.remove("hidden");

            succesState.innerHTML = "";
        });
    } else {
        emailInput.value = "";
        emailInput.focus();
        console.log("invalid email");
    }
});
