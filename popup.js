// This code runs when the popup.html is opened
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // Send a message to the content script to extract questions
  chrome.tabs.sendMessage(tabs[0].id, { action: "extractQuestions" }, function (response) {
    const questionList = document.getElementById("questionList");
    if (response && response.questions) {
      response.questions.forEach(function (question) {
        const listItem = document.createElement("li");
        listItem.textContent = question;
        questionList.appendChild(listItem);
      });
    } else {
      questionList.innerHTML = "No questions found on this page.";
    }
  });
});
