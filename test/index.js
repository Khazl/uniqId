const tap = require("tap");
const uniqId = require("./../index");

tap.equal(uniqId().length, 10);
tap.equal(uniqId(8).length, 8);
tap.equal(uniqId(12).length, 12);

tap.notEqual(uniqId(20).length, 20);

for (n = 0; n < 100; n++) {
    tap.notEqual(uniqId(), uniqId());
}