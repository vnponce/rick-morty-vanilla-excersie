import API from "./api.js";

const api = new API();

const $characterContainer = document.querySelector('#character-container')
// const characterTemplate = `
//     <article class="character">
//         <div class="character-grid">
//             <h2>Rick Sanchez</h2>
//             <img src="./static/images/sanchez@2x.png" alt="">
//         </div>
//     </article>
// `

class Character {
  constructor({ name, image }) {
    this.name = name;
    this.img = image;
    this.render();
  }
  build() {
    return `
      <article class="character">
        <div class="character-grid">
          <img class="character-image" src="${this.img}" alt="">
          <h2 class="character-name">${this.name}</h2>
          <div class="character-labels">
            <h3 class="character-label">Género: male</h3>
            <h3 class="character-label">Especie: human</h3>
            <h3 class="character-label">Estatus: live</h3>          
          </div>
        </div>
      </article>
    `
  }
  render() {
    $characterContainer.innerHTML = this.build();
  }
}



async function initApp(initCharacterId) {
  const characterData  = await api.getCharacter(initCharacterId);
  console.log(characterData);
  const rick = new Character(characterData);
}
// initApp(1)
// rick.render();







