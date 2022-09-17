let body = document.body;

for (let i = 0; i < 58; i++) {
  for (let j = 0; j < 3; j++) {
    let button = document.createElement('button');
    button.style.backgroundImage = `url(frames/frame_0${i > 9 ? i : '0' + i}.jpg)`;
    body.appendChild(button);
  }
}

let message = document.querySelector('.message');

window.scrollTo(0, 0);

setTimeout(() => {
  message.classList.add('hidden');
}, 1000);