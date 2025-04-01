// Step 1: Create a function to add an event listener to the button element.
function addingEventListener() {
    // Step 2: Get a reference to the input element with id="button".
    const input = document.getElementById('button');
  
    // Step 3: Create a callback function that will be triggered on a click event.
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Step 4: Add the event listener for the "click" event on the input element.
    input.addEventListener('click', clickAlert);
  }
  
  // Step 5: Call the addingEventListener function to activate the event listener.
  addingEventListener();
  