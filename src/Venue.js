class Venue {

    // Constructor method is called when a new instance is created
    constructor(name, link) {
        this._name = name;
        this._link = link;
    }
    get name() {
        return this._name;
    }

    get link() {
        return this._link;
    }
}

module.exports = Venue;