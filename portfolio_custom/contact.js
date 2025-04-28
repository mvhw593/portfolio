// Initialize EmailJS
(function() {
    emailjs.init("BHbigDLR42OibxLxI"); // Replace with your Public Key
  })();
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    emailjs.sendForm('service_nwhjdea', 'template_eomyeyn', this)
      .then(function() {
        console.log('SUCCESS!');
        document.getElementById('form-message').style.display = 'block';
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.log('FAILED...', error);
        alert('Oops! Something went wrong.');
      });
  });


