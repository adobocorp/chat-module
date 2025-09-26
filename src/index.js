// chatModule.js

const handleSubmit = require('./handlers/handleSubmit');
const closeSupportForm = require('./handlers/closeSupportForm');
const openSupportForm = require('./handlers/openSupportForm');

const supportForm = document.createElement("form");

// const titleLabel = "<label for=\"support_request_title\">Title</label>";
// const titleInput = "<input type=\"text\" id=\"support_request_title\" name=\"support_request_title\"><br><br>";
// const bodyLabel = "<label for=\"support_request_body\">Request</label>";
// const bodyInput = "<input type=\"text\" id=\"support_request_body\" name=\"support_request_body\"><br><br>";
// const submitBtn =  "<input type=\"submit\" value=\"Submit\">"

supportForm.innerHTML = `
  <label for=\"support_request_title\">Title</label>
  <input type=\"text\" id=\"support_request_title\" name=\"support_request_title\"><br><br>
  <label for=\"support_request_body\">Request</label>
  <input type=\"text\" id=\"support_request_body\" name=\"support_request_body\"><br><br>
  <input type=\"submit\" value=\"Submit\">
`
supportForm.setAttribute("id", "chat_form");
supportForm.addEventListener("submit", handleSubmit);
supportForm.classList.add("hidden");

const supportFormCloseButton = document.createElement("button");
supportFormCloseButton.setAttribute("id", "close_form");
supportFormCloseButton.innerText = "X";
supportFormCloseButton.classList.add("hidden");
supportFormCloseButton.addEventListener("click", closeSupportForm);

const supportFormIcon = document.createElement("img");
supportFormIcon.setAttribute("id", "chat_icon");
supportFormIcon.setAttribute("src", "https://unpkg.com/lucide-static@0.544.0/icons/message-square.svg");
supportFormIcon.setAttribute("width", 45);
supportFormIcon.setAttribute("height", 45);
supportFormIcon.addEventListener("click", openSupportForm);

const supportFormConfirmation = document.createElement("div");
supportFormConfirmation.setAttribute("id", "submit_confirmation");
supportFormConfirmation.innerText = "Support request has been submitted.";
supportFormConfirmation.classList.add("hidden");

const supportFormError = document.createElement("div");
supportFormError.setAttribute("id", "submit_error");
supportFormError.innerText = "An error occured while submitting the form.";
supportFormError.classList.add("hidden");

const supportFormParent = document.createElement("div");
supportFormParent.setAttribute("id", "form_parent");
supportFormParent.appendChild(supportFormIcon);
supportFormParent.appendChild(supportFormConfirmation);
supportFormParent.appendChild(supportFormError);
supportFormParent.appendChild(supportFormCloseButton);
supportFormParent.appendChild(supportForm);

window.SUPPORT_FORM = supportFormParent;
