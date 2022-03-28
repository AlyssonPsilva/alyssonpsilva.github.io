const items= document.getElementsByClassName("portfolio-item-link")
const btns= document.querySelectorAll(".portfolio-btn");
let currentItem=0
let previousItem=currentItem-1

 btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          changeItem(i)
          
        });
      });
 function changeItem(value){
    if(value===0){
      previousItem=currentItem
      currentItem--
      if(currentItem<0) {
        currentItem=items.length-1
      }
    }else{
      previousItem=currentItem
      currentItem++
      if(currentItem>=items.length){
        currentItem=0
      }
    }
    items[previousItem].classList.add('disabled')
    items[currentItem].classList.remove('disabled')
 }

