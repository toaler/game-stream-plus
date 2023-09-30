class Game {
    // Constructor method is called when a new instance is created
    constructor(gamePk, link, gameType, season, gameDate, status, homeTeam, awayTeam, homeScore, awayScore, homeRecord, awayRecord, broadcasts, venue, content, lineScore) {
        this._gamePk = gamePk;
        this._link = link;
        this._gameType = gameType;
        this._season = season;
        this._gameDate = gameDate;
        this._status = status;
        this._broadcasts = broadcasts;
        this._venue = venue;
        this._content = content;
        this._homeTeam = homeTeam;
        this._awayTeam = awayTeam;
        this._homeScore = homeScore;
        this._awayScore = awayScore;
        this._homeRecord = homeRecord;
        this._awayRecord = awayRecord;
        this._lineScore = lineScore;

    }

    get gamePk() {
        return this._gamePk;
    }

    get link() {
        return this._link;
    }

    get gameType() {
        return this._gameType;
    }

    get season() {
        return this._season;
    }

    get gameDate() {
        return this._gameDate;
    }

    get status() {
        return this._status;
    }

    get homeTeam() {
        return this._homeTeam;
    }

    get awayTeam() {
        return this._awayTeam;
    }

    get homeScore() {
        return this._homeScore;
    }

    get awayScore() {
        return this._awayScore;
    }

    get homeRecord() {
        return this._homeRecord;
    }

    get awayRecord() {
        return this._awayRecord;
    }

    get teams() {
        return this._teams;
    }

    get broadcasts() {
        return this._broadcasts;
    }

    get venue() {
        return this._venue;
    }

    get content() {
        return this._content;
    }

    get lineScore() {
        return this._lineScore;
    }
}

export default Game;