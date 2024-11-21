const menuIcon = document.querySelector('.bars__icon');
const navbar = document.querySelector('.navbar')
const slider = document.querySelector('.swiper-slide');
// Menu Handler
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('invisible');
});



// Persianization of numbers
const timeElement = document.querySelector('.time__open');
const timeElement2 = document.querySelector('.time__close');

// function to Persianize the number inside the span element
function formatNumberInElement(element) {
    const timeValue = parseFloat(element.textContent);

    if (!isNaN(timeValue)) {
        // ]ntl.NumberFormat Persianize the number
        const formattedTime = new Intl.NumberFormat('fa-IR').format(timeValue);

        // inserting the Persian number inside the same span
        element.textContent = formattedTime;
    } else {
        console.log("مقدار عددی معتبر نیست.");
    }
}
if (timeElement) formatNumberInElement(timeElement);
if (timeElement2) formatNumberInElement(timeElement2);

// Change Background Our Service
let svgBackground = document.querySelectorAll('.ourService__background');

// For each element in the svgBackground collection
svgBackground.forEach((element) => {
  // When the mouse hovers over the element
  element.addEventListener('mouseenter', () => {
    element.setAttribute('src', '../Images/our service background pink.svg');
  });

// When the mouse is removed from the plot
  element.addEventListener('mouseleave', () => {
    element.setAttribute('src', '../Images/our service background.svg');
  });
});
