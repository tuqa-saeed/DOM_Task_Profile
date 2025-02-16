document.addEventListener('DOMContentLoaded', function() {
    const displayUsername = document.getElementById('displayUsername');
    const editProfileButton = document.getElementById('editProfileButton');
    const editProfileForm = document.getElementById('editProfileForm');
    const updateForm = document.getElementById('updateForm');
    const cancelButton = document.getElementById('cancelButton');
    const logoutButton = document.getElementById('logoutButton');

    const username = localStorage.getItem('username');
    if (username) {
        displayUsername.textContent = username;
    } else {
        window.location.href = 'index.html'; // Redirect to login if no user is logged in
    }

    editProfileButton.addEventListener('click', function() {
        editProfileForm.style.display = 'block';
    });

    cancelButton.addEventListener('click', function() {
        editProfileForm.style.display = 'none';
    });

    updateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsernameInput = document.getElementById('newUsername');
        const newPasswordInput = document.getElementById('newPassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        const newUsername = newUsernameInput.value.trim();
        const newPassword = newPasswordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (newPassword === confirmPassword) {
            localStorage.setItem('username', newUsername);
            localStorage.setItem('password', newPassword);
            displayUsername.textContent = newUsername;
            editProfileForm.style.display = 'none';
            alert('Profile updated successfully!');
        } else {
            alert('Passwords do not match!');
        }
    });

    logoutButton.addEventListener('click', function() {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        window.location.href = 'index.html'; // Redirect to login page
    });
});
