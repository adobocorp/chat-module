const openSupportForm  = (event) => {
   event.preventDefault();
   
   const formEl = document.getElementById("chat_form"); 
   formEl.classList.remove("hidden");

   const closeButtonEl = document.getElementById("close_form"); 
   closeButtonEl.classList.remove("hidden");

   const confirmationEl = document.getElementById("submit_confirmation"); 
   confirmationEl.classList.add("hidden");

   const errorEl = document.getElementById("submit_error"); 
   errorEl.classList.add("hidden");

   const supportFormIconEl = document.getElementById("chat_icon"); 
   supportFormIconEl.classList.add("hidden");
}

module.exports = openSupportForm;
