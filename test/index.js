const tap = require("tap");
const uniqId = require("./../index");

// Test for wished length
tap.equal(uniqId().length, 10);
tap.equal(uniqId(8).length, 8);
tap.equal(uniqId(12).length, 12);

// Test for expected errors
// Todo: Fix testing for errors
//tap.throws(uniqId(5));
//tap.throws(uniqId(20));

// Test that uniqIds are not equal when fired very frequently
for (n = 0; n < 100; n++) {
    tap.notEqual(uniqId(), uniqId());
}