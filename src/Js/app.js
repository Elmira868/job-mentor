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


const teamContainer = document.querySelector('.team__container');
const memberTeam = [
  {id:1, fullName:'رضا احمدی', titleJob:'مدیرمالی',desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ', photo:'../Images/team-2.webp'},
  {id:2, fullName:'مهسا رحیمی', titleJob:'مدیر اجرایی',desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ',photo:'../Images/team-1.jpeg'},
  {id:3, fullName:'علی صباحی', titleJob:'مشاور',desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ',photo:'../Images/team-3.webp'},
];

memberTeam.forEach(member => {
  teamContainer.insertAdjacentHTML('beforeend', `
    <div class="relative group mt-4 md:mt-0">
  <img class="md:w-60 md:h-60 border p-2.5 md:p-5" src="${member.photo}" alt="${member.fullName}">

  
  <div class="absolute right-24 top-8 md:right-6 md:top-6 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h4 class="text-white font-vazir-Medium text-sm md:text-base">${member.fullName}</h4>
    <span class="text-primary-pink font-vazir-Regular text-sm md:mt-1 md:mb-1">${member.titleJob}</span>
    <p class="text-gray-100 font-vazir-Light text-[12px] w-56">
      ${member.desc}
    </p>
    <div class='flex justify-around ml-10 mt-2 md:mt-5 p-4'>
    <svg class='text-white bg-primary-pink w-5 h-5 md:w-8 md:h-8'>
    <use href='#facebook'></use>
    </svg>

    <svg class='text-white bg-primary-pink w-5 h-5 md:w-8 md:h-8'>
    <use href='#twitter'></use>
    </svg>

    <svg class='text-white bg-primary-pink w-5 h-5 md:w-8 md:h-8'>
    <use href='#instagram'></use>
    </svg>

    </div>
  </div>
  <div class="absolute md:w-60 md:h-60 inset-0 bg-primary-blue opacity-0 group-hover:opacity-90 z-0 transition-opacity duration-300"></div>
</div>

  `);
});

