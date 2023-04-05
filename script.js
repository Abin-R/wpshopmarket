
window.addEventListener('scroll', function() {
    // Code to handle the scroll event
  });
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  