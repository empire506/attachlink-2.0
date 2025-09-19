console.log("AttachLink site loaded.");

function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
}

// Hide all forms and show card content
function hideAllForms() {
  document.querySelectorAll('.feature-card').forEach(card => {
    const content = card.querySelector('.card-content');
    const form = card.querySelector('.form-section');
    if (content) content.style.display = 'block';
    if (form) form.style.display = 'none';
  });
}

// Show a specific form within its card
function showForm(formId, cardId) {
  hideAllForms(); // Hide other forms first

  const card = document.getElementById(cardId);
  if (card) {
    const content = card.querySelector('.card-content');
    const form = card.querySelector('.form-section');

    if (content) content.style.display = 'none';
    if (form) form.style.display = 'block';

    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// Hide a form and show the card content
function hideForm(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    const content = card.querySelector('.card-content');
    const form = card.querySelector('.form-section');

    if (content) content.style.display = 'block';
    if (form) form.style.display = 'none';
  }
}

// Handle form submissions with a success message
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".form-section form");

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // stop page reload

      // create success message
      const success = document.createElement("p");
      success.textContent = "✅ Thanks for submitting your details!";
      success.style.color = " black";
      success.style.fontWeight = "bold";
      success.style.textAlign = "center";
      success.style.marginTop = "15px";

      // clear old messages
      const oldSuccess = form.querySelector("p");
      if(oldSuccess) oldSuccess.remove();
      
      form.appendChild(success);

      // reset form inputs
      form.reset();
    });
  });
});
