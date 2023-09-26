import Schedule from "../state/Schedule.js";
import Day from "../state/Day.js";
import Team from "../state/Team.js";
import LeagueRecord from "../state/LeagueRecord.js";
import Venue from "../state/Venue.js";
import Content from "../state/Content.js";
import Game from "../state/Game.js";
import Status from "../state/Status.js";
import Broadcast from "../state/Broadcast.js";

class ScheduleSupplier {

    // Constructor method is called when a new instance is created
    constructor(jsonData) {
        this._jsonData = jsonData;
    }

    get() {
        const dates = new Set();

        this._jsonData.dates.forEach(function (day) {

            const g = new Set();

            day.games.forEach(function (game) {

                let broadcasts = new Set();
                console.log(game);

                if (game.broadcasts != null) {
                    game.broadcasts.forEach(function (b) {
                        broadcasts.add(new Broadcast(b.id, b.name, b.type, b.site, b.language))
                    });
                }

                g.add(
                    new Game(
                        game.gamePk,
                        game.link,
                        game.gameType,
                        game.season,
                        new Date(game.gameDate),
                        new Status(game.status.abstractGameState, game.status.codedGameState, game.status.detailedState, game.status.statusCode, game.status.startTimeTBD),
                        new Team(game.teams.home.team.id, game.teams.home.team.name, game.teams.home.team.link),
                        new Team(game.teams.away.team.id, game.teams.away.team.name, game.teams.away.team.link),
                        game.teams.home.score,
                        game.teams.away.score,
                        new LeagueRecord(game.teams.home.leagueRecord.wins, game.teams.home.leagueRecord.losses, game.teams.home.leagueRecord.ot, game.teams.home.leagueRecord.type), // TODO read game.teams.home.leagueRecord
                        new LeagueRecord(game.teams.away.leagueRecord.wins, game.teams.away.leagueRecord.losses, game.teams.away.leagueRecord.ot, game.teams.away.leagueRecord.type), // TODO read game.teams.home.leagueRecord
                        broadcasts,
                        new Venue(game.venue.name, game.venue.link),
                        new Content(game.content.link)));
            });

            dates.add(new Day(day.date, day.totalItems, day.totalEvents, day.totalGames, day.totalMatches, g));
        });

        return new Schedule(this._jsonData.copyright, this._jsonData.totalItems, this._jsonData.totalEvents,
            this._jsonData.totalGames, this._jsonData.totalMatches, dates);
    }
}

export default ScheduleSupplier;