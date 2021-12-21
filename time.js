(function () {
   const audio = document.querySelector('#audio');
   
   setTimeout(function() {
      const durationTimeText = document.querySelector('.time-duration')
      const duration = audio.duration;
      const durationHours = Math.floor(duration / 3600);
      const durationMinutes = Math.floor(duration / 60) % 60; 
      const b = duration - durationHours * 3600 - durationMinutes * 60;
      const durationSeconds = Math.floor(b);

      if(!isNaN(durationSeconds)){
         if(durationHours > 0) {
            if(durationMinutes > 9) {
               if(durationSeconds > 9) {
                  durationTimeText.innerHTML = `<p class="duration-time">${durationHours}:${durationMinutes}:${durationSeconds}</p>`;
               }else {
                  durationTimeText.innerHTML = `<p class="duration-time">${durationHours}:${durationMinutes}:0${durationSeconds}</p>`;
               }
            }else {
               if(durationSeconds > 9) {
                  durationTimeText.innerHTML = `<p class="duration-time">${durationHours}:0${durationMinutes}:${durationSeconds}</p>`;
               }else {
                  durationTimeText.innerHTML = `<p class="duration-time">${durationHours}:0${durationMinutes}:0${durationSeconds}</p>`;
               }
            }
         }else if(durationMinutes > 0) {
            if(durationSeconds < 10) {
               durationTimeText.innerHTML = `<p class="duration-time">${durationMinutes}:0${durationSeconds}</p>`;
            }else {
               durationTimeText.innerHTML = `<p class="duration-time">${durationMinutes}:${durationSeconds}</p>`;
            }
         }else {
            if(durationSeconds < 10) {
               durationTimeText.innerHTML = `<p class="duration-time">0${durationSeconds}</p>`;
            }else {
               durationTimeText.innerHTML = `<p class="duration-time">${durationSeconds}</p>`;
            }
         }
      }
   }, 1000)
})()