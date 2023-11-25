document.querySelector('.button_card').onmousemove = function (e) {
var x = e.pageX - e.target.offsetLeft;
var y = e.pageY - e.target.offsetTop;
e.target.style.setProperty('--x', x + 'px');
e.target.style.setProperty('--y', y + 'px');
};

var buttons = document.getElementsByClassName('catalog_button'), forEach = Array.prototype.forEach;
forEach.call(buttons, function (b) { b.addEventListener('click', addElement); });
function addElement(e) { 
    var addDiv = document.createElement('div'), mValue = Math.max(this.clientWidth, this.clientHeight),
    rect = this.getBoundingClientRect();
    sDiv = addDiv.style, px = 'px';
    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
    addDiv.classList.add('pulse'); this.appendChild(addDiv);
}