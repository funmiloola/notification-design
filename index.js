const btn = document.querySelector(".secondary-button");
// const notificationBarge = document.querySelector(".notification-barge");
const article = document.querySelector(".notification");
const displayMessage = document.querySelector(".display-message");
const privateMessage = document.querySelector(".private-message");
const notificationBtn= document.querySelector(".notification-btn");
btn.addEventListener('click',function(){
 article.classList.add("mark-all-as-read");
//  notificationBarge.classList.add("mark-all-as-read");
});
displayMessage.addEventListener('click',function(){
    privateMessage.classList.toggle('show-message');
});
// 