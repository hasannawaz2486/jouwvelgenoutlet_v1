// Get the slider container and slides
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');

// Set the active slide index
let activeIndex = 0;

// Set the slide interval
let interval = setInterval(() => {
  // Update the active slide index
  activeIndex = (activeIndex + 1) % slides.length;

  // Update the slide classes
  slides.forEach((slide, index) => {
    if (index === activeIndex) {
      slide.classList.add('active');
      slide.classList.remove('inactive');
    } else {
      slide.classList.add('inactive');
      slide.classList.remove('active');
    }
  });
}, 2000); // 2 seconds

// Add event listener to pause the slider on hover
slider.addEventListener('mouseover', () => {
  clearInterval(interval);
});

// Add event listener to resume the slider on mouseout
slider.addEventListener('mouseout', () => {
  interval = setInterval(() => {
    // Update the active slide index
    activeIndex = (activeIndex + 1) % slides.length;

    // Update the slide classes
    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add('active');
        slide.classList.remove('inactive');
      } else {
        slide.classList.add('inactive');
        slide.classList.remove('active');
      }
    });
  }, 2000); // 2 seconds
});