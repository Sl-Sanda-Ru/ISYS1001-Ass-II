
document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Get form fields
    var nameField = document.getElementById('name');
    var emailField = document.getElementById('email');
    var messageField = document.getElementById('message');

    // Check if any field is empty
    if (nameField.value === '' || emailField.value === '' || messageField.value === '') {
        alert('Please fill out all fields.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Success message
    alert('Form submitted successfully!');
});
// JavaScript to open the default email client with the specified email address
document.getElementById("send").onclick = function () {
    window.location.href = "mailto:techmax@scu.edu.au";
};
