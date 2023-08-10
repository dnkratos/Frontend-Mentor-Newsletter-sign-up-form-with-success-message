# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

-   Add their email and submit the form
-   See a success message with their email after successfully submitting the form
-   See form validation messages if:
    -   The field is left empty
    -   The email address is not formatted correctly
-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

![](/newsletter-solution.png)

### Links

-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first Workflow
-   Vanilla JavaScript

### What I learned

```html
<h1>Newsletter Subscription Form</h1>
```

Used this in order to create a title for the body element without actually showing it on page which I believe it's useful for screenreaders or/and SEO.

```css
- form p span::before {
    content: "";

    font-size: 1.3rem;
    font-weight: 700;

    color: hsl(4, 100%, 67%);

    transition: all 0.3s ease-in-out;

    opacity: 0;
}
- form input:invalid:focus {
    color: hsl(4, 100%, 67%);
    background-color: hsl(4, 65%, 90%);

    border: 1px solid hsl(4, 100%, 67%);
}

- form input:invalid:focus ~ span::before {
    content: "Valid email required";

    font-size: 1.3rem;
    font-weight: 700;

    color: hsl(4, 100%, 67%);

    position: absolute;
    top: 0;
    right: 0;

    opacity: 1;
}
```

Learned how to create & display a custom element whenever there is an invalid input.

```js
const dismissBtn = document.querySelector(".succes button");
dismissBtn.addEventListener("click", function () {
    succesState.classList.add("hidden");
    main.classList.remove("hidden");

    succesState.innerHTML = "";
});
```

Struggled with this code for a bit because I was declaring the const before the element appeared on the page. This was extremly revealing.

### Continued development

In continuation I will pin down the JavaScript language. Learning it as my coding bible.
After this:

-   React & NextJS;

### Useful resources

-   [Example resource 1](https://www.w3resource.com/javascript/form/email-validation.php) - This Article helped me a lot in creating the validation for the email!

## Author

-   Frontend Mentor - [@dnkratos](https://www.frontendmentor.io/profile/dnkratos)
-   LinkedIn - [@dnkratos](https://www.linkedin.com/in/dnkratos/)
