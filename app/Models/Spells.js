export default class Spells {
    constructor(data) {
        this.name = data.name || "nameless"
        this.description = data.description || "no description"
        this.level = data.level || "level req. unknown"
        this.range = data.range || "range unknown"
        this.duration = data.duration || "duration unknown"
        this.components = data.components || "components unknown"
        this.user = data.user || "no user data"
    }

    get Template() {
        return `<div class="card card-comp">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <img src="" class="card-img-top" alt="...">
                <div><h3><span>Range:${this.range}</span>|||<span>Duration:${this.duration}</span></h3></div>
                    <p class="card-text">${this.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
            </div>`
    }
}