function validateForm() {
    
    
    
    // Get all input fields of relevant types
    let inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"]');
    // Get the container for password error messages
    let passwordErrorContainer = document.getElementById('passwordErrorContainer');
    let hasError = false;
 
    // Remove previous error messages and red borders
    passwordErrorContainer.innerHTML = '';
    inputs.forEach(input => input.classList.remove('error-input'));
 
    // Check each input field for empty values
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('error-input'); // Add red border to empty fields
            hasError = true; // Set error flag if any field is empty
        }
    });
 
    // If any field is empty, show an alert and stop form submission
    if (hasError) {
        alert('Please fill in all fields!');
        return false;
    }
 
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
 
    // Validate password length
    if (password.length < 8) {
        let errorMessage = document.createElement('p');
        errorMessage.textContent = 'Password too short!';
        errorMessage.classList.add('error-message');
        passwordErrorContainer.appendChild(errorMessage);
        document.getElementById('password').classList.add('error-input'); // Add red border to password field
        return false;
    }
 
    // Validate password and confirm password match
    if (password !== confirmPassword) {
        let errorMessage = document.createElement('p');
        errorMessage.textContent = 'Passwords do not match!';
        errorMessage.classList.add('error-message');
        passwordErrorContainer.appendChild(errorMessage);
        document.getElementById('password').classList.add('error-input'); // Add red border to password field
        document.getElementById('confirmPassword').classList.add('error-input'); // Add red border to confirm password field
        return false;
    }
 
    // If all validations pass, you can proceed with form submission or further processing
    // Example: document.getElementById('signup-form').submit();
 }
 