let body = $(".header");
var menuIcon = $(".navigation__button");  
var menuToggle = new TimelineMax({ paused:true, reversed:true });
var slideDown = $(".navigation__background");
var listItems = $(".navigation__list > li");
let navButton = $(".navigation__checkbox");
let navLink = $("navigation__link");

TweenMax.set(slideDown, {
      y: '-100%',
  }, .15);

menuToggle  
  .to(menuIcon, .5, {
  x:'5',
  ease: Back.easeOut
  // ease: Back.easeIn.config(2.2)
  })
  .to(slideDown, .5, {
  y: '-10%',
  ease: Back.easeOut
  })
  .staggerFrom(listItems, .25, {
    y: '-10',
    ease: Power1.easeOut
  }, .1);

menuIcon.click(function () {
  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
});

// body.click(function () {
//   menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
//     // $('.nav-menu i').css('color','white');
// });

listItems.click(function () {
  menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse(), navButton.trigger('click');
});

navLink.click(function () {
  navButton.trigger('click');
})





// var menuIcon = $(".nav-menu");  
// var menuToggle = new TimelineMax({paused:true, reversed:true});
// var slideDown = $(".menu-container");
// var listItems = $(".list-items > li");

// TweenMax.set(slideDown, {
//       y: '-100%'
//   });

// menuToggle  
//   .to(menuIcon, .5, {
//   x:'-10',
//   ease: Back.easeOut
//   // ease: Back.easeIn.config(2.2)
//   })
//   .to(slideDown, 1, {
//   y: '0%',
//   ease: Back.easeOut
//   })
//   .staggerFrom(listItems, .25, {
//     y: '-10',
//     ease: Power1.easeOut
//   }, .1);

// menuIcon.click(function () {
//   menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
//     // $('.nav-menu i').css('color','white');
// });

// listItems.click(function () {
//   menuToggle.reversed() ? menuToggle.restart() : menuToggle.reverse();
//   $(document).ready(function() {
    
//   })
// });