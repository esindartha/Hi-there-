// Function to toggle the accordion (show/hide content)
function toggleAccordion(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

// Hide the loading spinner once the page has fully loaded
window.onload = function() {
    document.body.classList.add('loaded');
    document.getElementById('loading-spinner').style.display = 'none'; // Hide spinner
};
