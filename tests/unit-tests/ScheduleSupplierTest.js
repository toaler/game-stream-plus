const Schedule = require("../../src/state/Schedule");
const Day = require("../../src/state/Day");
const Game = require("../../src/state/Game");
const Status = require("../../src/state/Status");
const Venue = require("../../src/state/Venue");
const Content = require("../../src/state/Content");
const Team = require("../../src/state/Team");
const LeagueRecord = require("../../src/state/LeagueRecord");
const ScheduleSupplier = require("../../src/supplier/ScheduleSupplier");

const fs = require('fs');

test('Read JSON file synchronously', () => {
    const data = fs.readFileSync('tests/test-data/schedule.20211201.20211204.json', 'utf8');
    const jsonData = JSON.parse(data);

    const scheduleSupplier = new ScheduleSupplier(jsonData);

    const s = scheduleSupplier.get();


    expect(s.copyright.length).toBeGreaterThan(0);
    expect(s.totalItems).toBe(31);
    expect(s.totalEvents).toBe(0);
    expect(s.totalGames).toBe(31);
    expect(s.totalMatches).toBe(0);

    // TODO write more asserts to validate the nested data structures
});