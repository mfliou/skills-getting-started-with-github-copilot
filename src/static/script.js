// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".dark-mode-toggle");

  // Check if the button exists
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Update button text based on mode
      if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "Light Mode";
      } else {
        toggleButton.textContent = "Dark Mode";
      }
    });
  }
});
