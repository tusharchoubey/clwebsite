// Get necessary elements
const loginButtons = document.querySelectorAll(".login-button, .login-signup-btn"); // Desktop and mobile buttons
const modal = document.getElementById("lmodal");
const closeModalButton = document.querySelector(".closebtn");
const modalOverlay = document.createElement('div'); // Modal overlay element
const menuButton = document.querySelector(".menu-button");
const mobileNavbar = document.querySelector(".mobile-navbar");

// Create the modal overlay and append it to the body
modalOverlay.style.position = "fixed";
modalOverlay.style.top = "0";
modalOverlay.style.left = "0";
modalOverlay.style.width = "100%";
modalOverlay.style.height = "100%";
modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
modalOverlay.style.zIndex = "999"; // Just below the modal
modalOverlay.style.display = "none"; // Hidden initially
document.body.appendChild(modalOverlay);

// Function to open the modal
const openModal = () => {
    modal.style.display = "block";
    modalOverlay.style.display = "block"; // Show overlay
    document.body.classList.add("modal-open"); // Disable scrolling
};

// Function to close the modal
const closeModal = () => {
    modal.style.display = "none";
    modalOverlay.style.display = "none"; // Hide overlay
    document.body.classList.remove("modal-open"); // Enable scrolling
};

// Add event listeners to all login buttons (desktop and mobile)
loginButtons.forEach((btn) => {
    btn.addEventListener("click", openModal);
});

// Close modal when clicking the overlay
modalOverlay.addEventListener("click", closeModal);

// Close modal when clicking the close button
closeModalButton.addEventListener("click", closeModal);

// Toggle mobile navbar visibility
menuButton.addEventListener("click", () => {
    mobileNavbar.classList.toggle("show");
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
        closeModal();
    }
});
