// import * as fs from "fs";
import expect from "expect";
import LineScore from "../../../src/state/LineScore";
import fs from "fs";

test('LineScore Test', () => {
    const data = fs.readFileSync('tests/test-data/linescore.json', 'utf8');
    const jsonData = JSON.parse(data);

    const line = new LineScore(jsonData);
    expect(line.currentPeriod()).toBe(3);
    expect(line.currentPeriodOrdinal()).toBe("3rd");
    expect(line.currentPeriodTimeRemaining()).toBe("Final");
    expect(line.powerPlayStrength()).toBe("Even");
    expect(line.hasShootout()).toBe(false);

});