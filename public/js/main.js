$(function(){
const myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', event => {
  var myitem=event.to;
$("#courselistingtab").children().removeClass("active");
courselistingtab.children[myitem].toggleClass("active");
})
var items=$(courselistingtab).children();
for(var i=0;i<items.length;i++){
items[i].dataset.myid=i;
items[i].children[0].dataset.myid=i;
$(items[i]).chilren("a").click(function(){
$(".carousel-indicators button").removeClass("active");
$(".carousel-item").removeClass("active");
for(var y=0;y<items.length;y++){
if (y == $(this)[0].dataset.myid) {
$($('.carousel-item')[y]).addClass("active");
$($('.carousel-indicators button')[y]).addClass("active");
break;
}
}
});
}
})
