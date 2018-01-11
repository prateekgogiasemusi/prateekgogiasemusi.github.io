	function isNumberKey(evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode
	
		if (charCode == 43 || charCode == 45)
			return true;
	
		else if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
	
		else
			return true;
	}
	/**
	 * 
	 * @param evt Enbable mobile verification button
	 * @returns {Boolean}
	 */
	function isNumberKeycount(evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode
		if (charCode == 43 || charCode == 45) {
			var text_length = $('#txt2').val().length;
			if (text_length >= 9) {
				document.getElementById('show_mobile_message').innerHTML = '<b class="redcolor glyphicon glyphicon-exclamation-sign"></b> <a onclick="send();"  href="javascript:void(0)" >Send OTP</a>.';
			} else {
			}
			return true;
		} else if (charCode > 31 && (charCode < 48 || charCode > 57)) {
			return false;
		} else {
			var text_length = $('#txt2').val().length;
	
			if (text_length >= 9) {
				document.getElementById('show_mobile_message').innerHTML = '<b class="redcolor glyphicon glyphicon-exclamation-sign"></b><a onclick="send();"  href="javascript:void(0)" >Send OTP</a>.';
			}
	
			else {
			}
			return true;
		}
	}
	/**
	 * open popup for mobole verification
	 */
	function send() {
		var mobile = document.getElementById("txt2").value;
		var text_length = $('#txt2').val().length;
		if (mobile == "") {
			alert("Kindly enter a mobile number");
			return false;
		}
		else if (text_length <10) {
			alert("Mobile Number Should be 10 digit");
			return false;
		}
		else
			{
		sendMobilecode();
		$('#optss').show();
		$('#otp').val('');
		//document.getElementById("mobile_verification_form").click();
			}
	}
	/*PIncode validation*/
	function isPin(evt) {
		var charCode = (evt.which) ? evt.which : event.keyCode
	
		if (charCode > 31 && (charCode < 48 || charCode > 57))
			return false;
	
		else
			return true;
	}
	
	/*Charecter validation*/
	function isCharacter(evt) {
	
		var charCode = (evt.which) ? evt.which : event.keyCode
	
		if (charCode > 32 && (charCode < 65 || charCode > 90)
				&& (charCode < 97 || charCode > 122)) {
			return false;
		}
		return true;
	}
	/**
	 * Send Mobile verification code 
	 * @returns {Boolean}
	 */
	function sendMobilecode() {
	
		var ajax_req_obj = ajax_request_obj();
		parameters = "&action=mvc";
		var hostname = location.protocol + "//" + location.hostname;
		var mobile = document.getElementById("txt2").value;
		if (mobile == "") {
			alert("Kindly enter a mobile number");
			return false;
		} else {
			var querystring = hostname + "/mobile-verify/" + mobile;
	
			ajax_req_obj.open("POST", querystring, true);
			ajax_req_obj.setRequestHeader("Content-type",
					"application/x-www-form-urlencoded")
			ajax_req_obj.send(parameters);
			ajax_req_obj.onreadystatechange = function() {
				if (ajax_req_obj.readyState == 4) {
					//var vcode = document.getElementById("vcod");
					var msg_cont = document.getElementById("verification_msg");
				//vcode.value = ajax_req_obj.responseText;
					
					//$('#verified_mobile').val(mobile);
					//alert(ajax_req_obj.responseText);
					if($.trim(ajax_req_obj.responseText)=='failed'){
						$('#verification_fail').show();
					}
					else{
						$('#verification_fail').hide();
						$('#vcod').val($.trim(ajax_req_obj.responseText));
					}
					document.getElementById('mob_error').innerHTML = "Verification code has been sent to your mobile "
							+ mobile;
					//	msg_cont.innerHTML = "Verification code has been sent to your mobile "
					//	+ mobile;
					//document.getElementById("show_mobile_message").style.display = 'none';
					msg_cont.focus();
				}
			}
	
		}
	}
	/**
	 * check 
	 */
	function verifyMobilecode() {
		var getcode = $('#vcod').val();
		var inputcode = $('#resend').val();
		var mobilenum = $('#txt2').val();
		//alert(getcode);
		//alert(mobilenum);
		 $.ajax({
			  type: "POST",
			  url:"/check-verification",
			  data: {
					'code':inputcode,
					'mobile':mobilenum
				},
			  success: function(result){
				  var result = result.split("_");
						if ($.trim(result[0])=='success') {
							$('#mobile-form').modal('hide');
							document.getElementById("show_mobile_message").style.display = 'block';
							document.getElementById('show_mobile_message').innerHTML = '<span class="glyphicon glyphicon-ok-sign green"></span> Verified</font>';
							$('#resend').val('1');
							$('#vcod').val(result[1]);//set input code verified opacity
							//return false;
						} else {
							$('#resend').val('');
							document.getElementById("mob_error").style.opacity = "1";
							document.getElementById('mob_error').innerHTML = "<font color=red>Wrong verification code. Try again.</font> ";
					}
			  }
		  });
	}
	function disabledcopypaste(e) {

		// current pressed key
		    var pressedKey = String.fromCharCode(e.keyCode).toLowerCase();
		    if (e.ctrlKey && (pressedKey == "c" || pressedKey == "x" || pressedKey == "v" || pressedKey == "a")) {
		        return false;
		    }
		   

}
		    
function makepasswordtype(){
		var pass=document.getElementById('aadhaar_number');
		pass.type="password";
}

/*function isNumberKey1(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	 if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	 matchPassword();
}*/

function matchPassword(){
	if (jQuery('#confirm_aadhaar_number').val() == jQuery('#aadhaar_number').val()) {
		$("#pancard_false").css("display", "none");
		$("#pancard_correct").css("display", "block");
    } else {
    	$("#pancard_correct").css("display", "none");
    	$("#pancard_false").css("display", "block");
    }
}