const closeSupportForm = (event) => {
   event.preventDefault();
   
   const formEl = document.getElementById("chat_form"); 
   formEl.classList.add("hidden");

   const closeBtn = document.getElementById("close_form"); 
   closeBtn.classList.add("hidden");

   const confirmationEl = document.getElementById("submit_confirmation"); 
   confirmationEl.classList.add("hidden");

   const errorEl = document.getElementById("submit_error"); 
   errorEl.classList.add("hidden");

   const supportFormIconEl = document.getElementById("chat_icon"); 
   supportFormIconEl.classList.remove("hidden");
}

module.exports = closeSupportForm;
