function scrollSmoothTo(elementId) {
  console.log(elementId)
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

function delay (URL) {
    $("body").css("opacity", "0")
    setTimeout( function() { window.location = URL }, 200 );
}
