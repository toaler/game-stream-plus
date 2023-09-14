// math.tests.js
const { add } = require('eventmanager');

test('add function adds two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
});