const Schedule = require("../../src/Schedule");
const Day = require("../../src/Day");
const Game = require("../../src/Game");
const Status = require("../../src/Status");
const Venue = require("../../src/Venue");
const Content = require("../../src/Content");
const Team = require("../../src/Team");
const LeagueRecord = require("../../src/LeagueRecord");

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
            console.log(game);

            console.log(game.teams.home.team);

            new Game(game.gamePk, game.link, game.gameType, game.season,
                new Status(game.status.abstractGameState, game.status.codedGameState, game.status.detailedState, game.status.statusCode, game.status.startTimeTBD),
                new Team(game.teams.home.team.id, game.teams.home.team.name, game.teams.home.team.link),
                new Team(game.teams.away.team.id, game.teams.away.team.name, game.teams.away.team.link),
                game.teams.home.score,
                game.teams.away.score,
                new LeagueRecord(), // TODO read game.teams.home.leagueRecord
                new LeagueRecord(), // TODO read game.teams.away.leagueRecord
                new Venue(game.venue.name, game.venue.link),
                new Content(game.content.link))
        });
    });

    dates.forEach(function(day) {
        expect(day.date.length).toBeGreaterThan(0);
        console.log(day.date);

        // TODO write more asserts to validate the nested data structures
    });
});