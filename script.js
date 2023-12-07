const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
});

document.getElementById('animationButton').addEventListener('click', function() {
  const animationButton = document.getElementById('animationButton');
  const sidebar = document.getElementById('sidebar');
  const pageHeader = document.getElementById('pageHeader');
  const a02a = document.getElementById('a02a');
  const a02b = document.getElementById('a02b');

  animationButton.style.transition = 'opacity 0.5s';
  animationButton.style.pointerEvents = 'none';

  setTimeout(function() {
    animationButton.style.opacity = '0';
  }, 50);

  setTimeout(function() {
    animationButton.style.display = '';
    animationButton.style.opacity = '0';
    animationButton.style.pointerEvents = 'none';
  }, 500);

  setTimeout(function() {
    sidebar.classList.toggle('hidden');
    pageHeader.classList.toggle('hidden');

    setTimeout(function() {
      a02b.classList.toggle('hidden');
    }, 100);

    setTimeout(function() {
      a02a.classList.toggle('hidden');
    }, 80);

    // Animation for Sidebar 2 after a delay
    setTimeout(function() {
      const sidebar2 = document.getElementById('sidebar2');
      sidebar2.classList.toggle('hidden');
    }, 110);

    // Animation for Sidebar 3 after a delay
    setTimeout(function() {
      const sidebar3 = document.getElementById('sidebar3');
      sidebar3.classList.toggle('hidden');
    }, 120);

    // Animation for Sidebar 4 after a delay
    setTimeout(function() {
      const sidebar4 = document.getElementById('sidebar4');
      sidebar4.classList.toggle('hidden');
    }, 130);
  }, 100);
});
