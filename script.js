// Change text content dynamically
const changeTextButton = document.getElementById('changeTextButton');
const contentParagraph = document.getElementById('content');

changeTextButton.addEventListener('click', function() {
    contentParagraph.textContent = "This text was changed dynamically using JavaScript!";
});

// Modify CSS styles via JavaScript
const styleButton = document.getElementById('styleButton');
const styledText = document.getElementById('styledText');

styleButton.addEventListener('click', function() {
    styledText.classList.toggle('newStyle'); // Toggles the 'newStyle' class on click
});

// Add/Remove an element when the button is clicked
const toggleElementButton = document.getElementById('toggleElementButton');
const elementContainer = document.getElementById('elementContainer');

toggleElementButton.addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a newly added element!';
    
    // Check if the element already exists and remove it, otherwise add it
    if (elementContainer.contains(newElement)) {
        elementContainer.removeChild(newElement);
    } else {
        elementContainer.appendChild(newElement);
    }
});
