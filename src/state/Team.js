class Team {

    // Constructor method is called when a new instance is created
    constructor(id, name, link) {
        this._id = id;
        this._name = name;
        this._link = link;
    }
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get link() {
        return this._link;
    }

}

module.exports = Team;