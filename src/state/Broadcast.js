class Broadcast {
    constructor(id, name, type, site, language) {
        this._site = site;
        this._id = id;
        this._name = name;
        this._type = type;
        this._language = language;
    }

    get site() {
        return this._site;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get language() {
        return this._language;
    }

    toString() {
        return `${this.name} (${this.type}) (${this.language}) (${this.site})`;
    }
}

export default Broadcast;