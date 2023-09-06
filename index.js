const btn = document.querySelector(".secondary-button");
const unreadNotification = document.querySelectorAll(".unreadNotification");
const displayMessage = document.querySelector(".display-message");
const privateMessage = document.querySelector(".private-message");
const notificationBtn= document.querySelector(".notification-btn");
const notificationBarge = document.querySelectorAll(".notification-barge");
const notification = document.querySelectorAll(".notification");
unreadNotification.forEach(function(unreadNotification){
    btn.addEventListener('click',function(){
        unreadNotification.classList.add("read-notification");
       });
});

displayMessage.addEventListener('click',function(){
    privateMessage.classList.toggle('show-message');
});
notification.forEach(function(notification){
    notificationBtn.addEventListener('click',function(){
        if(notification.classList.contains("notification-barge")){
            notification.style.display="block";
        }else{
            notification.style.display = "none";
        }
        
    });
});
