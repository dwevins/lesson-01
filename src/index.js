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

    update: function(){
      this.elements.count.innerText = this.data.number;
    },

    actions: {
      upClick: function() {
        this.data.number += 1;
        this.update();
      },

      dnClick: function() {
        this.data.number -= 1;
        this.update();
      },
    },

    setup: function() {
      this.elements.upBtn.addEventListener('click', this.actions.upClick);
      this.elements.dnBtn.addEventListener('click', this.actions.dnClick);
    }
  };

  elements.upBtn.addEventListener('click', upClick);
  elements.dnBtn.addEventListener('click', dnClick);

  const later = fetch('https://swapi.co/api/people/1');
  const evenLater = later.then((res) => res.json());
  evenLater.then((data) => {
    elements.charInfo.innerHTML = `
    <h2>${data.name}</h2>
    `;
  });
}
