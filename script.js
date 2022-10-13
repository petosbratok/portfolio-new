var body = document.getElementsByTagName('body')[0];
// trigger this function every time the user scrolls
window.onscroll = function (event) {
  python_deepness = window.pageYOffset + document.getElementById('python-panel').getBoundingClientRect().top - 100;
  django_deepness = window.pageYOffset + document.getElementById('django-panel').getBoundingClientRect().top - 100;
  var scroll = window.pageYOffset;
  if (scroll >= python_deepness && scroll < django_deepness) {
       body.style.backgroundColor = '#0b0e14';
  } else if (scroll >= django_deepness){
      body.style.backgroundColor = '#050a14';
  } else {
      body.style.backgroundColor = 'var(--dark-grey)';
  }
}

function scrollSmoothTo(elementId) {
  console.log(elementId)
  var element = document.getElementById(elementId);
  element.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

$(".python #title-0").mouseover(function(){
  show(".python", "#topic-0", "#title-0")
});
$(".python #title-1").mouseover(function(){
  show(".python", "#topic-1", "#title-1")
});
$(".python #title-2").mouseover(function(){
  show(".python", "#topic-2", "#title-2")
});
$(".python #title-3").mouseover(function(){
  show(".python", "#topic-3", "#title-3")
});
$(".python #title-4").mouseover(function(){
  show(".python", "#topic-4", "#title-4")
});

$(".django #title-0").mouseover(function(){
  show(".django", "#topic-0", "#title-0")
});
$(".django #title-1").mouseover(function(){
  show(".django", "#topic-1", "#title-1")
});
$(".django #title-2").mouseover(function(){
  show(".django", "#topic-2", "#title-2")
});
$(".django #title-3").mouseover(function(){
  show(".django", "#topic-3", "#title-3")
});
$(".django #title-4").mouseover(function(){
  show(".django", "#topic-4", "#title-4")
});

function show(topic, element_id, title_id){
  $(topic + " .topic-description").css("opacity", 0)

  $(topic + " " + element_id).css("opacity", 1)
}
