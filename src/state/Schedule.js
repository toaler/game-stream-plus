    class Schedule {
        // Constructor method is called when a new instance is created
        constructor(copyright, totalItems, totalEvents, totalGames, totalMatches) {
            this._copyright = copyright;
            this._totalItems = totalItems;
            this._totalEvents = totalEvents;
            this._totalGames = totalGames;
            this._totalMatches = totalMatches;
        }

        get copyright() {
            return this._copyright;
        }

        get totalItems() {
            return this._totalItems;
        }

        get totalEvents() {
            return this._totalEvents;
        }

        get totalGames() {
            return this._totalGames;
        }

        get totalMatches() {
            return this._totalMatches;
        }
    }

    module.exports = Schedule;