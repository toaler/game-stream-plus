class LineScore {

    constructor(json) {
        this.json = json;
    }

    currentPeriod() {
        return this.json.currentPeriod;
    }

    currentPeriodOrdinal() {
        return this.json.currentPeriodOrdinal;
    }

    currentPeriodTimeRemaining() {
        return this.json.currentPeriodTimeRemaining;
    }

    hasShootout() {
        return this.json.hasShootout;
    }

    powerPlayStrength() {
        return this.json.powerPlayStrength;
    }

}

export default LineScore;