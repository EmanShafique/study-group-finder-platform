// For toggling login/signup (you’ll expand later)
document.addEventListener('DOMContentLoaded', () => {
  const toggleForm = document.getElementById('toggleForm');
  const formTitle = document.getElementById('formTitle');
  const authForm = document.getElementById('authForm');

  if (toggleForm) {
    toggleForm.addEventListener('click', () => {
      if (formTitle.textContent === 'Login') {
        formTitle.textContent = 'Signup';
        toggleForm.textContent = 'Login';
        authForm.querySelector('button').textContent = 'Signup';
      } else {
        formTitle.textContent = 'Login';
        toggleForm.textContent = 'Signup';
        authForm.querySelector('button').textContent = 'Login';
      }
    });
  }
});
