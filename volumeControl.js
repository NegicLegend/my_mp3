(function() {
   const audio = document.getElementById('audio');
   const volumeBtn = document.querySelector('.volume-btn');
   const volume = document.querySelector('.volume');
   audio.volume = 1;
   const volumes = document.querySelectorAll('.volume-control');
   for(var i = 0; i < volumes.length; i++) {
      (function(i) {
         volumes[i].addEventListener('click', function() {
            audio.volume = i * 2 / 10;
            document.querySelector('.volume-control.active').classList.remove('active');
            volumes[i].classList.add('active');
         })
      })(i)
   }
   var a = 0;
   document.querySelector('.escape-volume').addEventListener('click', function() {
      volume.style.opacity = 0;
      setTimeout(function() {
         volume.style.display = 'none';
      }, 200)
      volumeBtn.classList.remove('active');
      a = 0;
   })
   volumeBtn.addEventListener('click', function() {
      volume.style.display = 'flex';
      volume.style.opacity = 1;
      volumeBtn.classList.add('active');
      a++;
      if(a % 2 === 0 && a > 0) {
         volume.style.opacity = 0;
         setTimeout(function() {
            volume.style.display = 'none';
         }, 200)
         volumeBtn.classList.remove('active');
      }
   })
})()