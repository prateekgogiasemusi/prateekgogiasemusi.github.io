jQuery(document).ready(function(){
	$('#ques_next-6').hide();
	$('ul.list-type li').click(function() {
					var hidId = $(this).attr('data-id');
					var hidValue = $(this).attr('data-value');
					$('#'+hidId).val(hidValue);
					var loanType = $('#purpose-1').val();
					if(loanType!=''){
						loanType = $('#purpose-1').attr('data-value');
						$('#hid_loan_type').val(loanType);
					}
					if(hidId=='hid_edu_qualificaiton'){
						var condition = $(this).attr('data-con');
						if(condition=='trues'){
						//$('#ques_3-5').hide();
							var id = $(this).closest('[id]').attr(
							'id');
							$('#' + id)
							.slideUp(
									'slow',
									'easeInSine',
									function() {
										$('#ques_3-6')
												.css(
														'opacity',
														0)
												.slideDown(
														'slow')
												.animate(
														{
															opacity : 1
														},
														{
															queue : false,
															duration : 1200,
															easing : 'easeInSine'
														});
									


				});
						$('.business').each(function(){
							var slrId = $(this).attr('id');
							$(this).removeAttr('id');
							slrId = slrId.split('-');
							//alert(slrId[0]+'-'+slrId[1]);
							$(this).attr('id',slrId[0]+'-'+slrId[1]);
						});
						}
					}
	});

$('#ques_next-2').click(function(e){
	var rangeValue = $('#rangevalue').val();
	$('#hid_loan_amount').val(rangeValue);
});
});
function dobvalidation(loan_questionid,questionid,userage){
	//alert(1);
	var day = $('#day').val();
	var month = $('#month').val();
	var year = $('#year').val();
	if(day==''){
		//alert("Please select day");
		return false;
	}
	else if(month==''){
		//alert("palese select month");
		return false;
	}
	else if(year==''){
		//alert("please select year");
		return false;
	}
	else{
		var days = (parseInt(day)+1);
		dob = new Date(days+'-'+month+'-'+year);
		var today = new Date();
		var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
		if(age<userage){
			alert("You age is less then "+userage+".");
			return false;
		}
		month = selectMonth(month);
		var validDays = selectMonthwiseDays(month,year);
		if (validDays<day) {
			alert("Invalid Date");
	}		
		else{
		$('#hid_dob').val(day+'/'+month+'/'+year);
		//alert(day+'/'+month+'/'+year);
		changeBirthDate(loan_questionid,questionid);}
		
		
	}
	//alert(day+'/'+month+'/'+year);
}
function selectMonth(month){
	var monthNames = ["January", "February", "March", "April", "May", "June",
	                  "July", "August", "September", "October", "November", "December"
	                 ];
	var month = monthNames.indexOf(month);
	return month+1;
}
function selectMonthwiseDays(month,year){
	if(parseInt(year)%4==0 && parseInt(month)==2){
        var validDays=29;
	}
	else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        var validDays=31;
	}
	else if(month==2){
        var validDays=28;
	}
	else{
        var validDays=30;
	}
	return validDays;
}
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
function validatePanCard(id, predivId){
	var panNumber = $('#loan_ques-5').val();
	if (panNumber != "") {
		ObjVal = panNumber;
		var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/;
		var code = /([C,P,H,F,A,T,B,L,J,G])/;
		var code_chk = ObjVal.substring(3, 4);
		if (ObjVal.search(panPat) == -1) {
			//Obj.focus();
			//alert("Please enter valid pan number.");
			return false;
		}
		if (code.test(code_chk) == false) {
			//alert("Please enter valid pan number.");
			return false;
		}
		btn_addClass_add(id, predivId);
		
	/*	$.ajax({
			type: "POST",
		    data: {
		        panno: panNumber
		    },
		    url: '/checkpannumber',
		    success: function(response) {
		    	alert(response);
		    	if(response==0){
		    		alert("Pan Number already exist.");
		    		return false;
		    	}
		    	else{
		    		
		    	}
		      
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
	*/	
	}
	$('#hid_pancard').val(panNumber);
}
function addressvalidation(){
	var address = $('#loan_ques-6').val();
	var state = $('#state-6').val();
	var city = $('#city-6').val();
	var pincode = $('#pincode').val();
	if(address==''){
		return 0;
	}
	else if(state==''){
		return 0;
	}
	else if(city==''){
		return 0;
	}
	else if(pincode==''){
		return 0;
	}
	else{
		$('#ques_next-6').show();
		$('#hid_address').val(address);
		$('#hid_city').val(city);
		$('#hid_pincode').val(pincode);
		changeSelectColor();
		return 1;
	}	
}
function validateaadhar(loanid,queid){
	var aadhar = $('#loan_ques-8').val();
	var phoneno = /^\d{12}$/;  
	  if(aadhar.match(phoneno)){ 
			  if(loanid=='loan_ques-8'){
				  changeDate(loanid,queid);
			  }
			  else{
				  $('#skip').hide();
				  $('#btn_step1-8').show();
			  }
	        }  
	      else  
	        { 
		 $('#skip').show();
			  $('#btn_step1-8').hide(); 
	    	  return false;  
	        }  
	$('#hid_aadhar_number').val(aadhar);
}
jQuery(document).ready(function(){
$('#name').keyup(function(){
	var name = $('#name').val();
	$('#hid_bank_account_name').val(name);
});
});

function eligibilityenabledisable($check){
	document.getElementById("eligibityload").style.display = "none";
	if($check==true){
		document.getElementById("paymentreg").style.display = "block";
	}
	else{
		document.getElementById("eligibilityreject").style.display = "block";
	}
}
function exchangeId(empType){
	if(empType=='57'){
		var businessId = $(".business").attr('id');
		if(businessId=='ques_3-6'){
			$('.business').each(function(){
				var busId = $(this).attr('id');
				$(this).attr('id',busId+'-B');
			});
		}
		$('.salaried').each(function(){
			var slrId = $(this).attr('id');
			$(this).removeAttr('id');
			slrId = slrId.split('-');
			//alert(slrId[0]+'-'+slrId[1]);
			$(this).attr('id',slrId[0]+'-'+slrId[1]);
		});
	}
	if(empType=='58'){
		var salariedId = $(".salaried").attr('id');
		if(salariedId=='ques_3-6'){
			$('.salaried').each(function(){
				var srlId = $(this).attr('id');
				$(this).attr('id',srlId+'-S');
			});
		}
		$('.business').each(function(){
			var slrId = $(this).attr('id');
			$(this).removeAttr('id');
			slrId = slrId.split('-');
			//alert(slrId[0]+'-'+slrId[1]);
			$(this).attr('id',slrId[0]+'-'+slrId[1]);
		});
	}
}
function validateBlankInput(id,qid){
	var idValue = $('#'+id).val();
	if(idValue!=''){
		var dataId = $('#'+id).attr('data-id');
		$('#'+dataId).val(idValue);
		if(id=='loan_ques_3-7'){
		changeDate_text(id,qid);
	}
	else{
		changeDate(id,qid);
	}
	}
	
}
function addressvalidationstep3(){
	var ids = $('#state-10').attr('data-id');
	//alert(ids);
	var address = $('#'+ids).val();
	var state = $('#state-10').val();
	var city = $('#city-10').val();
	var pincode = $('#pincode-2').val();
	if(address==''){
		return false;
	}
	else if(state==''){
		return false;
	}
	else if(city==''){
		return false;
	}
	else if(pincode==''){
		return false;
	}
	else{
		$('#ques_next_3-8').show();
		$('#hid_company_state').val(state);
		$('#hid_company_address').val(address);
		$('#hid_company_city').val(city);
		$('#hid_company_pincode').val(pincode);
		changeSelectColor();
	}	
}
function addressvalidationstep3S(){
	var ids = $('#state-10').attr('data-id');
	//alert(ids);
	var address = $('#'+ids).val();
	var state = $('#state-10').val();
	var city = $('#city-10-S').val();
	var pincode = $('#pincode-2-S').val();
	if(address==''){
		return false;
	}
	else if(state==''){
		return false;
	}
	else if(city==''){
		return false;
	}
	else if(pincode==''){
		return false;
	}
	else{
		$('#ques_next_3-7').show();
		$('#hid_company_state').val(state);
		$('#hid_company_address').val(address);
		$('#hid_company_city').val(city);
		$('#hid_company_pincode').val(pincode);
		changeSelectColor();
	}	
}
function saveValues(valId,valValue){
	$('#'+valId).val(valValue);
}
function startregValidation(id,qid){
	//alert(1);
	var day = $('#day_11').val();
	var month = $('#month_11').val();
	var year = $('#year_11').val();
	if(day==''){
		
		return false;
	}
	else if(month==''){
		
		return false;
	}
	else if(year==''){
		
		return false;
	}
	else{
		$('#'+qid).show();
		day = $('#day').attr('data-value');
		month = $('#month').attr('data-value');
		year = $('#year').attr('data-value');
		month = selectMonth(month);
		var validDays = selectMonthwiseDays(month,year);
		if (validDays<day) {
			alert("Invalid Date");
		}
		else{
		$('#hid_company_reg_date').val(day+'/'+month+'/'+year);
		}
		
	}
	//alert(day+'/'+month+'/'+year);
}
function validateRegistration(){
	var name = $('#fname').val();
	if(name.length<3){
		$('.nameerror').hide();
		$('#fname').parent('div').removeClass('floating-label-success');
		$('#fname').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#fname').parent('div').addClass('floating-label-error');
		$('#fname').focus();
		return false;
	}
	var lname = $('#lname').val();
        if(lname==''){
                $('.nameerror').hide();
                $('#1name').parent('div').removeClass('floating-label-success');
                $('#lname').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
                $('#lname').parent('div').addClass('floating-label-error');
                $('#lname').focus();
                return false;
        }

	var email = $('#email_valid').val();
	if(email==''){
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		document.getElementById('email_check').style.display='block';
		$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#email_valid').parent('div').addClass('floating-label-error');
		email_check.innerHTML='<span class="redcolor">EMAIL ID SHOULD NOT BE BLANK.</span>';
		$('#email_valid').focus();
		return false;
	}
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		document.getElementById('email_check').style.display='block';
		$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#email_valid').parent('div').addClass('floating-label-error');
		email_check.innerHTML='<span class="redcolor">Please enter a valid email address</span>';
		$('#email_valid').focus();
		return false;
	}
	var pass = $('#show_password').val();
	if(pass.length<6){
		$('#show_password').parent('div').removeClass('floating-label-success');
		$('.passerror').hide();
		$('#show_password').parent('div').append('<div class="passerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#show_password').parent('div').addClass('floating-label-error');
		pass_strength = "<span><font style='color:red'>Your password should be at least 6 characters long</font></span>";
		document.getElementById('pass_strength').innerHTML = pass_strength;
		$('#show_password').focus();
		return false;
	}
	var mobile=$('#txt2').val();
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
	  if(!mobile.match(phoneno)){
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		  $('#verification_msg').html('<span class="redcolor">Please enter valid mobile number.</span>');
		  $('#txt2').focus();
		  return false;
	  } 
	  if($('#vcod').val()==''){
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		  $('#verification_msg').html('<span class="redcolor">Mobile Number is not verified.</span>');
		  return false;

	  }
	if (!jQuery("#checkbox1").is(":checked")) {
		  $('#checkbox1').parent('div').addClass('checkbox-danger');	
	        return false;
	    }
	if (!jQuery("#checkbox2").is(":checked")) {
		  $('#checkbox2').parent('div').addClass('checkbox-danger');	
	        return false;
	    }
	  if (!jQuery("#checkbox3").is(":checked")) {
		  $('#checkbox3').parent('div').addClass('checkbox-danger');	
	        return false;
	    }	
}
function validatemobileverification(){
	if (document.getElementById('email_valid')) {
	var email = $('#email_valid').val();
	if(email==''){
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		document.getElementById('email_check').style.display='block';
		$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#email_valid').parent('div').addClass('floating-label-error');
		email_check.innerHTML='<span class="redcolor">EMAIL ID SHOULD NOT BE BLANK.</span>';
		$('#email_valid').focus();
		return false;
	}
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		document.getElementById('email_check').style.display='block';
		$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#email_valid').parent('div').addClass('floating-label-error');
		email_check.innerHTML='<span class="redcolor">Please enter a valid email address</span>';
		$('#email_valid').focus();
		return false;
	}
	}
	var mobile=$('#txt2').val();
	 if(mobile==''){
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		  $('#verification_msg').html('<span class="redcolor">Mobile number should not be blank.</span>');
		  $('#txt2').focus();
		  return false;
	  } 
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
	  if(!mobile.match(phoneno)){
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		  $('#verification_msg').html('<span class="redcolor">Please enter valid mobile number.</span>');
		  $('#txt2').focus();
		  return false;
	  } 
	  if($('#vcod').val()==''){
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		  $('#verification_msg').html('<span class="redcolor">Mobile Number is not verified.</span>');
		  return false;
	
	  }
	  if (!jQuery("#checkbox1").is(":checked")) {
		  $('#checkbox1').parent('div').addClass('checkbox-danger');	
	        return false;
	    }
	  if (!jQuery("#checkbox2").is(":checked")) {
		  $('#checkbox2').parent('div').addClass('checkbox-danger');	
	        return false;
	    }
	  if (!jQuery("#checkbox3").is(":checked")) {
		  $('#checkbox3').parent('div').addClass('checkbox-danger');	
	        return false;
	    }
}
function validate_email_v2()
{
	var x=document.getElementById('email_valid').value;
	var email_check=document.getElementById('email_check');

//	var message_holder = document.getElementById('email_error');
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		document.getElementById('email_check').style.display='block';
		$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#email_valid').parent('div').addClass('floating-label-error');
		email_check.innerHTML='<span class="redcolor">Please enter a valid email address</span>';
//		alert("Not a valid e-mail address");
		//message_holder.innerHTML="Not a valid e-mail address";
		return false;
	}
	else
	{
		$.ajax({
			type: "GET",
		    url: '/check_email_varify?p[]=emails='+x,
		    success: function(response) {
		    	if(response==0){
		    		$('#email_valid').parent('div').removeClass('floating-label-error');
		    		$('.emailerror').hide();
		    		$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-check-circle"></i></div>');
		    		$('#email_valid').parent('div').addClass('floating-label-success');
		    		document.getElementById('email_check').style.display='none';
		    	}
		    	else{
		    		$('#email_valid').parent('div').removeClass('floating-label-success');
		    		$('.emailerror').hide();
		    		document.getElementById('email_check').style.display='block';
		    		$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');
		    		$('#email_valid').parent('div').addClass('floating-label-error');
		    		email_check.innerHTML='<span class="redcolor" style="font-size:9px;">Your Email is already registered. <a href="javascript:void(0);" onclick="forgotpassword();">Forgot Password</a></span>';
//		    		alert("Not a valid e-mail address");
		    		//message_holder.innerHTML="Not a valid e-mail address";
		    		return false;
		    	}
		      
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
		//checkEmailExist(x);
	}


}
function isNumberKeycountnew(evt) {
	checkNumber(evt);
	$('#verification_msg').hide();
	var charCode = 2;	
	if (charCode == 43 || charCode == 45) {
	var text_length = $('#txt2').val().length;
		if (text_length >= 9) {
		
			$('#txt2').parent('div').addClass('floating-label-error');
			$('#txt2').parent('div').append('<span class="sent-otp" id="Sentotp"> <a onclick="send_sms_borrower();"  href="javascript:void(0)"> SEND OTP</a></span>');
		} else {
		}
		return true;
	} else {
	
		var text_length = $('#txt2').val().length;

		if (text_length == 10) {
				
			$('#txt2').parent('div').addClass('floating-label-error');
			$('#txt2').parent('div').append('<span class="sent-otp" id="Sentotp"> <a onclick="send_sms_borrower();"  href="javascript:void(0)"> SEND OTP</a></span>');
		}

		else {
		$('#Sentotp').hide();
		}
		return true;
	}
}
function validateRegistrationStep3(){
	var father = $('#hid_father_name').val();
	var spouse = $('#hid_spouse_name').val();
	if(father==''&&spouse==''){
		return false;
	}
	
}
function closeddiv(id){
	$(id).hide();
}
function changeSelectColor(){
		$('.select-ads').css('color','rgba(17, 41, 60, 0.7)');
}
function checkNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function mobDobValidation(loan_questionid,answerid,currVal,id,questionid)
{
	$('#'+loan_questionid).val(currVal);
	$('#'+answerid).val(currVal);
	btn_addClass(id,questionid);
}

function penaltyamount(days,status){

	if(status==1){

		if(days<=10){
			jQuery('#penalty_amount').val('100');
		}
		if(days>10){
			jQuery('#penalty_amount').val('250');
		}
	}
	else if(status==2){
		jQuery('#penalty_amount').val('50');
	}
	else{
		var emiamount = jQuery('#amount').val();
		var penalty_amount = parseInt(emiamount)*(parseInt(days)/365)*0.24;
		penalty_amount = Math.round(penalty_amount);
		jQuery('#penalty_amount').val(penalty_amount);
	}
}
function profileReminderButtonActivation(){
	var state = document.getElementById('state').value;
	var city = document.getElementById('city').value;
	var address = document.getElementById('address').value;
	var pincode = document.getElementById('pincode').value;
	var ref_name = document.getElementById('ref_name').value;
	var ref_name1 = document.getElementById('ref_name1').value;
	var mobile = document.getElementById('mobile').value;
	var mobile1 = document.getElementById('mobile1').value;
	if(state!='' && city !='' && address !='' && ref_name !='' && ref_name1 !='' && mobile !='' && mobile1 !=''){
		document.getElementById('submits').removeAttribute("disabled");
		document.getElementById('submits').removeAttribute("style");
	}
	else{
		document.getElementById('submits').setAttribute("disabled",'disabled');
		document.getElementById('submits').setAttribute("style","opacity:0.7");
	}
	
}

/**
 * open popup for mobole verification
 */
function send_sms_borrower() {
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
	$('#optss').removeAttr('style'); 
	$('#otp').val('');
	$('#Sentotp').html('<a onclick="send_sms_borrower();"  href="javascript:void(0)"> RESEND OTP</a></span>');
	
	  $('#txt2').parent('div').removeClass('floating-label-error'); // removing error class from mobile
	  $('#txt2').parent('div').addClass('floating-label-success');
		}
}

/**
 * Validating campaign Borrower First Page
 */

function validateCampaignBorrowerRegistration(){

	$('#fname').parent('div').removeClass('floating-label-error');
	$('#fname').parent('div').addClass('floating-label-success');
	$('.nameerror').hide();
	
	var name = $('#fname').val();
	if(name.length<3){
		$('.nameerror').hide();
		$('#fname').parent('div').removeClass('floating-label-success');
		//$('#fname').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#fname').parent('div').addClass('floating-label-error error-msg');
		$('#fname').focus();
		return false;
	}

	 $('.nameerror').hide();
	  $('#lname').parent('div').removeClass('floating-label-error');
	  $('#1name').parent('div').addClass('floating-label-success');
	var lname = $('#lname').val();
        if(lname==''){
                $('.nameerror').hide();
                $('#1name').parent('div').removeClass('floating-label-success');
              //  $('#lname').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
                $('#lname').parent('div').addClass('floating-label-error');
                $('#lname').focus();
              return false;
        }
      

	var email = $('#email_valid').val();
	if(email==''){
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		//document.getElementById('email_check').style.display='block';
		//$('#email_valid').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#email_valid').parent('div').addClass('floating-label-error');
		//email_check = "<span class="redcolor">EMAIL ID SHOULD NOT BE BLANK.</span>";
		//document.getElementById('email_check').innerHTML = email_check;
		//document.getElementById('email_check').innerhtml='<span class="redcolor">EMAIL ID SHOULD NOT BE BLANK.</span>';
		$('#email_valid').focus();
		return false;
	}
	// removing email error tag
	$('#email_msg').hide();	
	$('#email_valid').parent('div').removeClass('floating-label-error');
	$('#email_valid').parent('div').addClass('floating-label-success');
	
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{  
		$('#email_valid').parent('div').removeClass('floating-label-success');		
		$('.emailerror').hide();	
		document.getElementById('email_msg').style.display='block';		
	//	$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');		
		$('#email_valid').parent('div').addClass('floating-label-error');		
		email_msg.innerHTML='<span class="redcolor">Please enter a valid email address</span>';	
		$('#email_valid').focus();	
		return false;
	}
	// hidding pass error
	$('#show_password').parent('div').removeClass('floating-label-error');
	$('#show_password').parent('div').addClass('floating-label-success');
	$('#pass_strength').hide();
	
	var pass = $('#show_password').val();
	if(pass.length<6 || pass==''){
		
		$('#show_password').parent('div').removeClass('floating-label-success');
		$('.passerror').hide();
	//	$('#show_password').parent('div').append('<div class="passerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#show_password').parent('div').addClass('floating-label-error');
		pass_strength = "<span><font style='color:red;float:right;font-size:8px;margin-top:-9px;'>Your password should be at least 6 characters long</font></span>";
		document.getElementById('pass_strength').innerHTML = pass_strength;
		$('#pass_strength').show();
		$('#show_password').focus();
		return false;
	}

	var mobile=$('#txt2').val();
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
	  if(!mobile.match(phoneno)){
		  
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		 
		  $('#verification_msg').html("<span> <font style='color:red;float:right;font-size:8px;margin-top:-9px;'>Please enter valid mobile number.</font></span>");
		 // $('#verification_msg').html('<span class="redcolor" >Please enter valid mobile number.</span>');
		  $('#txt2').focus();
		  return false;
	  } 
	  if($('#vcod').val()==''){
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		  $('#verification_msg').html('<span class="redcolor">Mobile Number is not verified.</span>');
		  return false;

	  } 
	  
	  
	  if($('#otp').val()==''){
		//  $('#verification_msg').show();
		  $('#otp').parent('div').removeClass('floating-label-success');
		  $('#otp').parent('div').addClass('floating-label-error');			
		  $('#otp-msg').html('<span class="redcolor">Please enter OTP.</span>');
		  return false;

	  }
	  if($('#otp').val()!=''){
		  $('#otp-msg').hide();
		  $('#otp').parent('div').removeClass('floating-label-error');		
		  $('#otp').parent('div').addClass('floating-label-success');
		  //return false;
		  }
	  $('#loaders').attr('style','display:block');
	
	}

function validateBorrowerRegistration(){
	var error=0;
	$('#fname').parent('div').removeClass('floating-label-error');
	$('#fname').parent('div').addClass('floating-label-success');
	$('.nameerror').hide();
	
	var name = $('#fname').val();
	if(name.length<3){
		$('.nameerror').hide();
		$('#fname').parent('div').removeClass('floating-label-success');
		//$('#fname').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#fname').parent('div').addClass('floating-label-error error-msg');
		//$('#fname').focus();
		 var error=1;
	}

	 $('.nameerror').hide();
	  $('#lname').parent('div').removeClass('floating-label-error error-msg');
	  $('#1name').parent('div').addClass('floating-label-success');
	var lname = $('#lname').val();
        if(lname==''){
                $('.nameerror').hide();
                $('#1name').parent('div').removeClass('floating-label-success');
              //  $('#lname').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
                $('#lname').parent('div').addClass('floating-label-error error-msg');
               // $('#lname').focus();
                var error=1;
        }
      

	var email = $('#email_valid').val();
	if(email==''){
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		//document.getElementById('email_check').style.display='block';
		//$('#email_valid').parent('div').append('<div class="nameerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#email_valid').parent('div').addClass('floating-label-error');
		//email_check = "<span class="redcolor">EMAIL ID SHOULD NOT BE BLANK.</span>";
		//document.getElementById('email_check').innerHTML = email_check;
		//document.getElementById('email_check').innerhtml='<span class="redcolor">EMAIL ID SHOULD NOT BE BLANK.</span>';
		$('#email_valid').focus();
		 var error=1;
	}
	// removing email error tag
	$('#email_msg').hide();	
	$('#email_valid').parent('div').removeClass('floating-label-error');
	$('#email_valid').parent('div').addClass('floating-label-success');
	
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	{  
		$('#email_valid').parent('div').removeClass('floating-label-success');		
		$('.emailerror').hide();	
		document.getElementById('email_msg').style.display='block';		
	//	$('#email_valid').parent('div').append('<div class="emailerror"><i class="fa fa-exclamation-circle"></i></div>');		
		$('#email_valid').parent('div').addClass('floating-label-error');		
		email_msg.innerHTML='<span class="redcolor">Please enter a valid email address</span>';	
		$('#email_valid').focus();	
		 var error=1;
	}
	// hidding pass error
	$('#show_password').parent('div').removeClass('floating-label-error');
	$('#show_password').parent('div').addClass('floating-label-success');
	$('#pass_strength').hide();
	
	var pass = $('#show_password').val();
	if(pass.length<6 || pass==''){
		
		$('#show_password').parent('div').removeClass('floating-label-success');
		$('.passerror').hide();
	//	$('#show_password').parent('div').append('<div class="passerror"><i class="fa fa-exclamation-circle"></i></div>');
		$('#show_password').parent('div').addClass('floating-label-error');
		pass_strength = "<span><font style='color:red;float:right;font-size:8px;margin-top:-9px;'>Your password should be at least 6 characters long</font></span>";
		document.getElementById('pass_strength').innerHTML = pass_strength;
		$('#pass_strength').show();
		$('#show_password').focus();
		 var error=1;
	}

	var mobile=$('#txt2').val();
		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
	  if(!mobile.match(phoneno)){
		  
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		 
		  $('#verification_msg').html("<span> <font style='color:red;float:right;font-size:8px;margin-top:-9px;'>Please enter valid mobile number.</font></span>");
		 // $('#verification_msg').html('<span class="redcolor" >Please enter valid mobile number.</span>');
		  $('#txt2').focus();
		  var error=1;
	  } 
	  if($('#vcod').val()==''){
		  $('#verification_msg').show();
		  $('#txt2').parent('div').removeClass('floating-label-success');
		  $('#txt2').parent('div').addClass('floating-label-error');			
		  $('#verification_msg').html('<span class="redcolor">Mobile Number is not verified.</span>');
		  var error=1;

	  } 
	  
	  
	  if($('#otp').val()==''){
		//  $('#verification_msg').show();
		  $('#otp').parent('div').removeClass('floating-label-success');
		  $('#otp').parent('div').addClass('floating-label-error');			
		  $('#otp-msg').html('<span class="redcolor">Please enter OTP.</span>');
		  var error=1;
		 // return false;

	  }
	  if($('#otp').val()!=''){
		  $('#otp-msg').hide();
		  $('#otp').parent('div').removeClass('floating-label-error');		
		  $('#otp').parent('div').addClass('floating-label-success');
		  //return false;
		  }
	  if(error ==1){
		  return false;
	  }
	  $('#loaders').attr('style','display:block');
	
	}

function validate_email_v21()
{
	var x=document.getElementById('email_valid').value;
	var email_check=document.getElementById('email_msg');

//	var message_holder = document.getElementById('email_error');
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
	{
		$('#email_valid').parent('div').removeClass('floating-label-success');
		$('.emailerror').hide();
		//document.getElementById('email_check').style.display='block';
		$('#email_valid').parent('div').addClass('floating-label-error');
		email_check.innerHTML='<span class="redcolor">Please enter a valid email address</span>';
//		alert("Not a valid e-mail address");
		//message_holder.innerHTML="Not a valid e-mail address";
		return false;
	}
	else
	{
		$.ajax({
			type: "GET",
		    url: '/check_email_varify?p[]=emails='+x,
		    success: function(response) {
		    	if(response==0){
		    		$('#email_valid').parent('div').removeClass('floating-label-error');
		    		$('.emailerror').hide();
		    		$('#email_valid').parent('div').addClass('floating-label-success');
		    		$('#email_valid').closest( "float-label-control" ).removeAttr('style');
		    		document.getElementById('email_msg').style.display='none';
		    	}
		    	else{
		    		$('#email_valid').parent('div').removeClass('floating-label-success');
		    		$('.emailerror').hide();
		    		document.getElementById('email_msg').style.display='block';
		    		$('#email_valid').parent('div').addClass('floating-label-error');
		    		email_check.innerHTML='<span class="redcolor" style="font-size:10px; float:left;">Your Email is already registered. <a href="javascript:void(0);" onclick="forgotpassword();">Forgot Password</a></span>';
//		    		alert("Not a valid e-mail address");
		    		//message_holder.innerHTML="Not a valid e-mail address";
		    		return false;
		    	}
		      
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
		//checkEmailExist(x);
	}


}
