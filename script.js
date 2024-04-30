window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var homeSection = document.getElementById('home');
    var navLinks = document.querySelectorAll('.nav-link');
  
    if (window.scrollY > homeSection.offsetHeight) {
      navbar.style.background = 'linear-gradient(to right, #2b5876, #4e4376)';
    } else {
      navbar.style.background = 'linear-gradient(to right, #6C5B7B, #355C7D)';
    }
  
    // Change background color to red when scrolled
    if (window.scrollY > 0) {
      navbar.style.background = 'red';
    }
  
    // Add active class to current nav link
    var fromTop = window.scrollY + navbar.offsetHeight + 10;
    navLinks.forEach(function(navLink) {
      if (!navLink.hash) return; // Skip empty hash values
      var section = document.querySelector(navLink.hash);
      if (
        section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  });
  