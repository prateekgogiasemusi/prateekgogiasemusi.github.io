var root = location.protocol + "//" + location.host;
var percentComplete = 0;
function test(inputid,label,doctype,formid,event,removeclassid){
	var filename = inputid.files[0].name;
    // Use a regular expression to trim everything before final dot
    var extension = filename.replace(/^.*\./, '');
   var upload_extension=checkFileExtentsion(extension);//check upload extension type
   if(upload_extension==false){
	   alert("Only png,jpg,pdf and jpeg extensions are allow");
	   return false;
   }
   
	// var className = $('#trash-icon').attr('class');
	// alert(className);
	
	$( "#"+removeclassid).removeClass( "btn btn-default btn-file upload-button" ).addClass( "btn btn-default btn-file upload-button disabled" );
	filename=$('#'+inputid.id).val();
	var filenameread = filename.split(".");
	var partialfilename=filenameread[0].substring(0,10)+'.'+filenameread[1];
	var fileSelect = inputid;
	var fsize=validFileSize(inputid.files[0].size)
	if(fsize>=1)
		{
		alert('Maximum file size cannot be greater than 2 MB');
		return false;
		
		}
		
	//alert(fsize);
		 // return false;
	//alert(fileSelect);
	var files = fileSelect.files;
	var formData = new FormData();
	for (var i = 0; i < files.length; i++) {
		var file = files[i];
		// Add the file to the request.
		formData.append("file"+i, file, file.name);
	}
	formData.append('uploadedtype', doctype);
	var root = location.protocol + "//" + location.host;
	$.ajax({
		type : "POST",
		url : root+"/upload/doc",
		data:formData,
		processData:false,
		contentType:false,
		beforeSend:function(){window.uploadProgress(event)},
		  xhr: function()
          {
            var xhr = new window.XMLHttpRequest();
            xhr.upload.addEventListener("progress", function(evt){
              if (evt.lengthComputable) {
                percentComplete = 100 * (evt.loaded / evt.total);
              }
            }, false);
            return xhr;
          },
		
		success : function(msg) {
			var result = msg.split("@"); 
			$("#"+formid).val(result[1].trim());
			// $("#progress").hide();
			//$("#"+label).html(result[2]);
			if(doctype=='PROFILE')
				{$('#profile-pic').attr('src',result[0]);
				$("#profile-pic").css('height','60');
				$("#profile-pic").css('width','60');}
			
			$("#"+label).html('<a href="'+result[0]+'" target="_blank">'+result[2]+'</a>');
			$('#'+inputid.id).css("z-index", "-1");
		    var parentButton = $(event.target).parent('.upload-button');

		 parentButton.addClass('uploaded').removeClass('uploading');
		        parentButton.find('#upload-indicator').addClass('animateOut').removeClass('animateIn');
		        setTimeout(function(){parentButton.find('#upload-indicator').addClass('hide').removeClass('show');}, 250);
		        setTimeout(function(){parentButton.find('#tick-icon').addClass('show animateIn').removeClass('hide animateOut');}, 250);
		        setTimeout(function(){parentButton.find('#tick-icon').addClass('animateOut').removeClass('animateIn');}, 3000);
		        setTimeout(function(){parentButton.find('#tick-icon').addClass('hide').removeClass('show');}, 3250);
		        setTimeout(function(){parentButton.find('#trash-icon').addClass('show animateIn').removeClass('hide animateOut'); $('#'+inputid).hide(); }, 3250);

		},
	});
//	}

}


window.uploadProgress = function(event) {
	
    var parentButton = $(event.target).parent('.upload-button');
    var progress;// = parseInt(parentButton.find('#upload-indicator').attr('data-progress'));
    parentButton.addClass('uploading').removeClass('uploaded');
    parentButton.find('#cloud-icon').addClass('animateOut').removeClass('animateIn');
    if (!parentButton.find('#upload-indicator').hasClass('show')) {
        setTimeout(function(){parentButton.find('#upload-indicator').addClass('show animateIn').removeClass('hide animateOut');}, 250);
    };
    setTimeout(function(){parentButton.find('#cloud-icon').addClass('hide').removeClass('show');}, 250);
    progress = percentComplete;//progress + Math.floor(Math.random() * 15);
    if(progress > 100) { progress = 100; }
    parentButton.find('#upload-indicator').attr('data-progress', progress);
    if (progress<100) {
        setTimeout(function(){window.uploadProgress(event);}, 100);
    } else {
      /*  parentButton.addClass('uploaded').removeClass('uploading');
        parentButton.find('#upload-indicator').addClass('animateOut').removeClass('animateIn');
        setTimeout(function(){parentButton.find('#upload-indicator').addClass('hide').removeClass('show');}, 250);
        setTimeout(function(){parentButton.find('#tick-icon').addClass('show animateIn').removeClass('hide animateOut');}, 250);
        setTimeout(function(){parentButton.find('#tick-icon').addClass('animateOut').removeClass('animateIn');}, 3000);
        setTimeout(function(){parentButton.find('#tick-icon').addClass('hide').removeClass('show');}, 3250);
        setTimeout(function(){parentButton.find('#trash-icon').addClass('show animateIn').removeClass('hide animateOut');}, 3250);*/
    }
}

function validFileSize(fileSize)
{
	var x1=fileSize/1048576;
	var newsize=x1/2;
	
	return newsize;
}
function deleteimg(deletedid,inputid,event)
{
	var className = $('#trash-icon').attr('class');
	 alert(className);
	var formData = new FormData();
	var fileurl=$("#"+deletedid).val();
	formData.append('deletfile', fileurl);
	//$("#"+label).html('<a href="'+result[0]+'" target="_blank">'+result[2]+'</a>');
	
	$.ajax({
		type : "POST",
		url : root+"/delete/doc",
		data:formData,
		processData:false,
		contentType:false,
		//beforeSend:function(){window.uploadProgress(event)},
		 
		success : function(msg) {
			$("#pancard-ext").html('');
			$("#"+deletedid).val('');
			$('#'+inputid).css("z-index", "0");
			
			// var parentButton = $(event.target).parent('.upload-button');
			// alert(parentButton.attr('id'));
			 
			// alert(parentButton.find('#trash-icon'));
		//	 var className = $('#trash-icon').attr('class');
			// var currentId = parentButton.find('#trash-icon').attr('id');
			// alert(className);

			// parentButton.addClass('uploading').removeClass('uploaded');
			     //   parentButton.find('#upload-indicator').addClass('animateIn').removeClass('animateOut');
			     //   setTimeout(function(){parentButton.find('#upload-indicator').addClass('show').removeClass('hide');}, 250);
			       
			       // setTimeout(function(){parentButton.find('#trash-icon').addClass('hide').removeClass('show');}, 3250);
			      //  setTimeout(function(){parentButton.find('#trash-icon').addClass('hide animateOut').removeClass('show animateIn');}, 3250);
			//    $('#cloud-icon').addClass('show').removeClass('hide');
			 //   $('#cloud-icon').addClass('animateIn').removeClass('animateOut');

			 //   $('#trash-icon').addClass('hide').removeClass('show');
			 //   $('#trash-icon').removeClass('animateIn');
		     //  $("#trash-icon").hide();
		//	alert(msg);
		//	var result = msg.split("@"); 
		//	alert(result[1]);
		//	$("#"+formid).val(result[1].trim());
			
		
			//onclick="deleteimg('pancardvalue','pancard','pancard-ext',event);"

		},
	});
}
function testslider(fileurl)
{ 
	//alert(fileurl);
	$("#main-list").html('<div class="list" id="main-list">Raja</div>');
	var formData = new FormData();
	formData.append('currentuid', fileurl);
	$.ajax({
		type : "POST",
		url : root+"/view/data",
		data:formData,
		processData:false,
		contentType:false,
		beforeSend:function(){/*$("#modal-load").css("display","block");*/	},
		
		success : function(msg) {
			//$("#modal-load").css("display","none");
			$("#main-list").html(msg);
		
		//	$('#modal-load').attr('display','block');
			
			//$("#modal-load").show();
		},
	});
	
	
//	function yes()
	
//	}

}
//file extension type
function checkFileExtentsion(extension){
	extension = extension.toLowerCase();
	var img_type='';
	//alert(extension);
	if (extension=="png" || extension=="jpg" || extension=="pdf" || extension=="jpeg"){
		img_type = true;
        
    }
	else{
		img_type = false;
	}
	return img_type;
}