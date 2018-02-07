const addItem = document.querySelector(".addBtn");
const list = document.querySelector(".list");

addItem.addEventListener("click", function(){
    const input = document.querySelector(".input").value;
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    const para = document.createElement("p");
    para.textContent = input;
    para.classList.add("item-para");
    newItem.appendChild(para);
    const iconWrapper = document.createElement("span");
    iconWrapper.classList.add("icon-wrapper");
    newItem.appendChild(iconWrapper);
    const iconChecked = document.createElement("i");
    iconChecked.classList.add("ion-checkmark", "checked");
    iconWrapper.appendChild(iconChecked);
    const iconEdit = document.createElement("i");
    iconEdit.classList.add("ion-edit", "edit", "active-edit");
    iconWrapper.appendChild(iconEdit);
    const iconClose = document.createElement("i");
    iconClose.classList.add("ion-close", "close");
    iconWrapper.appendChild(iconClose);

    list.insertBefore(newItem, document.querySelector(".list .item:first-child"));

    deleteItem();
    editItem();
    checkedItem();
});

const deleteItem = () => {
   let itemsClose = document.querySelectorAll(".list .item .icon-wrapper .close");
   for (var i = 0; i < itemsClose.length; i++) {
      itemsClose[i].onclick = function(){
         this.parentNode.parentNode.remove();
      };
   }
}
deleteItem();

const editItem = () => {
   let items = document.querySelectorAll(".list .item .icon-wrapper .edit");
   for (var i = 0; i < items.length; i++) {
      items[i].onclick = function(e){
         let para = this.parentNode.previousSibling;
         const contentText = para.textContent;
         console.log(para.value);
         if(this.classList.contains("active-edit")){
            para.classList.toggle("editable");
            this.classList.toggle("edit-hover");
            para.contentEditable = "true";
            this.classList.contains("edit-hover") ? para.textContent = "" : para.textContent = "contentText";
            para.focus();

         }
         if(!this.classList.contains("edit-hover")) {
            para.contentEditable = "false";
         }
      };
   }
}
editItem();

const checkedItem = () => {
   let items = document.querySelectorAll(".list .item .icon-wrapper .checked");
   for (var i = 0; i < items.length; i++) {
      items[i].onclick = function(){
         this.parentNode.previousSibling.classList.toggle("deactivate");
         this.parentNode.previousSibling.classList.toggle("overline");
         this.parentNode.classList.toggle("deactivate");
         this.parentNode.children[1].classList.toggle("active-edit");
      };
   }
}
checkedItem();
