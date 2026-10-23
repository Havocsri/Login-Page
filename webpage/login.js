    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const password = document.getElementById("password").value;

      if (password.length >= 6) {
       message.style.color = "#16a34a";
        message.textContent = "Login success! Welcome, ";
      } else {
        message.style.color = "#dc2626";
        message.textContent = "Password minimum 6 characters only.";
      }
    });