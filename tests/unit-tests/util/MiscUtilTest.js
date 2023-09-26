// import * as fs from "fs";
import MiscUtil from "../../../src/util/MiscUtil";
import expect from "expect";

test('nvl test', () => {
    expect(MiscUtil.nvl('defined', "default")).toBe('defined');
    expect(MiscUtil.nvl(undefined, "default")).toBe('default');
});