$(function(){
//1
$(".wrapMain").hide(1000);	
$(".wrapMain").show(3000);
//2
$('#navbar').hover(
	function(){
		$(this).toggleClass("svitlo"); 
	}
);	
//3
$('#accordion').accordion({collapsible:true});
var icons = {
	header:"ui-icon-circle-plus",
	activeHeader:"ui-icon-circle-minus"
};
$('#accordion').accordion({
	collapsible:true,
	icons:icons,
	active:false,
	heightStyle:"content"
	});
//4	
var text1 = "Показати засновницю";
var text2 = "Сховати засновницю";
$("#p").click(function(){
	$('#teach_photo').slideToggle();
	if($('#p').text()!=text1)
	$('#p').text(text1);
	else
	$('#p').text(text2);
	
});	
//5	
$(".inthis").slideUp(2000);
$(".inthis").slideDown(2000);
//6
$("#bh,#price,#logo_teach,#bb").fadeTo("slow",0.05);
$("#bh,#price,#logo_teach,#bb").fadeTo(3000,1);;
//7	
document.ondragstart = noselect;
document.onselectstart = noselect;
document.oncontextmenu = noselect;
function noselect() {return false;} //заборона копіювання  
//8
$(document).ready(function() {
  $("body").css("display", "none"); 
	$("body").fadeIn(1000); 
   $("a.fade").click(function(event){ 
  event.preventDefault();
  linkLocation = this.href;
  $("body").fadeOut(1000, redirectPage); 
  });
	function redirectPage() {
  window.location = linkLocation;
  }
  });
//9 - у окремій бібліотеці, 10 - на сторінці price.html

//11
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.gototop, .alert').fadeIn();
        } else {
            $('.gototop, .alert').fadeOut();
        }
    });
    $('.gototop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});               





});