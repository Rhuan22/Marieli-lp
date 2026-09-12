       // Smooth scrolling for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
             }
        });
     });

emailjs.init({
    publicKey: "yMX2-YiLzdzCCT4_K"
});

const form = document.querySelector(".gmail-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_mfg9m58",
        "template_gzl9z0c",
        this
    )
    .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
    })
    .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao enviar a mensagem.");
    });
});