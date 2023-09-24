const submitButton = document.querySelector('input[type="submit"]');

submitButton.addEventListener('click', () => {
  submitButton.form.submit();
});
