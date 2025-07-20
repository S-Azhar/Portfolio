
console.log('Hello World!');

// Nav bar
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});





// Array of image paths (make sure file names and folders are correct)
const images = [
  "Public/Image's/Azhar Shaikh Primary.jpg",
  "Public/Image's/Azhar Shaikh With Car.jpg",
  "Public/Image's/Azhar Shaikh With Grase.jpg",
  "Public/Image's/Azhar Shaikh With Tajmahal.jpg"
];

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



  
