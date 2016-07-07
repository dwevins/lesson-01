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
    } else if (this.data.character && this.data.character.name) {
      this.elements.charInfo.innerHTML = `
        <h2>
        ${this.data.character.name}
          <button>Spoiler</button>
          <span class="fa-stack fa-lg">
            <i class="fa fa-heartbeat fa-stack-1x"></i>
            <i class="fa fa-ban fa-stack-2x text-danger"></i>
          </span>
        </h2>
        <ul class="list"></ul>`;

      const list = this.elements.charInfo.querySelector('.list');

      const spoilerButton = this.elements.charInfo.querySelector('.button');

      const dead = this.elements.charInfo.querySelector('.fa-ban');
      dead.style.display = 'none';

      const spoilerStatus = this.charInfo.querySelector('.fa-stack');
      spoilerStatus.style.display = 'none';

      spoilerStatus.addEventListener('click', showSpoiler());

      for (let i = 0; i < this.data.character.aliases.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = `AKA ${this.data.character.aliases[i]}`;
        list.appendChild(listItem);
      }
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
    this.data.isLoading = false;
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
