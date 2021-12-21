function changeSize() {
   const dashBoard = document.querySelector('#dashY');
   const playList = document.querySelector('.playlist');
   playList.style.marginTop = dashBoard.clientHeight + 'px';

   const thumb = document.querySelectorAll('.thumb');
   for(var i = 0; i < thumb.length; i++) {
      thumb[i].style.width = thumb[i].offsetHeight + 'px';
   }
}

setTimeout(function() {
   changeSize();
   var thumbControl = setInterval(function() {
      const thumb = document.querySelectorAll('.thumb');
      if(thumb[1].offsetWidth > 0) {
         clearInterval(thumbControl);
      }else {
         for(var i = 0; i < thumb.length; i++) {
            thumb[i].style.width = thumb[i].offsetHeight + 'px';
         }
      }
   }, 100);
}, 1000)