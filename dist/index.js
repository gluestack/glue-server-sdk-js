"use strict";
exports.__esModule = true;
exports.Glue = void 0;
var auth_1 = require("./auth");
var email_1 = require("./email");
var queue_1 = require("./queue");
var storage_1 = require("./storage");
var Glue = (function () {
    function Glue(_a) {
        var BASE_URL = _a.BASE_URL;
        this.auth = new auth_1.Auth(BASE_URL);
        this.email = new email_1.Email(BASE_URL);
        this.queue = new queue_1.Queue(BASE_URL);
        this.storage = new storage_1.Storage();
    }
    return Glue;
}());
exports.Glue = Glue;
//# sourceMappingURL=index.js.map