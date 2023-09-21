class LeagueRecord {
    // Constructor method is called when a new instance is created
    constructor(wins,  losses, ot, type) {
        this._wins = wins;
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
}

export default LeagueRecord;