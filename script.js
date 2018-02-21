/**
 * when the buttons get clicked they change the svg filter style on the body
 * 
 */
let buttons = document.getElementsByTagName('button');
let body = document.getElementsByTagName('body');


for (var i =0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    if (event.target.value) {
      document.body.style.filter = `url(#${event.target.value})`;
    }
  }, true)
}