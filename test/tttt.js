document.getElementById('registrationForm').addEventListener('input', function() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const acceptTerms = document.getElementById('acceptTerms').checked;
    
    const isFormValid = fullName && email && password && confirmPassword && phoneNumber && acceptTerms;
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#\$%\^&\*]/.test(password);
    const arePasswordsMatching = password === confirmPassword;
    
    if (isFormValid && isEmailValid && isPasswordValid && arePasswordsMatching) {
        document.getElementById('registerButton').disabled = false;
    } else {
        document.getElementById('registerButton').disabled = true;
    }
});

function register() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        id: Date.now(),
        fullName: fullName,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert('Registration successful!');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem(email));
    
    if (user && user.password === password) {
        sessionStorage.setItem('currentUser', JSON.stringify({ id: user.id, fullName: user.fullName }));
        alert('Login successful!');
        // Redirect to the profile page (example: profile.html)
        window.location.href = 'profile.html';
    } else {
        alert('Login failed! Please check your email and password.');
    }
}
