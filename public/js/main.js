$(function(){
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  var myitem=event.to;
$("#courselistingtab").children().removeClass("active");
courselistingtab.children[myitem].toggleClass("active");
})
})
