export default function (app) {
  return {
    elements: {
      upBtn: app.querySelector('.btn--up'),
      dnBtn: app.querySelector('.btn--down'),
      count: app.querySelector('.counter__count'),
      charInfo: app.querySelector('.character-info'),
    },

    data: {
      number: 1,
    },

    actions: {
      upClick() {
        this.data.number += 1;
        this.update();
      },

      dnClick() {
        this.data.number -= 1;
        this.update();
      },
    },

    update() {
      this.elements.count.innerText = this.data.number;
    },

    setup() {
      const currentComponent = this;
      this.elements.upBtn.addEventListener('click', this.actions.upClick.bind(currentComponent));
      this.elements.dnBtn.addEventListener('click', this.actions.dnClick.bind(currentComponent));
    },
  };

  const later = fetch('https://swapi.co/api/people/1');
  const evenLater = later.then((res) => res.json());
  evenLater.then((data) => {
    elements.charInfo.innerHTML = `
    <h2>${data.name}</h2>
    `;
  });
}
