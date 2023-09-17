// Get the questions from the background script and display them
chrome.runtime.getBackgroundPage((backgroundPage) => {
  const questions = backgroundPage.questions;
  const questionsDiv = document.getElementById('questions');
  questionsDiv.innerHTML = '';
  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.textContent = `Question ${index + 1}: ${question}`;
    questionsDiv.appendChild(questionElement);
  });
});
