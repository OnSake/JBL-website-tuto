/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
  //Vérifier que le navToggle existe
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener("click", () =>
    navMenu.classList.remove("show-menu")
  );
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));
// à chaque fois qu'on clique sur un .nav_link, on lance linkAction et cache le menu
/*=============== ADD BLUR HEADER ===============*/
const scroollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY > 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scroollHeader);

/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper(".favorite_swiper", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  grabCursor: true,

  breakpoins: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionid = current.getAttribute("id"),
          sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionid + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
