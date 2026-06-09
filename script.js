// ================= MENU RESPONSIVO =================
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ================= EFEITO DIGITANDO =================
const text = "Tecnologia, inovação e sustentabilidade para transformar o campo.";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

typeEffect();

// ================= DARK MODE =================
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ================= FORMULÁRIO =================
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    formMessage.innerText = "Mensagem enviada com sucesso!";
    formMessage.style.color = "green";
    form.reset();
});