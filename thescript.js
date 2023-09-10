const header = document.querySelector('.sticky-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.remove('active-dropdown');
});

function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('active-dropdown');
  }