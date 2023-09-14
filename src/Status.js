class Status {
    // Constructor method is called when a new instance is created
    constructor(abstractGameState, codedGameState, detailedState, statusCode, startTimeTBD) {
        this._abstractGameState = abstractGameState;
        this._codedGameState = codedGameState;
        this._detailedState = detailedState;
        this._statusCode = statusCode;
        this._startTimeTBD = startTimeTBD;
    }

    get abstractGameState() {
        return this._abstractGameState;
    }

    get codedGameState() {
        return this._codedGameState;
    }

    get detailedState() {
        return this._detailedState;
    }

    get statusCode() {
        return this._statusCode;
    }

    get startTimeTBD() {
        return this._startTimeTBD;
    }
}

module.exports = Status;