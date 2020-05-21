import store from "../store.js";
import Spells from "../Models/Spells.js"

//@ts-ignore
const _spellsApi = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api/spells",
    timeout: 3000
})
//@ts-ignore
const _sandboxApi = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api/Mack/spells",
    timeout: 15000
})



class SpellsService {
    constructor() {
        console.log("hello from service!")
        this.getApiSpells()
        this.getUserSpells()
    }

    setActiveSpell(name) {
        let spell = store.State.apiSpells.find(s => s.name == name)
        if (spell) {
            store.commit('activeSpell', spell)
        }
    }

    //instead of mapping, consider passing data to maintain name and Id

    getApiSpells() {
        _spellsApi.get()
            .then(res => {
                console.log("apiSpells", res)
                let spellNames = res.data.map(r => r.name)
                store.commit('apiSpells', spellNames)
            })
            .catch(e => console.error(e))
    }
    getSpellDetails(name) {
        _spellsApi.get(name)
            .then(res => {
                let spell = new Spells(res.data)
                store.commit('activeSpell', spell)
            })
    }
    getUserSpells() {
        _sandboxApi.get()
            .then(res => {
                let spells = res.data.data.map(s => new Spells(s))
                store.commit('mySpells', spells)
            })
            .catch(e => console.error(e))
    }
}

const service = new SpellsService();
export default service;
