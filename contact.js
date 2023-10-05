document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Get form data
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Send form data to your server
      fetch('/receive-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Display a success message or redirect the user
          alert('Message sent successfully!');
        } else {
          // Handle the case where the message failed to send
          alert('Message sending failed. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
      });
    });
  }
});
