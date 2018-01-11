/**** Forget Password Messge ********/
function message_reset(){
		var name=document.getElementById('edit-name');
		if(name.value!=""){
		alert("Further instructions will be sent to your e-mail address");
		}
		return true;
	}
/**** Lender Show Cart  ********/	
function show_cart(){
	var carth = document.getElementById('cart_holder');
	if(carth.style.display=="none"){
	   carth.style.display="block";
	}
	else{
		carth.style.display="none";
	}
	}
/**** Lender Checkout Cart  ********/	
function checkout(lender){
		 var hostname =location.protocol+"//"+location.hostname;	
		 window.location.href= hostname+"/display-cart/"+lender;
	}
/**** signup div setting ********/	
	function show_settings(){
		var carth = document.getElementById('sign_up_div');
		if(carth.style.display=="none"){
		   carth.style.display="block";
		}
		else{
			carth.style.display="none";
		}
		}
/**** Call dlmenu ********/	
	$(function() {
		$( '#dl-menu' ).dlmenu();
	});
/**** Reload popup close js ********/	
	Shadowbox.init(
			{  
				onClose:function(){location.reload();}

			});
	
	
/**** Initiate popup close js ********/		
	Shadowbox.init({onClose:function(){location.reload();}});
	function mamage_dropdown(){	
		var ddm=document.getElementById("ddmenu");
		ddm.style.display="block";
	}
	function close_dropdown(){	
		var ddm=document.getElementById("ddmenu");
		ddm.style.display="none";
	}