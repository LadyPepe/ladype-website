const sections = document.querySelectorAll('.section_custom');
let currentSectionIndex = 0;

function showNextSection() {
  sections[currentSectionIndex].classList.remove('active_custom');
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  sections[currentSectionIndex].classList.add('active_custom');
  updateNavigation();
}

setInterval(showNextSection, 6000);

function smoothScrollTo(targetPos) {
  const startPos = window.pageXOffset;
  const distance = targetPos - startPos;
  const duration = 1000;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const scrollPos = easeInOutCubic(elapsedTime, startPos, distance, duration);
    window.scrollTo(scrollPos, 0);
    if (elapsedTime < duration) requestAnimationFrame(animation);
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }

  requestAnimationFrame(animation);
}

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', showPrevSection);
nextButton.addEventListener('click', showNextSection);

function showPrevSection() {
  sections[currentSectionIndex].classList.remove('active_custom');
  currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
  sections[currentSectionIndex].classList.add('active_custom');
  updateNavigation();
}


sections[currentSectionIndex].classList.add('active_custom');


const navigationList = document.querySelector('.navigation-list');
sections.forEach((section, index) => {
  const listItem = document.createElement('li');
  listItem.classList.add('navigation-item');
  listItem.dataset.index = index;

  
  listItem.addEventListener('click', () => {
    showSection(index);
  });

  navigationList.appendChild(listItem);
});


function showSection(index) {
  sections[currentSectionIndex].classList.remove('active_custom');
  currentSectionIndex = index;
  sections[currentSectionIndex].classList.add('active_custom');
  updateNavigation();
}


function updateNavigation() {
  const navigationItems = document.querySelectorAll('.navigation-item');
  navigationItems.forEach((item, index) => {
    if (index === currentSectionIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var menu = document.querySelector('.menu');
  var iconBars = menuIcon.querySelector('.fa-bars');
  var iconTimes = menuIcon.querySelector('.fa-times');

  menuIcon.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('active');
    iconBars.classList.toggle('hidden');
    iconTimes.classList.toggle('hidden');
  });

  document.addEventListener('click', function(event) {
    var target = event.target;
    if (!menu.contains(target) && !menuIcon.contains(target)) {
      menu.classList.remove('active');
      menuIcon.classList.remove('active');
      iconBars.classList.remove('hidden');
      iconTimes.classList.add('hidden');
    }
  });

  let startX;
  let endX;

  document.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
  });

  document.addEventListener('touchend', function(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 100;
    const deltaX = endX - startX;

    if (deltaX > threshold) {
      showPrevSection();
    } else if (deltaX < -threshold) {
      showNextSection();
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const parentItem = document.querySelector('.parent');
  const submenu = parentItem.querySelector('.submenu');

  parentItem.addEventListener('mouseenter', function() {
    submenu.style.opacity = '1';
    submenu.style.visibility = 'visible';
    submenu.style.transitionDelay = '0s';
  });

  parentItem.addEventListener('mouseleave', function() {
    submenu.style.opacity = '0';
    submenu.style.visibility = 'hidden';
    submenu.style.transitionDelay = '0.3s';
  });
});



const toggleModeButton = document.getElementById('toggleModeButton');
const body = document.body;

toggleModeButton.addEventListener('click', () => {
  body.classList.toggle('day-mode');
  body.style.backgroundColor = body.classList.contains('day-mode') ? '#2d3ba4' : '';
  toggleModeButton.classList.toggle('night-mode');
});





