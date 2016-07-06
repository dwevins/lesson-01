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
      number: 583,
      character: null,
    };

    this.elements.upBtn.addEventListener('click', this.upClick.bind(currentComponent));
    this.elements.dnBtn.addEventListener('click', this.dnClick.bind(currentComponent));
  }

  update() {
    this.elements.count.innerText = this.data.number;

    if (this.data.isLoading) {
      this.elements.charInfo.innerHTML = '<span class="fa fa-spinner fa-spin fa-3x fa-fw"></span>';
    }

    if (this.data.character && this.data.character.name) {
      this.elements.charInfo.innerHTML = `<h2>${this.data.character.name}</h2>`;
    } else {
      this.elements.charInfo.innerHTML = '<h2>Character info not found</h2>';
    }
  }

  upClick() {
    this.data.number += 1;
    this.update();
    this.lookupCurrentCharacter();
  }

  dnClick() {
    this.data.number -= 1;
    this.update();
    this.lookupCurrentCharacter();
  }

  lookupCurrentCharacter() {
    this.data.isLoading = true;
    this.lookupCharacter(this.data.number);
  }

  lookupCharacter(characterID) {
    fetch(`https://jsonp.afeld.me/?url=https://anapioficeandfire.com/api/characters/${characterID}`)
      .then((res) => res.json())
      .then((character) => {
        this.data.character = character;
        this.update();
      });
  }
}
