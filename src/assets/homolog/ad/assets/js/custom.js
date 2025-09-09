
const allSections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // remove observação após revelar
    }
  });
}, {
  threshold: 0.1
});

allSections.forEach(section => {
  observer.observe(section);
});


// CURRENT YEAR
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.querySelector('.credits-year').innerHTML = `${currentYear}`;