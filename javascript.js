let windowWidth = window.innerWidth;
let currentLanguage = 'english';

let changeLanguageToDutch = () => {
  currentLanguage = 'dutch';
  windowWidth = window.innerWidth;
  for (i = 0; i < document.getElementsByClassName('dutch').length; i++) {
    document.getElementsByClassName('dutch')[i].style.display = "block";
    document.getElementsByClassName('english')[i].style.display = "none";
  }
  if (windowWidth <= 780) {
    for (i = 0; i < document.getElementsByClassName('dutch-menu').length; i++) {
      document.getElementsByClassName('dutch-menu')[i].style.display = "none";
      document.getElementsByClassName('english-menu')[i].style.display = "none";
    }
    for (i = 0; i < document.getElementsByClassName('dutch-drop-down-menu').length; i++) {
      document.getElementsByClassName('dutch-drop-down-menu')[i].style.display = "block";
      document.getElementsByClassName('english-drop-down-menu')[i].style.display = "none";
    }
  } else {
    for (i = 0; i < document.getElementsByClassName('dutch-menu').length; i++) {
      document.getElementsByClassName('dutch-menu')[i].style.display = "block";
      document.getElementsByClassName('english-menu')[i].style.display = "none";
    }
  }
}

let changeLanguageToEnglish = () => {
  currentLanguage = 'english';
  windowWidth = window.innerWidth;
  for (i = 0; i < document.getElementsByClassName('english').length; i++) {
    document.getElementsByClassName('dutch')[i].style.display = "none";
    document.getElementsByClassName('english')[i].style.display = "block";
  }
  if (windowWidth <= 780) {
    for (i = 0; i < document.getElementsByClassName('english-menu').length; i++) {
      document.getElementsByClassName('dutch-menu')[i].style.display = "none";
      document.getElementsByClassName('english-menu')[i].style.display = "none";
    }
    for (i = 0; i < document.getElementsByClassName('english-drop-down-menu').length; i++) {
      document.getElementsByClassName('dutch-drop-down-menu')[i].style.display = "none";
      document.getElementsByClassName('english-drop-down-menu')[i].style.display = "block";
    }
  } else {
    for (i = 0; i < document.getElementsByClassName('dutch-menu').length; i++) {
      document.getElementsByClassName('dutch-menu')[i].style.display = "none";
      document.getElementsByClassName('english-menu')[i].style.display = "block";
    }
  }
}

let checkMenuOnResize = () => {
  windowWidth = window.innerWidth;
  if (windowWidth <= 780 && currentLanguage === 'english') {
    for (i = 0; i < document.getElementsByClassName('menu-item').length; i++) {
      document.getElementsByClassName('menu-item')[i].style.display = "none";
    }
    for (i = 0; i < document.getElementsByClassName('dutch-drop-down-menu').length; i++) {
      document.getElementsByClassName('dutch-drop-down-menu')[i].style.display = "none";
      document.getElementsByClassName('english-drop-down-menu')[i].style.display = "block";
    }
  } else if (windowWidth <= 780 && currentLanguage === 'dutch') {
    for (i = 0; i < document.getElementsByClassName('menu-item').length; i++) {
      document.getElementsByClassName('menu-item')[i].style.display = "none";
    }
    for (i = 0; i < document.getElementsByClassName('english-drop-down-menu').length; i++) {
      document.getElementsByClassName('english-drop-down-menu')[i].style.display = "none";
      document.getElementsByClassName('dutch-drop-down-menu')[i].style.display = "block";
    }
  } else if (windowWidth > 780 && currentLanguage === 'english') {
    for (i = 0; i < document.getElementsByClassName('english-menu').length; i++) {
      document.getElementsByClassName('english-menu')[i].style.display = "block";
      document.getElementsByClassName('english-drop-down-menu')[i].style.display = "none";
    }
  } else if (windowWidth > 780 && currentLanguage === 'dutch') {
    for (i = 0; i < document.getElementsByClassName('dutch-menu').length; i++) {
      document.getElementsByClassName('dutch-menu')[i].style.display = "block";
      document.getElementsByClassName('dutch-drop-down-menu')[i].style.display = "none";
    }
  }
}

let burgerMenuStatus = 'closed';

let burgerMenuChangeToX = () => {
  burgerMenuStatus = 'open';
  document.getElementsByClassName('drop-down-menu')[0].style.display = "block";
  document.getElementsByClassName('burger-menu-closed')[0].style.display = "none";
  document.getElementsByClassName('burger-menu-open')[0].style.display = "block";
}

let burgerMenuChangeToBurger = () => {
  burgerMenuStatus = 'closed';
  document.getElementsByClassName('drop-down-menu')[0].style.display = "none";
  document.getElementsByClassName('burger-menu-closed')[0].style.display = "block";
  document.getElementsByClassName('burger-menu-open')[0].style.display = "none";
}

let previousScrollPosition = window.pageYOffset;

$(window).scroll(function() {
  let currentScrollPosition = window.pageYOffset;

  if (previousScrollPosition > currentScrollPosition) {
    document.getElementsByClassName("top-container")[0].style.display = "block";
  } else {
    document.getElementsByClassName("top-container")[0].style.display = "none";
  }
  previousScrollPosition = currentScrollPosition;
});


$(document).ready(function() {
  $('.image-slider').slick();
  checkMenuOnResize();
});
