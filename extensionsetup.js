// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "fillForm") {
      // Fill the form using the data in the message
      // You'll need to implement this logic based on the document structure
      // For example:
      const formElement = document.getElementById("yourFormId");
      formElement.querySelector("#inputField1").value = message.data.field1Value;
      formElement.querySelector("#inputField2").value = message.data.field2Value;
      // ... and so on
    }
  });
  