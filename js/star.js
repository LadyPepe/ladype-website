window.addEventListener('DOMContentLoaded', function() {
    const galaxy = document.getElementById('galaxy');
  
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random()}s`;
      star.style.animationDuration = `${Math.random() + 2.5}s`;
      galaxy.appendChild(star);
    }
  
    const planetCount = 1;
    const planetImages = [
      'images/planet.svg'
    ];
  
    for (let i = 0; i < planetCount; i++) {
      const planet = document.createElement('div');
      planet.classList.add('planet');
      planet.style.left = `${Math.random() * 100}%`;
      planet.style.top = `${Math.random() * 100}%`;
      planet.style.backgroundImage = `url(${planetImages[Math.floor(Math.random() * planetImages.length)]})`;
      planet.style.animationDelay = `${Math.random()}s`;
      galaxy.appendChild(planet);
    }
  });
  


  
  