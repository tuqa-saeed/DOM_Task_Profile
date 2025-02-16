document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');

    loginButton.disabled = true;

    function validateInputs() {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

    usernameInput.addEventListener('input', validateInputs);
    passwordInput.addEventListener('input', validateInputs);

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            window.location.href = 'profile.html';
        } else {
            alert('Invalid username or password!');
        }
    });
});
