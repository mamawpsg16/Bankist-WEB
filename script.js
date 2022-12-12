'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(modal => modal.addEventListener('click', openModal))

const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const logo = document.querySelector('.nav__logo');
const twitter = document.querySelector('.twitter-link');
const link = document.querySelector('.nav__link--btn');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const h1 = document.querySelector('h1');
const s1coordinate = section1.getBoundingClientRect();
const nav = document.querySelector('.nav');
const navHeight = Math.floor(nav.getBoundingClientRect().height);
const allSections = document.querySelectorAll('.section');
// console.log(btnsOpenModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
const header = document.querySelector('.header');
const dotContainer = document.querySelector('.dots');

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/** DOCUMENT MAIN FOR ELEMENTS  */
// console.log(document.documentElement);


/** INSERT/CREATING ELEMENT */
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'Hello, MF <button class="btn">Gotcha Btch</button>';
// const header = document.querySelector('.header');
// header.prepend(message);
// header.append(message.cloneNode(true));
// header.append(message);
// header.after(message);
// header.before(message);
// message.style.zIndex=100;
// console.log(message);
// document.querySelector('.btn').addEventListener('click',()=>alert('HELLO'));


/** DELETE ELEMENTS */
document.querySelector('.btn').addEventListener('click', function () {
  // message.remove();
  // message.parentElement.removeChild(message);
});


/** STYLES, ATTRIBUTES AND CLASSES */
// message.style.backgroundColor = 'Red';
// console.log(getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 100 +'px';

// console.log(Number.parseFloat(getComputedStyle(message).height)+ 40 +'px') ;

// ATTRIBUTES
/** GET ATTRIBUTE VALUES */
// console.log(logo);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// console.log(logo.className);
// console.log(logo.getAttribute('designer'));
// console.log(twitter.href);
// console.log(twitter.getAttribute('href'));
// console.log(link.href);
// console.log(link.getAttribute('href'));

/** SET ATTRIBUTE VALUES */
// console.log(logo.alt = 'ANYAW');
// console.log(logo.setAttribute('designer', 'WTF'));
// console.log(logo);

// NON STANDARD ATTRIBUTE 
// console.log(logo.designer);
// console.log(logo.designer = 'EYOYW');

// DATA ATTRIBUTE
// console.log(logo.dataset.versionNumber);

// CLASSES
logo.classList.add('c')
logo.classList.add('c', 'j')
logo.classList.remove('c')
logo.classList.remove('c', 'j')
logo.classList.toggle('c')
logo.classList.contains('c')


/** SCROLL */

btnScrollTo.addEventListener('click', function (e) {

  // console.log(s1coordinate);
  // console.log(e.target, e.currentTarget.getBoundingClientRect());

  // console.log('Current Scroll X/Y',window.pageXOffset, window.pageYOffset);
  // console.log('height/widht viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);
  // console.log('height/widht viewport',document.documentElement.clientHeight);
  // window.scrollTo(s1coordinate.left,s1coordinate.top);
  // window.scrollTo({
  //   left:s1coordinate.left ,
  //   right:s1coordinate.top,
  //   behavior:'smooth',
  // });

  // section1.scrollIntoView({behavior:'smooth'});
})


/** TYPES OF EVENTS AND EVENT HANDLERS */

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter',function(e) {
//   alert('SHEESHHHHHHHHH');
// })

// h1.onmouseenter = function(e){
//   alert('SHEESHHHHHHHHH');
// }

// const alertH = function(e){
//   alert('SHEESHHHHHHHHH');
//   h1.removeEventListener('mouseenter',alertH);
// }
// h1.addEventListener('mouseenter',alertH);

/** EVENT PROPAGATION:BUBBLING AND CAPTURING */


const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.length);
for (let i = 0; i < numbers.length; i++) {

  let lastval = numbers[-1];
  // numbers[-1] = numbers[i];
  // numbers[i] = numbers[-1];
  // let firstval = numbers.shift();
  // numbers.push(firstval);
  // numbers.unshift(lastval);
}
// console.log(numbers);

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min) + 1);
const randomColor = () => `rgb(${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)})`;
// console.log(randomColor());

// PAGE NAVIGATION 
// document.querySelector('.nav__link').addEventListener('click',function(e){
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV LINKS', e.target, e.currentTarget);
// });


// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     // console.log(e.target, e.currentTarget);
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// })


document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    // console.log(e.target, e.currentTarget);
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})

/** DOM TRAVERSING */

// console.log(h1);
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
//Going Downwards:CHILD
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'white';

//Going upwards : PARENTS
// console.log(h1.parentElement);
// console.log(h1.parentNode);

// console.log(h1.closest('.highlight'));
// h1.closest('.header').style.backgroundColor = 'red'

// Going sideways:Siblings


tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  //Guard Clause
  if (!clicked) return;
  // if(clicked){
  // REMOVE ALL ACTIVE CLASS
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  // ACTIVE TAB
  clicked.classList.add('operations__tab--active');
  // }

  // ACTIVE CONTENT AREA
  // console.log(clicked.dataset.tab);
  // console.log(`.operations__content--${clicked.dataset.tab}`);
  tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');;
})


/** PASSING ARGUMENTS TO EVENT HANDLERS */
//MENU FADE ANIMATION
const handleHover = function (e) {
  // console.log(this);
  // console.log(e);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    // console.log(logo);
    // console.log(siblings);
    siblings.forEach(cursor => {
      if (link !== cursor) {
        cursor.style.opacity = this;
      }
    })
    logo.style.opacity = this;
  }
}
//  nav.addEventListener('mouseover',function(e){
//     handleHover(e, 0.5);
//  });

//  nav.addEventListener('mouseout',function(e){
//   handleHover(e, 1);
//  });

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));


/** ADDING STICKY NAVIGATION */

//  window.addEventListener('scroll',function(e){
//   // console.log('Scroll Y',window.scrollY);
//   // console.log('Section Coordinate',s1coordinate.top);
//   if(window.scrollY > s1coordinate.top){
//     nav.classList.add('sticky');
//   }else{
//     nav.classList.remove('sticky');
//   }
// })

// const obsCallback = function(entries, observer){
//   entries.forEach(entry => console.log(entry));
//   console.log(observer );
// }
// const observerOptions = {
//   root:null,
//   threshold:[0,0.2]
// };

// const observer = new IntersectionObserver(obsCallback, observerOptions);
// console.log(observer.observe(section1));
const stickyNav = function (entries) {
  // console.log(Math.floor(`navHeight`));
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// REVEAL SECTIONS

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.target);
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  }
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

// console.log(allSections);
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


/** LAZY LOADING IMAGES */

// TARGET ELEMENTS WITH THEIR SPECIFIED ATTRIBUTES
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting) {
    entry.target.src = entry.target.dataset.src;

    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  }
}


const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// console.log(imgTargets);

/** SLIDER */
const slides = document.querySelectorAll('.slide')
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
let maxSlide = slides.length - 1;
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow  = 'visible';

// slides.forEach((s,i) => ( s.style.transform = `translateX(${100 * i}%)`))
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  })
}

createDots();

const activateDot = function (slide) {
  // console.log(slide);
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}

const goToSlide = function (slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
  activateDot(slide)

}

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
}

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  // activateDot(curSlide)
}
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)


document.addEventListener('keydown', function (e) {
  if (e.key == 'ArrowRight') {
    nextSlide()
  } else if (e.key == 'ArrowLeft') {
    prevSlide()
  }
  // activateDot(curSlide)
})

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    // console.log('DOT');
    const { slide } = e.target.dataset;
    // console.log(slide);
    // console.log(e.target);
    goToSlide(slide);
  }
  // activateDot(curSlide)
})

/** LIFE CYCLE DOM EVENTS */

document.addEventListener('DOMContentLoaded', function(e){
  // console.log('HTML PARSED AND DOM BUILT');
})

window.addEventListener('load', function(e){
  // console.log('Page fully Loaded',e);
})

window.addEventListener('beforeunload', function(e){
  // console.log('Page fully Loaded',e);
  e.preventDefault();
  // console.log(e);
  e.returnValue ='';
})


//EFFICIENT SCRIPT LOADING:DEFER AND ASYNC
