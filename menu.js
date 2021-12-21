(function () {
   const icons = document.querySelectorAll('.menu-item');
   var menu = document.querySelector('.menu');
   for (var i = 0; i < icons.length; i++) {
      (function (i) {
         icons[i].addEventListener('mouseover', function () {
            if (document.querySelector('.menu-name.active')) {
               document.querySelector('.menu-name.active').classList.remove('active');
            }
            const names = document.querySelectorAll('.menu-name');
            names[i].classList.add('active');
         }, false);
      })(i);
   }

   menu.addEventListener('mouseout', function () {
      if (document.querySelector('.menu-name.active')) {
         document.querySelector('.menu-name.active').classList.remove('active');
      }
   })
})()