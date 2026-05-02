// ===== Ticker =====
const tickerItems = [
  "Class 10 Board Results Declared — 97.4% Pass Percentage",
  "Admission Forms Available — Session 2025-26",
  "Annual Sports Day — March 15, 2025",
  "Science Fair Winners Announced",
  "Summer Vacation: May 20 to June 20",
];
const ticker = document.getElementById('ticker');
const allTicker = [...tickerItems, ...tickerItems];
ticker.innerHTML = allTicker.map(t => `<div class="ticker-item"><span class="ticker-dot"></span> ${t}</div>`).join('');

// ===== Why Us cards =====
const whyData = [
  ["📚","CBSE Curriculum","Structured learning from Class 1 to 12 with Science, Commerce & Arts streams."],
  ["💡","Smart Classrooms","Digital boards, projectors, and e-learning tools in every classroom."],
  ["⚽","Sports & NCC","Cricket ground, basketball court, swimming pool & NCC unit for all students."],
  ["🔬","Modern Labs","State-of-the-art Physics, Chemistry, Biology & Computer labs."],
  ["🚌","Safe Transport","GPS-tracked buses covering 40+ routes with trained drivers & attendants."],
  ["🏆","100% Safe Campus","CCTV surveillance, trained security staff & child protection policy."],
  ["📖","Library & Reading","25,000+ books, digital archives, and quiet reading zones for research."],
  ["🎨","Arts & Music","Dedicated studios for music, dance, painting & performing arts."],
];
document.getElementById('whyGrid').innerHTML = whyData.map(([i,t,d]) =>
  `<div class="why-card"><div class="why-icon">${i}</div><h3>${t}</h3><p>${d}</p></div>`
).join('');

// ===== Testimonials =====
const testis = [
  ["RS","Rajesh Sharma","Parent, Class 11","My daughter topped the district in Class 10. The teachers here are truly dedicated and go beyond syllabus to nurture students."],
  ["PD","Priya Devi","Parent, Class 8","Best decision we made. The school environment is disciplined yet nurturing. My son's confidence has grown tremendously."],
  ["AK","Amit Kumar","Parent, Class 12","Excellent infrastructure, smart classes, and a principal who personally knows every student. Highly recommended."],
];
document.getElementById('testiGrid').innerHTML = testis.map(([av,n,r,t]) =>
  `<div class="testi-card"><div class="stars">★★★★★</div><p class="testi-text">"${t}"</p><div class="testi-author"><div class="avatar">${av}</div><div><div class="author-name">${n}</div><div class="author-role">${r}</div></div></div></div>`
).join('');

// ===== Carousel =====
const slides = [
  { img:'assets/carousel-campus.jpg', tag:'Our Campus', title:'A Sprawling 12-Acre Green Campus', desc:'Modern infrastructure spread across spacious grounds, designed for inspired learning and play.' },
  { img:'assets/carousel-classroom.jpg', tag:'Smart Classrooms', title:'Technology-Enabled Learning Spaces', desc:'Every classroom equipped with interactive digital boards, projectors and high-speed Wi-Fi.' },
  { img:'assets/carousel-lab.jpg', tag:'Modern Laboratories', title:'Hands-on Science & Computer Labs', desc:'Fully equipped Physics, Chemistry, Biology, Maths and Robotics labs for practical learning.' },
  { img:'assets/carousel-sports.jpg', tag:'Sports Excellence', title:'Where Champions Are Made', desc:'Cricket ground, basketball court, swimming pool, athletics track and indoor games hall.' },
];
const track = document.getElementById('carouselTrack');
const dots = document.getElementById('carouselDots');
track.innerHTML = slides.map(s =>
  `<div class="carousel-slide"><img src="${s.img}" alt="${s.title}" loading="lazy" /><div class="carousel-caption"><span class="carousel-tag">${s.tag}</span><h3>${s.title}</h3><p>${s.desc}</p></div></div>`
).join('');
dots.innerHTML = slides.map((_,i) => `<button class="carousel-dot${i===0?' active':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('');

let active = 0;
const update = () => {
  track.style.transform = `translateX(-${active*100}%)`;
  dots.querySelectorAll('.carousel-dot').forEach((d,i) => d.classList.toggle('active', i===active));
};
const go = (dir) => { active = (active + dir + slides.length) % slides.length; update(); };
document.getElementById('prevBtn').onclick = () => go(-1);
document.getElementById('nextBtn').onclick = () => go(1);
dots.addEventListener('click', e => {
  if (e.target.dataset.i) { active = +e.target.dataset.i; update(); }
});
setInterval(() => go(1), 4500);
// Numbers Update
const counters = document.querySelectorAll('.stat-num');

counters.forEach(counter => {

    const target = +counter.getAttribute('data-target');

    let count = 0;

    const speed = target / 100;

    const updateCount = () => {

        count += speed;

        if(count < target){
            counter.innerText = Math.floor(count);
            requestAnimationFrame(updateCount);
        }
        else{
            counter.innerText = target.toLocaleString() + "+";
        }

    };

    updateCount();

});