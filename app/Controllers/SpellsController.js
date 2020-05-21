import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _apiDraw() {
  let spells = store.State.apiSpells
  console.log(spells)
  let template = ''
  spells.forEach(name => {
    template += `<li class="action"><h6 onclick="app.SpellsController.getSpellDetails(${name})">${name}</h6></li>`
  });
  document.getElementById("spellList").innerHTML = template;
}

function _drawActiveSpell() {
  let spell = store.State.activeSpell
  if (spell) {
    document.getElementById("active-spell").innerHTML = spell.Template
  } else {
    document.getElementById("active-spell").innerHTML = ""
  }
}
//Public
export default class SpellsController {
  constructor() {
    store.subscribe("apiSpells", _apiDraw);
    store.subscribe("activeSpell", _drawActiveSpell)
  }
  getSpellDetails(name) {
    SpellsService.getSpellDetails(name);
  }
}
