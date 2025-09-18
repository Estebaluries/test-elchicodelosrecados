// Datos del menú
const menuItems = [
    {
        title: "Tacos al Pastor",
        price: "$85",
        description: "Tacos de cerdo marinado con piña, cebolla y cilantro.",
        category: "tacos",
        image: "🌮"
    },
    {
        title: "Tacos de Carnitas",
        price: "$80",
        description: "Tacos de cerdo dorado y jugoso, con cebolla y cilantro.",
        category: "tacos",
        image: "🌮"
    },
    {
        title: "Tacos de Bistec",
        price: "$90",
        description: "Tacos de bistec a la parrilla con cebolla asada y aguacate.",
        category: "tacos",
        image: "🌮"
    },
    {
        title: "Tacos de Pescado",
        price: "$95",
        description: "Tacos de pescado empanizado con repollo y salsa especial.",
        category: "tacos",
        image: "🌮"
    },
    {
        title: "Tacos de Cochinita",
        price: "$90",
        description: "Tacos de cochinita pibil, con cebolla morada y salsa habanero.",
        category: "tacos",
        image: "🌮"
    },
    {
        title: "Huevos Rancheros",
        price: "$110",
        description: "Huevos estrellados sobre tortillas bañados en salsa ranchera.",
        category: "desayunos",
        image: "🍳"
    },
    {
        title: "Chilaquiles",
        price: "$120",
        description: "Totopos bañados en salsa verde o roja, con pollo, crema y queso.",
        category: "desayunos",
        image: "🍳"
    },
    {
        title: "Huevos a la Mexicana",
        price: "$100",
        description: "Huevos revueltos con jitomate, cebolla y chile serrano.",
        category: "desayunos",
        image: "🍳"
    },
    {
        title: "Molletes",
        price: "$90",
        description: "Pan bolillo con frijoles, queso derretido y pico de gallo.",
        category: "desayunos",
        image: "🍳"
    },
    {
        title: "Jugo de Naranja",
        price: "$40",
        description: "Jugo de naranja recién exprimido.",
        category: "bebidas",
        image: "🍹"
    },
    {
        title: "Agua de Horchata",
        price: "$35",
        description: "Bebida refrescante de arroz con canela.",
        category: "bebidas",
        image: "🥤"
    },
    {
        title: "Agua de Jamaica",
        price: "$35",
        description: "Bebida refrescante de flor de jamaica.",
        category: "bebidas",
        image: "🥤"
    },
    {
        title: "Café de Olla",
        price: "$45",
        description: "Café tradicional preparado con piloncillo y canela.",
        category: "bebidas",
        image: "☕"
    },
    {
        title: "Michelada",
        price: "$75",
        description: "Cerveza preparada con limón, salsa inglesa y chile.",
        category: "bebidas",
        image: "🍺"
    }
];

// Función para mostrar los elementos del menú
function displayMenuItems(items) {
    const menuContainer = document.querySelector('.menu-items');
    menuContainer.innerHTML = '';
    
    items.forEach(item => {
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menu-item');
        
        menuItemElement.innerHTML = `
            <div class="menu-item-image">${item.image}</div>
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <h3>${item.title}</h3>
                    <span class="menu-item-price">${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <span class="menu-item-category">${item.category}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItemElement);
    });
}

// Función para filtrar los elementos del menú
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener el filtro
            const filter = button.getAttribute('data-filter');
            
            // Filtrar elementos
            if (filter === 'todos') {
                displayMenuItems(menuItems);
            } else {
                const filteredItems = menuItems.filter(item => item.category === filter);
                displayMenuItems(filteredItems);
            }
        });
    });
}

// Función para el menú móvil
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Función para animaciones al hacer scroll
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animar
    const elementsToAnimate = document.querySelectorAll('.menu-item, .testimonial');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menuItems);
    setupFilters();
    setupMobileMenu();
    setupScrollAnimations();
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const navMenu = document.querySelector('nav ul');
                navMenu.classList.remove('show');
            }
        });
    });
});
