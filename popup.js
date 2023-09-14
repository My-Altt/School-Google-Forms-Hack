document.getElementById("submitBtn").addEventListener("click", () => {
  // Define the URL of the Google Form you want to automate.
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScO9RFv3JT6GAoQ7fBzyy5JoVE65GX8a1s9vB4ZZ19Xa4p7Dg/viewform";

  // Define the answer you want to submit (replace "your_answer" with the actual answer).
  const answer = "your_answer";

  // Open a new tab to the Google Form and fill in the answer.
  chrome.tabs.create({ url: googleFormUrl }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (answer) => {
        // Locate the multiple-choice question element and select the answer.
        const question = document.querySelector("your_question_selector_here");
        question.value = answer;
        
        // Submit the form.
        document.querySelector("form").submit();
      },
      args: [answer],
    });
  });
});
