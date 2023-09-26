class LeagueRecord {
    // Constructor method is called when a new instance is created
    constructor(wins,  losses, ot, type) {
        this._wins = wins !== undefined ? wins : 'Default Value';
        this._losses = losses;
        this._ot = ot;
        this._type = type;
    }

    get wins() {
        return this._wins;
    }

    get losses() {
        return this._losses;
    }

    get ot() {
        return this._ot;
    }

    get type() {
        return this._type;
    }

    toString() {
        return `(${this.wins} - ${this.losses} - ${this.ot})`;
    }
}

export default LeagueRecord;