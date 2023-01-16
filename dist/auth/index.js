"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Auth = void 0;
var axios_1 = __importDefault(require("axios"));
var IAuthProviderEnum_1 = __importDefault(require("./interfaces/IAuthProviderEnum"));
var Auth = (function () {
    function Auth(AUTH_BASE_URL) {
        this.authBaseUrl = "";
        this.authToken = "";
        this.authBaseUrl = AUTH_BASE_URL;
    }
    Auth.prototype.loginWithEmailPassword = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, axios_1["default"].post("".concat(this.authBaseUrl, "/authentication/signin"), {
                                email: email,
                                password: password
                            })];
                    case 1:
                        data = (_a.sent()).data;
                        this.setAuthToken(data.data.token);
                        return [2, data.data];
                    case 2:
                        e_1 = _a.sent();
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    Auth.prototype.socialLogin = function (provider) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                window.onmessage = function (event) {
                    if (event.data) {
                        _this.setAuthToken(event.data);
                    }
                };
                window.open("".concat(this.authBaseUrl, "/authentication/signin/").concat(provider), "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
                return [2, ""];
            });
        });
    };
    Auth.prototype.login = function (authObject) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!authObject.provider) return [3, 3];
                        _a = authObject.provider;
                        switch (_a) {
                            case IAuthProviderEnum_1["default"].google: return [3, 1];
                            case IAuthProviderEnum_1["default"].github: return [3, 1];
                            case IAuthProviderEnum_1["default"].microsoft: return [3, 1];
                        }
                        return [3, 3];
                    case 1: return [4, this.socialLogin(authObject.provider)];
                    case 2: return [2, _b.sent()];
                    case 3:
                        if (!(authObject.email && authObject.password)) return [3, 5];
                        return [4, this.loginWithEmailPassword(authObject.email, authObject.password)];
                    case 4: return [2, _b.sent()];
                    case 5: return [2];
                }
            });
        });
    };
    Auth.prototype.setAuthToken = function (token) {
        this.authToken = token;
        return this.authToken;
    };
    Auth.prototype.getAuthToken = function () {
        return this.authToken;
    };
    Auth.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authToken) return [3, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, axios_1["default"].post("".concat(this.authBaseUrl, "/authentication/me"), {}, {
                                headers: {
                                    "x-hasura-user-token": this.authToken
                                }
                            })];
                    case 2:
                        data = (_a.sent()).data;
                        this.setAuthToken(data.data.token);
                        return [2, data.data];
                    case 3:
                        e_2 = _a.sent();
                        return [3, 4];
                    case 4: return [2, null];
                }
            });
        });
    };
    Auth.prototype.isLoggedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getUser()];
                    case 1:
                        if (_a.sent()) {
                            return [2, true];
                        }
                        return [2, false];
                }
            });
        });
    };
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=index.js.map