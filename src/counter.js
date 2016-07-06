export default class Counter {
  constructor() {
    const currentComponent = this;
    this.elements.upBtn.addEventListener('click', this.actions.upClick.bind(currentComponent));
    this.elements.dnBtn.addEventListener('click', this.actions.dnClick.bind(currentComponent));
  }
}
