document.addEventListener("DOMContentLoaded", function() {
    challenge1();
    challenge2();
    challenge3();
});

function challenge1(){
    const h1 = document.querySelector("h1");

    if(h1){
        h1.innerText = "Bem-vindo ao Nosso Site";
    }
}

function challenge2() {
    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.style.backgroundImage = "url('./assets/images/Banner.png')";
    }
}

function challenge3(){
    const availabilityContent = document.querySelector(".availability-content");

    if(availabilityContent){
        availabilityContent.style.display = "none"
    }
}