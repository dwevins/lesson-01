export default class Character {
  constructor(charInfo) {
    this.element = document.createElement('div');
    this.data = {
      charInfo,
    };

    this.element.innerHTML = `
      <h2>
      ${this.data.characterInfo.name}
        <button>Spoiler</button>
        <span class="fa-stack fa-lg">
          <i class="fa fa-heartbeat fa-stack-1x"></i>
          <i class="fa fa-ban fa-stack-2x is-dead"></i>
        </span>
      </h2>
      <ul class="list"></ul>`;

    this.showAliases();
  }

  showAliases() {
    const list = this.element.querySelector('.list');
    for (let i = 0; i < this.data.character.aliases.length; i++) {
      const listItem = document.createElement('li');
      listItem.innerText = `AKA ${this.data.character.aliases[i]}`;
      list.appendChild(listItem);
    }
  }
}
