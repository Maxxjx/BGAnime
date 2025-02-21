if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registered:', registration.scope);
      })
      .catch(error => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

// navbar-background-change
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 630 || document.documentElement.scrollTop > 630) {
    document.getElementById("nav-bar").style.backgroundColor="black";
  } else {
    document.getElementById("nav-bar").style.backgroundColor="transparent";
  }
} 
//----------------- Login-Logout -------------------

// Close login modal
function logout() {
    document.getElementById('full-card').style.display = 'none';
}

// Login modal functionality
function toggleLogin() {
    const loginCard = document.getElementById('full-card');
    loginCard.style.display = loginCard.style.display === 'none' ? 'block' : 'none';
}

// Form submission
function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Add your login logic here
    console.log('Login attempt:', { email, password });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Hide login form initially
    document.getElementById('full-card').style.display = 'none';
    
    // Add form submit handler
    document.querySelector('.card').addEventListener('submit', handleSubmit);
    
    // Close modal when clicking outside
    document.getElementById('full-card').addEventListener('click', function(e) {
        if (e.target === this) {
            logout();
        }
    });
});

// -------------------nav-bar---------------------------

window.screenY=function(){navbar()};
function navbar(){
  let x=window.innerWidth
  document.getElementById("nav-opicon").style.display="block";
  document.getElementById("nav-clicon").style.display="none";
if(x>600){
  document.getElementById("nav-opicon").style.display="none";
  document.getElementById("nav-clicon").style.display="none";
}
}
function  openMenu(){
  document.getElementById("nav").style.display="block";
  document.getElementById("body").style.overflow="hidden";
  document.getElementById("nav-opicon").style.display="none";
  document.getElementById("nav-clicon").style.display="block";
  // document.getElementById("wel-card").style.display="none";
}
function  closeMenu(){
  document.getElementById("body").style.overflow="auto";
  document.getElementById("nav").style.display="none";
  document.getElementById("nav-opicon").style.display="block";
  document.getElementById("nav-clicon").style.display="none";
  // document.getElementById("wel-card").style.display="block";
}

function handleError(error) {
  console.error('Error:', error);
  const errorContainer = document.createElement('div');
  errorContainer.className = 'error-message';
  errorContainer.innerHTML = `
      <p>Something went wrong. Please try again.</p>
      <button onclick="this.parentElement.remove()">Dismiss</button>
  `;
  document.body.appendChild(errorContainer);
}

// Check for browser support
if ('IntersectionObserver' in window) {
  // Lazy load images
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              imageObserver.unobserve(img);
          }
      });
  });
  images.forEach(img => imageObserver.observe(img));
}
