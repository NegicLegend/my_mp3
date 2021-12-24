(function() {
   function responsive() {
      const XWidth = document.getElementById('x').offsetWidth;
      const YHeight = document.getElementById('y').offsetHeight;
      var a = 0;
      if(XWidth >= YHeight) {
         if(XWidth >= 1800) {
            a = 40;
         }else if(XWidth >= 1100 && XWidth < 1800) {
            if(YHeight >= 1000) {
               a = 30;
            }else {
               a = 20;
            }
         }else if(YHeight >= 550 && YHeight < 1000) {
            a = 20;
         }else if(YHeight >= 310 && YHeight < 550) {
            a = 20;
         }else if(YHeight < 310) {
            a = 15;
         }
      }else {
         if(XWidth >= 850 && XWidth < 1100) {
            a = 40;
         }else if(XWidth >= 550 && XWidth < 850) {
            a = 20;
         }else if(XWidth >= 310 && XWidth < 550) {
            a = 20;
         }else if(XWidth < 310) {
            a = 15;
         }
      }
      return a;
   }
   responsive()

   const audio = document.getElementById('audio');
   audio.volume = 1;

   const moreVolume = document.querySelector('.volume-increase');
   const lessVolume = document.querySelector('.volume-decrease');
   const volumeRange = document.querySelector('.volume-range');
   const number = document.querySelector('.volume-number');

   moreVolume.addEventListener('click', () => {
      var promise = new Promise(
         function(resolve, reject) {
            resolve()
         }
      );

      promise
         .then(function() {
            if(audio.volume < 1) {
               audio.volume = audio.volume + 0.2;
            }else {
               audio.volume = 1;
            }
         })
         .then(function() {
            number.innerHTML = Number.parseInt(audio.volume * 100);
            volumeRange.style.height = audio.volume * responsive() * 5 + responsive() + 'px';
         })
         .catch(function() {})
   })

   lessVolume.addEventListener('click', () => {
      var promise = new Promise(
         function(resolve, reject) {
            resolve()
         }
      );

      promise
         .then(function() {
            if(audio.volume > 0) {
               audio.volume = audio.volume - 0.2;
            }else if(audio.volume == 0.2) {
               audio.volume = 0;
            }else {
               audio.volume = 0;
            }
         })
         .then(function() {
            if(audio.volume < 0.2) {
               number.innerHTML = 0
               volumeRange.style.height = 20 + 'px';
            }else {
               number.innerHTML = Number.parseInt(audio.volume * 100);
               volumeRange.style.height = audio.volume * responsive() * 5 + responsive() + 'px';
            }
         })
         .catch(function() {})
   })
})()