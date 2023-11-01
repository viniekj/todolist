export function checkTask() {
    const checkBtn = document.getElementsByClassName("checkBtn");
    
    for (let i = 0; i < checkBtn.length; i++) {
       checkBtn[i].addEventListener("click", function (e) {
          const listItem = e.target.closest(".list-item");
         if(listItem){
            listItem.classList.toggle("toggled");
         }
       });
    }
 }
