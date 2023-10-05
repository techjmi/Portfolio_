const textArray = ["MERN Developer", "Software Developer"];
const typewriter = document.querySelector('.typewriter span');

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = textArray[textIndex];

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeText, 1000); // Wait after typing
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // Switch to the next text
    setTimeout(typeText, 500); // Wait after deleting
  } else {
    setTimeout(typeText, 100); // Continue typing/deleting
  }
}

typeText();
