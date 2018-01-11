function test(field){
	
	
	//alert("function called");
	//document.location.href="list-borrowers";
}

function express_intrest(borrower_uid,lender_uid,cuurent_page,invid) {
	var root = location.protocol + "//" + location.host;
	var invid  = parseInt(invid);
	if(invid !=parseInt(10000))
		{
		window.location.href = root + "/lender_registration/step2";
		return false;
		}
		

if(lender_uid==0)
	{
	if(cuurent_page=='')
	cuurent_page=1;
	window.location.href = root + "/user/login?list-borrowers&page="+cuurent_page+"&type=listing";
	return false;
	}
$("#express_intrest"+borrower_uid)/*.fadeOut(10000)*/.html(
'<font color="red">Thanks</font>');
	var dataString = 'lender_uid=' + lender_uid + '&borrower_uid=' + borrower_uid;
	$.ajax({
		type : "get",
		url : "/show_intrest",
		data : dataString,
		cache : true,
		success : function(response) {
			//$("#express_intrest"+borrower_uid).focus();
		
			
			// alert(response);
		}
	});
	return false;
}

function update_list(lid)
{
	
	var dataString = 'loanid=' + lid;
	$.ajax({
		type : "get",
		url : "/update_list",
		data : dataString,
		cache : true,
		success : function(response) {
			//$("#express_intrest"+borrower_uid).focus();
			//$("#express_intrest"+borrower_uid).fadeOut(10000).html(
					//'<font color="red">Thanks</font>');
			
			// alert(response);
		}
	});
	return false;
	

}

function highrisk(uid) {
	   jQuery('#myModal-'+uid).modal();
	/* var hostname =location.protocol+"//"+location.hostname;
	 search_url=hostname+'/user-profile/'+uid;*/
	 
	
   
}

function searchbyname()
{
	
	
	var name;/*=$('#search_name').val();*/
	 name=document.getElementById("search_name").value;
	 var hostname =location.protocol+"//"+location.hostname;
	 search_url=hostname+'/list-borrowers/?p[]=facets.keyword='+name;
	
	window.location = search_url;
	
	}

function searchonkey(event)
{
	
	if (event.which == '13') {
		
		event.preventDefault();
		 searchbyname();
		
	}
}

function borrower_detailpage(uid)
{
	
	//$('#myModal').modal('hide');
	 var hostname =location.protocol+"//"+location.hostname;
	 var search_url2=hostname+'/user-profile/'+uid;
	 window.location.href= search_url2;
	
}
/*(function($){
	jQuery.noConflict();
//	$('#myModal').modal('hide');
    $('#add_case').on('click', function() {
        
        jQuery('#myModal').modal();
   	
    });
    $('#cancelcase').click(function() {
    	$('#myModal').modal('hide');
    	return false;
	});
})(jQuery);
*/
function popupclose(uid)
{
	$('#myModal-'+uid).modal('hide');

}

function countdownload(borrowerid,leneruid)
{
//alert('here');	
var root =location.protocol+"//"+location.hostname;

$.ajax({
	type : "GET",
	url : root+"/pdfcount",
	data: {'lenderuid':leneruid,'borrowerid':borrowerid},
	
	//beforeSend:function(){window.uploadProgress(event)},
	 
	success : function(msg) {
	},
});
}

function tudata(event){
	
	
	//window.parent.location.reload(); 
	
    window.parent.Shadowbox.close(); 
    event.preventDefault();
   // window.location.href = "http://localhost/main.php";
    window.location ="http://www.google.com";
    alert(event);
    
	
}

function popupcloseyes(uid)
{
	jQuery('#myModal-'+uid).modal();

}
