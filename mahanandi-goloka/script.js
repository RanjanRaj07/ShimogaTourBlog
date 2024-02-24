const firstPage = document.querySelector('.first-page')
const secondPage = document.querySelector('.second-page')
const title = document.getElementsByClassName('title')

// Function to change background image opacity
function changeOpacity(scrollY) {
    const maxOpacity = 1; // Maximum opacity (background fully visible)
    const minOpacity = 0; // Minimum opacity (background fully transparent)
    
    
    // Calculate opacity based on scroll position
    const opacity = 1 - (scrollY / (firstPage.clientHeight ));
    
    // Ensure opacity stays within the specified range
    const clampedOpacity = Math.min(maxOpacity, Math.max(minOpacity, opacity));

    // Apply the opacity to the background image
    firstPage.style.opacity = opacity;
}

// Function to scroll to the next page
function scrollToNextPage() {
    const nextPageTop = secondPage.offsetTop;
    window.scrollTo({
        top: nextPageTop,
        left: 0,
        behavior: 'auto', // Instant scroll without smooth scrolling
    });
}

// Function to scroll back to the first page
function scrollToFirstPage() {
    const firstPageTop = firstPage.offsetTop
    window.scrollTo({
        top: firstPageTop,
        left: 0,
        behavior: 'auto', // Instant scroll without smooth scrolling
    });
}

// Variable to keep track of scroll direction
let prevScrollY = window.scrollY;
let scrollingDown = true;
let page1scroll = firstPage.clientHeight - window.innerHeight
// Listen for scroll events
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    // Check the scroll direction
    if (scrollY > prevScrollY) {
        // Scrolling down
        scrollingDown = true;
        changeOpacity(scrollY);
    } else {
        // Scrolling up
        scrollingDown = false;
        changeOpacity(scrollY);
        // Check if you're at the top of the page
        if (prevScrollY === firstPage.clientHeight/2) {
            scrollToFirstPage();
        }
    }

    // Update the previous scroll position
    prevScrollY = scrollY;
});
