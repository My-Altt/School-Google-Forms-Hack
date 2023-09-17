// Initialize an empty array to store questions
let questions = [];

// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.questions) {
    questions = message.questions;
  }
});

// Function to update the popup with questions
function updatePopup() {
  chrome.action.setPopup({ popup: 'popup.html' });
}

// Call the function when the extension is installed or updated
chrome.runtime.onInstalled.addListener(updatePopup);

// Call the function when the extension is updated
chrome.runtime.onStartup.addListener(updatePopup);
