"use strict";
exports.__esModule = true;
exports.Glue = void 0;
var auth_1 = require("./auth");
var email_1 = require("./email");
var queue_1 = require("./queue");
var storage_1 = require("./storage");
var functions_1 = require("./functions");
var Glue = (function () {
    function Glue(appBaseUrl) {
        if (appBaseUrl === void 0) { appBaseUrl = "http://localhost:9090"; }
        this.appBaseUrl = appBaseUrl;
        this.auth = new auth_1.Auth(this);
        this.email = new email_1.Email(this);
        this.queue = new queue_1.Queue(this);
        this.functions = new functions_1.Functions(this);
        this.storage = new storage_1.Storage(this);
    }
    return Glue;
}());
exports.Glue = Glue;
//# sourceMappingURL=index.js.map