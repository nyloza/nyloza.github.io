// Function to load the page
function loadPage(page, event = null) {
    if (event) event.preventDefault();

    // Push the new state to the history
    history.pushState({ page }, "", page === "/" ? "/" : "/" + page);

    // Redirect to the new page
    if (page === "/") {
        location.href = "/";  // For home (index), just redirect to the root
    } else {
        location.href = page + ".html";  // For other pages, append .html
    }
}


// Create the cursor image element dynamically
function createCursor() {
    const cursor = document.createElement("img");
    cursor.id = "cursor";
    cursor.src = "images/sushi.png";
    cursor.alt = "Cursor";
    document.body.appendChild(cursor);

    const offsetX = 20;
    const offsetY = 20;

    // Move the cursor element based on mouse movement
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX + offsetX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${e.pageY + offsetY - cursor.offsetHeight / 2}px`;
        cursor.style.visibility = 'visible'; // Ensure it’s visible when moving
    });

    // Hide the cursor when hovering over the navigation
    document.querySelector('nav').addEventListener('mouseover', () => {
        cursor.style.visibility = 'hidden';
    });

    // Show the cursor when leaving the navigation
    document.querySelector('nav').addEventListener('mouseout', () => {
        cursor.style.visibility = 'visible';
    });
}

// Ensure cursor is created when the page is loaded
createCursor();

// Carousel Logic
const container = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % totalItems;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + totalItems) % totalItems;
    updateCarousel();
});

function updateCarousel() {
    container.style.transform = `translateX(-${index * 100}%)`;
}
