// This function adds an event listener to a button with id "button"
function addingEventListener() {
  const input = document.getElementById('button');
  
  // Add click event listener
  input.addEventListener('click', () => {
    // This function will be triggered when the button is clicked
    console.log('Button clicked!');
  });
}
