// Navigation
function navigateTo(page) {
    // Code to navigate to the specified page
  }
  
  // Add event listeners to the navigation links
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const page = event.target.getAttribute("href");
      navigateTo(page);
    });
  });
  
  // Interaction
  const button = document.querySelector("button");
  button.addEventListener("click", event => {
  });