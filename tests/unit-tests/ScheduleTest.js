const Schedule = require("../../src/Schedule");
const fs = require('fs');

test('Read JSON file synchronously', () => {
    const data = fs.readFileSync('tests/test-data/schedule.20211201.20211204.json', 'utf8');
    const jsonData = JSON.parse(data);

    const s = new Schedule(jsonData.copyright, jsonData.totalItems, jsonData.totalEvents,
                                  jsonData.totalGames, jsonData.totalMatches)

    expect(s.copyright.length).toBeGreaterThan(0);
    expect(s.totalItems).toBe(31);
    expect(s.totalEvents).toBe(0);
    expect(s.totalGames).toBe(31);
    expect(s.totalMatches).toBe(0);
});