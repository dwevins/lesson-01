export default class Counter {

  constructor(parentElement) {
    const currentComponent = this;

    this.elements = {
      upBtn: parentElement.querySelector('.btn--up'),
      dnBtn: parentElement.querySelector('.btn--down'),
      count: parentElement.querySelector('.counter__count'),
      charInfo: parentElement.querySelector('.character-info'),
    };

    this.data = {
      number: 1,
    };

    this.elements.upBtn.addEventListener('click', this.upClick.bind(currentComponent));
    this.elements.dnBtn.addEventListener('click', this.dnClick.bind(currentComponent));
  }

  update() {
    this.elements.count.innerText = this.data.number;
  }

  upClick() {
    this.data.number += 1;
    this.update();
  }

  dnClick() {
    this.data.number -= 1;
    this.update();
  }
}
