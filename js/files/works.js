  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 1000,
    transition: function(url){ window.location.href = url; }
  });

  $('.carousel').carousel({
  interval: 2000,
  pause: 'hover'
  })