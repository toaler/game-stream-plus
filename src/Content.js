class Content {
    // Constructor method is called when a new instance is created
    constructor(link) {
        this._link = link;
    }

    get link() {
        return this._link;
    }
}

module.exports = Content;