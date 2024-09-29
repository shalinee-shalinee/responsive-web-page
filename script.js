const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignupBtn = document.getElementById('show-signup');
const showLoginBtn = document.getElementById('show-login');

showSignupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
    signupForm.classList.add('active');
});

showLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.remove('active');
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    loginForm.classList.add('active');
});
// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Retrieve input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex logic)
    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // You can add actual authentication logic here (e.g., API call)
    alert('Logged in as ${username}' ); // Display a message (for demonstration)
});