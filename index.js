// Helper: create a random rgb(r, g, b) string
function randomRGBColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = randomRGBColor()
}

// Function to reset the background color when the reset button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay')
  if (!keyPressDisplay) return
  keyPressDisplay.textContent = 'Key pressed: ' + event.key
}

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput')
  const textInputDisplay = document.getElementById('textInputDisplay')
  if (!textInput || !textInputDisplay) return
  textInputDisplay.textContent = 'You typed: ' + textInput.value
}

// Attach Event Listeners
function setupEventListeners() {
  const changeBtn = document.getElementById('changeColorButton')
  const resetBtn = document.getElementById('resetColorButton')
  const textInput = document.getElementById('textInput')

  if (changeBtn) changeBtn.addEventListener('click', changeBackgroundColor)
  if (resetBtn) resetBtn.addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)

  if (textInput) textInput.addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded (browser use)
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
