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

// Adicionando funcionalidade para o link ancora ser suave

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const menuHeight = document.querySelector('.menu').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - menuHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });
});

// Adicionando funcionalidade para links temporários, pois não tenho portfólio ainda

const tempLinks = document.querySelectorAll(".temp-link");

tempLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    alert("Sistema Offline");
  });
});

// Adicionando funcionalidade para links de navegação

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function () {
    menuLinks.forEach(item => item.classList.remove('active'));

    this.classList.add('active');
  });
});

// Adicionando funcionalidade para destacar o link ativo com base na seção visível

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.menu a');

function updateActiveLink() {
  const menuHeight = document.querySelector('.menu').offsetHeight;
  let current = null;

  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

  if (nearBottom) {
    current = sections[sections.length - 1].id;
  } else {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= menuHeight + 40 && rect.bottom > menuHeight + 40) {
        current = section.id;
      }
    });
  }

  if (current) {
    links.forEach(link => link.classList.remove('active'));

    const active = document.querySelector(`.menu a[href="#${current}"]`);
    if (active) active.classList.add('active');
  }

  if (current && window.location.hash !== `#${current}`) {
    history.replaceState(null, null, `#${current}`);
  }
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
window.addEventListener('resize', updateActiveLink);


const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});