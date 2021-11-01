const wsUrl = 'wss://echo-ws-service.herokuapp.com/';
const btn = document.querySelector('.btn');
const geo = document.querySelector('.geo');
const inp = document.querySelector('input');
const chat = document.querySelector('.chat');
let websocket;
const success = (position) => {
  const {coords} = position;
  console.log(coords.latitude, coords.longitude);
  const link = `https://www.openstreetmap.org/#map=17/${coords.latitude}/${coords.longitude}`;
  window.open(link)
};

const error = () => {
  alert('Невозможно получить ваше местоположение')
}
geo.addEventListener('click', () => {
 navigator.geolocation.getCurrentPosition(success, error)
});

function writeToScreenOn(onMessage) {
  let pre = document.createElement('p');
  pre.classList.add('on_mess');
  pre.innerHTML = onMessage;
  chat.appendChild(pre);
}

function writeToScreenSand(sendMessage) {
  let pre = document.createElement('p');
  pre.classList.add('send_mess');
  pre.innerHTML = sendMessage;
  chat.appendChild(pre);
}

btn.addEventListener ('click', () => {
  websocket = new WebSocket (wsUrl);
  websocket.onopen = function (evt) {
    websocket.send(inp.value)
  }
  websocket.onmessage = function(evt) {
    writeToScreenOn(evt.data)
  }
  writeToScreenSand(inp.value);
})