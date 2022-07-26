
const circles = document.querySelectorAll('.circle-progress');
const values = document.querySelectorAll('.progress-value');

let progressStart = 0;
const progressEnd = [95, 80, 60, 60];

let speed = 40;

const progress = setInterval(() => {
  
  values.forEach((value, i) => {
    
    progressStart++;

    value.textContent = `${progressEnd[i]}%`;
    circles[i].style.background = `conic-gradient(
        #2fb7fe ${progressStart * 3.6}deg,
        #cadcff ${progressStart * 3.6}deg )`;

    if (progressStart == progressEnd[i]) {
      clearInterval(progress);
    }
  });
}, speed);

//burger//
let navslide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navlinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navlinkfade 0.5s ease forwords ${index / 7 + 0.3}s'
            }
        });
        burger.classList.toggle('toggle');
    });
}

navslide();