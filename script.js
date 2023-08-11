document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const submitButton = document.querySelector("button[type='submit']");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const birthdate = document.getElementById("birthdate").value;
      const gender = document.getElementById("gender").value;
      const country = document.getElementById("country").value;
  
      // Perform form validation
      if (!name || !email || !password || !birthdate || !gender || !country ) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Simulate form submission
      submitButton.textContent = "Submitting...";
      submitButton.disabled = true;
  
      // Simulate form submission success after a short delay
      setTimeout(function () {
        window.location.href = "success.html"; //rediect to take the success page 
      }, 1000);  // redirect after 1 second( you can adjust this) 
    });
  
});