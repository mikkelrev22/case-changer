var firstNum = document.getElementById('first-num').value;
var secondNum = document.getElementById('second-num').value;

var button = document.getElementById('button');

button.addEventListener('click', function(e){
  e.preventDefault();
  var sum = parseInt(firstNum) + parseInt(secondNum);
  var pTag = document.getElementById('sum');
  pTag.innerText = sum;
})
