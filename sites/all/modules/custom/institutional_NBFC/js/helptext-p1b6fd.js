
//function related to show help text

function test(id)
{
	
	hide_error();
	document.getElementById(id).style.display='block';


}
function step2(id)
{
	
	//hide_error();
	document.getElementById(id).style.display='block';


}
//function related to hide help hint text
function hintdisplay(id)
{
	$('#'+id).hide();
	//document.getElementById(id).style.display='none';
}
//function related to hide help text

function test1(id)
{
	document.getElementById(id).style.display='none';

}

function amount_validation(x,y)
{

	//document.getElementById(amount_error).style.display='none';

	var amount=document.getElementById('amount_expect');
	var message_holder = document.getElementById('amount_error');

	if(amount.value >y){

		message_holder.innerHTML="Amount can not be more than "+y;
		message_holder.style.display="block";
	}

	if(amount.value < x){

		message_holder.innerHTML="Amount can not be less than "+x;
		message_holder.style.display="block";
	}

	if(amount.value <= y && amount.value >= x){
		message_holder.innerHTML=" ";
	}

}
/**
 * 
 * check email address is valid or not
 * @returns {Boolean}
 */
function validate_email()
{
	var x=document.getElementById('email_valid').value;
	var email_check=document.getElementById('email_check');

//	var message_holder = document.getElementById('email_error');
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		document.getElementById('email_check').style.display='block';
		email_check.innerHTML='<span class="redcolor">Please enter a valid email address</span>';
//		alert("Not a valid e-mail address");
		//message_holder.innerHTML="Not a valid e-mail address";
		return false;
	}
	else
	{
		
		checkEmailExist(x);
		document.getElementById('email_check').style.display='none';
	}


}

//email matchinf
function email_match()
{

	var email1=document.getElementById('email1');
	var email=document.getElementById('email_valid');
	var message = document.getElementById('email_error');
	if(email1.value.trim() != email.value.trim())
	{
		//alert(email1.value);
		//alert(email.value);
		message.innerHTML='<p class="redcolor">Both email should be same</p>';
		email1.value=" ";
		//return false;
	}
	else
	{
		message.innerHTML="";
	}

}

//email matchinf
function password_strenth()
{
	//alert('hh');
	var email1=document.getElementById('pass');

	if(email1=='')
	{
		message.innerHTML='<b class="redcolor">password</b>';
		email1.value=" ";
	
	}
	else
	{
		message.innerHTML="";
	}

}

function changeType()
{
	//alert(x);
	var x=document.getElementById("pasword_field").innerHTML;
	var pass=document.getElementById('show_password');
	if(pass.type=="password")
	{
		pass.type="text"
			document.getElementById("pasword_field").innerHTML='Hide';
	}
	else 
	{
		pass.type="password"
			document.getElementById("pasword_field").innerHTML='Show';
	}

}


function CheckPasswordStrength(pwd)
{
	var pass_strength;
	var flag=0;
	var flag_num=1;
	//alert(pwd);
	if (IsEnoughLength(pwd,14) && HasMixedCase(pwd) && HasNumeral(pwd) && HasSpecialChars(pwd))

		pass_strength = "<span><font style='color:olive'>Very strong</font></span>";
	else if (IsEnoughLength(pwd,8) && HasMixedCase(pwd) && (HasNumeral(pwd) || HasSpecialChars(pwd)))
		pass_strength = "<span><font style='color:Blue'>Strong</font></span>";

	else if (IsEnoughLength(pwd,6) && HasNumeral(pwd) && HasSpecialChars(pwd))

		pass_strength = "<span><font style='color:Green'>Good</font></span>";
	/*else if (!HasNumeral(pwd))

		pass_strength = "<b><font style='color:red'>Must contain a number</font></b>";
	else if (!HasSpecialChars(pwd))

		pass_strength = "<b><font style='color:red'>Must contain a special characters</font></b>";*/
	else if (pwd.length < 6) { 
		if(HasSpecialChars(pwd))
		{
			flag_speacil=1;
		}
		if(HasNumeral(pwd))
		{
			flag_num=1;
		}
		pass_strength = "<span><font style='color:red'>Your password should be at least 6 characters long</font></span>";

	}

	else

		pass_strength = "<span><font style='color:red'>Weak</font></span>";
	document.getElementById('pass_strength').style.display='block';
	document.getElementById('pass_strength').innerHTML = 'Strength: '+pass_strength;
}
function IsEnoughLength(str,length)
{
	if ((str == null) || isNaN(length))
		return false;
	else if (str.length < length)
		return false;
	return true;

}
function HasMixedCase(passwd)
{
	if(passwd.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
		return true;
	else
		return false;
}

function HasNumeral(passwd)
{
	if(passwd.match(/[0-9]/))
		return true;
	else
		return false;
}

function HasSpecialChars(passwd)
{
	if(passwd.match(/.[!,@,#,$,%,^,&,*,?,_,~]/))
		return true;
	else
		return false;
}
/**
 * Send Mobile verification code 
 * @returns {Boolean}
 */
function checkEmailExist(email) {
	
	var dataString = 'mail=' + email;
	$.ajax({
		type : "get",
		url : "/email_check",
		data : dataString,
		cache : true,
		success : function(response) {
			if(response.trim()=='true')
				{
				document.getElementById('email_check').style.display='block';
				email_check.innerHTML='<span class="redcolor">The email address is already linked to another account</span>';
				}
			else
				{
				document.getElementById('email_check').style.display='none';
				}
			//$("#express_intrest"+borrower_uid).focus();
			//$("#express_intrest"+borrower_uid).fadeOut(10000).html(
					//'<font color="red">Thanks</font>');
			
			// alert(response);
		}
	});

	
}
/*Charecter validation*/
function hide_error() {

	document.getElementById('email_check').style.display='none';
	document.getElementById('pass_strength').style.display='none';
}

function change4()
{
	alert('hhh');
	/*var progress = parseInt($('.radial-progress').attr('data-progress'));
	    window.uploadProgress = function() {
	    	alert(progress);
	        $('#upload-indicator').css('display', 'inline-block');
	        $('#cloud-icon').hide();
	        progress = progress + Math.floor(Math.random() * 5);
	        if(progress > 100) { progress = 100; }
	        $('.radial-progress').attr('data-progress', progress);
	        if (progress<100) {
	            setTimeout(window.uploadProgress, 100);
	        } else {
	            $('#upload-indicator').hide();
	            $('#tick-icon').css('display', 'inline-block');
	        }
	    }*/
	 //   $('.btn-file input[type="file"]').change(window.uploadProgress);
//alert(id);	
//document.getElementById(id).style.display='block';
}


function showamountdropdown()
{
	var loantype = $("#loantype").val();
	if(loantype==parseInt("90000111")){
		selectedid=loantype;
		$('#business-select').hide();
	}
	if(loantype=="90000116"){
		$('#business-select').show();
	}
	var purposecndid=parseInt("90000111");
	if(selectedid==purposecndid)
		{
		document.getElementById('busness-amount-selected').style.display='block';
		document.getElementById('amount-selected').style.display='block';		  
		}
	else if(loantype=="90000116"){
		document.getElementById('busness-amount-selected').style.display='none';
		document.getElementById('amount-selected').style.display='block';
		}
	
}
