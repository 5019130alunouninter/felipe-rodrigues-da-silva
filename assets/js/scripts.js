// Validação do formulário de contato

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Preencha todos os campos.");
        return;
    }
    
    alert("Mensagem enviada com sucesso!");
    
    form.reset();
});


// Adicionando funcionalidade para links temporários, pois não tenho portfólio ainda

const links = document.querySelectorAll(".temp-link");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        
        alert("Sistema Offline");
    });
});