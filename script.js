const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

document.getElementById('animationButton').addEventListener('click', function() {
  var animationButton = document.getElementById('animationButton');
  var sidebar = document.getElementById('sidebar');
  var pageHeader = document.getElementById('pageHeader');
  var a02a = document.getElementById('a02a');
  var a02b = document.getElementById('a02b');

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
          a02a.classList.toggle('hidden');
      }, 200); 
      
      setTimeout(function() {
          a02b.classList.toggle('hidden');
      }, 700); 
  }, 200); 
});
