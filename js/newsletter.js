document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("subscription-form");
  const emailInput = document.getElementById("email");
  const messageContainer = document.getElementById("message-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    verifySubscribed(email);
  });

  function verifySubscribed(email) {
    fetch("/scripts/newsletter.php", {
      method: "POST",
      body: new URLSearchParams({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        messageContainer.textContent = data.message;
        emailInput.value = "";
        setTimeout(() => {
          messageContainer.textContent = "";
        }, 5000);

        if (data.message === "Welcome to the Newsletter!") {
        
          console.log("Successfully");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
