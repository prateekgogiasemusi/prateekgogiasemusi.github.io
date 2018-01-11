function ajax_request_obj(){
var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went onclick="" wrong
				alert("Your browser broke!");
			}
		}
	}
return ajaxRequest;
}

function getSameAddress(){
	var checkoption=document.getElementById("same_as_above").checked;
	if(checkoption==true){
		var address1='';
		 address1=$("#address1").val();
		var address2=$("#address2").val();
		var ustate=$("#ustate").val();
		var reg_city=$("#reg_city").val();
		var reg_pin=$("#reg_pin").val();
		$('#city-list-hidden').show();
		$('#city-list-open').hide();
		if(address1==''){
			alert('Please select Registered Address');
			$("#same_as_above").attr("checked", false);
		}
		else{
			document.getElementById("communication_add1").disabled=true;
			document.getElementById("communication_add2").disabled=true;
			document.getElementById("communication_state").disabled=true;
			document.getElementById("hiddent_communication_city").disabled=true;
			document.getElementById("communication_pin").disabled=true;
			//	$('#verified_mobile').val(mobile);
			$('#communication_add1').val(address1);
			$('#communication_add2').val(address2);
			$('#communication_state').val(ustate);
			$('#hiddent_communication_city').val(reg_city);
			$('#communication_pin').val(reg_pin);
			
		}
		
	
	}
	else{
		document.getElementById("communication_add1").disabled=false;
		document.getElementById("communication_add2").disabled=false;
		document.getElementById("communication_state").disabled=false;
		document.getElementById("hiddent_communication_city").disabled=false;
		document.getElementById("communication_pin").disabled=false;
		$('#city-list-hidden').hide();
		$('#city-list-open').show();
		$('#communication_add1').val('');
		$('#communication_add2').val('');
		$('#communication_state').val('');
		$('#communication_city').val('');
		$('#communication_pin').val('');
		$('#hiddent_communication_city').val('');
	}
}