const swipper = _ => {

    
const touchsurface = document.querySelectorAll(".swiper-slide")
touchsurface.forEach( slide => {
    slide.addEventListener("touchstart", startTouch, false);
    slide.addEventListener("touchmove", moveTouch, false);
})
// Swipe Left / Right
 let initialX = null;
 let initialY = null;

 function startTouch(e) {
   initialX = e.touches[0].clientX;
   initialY = e.touches[0].clientY;
 };

 function moveTouch(e) {
   if (initialX === null) {
     return;
   }

   if (initialY === null) {
     return;
   }

   let currentX = e.touches[0].clientX;
   let currentY = e.touches[0].clientY;

   let diffX = initialX - currentX;
   let diffY = initialY - currentY;

   if (Math.abs(diffX) > Math.abs(diffY)) {
     // sliding horizontally
     if (diffX > 300) {
       
       // swiped left
       console.log("dif",diffX);
     } if(diffX < -420) {
       // swiped right
        // if(Math.abs(diffX) > 420) {
        //     excluir(e.target.attributes.id.value)
        // }
        excluir(e.target.attributes.id.value)
       console.log("swiped right", e.target.attributes.id.value);

     }  
   }
}
}