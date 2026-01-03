// Get form elements
const loginForm = document.querySelector('.login-form');
// const signupForm = document.querySelector('.signup-form');
// const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');

// Toggle between login and signup forms
// showSignupLink.addEventListener('click', function(e) {
//     e.preventDefault();
//     loginForm.classList.remove('active');
//     signupForm.classList.add('active');
// });

// showLoginLink.addEventListener('click', function(e) {
//     e.preventDefault();
//     signupForm.classList.remove('active');
//     loginForm.classList.add('active');
// });


// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('loginUserame').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Basic validation
    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // send data to the server here
    console.log('Login attempt:', {
        username: username,
        password: password,
        rememberMe: rememberMe
    });
    
    alert('Login successful! (This is a demo)');
    
    // Clear form
    this.reset();
});

// Handle signup form submission
// document.getElementById('signupForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const name = document.getElementById('signupName').value;
//     const email = document.getElementById('signupEmail').value;
//     const password = document.getElementById('signupPassword').value;
//     const confirmPassword = document.getElementById('signupConfirmPassword').value;
//     const agreeTerms = document.getElementById('agreeTerms').checked;
    
//     // Basic validation
//     if (!name || !email || !password || !confirmPassword) {
//         alert('Please fill in all fields');
//         return;
//     }
    
//     // Email validation
//     if (!isValidEmail(email)) {
//         alert('Please enter a valid email address');
//         return;
//     }
    
//     // Password match validation
//     if (password !== confirmPassword) {
//         alert('Passwords do not match');
//         return;
//     }
    
//     // Password strength validation
//     if (password.length < 6) {
//         alert('Password must be at least 6 characters long');
//         return;
//     }
    
//     // Terms agreement validation
//     if (!agreeTerms) {
//         alert('Please agree to the Terms & Conditions');
//         return;
//     }
    
//     // Here you would typically send data to your server
//     console.log('Signup attempt:', {
//         name: name,
//         email: email,
//         password: password
//     });
    
//     alert('Account created successfully! (This is a demo)');
    
//     // Clear form and switch to login
//     this.reset();
//     signupForm.classList.remove('active');
//     loginForm.classList.add('active');
// });

// // Email validation function
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// // Add real-time password match indicator for signup
// document.getElementById('signupConfirmPassword').addEventListener('input', function() {
//     const password = document.getElementById('signupPassword').value;
//     const confirmPassword = this.value;
    
//     if (confirmPassword.length > 0) {
//         if (password === confirmPassword) {
//             this.style.borderColor = '#4caf50';
//         } else {
//             this.style.borderColor = '#f44336';
//         }
//     } else {
//         this.style.borderColor = '#e0e0e0';
//     }
// });