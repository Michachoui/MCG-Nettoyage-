document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile Responsive (Hamburger Toggle)
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Change l'icône entre le hamburger (☰) et la croix (✕)
            menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        });
    }

    // 2. Défilement fluide (Smooth Scrolling) et fermeture automatique du menu mobile
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Ferme le menu mobile si un lien est cliqué
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            }

            window.scrollTo({
                top: targetSection.offsetTop - 70, // Compense la hauteur fixe du header
                behavior: 'smooth'
            });
        });
    });

    // 3. Simulation d'envoi de formulaire de contact
    const contactForm = document.getElementById('contact-form');

    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nom = document.getElementById('name').value;
            alert(`Merci ${nom} ! Votre message a bien été envoyé.\nMurielle l'examinera avec la même minutie qu'elle accorde à ses nettoyages. Elle vous recontactera au plus temps !`);
            contactForm.reset();
        });
    }

    // 4. Générateur de pétales de Sakura (Cerisier) en arrière-plan
    const sakuraContainer = document.getElementById('sakura-container');
    
    function createPetal() {
        if (!sakuraContainer) return;
        
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // Taille aléatoire (entre 10px et 22px)
        const size = Math.random() * 12 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        // Position horizontale aléatoire
        petal.style.left = Math.random() * 100 + 'vw';
        
        // Vitesse de chute aléatoire (entre 6s et 11s)
        const duration = Math.random() * 5 + 6;
        petal.style.animationDuration = `${duration}s`;
        
        sakuraContainer.appendChild(petal);
        
        // Nettoyage de l'élément du DOM après sa chute
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }
    
    // Génère un nouveau pétale toutes les 400 millisecondes
    setInterval(createPetal, 400);
});