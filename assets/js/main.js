const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const initialContent = document.getElementById('initial-content');
const successContent = document.getElementById('success-content');
const dismissButton = document.getElementById('dismiss-button');
const emailAddress = document.getElementById('email-address');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  // Reset previous errors
  emailInput.classList.remove('error');
  emailError.textContent = '';
  emailError.classList.remove('error');

  if (!emailInput.checkValidity()) {

    emailInput.classList.add('error');
    emailError.classList.add('error');

    if (emailInput.validity.valueMissing || emailInput.validity.typeMismatch) {
      emailError.textContent = 'Valid email required';
      return;
    }
  }

  emailAddress.textContent = emailInput.value;
  initialContent.classList.add('hidden');
  successContent.classList.remove('hidden');
});

dismissButton.addEventListener('click', function () {
  initialContent.classList.remove('hidden');
  successContent.classList.add('hidden');
  emailInput.value = '';
})