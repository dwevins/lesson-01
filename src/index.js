export default function (app) {
  const elements = {
    upBtn: app.querySelector('.btn--up'),
    dnBtn: app.querySelector('.btn--down'),
    count: app.querySelector('.counter__count'),
    charInfo: app.querySelector('.character-info'),
  };

  let number = 1;

  function update() {
    elements.count.innerText = number;
  }

  function upClick() {
    number += 1;
    update();
  }

  function dnClick() {
    number -= 1;
    update();
  }

  elements.upBtn.addEventListener('click', upClick);
  elements.dnBtn.addEventListener('click', dnClick);

  const later = fetch('https://swapi.co/api/people/1');
  const evenLater = later.then((res) => res.json());
  evenLater.then((data) => {
    console.log(data);

    elements.charInfo.innerHTML = `
    <h2>${data.name}</h2>
    `;
  });
}
