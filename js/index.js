document.addEventListener("DOMContentLoaded", function () {
        const notifCards = document.querySelectorAll(".notif-card");
        const markAllReadBtn = document.getElementById("Mark");
        const notificationCount = document.getElementById("No-notif");
      
        const unreadCards = Array.from(notifCards).filter(
          (card) => card.id === "unread"
        );
      
        unreadCards.forEach((card) => {
          card.addEventListener("click", () => {
            if (card.id === "unread") {
              if (parseInt(notificationCount.textContent) <= 0) {
                notificationCount.textContent = parseInt(
                  notificationCount.textContent
                );
              } else {
                notificationCount.textContent =
                  parseInt(notificationCount.textContent) - 1;
              }
              card.id = "";
            }
          });
        });
      
        markAllReadBtn.addEventListener("click", function () {
          unreadCards.forEach((card) => {
            card.id = "";
          });
          notificationCount.textContent = "0";
        });
      })