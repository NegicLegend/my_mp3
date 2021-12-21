function responsive() {
   const XWidth = document.getElementById('x').offsetWidth;
   const YHeight = document.getElementById('y').offsetHeight;
   const responsive = document.getElementById('responsive');
   if(XWidth >= YHeight) {
      if(XWidth >= 1800) {
         responsive.href = './responsive/desktop.css';
      }else if(XWidth >= 1100 && XWidth < 1800) {
         if(YHeight >= 1000) {
            responsive.href = './responsive/big-tablet_X.css';
         }else {
            responsive.href = './responsive/laptop.css';
         }
      }else if(YHeight >= 550 && YHeight < 1000) {
         responsive.href = './responsive/tablet_X.css';
      }else if(YHeight >= 310 && YHeight < 550) {
         responsive.href = './responsive/phone_X.css'
      }else if(YHeight < 310) {
         responsive.href = './responsive/small-phone_X.css';
      }else {
         responsive.href = 'reponsive-size.css';
      }
   }else {
      if(XWidth >= 850 && XWidth < 1100) {
         responsive.href = './responsive/big-tablet_Y.css';
      }else if(XWidth >= 550 && XWidth < 850) {
         responsive.href = './responsive/tablet_Y.css';
      }else if(XWidth >= 310 && XWidth < 550) {
         responsive.href = './responsive/phone_Y.css';
      }else if(XWidth < 310) {
         responsive.href = './responsive/small-phone_Y.css'
      }else {
         responsive.href = 'reponsive-size.css';
      }
   }
}
responsive()