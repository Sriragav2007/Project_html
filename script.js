// Contact Form Submission Handling (for demonstration)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}! We will get back to you soon.`);
        document.getElementById('contact-form').reset(); // Clear form after submission
    } else {
        alert('Please fill in all fields.');
    }
});


