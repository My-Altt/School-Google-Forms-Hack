// Placeholder code to extract questions
function extractQuestions() {
  const text = document.body.innerText; // Extract text content
  const questionRegex = /(?:\d+\.\s)([^\n]+)/g; // Regular expression to find questions
  const matches = text.match(questionRegex);
  if (matches) {
    const questions = matches.map((match) => match.trim());
    chrome.runtime.sendMessage({ questions });
  }
}

extractQuestions();
