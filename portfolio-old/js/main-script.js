var span = document.querySelector('.sign');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let scrollpos = window.scrollY
const sign = document.querySelector("sign")
const elems = document.querySelectorAll(".sign-letter");
const circle = document.querySelector(".btn-circle")

function letter_hide() {
  circle.classList.add("btn-circle-appear")
  $("header").addClass("shorter");
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].classList.add("sign_letter_disappear")
      $("header").addClass("shorter");

    }
}
function letter_appear() {
  circle.classList.remove("btn-circle-appear")
  $("header").removeClass("shorter");
  var index = 0, length = elems.length;
  for ( ; index < length; index++) {
      elems[index].classList.remove("sign_letter_disappear")
    }
}

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos >= 10) { letter_hide() }
  else { letter_appear() }
})

function scrollSmoothTo(elementId) {
  console.log(elementId)
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

async function scrollGreetings() {
  const text  = [ "Hello", "Bonjour", "Ciao",
                  "Hola", "Kon’nichiwa",
                  "Nyvää päivää", "Namaste", "Shalom",
                  "Olá", "Halløj"
                  ];
  let index = 0;
  // $("#description").fadeTo( 0, 0 );
  // $("#description").fadeTo( 600, 1 );
  while (true){
      // $( "#description" ).delay( 1200/(index+3) ).fadeTo( 0, 0 );
      $( "#description" ).stop().html( text[ index ] + ".").fadeTo(0, 1)
      await sleep(2400/(index+4))
      if ( index == text.length-1 ) {
          break
        }
      index++;
    };
    $( "#description" ).stop().html("").fadeTo( 200, 0 )
    await sleep(400)
    $( "#description" ).stop().html( "Nice to meet <span id='you'>you</span>.").fadeTo( 1000, 1 )
    await sleep(600)
    $( "#you" ).css( "color", "red" );
    return;
}

$( document ).ready(scrollGreetings())

$('#mail-link').on('mouseover', function(e){
    $(".circle-animation").addClass('active');
    $(".about li").css("opacity", "0")
    $(".btn-circle").css("opacity", "0")
    console.log('yes')
}).on('mouseout', async function(e){
    console.log('no')
    $(".circle-animation").removeClass('active');
    await sleep(100)
    $(".about li").css("opacity", "1")
    await sleep(300)
    $(".btn-circle").css("opacity", "1")
});

async function spin(){
  let degree = 0
  while (true){
    $('.circle-animation').css({
        background: "linear-gradient(" + degree + "deg, rgba(255,181,181,1) 10%, rgba(94,202,238,1) 46%, rgba(94,202,238,1) 57%, rgba(213,189,255,1) 90%)"
    });
    $('#mail-link').css({
        backgroundImage: "linear-gradient(-" + degree*2 + "deg, rgba(255,181,181,1) 10%, rgba(94,202,238,1) 46%, rgba(94,202,238,1) 57%, rgba(213,189,255,1) 90%)"
    });
    await sleep(30)
    degree += 1
    if (degree == 360){
      degree = 0
    }
  }
}
spin()

// activate hamburger button
var body = document.querySelector("body");
var hamburger = document.querySelector(".hamburger");
var ul_container = document.querySelector(".ul-container")
  // On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  console.log('done')
  hamburger.classList.toggle("is-active");
  body.classList.toggle("hide_scroll");
  ul_container.classList.toggle("hidden");
});

// smooth scroll
function scrollNavSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  hamburger.classList.toggle("is-active");
  body.classList.toggle("hide_scroll");
  ul_container.classList.toggle("hidden");
}

function scrollSmoothTo(elementId) {
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
