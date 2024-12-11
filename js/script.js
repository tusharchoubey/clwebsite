//counter section
// Select all counters
const counters = document.querySelectorAll('.counter span');

// Animation duration (in milliseconds)
const animationDuration = 2000;

// Function to animate counters
function animateCounters() {
    counters.forEach(counter => {
        counter.innerText = '0'; // Reset counter to 0
    });

    const startTime = performance.now();

    function updateAllCounters(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / animationDuration, 1); // Cap progress at 1

        counters.forEach(counter => {
            const target = +counter.getAttribute('data-count'); // Target number
            const current = Math.floor(target * progress); // Calculate the current value
            counter.innerText = current; // Update the text
        });

        if (progress < 1) {
            requestAnimationFrame(updateAllCounters); // Continue animation
        }
    }

    requestAnimationFrame(updateAllCounters);
}

// Function to check if counters are in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Attach scroll event to trigger the animation once
let hasAnimated = false;

function onScroll() {
    if (!hasAnimated && isInViewport(counters[0])) {
        animateCounters();
        hasAnimated = true; // Prevent multiple animations
    }
}

window.addEventListener('scroll', onScroll);

// Initial check in case counters are already visible
onScroll();



// alumini-success-card
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const cards = Array.from(carouselTrack.children);

    let currentIndex = 0;
    const cardWidth = cards[0].getBoundingClientRect().width;
    const totalCards = cards.length;
    const visibleCards = 4; // Adjust based on how many cards are visible at once

    // Position the carousel at the starting position
    carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    function moveCarousel() {
        currentIndex++;

        // Apply the sliding effect
        carouselTrack.style.transition = 'transform 0.5s ease-in-out';
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Loop back to the start (instant transition)
        if (currentIndex === totalCards - visibleCards) {
            setTimeout(() => {
                carouselTrack.style.transition = 'none'; // Disable transition for seamless looping
                currentIndex = 0; // Reset index
                carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }, 500); // Wait for the slide transition to complete
        }
    }

    // Auto-slide every 3 seconds
    setInterval(moveCarousel, 3000);
});
