export default function (app) {
  const upBtn = app.querySelector('.btn--up');
  const dnBtn = app.querySelector('.btn--down');
  const count = app.querySelector('.counter__count');
  const charInfo = app.querySelector('.character-info');

  let number = 1;

  function update() {
    count.innerText = number;
  }

  function upClick() {
    number += 1;
    update();
  }

  function dnClick() {
    number -= 1;
    update();
  }

  upBtn.addEventListener('click', upClick);
  dnBtn.addEventListener('click', dnClick);

  const later = fetch('https://swapi.co/api/people/1');
  const evenLater = later.then((res) => res.json());
  evenLater.then((data) => {
    console.log(data);

    charInfo.innerHTML = `
    <h2>${data.name}</h2>
    `;
  });
}
