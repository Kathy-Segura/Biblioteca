// script.js
// Limpia input de búsqueda
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('search-clear');
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
});

// Toggle menú móvil
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('nav__list--active');
});