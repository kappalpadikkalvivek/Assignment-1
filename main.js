// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80  ) {
    document.getElementById("logo").style.width = "125.28px ";
    document.getElementById("logo").style.backgroundImage="url(/images/LOGO_WHITE_AFTER.png)";
    document.getElementById("logo").style.height = "20px ";
    document.getElementById("logo").style.marginTop="15px";
    document.getElementById("navbar").style.height="54px";
    document.getElementById("navmenu").style.margin="0px";
    document.getElementById("navmenu").style.marginTop="16.5px";

    

  } else {
    document.getElementById("logo").style.width = "313.22px";
    document.getElementById("logo").style.height = "50px ";
    document.getElementById("logo").style.marginTop="24px";
    document.getElementById("logo").style.backgroundImage="url(/images/LOGO_NYC_CTO.png)";
    document.getElementById("navbar").style.height="99px";
    document.getElementById("navmenu").style.margin="0px";
    document.getElementById("navmenu").style.marginTop="39px";
    
  }
}

// Script for auto rotate texts.
var TxtRotate = function(el, toRotate, period) {
this.toRotate = toRotate;
this.el = el;
this.loopNum = 1;
this.period = parseInt(period, 8) || 100;
this.txt = '';
this.tick();
this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
var i = this.loopNum % this.toRotate.length;
var fullTxt = this.toRotate[i];

if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1 );
} else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
}

this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
var that = this;
var delta = 100 - Math.random() * 100;

if (this.isDeleting) { delta /= 4; }

if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
} else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
}

setTimeout(function() {
    that.tick();
}, delta);
};

window.onload = function() {
var elements = document.getElementsByClassName('txt-rotate');
for (var i=0; i<(elements.length); i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
    new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #e1004b }";
document.body.appendChild(css);
};
