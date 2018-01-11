function notifyMe() {
 /* // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check if the user is okay to get some notification
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
   // var notification = new Notification("Hi there!");
    title = 'New Notification';
            options = {
              body: 'Hi, faisal test ',
              tag: 'preset',
              icon: 'https://www.faircent.com/sites/all/themes/media-responsive-theme/logo.png'
            };
    var notification = new Notification(title,options);
  }

  // Otherwise, we need to ask the user for permission
  // Note, Chrome does not implement the permission static property
  // So we have to check for NOT 'denied' instead of 'default'
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {

      // Whatever the user answers, we make sure we store the information
      if(!('permission' in Notification)) {
        Notification.permission = permission;
      }

      // If the user is okay, let's create a notification
      if (permission === "granted") {
       // var notification = new Notification("Hi there!");
var notification = new Notification(title,options);
      }
    });
  }

  // At last, if the user already denied any notification, and you 
  // want to be respectful there is no need to bother him any more. */


/*
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
}); */

//function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
 title = 'New Notification';
            options = {
              body: 'Hi, faisal test ',
              tag: 'preset',
              icon: 'https://www.faircent.com/sites/all/themes/media-responsive-theme/logo.png',
		display:'faircent.com'
            };
    var notification = new Notification(title,options);
  /*  var notification = new Notification('Notification title', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: "Hey there! You've  notified!",
      host:'faisal',
    }); */

    notification.onclick = function () {
      window.open("https://www.faircent.com");      
    };
    
  }

}


//}
