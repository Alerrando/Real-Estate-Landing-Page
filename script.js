document.addEventListener("DOMContentLoaded", function () {
    // Executa os desafios após a página ser carregada
    challenge1();
    challenge2();
    challenge3();
    challenge4();
    challenge5();
    challenge6();
    challenge7();
    challenge8();
    challenge9();
    challenge10();
});

function challenge1() {
    const h1 = document.querySelector("h1");

    // Verifica se o elemento h1 existe antes de alterar seu texto
    if (h1) {
        h1.innerText = "Bem-vindo ao Nosso Site";
    }
}

function challenge2() {
    const heroContent = document.querySelector(".hero-content");

    // Define uma imagem de fundo para o elemento com a classe 'hero-content', se existir
    if (heroContent) {
        heroContent.style.backgroundImage = "url('./assets/images/Banner.png')";
    }
}

function challenge3() {
    const availabilityContent = document.querySelector(".availability-content");

    // Oculta o elemento com a classe 'availability-content', se ele existir
    if (availabilityContent) {
        availabilityContent.style.display = "none";
    }
}

function challenge4() {
    const lorem = document.querySelector(".footer-head p");

    // Altera o estilo do texto para negrito e muda a cor para azul
    if (lorem) {
        lorem.style.fontWeight = "bold";
        lorem.style.color = "#00f";
    }
}

function challenge5() {
    const body = document.body;
    const find = document.querySelector(".find");
    const hero = document.querySelector(".hero");

    // Insere o elemento com a classe 'find' logo após o elemento 'hero'
    if (body && find && hero) {
        body.insertBefore(find, hero.nextSibling);
    }
}

function challenge6() {
    const button = document.querySelector(".find a");

    // Adiciona um ID ao botão e um evento de clique que exibe um alerta
    if (button) {
        button.setAttribute("id", "btn-contact");

        button.addEventListener("click", () => {
            alert("Você clicou no botão contato");
        });
    }
}

function challenge7() {
    const select = document.querySelector("select[name='location']");

    // Adiciona uma nova opção 'Presidente Prudente' ao dropdown de seleção
    if (select) {
        const opt = document.createElement("option");
        opt.value = "presidente-prudente";
        opt.innerHTML = "Presidente Prudente";
        select.appendChild(opt);
    }
}

function challenge8() {
    const navbar = document.querySelector(".navbar-list");
    const login = document.querySelector(".login");
    const li = document.createElement("li");
    const a = document.createElement("a");

    // Cria um novo item de menu "ABOUT US" e insere antes do item de login
    if (navbar && login) {
        a.setAttribute("href", "#");
        a.innerText = "ABOUT US";

        li.appendChild(a);
        navbar.insertBefore(li, login.parentElement);
    }
}

function challenge9() {
    const form = document.querySelector(".footer-subscribe");

    // Adiciona um evento ao formulário para verificar se o campo de email está vazio antes de enviar
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Previne o envio padrão do formulário
            const email = document.querySelector("form input");

            if (email.value.trim().length === 0) {
                alert("O campo email está vazio");
            }
        });
    }
}

function challenge10() {
    const testimonialsSection = document.createElement("section");

    // Verifica se o elemento de depoimentos foi criado com sucesso
    if (testimonialsSection) {
        testimonialsSection.classList.add("testimonials");

        // Cria o título da seção
        const title = document.createElement("h2");
        title.innerText = "Depoimentos e Avaliações";
        testimonialsSection.appendChild(title);

        const testimonialsContainer = document.createElement("div");
        testimonialsContainer.classList.add("testimonials-container");

        // Dados fictícios para os depoimentos
        const testimonials = [
            {
                name: "João Silva",
                feedback: "Excelente serviço! Recomendo a todos.",
                rating: 5,
            },
            {
                name: "Maria Oliveira",
                feedback: "A experiência foi incrível. Atendimento impecável!",
                rating: 4,
            },
            {
                name: "Carlos Pereira",
                feedback: "Ótima qualidade e suporte rápido.",
                rating: 5,
            },
        ];

        // Itera sobre cada depoimento e cria os elementos HTML correspondentes
        testimonials.forEach((testimonial) => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.classList.add("testimonial");

            const name = document.createElement("h3");
            name.innerText = testimonial.name;

            const feedback = document.createElement("p");
            feedback.innerText = testimonial.feedback;

            // Adiciona estrelas representando a avaliação
            const rating = document.createElement("p");
            rating.innerText = `Avaliação: ${"⭐".repeat(testimonial.rating)}`;

            testimonialDiv.appendChild(name);
            testimonialDiv.appendChild(feedback);
            testimonialDiv.appendChild(rating);

            testimonialsContainer.appendChild(testimonialDiv);
        });

        testimonialsSection.appendChild(testimonialsContainer);

        // Insere a seção de depoimentos antes da seção de contato
        const contactSection = document.querySelector(".find");
        if (contactSection) {
            contactSection.parentElement.insertBefore(testimonialsSection, contactSection);
        }
    }
}
