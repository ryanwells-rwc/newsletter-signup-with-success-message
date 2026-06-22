# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/ryanwells-rwc/newsletter-signup-with-success-message)
- Live Site URL: [Netlify](https://newsletter-signup-rwc.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use vanilla javascript to add form validation. I also 
learned how to use the `classList` property to add and remove classes on 
elements, for instance to display a success message when the form is submitted.

```js
if (!emailInput.checkValidity()) {

  emailInput.classList.add('error');
  emailError.classList.add('error');

  if (emailInput.validity.valueMissing || emailInput.validity.typeMismatch) {
    emailError.textContent = 'Valid email required';
    return;
  }
}
```

### Continued development

In the future I plan to use a third party form validation library to make the form validation more robust.

## Author

- Website - [Ryan Wells](https://ryanwells.io)
- Frontend Mentor - [@ryanwells-rwc](https://www.frontendmentor.io/profile/ryanwells-rwc)
