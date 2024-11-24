 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send this data to a server
  console.log('Form submitted:', { name, email, message });
  
  // Clear form
  this.reset();
  alert('Thank you for your message! I will get back to you soon.');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  } else {
      navbar.style.backgroundColor = '#fff';
      navbar.style.boxShadow = 'none';
  }
});