document.addEventListener("DOMContentLoaded", function () {
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

    if (h1) {
        h1.innerText = "Bem-vindo ao Nosso Site";
    }
}

function challenge2() {
    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.style.backgroundImage = "url('./assets/images/Banner.png')";
    }
}

function challenge3() {
    const availabilityContent = document.querySelector(".availability-content");

    if (availabilityContent) {
        availabilityContent.style.display = "none";
    }
}

function challenge4() {
    const lorem = document.querySelector(".footer-head p");

    if (lorem) {
        lorem.style.fontWeight = "bold";
        lorem.style.color = "#00f";
    }
}

function challenge5() {
    const body = document.body;
    const find = document.querySelector(".find");
    const hero = document.querySelector(".hero");

    if (body && find && hero) {
        body.insertBefore(find, hero.nextSibling);
    }
}

function challenge6() {
    const button = document.querySelector(".find a");

    if (button) {
        button.setAttribute("id", "btn-contact");

        button.addEventListener("click", () => {
            alert("Você clicou no botão contato");
        });
    }
}

function challenge7() {
    const select = document.querySelector("select[name='location']");

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

    if (navbar && login) {
        a.setAttribute("href", "#");
        a.innerText = "ABOUT US";

        li.appendChild(a);
        navbar.insertBefore(li, login.parentElement);
    }
}

function challenge9() {
    const form = document.querySelector(".footer-subscribe");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.querySelector("form input");

            if (email.value.trim().length === 0) {
                alert("O campo email está vazio");
            }
        });
    }
}

function challenge10() {
    const testimonialsSection = document.createElement("section");

    if (testimonialsSection) {
        testimonialsSection.classList.add("testimonials");

        const title = document.createElement("h2");
        title.innerText = "Depoimentos e Avaliações";
        testimonialsSection.appendChild(title);

        const testimonialsContainer = document.createElement("div");
        testimonialsContainer.classList.add("testimonials-container");

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

        testimonials.forEach((testimonial) => {
            const testimonialDiv = document.createElement("div");
            testimonialDiv.classList.add("testimonial");

            const name = document.createElement("h3");
            name.innerText = testimonial.name;

            const feedback = document.createElement("p");
            feedback.innerText = testimonial.feedback;

            const rating = document.createElement("p");
            rating.innerText = `Avaliação: ${"⭐".repeat(testimonial.rating)}`;

            testimonialDiv.appendChild(name);
            testimonialDiv.appendChild(feedback);
            testimonialDiv.appendChild(rating);

            testimonialsContainer.appendChild(testimonialDiv);
        });

        testimonialsSection.appendChild(testimonialsContainer);

        const contactSection = document.querySelector(".find");
        if (contactSection) {
            contactSection.parentElement.insertBefore(testimonialsSection, contactSection);
        }
    }
}
