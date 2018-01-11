
var xmlhttp = CreateXmlHttpRequestObject();


function CreateXmlHttpRequestObject()
{
var xmlhtt;

if(window.ActiveXObject){

try{
xmlhtt= new ActiveXObject('Microsoft.XMLHTTP');

}
catch(e){

xmlhtt=false;
}
}
else
 

try{
xmlhtt= new  XMLHttpRequest();

}
catch(e){

xmlhtt=false;
}

return xmlhtt;
}



function displayhide(){

	if(document.getElementById("showhidelist").style.display == 'block' &&  document.getElementById("hidddencreateloan").style.display == 'none')
		{

		document.getElementById("showhidelist").style.display = 'none';
		}

	 if(document.getElementById("hidddencreateloan").style.display == 'none'){
         document.getElementById("hidddencreateloan").style.display = 'block';  // addfaircentloans
          //  document.getElementById("addfaircentloans").style.display = 'none';
     }else if(document.getElementById("hidddencreateloan").style.display == 'block'){
         document.getElementById("hidddencreateloan").style.display = 'none';
          // document.getElementById("addfaircentloans").style.display = 'block';
     }
}
          //	'document.getElementById("hidddencreateloan").style.display="block"'
	
	 function displayhideaddloan(){
		 if(document.getElementById("hidddencreateloan").style.display == 'block' && document.getElementById("showhidelist").style.display == 'none'){

			 document.getElementById("hidddencreateloan").style.display = 'none';

			 }
		 
		 if(document.getElementById("showhidelist").style.display == 'none'){
	         document.getElementById("showhidelist").style.display = 'block';
	        // document.getElementById("createloanbutton").style.display = 'none';
	     }else if(document.getElementById("showhidelist").style.display == 'block'){
	         document.getElementById("showhidelist").style.display = 'none';
	        // document.getElementById("createloanbutton").style.display = 'block';
	     }
			 
        }
	
function DisplayHideNumericField(a){
	    //alert(a);
var idnumerictext="numerictext"+a;
var buttonsubmit="buttonsubmit"+a;
        //alert(a + idnumerictext );

	if(document.getElementById(idnumerictext).style.visibility == 'hidden'){
        document.getElementById(idnumerictext).style.visibility = 'visible';
        // document.getElementById(buttonsubmit).style.display = 'block';
        // document.getElementById("createloanbutton").style.display = 'none';
    }else if(document.getElementById(idnumerictext).style.visibility == 'visible'){
        document.getElementById(idnumerictext).style.visibility = 'hidden';
        //document.getElementById(buttonsubmit).style.display = 'none';
        //document.getElementById("createloanbutton").style.display = 'block';
    }

	
}

function submitdatatocent_wif_loan(a,loan_type_cnd){



var fc_loan_id= a, buttonsubmit="buttonsubmit"+a , idnumerictext="numerictext"+a ,roiid="ROI"+a,tenureid="tenure"+a, loan_purpose="loan_purpose"+a;


var loan_amount=document.getElementById(idnumerictext).value;
var roii=document.getElementById(roiid).innerHTML;
var tenure=document.getElementById(tenureid).innerHTML;
var loan_purpose=document.getElementById(loan_purpose).innerHTML;

var roi = roii.substring(0, roii.length - 1);

         //alert("ID="+fc_loan_id + " Numeric text entered="+loan_amount + " ROI= "+roi +" Tenure="+ tenure+" loan purpose="+ loan_purpose);

         // Ajax throughh javascript Implementation

var url = "http://www.dfaircent.com/sites/all/modules/custom/what_if_analysis/php_files/status_changeaddfaircentloan.php";
   //xmlhttp.open("GET", "status_changeaddfaircentloan.php?status=update&fc_loan_id="+fc_loan_id+ "&roi="+roi+"&tenure="+tenure+"&loan_amount="+loan_amount+"&loan_purpose="+loan_purpose, true);
var params = "status=update&fc_loan_id="+fc_loan_id+ "&roi="+roi+"&tenure="+tenure+"&loan_amount="+loan_amount+"&loan_purpose="+loan_purpose+"&loan_type_cnd="+loan_type_cnd;
   //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xmlhttp.open("GET", url+"?"+params, true);
xmlhttp.send(null);
xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    	document.getElementById("RefreshAddFaircentLoan").innerHTML=xmlhttp.responseText;
    }
}
//xmlhttp.send(params);
//var a=xmlhttp.open("GET", "?q=user_registration_form_display&name="+x, false);
//alert(a);
// xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);
//xmlhttp.onreadystatechange=handleServerResponse;
/*
xmlhttp.send(null);
document.getElementById("RefreshAddFaircentLoan").innerHTML=xmlhttp.responseText;
//
//
////Ajax throughh jquery Implementation
//

var http = new XMLHttpRequest();


//Send the proper header information along with the request




var http = new XMLHttpRequest();
var url = "get_data.php";
var params = "lorem=ipsum&name=binny";
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params);

*/





}

function onlyonesubmit(){
	
	/*	
	var checkboxes = document.getElementsByName('location[]');
	var vals = "";
	for (var i=0, n=checkboxes.length;i<n;i++) 
	{
	    if (checkboxes[i].checked) 
	    {
	        vals += ","+checkboxes[i].value;
	    }
	}
	if (vals) vals = vals.substring(1);
	
*/	
	// another way
	
	
	var checkboxes = document.getElementsByName('onlyonesubmit');
	var selected = [];
	var fc_loan_id,loan_type_cndid,idnumerictext,roiid,tenureid,loan_purpose;
	for (var i=0; i<checkboxes.length; i++) {
	    if (checkboxes[i].checked) {
	    	 //if(document.getElementById(idnumerictext).value!=""){
	    	 fc_loan_id= checkboxes[i].value;
	    	 loan_type_cndid="buttonsubmit"+checkboxes[i].value ;
	    	 idnumerictext="numerictext"+checkboxes[i].value ;
	    	 roiid="ROI"+checkboxes[i].value;
	    	 tenureid="tenure"+checkboxes[i].value;
	    	 //alert(loan_purpose+tenureid+roiid+idnumerictext+loan_type_cndid+fc_loan_id);
	    	 var b=document.getElementById(idnumerictext).value;
	    	 //selected.push('a');
	    	 selected.push(b);
	    	var roii=document.getElementById(roiid).innerHTML;
	    	var roi = roii.substring(0, roii.length - 1);
	    	selected.push(roi);
	    	var c=document.getElementById(tenureid).innerHTML;
	    	var d=document.getElementById(loan_type_cndid).value;
	    	selected.push(fc_loan_id);
	    	selected.push(c);
	    	selected.push(d);
	    	//alert(roi);
	    	//}
	    	
	       // selected.push(checkboxes[i].value);
	    }
	}
	//console.log(selected);
	//alert(selected);
	
	
	var url = "http://www.dfaircent.com/sites/all/modules/custom/what_if_analysis/php_files/status_changeaddfaircentloan.php";
	   //xmlhttp.open("GET", "status_changeaddfaircentloan.php?status=update&fc_loan_id="+fc_loan_id+ "&roi="+roi+"&tenure="+tenure+"&loan_amount="+loan_amount+"&loan_purpose="+loan_purpose, true);
	var params = "selected="+selected;
	   //xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	xmlhttp.open("GET", url+"?"+params, true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
	    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	document.getElementById("RefreshAddFaircentLoan").innerHTML=xmlhttp.responseText;
	    }
	} 	
}


/** ******** Save data in proposal table ************* */
$(".single_send_proposal").click(function(event){
				var cur_item = $(this);
				var prop_btn_id = $(this).attr('id');
				if($('.'+prop_btn_id).is(':checked')){
					
					var loan_id=$(this).attr("data-id");
					var amount=parseInt($(this).attr("data-value"));
					var roi=$(this).attr("data-attr");
					var unrate_msg = "";
	
					var risk_type = $(this).attr('data-val');
							
						if($.trim(risk_type) == 'Unrated'){
							
							var unrate_msg = "You are about to invest in a Very High Risk Unrated borrower.  Chances of loan default are high.\n";
						}
						var days_left_type = $(this).attr('data-type');
						
						var text="";
						var text=unrate_msg;
						var confirma=confirm(text+" Proposal will be sent to the borrower. Click OK to continue.");
						if(days_left_type>0){
						if(confirma){
							$.ajax({
			     			type: "POST",
			     		    data: {
			     		    	bulk_invest_loanid:loan_id,
			     		    	bulk_invest_proposal_amount:amount,
						is_whatif_single:"Y",
			     		    },
			     		    url: '/lender/bulk/proposal/send',
			     		  beforeSend: function() { 
			     		    	$("#loaders").show();
			     		    	  },
			     		    success: function(response) {
//$("#loaders").hide();
							    var response1 =JSON.parse(response);
			         		   var text='';
			         		   for(var i=0;i<response1.length;i++){
				         		   if(response1[i]['response1']=="Success"){
			         			//  alert(response1[i]['name']+" ("+response1[i]['loanid']+"): "+response1[i]['response']);
/*$(this).parent().addClass("sada");
				cur_item.parent().parent().children('li').slice(-2).remove();
				
				cur_item.parent().parent().append('<li><a href="javascript:void(0)" class="send_proposal single_send_proposal sent_prop" title="You have already sent proposal">Sent Proposal</a></li>');		
								//cur_item.parent().parent().children('li').slice(-2).remove();
*/

					 window.location.reload();								
				         		   }
				         		   else{
								$("#loaders").hide();
				         			 alert(response1[i]['name']+" ("+response1[i]['loanid']+"): "+response1[i]['response']);
					         		   }
			             		   }
						}
					});
					}} else{
						alert("You can not invest for this borrower.")
					}

				} else {alert("Please mark checkbox before click on send proposal")}
					
					

});


$('.portfolio_borrower_list .send_proposal_check').change(function() {
    $('.select_all_proposal').prop('checked', $('.portfolio_borrower_list .send_proposal_check').length == $('.portfolio_borrower_list .send_proposal_check:checked').length);


});

$(document).ready(function(){
$('.portfolio_borrower_list .send_proposal_check').change(function() {
var checkedid = $(this).attr('id');
	var modifyid = 'single_'+checkedid;

if ($(this).is(':checked')) {
	
	$('#'+modifyid).removeClass('disabled');
} else {
	if(!$('#'+modifyid).hasClass('disabled')){
  $('#'+modifyid).addClass('disabled');
 }
}
});

$(".select_send_proposal").click(function(event){

				var cur_item = $(this);
				var prop_btn_id = $(this).attr('id');

				
					var bulk_invest_loanid = [];
					var proposal_amount = [];
					var unrate_msg = "";
					var risktype =""
					var counter=0;
					$('.portfolio_borrower_list .send_proposal_check:checked').each(function(){
					
					var amount=parseInt($(this).attr("data-value"));
					var loan_id=$(this).attr("data-id");
				
					bulk_invest_loanid.push(loan_id);
					proposal_amount.push(amount);
					
					
					
					if($.trim($(this).attr('data-val')) == 'Unrated'){
						risktype = $(this).attr('data-val');
						}
					
					 counter++;

				});
					
						if(counter==0){

						alert("Please mark checkbox before click on send proposal")
						} else {	
					
	if($.trim(risktype) == 'Unrated'){
							
							var unrate_msg = "You are about to invest in a Very High Risk Unrated borrower.  Chances of loan default are high.\n";
						}
					    var text='';;
						var text=unrate_msg;
						var confirma=confirm(text+" Proposal will be sent to the borrower. Click OK to continue.");
						if(confirma){
							$.ajax({
			     			type: "POST",
			     		    data: {
			     		    	bulk_invest_loanid:bulk_invest_loanid.toString(),
			     		    	bulk_invest_proposal_amount:proposal_amount.toString(),
						is_whatif_multi:"Y",
			     		    },
			     		    url: '/lender/whatif/bulkinvest',
			     		  beforeSend: function() { 
			     		    	$("#loaders").show();
			     		    	  },
			     		    success: function(response) {

 var response1 =JSON.parse(response);
var error_msg="";
	  var text='';
         		  for(var i=0;i<response1.length;i++){
	         		   if(response1[i]['response1']=="Success"){
        			  window.location.reload();
	         		   }
	         		   else{
	         			  error_msg += response1[i]['name']+" ("+response1[i]['loanid']+"): "+response1[i]['response'];
				          
		         		   }

            		   }
if(error_msg!=""){
alert("You can not send multiple proposals. "+error_msg);
       window.location.reload();  		 
		}	         		   
						}
					});
					}

				
					
					
}
});
});
