document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Défilement fluide (Smooth Scrolling)
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // 2. Simulation d'envoi de formulaire de contact
    const contactForm = document.getElementById('contact-form');

    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nom = document.getElementById('name').value;
            alert(`Merci ${nom} ! Votre message a bien été envoyé.\nMurielle l'examinera avec la même minutie qu'elle accorde à ses nettoyages. Elle vous recontactera au plus vite !`);
            contactForm.reset();
        });
    }

    // 3. Générateur de pétales de Sakura (Cerisier) en arrière-plan
    const sakuraContainer = document.getElementById('sakura-container');
    
    function createPetal() {
        if (!sakuraContainer) return;
        
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Taille aléatoire (entre 10px et 22px)
        const size = Math.random() * 12 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        // Position horizontale aléatoire de départ sur toute la largeur de l'écran
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Vitesse de chute aléatoire (entre 6s et 11s)
        const duration = Math.random() * 5 + 6;
        petal.style.animationDuration = `${duration}s`;
        
        // Ajout du pétale au conteneur
        sakuraContainer.appendChild(petal);
        
        // Destruction automatique du pétale une fois arrivé en bas pour ne pas surcharger le navigateur
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }
    
    // Génère un nouveau pétale toutes les 400 millisecondes
    setInterval(createPetal, 400);
});