function addingEventListener() {
    // Step 1: Select the button element
    const input = document.getElementById('button');

    // Step 2: Define the event listener function
    function clickAlert() {
        alert('I was clicked!');
    }

    // Step 3: Attach the event listener to the button
    input.addEventListener('click', clickAlert);
}

// Call the function to ensure the event listener is added
addingEventListener();
