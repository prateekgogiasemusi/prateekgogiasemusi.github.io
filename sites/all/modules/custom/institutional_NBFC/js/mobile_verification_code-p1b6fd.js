/*Mobile validation*/
  function isNumberKey(evt)
  {
     var charCode = (evt.which) ? evt.which : event.keyCode
    		 
     if(charCode == 43 || charCode == 45 ) return true;
     
     else if (charCode > 31 && (charCode < 48 || charCode > 57) )
        return false;

     else return true;
  }
  
  
  function send_verification_code(usertype){
	  
	
	  var ajax_req_obj = ajax_request_obj();
	  parameters = "&action=mvc";
	 
	  var hostname =location.protocol+"//"+location.hostname;
	  var mobile =document.getElementById("txt2").value;
	  if(mobile==""){
		  alert("Kindly enter a mobile number");
	      return false;
	  }
	  else{
	  
	  if(usertype=='borrower'){
		  var querystring = hostname+"/mobile-verify/"+mobile;	
	  }
	  
	  if(usertype=='lender'){
		  var querystring = hostname+"/mobile-verify-lender/"+mobile;	
	  }
	  
	  ////////alert(querystring);
		 
	  ajax_req_obj.open("POST", querystring, true);
	  ajax_req_obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
	  ajax_req_obj.send(parameters);

	  ajax_req_obj.onreadystatechange = function(){
	        
			if(ajax_req_obj.readyState == 4){			
				var vcode =document.getElementById("vcod");
				var msg_cont=document.getElementById("mob_error");			
				
				vcode.value=ajax_req_obj.responseText;
			//	alert(ajax_req_obj.responseText);
				
			  ///var vcode.value=ajax_req_obj.responseText;								
				//alert("Verification code has been sent to your mobile "+mobile);
				msg_cont.innerHTML="Verification code has been sent to your mobile "+mobile;
				msg_cont.focus();
			}
		}
	  
	  
	  }
  }


  