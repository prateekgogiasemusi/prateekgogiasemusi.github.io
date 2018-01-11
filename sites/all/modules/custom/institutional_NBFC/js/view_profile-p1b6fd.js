function notify_inv_state(){
	alert("You may invest once your investment request gets approved");
	return false;
}

function redirect_login(uid){
	// alert(uid);
	 var hostname =location.protocol+"//"+location.hostname;
	 window.location.href=hostname+'/user/login?page=user-profile&uid='+uid;
}

function redirect_login_from_lender(uid){
	// alert(uid);
	 var hostname =location.protocol+"//"+location.hostname;
	 window.location.href=hostname+'/modal_forms/nojs/login?page=lender-profile&uid='+uid;
}
function continue_invest(){	
	 popup('popUpDiv'); 	 
	 var hostname =location.protocol+"//"+location.hostname;		 
	 window.location.href=hostname+'/list-borrowers';
}


function  open_checkout_page(){	
	 var hostname =location.protocol+"//"+location.hostname;
	var cur_lender_id = document.getElementById('curr_lenderid').value;	
    window.location.href= hostname+"/display-cart/"+cur_lender_id;
}


function  open_top_up_option(){

	var lenderid = document.getElementById('curr_lenderid').value;
	var hostname =location.protocol+"//"+location.hostname;	
	window.location.href=hostname+'/topup-wallet/lenderid/'+lenderid;
	 /* var top_up_c = document.getElementById('top_up_div');
   
	if(top_up_c.style.display=="none"){
	 top_up_c.style.display="block";
     }
     else{
    	 top_up_c.style.display="none";
       }
     */
}
/*
function top_up_wallet(){
	var hostname =location.hostname;
	var tamount = document.getElementById('top_up_amount').value;	
	var lenderid = document.getElementById('curr_lenderid').value;	
	

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
				// Something went wrong
				alert("Your browser broke!");
			}
		}
	}
      querystring ="top-up-wallet/lenderid/"+lenderid+"/amount/"+tamount;
	  
	  querystring ='http://www.dfaircent.com/'+querystring;
	  
	  ajaxRequest.open("GET", querystring, true);
	  ajaxRequest.send(null);
	  document.getElementById('topup_msg').style.display="block";	

}

*/


function  save_inv_data(){
	
var hostname =location.protocol+"//"+location.hostname;
var flag=0;
var ajaxRequest;  // The variable that makes Ajax possible!
var amount=document.getElementById('amount').value;
if(amount==""){

	alert("Kindly enter amount");
	return false;
}
if(amount<=0){

	alert("Amount should be greater than zero");
	return false;
}
if(!check_num(amount))
	{return false;}

var  roi = document.getElementById('prop_roi').value;
if(roi<=0){

	alert("Kindly Select rate of Interest");
	return false;
}
		
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
				// Something went wrong
				alert("Your browser broke!");
			}
		}
	}
	
      var amount = document.getElementById('amount').value;		
	  var  roi = document.getElementById('prop_roi').value;
	 // alert(roi);
	  var  borrowerid = document.getElementById('curr_uid').value;
	  var  cten = document.getElementById('curr_tenure').value;
	  var  loanid = document.getElementById('curr_loanid').value;
	  lenderuid=document.getElementById('curr_lenderid').value; 
	 	var querystring = "/inv-cart/loan_id/" + loanid + "/lender_uid/" + lenderuid + "/amount_proposed/" + amount+ "/roi_proposed/" + roi;
		
		querystring =hostname+querystring;	
			ajaxRequest.open("GET", querystring, true);
	    ajaxRequest.send(null);
	    ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){			
				
				var error_token = document.getElementById('error_msg');				
				var res=ajaxRequest.responseText;
			
				
				var str_res=res.split(","); 
				strmsg = str_res[0].trim();
				//alert(strmsg);
				 if(strmsg=="less_remaing"){
					
				   alert("You can not invest more than Amount Needed");
				   return false; 
				 }
				// alert(str_res[0]);
				 if(strmsg=="max_amount"){
					 
					alert('You can not invest more than Rs '+str_res[1]);
					return false;
				}
				
				// alert(str_res[0]);
				 if(strmsg=="all_ready_checked"){
					alert('You have already saved this proposal in your cart. Kindly checkout from your cart.');
					return false;
				} 
				 
				// check wallet amount less than invested amount than give messages;
				 if(strmsg=="recharge_wallet"){
					 
					 alert("Your Wallet Balance Less than Proposed Amount So Kindly Recharge Your Wallet ");
					return false;
				}
				// check wallet amount less than invested amount than give messages;
				 if(strmsg=="fundedclosed"){
					 
					 alert("100 % funded so you can invest ");
					return false;
				}
				else{
				
                 n=res.split("");
                 if(n[3]==4){    
                	
                	 error_token.innerHTML="You do not have enough balance in your wallet , please top up wallet or remove some of the items";
                	 error_token.style.display="block"; 
                	 document.getElementById('topup_link').style.display="block";
                	 document.getElementById('remove_link_cont').style.display="block";
                	 var remove_link_cont='<a href="#" id="remove_link" onclick="open_checkout_page();">Click to remove items</a>'
                	 document.getElementById('remove_link_cont').innerHTML=remove_link_cont;
                	 var cinvest = document.getElementById('continue_invest');
                	 var copener = document.getElementById('check_out_opener');
                	 var closer = document.getElementById('closer');        	 
                	 
                	 cinvest.style.display="none"; 
                	 copener.style.display="none"; 
                	 closer.style.display="none"; 
                	 return false;
                 }               			
               
				var page_name='/display-cart/'+lenderuid;
				window.location.href=page_name;
				//flag=1;
				var ciframe = document.getElementById('cframe');
				ciframe.src='/user-cart/'+lenderuid;		
				popup('popUpDiv');  
				
				}
			}
		}
	   
	
	   
}



function  save_fdrequest(){
var flag=0;
var hostname =location.protocol+"//"+location.hostname;
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
				// Something went wrong
				alert("Your browser broke!");
			}
		}
	}
	  
      //var amount = document.getElementById('amount').value;		
	  //var  roi = document.getElementById('prop_roi').value;
	  var  borrowerid = document.getElementById('curr_uid').value;
	  //var  cten = document.getElementById('curr_tenure').value;
	  var  loanid = document.getElementById('curr_loanid').value;
		
	  lenderuid=document.getElementById('curr_lenderid').value;
		
		var querystring = "/fdrequest/loan_id/" + loanid + "/lender_uid/" + lenderuid;
		
		querystring =hostname+querystring;
		///alert(querystring);
		//$loan_id,$lender_uid,$amount_proposed,$roi_proposed
		ajaxRequest.open("GET", querystring, true);
	    ajaxRequest.send(null);
	    ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
				///alert("data saved correctly");
				
				var error_token = document.getElementById('error_msg');
				
				var res=ajaxRequest.responseText;
                 n=res.split("");
                 if(n[3]==4){
                	 error_token.innerHTML="Not enough balance in wallet , please top up the wallet or remove some of the items";
                	 error_token.style.display="block"; 
                	 document.getElementById('topup_link').style.display="block";
                	                	 
                 }	
               
				
				flag=1;
				//var ciframe = document.getElementById('cframe');
				//ciframe.src='/user-cart/'+lenderuid;		
				popup('popUpFdDIV');  
			}
		}
	   
	
	   
}

function  save_inv_data_by_admin(){
	var hostname =location.protocol+"//"+location.hostname;
	var flag=0;
	var ajaxRequest;  // The variable that makes Ajax possible!
	var amount=document.getElementById('amount').value;
	if(amount==""){
		alert("Kindly enter amount");
		return false;
	}
	if(amount<=0){
		alert("Amount should be greater than zero");
		return false;
	}
		
		
	  var  roi = document.getElementById('prop_roi').value;
	  
	  if(roi<=0){

			alert("Kindly Select rate of Interest");
			return false;
		}
			
	  
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
					// Something went wrong
					alert("Your browser broke!");
				}
			}
		}
		  
	      var amount = document.getElementById('amount').value;		
		  var  roi = document.getElementById('prop_roi').value;
		  var  borrowerid = document.getElementById('curr_uid').value;
		  var  cten = document.getElementById('curr_tenure').value;
		  var  loanid = document.getElementById('curr_loanid').value;
		  lenderuid=document.getElementById('curr_lenderid').value; 
		 	var querystring = "/admin-inv/loan_id/" + loanid + "/lender_uid/" + lenderuid + "/amount_proposed/" + amount+ "/roi_proposed/" + roi;
	  
		 	querystring =hostname+querystring;	
			ajaxRequest.open("GET", querystring, true);
	    ajaxRequest.send(null);
	    ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){			
				
				var error_token = document.getElementById('error_msg');				
				var res=ajaxRequest.responseText;
				var str_res=res.split(","); 
				strmsg = str_res[0].trim();
				//alert(strmsg);
				 if(strmsg=="less_remaing"){
					
				   alert("You can not invest more then Rs "+str_res[1]);
				   return false; 
				 }
				// alert(str_res[0]);
				 if(strmsg=="max_amount"){
					 
					alert('You can not invest more then Rs '+str_res[1]);
					return false;
				}
if(strmsg=="recharge_wallet"){
					 
					 alert("Your Wallet Balance Less than Proposed Amount So Kindly Recharge Your Wallet ");
					return false;
				} 


if(strmsg=="inv_state_pending"){
	 
	alert("Investment request is pending of This lender Firstly approved investment then invest ");
	return false;
} 
if(strmsg=="all_read_invest"){
	 
	 alert("You have all ready invested on this Borrower");
	return false;
} 
if(strmsg=="loan_state_not_approved_by_user"){
	 
	 alert("Acceptance of Loan amount and ROI proposed by admin is pending on user");
	return false;
} 
alert("Investment  successfully, you are being redirected to dashboard");	
window.location.href=hostname+"/admins/submit/details";
			}
		   
	}
}


function calculateemi()
{
	var roi=$("#prop_roi option:selected" ).text();
	  var  roi_val = document.getElementById('prop_roi').value;
	var amount=$("#amount").val();
	
	if(amount=="" && roi_val !=0)
		{
		alert("Kindly Enter Amounts");
		return false
		}
	if(!check_num(amount))
		{return false;}
	
	var ten=$("#tenure_value").val();
	 var res = roi.split("%");
	 var principal = amount;
	 var newroi=((res[0])/100)/12;
	var t=1+newroi;
	//alert(Math.pow(2,3));
	var emi=principal*(newroi*Math.pow(t,ten)/(Math.pow(t,ten)-1));
	emi=emi.toFixed(2); 
		//var emi=$principal*(newroi*(Math.pow(t,ten))/((Math.pow(t,ten))-1));
if(roi_val !=0)
	{
	$("#emi_value").html("Expected returns per month <span>`</span>"+emi);}
}

function check_num(amount)
{
	if(isNaN(amount))
		{
		alert("Amount Should be in Number");
	return false
		}
	return true;
		
}


function expanddiv(obj,parentid){ 
	// var obj=eval(obj);
	
	 if(obj.style.display=="block" || obj.style.display==""){
	
	  obj.style.display="none";
	  $("#"+parentid.id).removeClass("invest-right-down");
	  $("#"+parentid.id).addClass("invest-right-arrow");
	  
	 
	  
	  }
	 else{
		
		 obj.style.display="block";
		 $("#"+parentid.id).removeClass("invest-right-arrow");
		 $("#"+parentid.id).addClass("invest-right-down");
		 
		 
	 }
	}


