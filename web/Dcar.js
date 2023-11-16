document.querySelector('.catalog_button.button_card').onmousemove = function (e) {
var x = e.pageX - e.target.offsetLeft;
var y = e.pageY - e.target.offsetTop;
e.target.style.setProperty('--x', x + 'px');
e.target.style.setProperty('--y', y + 'px');
};