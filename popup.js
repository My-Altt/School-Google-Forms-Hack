chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const tab = tabs[0];
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getQuestions,
  });
});

function getQuestions() {
  const questions = [];
  // Replace this with code to extract questions from the Google Doc
  // Example: const text = document.body.innerText; // Extract text content
  // Use regular expressions or specific parsing logic to find questions
  // Push questions into the 'questions' array
  chrome.runtime.sendMessage({ questions });
}

chrome.runtime.onMessage.addListener(function (message) {
  if (message.questions && message.questions.length > 0) {
    const questionsContainer = document.getElementById("questions-container");
    message.questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.innerText = `${index + 1}. ${question}`;
      questionsContainer.appendChild(questionDiv);
    });
  }
});
