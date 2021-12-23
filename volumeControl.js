(function() {
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
            volumeRange.style.height = audio.volume * 100 + 20 + 'px';
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
               volumeRange.style.height = audio.volume * 100 + 20 + 'px';
            }
         })
         .catch(function() {})
   })
})()