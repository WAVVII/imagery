const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const header = document.getElementById('pageHeader');

menuToggle.addEventListener('click', () => {
  if (!header.classList.contains('hidden')) {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
    if (!showcase.classList.contains('active')) {
      showcase.style.right = '';
    }
  }
});

const toggleVisibility = (element, delay) => {
  setTimeout(() => {
    element.classList.toggle('hidden');
  }, delay);
};

document.getElementById('animationButton').addEventListener('click', () => {
  showcase.classList.toggle('active');

  const animationButton = document.getElementById('animationButton');
  const sidebar = document.getElementById('sidebar');
  const pageHeader = document.getElementById('pageHeader');
  const a02a = document.getElementById('a02a');
  const a02b = document.getElementById('a02b');
  const element = document.getElementById('menu');

  animationButton.style.transition = 'opacity 0.5s';
  animationButton.style.pointerEvents = 'none';

  const delayTimes = {
    buttonOpacity: 50,
    buttonDisplay: 500,
    sidebarToggle: 100,
    a02bToggle: 100,
    a02aToggle: 80,
    sidebar2Toggle: 110,
    sidebar3Toggle: 120,
    sidebar4Toggle: 130,
    showcaseDelay: showcase.classList.contains('active') ? 1000 : 0,
  };

  setTimeout(() => {
    animationButton.style.opacity = '0';
  }, delayTimes.buttonOpacity);

  setTimeout(() => {
    animationButton.style.display = '';
    animationButton.style.opacity = '0';
    animationButton.style.pointerEvents = 'none';

    setTimeout(() => {
      sidebar.classList.toggle('hidden');
      pageHeader.classList.toggle('hidden');

      toggleVisibility(a02b, delayTimes.a02bToggle);
      toggleVisibility(a02a, delayTimes.a02aToggle);
      toggleVisibility(document.getElementById('sidebar2'), delayTimes.sidebar2Toggle);
      toggleVisibility(document.getElementById('sidebar3'), delayTimes.sidebar3Toggle);
      toggleVisibility(document.getElementById('sidebar4'), delayTimes.sidebar4Toggle);
    }, delayTimes.sidebarToggle);
  }, delayTimes.buttonDisplay);

  if (showcase.classList.contains('active')) {
    showcase.classList.remove('active');
    showcase.style.right = '';
  }

  setTimeout(() => {
    if (!showcase.classList.contains('active')) {
      menuToggle.classList.remove('active');
      element.style.display= 'none'
    }
  }, delayTimes.showcaseDelay);

  const totalAnimationTime =
  delayTimes.buttonDisplay +
  delayTimes.sidebarToggle +
  Math.max(
    delayTimes.a02bToggle,
    delayTimes.a02aToggle,
    delayTimes.sidebar2Toggle,
    delayTimes.sidebar3Toggle,
    delayTimes.sidebar4Toggle
  ) +
  delayTimes.showcaseDelay;

  setTimeout(() => {
    if (header.classList.contains('hidden')) {
      menuToggle.style.cursor = 'default'; // Change cursor style to default
    }
  }, totalAnimationTime);

  setTimeout(() => {
    const showcase = document.querySelector('.showcase');
    const menu = document.getElementById('menu');

    // Add slide-out animation classes to showcase and menu sections
    showcase.classList.add('slide-in-top');
    menu.classList.add('slide-in-top');

    // Remove elements from the DOM after slide-out animation completes
    showcase.addEventListener('animationend', () => {
      showcase.style.display = 'none';
    });

    menu.addEventListener('animationend', () => {
      menu.style.display = 'none';
    });
  }, totalAnimationTime - 350);
  
});
