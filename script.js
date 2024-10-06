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
        image: 'photos/IMG-20240908-WA0144.jpg',
        description: 'Voice of the Youth 🎤'
    },
    {
        image: 'photos/IMG-20240910-WA0550.jpg',
        description: 'Model 💃'
    },
    {
        image: 'photos/IMG-20240920-WA0042.jpg',
        description: 'Motivational Speaker 🎯'
    },
    {
        image: 'photos/IMG-20240920-WA0048.png',
        description: 'Lifist 🥰'
    },
    {
        image: 'photos/IMG-20240908-WA0146.jpg',
        description: 'Radio Presenter 📻'
    },
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

// Lightbox functionality
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

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

function closeLightbox() {
    modal.style.display = 'none';
}

closeBtn.onclick = closeLightbox;

// Close the lightbox when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        closeLightbox();
    }
}

// Navigate to previous image
function showPrevious() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Navigate to next image
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

prevBtn.onclick = showPrevious;
nextBtn.onclick = showNext;

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            showPrevious();
        } else if (e.key === 'ArrowRight') {
            showNext();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});