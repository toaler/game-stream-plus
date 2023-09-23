// import * as fs from "fs";
import TimeUtils from "../../../src/util/TimeUtils.js";
import expect from "expect";

test('Basic functional test', () => {
    expect(TimeUtils.formatDate(new Date(1978, 9, 1))).toBe('1978-10-01');
});