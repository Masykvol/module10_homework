const BTN = document.querySelector('.btn')
let WidthWindow = document.documentElement.clientWidth
let heightWindow = document.documentElement.clientHeight 

BTN.addEventListener('click', () => {
    alert( `Ваши значения, ${WidthWindow},${heightWindow}` )
  }); 