/** ******** Lender Get Emi detail year wise ajax function ************* */
function showEmiDataYearWise(id,year){
	
	$.ajax({
		type: "POST",
	    data: {
	        curr: year,
	    },
	    url: '/getemidata',
	    success: function(response) {
	    	$(id).html(response);
	    	$(id).fadeIn('slow');
	    	$('#emiremove'+year).removeAttr('onclick');
	      
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}

/** ************* Show hidden number of emi in emi timeline **************** */
$(document).ready(function(){
$('.showmore').live('click',function(){
	var id = $(this).closest('div').attr('id');
	$('#'+id+' .slidingDiv').show();
	$(this).hide();
	$('#'+id+' .hidemore').show();
});
});
/** ************* Hide hidden number of emi in emi timeline **************** */
$(document).ready(function(){
	$('.hidemore').live('click',function(){
		var id = $(this).parent('div').attr('id');
		$('#'+id+' .showmore').show();
		$('#'+id+' .slidingDiv').hide();
		$('#'+id+' .showmore').focus();
		$(this).hide();
	});
});

/** ******** Lender Get Emi Risk Bucket risk wise ajax function ************* */
function showEmiRiskBucketRiskWise(riskType,id,selectValue,selectClass){
	$.ajax({
		type: "POST",
	    data: {
	        risk: riskType,
	        selectVal:selectValue,
	        classes:selectClass,
	    },
	    url: '/getemiriskbucketdata',
	    success: function(response) {
	    	$('#start-risk').hide();
	    	$('#'+id).html(response);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}
/** ******** Show user lender activity list ************* */
function showLenderActivityList(id,page){
	$.ajax({
		type: "POST",
	    data: {
	    	page: page,
	    },
	    url: '/getlenderactivitylist',
	    beforeSend: function() {    
	    	 $("#loder").show();
	        },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$("#loder").hide();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}

/** ******** Show user lender activity list ************* */
function showLenderNotificationList(id,page){
	$.ajax({
		type: "POST",
	    data: {
	    	page: page,
	    },
	    url: '/getlendernotificationlist',
	    beforeSend: function() {    
	    	 $("#loder").show();
	        },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$("#loder").hide();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}

/** ******** Show borrower listing ************* */
function showMoreBrowseBorrower(id,page,facet=''){
	$.ajax({
		type: "POST",
	    data: {
	    	page: page,
	    	facet: facet,
	    },
	    url: '/getborrowerlistdata',
	    beforeSend: function() {    
	    	 $("#preloader").show();
	        },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$("#preloader").hide();
	    	var canvas = document.getElementsByTagName('canvas');

	    	for (var i = 0; i < canvas.length; i++) {
	    	    progressBar(canvas[i].id);
	    	}
	    	processing=true;
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}



/** ******** Show borrower listing ************* */
function searchFilterResult(){
	var selected = [];
	var tenueselect='';
	var funded='';
	var roi='';
	var purpose='';
	var risk='';
	fanal_url='';
	var loanneeded='';
	var fund_flag='';
	var roi_flag='';
	var viewpropofile='';
	var loancity='';
	var purpose='';
	var boomarkpropofile='';
	var tenure_flag='&';
	$('#checkboxes input:checked').each(function() {
	   // selected.push($(this).attr('name'));
		if(tenueselect==''){
			tenueselect='&p[]=facets.tenure='+$(this).attr('name');
		}
		else{
			tenueselect+='&p[]=facets.tenure='+$(this).attr('name');
		}
		// tenure_flag=1;
	});
	
	// funded
	$('#fundedcheckboxes input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(funded==''){
				funded='&p[]=facets.fund='+$(this).attr('name');
			}
			else{
				funded+='&p[]=facets.fund='+$(this).attr('name');
			}
			fund_flag=1;
		});

	
	// checkbos for risk loanneededcheckboxes
	$('#checkboxesrisk input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(risk==''){
				risk='&p[]=facets.risk='+$(this).attr('name');
			}
			else{
				risk+='&p[]=facets.risk='+$(this).attr('name');
			}
			
		});
	
	// loan needed
	$('#loanneededcheckboxes input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(loanneeded==''){
				loanneeded='&p[]=facets.amount='+$(this).attr('name');
			}
			else{
				loanneeded+='&p[]=facets.amount='+$(this).attr('name');
			}
			
		});

	// checkbos for view

	
	//check box of loan city
	$('#checkboxescity input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(loancity==''){
				loancity='&p[]=facets.city='+$(this).attr('name');
			}
			else{
				loancity+='&p[]=facets.city='+$(this).attr('name');
			}
			
		});
	
	//check box of purpose 
	$('#checkboxespurpose input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(purpose==''){
				purpose='&p[]=facets.loan_purpose='+$(this).attr('name');
			}
			else{
				purpose+='&p[]=facets.loan_purpose='+$(this).attr('name');
			}
			
		});
	//checkbos for view

	$('#checkboxesviewed input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(viewpropofile==''){
				viewpropofile='&p[]=facets.view='+$(this).attr('name');
			}
			else{
				viewpropofile+='&p[]=facets.view='+$(this).attr('name');
			}
			
		});
	
	// checkbos for bookmarked
	$('#checkboxesbookedmarked input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(boomarkpropofile==''){
				boomarkpropofile='&p[]=facets.bookmark='+$(this).attr('name');
			}
			else{
				boomarkpropofile+='&p[]=facets.bookmark='+$(this).attr('name');
			}
			
		});
	// checkbox for roi
	$('#roicheckboxes input:checked').each(function() {
		   // selected.push($(this).attr('name'));
			if(roi==''){
				roi='&p[]=facets.roi='+$(this).attr('name');
			}
			else{
				roi+='&p[]=facets.roi='+$(this).attr('name');
			}
			roi_flag=1;
		});
	
	
	fanal_url=tenueselect+funded+risk+loanneeded+purpose+loancity+roi+viewpropofile+boomarkpropofile;
	var hostname =location.protocol+"//"+location.hostname;
	search_url=hostname+'/lender/browse-borrower/?'+fanal_url;
	window.location = search_url;
}


/** ******** Show user lender activity list ************* */
function showLenderExpectedEmi(roi,ten,roikey,loan_type_cnd){
	var amount=$("#amount").val();
	$("#roiselected").val(roikey);
	if(amount==""){
		alert("Please enter amount first");
		return false
	}
	var res = roi.split("%");
	var principal = amount;
	$.ajax({
		type: "POST",
	    data: {
	    	amount: amount,
	    	roi: roi,
	    	ten: ten,
		loan_type: loan_type_cnd,
	    },
	    url: '/getlenderexpectedemi',
	    beforeSend: function() {    
	    	// $("#loder").show();
	        },
	    success: function(response) {
	    	var res = response.split("@");
	    	var amounts = res[1].split(" ");
	    	$("#expected_emi").html("<div class='invest-text-box'><label>expected returns</label><div class='amtneed'><sup class='rupee'>&#8377;</sup>"+res['0']+"<sub>/Months</sub></div></div>");
	    	$("#total_expected_emi").html("<div class='invest-text-box'><label>total returns</label><div class='amtneed'><sup class='rupee'>&#8377;</sup>"+amounts['0']+" <sub>"+amounts['1']+"</sub></div></div>");
	    	
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}

/** ******** Save data in proposal cart ************* */
function saveProposalDatainCart(loan_id){
	var amount=$("#amount").val();
	var roi=$("#roiselected").val();
	if(amount==""){
		alert("Please enter amount first");
		return false
	}
	if(roi==""){
		alert("Kindly select ROI");
		return false
	}
	$.ajax({
		type: "POST",
	    data: {
	    	amount: amount,
	    	roi: roi,
	    	loan_id: loan_id,
	    },
	    url: '/saveproposaltocart',
	    beforeSend: function() {    
	    	 $("#preloader").show();
	    	// $("#hide-button").hide();
	    	// $("#loder").show();
	        },
	    success: function(response) {
	    	$("#preloader").hide();
	    // $("#hide-button").show();
	    	 res = response.split("@");
	    	if(res[0]==0){
	    		$("#success-id").css("display", "none");
	    		$("#danger-id").css("display", "block");
	    	// $("#error-message-id" ).focus();
	    		$("#error-message-id").html(res[1]);
	    		// $('html, body').animate({ scrollTop: 0 }, 0);
	    	}
	    	else{
	    		$("#danger-id").css("display", "none");
	    		$("#success-id").css("display", "block");
	    		$('html, body').animate({ scrollTop: 0 }, 0);
	    	// $("#success-message-id" ).focus();
	    		$("#success-message-id").html(res[1]);
	    	// $("#send_proposal").css("display", "none");
	    		// $("#saved_proposal").css("display", "none");
	    	}
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	     
	    }
	  });
}


/** ******** Lender Get Emi detail year wise ajax function ************* */
function getEmiData(dates,id,startemi,endemi){
	$.ajax({
		type: "POST",
	    data: {
	        curr: dates,
	        loanid: id,
	        start: startemi,
	        end: endemi,
	    },
	    url: '/getmontlyemidata',
	    success: function(response) {
	    	
	    	$('#'+id).html(response);
	    	$('#'+id).fadeIn('slow');
	      
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}

/** ********web Lender Get Emi detail year wise ajax function ************* */
function getEmiDataWeb(dates,id,startemi,endemi,proposal_id){
	
	$.ajax({
		type: "POST",
	    data: {
	        curr: dates,
	        loanid: id,
	        start: startemi,
	        end: endemi,
	    },
	    dataType: 'json',
	    url: '/getmontlyemidataweb',
	    success: function(response) {
	    	
	    	$('.emi-'+proposal_id).find('strong').html(response['amount']);
	    	var status_html = "";
	    	if(response['status'] =='paid'){
	    		   status_html += '<div class="paid-amount"><i class="fa fa-check" aria-hidden="true"></i> '+response['status']+'</div>';
	    		   if( response['other'] != ''){
	    			   status_html += response['other'];
	    		   }
	    	
	    	
	    	} else if(response['status'] == 'closed'){
	    		status_html += '<div class="paid-amount"><i class="fa fa-check"></i> '+response['status']+'</div>';
	    		 if(response['other'] != ''){
	    			   status_html += response['other'];
	    		   }
	    		
       	} else if(response['status'] == 'Pending'){
	    		status_html += '<div class="nach-pendings">';
	    		 if(response['payment_status'] == ''){
	    			   status_html += '<p class="no-payment">&nbsp;</p>';
	    		   }
	    		status_html +='<p class="pending-result"><i class="fa fa-refresh"></i> '+response['status'];
	    		 if(response['other'] != ''){
	    			   status_html += response['other'];
	    		   }
	    		 status_html += '</p>';
	    		 if(response['payment_status'] != ''){
	    			   status_html += response['payment_status'];
	    		   }
	    		 status_html += '</div>';
        	} 
	    		
	    		else if(response['status']=='Due'){
        		status_html += '<div class="due-amount"> '+response['status']+'</div>';
        		if(response['other'] != ''){
	    			   status_html += response['other'];
	    		   }
        		}
        	else if(response['status']=='Delayed'){
			status_html += '<div class="nach-pendings">';
			if(response['payment_status'] == ''){
 			   status_html += '<p class="no-payment">&nbsp;;</p>';
 		   }
			status_html += '<p class="delayed-result"><i class="fa fa-ban" aria-hidden="true"></i> '+response['status'];
			if(response['other'] != ''){
 			   status_html += response['other'];
 		   }
			 status_html += '</p>';
 		 if(response['payment_status'] != ''){
 			   status_html += response['payment_status'];
 		   }
 		 status_html += '</div>';
        	}
	    	$('.status-'+proposal_id).html(status_html);
	    	
             	
	      
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}
/** ******** Save data in proposal table ************* */
function saveProposalDatainList(loan_id,risktype){
	var amount=$("#amount").val();
	var roi=$("#roiselected").val();
	var accept_agreement='N';
	if($('#agreement_accept').is(':checked')){
		var accept_agreement='Y';
	}
	if(amount==""){
		alert("Please enter amount first");
		return false
	}
	if(roi==""){
		alert("Kindly select ROI");
		return false
	}
	var riskcls="";
	//alert(risktype);
	if($.trim(risktype) == 'Unrated'){
		riskcls = "You are about to invest in a Very High Risk Unrated borrower.  Chances of loan default are high.\n";
	}
	var confirma=confirm(riskcls+"Proposal will be sent to the borrower.  Click OK to continue.");
	if(confirma){
	$.ajax({
		type: "POST",
	    data: {
	    	amount: amount,
	    	roi: roi,
	    	loan_id: loan_id,
		accept_agreement:accept_agreement,
	    },
	    url: '/saveproposaltolist',
	    beforeSend: function() {    
	    	 $("#hide-button").hide();
	    	 $("#preloader").show();
	        },
	    success: function(response) {
	    	$("#preloader").hide();
	    	 $("#hide-button").show();
	    	// alert(response);
	    	 res = response.split("@");
	    	if(res[0]==0){
	    		$("#success-id").css("display", "none");
	    		$("#danger-id").css("display", "block");
	    		$("#error-message-id").html(res[1]);
	    	}
	    	else{
	    		 $("#send_proposal").attr("disabled","disabled");
	    		 $("#save_proposal").attr("disabled","disabled");
	    		$("#danger-id").css("display", "none");
	    		$("#success-id").css("display", "block");
	    		$("#success-message-id").html(res[1]);
	    	// $("#send_proposal").css("display", "none");
	    		// $("#saved_proposal").css("display", "none");
	    	}
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	     

	    }
	  });
}
}


/** ******** checkout from cart ************* */
function checkedOutCartProposal(loan_id){
	var selected = [];
	$('#checkboxes input:checked').each(function() {
	    selected.push($(this).attr('name'));
	});
	var accept_agreement='N';
	if($('#agreement_accept').is(':checked')){
		var accept_agreement='Y';
	}
	$.ajax({
		type: "POST",
	    data: {
	    	cartid: selected,
	    	loan_id: loan_id,
		accept_agreement:accept_agreement,
	    },
	    url: '/checkoutfromcart',
	    beforeSend: function() {   
	    	$("#hide-button").hide();
	   	 $("#preloader").show();
	        },
	    success: function(response) {
	    	// $("#hide-button").show();
	    // jQuery("#progress").css("display", "none");
	    	// alert(response);
	    	 location.reload();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	     
	    }
	  });
}

/** ******** checkout from cart ************* */
function deleteItemFromcart(cartid){
	/*
	 * var selected = []; $('#checkboxes input:checked').each(function() {
	 * selected.push($(this).attr('name')); });
	 */
	if( confirm("Do you want to remove proposal?")){
	$.ajax({
		type: "POST",
	    data: {
	    	cartitemid: cartid,
	    },
	    url: '/deleteitemfromcart',
	    beforeSend: function() {   
	        },
	    success: function(response) {
	    	// alert(response);
	    	 location.reload();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	     
	    }
	  }); }
}

/** ******** Proposal Amount Same ************* */
function proposal_amount_save(id){
	var amount = $('#editable'+id).attr('data-value');
	var indentification = $('#edit'+id).attr('data-indentification');
	if(parseInt(indentification)==0){
	$('#editable'+id).html("<input type='text' class='editing' autofocus id='editamountvalue' value='"+amount+"'/>");
	$('#edit'+id).html('<i class="fa fa-check"></i>');
	$('#edit'+id).removeAttr('data-indentification');
	$('#edit'+id).attr('data-indentification','1');
	}
	if(parseInt(indentification)==1){
		var currAmount = $('#editamountvalue').val();
		value1=currAmount;
		$.ajax({
			type: "POST",
		    data: {
		    	cartitemid: id,
		    // type: type,
		    	value: value1,
		    },
		    url: '/updatecartamount',
		    beforeSend: function() {   
		        },
		    success: function(response) {
		    	res = response.split("@");
		    	if(res[0]==0){
		    		alert(res[1]);
		    		return false;
		    	}
		    	else{
		    		$('#editable'+id).html("&#8377; "+currAmount);
					$('#edit'+id).html('<i class="fa fa-pencil"></i>');
					$('#edit'+id).removeAttr('data-indentification');
					$('#edit'+id).attr('data-indentification','0');
					$('#editable'+id).removeAttr('data-value');
					$('#editable'+id).attr('data-value',currAmount);
		    		
		    	}
		    	
		    	// location.reload();
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		     
		    }
		  });
		
		
	}
}
/**
 * ********************************Change ROI in saved
 * proposals*****************************
 */
function proposal_roi_save(id){
	var indentification = $('#edit_roi'+id).attr('data-indentification');
	if(parseInt(indentification)==0){
		$('#editable_roi'+id).hide();
		$('#change_roi'+id).show();
		$('#edit_roi'+id).html('<i class="fa fa-check"></i>');
		$('#edit_roi'+id).removeAttr('data-indentification');
		$('#edit_roi'+id).attr('data-indentification','1');
	}
	
	if(parseInt(indentification)==1){
		var curr_roi = $('#value_roi'+id).val();
		$.ajax({
			type: "POST",
		    data: {
		    	proposal_id: id,
		    	value: curr_roi,
		    },
		    url: '/updatecartroi',
		    beforeSend: function() {   
		        },
		    success: function(response) {
		    	res = response.split("%");
		    		$('#edit_roi'+id).html('<i class="fa fa-pencil"></i>');
		    		$('#edit_roi'+id).removeAttr('data-indentification');
		    		$('#edit_roi'+id).attr('data-indentification','0');
		    		$('#change_roi'+id).hide();
		    		$('#editable_roi'+id).show();
		    		// $('#editable_roi'+id).attr('data-value',curr_roi);
		    		$('#editable_roi'+id).html(res[0]+'<sub>%</sub><p>ROI</p><a href="javascript:void(0);" id="edit_roi'+id+'" data-indentification="0" onclick="proposal_roi_save('+id+')"><i class="fa fa-pencil"></i></a> ');
		    	// location.reload();
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		    }
		  });
		
	}
	
}
/**
 * *******************************Check Password
 * Strength***********************************
 */
function CheckChangePasswordStrength(pwd,id)
{
	var pass_strength;
	var flag=0;
	var flag_num=1;
	// alert(pwd);
	if (IsEnoughLength(pwd,14) && HasMixedCase(pwd) && HasNumeral(pwd) && HasSpecialChars(pwd))
		pass_strength = "<span><font style='color:olive'>Very strong</font></span>";
	else if (IsEnoughLength(pwd,8) && HasMixedCase(pwd) && (HasNumeral(pwd) || HasSpecialChars(pwd)))
		pass_strength = "<span><font style='color:Blue'>Strong</font></span>";
	else if (IsEnoughLength(pwd,6) && HasNumeral(pwd) && HasSpecialChars(pwd))
		pass_strength = "<span><font style='color:Green'>Good</font></span>";
	/*
	 * else if (!HasNumeral(pwd)) pass_strength = "<b><font
	 * style='color:red'>Must contain a number</font></b>"; else if
	 * (!HasSpecialChars(pwd)) pass_strength = "<b><font
	 * style='color:red'>Must contain a special characters</font></b>";
	 */
	else if (pwd.length < 8) { 
		if(HasSpecialChars(pwd))
		{
			flag_speacil=1;
		}
		if(HasNumeral(pwd))
		{
			flag_num=1;
		}
		pass_strength = "<span><font style='color:red'>Your password should be at least 8 characters long</font></span>";
	}
	else
		pass_strength = "<span><font style='color:red'>Weak</font></span>";
	document.getElementById(id).style.display='block';
	document.getElementById(id).innerHTML = 'Passwords Strength: '+pass_strength;
}
/**
 * ************************* Check Conirm
 * Password**************************************************
 */
function CheckConfirmPassword(cp_value,np_id,err_id){
	var np_value = document.getElementById(np_id).value;
	pass_strength = "<span><font style='color:red'>No</font></span>";
	if(np_value==cp_value){
		pass_strength = "<span><font style='color:green'>Yes</font></span>";
	}
	document.getElementById(err_id).style.display='block';
	document.getElementById(err_id).innerHTML = "Passwords match: "+pass_strength;
}
/** ******** send message one to one by lender function ************* */
function sendOneToOneMessage(borrower_uid,msg_id,url){
	var msg_content =  $('#'+msg_id).val();
	if(msg_content!=''){
	$.ajax({
		type: "POST",
	    data: {
	        borrower_id: borrower_uid,
	        msg: msg_content,
	    },
	    url: '/sendmessageonetoone',
	    success: function(response) {
	    	window.location.href = url;
	    	// alert(response);
	      
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
	}
}

/** ******** Delete user message by lender function ************* */
function deleteusermessage(borrower_uid){
	$.ajax({
		type: "POST",
	    data: {
	        borrower_id: borrower_uid,
	    },
	    url: '/deleteusermessage',
	    success: function(response) {
	    	window.location.href = '/lender/user-messages';
	    	// alert(response);
	      
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
	
}

/** ******** Lender Transaction Details ************* */
function showLenderTransactionList(id,page){
	$.ajax({
		
		type: "POST",
	    data: {
	    	page: page,
	    },
	    url: '/getlendertransactionlist',
	    beforeSend: function() {    
	    	 $("#loder").show();
	    	  },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$("#loder").hide();
	    	processing=true;
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}


/** ******** Lender Feedback Details ************* */
function sentFeedback(){
	var feedback=$("#feedbackval").val();
	if(feedback==''){
		$('#feedbackval').css({"border-color": "red" });
	}
	else {
	$.ajax({
		type: "POST",
	    data: {
	    	feedback: feedback,
	    },
	    url: '/sentfeedback',
	    beforeSend: function() {    
	    	jQuery("#few-moment").css("display", "block");
	    	jQuery("#feedback-button").css("display", "none");
	    	//
	    	  },
	    success: function(response) {
	    	location.reload();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  }); }

}

/** ******** Sent Contact Us Data Details ************* */
function sentContactUs(){
	var message=$("#commentvalue").val();
	var subject=$("#subjectvalue").val();
	if(message==''){
		alert('Enter Comment');
		return false;
	}
	if(subject==''){
		alert('Enter Subject Line');
		return false;
	}
	
	$.ajax({
		type: "POST",
	    data: {
	    	message: message,
	    	subject: subject,
	    },
	    url: '/sentcontactus',
	    beforeSend: function() {   
	    	// alert(subject);
	    	jQuery("#preloader").css("display", "block");
	    	jQuery("#feedback-button").css("display", "none");
	    	//
	    	  },
	    success: function(response) {
	    	// alert(response);
	    	location.reload();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });

}
/** *********************Session setting for agreement view*************** */
function setagreementsession(sessionname,sessionvariable){
	$.ajax({
		type: "POST",
	    data: {
	    	loan_id: sessionname,
	    	lender_session: sessionvariable,
	    },
	    url: '/agreement/ajax',
	    success: function(response) {
	    	location.reload();
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });
}
/**
 * **********************validation password change form is filled of not in
 * lender new settings**********************
 */
function validate_pass() {
	var btn=document.activeElement.getAttribute('value');
	if(btn=='Save'){return true;}
	var flag=0;
	$('#cpassword').removeClass('error');
	$('#npassword').removeClass('error');
	$('#cnpswrd').removeClass('error');
	
	 $("#cpassword").css("border-bottom-color", "#e0e2e8");
	 $("#npassword").css("border-bottom-color", "#e0e2e8");
	 $("#cnpswrd").css("border-bottom-color", "#e0e2e8");
	if($('#cpassword').val()=='')
		{	 $("#cpassword").css("border-bottom-color", "red");
	    flag=1;
	}
	if($('#npassword').val()=='')
	{ 	$("#npassword").css("border-bottom-color", "red");
	    flag=1;
		}
	if($('#cnpswrd').val()=='')
	{ 	$("#cnpswrd").css("border-bottom-color", "red");
        flag=1;
		}
	if($('#npassword').val()!=$('#cnpswrd').val()){
		$("#cnpswrd").css("border-bottom-color", "red");
		 flag=1;
		}
	if($('#npassword').val().length<8){
		 $("#npassword").css("border-bottom-color", "red");
		    flag=1;
		    }
	 
	if(flag==1)
		return false;
}


$(document).ready(function(){
	$('#loaders').removeAttr('style');
});

/** ******** Lender status bar update ************* */
function LenderStatusBarUpdate(status_id,url,action_take){
		$.ajax({
		
		type: "POST",
	    data: {
	    	status_id: status_id,
	    	action_take:action_take,
	    },
	    url: '/update_statusbar',
	    beforeSend: function() {    
	    	 $("#loder"+status_id).show();
	    	  },
	    success: function(response) { // alert(response);
	    	
	    	window.location='/'+url;
	    	$("#loder"+status_id).hide();
	    	
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}
/** ******** Lender PROPOSED LOAN Details ************* */
function showLenderProposedLoanList(id,page1){
	$.ajax({
		
		type: "POST",
	    data: {
	    	page: page1,
	    },
	    url: '/getlenderproposedloan',
	    beforeSend: function() {    
	    	// $("#loder").show();
	    	  },
	    success: function(response) {
	    	var a = parseInt(page1);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$("#loder").hide();
	    	$('#processing').val(0);
	    	// $('html, body').animate({ scrollTop: 0 }, 0);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}

/** ********Web Lender PROPOSED LOAN Details ************* */
function loadLenderProposedLoanList(id,page1){
	$.ajax({
		
		type: "POST",
	    data: {
	    	page: page1,
	    },
	    url: '/getweblenderproposedloan',
	    beforeSend: function() {    
	    	// $("#loder").show();
	    	  },
	    success: function(response) {
	    	var a = parseInt(page1);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#appned-response').append(response);
	    	$("#loder").hide();
	    	$('#processing').val(0);
	    	var canvas = document.getElementsByClassName('progress-pie-chart');
	        
        	for (var i = 0; i < canvas.length; i++) {
        		progressBar(canvas[i].id);
        	}
	    	// $('html, body').animate({ scrollTop: 0 }, 0);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}
/** ******** Lender Active LOAN Details ************* */
function showLenderActiveLoanList(id,page){
	$.ajax({
		
		type: "POST",
	    data: {
	    	page: page,
	    },
	    url: '/getlenderactiveloan',
	    beforeSend: function() {    
	    	// $("#loder").show();
	    	  },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$('#processing').val(0);
	    	// alert($('#processing').val());
	    	$("#loder").hide();
	    	
	    	// $('html, body').animate({ scrollTop: 0 }, 0);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}
/** ******** web Lender Active LOAN Details ************* */
function loadLenderActiveLoanList(id,page){
	$.ajax({
		
		type: "POST",
	    data: {
	    	page: page,
	    },
	    url: '/getlenderactiveloanweb',
	    beforeSend: function() {    
	    	// $("#loder").show();
	    	  },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$('#processing').val(0);
	    	// alert($('#processing').val());
	    	$("#loder").hide();
	    	
	    	
	    	// $('html, body').animate({ scrollTop: 0 }, 0);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}


/** ******** Lender CLOSE LOAN Details ************* */
function showLenderCloseLoanList(id,page){
	$.ajax({
		
		type: "POST",
	    data: {
	    	page: page,
	    },
	    url: '/getlendercloseloan',
	    beforeSend: function() {    
	    	 $("#loder").show();
	    	  },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$("#loder").hide();
	    	// $('html, body').animate({ scrollTop: 0 }, 0);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}
/** ******** Lender CLOSE LOAN Details ************* */
function loadLenderCloseLoanList(id,page){
	$.ajax({
		
		type: "POST",
	    data: {
	    	page: page,
	    },
	    url: '/getlendercloseloanweb',
	    beforeSend: function() {    
	    	 $("#loder").show();
	    	  },
	    success: function(response) {
	    	var a = parseInt(page);
	        var b = parseInt(1);
	        var total = a+b;
	    	$('#page').val(total);
	    	$('#'+id).append(response);
	    	$("#loder").hide();
	    	// $('html, body').animate({ scrollTop: 0 }, 0);
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}

/** ************** VALIDATE WALLET AMOUNT 2ND TIME****** */
function validate_amount(){
	// alert($('#edit-topup-amount').val());
	var amount=$('#edit-topup-amount').val();
	if(amount<=0 ||amount=='' )
		{$("#edit-topup-amount").css("border-bottom-color", "red");	return false;}
	else{var payable;
		if(amount<=100000)payable=1000;
		else{
		 payable= Math.ceil(amount/100000)*1000 ;
		}
	$('#topup_alert').html('<p>To add more money to your wallet, pay Rs. 1000 to invest up to Rs. 1,00,000. Your Payable amount is Rs.'+payable+' <a href="javascript:void(0); onclick=paynow('+amount+');"> PayNow </a></p>');
	$('#topup_alert').show();
	return false;
	}
}

/** ************** Pay now ajax ****** */
function paynow(amount){
$.ajax({
		type: "POST",
	    data: {
	    	amount: amount,
	    },
	    url: '/lender/walletsession',
	    beforeSend: function() {  
	    	// $("#spin").show();
	    	  },
	    success: function(response) {
	    	window.location='/lender/wallet_topup';
	    },
	    error: function(jqXHR, textStatus, errorThrown) {
	      // Error handling
	    }
	  });  
}

/** ************GET BANK BY IFSC******************* */
function getbank_ifsc(){
	  var ifsc=$('#ifcode').val();
	  $.ajax({
			type: "POST",
		    data: {
		    	ifsc: ifsc,
		    },
		    url: '/lender/ifsccheck',
		    beforeSend: function() {  
		    	$('#ifsc_loader').show();
		    	  },
		    success: function(response) {
		    	if($.trim(response)){
		    	$('#ifsc_loader').hide();
		    	var data=response.split("@");
		    	$('#micr_code').val(data[3]);
		    	// $('#bank_city').val(data[7]);
		    	$('#branch_add').val(data[5]);
		    	/*
				 * var selectbox = $('#branch_location'); var list = "<option
				 * value='" +data[5]+ "'>" +data[5]+ "</option>";
				 * selectbox.html(list); $('#city_list').html("<option value='"
				 * +data[7]+ "'>" +data[7]+ "</option>");
				 */
		    	  $("#micr_code").attr('readonly', true);			// faisal
		    	  $("#branch_add").attr('readonly', true);			// faisal
		    	  $('#ifcode').css("border-bottom",'1px solid #e7e9e9');
		    	}
		    	else{
		    		$('#ifsc_loader').hide();
		    		$('#ifcode').css("border-bottom",'1px solid red');
		    	}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
	  }
/**
 * ***************GET STATE FROM DB ON BANK
 * BASIS**********************************
 */
// function get_citylist(){
$("#bank_list").change(function(){
	 var bank_name = document.getElementById("bank_list");
	  var selectedbank = bank_name.options[bank_name.selectedIndex].text;
	 $.ajax({
			type: "POST",
		    data: {
		    	bank:selectedbank,
		    },
		    url: '/lender/getstate',
		    beforeSend: function() { 
		    	  },
		    success: function(response) {
		    	// alert(response);
		    	$('#statelist').prop("disabled", false);
		    	var data=response.split("@");
		    	var selectbox = $('#statelist');
		    	var list = "<option> Select Your State</option>";
		    	for (var j = 0; j < data.length-1; j++){
		    	        list += "<option value='" +data[j].trim()+ "'>" +data[j].trim()+ "</option>";
		    	}
		    	selectbox.html(list);
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
});
// }

/** ***************GET CITY FROM DB********************************** */
function get_citylist(){
	 var state_name = document.getElementById("statelist"); 
	 var bank_name = document.getElementById("bank_list");
	  var selectedstate = state_name.options[state_name.selectedIndex].text;
	  var selectedbank = bank_name.options[bank_name.selectedIndex].text;
	 $.ajax({
			type: "POST",
		    data: {
		    	state:selectedstate,
		    	bank:selectedbank,
		    },
		    url: '/lender/getcity',
		    beforeSend: function() { 
		    	  },
		    success: function(response) {
		    	// alert(response);
		    	$('#city_list').prop("disabled", false);
		    	var data=response.split("@");
		    	var selectbox = $('#city_list');
		    	var list = "<option> Select Your City</option>";
		    	for (var j = 0; j < data.length-1; j++){
		    	        list += "<option value='" +data[j].trim()+ "'>" +data[j].trim()+ "</option>";
		    	}
		    	selectbox.html(list);
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
}

/** ************GET LOCATION FROM DB ******************* */
function get_locationlist(){
	  var city_name = document.getElementById("city_list");
	  var bank_name= document.getElementById("bank_list");
	  var selectedcity = city_name.options[city_name.selectedIndex].text;
	  var selectedbank = bank_name.options[bank_name.selectedIndex].text;
	 $.ajax({
			type: "POST",
		    data: {
		    	city:selectedcity,
		    	bank:selectedbank,
		    },
		    url: '/lender/getlocation',
		    beforeSend: function() { 
		    	  },
		    success: function(response) {
		    	$('#branch_location').prop("disabled", false);
		    	var data=response.split("@");
		    	var selectbox = $('#branch_location');
		    	var list = "<option> Select your Branch</option>";
		    	for (var j = 0; j < data.length-1; j++){
		    	        list += "<option value='" +data[j]+ "'>" +data[j]+ "</option>";
		    	}
		    	selectbox.html(list);
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
	  }


/** ************GET IFSC BY LOCATION AND BANK NAME**************** */
function get_ifscbylocation(){
	 var branch_name = document.getElementById("branch_location");
	  var bank_name= document.getElementById("bank_list");
	  var selectedbranch = branch_name.options[branch_name.selectedIndex].text;
	  var selectedbank = bank_name.options[bank_name.selectedIndex].text;
	  $.ajax({
			type: "POST",
		    data: {
		    	branch:selectedbranch,
		    	bank:selectedbank,
		    },
		    url: '/lender/getifsclocation',
		    beforeSend: function() { 
		    	  },
		    success: function(response) {
		    	var data=response.split("@");
		    	$('#ifcode').val(data[2]);
		    	$('#micr_code').val(data[3]);
		    	$('#branch_add').val(data[5]);
		    	$("#ifcode").attr('readonly', true);			// faisal
		    	 $("#micr_code").attr('readonly', true);			// faisal
		    	  $("#branch_add").attr('readonly', true);			// faisal
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
}

/** *************BOOKMARK BORROWERS*** */
function bookmark(loan_id,borrower_uid){
	 $.ajax({
			type: "POST",
		    data: {
		    	borrower_uid:borrower_uid,
		    	loan_id:loan_id,
		    },
		    url: '/lender/bookmark_borrower',
		    beforeSend: function() { 
		    	  },
		    success: function(response) {
		    	if(response==1)
		    	{ $("#bookmark"+loan_id).addClass("marked");}
		    if(response==0)
		    	{$("#bookmark"+loan_id).removeClass("marked");}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
}
/** *************SAVE FITER*** */
function save_filter(filter_data,filter_url){
	 $.ajax({
			type: "POST",
		    data: {
		    	filter_data:filter_data,
		    },
		    url: '/lender/save_borrower_filter',
		    beforeSend: function() { 
		    	  },
		    success: function(response) {
		    	alert(response);
		    	
		    	if(response==1)
		    	{ $("#saved_filter_link").attr('href',filter_url);}
//		    if(response==0)
//		    	{$("#bookmark"+loan_id).removeClass("marked");}
		    },
		    error: function(jqXHR, textStatus, errorThrown) {
		      // Error handling
		    }
		  });
}

$(function(){
	  $('#searchvalue').live('keyup.autocomplete',function(){
		  $( this ).autocomplete({
		      source: '/borrower_search_list'
		    });
});
});
$(function(){
	  $('.searchvalue').live('keyup.autocomplete',function(){
		  var searchs = $('.searchvalue').val();
		  $('#searchvalue').val(searchs);
		  $( this ).autocomplete({
		      source: '/borrower_search_list'
		    });
});
});


function submitOnEnter(event) {
    if (event.keyCode == 13) { 
    	event.preventDefault();
    	name=$( "#searchvalue" ).val();
        var hostname =location.protocol+"//"+location.hostname;
        var checkboxvalue = $("input[name='listvalue']:checked").val();
        if(checkboxvalue=='borrower_listing'){
      		search_url=hostname+'/browse-borrower/?p[]=facets.keyword='+name;
        }
        else if(checkboxvalue=='active'){
        	search_url=hostname+'/lender/active-loan?p[]=facets.keyword='+name;
        }
        else if(checkboxvalue=='proposed'){
        	search_url=hostname+'/lender/proposed-loan?p[]=facets.keyword='+name;
        }
        else if(checkboxvalue=='closed'){
        	search_url=hostname+'/lender/closed-loan?p[]=facets.keyword='+name;
        }
        else {
        	search_url=hostname+'/browse-borrower/?p[]=facets.keyword='+name;
        }
     	window.location = search_url;
    }
}

function enterSubmit(event){
	if (event.keyCode == 13) { 
		clickOnGoResult(event);
	}
}

function clickOnGoResult(event) {
var name=$(".searchvalue").val();
if(name=='' || name==undefined){
	name=$( "#searchvalue" ).val();
}
var checkboxvalue = $("input[name='listvalue']:checked").val();
var hostname =location.protocol+"//"+location.hostname;
if(checkboxvalue=='borrower_listing'){
		search_url=hostname+'/lender/browse-borrower/?p[]=facets.keyword='+name;
}
else if(checkboxvalue=='active'){
	search_url=hostname+'/lender/active-loan?p[]=facets.keyword='+name;
}
else if(checkboxvalue=='proposed'){
	search_url=hostname+'/lender/proposed-loan?p[]=facets.keyword='+name;
}
else if(checkboxvalue=='closed'){
	search_url=hostname+'/lender/closed-loan?p[]=facets.keyword='+name;
}
else {
	search_url=hostname+'/lender/browse-borrower/?p[]=facets.keyword='+name;
}
	window.location = search_url;
}

function borrowerSort(data,urllink){
		var hostname =location.protocol+"//"+location.hostname;
		search_url=hostname+urllink+'&p[]=facets.sortby='+data;
		window.location = search_url;
}
function borrowerPagination(event,page,urllink){
	if (event.keyCode == 13) { 
	var hostname =location.protocol+"//"+location.hostname;
	search_url=hostname+urllink+'&p[]=page='+page;
	window.location = search_url;
	}
}
function clickborrowerPagination(page,urllink){
	alert(page);
	var hostname =location.protocol+"//"+location.hostname;
	search_url=hostname+urllink+'&p[]=page='+page;
	alert(search_url);
	window.location = search_url;
}



/*Prelive message text*/


$(document).ready(function() {
	   $(".prelive_msg").live( "click", function() {
		 alert('Only paid and live lenders are allowed to view detailed profiles of more than 10 borrowers.');
	   });
});
 
