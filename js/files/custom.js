/* =======================================================================
:: Custom javascript for Alejandro Lopez website. 
:: Design and Develop by Alejandro Lopez 2018.
======================================================================= */
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 1000,
    transition: function(url){ window.location.href = url; }
  });

   /* Open the sidenav */
  function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
  }

  /* Close/hide the sidenav */
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }

$(document).ready(function() {
  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      $('#dotnav-item01').toggleClass('dotnav-list-active',
       //add 'ok' class when div position match or exceeds else remove the 'ok' class.
        (scroll >= $('#home').offset().top && scroll < $('#work-section').offset().top)
      );
  });

  //trigger the scroll
  $(window).scroll();//ensure if you're in current position when page is refreshed

  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      $('#dotnav-item02').toggleClass('dotnav-list-active',
       //add 'ok' class when div position match or exceeds else remove the 'ok' class.
        (scroll >= $('#work-section').offset().top && scroll < $('#about-section').offset().top)
      );
  });
  //trigger the scroll
  $(window).scroll();//ensure if you're in current position when page is refreshed

  $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      $('#dotnav-item03').toggleClass('dotnav-list-active',
       //add 'ok' class when div position match or exceeds else remove the 'ok' class.
        scroll >= $('#about-section').offset().top
      );
  });
  //trigger the scroll
  $(window).scroll();//ensure if you're in current position when page is refreshed


  var defaultDuration = 777 // ms
  var edgeOffset = -40 // px
  zenscroll.setup(defaultDuration, edgeOffset)

  $('.carousel').carousel({
  interval: 800,
  pause: 'hover'
  })
});

 