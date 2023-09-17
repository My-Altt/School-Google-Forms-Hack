// Extract questions and send them to the background script
const questions = [...document.querySelectorAll('.freebirdFormviewerViewItemsItemItemTitle')].map(item => item.textContent);
chrome.runtime.sendMessage({ questions });
