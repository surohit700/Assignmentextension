// content.js
// Assuming you have the form data stored in a variable called "formData"
const formData = {
    field1Value: "Value for Field 1",
    field2Value: "Value for Field 2",
    // ... and so on
  };
  
  // Send the form data to the background script
  chrome.runtime.sendMessage({ action: "fillForm", data: formData });
  