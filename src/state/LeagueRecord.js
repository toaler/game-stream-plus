import MiscUtil from "../util/MiscUtil.js";
class LeagueRecord {
    // Constructor method is called when a new instance is created
    constructor(wins,  losses, ot, type) {
        this._wins = MiscUtil.nvl(wins, 0);
        this._losses = MiscUtil.nvl(losses, 0);
        this._ot = MiscUtil.nvl(ot, 0);
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