function changeTheme(selec) {
   const css = document.getElementById(selec.idCSS);
   const changeBtn = document.querySelector(selec.changeBtn);
   const dark = selec.darkTheme;
   const light = selec.lightTheme;
   changeBtn.onclick = function() {
      if(css.href.indexOf('dark') > -1) {
         css.href = light;
      }else if(css.href.indexOf('light') > -1) {
         css.href = dark;
      }else {
         console.error('Something must be wrong!')
      }
   }
   css.href = selec.defaultTheme;
}