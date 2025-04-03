// Function to toggle accordion content visibility
function toggleAccordion(contentId) {
  const content = document.getElementById(contentId);
  
  // Toggle the display between 'none' (hidden) and 'block' (visible)
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

// Function to handle the café submission form and display the result
document.getElementById('cafeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get the user's input from the text box
  const userCafé = document.getElementById('userCafé').value;

  // Display the user's submitted café and show the thank you message
  document.getElementById('userCaféResponse').innerText = userCafé;
  document.getElementById('response').style.display = 'block'; // Show the response section

  // Optionally, clear the input field after submission
  document.getElementById('userCafé').value = '';
});
