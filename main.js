// Show "Hello World!" in the console
console.log('Hello World!');



// Array of image paths (make sure file names and folders are correct)
const images = [
  "Public/Image's/Azhar Shaikh Primary.jpg",
  "Public/Image's/Azhar Shaikh With Car.jpg",
  "Public/Image's/Azhar Shaikh With Blue Sky.jpg",
  "Public/Image's/Azhar Shaikh With Grase.jpg",
  "Public/Image's/Azhar Shaikh With Tajmahal.jpg"
];

// Pick a random image from the array
const randomImage = images[Math.floor(Math.random() * images.length)];

// Set the image source to the random image
document.getElementById("random-image").src = randomImage;

// Navbar link scroll without adding history
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


window.onload = function() {
  const navList = document.getElementById("Nav-list");
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.getElementById("navbar");
  
  function toggleMenu() {
    navList.classList.toggle("show");
    menuToggle.textContent = navList.classList.contains("show") ? "✖" : "☰";
  }
  
  menuToggle.onclick = toggleMenu;
  
 // Close navbar when clicking outside
  document.addEventListener("click", function(e) {
    if (!navbar.contains(e.target)) {
      navList.classList.remove("show");
      menuToggle.textContent = "☰";
    }
  });
  
  // Smooth scroll navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navList.classList.remove("show");
      menuToggle.textContent = "☰";
    });
  });
};