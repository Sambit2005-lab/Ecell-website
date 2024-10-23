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


<<<<<<< HEAD

  function showSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent page refresh
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
=======
  document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelector('.social-icons');
    icons.style.left = '20px'; // Move icons into view
    const iconLinks = document.querySelectorAll('.social-icons a');

    iconLinks.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = '1'; // Fade in each icon
        }, index * 200); // Stagger the fade-in effect
    });
});
>>>>>>> ddcf2d53f1317085c01d31a6f8ab824a154bae32
