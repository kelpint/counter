//index.js

let counter = 0;
document.getElementById('upcount').onclick = function() {
  counter = counter + 1;
  document.getElementById('count').innerText = String(counter);
}
document.getElementById('downcount').onclick = function() {
  counter = counter - 1;
  document.getElementById('count').innerText = String(counter);
}
document.getElementById('reset').onclick = function() {
  counter = 0;
  document.getElementById('count').innerText = String(counter);
}
document.getElementById('multiply').onclick = function() {
  counter = counter * 10;
  document.getElementById('count').innerText = String(counter);
}
