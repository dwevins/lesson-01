export default class Counter {
  constructor(parentElement) {
    const currentComponent = this;

    this.elements = {
      upBtn: parentElement.querySelector('.btn--up'),
      dnBtn: parentElement.querySelector('.btn--down'),
      count: parentElement.querySelector('.counter__count'),
      charInfo: parentElement.querySelector('.character-info'),
    }

    this.data {
      number: 1,
    };

    upClick() {
      this.data.number += 1;
      this.update();
    },

    dnClick() {
      this.data.number -= 1;
      this.update();
    },

    this.elements.upBtn.addEventListener('click', this.actions.upClick.bind(currentComponent));
    this.elements.dnBtn.addEventListener('click', this.actions.dnClick.bind(currentComponent));
  }
}
