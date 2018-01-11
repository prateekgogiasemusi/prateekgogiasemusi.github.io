$(function(){ 
 /* hamburger menu */       
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).toggle();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
  /* dropdown change expand */
$(".dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});  
    

});
 /* Time line date expand */
$(function () {			
                    $('a[data-toggle="collapse"]').on('click',function(){
				
				var objectID=$(this).attr('href');
				
				if($(objectID).hasClass('in'))
				{
                                    $(objectID).collapse('hide');
				}
				
				else{
                                    $(objectID).collapse('show'); 
				}
                    });
					
	 /* Time line list expand */
  $(".slidingDiv").hide();
$(".show_hide").show();

$('.show_hide').click(function(){
$(".slidingDiv").slideToggle();
$('.show_hide').hide(); 
});

 

    
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
  }
}

 
 /*overlay */
$('#some-button').click( function () { 
    $('#overlay, #overlay-back').fadeIn(500); 
});

$('#overlay, #overlay-back').on('click', function () { 
    $('#overlay, #overlay-back').fadeOut(500); 
});

/*filterbox */
$('.filter-box').on('click', function (e) { 
    e.stopPropagation();
});
/* bookmarked */
$('.bookmarked').on('click', function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active');
})

 /* dropdown change expand */


    

});

