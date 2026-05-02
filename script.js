// ===== MOBILE MENU =====

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


// ===== TICKER =====

const tickerItems = [
  "Class 10 Board Results Declared — 97.4% Pass Percentage",
  "Admission Forms Available — Session 2025-26",
  "Annual Sports Day — March 15, 2025",
  "Science Fair Winners Announced",
  "Summer Vacation: May 20 to June 20",
];

const ticker = document.getElementById("ticker");

const allTicker = [...tickerItems, ...tickerItems];

ticker.innerHTML = allTicker
  .map(item => `<div class="ticker-item">${item}</div>`)
  .join("");


// ===== WHY US =====

const whyData = [
  ["📚","CBSE Curriculum","Structured learning from Class 1 to 12."],
  ["💡","Smart Classrooms","Digital boards and projectors."],
  ["⚽","Sports & NCC","Cricket, basketball and swimming."],
  ["🔬","Modern Labs","Advanced science laboratories."],
  ["🚌","Safe Transport","GPS tracked buses."],
  ["🏆","Safe Campus","CCTV secured campus."],
  ["📖","Library","25,000+ books available."],
  ["🎨","Arts & Music","Music, dance and art facilities."]
];

document.getElementById("whyGrid").innerHTML =
  whyData.map(card => `
    <div class="why-card">
      <div class="why-icon">${card[0]}</div>
      <h3>${card[1]}</h3>
      <p>${card[2]}</p>
    </div>
  `).join("");


// ===== CAROUSEL =====

const slides = [
  {
    img:'assets/carousel-campus.jpg',
    title:'Beautiful Campus',
    desc:'Modern learning spaces.'
  },
  {
    img:'assets/carousel-classroom.jpg',
    title:'Smart Classrooms',
    desc:'Digital learning experience.'
  },
  {
    img:'assets/carousel-lab.jpg',
    title:'Science Labs',
    desc:'Hands-on practical education.'
  }
];

const track = document.getElementById("carouselTrack");
const dots = document.getElementById("carouselDots");

track.innerHTML = slides.map(slide => `
  <div class="carousel-slide">
    <img src="${slide.img}" alt="">
    <div class="carousel-caption">
      <h3>${slide.title}</h3>
      <p>${slide.desc}</p>
    </div>
  </div>
`).join("");

dots.innerHTML = slides.map((_, i) => `
  <button class="dot" data-index="${i}"></button>
`).join("");

let current = 0;

function updateCarousel() {

  track.style.transform =
    `translateX(-${current * 100}%)`;

}

document.getElementById("nextBtn")
.addEventListener("click", () => {

  current++;

  if(current >= slides.length){
    current = 0;
  }

  updateCarousel();

});

document.getElementById("prevBtn")
.addEventListener("click", () => {

  current--;

  if(current < 0){
    current = slides.length - 1;
  }

  updateCarousel();

});

setInterval(() => {

  current++;

  if(current >= slides.length){
    current = 0;
  }

  updateCarousel();

}, 4000);


// ===== COUNTER =====

const counters = document.querySelectorAll(".stat-num");

counters.forEach(counter => {

  const target = +counter.getAttribute("data-target");

  let count = 0;

  const speed = target / 100;

  function updateCount(){

    count += speed;

    if(count < target){

      counter.innerText = Math.floor(count) + "+";

      requestAnimationFrame(updateCount);

    } else {

      counter.innerText = target + "+";

    }

  }

  updateCount();

});