alert("Yes!") ;
var span = document.querySelector('.sign');
var sign_span_before = document.querySelector('.sign-span::before')

span.onmouseover = function(e) {
  sign_span_before.style.transform = "scale(1.1)"
};
sign.style.fontSize = "100px";
// model_pic.onmouseout = function(e) {
//   sign_text.style.borderBottomColor = 'black';
//   sign_text.style.fontSize= "50px";
// };

//side menu activation

console.log('here')
