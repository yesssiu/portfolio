// Initialize EmailJS with User ID
emailjs.init("Qjc1pBip9LZlRDPUw"); //

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message =
      document.getElementById("message").value;

    // Prepare the email parameters
    const params = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send("service_w3apypx", "template_7z13s7h", params)
      .then(
        function (response) {
          document.getElementById("status").textContent =
            "Viesti lähetetty onnistuneesti!";
          console.log("Email sent successfully!", response);
        },
        function (error) {
          document.getElementById("status").textContent =
            "Viestin lähettäminen epäonnistui. Yritä myöhemmin uudelleen.";
          console.error("EmailJS Error:", error.text);
        },
      );
  });
