//your JS code here. If required.

// Function to display text after a specified delay
async function displayTextWithDelay() {
  // Get the user-provided text and delay values from the HTML elements
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const text = textInput.value; // Get the text from the text input
  const delay = parseInt(delayInput.value, 10); // Parse delay as an integer

  // Check if the delay is a valid number
  if (isNaN(delay) || delay < 0) {
    outputDiv.textContent = 'Please enter a valid positive delay.';
    return;
  }

  // Clear the output div
  outputDiv.textContent = '';

  // Use setTimeout and async/await to delay the display of text
  await new Promise((resolve) => setTimeout(resolve, delay * 1000));

  // Display the text in the output div after the delay
  outputDiv.textContent = text;
}

// Add an event listener to the button to trigger the function
const button = document.getElementById('btn');
button.addEventListener('click', displayTextWithDelay);
