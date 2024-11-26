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

// Member Array
const memberTeam = [
  {id:1, fullName:'رضا احمدی', titleJob:'مدیرمالی',desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ', photo:'../Images/team-2.webp'},
  {id:2, fullName:'مهسا رحیمی', titleJob:'مدیر اجرایی',desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ',photo:'../Images/team-1.jpeg'},
  {id:3, fullName:'علی صباحی', titleJob:'مشاور',desc:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و ',photo:'../Images/team-3.webp'},
];

// Create Member Box
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


const cartContainer = document.querySelector('.cart__container');

const cartInfos = [

{image:'../Images/advisor.webp',titleNews:'ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ', author:'بهزاد اسلامی', tag:'مشاوره' , descCart:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و '},
{image:'../Images/work-pc.webp',titleNews:'ورم ایپسوم متن ساختگی بام ', author:'لیلا احمدی', tag:'هوش مصنوعی و مشاوره' , descCart:'لورم ایپسوم متن ساختگی با تولید، و '},
{image:'../Images/phone-image.webp',titleNews:'ورم ایپسوم متن ساختگی ', author:'مهسا رجبی', tag:'شبکه اجتماعی و مشاوره' , descCart:'لورم ایپ لورم ایپسوم متن '},

]

cartInfos.forEach(cartInfo =>{
  cartContainer.insertAdjacentHTML('beforeend', `
     <div class=" md:w-fit w-full mt-5 border-2 border-primary-pink">
            <img class="w-full h-52 mb-2.5 md:mb-5" src=${cartInfo.image} alt=${cartInfo.titleNews}>
            <h3 class="flex flex-wrap mr-2 ml-2 text-sm md:text-base font-vazir-Medium text-primary-blue hover:text-primary-pink transition-all delay-100">${cartInfo.titleNews}<h3>
<!-- Author And Tag Cart -->
            <div class="flex mt-4 pr-2.5 md:pr-5 mb-1.5 md:mb-3">
<div class="flex">
  <svg class="w-5 h-5 text-primary-blue">
    <use href="#user"></use>
    <span class="text-primary-blue text-sm font-vazir-Light mr-1.5">${cartInfo.author}</span>
  </svg>
</div>

<div class="h-6 w-0.5 ml-2 mr-2 border bg-primary-pink border-primary-pink"></div>

<div class="flex">
  <svg class="w-5 h-5 text-primary-blue">
    <use href="#tag"></use>
  </svg>
  <span class="text-primary-blue text-sm font-vazir-Light mr-1.5">${cartInfo.tag}</span>
</div>
            </div>
            <!-- Description Cart -->
<p class="text-gray-500 text-sm md:text-base font-vazir-Regular w-56 md:w-80 mr-2 ml-2">
  ${cartInfo.descCart}
</p>
    `)
})