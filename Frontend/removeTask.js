export function removeTask() {
   const removeBtns = document.getElementsByClassName("removeBtn");
  
   for (let i = 0; i < removeBtns.length; i++) {
      removeBtns[i].addEventListener("click", function (e) {
         const listItem = e.target.closest(".list-item");
         if(listItem){
            listItem.remove();
         }
      });
   }
}