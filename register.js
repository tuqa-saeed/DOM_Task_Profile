document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');
    const registerForm = document.getElementById('registerForm');
    const newUsernameInput = document.getElementById('newUsername');
    const newPasswordInput = document.getElementById('newPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    function validateInputs() {
        if (newUsernameInput.value.trim() !== '' && newPasswordInput.value.trim() !== '' && confirmPasswordInput.value.trim() !== '') {
            registerButton.disabled = false;
        } else {
            registerButton.disabled = true;
        }
    }

    newUsernameInput.addEventListener('input', validateInputs);
    newPasswordInput.addEventListener('input', validateInputs);
    confirmPasswordInput.addEventListener('input', validateInputs);

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = newUsernameInput.value.trim();
        const password = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password === confirmPassword) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Registration successful! You can now log in.');
            window.location.href = 'index.html';
        } else {
            alert('Passwords do not match!');
        }
    });
});
