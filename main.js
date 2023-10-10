document.addEventListener('DOMContentLoaded', () => {
  const firstNameInput = document.getElementById('firstname');
  const lastNameInput = document.getElementById('lastname');
  const contactInput = document.getElementById('contact');
  const emailInput = document.getElementById('email');
  const genderSelect = document.getElementById('gender');
  const checkboxes = document.querySelectorAll('input[name="hobbies"]');
  const submitButton = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');

  const validateForm = () => {
    const isValid = 
      firstNameInput.validity.valid &&
      lastNameInput.validity.valid &&
      contactInput.validity.valid &&
      emailInput.validity.valid &&
      genderSelect.validity.valid &&
      Array.from(checkboxes).some(checkbox => checkbox.checked);

    submitButton.disabled = !isValid;
  };

  firstNameInput.addEventListener('input', validateForm);
  lastNameInput.addEventListener('input', validateForm);
  contactInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  genderSelect.addEventListener('input', validateForm);
  checkboxes.forEach(checkbox => checkbox.addEventListener('input', validateForm));

  document.getElementById('successMessage').addEventListener('submit', (event) => {
    event.preventDefault();
    const successText = 'Form submitted successfully!';
    successMessage.innerText = successText;
    successMessage.classList.remove('hidden');
  });
});
