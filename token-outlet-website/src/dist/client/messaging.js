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
        while (_) try {
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
import { attachPostMessageListener, logger, removePostMessageListener } from "../utils";
export var MessageAction;
(function (MessageAction) {
    MessageAction["COOKIE_CHECK"] = "cookie-check";
    MessageAction["MAGIC_URL"] = "magic-url";
    MessageAction["GET_ISSUER_TOKENS"] = "get-issuer-tokens";
    MessageAction["GET_PROOF"] = "get-proof";
})(MessageAction || (MessageAction = {}));
export var MessageResponseAction;
(function (MessageResponseAction) {
    MessageResponseAction["COOKIE_CHECK"] = "cookie-check";
    MessageResponseAction["ISSUER_TOKENS"] = "issuer-tokens";
    MessageResponseAction["PROOF"] = "proof";
    MessageResponseAction["ERROR"] = "error";
    MessageResponseAction["SHOW_FRAME"] = "show-frame";
})(MessageResponseAction || (MessageResponseAction = {}));
var Messaging = (function () {
    function Messaging() {
        this.iframeStorageSupport = null;
        this.requestQueue = {};
    }
    Messaging.prototype.sendMessage = function (request, forceTab) {
        if (forceTab === void 0) { forceTab = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(!forceTab && this.iframeStorageSupport === null)) return [3, 3];
                        if (!window.safari) return [3, 1];
                        this.iframeStorageSupport = false;
                        return [3, 3];
                    case 1:
                        _a = this;
                        return [4, this.thirdPartyCookieSupportCheck(request.origin)];
                    case 2:
                        _a.iframeStorageSupport = _b.sent();
                        _b.label = 3;
                    case 3:
                        logger(2, "Send request: ");
                        logger(2, request);
                        if (!forceTab && this.iframeStorageSupport) {
                            return [2, this.sendIframe(request)];
                        }
                        else {
                            return [2, this.sendPopup(request)];
                        }
                        return [2];
                }
            });
        });
    };
    Messaging.prototype.sendIframe = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = Messaging.getUniqueEventId();
            var url = _this.constructUrl(id, request);
            var iframe = _this.createIframe();
            _this.setResponseListener(id, request.origin, request.timeout, resolve, reject, function () {
                if (iframe === null || iframe === void 0 ? void 0 : iframe.parentNode)
                    iframe.parentNode.removeChild(iframe);
                var modal = _this.getModal();
                if (modal)
                    modal.style.display = "none";
            }, iframe);
            iframe.src = url;
        });
    };
    Messaging.prototype.sendPopup = function (request) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = Messaging.getUniqueEventId();
            var tabRef = null;
            _this.setResponseListener(id, request.origin, request.timeout, resolve, reject, function () {
                if (tabRef)
                    tabRef.close();
            });
            tabRef = _this.openTab(_this.constructUrl(id, request));
        });
    };
    Messaging.prototype.setResponseListener = function (id, origin, timeout, resolve, reject, cleanUpCallback, iframe) {
        var _this = this;
        if (iframe === void 0) { iframe = null; }
        var received = false;
        var timer = null;
        var listener = function (event) {
            var response = event.data;
            var requestUrl = new URL(origin);
            if (response.evtid === id) {
                if (requestUrl.origin === event.origin) {
                    logger(2, "event response received");
                    logger(2, event.data);
                    received = true;
                    if (response.evt === MessageResponseAction.ERROR) {
                        reject(response.errors);
                    }
                    else if (response.evt === MessageResponseAction.SHOW_FRAME) {
                        if (iframe) {
                            var modal = _this.getModal();
                            modal.style.display = "block";
                        }
                        return;
                    }
                    else {
                        resolve(event.data);
                    }
                    if (timer)
                        clearTimeout(timer);
                    afterResolveOrError();
                }
                else {
                    logger(2, "Does not match origin " + event.origin);
                }
            }
        };
        var afterResolveOrError = function () {
            removePostMessageListener(listener);
            if (!window.NEGOTIATOR_DEBUG)
                cleanUpCallback();
        };
        attachPostMessageListener(listener);
        if (timeout === undefined)
            timeout = 10000;
        if (timeout > 0)
            timer = setTimeout(function () {
                if (!received)
                    reject("Failed to receive response from window/iframe");
                afterResolveOrError();
            }, timeout);
    };
    Messaging.prototype.getModal = function () {
        var modal = document.getElementById("modal-tn");
        if (modal)
            return modal;
        modal = document.createElement('div');
        modal.id = "modal-tn";
        modal.className = "modal-tn";
        modal.style.display = "none";
        modal.innerHTML = "\n            <div class=\"modal-content-tn\">\n                <div class=\"modal-header-tn\">\n                    <span class=\"modal-close-tn\">&times;</span>\n                </div>\n                <div class=\"modal-body-tn\"></div>\n            </div>\n        ";
        document.body.appendChild(modal);
        modal.getElementsByClassName('modal-close-tn')[0].addEventListener('click', function () {
            if (modal) {
                modal.style.display = "none";
                var content = modal.querySelector('.modal-body-tn');
                if (content) {
                    content.innerHTML = "";
                }
            }
        });
        return modal;
    };
    Messaging.prototype.getCookieSupport = function (testOrigin) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.iframeStorageSupport === null)) return [3, 2];
                        _a = this;
                        return [4, this.thirdPartyCookieSupportCheck(testOrigin)];
                    case 1:
                        _a.iframeStorageSupport = _b.sent();
                        _b.label = 2;
                    case 2: return [2, this.iframeStorageSupport];
                }
            });
        });
    };
    Messaging.prototype.thirdPartyCookieSupportCheck = function (origin) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var id = Messaging.getUniqueEventId();
            var url = origin + '#action=' + MessageAction.COOKIE_CHECK + '&evtid=' + id;
            var iframe = _this.createIframe();
            _this.setResponseListener(id, origin, 10000, function (responseData) {
                resolve(!!responseData.thirdPartyCookies);
            }, function (err) {
                resolve(false);
            }, function () {
                if (iframe === null || iframe === void 0 ? void 0 : iframe.parentNode)
                    iframe.parentNode.removeChild(iframe);
            });
            iframe.src = url;
        });
    };
    Messaging.prototype.constructUrl = function (id, request) {
        var url = "".concat(request.origin, "#evtid=").concat(id, "&action=").concat(request.action);
        if (request.filter)
            url += "&filter=".concat(JSON.stringify(request.filter));
        if (request.token)
            url += "&token=".concat(JSON.stringify(request.token));
        if (request.urlParams)
            url += "&".concat(request.urlParams);
        return url;
    };
    Messaging.prototype.openTab = function (url) {
        return window.open(url, "win1", "left=0,top=0,width=320,height=320");
    };
    Messaging.prototype.createIframe = function (url) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('allow', "clipboard-read");
        var modal = this.getModal();
        modal.getElementsByClassName('modal-body-tn')[0].appendChild(iframe);
        if (url)
            iframe.src = url;
        return iframe;
    };
    Messaging.getUniqueEventId = function () {
        return new Date().getTime().toString();
    };
    return Messaging;
}());
export { Messaging };
//# sourceMappingURL=messaging.js.map