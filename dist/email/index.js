"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Glue = exports.Email = void 0;
var __1 = require("..");
exports.Glue = __1.Glue;
var axios_1 = __importStar(require("axios"));
var compile = require('es6-template-strings');
var queue_1 = require("../queue");
var Email = (function () {
    function Email(glue) {
        this.glue = glue;
    }
    Email.prototype.send = function (emailBody) {
        return __awaiter(this, void 0, void 0, function () {
            var isRowString, template, glue, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        isRowString = false;
                        if (typeof emailBody.mailOptions.html !== 'object') {
                            isRowString = true;
                        }
                        return [4, this.generate(emailBody.mailOptions.html, emailBody.mailOptions.data, isRowString)];
                    case 1:
                        template = _a.sent();
                        delete emailBody.mailOptions.data;
                        emailBody.mailOptions.html = template;
                        glue = new queue_1.Queue(this.glue);
                        return [4, glue.add({
                                value: "email",
                                data: __assign({}, emailBody)
                            })];
                    case 2:
                        _a.sent();
                        return [2, { status: true, message: "ok" }];
                    case 3:
                        e_1 = _a.sent();
                        if ((0, axios_1.isAxiosError)(e_1)) {
                            return [2, { status: false, message: e_1.message }];
                        }
                        return [2, { status: false, message: "Something went wrong" }];
                    case 4: return [2];
                }
            });
        });
    };
    Email.prototype.generate = function (html, data, isRowString) {
        return __awaiter(this, void 0, void 0, function () {
            var compiledHTML, url, res, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        compiledHTML = '';
                        if (!isRowString) return [3, 1];
                        compiledHTML = compile(html, data);
                        return [3, 4];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        url = html.path;
                        return [4, axios_1["default"].get(url)];
                    case 2:
                        res = _a.sent();
                        compiledHTML = compile(res.data, data);
                        return [3, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log("Download HTML file error > ", e_2.message);
                        compiledHTML = 'Error in HTML template!';
                        return [3, 4];
                    case 4: return [2, compiledHTML];
                }
            });
        });
    };
    return Email;
}());
exports.Email = Email;
//# sourceMappingURL=index.js.map