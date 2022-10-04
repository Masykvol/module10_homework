
let chat = document.querySelector("#divMessages")
let input = document.querySelector("#input")
let btnSubmit = document.querySelector("#btnSend")
const geoBtn = document.querySelector('.btn-geo');
const status = document.querySelector('#status');
const mapLink = document.querySelector('#map');


const webSocket = new WebSocket('wss://echo-ws-service.herokuapp.com');

btnSubmit.addEventListener('click', () => {
   var inp = document.querySelector('#input').value;
   chat.innerHTML += '<div class="me-send">' + inp +'</div>'
})



webSocket.onmessage = function (e) {
   const data = JSON.parse(e.data);
   chat.innerHTML += '<div class="eho-send">' + data.message + '</div>'
};


btnSubmit.addEventListener("click", () => {
   message = input.value;
   webSocket.send(JSON.stringify({
      'message': message
   }));

   input.value = '';
})


const error = () => {
   textContent = 'Невозможно получить ваше местоположение';
}


const success = (position) => {
   console.log('position', position);
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;

   mapLink.textContent = 'Готово';
   mapLink.href = `https://www.openstreetmap.org/#map=14/${latitude}/${longitude}`;
   mapLink.textContent = 'Ссылка на карту';
   mapLink.textContent = 'Готово';
}

geoBtn.addEventListener('click', () => {
   mapLink.href = '';
   mapLink.textContent = '';

   if (!navigator.geolocation) {
      textContent = 'Geolocation не поддерживается вашим браузером';
   } else {

      status.textContent = 'Определение местоположения…';
      navigator.geolocation.getCurrentPosition(success, error);
   }
});