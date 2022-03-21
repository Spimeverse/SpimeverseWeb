const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("newsletter");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => myForm.innerHTML = `<div class="bg-success p-3 rounded-pill">Almost there! Check your inbox for a confirmation e-mail.</div>`)
      .catch((error) => myForm.innerHTML = `<div class="bg-danger p-3 rounded-pill">Error: ${error}</div>`);
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);