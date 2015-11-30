module.exports = function teardown() {
    "use strict";
    if (typeof objects_draft === 'undefined')
        return "objects_draft does not exist!"
    else
        return JSON.stringify(objects_draft)
}
