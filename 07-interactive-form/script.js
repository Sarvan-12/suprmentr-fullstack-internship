// Grab the form
const form = document.getElementById('signup-form');

// When the form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault(); // stop page from reloading

    // Run all validations
    const isValid = validateForm();

    // If everything passed, show success
    if (isValid) {
        document.getElementById('success-msg').classList.remove('hidden');
        form.reset(); // clear the form
    }
});

// ── Main validation function ──────────────────────────
function validateForm() {
    let allGood = true;

    // Hide success message on every new attempt
    document.getElementById('success-msg').classList.add('hidden');

    // 1. Validate Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('name', 'name-error', '❌ Name cannot be empty.');
        allGood = false;
    } else {
        clearError('name', 'name-error');
    }

    // 2. Validate Email
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        showError('email', 'email-error', '❌ Email cannot be empty.');
        allGood = false;
    } else if (!email.includes('@')) {
        showError('email', 'email-error', '❌ Email must contain @.');
        allGood = false;
    } else {
        clearError('email', 'email-error');
    }

    // 3. Validate Password
    const password = document.getElementById('password').value;
    if (password === '') {
        showError('password', 'password-error', '❌ Password cannot be empty.');
        allGood = false;
    } else if (password.length < 6) {
        showError('password', 'password-error', '❌ Password must be at least 6 characters.');
        allGood = false;
    } else {
        clearError('password', 'password-error');
    }

    // 4. Validate Dropdown
    const role = document.getElementById('role').value;
    if (role === '') {
        showError('role', 'role-error', '❌ Please select a role.');
        allGood = false;
    } else {
        clearError('role', 'role-error');
    }

    // 5. Validate Checkbox
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('terms-error').textContent = '❌ You must agree to the Terms & Conditions.';
        allGood = false;
    } else {
        document.getElementById('terms-error').textContent = '';
    }

    return allGood;
}

// ── Helper: show error ────────────────────────────────
function showError(inputId, errorId, message) {
    document.getElementById(inputId).classList.add('invalid');
    document.getElementById(errorId).textContent = message;
}

// ── Helper: clear error ───────────────────────────────
function clearError(inputId, errorId) {
    document.getElementById(inputId).classList.remove('invalid');
    document.getElementById(errorId).textContent = '';
}