    class Day {


        // Constructor method is called when a new instance is created
        constructor(date, totalItems, totalEvents, totalGames, totalMatches) {
            this._date = date;
            this._totalItems = totalItems;
            this._totalEvents = totalEvents;
            this._totalGames = totalGames;
            this._totalMatches = totalMatches;
        }

        get date() {
            return this._date;
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

    module.exports = Day;