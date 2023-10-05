document.addEventListener("DOMContentLoaded", function() {
  const projectButton = document.querySelector(".Project");

  if (projectButton) {
    projectButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const projectSection = document.getElementById("project");
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});
// Function to scroll to the "CONTACT" section
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

