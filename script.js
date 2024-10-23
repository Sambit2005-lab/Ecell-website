document.addEventListener('DOMContentLoaded', () => {
    const bulb = document.querySelector('.bulb');
    const homeSection = document.querySelector('.home');
  
    // Calculate where the bulb starts and stops fading
    const fadeStart = homeSection.clientWidth / 2; // Midway horizontally
    const fadeEnd = homeSection.clientWidth;       // End of home section
  
    window.addEventListener('scroll', () => {
      const scrollX = window.scrollX; // Track horizontal scroll
  
      // Move the bulb upward as you scroll horizontally
      const translateY = Math.min(scrollX / 5, 100); // Cap movement to 100px
      bulb.style.transform = `translate(-50%, calc(-50% - ${translateY}px))`;
  
      // Adjust opacity based on scroll position
      if (scrollX >= fadeStart && scrollX <= fadeEnd) {
        const opacity = 1 - (scrollX - fadeStart) / (fadeEnd - fadeStart);
        bulb.style.opacity = opacity;
      } else if (scrollX > fadeEnd) {
        bulb.style.opacity = 0; // Fully faded after passing the section
      } else {
        bulb.style.opacity = 1; // Reset opacity before fadeStart
      }
    });
  });