const Schedule = require("../../src/state/Schedule");
const Day = require("../../src/state/Day");
const Game = require("../../src/state/Game");
const Status = require("../../src/state/Status");
const Venue = require("../../src/state/Venue");
const Content = require("../../src/state/Content");
const Team = require("../../src/state/Team");
const LeagueRecord = require("../../src/state/LeagueRecord");

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

    const days = jsonData.dates;
    const dates = new Set();

    days.forEach(function(day) {
        dates.add(new Day(day.date, day.totalItems, day.totalEvents, day.totalGames, day.totalMatches));

        day.games.forEach(function(game) {
            new Game(game.gamePk, game.link, game.gameType, game.season,
                new Status(game.status.abstractGameState, game.status.codedGameState, game.status.detailedState, game.status.statusCode, game.status.startTimeTBD),
                new Team(game.teams.home.team.id, game.teams.home.team.name, game.teams.home.team.link),
                new Team(game.teams.away.team.id, game.teams.away.team.name, game.teams.away.team.link),
                game.teams.home.score,
                game.teams.away.score,
                new LeagueRecord(game.teams.home.leagueRecord.wins, game.teams.home.leagueRecord.losses, game.teams.home.leagueRecord.ot, game.teams.home.leagueRecord.type), // TODO read game.teams.home.leagueRecord
                new LeagueRecord(game.teams.away.leagueRecord.wins, game.teams.away.leagueRecord.losses, game.teams.away.leagueRecord.ot, game.teams.away.leagueRecord.type), // TODO read game.teams.home.leagueRecord
                new Venue(game.venue.name, game.venue.link),
                new Content(game.content.link))
        });
    });

    dates.forEach(function(day) {
        expect(day.date.length).toBeGreaterThan(0);

        // TODO write more asserts to validate the nested data structures
    });
});