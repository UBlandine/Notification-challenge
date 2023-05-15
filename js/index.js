const unReadMessages = document.querySelector('.unread');
const unReadMessagesCount = document.getElementById('#No-notif');
const markAll = document.getElementById('#Mark');

unReadMessagesCount.innerText = unReadMessages.length;

unReadMessages.forEach((message) =>{
        message.addEventListener('click', () => {
                message.querySelector('unread').style.backgroundColor = "white";
               
        })
})
//Mark all as read part
markAll.addEventListener('click', () =>{
        unReadMessages.forEach((message) => {
                message.classList.remove('unread');
        });
        const unReadMessages = document.querySelectorAll('.unread');
        unReadMessagesCount.innerHTML = newUnreadMessages.length
})