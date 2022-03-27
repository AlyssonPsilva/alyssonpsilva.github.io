// Debounce do Lodash
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.getElementsByClassName("pc-screen");
const items= document.getElementsByClassName("portfolio-item-link")
const btns= document.querySelectorAll(".portfolio-btn");
let currentItem=0
let previousItem=currentItem-1


function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    if((windowTop) > target[0].offsetTop) {
      target[0].classList.remove("inactive");
      target[0].classList.add("active");
      btns[0].classList.remove("disabled");
      btns[1].classList.remove("disabled");
      items[currentItem].classList.remove("disabled");

    }else {
      target[0].classList.remove("active");
      target[0].classList.add("inactive");
      btns[0].classList.add("disabled");
      btns[1].classList.add("disabled");
      items[currentItem].classList.add("disabled");
      currentItem=0

    }
  }

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

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}