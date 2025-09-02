// ==========================================
// CONFIGURATION FACILE À MODIFIER
// ==========================================

// Tableau des projets - VOUS POUVEZ AJOUTER/MODIFIER DES PROJETS ICI
const projects = [
    {
        title: "Projet d'Analyse Retail - Online Retail II ",
        description: "analyse de données à travers l'exploitation du dataset Online Retail II. Il couvre l'ensemble du processus analytique, du SQL initial au dashboard Power BI final..",
        thumbnail: "fas fa-chart-line",
        githubUrl: "https://github.com/enzohern/Analyse-Retail"
    },
    {
        title: "Potentiel Solaire sur les Toits de Madrid",
        description: "analyse et visualise le potentiel solaire des toits de Madrid à l’aide de données géospatiales extraites d’OpenStreetMap. Il calcule la surface des bâtiments et estime la production énergétique potentielle en kWh. L’interface est développée avec Streamlit et les données sont stockées dans MongoDB",
        thumbnail: "fas fa-brain",
        githubUrl: "https://github.com/enzohern/panneaux_solaires_madrid"
    },
];

// Tableau des compétences - VOUS POUVEZ AJOUTER/MODIFIER DES COMPÉTENCES ICI
const skills = [
    { name: "Python", icon: "fab fa-python" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Power BI", icon: "fas fa-chart-bar" },
    { name: "Tableau", icon: "fas fa-chart-pie" },
    { name: "Excel", icon: "fas fa-file-excel" },
    { name: "MongoDB", icon: "fas fa-leaf" },  // Alternativa: "fas fa-database"
    { name: "PostgreSQL", icon: "fas fa-database" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "QGIS", icon: "fas fa-map" }
];

// ==========================================
// FONCTIONS DE RENDU
// ==========================================

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in-up';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-thumbnail">
                <i class="${project.thumbnail}"></i>
            </div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="${project.githubUrl}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                    Voir sur GitHub
                </a>
            </div>
        `;
        
        container.appendChild(projectCard);
    });
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    
    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item fade-in-up';
        skillItem.style.animationDelay = `${index * 0.1}s`;
        
        skillItem.innerHTML = `
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <div class="skill-name">${skill.name}</div>
        `;
        
        container.appendChild(skillItem);
    });
}

// ==========================================
// FONCTIONNALITÉS SUPPLÉMENTAIRES
// ==========================================

// Scroll fluide pour la navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animations au défilement
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        renderProjects();
        renderSkills();
        animateOnScroll();
    }, 500);
});

// Mise à jour automatique de l'année dans le footer
document.querySelector('footer p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Votre Nom. Tous droits réservés.`;