// Falling hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.querySelector('.falling-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 2000);

for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, Math.random() * 2000);
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navMenu.classList.remove('active');
    });
});

// Jumbotron background slider
const jumbotronBg = document.querySelector('.jumbotron-bg');
const jumbotronDescription = document.getElementById('jumbotron-description');
const jumbotronContent = [

    {
        image: 'photos/IMG-20240908-WA0146.jpg',
        description: 'Radio Presenter 📻'
    },
    {
        image: 'photos/IMG-20240920-WA0043.jpg',
        description: 'Voice of the Youth 🎤'
    },
    {
        image: 'photos/IMG-20240910-WA0550.jpg',
        description: 'Role Model 💃'
    },
    {
        image: 'photos/IMG-20240920-WA0042.jpg',
        description: 'Motivational Speaker 🎯'
    },
    {
        image: 'photos/IMG-20240920-WA0048.png',
        description: 'Lifist 🥰'
    }

];
let currentBgIndex = 0;

function changeBackground() {
    const { image, description } = jumbotronContent[currentBgIndex];
    jumbotronBg.style.backgroundImage = `url(${image})`;
    jumbotronBg.classList.add('active');
    jumbotronDescription.textContent = description;
    
    setTimeout(() => {
        jumbotronBg.classList.remove('active');
    }, 4000);

    currentBgIndex = (currentBgIndex + 1) % jumbotronContent.length;
}

changeBackground();
setInterval(changeBackground, 5000);


let currentIndex = 0;
const images = document.querySelectorAll('.photo');

images.forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });

    // Optional: Add a slight delay before starting animations
    setTimeout(function() {
        document.querySelectorAll('.photo-wrapper').forEach(function(wrapper) {
            wrapper.style.visibility = 'visible';
        });
    }, 200);
});

// Optional: Reinitialize AOS on window resize
window.addEventListener('resize', function() {
    AOS.refresh();
});

// Add to your existing JavaScript
document.querySelector('.see-more-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });
});
