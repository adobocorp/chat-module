const showError = (error) => {
   const errorEl = document.getElementById("submit_error"); 
   errorEl.classList.remove("hidden");
}

const showData = (data) => {
   const confirmation = document.getElementById("submit_confirmation"); 
   confirmation.classList.remove("hidden");
}

const handleSubmit = async (event) => {
   event.preventDefault();
   const formEl = document.getElementById("chat_form");  
   console.log(formEl);
   const formData = new FormData(formEl);

   const data = {
      requestTitle: formData.get("support_request_title"),
      requestBody: formData.get("support_request_title"),
      requestSource: window.location.hostname
   }
   
   const post = fetch('https://chat-api.bettergov.ph', {
      method: 'POST', // Specify the method as POST
      headers: {
        'Content-Type': 'application/json', // Indicate that the body is JSON
        // Add other headers as needed, e.g., 'Authorization': 'Bearer YOUR_TOKEN'
      },
      body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
   })
    .then(data => showData(data))
    .catch((error) => showError(error))
    .finally(() => {
        const formElement = document.getElementById("chat_form"); 
        formElement.reset();
    });

   await post();
}

module.exports = handleSubmit;
