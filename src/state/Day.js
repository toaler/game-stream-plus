    class Day {
        #date;
        #totalItems;
        #totalEvents
        #totalGames;
        #totalMatches;
        #games;

        // Constructor method is called when a new instance is created
        constructor(date, totalItems, totalEvents, totalGames, totalMatches, games) {
            this.#date = date;
            this.#totalItems = totalItems;
            this.#totalEvents = totalEvents;
            this.#totalGames = totalGames;
            this.#totalMatches = totalMatches;
            this.#games = games;
        }

        get date() {
            return this.#date;
        }

        get totalItems() {
            return this.#totalItems;
        }

        get totalEvents() {
            return this.#totalEvents;
        }

        get totalGames() {
            return this.#totalGames;
        }

        get totalMatches() {
            return this.#totalMatches;
        }

        get games() {
            return this.#games;
        }
    }

    export default Day;