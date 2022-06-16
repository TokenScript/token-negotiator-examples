/*! For license information please see 579.f4c2c475.js.LICENSE.txt */
(self.webpackChunktoken_outlet_website = self.webpackChunktoken_outlet_website || []).push([ [ 579 ], {
  96579: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      getWalletConnectProviderInstance: () => gt
    });
    var n = {};
    r.r(n), r.d(n, {
      decrypt: () => J,
      encrypt: () => Y,
      generateKey: () => $,
      verifyHmac: () => G
    });
    var i = r(55522);
    const o = [ "session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error" ];
    const a = [ "eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode" ];
    const s = {
      1: "mainnet",
      3: "ropsten",
      4: "rinkeby",
      5: "goerli",
      42: "kovan"
    };
    var u = r(11460);
    var h = r.n(u);
    var l = r(23087);
    function c(t) {
      return l.arrayToBuffer(new Uint8Array(t));
    }
    function f(t, e) {
      const r = l.removeHexPrefix(l.sanitizeHex(new (h())(t).toString(16)));
      return e ? r : l.addHexPrefix(r);
    }
    var d = r(91094);
    var p = r(1468);
    function m() {
      return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3));
    }
    r(25108);
    function v(t) {
      return l.sanitizeHex(t);
    }
    const g = m;
    function y() {
      return ((t, e) => {
        for (e = t = ""; t++ < 36; e += 51 * t & 52 ? (15 ^ t ? 8 ^ Math.random() * (20 ^ t ? 16 : 4) : 4).toString(16) : "-") ;
        return e;
      })();
    }
    function w(t, e) {
      let r;
      const n = function(t, e) {
        let r;
        const n = s[t];
        return n && (r = `https://${n}.infura.io/v3/${e}`), r;
      }(t, e.infuraId);
      return e.custom && e.custom[t] ? r = e.custom[t] : n && (r = n), r;
    }
    function _(t, e) {
      return l.isHexString(t, e);
    }
    function M(t) {
      return void 0 !== t.result;
    }
    function b(t) {
      return void 0 !== t.error;
    }
    function k(t) {
      return void 0 !== t.event;
    }
    function x(t) {
      t = (0, l.removeHexPrefix)(t.toLowerCase());
      const e = (0, l.removeHexPrefix)((0, d.keccak_256)(function(t) {
        return l.utf8ToBuffer(t);
      }(t)));
      let r = "";
      for (let n = 0; n < t.length; n++) parseInt(e[n], 16) > 7 ? r += t[n].toUpperCase() : r += t[n];
      return (0, l.addHexPrefix)(r);
    }
    function A(t) {
      return function(t) {
        return !(t && t.length);
      }(t) || _(t[0]) || (t[0] = function(t, e) {
        return l.utf8ToHex(t, !e);
      }(t[0])), t;
    }
    function E(t) {
      if (void 0 !== t.type && "0" !== t.type) return t;
      if (void 0 === t.from || !(t => !(!t || "0x" !== t.toLowerCase().substring(0, 2) || !/^(0x)?[0-9a-f]{40}$/i.test(t) || !/^(0x)?[0-9a-f]{40}$/.test(t) && !/^(0x)?[0-9A-F]{40}$/.test(t) && t !== x(t)))(t.from)) throw new Error("Transaction object must include a valid 'from' value.");
      function e(t) {
        let e = t;
        return ("number" == typeof t || "string" == typeof t && !function(t) {
          return "" === t || "string" == typeof t && "" === t.trim();
        }(t)) && (_(t) ? "string" == typeof t && (e = v(t)) : e = f(t)), "string" == typeof e && (e = function(t) {
          return l.removeHexLeadingZeros(l.addHexPrefix(t));
        }(e)), e;
      }
      const r = {
        from: v(t.from),
        to: void 0 === t.to ? "" : v(t.to),
        gasPrice: void 0 === t.gasPrice ? "" : e(t.gasPrice),
        gas: void 0 === t.gas ? void 0 === t.gasLimit ? "" : e(t.gasLimit) : e(t.gas),
        value: void 0 === t.value ? "" : e(t.value),
        nonce: void 0 === t.nonce ? "" : e(t.nonce),
        data: void 0 === t.data ? "" : v(t.data) || "0x"
      };
      const n = [ "gasPrice", "gas", "value", "nonce" ];
      return Object.keys(r).forEach((t => {
        !r[t].trim().length && n.includes(t) && delete r[t];
      })), r;
    }
    var S = r(17563);
    function T(t, e) {
      let r = C(t);
      return r = Object.assign(Object.assign({}, r), e), t = function(t) {
        return S.stringify(t);
      }(r), t;
    }
    function C(t) {
      return S.parse(t);
    }
    const R = class {
      constructor() {
        this._eventEmitters = [], "undefined" != typeof window && void 0 !== window.addEventListener && (window.addEventListener("online", (() => this.trigger("online"))), 
        window.addEventListener("offline", (() => this.trigger("offline"))));
      }
      on(t, e) {
        this._eventEmitters.push({
          event: t,
          callback: e
        });
      }
      trigger(t) {
        let e = [];
        t && (e = this._eventEmitters.filter((e => e.event === t))), e.forEach((t => {
          t.callback();
        }));
      }
    };
    const B = void 0 !== r.g.WebSocket ? r.g.WebSocket : r(57026);
    const L = class {
      constructor(t) {
        if (this.opts = t, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = t.protocol, this._version = t.version, 
        this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = t.subscriptions || [], 
        this._netMonitor = t.netMonitor || new R, !t.url || "string" != typeof t.url) throw new Error("Missing or invalid WebSocket url");
        this._url = t.url, this._netMonitor.on("online", (() => this._socketCreate()));
      }
      set readyState(t) {}
      get readyState() {
        return this._socket ? this._socket.readyState : -1;
      }
      set connecting(t) {}
      get connecting() {
        return 0 === this.readyState;
      }
      set connected(t) {}
      get connected() {
        return 1 === this.readyState;
      }
      set closing(t) {}
      get closing() {
        return 2 === this.readyState;
      }
      set closed(t) {}
      get closed() {
        return 3 === this.readyState;
      }
      open() {
        this._socketCreate();
      }
      close() {
        this._socketClose();
      }
      send(t, e, r) {
        if (!e || "string" != typeof e) throw new Error("Missing or invalid topic field");
        this._socketSend({
          topic: e,
          type: "pub",
          payload: t,
          silent: !!r
        });
      }
      subscribe(t) {
        this._socketSend({
          topic: t,
          type: "sub",
          payload: "",
          silent: !0
        });
      }
      on(t, e) {
        this._events.push({
          event: t,
          callback: e
        });
      }
      _socketCreate() {
        if (this._nextSocket) return;
        const t = function(t, e, r) {
          var n, o;
          const a = (t.startsWith("https") ? t.replace("https", "wss") : t.startsWith("http") ? t.replace("http", "ws") : t).split("?");
          const s = (0, i.isBrowser)() ? {
            protocol: e,
            version: r,
            env: "browser",
            host: (null === (n = (0, i.getLocation)()) || void 0 === n ? void 0 : n.host) || ""
          } : {
            protocol: e,
            version: r,
            env: (null === (o = (0, i.detectEnv)()) || void 0 === o ? void 0 : o.name) || ""
          };
          const u = T(function(t) {
            const e = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
            return void 0 !== e ? t.substr(e) : "";
          }(a[1] || ""), s);
          return a[0] + "?" + u;
        }(this._url, this._protocol, this._version);
        if (this._nextSocket = new B(t), !this._nextSocket) throw new Error("Failed to create socket");
        this._nextSocket.onmessage = t => this._socketReceive(t), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = t => this._socketError(t), 
        this._nextSocket.onclose = () => {
          setTimeout((() => {
            this._nextSocket = null, this._socketCreate();
          }), 1e3);
        };
      }
      _socketOpen() {
        this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue();
      }
      _socketClose() {
        this._socket && (this._socket.onclose = () => {}, this._socket.close());
      }
      _socketSend(t) {
        const e = JSON.stringify(t);
        this._socket && 1 === this._socket.readyState ? this._socket.send(e) : (this._setToQueue(t), this._socketCreate());
      }
      async _socketReceive(t) {
        let e;
        try {
          e = JSON.parse(t.data);
        } catch (r) {
          return;
        }
        if (this._socketSend({
          topic: e.topic,
          type: "ack",
          payload: "",
          silent: !0
        }), this._socket && 1 === this._socket.readyState) {
          const t = this._events.filter((t => "message" === t.event));
          t && t.length && t.forEach((t => t.callback(e)));
        }
      }
      _socketError(t) {
        const e = this._events.filter((t => "error" === t.event));
        e && e.length && e.forEach((e => e.callback(t)));
      }
      _queueSubscriptions() {
        this._subscriptions.forEach((t => this._queue.push({
          topic: t,
          type: "sub",
          payload: "",
          silent: !0
        }))), this._subscriptions = this.opts.subscriptions || [];
      }
      _setToQueue(t) {
        this._queue.push(t);
      }
      _pushQueue() {
        this._queue.forEach((t => this._socketSend(t))), this._queue = [];
      }
    };
    const P = "Session currently connected";
    const I = "Session currently disconnected";
    const O = "JSON RPC response format is invalid";
    const N = "User close QRCode Modal";
    const U = class {
      constructor() {
        this._eventEmitters = [];
      }
      subscribe(t) {
        this._eventEmitters.push(t);
      }
      unsubscribe(t) {
        this._eventEmitters = this._eventEmitters.filter((e => e.event !== t));
      }
      trigger(t) {
        let e = [];
        let r;
        r = function(t) {
          return void 0 !== t.method;
        }(t) ? t.method : M(t) || b(t) ? `response:${t.id}` : k(t) ? t.event : "", r && (e = this._eventEmitters.filter((t => t.event === r))), 
        e && e.length || function(t) {
          return o.includes(t) || t.startsWith("wc_");
        }(r) || k(r) || (e = this._eventEmitters.filter((t => "call_request" === t.event))), e.forEach((e => {
          if (b(t)) {
            const r = new Error(t.error.message);
            e.callback(r, null);
          } else e.callback(null, t);
        }));
      }
    };
    const j = class {
      constructor(t = "walletconnect") {
        this.storageId = t;
      }
      getSession() {
        let t = null;
        const e = (0, i.getLocal)(this.storageId);
        return e && function(t) {
          return void 0 !== t.bridge;
        }(e) && (t = e), t;
      }
      setSession(t) {
        return (0, i.setLocal)(this.storageId, t), t;
      }
      removeSession() {
        (0, i.removeLocal)(this.storageId);
      }
    };
    const q = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map((t => `https://${t}.bridge.walletconnect.org`));
    function K() {
      return q[function() {
        return Math.floor(Math.random() * q.length);
      }()];
    }
    const H = class {
      constructor(t) {
        if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, 
        this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], 
        this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new U, this._clientMeta = (0, i.getClientMeta)() || t.connectorOpts.clientMeta || null, 
        this._cryptoLib = t.cryptoLib, this._sessionStorage = t.sessionStorage || new j(t.connectorOpts.storageId), this._qrcodeModal = t.connectorOpts.qrcodeModal, 
        this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions, this._signingMethods = [ ...a, ...t.connectorOpts.signingMethods || [] ], 
        !t.connectorOpts.bridge && !t.connectorOpts.uri && !t.connectorOpts.session) throw new Error("Missing one of the required parameters: bridge / uri / session");
        t.connectorOpts.bridge && (this.bridge = function(t) {
          return function(t) {
            return "walletconnect.org" === function(t) {
              return function(t) {
                let e = t.indexOf("//") > -1 ? t.split("/")[2] : t.split("/")[0];
                return e = e.split(":")[0], e = e.split("?")[0], e;
              }(t).split(".").slice(-2).join(".");
            }(t);
          }(t) ? K() : t;
        }(t.connectorOpts.bridge)), t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
        const e = t.connectorOpts.session || this._getStorageSession();
        e && (this.session = e), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), 
        this._transport = t.transport || new L({
          protocol: this.protocol,
          version: this.version,
          url: this.bridge,
          subscriptions: [ this.clientId ]
        }), this._subscribeToInternalEvents(), this._initTransport(), t.connectorOpts.uri && this._subscribeToSessionRequest(), 
        t.pushServerOpts && this._registerPushServer(t.pushServerOpts);
      }
      set bridge(t) {
        t && (this._bridge = t);
      }
      get bridge() {
        return this._bridge;
      }
      set key(t) {
        if (!t) return;
        const e = function(t) {
          return l.hexToArray(t).buffer;
        }(t);
        this._key = e;
      }
      get key() {
        if (this._key) {
          return function(t, e) {
            return l.arrayToHex(new Uint8Array(t), !e);
          }(this._key, !0);
        }
        return "";
      }
      set clientId(t) {
        t && (this._clientId = t);
      }
      get clientId() {
        let t = this._clientId;
        return t || (t = this._clientId = y()), this._clientId;
      }
      set peerId(t) {
        t && (this._peerId = t);
      }
      get peerId() {
        return this._peerId;
      }
      set clientMeta(t) {}
      get clientMeta() {
        let t = this._clientMeta;
        return t || (t = this._clientMeta = (0, i.getClientMeta)()), t;
      }
      set peerMeta(t) {
        this._peerMeta = t;
      }
      get peerMeta() {
        return this._peerMeta;
      }
      set handshakeTopic(t) {
        t && (this._handshakeTopic = t);
      }
      get handshakeTopic() {
        return this._handshakeTopic;
      }
      set handshakeId(t) {
        t && (this._handshakeId = t);
      }
      get handshakeId() {
        return this._handshakeId;
      }
      get uri() {
        return this._formatUri();
      }
      set uri(t) {
        if (!t) return;
        const {handshakeTopic: e, bridge: r, key: n} = this._parseUri(t);
        this.handshakeTopic = e, this.bridge = r, this.key = n;
      }
      set chainId(t) {
        this._chainId = t;
      }
      get chainId() {
        return this._chainId;
      }
      set networkId(t) {
        this._networkId = t;
      }
      get networkId() {
        return this._networkId;
      }
      set accounts(t) {
        this._accounts = t;
      }
      get accounts() {
        return this._accounts;
      }
      set rpcUrl(t) {
        this._rpcUrl = t;
      }
      get rpcUrl() {
        return this._rpcUrl;
      }
      set connected(t) {}
      get connected() {
        return this._connected;
      }
      set pending(t) {}
      get pending() {
        return !!this._handshakeTopic;
      }
      get session() {
        return {
          connected: this.connected,
          accounts: this.accounts,
          chainId: this.chainId,
          bridge: this.bridge,
          key: this.key,
          clientId: this.clientId,
          clientMeta: this.clientMeta,
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          handshakeId: this.handshakeId,
          handshakeTopic: this.handshakeTopic
        };
      }
      set session(t) {
        t && (this._connected = t.connected, this.accounts = t.accounts, this.chainId = t.chainId, this.bridge = t.bridge, this.key = t.key, 
        this.clientId = t.clientId, this.clientMeta = t.clientMeta, this.peerId = t.peerId, this.peerMeta = t.peerMeta, this.handshakeId = t.handshakeId, 
        this.handshakeTopic = t.handshakeTopic);
      }
      on(t, e) {
        const r = {
          event: t,
          callback: e
        };
        this._eventManager.subscribe(r);
      }
      off(t) {
        this._eventManager.unsubscribe(t);
      }
      async createInstantRequest(t) {
        this._key = await this._generateKey();
        const e = this._formatRequest({
          method: "wc_instantRequest",
          params: [ {
            peerId: this.clientId,
            peerMeta: this.clientMeta,
            request: this._formatRequest(t)
          } ]
        });
        this.handshakeId = e.id, this.handshakeTopic = y(), this._eventManager.trigger({
          event: "display_uri",
          params: [ this.uri ]
        }), this.on("modal_closed", (() => {
          throw new Error(N);
        }));
        const r = () => {
          this.killSession();
        };
        try {
          const t = await this._sendCallRequest(e);
          return t && r(), t;
        } catch (n) {
          throw r(), n;
        }
      }
      async connect(t) {
        if (!this._qrcodeModal) throw new Error("QRCode Modal not provided");
        return this.connected ? {
          chainId: this.chainId,
          accounts: this.accounts
        } : (await this.createSession(t), new Promise((async (t, e) => {
          this.on("modal_closed", (() => e(new Error(N)))), this.on("connect", ((r, n) => {
            if (r) return e(r);
            t(n.params[0]);
          }));
        })));
      }
      async createSession(t) {
        if (this._connected) throw new Error(P);
        if (this.pending) return;
        this._key = await this._generateKey();
        const e = this._formatRequest({
          method: "wc_sessionRequest",
          params: [ {
            peerId: this.clientId,
            peerMeta: this.clientMeta,
            chainId: t && t.chainId ? t.chainId : null
          } ]
        });
        this.handshakeId = e.id, this.handshakeTopic = y(), this._sendSessionRequest(e, "Session update rejected", {
          topic: this.handshakeTopic
        }), this._eventManager.trigger({
          event: "display_uri",
          params: [ this.uri ]
        });
      }
      approveSession(t) {
        if (this._connected) throw new Error(P);
        this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
        const e = {
          approved: !0,
          chainId: this.chainId,
          networkId: this.networkId,
          accounts: this.accounts,
          rpcUrl: this.rpcUrl,
          peerId: this.clientId,
          peerMeta: this.clientMeta
        };
        const r = {
          id: this.handshakeId,
          jsonrpc: "2.0",
          result: e
        };
        this._sendResponse(r), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
          event: "connect",
          params: [ {
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            chainId: this.chainId,
            accounts: this.accounts
          } ]
        });
      }
      rejectSession(t) {
        if (this._connected) throw new Error(P);
        const e = t && t.message ? t.message : "Session Rejected";
        const r = this._formatResponse({
          id: this.handshakeId,
          error: {
            message: e
          }
        });
        this._sendResponse(r), this._connected = !1, this._eventManager.trigger({
          event: "disconnect",
          params: [ {
            message: e
          } ]
        }), this._removeStorageSession();
      }
      updateSession(t) {
        if (!this._connected) throw new Error(I);
        this.chainId = t.chainId, this.accounts = t.accounts, this.networkId = t.networkId || 0, this.rpcUrl = t.rpcUrl || "";
        const e = {
          approved: !0,
          chainId: this.chainId,
          networkId: this.networkId,
          accounts: this.accounts,
          rpcUrl: this.rpcUrl
        };
        const r = this._formatRequest({
          method: "wc_sessionUpdate",
          params: [ e ]
        });
        this._sendSessionRequest(r, "Session update rejected"), this._eventManager.trigger({
          event: "session_update",
          params: [ {
            chainId: this.chainId,
            accounts: this.accounts
          } ]
        }), this._manageStorageSession();
      }
      async killSession(t) {
        const e = t ? t.message : "Session Disconnected";
        const r = this._formatRequest({
          method: "wc_sessionUpdate",
          params: [ {
            approved: !1,
            chainId: null,
            networkId: null,
            accounts: null
          } ]
        });
        await this._sendRequest(r), this._handleSessionDisconnect(e);
      }
      async sendTransaction(t) {
        if (!this._connected) throw new Error(I);
        const e = E(t);
        const r = this._formatRequest({
          method: "eth_sendTransaction",
          params: [ e ]
        });
        return await this._sendCallRequest(r);
      }
      async signTransaction(t) {
        if (!this._connected) throw new Error(I);
        const e = E(t);
        const r = this._formatRequest({
          method: "eth_signTransaction",
          params: [ e ]
        });
        return await this._sendCallRequest(r);
      }
      async signMessage(t) {
        if (!this._connected) throw new Error(I);
        const e = this._formatRequest({
          method: "eth_sign",
          params: t
        });
        return await this._sendCallRequest(e);
      }
      async signPersonalMessage(t) {
        if (!this._connected) throw new Error(I);
        t = A(t);
        const e = this._formatRequest({
          method: "personal_sign",
          params: t
        });
        return await this._sendCallRequest(e);
      }
      async signTypedData(t) {
        if (!this._connected) throw new Error(I);
        const e = this._formatRequest({
          method: "eth_signTypedData",
          params: t
        });
        return await this._sendCallRequest(e);
      }
      async updateChain(t) {
        if (!this._connected) throw new Error("Session currently disconnected");
        const e = this._formatRequest({
          method: "wallet_updateChain",
          params: [ t ]
        });
        return await this._sendCallRequest(e);
      }
      unsafeSend(t, e) {
        return this._sendRequest(t, e), this._eventManager.trigger({
          event: "call_request_sent",
          params: [ {
            request: t,
            options: e
          } ]
        }), new Promise(((e, r) => {
          this._subscribeToResponse(t.id, ((t, n) => {
            if (t) r(t); else {
              if (!n) throw new Error("Missing JSON RPC response");
              e(n);
            }
          }));
        }));
      }
      async sendCustomRequest(t, e) {
        if (!this._connected) throw new Error(I);
        switch (t.method) {
         case "eth_accounts":
          return this.accounts;

         case "eth_chainId":
          return f(this.chainId);

         case "eth_sendTransaction":
         case "eth_signTransaction":
          t.params && (t.params[0] = E(t.params[0]));
          break;

         case "personal_sign":
          t.params && (t.params = A(t.params));
        }
        const r = this._formatRequest(t);
        return await this._sendCallRequest(r, e);
      }
      approveRequest(t) {
        if (!M(t)) throw new Error("JSON-RPC success response must include \"result\" field");
        {
          const e = this._formatResponse(t);
          this._sendResponse(e);
        }
      }
      rejectRequest(t) {
        if (!b(t)) throw new Error("JSON-RPC error response must include \"error\" field");
        {
          const e = this._formatResponse(t);
          this._sendResponse(e);
        }
      }
      transportClose() {
        this._transport.close();
      }
      async _sendRequest(t, e) {
        const r = this._formatRequest(t);
        const n = await this._encrypt(r);
        const i = void 0 !== (null == e ? void 0 : e.topic) ? e.topic : this.peerId;
        const o = JSON.stringify(n);
        const s = void 0 !== (null == e ? void 0 : e.forcePushNotification) ? !e.forcePushNotification : function(t) {
          return !!t.method.startsWith("wc_") || !a.includes(t.method);
        }(r);
        this._transport.send(o, i, s);
      }
      async _sendResponse(t) {
        const e = await this._encrypt(t);
        const r = this.peerId;
        const n = JSON.stringify(e);
        this._transport.send(n, r, !0);
      }
      async _sendSessionRequest(t, e, r) {
        this._sendRequest(t, r), this._subscribeToSessionResponse(t.id, e);
      }
      _sendCallRequest(t, e) {
        return this._sendRequest(t, e), this._eventManager.trigger({
          event: "call_request_sent",
          params: [ {
            request: t,
            options: e
          } ]
        }), this._subscribeToCallResponse(t.id);
      }
      _formatRequest(t) {
        if (void 0 === t.method) throw new Error("JSON RPC request must have valid \"method\" value");
        return {
          id: void 0 === t.id ? g() : t.id,
          jsonrpc: "2.0",
          method: t.method,
          params: void 0 === t.params ? [] : t.params
        };
      }
      _formatResponse(t) {
        if (void 0 === t.id) throw new Error("JSON RPC request must have valid \"id\" value");
        const e = {
          id: t.id,
          jsonrpc: "2.0"
        };
        if (b(t)) {
          const r = function(t) {
            const e = t.message || "Failed or Rejected Request";
            let r = -32e3;
            if (t && !t.code) switch (e) {
             case "Parse error":
              r = -32700;
              break;

             case "Invalid request":
              r = -32600;
              break;

             case "Method not found":
              r = -32601;
              break;

             case "Invalid params":
              r = -32602;
              break;

             case "Internal error":
              r = -32603;
              break;

             default:
              r = -32e3;
            }
            return {
              code: r,
              message: e
            };
          }(t.error);
          return Object.assign(Object.assign(Object.assign({}, e), t), {
            error: r
          });
        }
        if (M(t)) {
          return Object.assign(Object.assign({}, e), t);
        }
        throw new Error(O);
      }
      _handleSessionDisconnect(t) {
        const e = t || "Session Disconnected";
        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), (0, i.removeLocal)(i.mobileLinkChoiceKey)), this._connected && (this._connected = !1), 
        this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), 
        this._eventManager.trigger({
          event: "disconnect",
          params: [ {
            message: e
          } ]
        }), this._removeStorageSession(), this.transportClose();
      }
      _handleSessionResponse(t, e) {
        e && e.approved ? (this._connected ? (e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), 
        this._eventManager.trigger({
          event: "session_update",
          params: [ {
            chainId: this.chainId,
            accounts: this.accounts
          } ]
        })) : (this._connected = !0, e.chainId && (this.chainId = e.chainId), e.accounts && (this.accounts = e.accounts), e.peerId && !this.peerId && (this.peerId = e.peerId), 
        e.peerMeta && !this.peerMeta && (this.peerMeta = e.peerMeta), this._eventManager.trigger({
          event: "connect",
          params: [ {
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            chainId: this.chainId,
            accounts: this.accounts
          } ]
        })), this._manageStorageSession()) : this._handleSessionDisconnect(t);
      }
      async _handleIncomingMessages(t) {
        if (![ this.clientId, this.handshakeTopic ].includes(t.topic)) return;
        let e;
        try {
          e = JSON.parse(t.payload);
        } catch (n) {
          return;
        }
        const r = await this._decrypt(e);
        r && this._eventManager.trigger(r);
      }
      _subscribeToSessionRequest() {
        this._transport.subscribe(this.handshakeTopic);
      }
      _subscribeToResponse(t, e) {
        this.on(`response:${t}`, e);
      }
      _subscribeToSessionResponse(t, e) {
        this._subscribeToResponse(t, ((t, r) => {
          t ? this._handleSessionResponse(t.message) : r.result ? this._handleSessionResponse(e, r.result) : r.error && r.error.message ? this._handleSessionResponse(r.error.message) : this._handleSessionResponse(e);
        }));
      }
      _subscribeToCallResponse(t) {
        return new Promise(((e, r) => {
          this._subscribeToResponse(t, ((t, n) => {
            t ? r(t) : n.result ? e(n.result) : n.error && n.error.message ? r(new Error(n.error.message)) : r(new Error(O));
          }));
        }));
      }
      _subscribeToInternalEvents() {
        this.on("display_uri", (() => {
          this._qrcodeModal && this._qrcodeModal.open(this.uri, (() => {
            this._eventManager.trigger({
              event: "modal_closed",
              params: []
            });
          }), this._qrcodeModalOptions);
        })), this.on("connect", (() => {
          this._qrcodeModal && this._qrcodeModal.close();
        })), this.on("call_request_sent", ((t, e) => {
          const {request: r} = e.params[0];
          if ((0, i.isMobile)() && this._signingMethods.includes(r.method)) {
            const t = (0, i.getLocal)(i.mobileLinkChoiceKey);
            t && (window.location.href = t.href);
          }
        })), this.on("wc_sessionRequest", ((t, e) => {
          t && this._eventManager.trigger({
            event: "error",
            params: [ {
              code: "SESSION_REQUEST_ERROR",
              message: t.toString()
            } ]
          }), this.handshakeId = e.id, this.peerId = e.params[0].peerId, this.peerMeta = e.params[0].peerMeta;
          const r = Object.assign(Object.assign({}, e), {
            method: "session_request"
          });
          this._eventManager.trigger(r);
        })), this.on("wc_sessionUpdate", ((t, e) => {
          t && this._handleSessionResponse(t.message), this._handleSessionResponse("Session disconnected", e.params[0]);
        }));
      }
      _initTransport() {
        this._transport.on("message", (t => this._handleIncomingMessages(t))), this._transport.on("open", (() => this._eventManager.trigger({
          event: "transport_open",
          params: []
        }))), this._transport.on("close", (() => this._eventManager.trigger({
          event: "transport_close",
          params: []
        }))), this._transport.on("error", (() => this._eventManager.trigger({
          event: "transport_error",
          params: [ "Websocket connection failed" ]
        }))), this._transport.open();
      }
      _formatUri() {
        return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`;
      }
      _parseUri(t) {
        const e = function(t) {
          const e = t.indexOf(":");
          const r = -1 !== t.indexOf("?") ? t.indexOf("?") : void 0;
          const n = t.substring(0, e);
          const i = function(t) {
            const e = t.split("@");
            return {
              handshakeTopic: e[0],
              version: parseInt(e[1], 10)
            };
          }(t.substring(e + 1, r));
          const o = function(t) {
            const e = C(t);
            return {
              key: e.key || "",
              bridge: e.bridge || ""
            };
          }(void 0 !== r ? t.substr(r) : "");
          return Object.assign(Object.assign({
            protocol: n
          }, i), o);
        }(t);
        if (e.protocol === this.protocol) {
          if (!e.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
          const t = e.handshakeTopic;
          if (!e.bridge) throw Error("Invalid or missing bridge url parameter value");
          const r = decodeURIComponent(e.bridge);
          if (!e.key) throw Error("Invalid or missing key parameter value");
          return {
            handshakeTopic: t,
            bridge: r,
            key: e.key
          };
        }
        throw new Error("URI format is invalid");
      }
      async _generateKey() {
        if (this._cryptoLib) {
          return await this._cryptoLib.generateKey();
        }
        return null;
      }
      async _encrypt(t) {
        const e = this._key;
        if (this._cryptoLib && e) {
          return await this._cryptoLib.encrypt(t, e);
        }
        return null;
      }
      async _decrypt(t) {
        const e = this._key;
        if (this._cryptoLib && e) {
          return await this._cryptoLib.decrypt(t, e);
        }
        return null;
      }
      _getStorageSession() {
        let t = null;
        return this._sessionStorage && (t = this._sessionStorage.getSession()), t;
      }
      _setStorageSession() {
        this._sessionStorage && this._sessionStorage.setSession(this.session);
      }
      _removeStorageSession() {
        this._sessionStorage && this._sessionStorage.removeSession();
      }
      _manageStorageSession() {
        this._connected ? this._setStorageSession() : this._removeStorageSession();
      }
      _registerPushServer(t) {
        if (!t.url || "string" != typeof t.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
        if (!t.type || "string" != typeof t.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
        if (!t.token || "string" != typeof t.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
        const e = {
          bridge: this.bridge,
          topic: this.clientId,
          type: t.type,
          token: t.token,
          peerName: "",
          language: t.language || ""
        };
        this.on("connect", (async (r, n) => {
          if (r) throw r;
          if (t.peerMeta) {
            const t = n.params[0].peerMeta.name;
            e.peerName = t;
          }
          try {
            const r = await fetch(`${t.url}/new`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(e)
            });
            if (!(await r.json()).success) throw Error("Failed to register in Push Server");
          } catch (r) {
            throw Error("Failed to register in Push Server");
          }
        }));
      }
    };
    const F = "AES-CBC";
    const z = "HMAC";
    async function D(t, e = "AES-CBC") {
      return p.getSubtleCrypto().importKey("raw", t, function(t) {
        return t === F ? {
          length: 256,
          name: F
        } : {
          hash: {
            name: "SHA-256"
          },
          name: z
        };
      }(e), !0, function(t) {
        return t === F ? [ "encrypt", "decrypt" ] : [ "sign", "verify" ];
      }(e));
    }
    function Z(t, e, r) {
      return async function(t, e, r) {
        const n = p.getSubtleCrypto();
        const i = await D(e, F);
        const o = await n.encrypt({
          iv: t,
          name: F
        }, i, r);
        return new Uint8Array(o);
      }(t, e, r);
    }
    function W(t, e, r) {
      return async function(t, e, r) {
        const n = p.getSubtleCrypto();
        const i = await D(e, F);
        const o = await n.decrypt({
          iv: t,
          name: F
        }, i, r);
        return new Uint8Array(o);
      }(t, e, r);
    }
    async function V(t, e) {
      const r = await async function(t, e) {
        const r = p.getSubtleCrypto();
        const n = await D(t, z);
        const i = await r.sign({
          length: 256,
          name: z
        }, n, e);
        return new Uint8Array(i);
      }(t, e);
      return r;
    }
    async function $(t) {
      const e = function(t) {
        return p.getBrowerCrypto().getRandomValues(new Uint8Array(t));
      }((t || 256) / 8);
      return function(t) {
        return l.bufferToArray(t).buffer;
      }(l.arrayToBuffer(e));
    }
    async function G(t, e) {
      const r = l.hexToArray(t.data);
      const n = l.hexToArray(t.iv);
      const i = l.hexToArray(t.hmac);
      const o = l.arrayToHex(i, !1);
      const a = l.concatArrays(r, n);
      const s = await V(e, a);
      const u = l.arrayToHex(s, !1);
      return l.removeHexPrefix(o) === l.removeHexPrefix(u);
    }
    async function Y(t, e, r) {
      const n = l.bufferToArray(c(e));
      const i = r || await $(128);
      const o = l.bufferToArray(c(i));
      const a = l.arrayToHex(o, !1);
      const s = JSON.stringify(t);
      const u = l.utf8ToArray(s);
      const h = await Z(o, n, u);
      const f = l.arrayToHex(h, !1);
      const d = l.concatArrays(h, o);
      const p = await V(n, d);
      return {
        data: f,
        hmac: l.arrayToHex(p, !1),
        iv: a
      };
    }
    async function J(t, e) {
      const r = l.bufferToArray(c(e));
      if (!r) throw new Error("Missing key: required for decryption");
      if (!await G(t, r)) return null;
      const n = l.hexToArray(t.data);
      const i = l.hexToArray(t.iv);
      const o = await W(i, r, n);
      const a = l.arrayToUtf8(o);
      let s;
      try {
        s = JSON.parse(a);
      } catch (u) {
        return null;
      }
      return s;
    }
    const Q = class extends H {
      constructor(t, e) {
        super({
          cryptoLib: n,
          connectorOpts: t,
          pushServerOpts: e
        });
      }
    };
    var X = r(4337);
    var tt = r.n(X);
    var et = r(26729);
    var rt = r.n(et);
    var nt = r(59536);
    const it = (0, i.getFromWindow)("XMLHttpRequest") || nt.XMLHttpRequest;
    class ot extends(rt()){
      constructor(t) {
        super(), this.url = t;
      }
      formatError(t, e, r = -1) {
        return {
          error: {
            message: e,
            code: r
          },
          id: t.id,
          jsonrpc: t.jsonrpc
        };
      }
      send(t, e) {
        return new Promise((r => {
          if ("eth_subscribe" === t.method) {
            const e = this.formatError(t, "Subscriptions are not supported by this HTTP endpoint");
            return this.emit("error", e), r(e);
          }
          const n = new it;
          let i = !1;
          const o = (o, a) => {
            if (!i) if (n.abort(), i = !0, e) e(o, a); else {
              const {id: e, jsonrpc: n} = t;
              const i = o ? {
                id: e,
                jsonrpc: n,
                error: {
                  message: o.message,
                  code: o.code
                }
              } : {
                id: e,
                jsonrpc: n,
                result: a
              };
              this.emit("payload", i), r(i);
            }
          };
          n.open("POST", this.url, !0), n.setRequestHeader("Content-Type", "application/json"), n.timeout = 6e4, n.onerror = o, n.ontimeout = o, 
          n.onreadystatechange = () => {
            if (4 === n.readyState) try {
              const t = JSON.parse(n.responseText);
              o(t.error, t.result);
            } catch (t) {
              o(t);
            }
          }, n.send(JSON.stringify(t));
        }));
      }
    }
    const at = ot;
    const st = r(12906);
    const ut = r(41955);
    const ht = r(2110);
    const lt = r(28260);
    const ct = r(78747);
    const ft = r(3621);
    const dt = r(78191);
    const pt = class extends st {
      constructor(t) {
        if (super({
          pollingInterval: t.pollingInterval || 8e3
        }), this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModal = tt(), this.qrcodeModalOptions = void 0, 
        this.rpc = null, this.infuraId = "", this.http = null, this.isConnecting = !1, this.connected = !1, this.connectCallbacks = [], 
        this.accounts = [], this.chainId = 1, this.rpcUrl = "", this.enable = async () => {
          const t = await this.getWalletConnector();
          if (t) return this.start(), this.subscribeWalletConnector(), t.accounts;
          throw new Error("Failed to connect to WalleConnect");
        }, this.request = async t => this.send(t), this.send = async (t, e) => {
          if ("string" == typeof t) {
            const r = t;
            let n = e;
            return "personal_sign" === r && (n = A(n)), this.sendAsyncPromise(r, n);
          }
          if ("personal_sign" === (t = Object.assign({
            id: g(),
            jsonrpc: "2.0"
          }, t)).method && (t.params = A(t.params)), !e) return this.sendAsyncPromise(t.method, t.params);
          this.sendAsync(t, e);
        }, this.onConnect = t => {
          this.connectCallbacks.push(t);
        }, this.triggerConnect = t => {
          this.connectCallbacks && this.connectCallbacks.length && this.connectCallbacks.forEach((e => e(t)));
        }, this.bridge = t.connector ? t.connector.bridge : t.bridge || "https://bridge.walletconnect.org", this.qrcode = void 0 === t.qrcode || !1 !== t.qrcode, 
        this.qrcodeModal = t.qrcodeModal || this.qrcodeModal, this.qrcodeModalOptions = t.qrcodeModalOptions, this.wc = t.connector || new Q({
          bridge: this.bridge,
          qrcodeModal: this.qrcode ? this.qrcodeModal : void 0,
          qrcodeModalOptions: this.qrcodeModalOptions,
          storageId: null == t ? void 0 : t.storageId,
          signingMethods: null == t ? void 0 : t.signingMethods,
          clientMeta: null == t ? void 0 : t.clientMeta
        }), this.rpc = t.rpc || null, !(this.rpc || t.infuraId && "string" == typeof t.infuraId && t.infuraId.trim())) throw new Error("Missing one of the required parameters: rpc or infuraId");
        this.infuraId = t.infuraId || "", this.chainId = (null == t ? void 0 : t.chainId) || this.chainId, this.initialize();
      }
      get isWalletConnect() {
        return !0;
      }
      get connector() {
        return this.wc;
      }
      get walletMeta() {
        return this.wc.peerMeta;
      }
      async disconnect() {
        this.close();
      }
      async close() {
        const t = await this.getWalletConnector({
          disableSessionCreation: !0
        });
        await t.killSession(), await this.onDisconnect();
      }
      async handleRequest(t) {
        try {
          let e;
          let r = null;
          const n = await this.getWalletConnector();
          switch (t.method) {
           case "wc_killSession":
            await this.close(), r = null;
            break;

           case "eth_accounts":
            r = n.accounts;
            break;

           case "eth_coinbase":
            r = n.accounts[0];
            break;

           case "eth_chainId":
           case "net_version":
            r = n.chainId;
            break;

           case "eth_uninstallFilter":
            this.sendAsync(t, (t => t)), r = !0;
            break;

           default:
            e = await this.handleOtherRequests(t);
          }
          return e || this.formatResponse(t, r);
        } catch (e) {
          throw this.emit("error", e), e;
        }
      }
      async handleOtherRequests(t) {
        if (!a.includes(t.method) && t.method.startsWith("eth_")) return this.handleReadRequests(t);
        const e = await this.getWalletConnector();
        const r = await e.sendCustomRequest(t);
        return this.formatResponse(t, r);
      }
      async handleReadRequests(t) {
        if (!this.http) {
          const t = new Error("HTTP Connection not available");
          throw this.emit("error", t), t;
        }
        return this.http.send(t);
      }
      formatResponse(t, e) {
        return {
          id: t.id,
          jsonrpc: t.jsonrpc,
          result: e
        };
      }
      getWalletConnector(t = {}) {
        const {disableSessionCreation: e = !1} = t;
        return new Promise(((t, r) => {
          const n = this.wc;
          this.isConnecting ? this.onConnect((e => t(e))) : n.connected || e ? (this.connected || (this.connected = !0, this.updateState(n.session)), 
          t(n)) : (this.isConnecting = !0, n.on("modal_closed", (() => {
            r(new Error("User closed modal"));
          })), n.createSession({
            chainId: this.chainId
          }).then((() => {
            n.on("connect", ((e, i) => {
              if (e) return this.isConnecting = !1, r(e);
              this.isConnecting = !1, this.connected = !0, i && this.updateState(i.params[0]), this.emit("connect"), this.triggerConnect(n), 
              t(n);
            }));
          })).catch((t => {
            this.isConnecting = !1, r(t);
          })));
        }));
      }
      async subscribeWalletConnector() {
        const t = await this.getWalletConnector();
        t.on("disconnect", (t => {
          t ? this.emit("error", t) : this.onDisconnect();
        })), t.on("session_update", ((t, e) => {
          t ? this.emit("error", t) : this.updateState(e.params[0]);
        }));
      }
      async onDisconnect() {
        await this.stop(), this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected"), 
        this.connected = !1;
      }
      async updateState(t) {
        const {accounts: e, chainId: r, networkId: n, rpcUrl: i} = t;
        (!this.accounts || e && this.accounts !== e) && (this.accounts = e, this.emit("accountsChanged", e)), (!this.chainId || r && this.chainId !== r) && (this.chainId = r, 
        this.emit("chainChanged", r)), (!this.networkId || n && this.networkId !== n) && (this.networkId = n, this.emit("networkChanged", n)), 
        this.updateRpcUrl(this.chainId, i || "");
      }
      updateRpcUrl(t, e = "") {
        const r = {
          infuraId: this.infuraId,
          custom: this.rpc || void 0
        };
        (e = e || w(t, r)) ? (this.rpcUrl = e, this.updateHttpConnection()) : this.emit("error", new Error(`No RPC Url available for chainId: ${t}`));
      }
      updateHttpConnection() {
        this.rpcUrl && (this.http = new at(this.rpcUrl), this.http.on("payload", (t => this.emit("payload", t))), this.http.on("error", (t => this.emit("error", t))));
      }
      sendAsyncPromise(t, e) {
        return new Promise(((r, n) => {
          this.sendAsync({
            id: g(),
            jsonrpc: "2.0",
            method: t,
            params: e || []
          }, ((t, e) => {
            t ? n(t) : r(e.result);
          }));
        }));
      }
      initialize() {
        this.updateRpcUrl(this.chainId), this.addProvider(new ht({
          eth_hashrate: "0x00",
          eth_mining: !1,
          eth_syncing: !0,
          net_listening: !0,
          web3_clientVersion: "WalletConnect/v1.x.x/javascript"
        })), this.addProvider(new ut), this.addProvider(new dt), this.addProvider(new lt), this.addProvider(new ft), this.addProvider(new ct(this.configWallet())), 
        this.addProvider({
          handleRequest: async (t, e, r) => {
            try {
              const {error: e, result: n} = await this.handleRequest(t);
              r(e, n);
            } catch (n) {
              r(n);
            }
          },
          setEngine: t => t
        });
      }
      configWallet() {
        return {
          getAccounts: async t => {
            try {
              const e = (await this.getWalletConnector()).accounts;
              e && e.length ? t(null, e) : t(new Error("Failed to get accounts"));
            } catch (e) {
              t(e);
            }
          },
          processMessage: async (t, e) => {
            try {
              const r = await this.getWalletConnector();
              e(null, await r.signMessage([ t.from, t.data ]));
            } catch (r) {
              e(r);
            }
          },
          processPersonalMessage: async (t, e) => {
            try {
              const r = await this.getWalletConnector();
              e(null, await r.signPersonalMessage([ t.data, t.from ]));
            } catch (r) {
              e(r);
            }
          },
          processSignTransaction: async (t, e) => {
            try {
              const r = await this.getWalletConnector();
              e(null, await r.signTransaction(t));
            } catch (r) {
              e(r);
            }
          },
          processTransaction: async (t, e) => {
            try {
              const r = await this.getWalletConnector();
              e(null, await r.sendTransaction(t));
            } catch (r) {
              e(r);
            }
          },
          processTypedMessage: async (t, e) => {
            try {
              const r = await this.getWalletConnector();
              e(null, await r.signTypedData([ t.from, t.data ]));
            } catch (r) {
              e(r);
            }
          }
        };
      }
    };
    var mt = function(t, e, r, n) {
      return new (r || (r = Promise))((function(i, o) {
        function a(t) {
          try {
            u(n.next(t));
          } catch (e) {
            o(e);
          }
        }
        function s(t) {
          try {
            u(n.throw(t));
          } catch (e) {
            o(e);
          }
        }
        function u(t) {
          t.done ? i(t.value) : function(t) {
            return t instanceof r ? t : new r((function(e) {
              e(t);
            }));
          }(t.value).then(a, s);
        }
        u((n = n.apply(t, e || [])).next());
      }));
    };
    var vt = function(t, e) {
      var r, n, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
      }), o;
      function s(o) {
        return function(s) {
          return function(o) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;a; ) try {
              if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
              switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
               case 0:
               case 1:
                i = o;
                break;

               case 4:
                return a.label++, {
                  value: o[1],
                  done: !1
                };

               case 5:
                a.label++, n = o[1], o = [ 0 ];
                continue;

               case 7:
                o = a.ops.pop(), a.trys.pop();
                continue;

               default:
                if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1], i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2], a.ops.push(o);
                  break;
                }
                i[2] && a.ops.pop(), a.trys.pop();
                continue;
              }
              o = e.call(t, a);
            } catch (s) {
              o = [ 6, s ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([ o, s ]);
        };
      }
    };
    var gt = function() {
      return mt(void 0, void 0, void 0, (function() {
        return vt(this, (function(t) {
          return [ 2, new pt({
            infuraId: "7753fa7b79d2469f97c156780fce37ac"
          }) ];
        }));
      }));
    };
  },
  55522: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      detectEnv: () => y,
      detectOS: () => w,
      formatIOSMobile: () => D,
      formatMobileRegistry: () => X,
      formatMobileRegistryEntry: () => Q,
      getAppLogoUrl: () => J,
      getClientMeta: () => U,
      getCrypto: () => I,
      getCryptoOrThrow: () => P,
      getDappRegistryUrl: () => Y,
      getDocument: () => T,
      getDocumentOrThrow: () => S,
      getFromWindow: () => A,
      getFromWindowOrThrow: () => E,
      getLocal: () => H,
      getLocalStorage: () => N,
      getLocalStorageOrThrow: () => O,
      getLocation: () => L,
      getLocationOrThrow: () => B,
      getMobileLinkRegistry: () => V,
      getMobileRegistryEntry: () => W,
      getNavigator: () => R,
      getNavigatorOrThrow: () => C,
      getWalletRegistryUrl: () => G,
      isAndroid: () => _,
      isBrowser: () => x,
      isIOS: () => M,
      isMobile: () => b,
      isNode: () => k,
      mobileLinkChoiceKey: () => z,
      removeLocal: () => F,
      safeJsonParse: () => j,
      safeJsonStringify: () => q,
      saveMobileLinkInfo: () => Z,
      setLocal: () => K
    });
    var n = r(65755);
    var i = r(62873);
    var o = r(34155);
    var a = function() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
      var n = Array(t), i = 0;
      for (e = 0; e < r; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
      return n;
    };
    var s = function() {
      return function(t, e, r) {
        this.name = t, this.version = e, this.os = r, this.type = 'browser';
      };
    }();
    var u = function() {
      return function(t) {
        this.version = t, this.type = 'node', this.name = 'node', this.os = o.platform;
      };
    }();
    var h = function() {
      return function(t, e, r, n) {
        this.name = t, this.version = e, this.os = r, this.bot = n, this.type = 'bot-device';
      };
    }();
    var l = function() {
      return function() {
        this.type = 'bot', this.bot = !0, this.name = 'bot', this.version = null, this.os = null;
      };
    }();
    var c = function() {
      return function() {
        this.type = 'react-native', this.name = 'react-native', this.version = null, this.os = null;
      };
    }();
    var f = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
    var d = [ [ 'aol', /AOLShield\/([0-9\._]+)/ ], [ 'edge', /Edge\/([0-9\._]+)/ ], [ 'edge-ios', /EdgiOS\/([0-9\._]+)/ ], [ 'yandexbrowser', /YaBrowser\/([0-9\._]+)/ ], [ 'kakaotalk', /KAKAOTALK\s([0-9\.]+)/ ], [ 'samsung', /SamsungBrowser\/([0-9\.]+)/ ], [ 'silk', /\bSilk\/([0-9._-]+)\b/ ], [ 'miui', /MiuiBrowser\/([0-9\.]+)$/ ], [ 'beaker', /BeakerBrowser\/([0-9\.]+)/ ], [ 'edge-chromium', /EdgA?\/([0-9\.]+)/ ], [ 'chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/ ], [ 'phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/ ], [ 'crios', /CriOS\/([0-9\.]+)(:?\s|$)/ ], [ 'firefox', /Firefox\/([0-9\.]+)(?:\s|$)/ ], [ 'fxios', /FxiOS\/([0-9\.]+)/ ], [ 'opera-mini', /Opera Mini.*Version\/([0-9\.]+)/ ], [ 'opera', /Opera\/([0-9\.]+)(?:\s|$)/ ], [ 'opera', /OPR\/([0-9\.]+)(:?\s|$)/ ], [ 'ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/ ], [ 'ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/ ], [ 'ie', /MSIE\s(7\.0)/ ], [ 'bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/ ], [ 'android', /Android\s([0-9\.]+)/ ], [ 'ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/ ], [ 'safari', /Version\/([0-9\._]+).*Safari/ ], [ 'facebook', /FBAV\/([0-9\.]+)/ ], [ 'instagram', /Instagram\s([0-9\.]+)/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/ ], [ 'ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/ ], [ 'searchbot', /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/ ] ];
    var p = [ [ 'iOS', /iP(hone|od|ad)/ ], [ 'Android OS', /Android/ ], [ 'BlackBerry OS', /BlackBerry|BB10/ ], [ 'Windows Mobile', /IEMobile/ ], [ 'Amazon OS', /Kindle/ ], [ 'Windows 3.11', /Win16/ ], [ 'Windows 95', /(Windows 95)|(Win95)|(Windows_95)/ ], [ 'Windows 98', /(Windows 98)|(Win98)/ ], [ 'Windows 2000', /(Windows NT 5.0)|(Windows 2000)/ ], [ 'Windows XP', /(Windows NT 5.1)|(Windows XP)/ ], [ 'Windows Server 2003', /(Windows NT 5.2)/ ], [ 'Windows Vista', /(Windows NT 6.0)/ ], [ 'Windows 7', /(Windows NT 6.1)/ ], [ 'Windows 8', /(Windows NT 6.2)/ ], [ 'Windows 8.1', /(Windows NT 6.3)/ ], [ 'Windows 10', /(Windows NT 10.0)/ ], [ 'Windows ME', /Windows ME/ ], [ 'Open BSD', /OpenBSD/ ], [ 'Sun OS', /SunOS/ ], [ 'Chrome OS', /CrOS/ ], [ 'Linux', /(Linux)|(X11)/ ], [ 'Mac OS', /(Mac_PowerPC)|(Macintosh)/ ], [ 'QNX', /QNX/ ], [ 'BeOS', /BeOS/ ], [ 'OS/2', /OS\/2/ ] ];
    function m(t) {
      return t ? g(t) : 'undefined' == typeof document && 'undefined' != typeof navigator && 'ReactNative' === navigator.product ? new c : 'undefined' != typeof navigator ? g(navigator.userAgent) : function() {
        return void 0 !== o && o.version ? new u(o.version.slice(1)) : null;
      }();
    }
    function v(t) {
      return '' !== t && d.reduce((function(e, r) {
        var n = r[0], i = r[1];
        if (e) return e;
        var o = i.exec(t);
        return !!o && [ n, o ];
      }), !1);
    }
    function g(t) {
      var e = v(t);
      if (!e) return null;
      var r = e[0], n = e[1];
      if ('searchbot' === r) return new l;
      var i = n[1] && n[1].split(/[._]/).slice(0, 3);
      i ? i.length < 3 && (i = a(i, function(t) {
        var e = [];
        for (var r = 0; r < t; r++) e.push('0');
        return e;
      }(3 - i.length))) : i = [];
      var o = i.join('.');
      var u = function(t) {
        for (var e = 0, r = p.length; e < r; e++) {
          var n = p[e], i = n[0];
          if (n[1].exec(t)) return i;
        }
        return null;
      }(t);
      var c = f.exec(t);
      return c && c[1] ? new h(r, o, u, c[1]) : new s(r, o, u);
    }
    function y(t) {
      return m(t);
    }
    function w() {
      const t = y();
      return t && t.os ? t.os : void 0;
    }
    function _() {
      const t = w();
      return !!t && t.toLowerCase().includes("android");
    }
    function M() {
      const t = w();
      return !!t && (t.toLowerCase().includes("ios") || t.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1);
    }
    function b() {
      return !!w() && (_() || M());
    }
    function k() {
      const t = y();
      return !(!t || !t.name) && "node" === t.name.toLowerCase();
    }
    function x() {
      return !k() && !!R();
    }
    const A = i.getFromWindow;
    const E = i.getFromWindowOrThrow;
    const S = i.getDocumentOrThrow;
    const T = i.getDocument;
    const C = i.getNavigatorOrThrow;
    const R = i.getNavigator;
    const B = i.getLocationOrThrow;
    const L = i.getLocation;
    const P = i.getCryptoOrThrow;
    const I = i.getCrypto;
    const O = i.getLocalStorageOrThrow;
    const N = i.getLocalStorage;
    function U() {
      return n.D();
    }
    const j = function(t) {
      if ("string" != typeof t) throw new Error("Cannot safe json parse value of type " + typeof t);
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    };
    const q = function(t) {
      return "string" == typeof t ? t : JSON.stringify(t);
    };
    function K(t, e) {
      const r = q(e);
      const n = N();
      n && n.setItem(t, r);
    }
    function H(t) {
      let e = null;
      let r = null;
      const n = N();
      return n && (r = n.getItem(t)), e = r ? j(r) : r, e;
    }
    function F(t) {
      const e = N();
      e && e.removeItem(t);
    }
    const z = "WALLETCONNECT_DEEPLINK_CHOICE";
    function D(t, e) {
      const r = encodeURIComponent(t);
      return e.universalLink ? `${e.universalLink}/wc?uri=${r}` : e.deepLink ? `${e.deepLink}${e.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${r}` : "";
    }
    function Z(t) {
      const e = t.href.split("?")[0];
      K(z, Object.assign(Object.assign({}, t), {
        href: e
      }));
    }
    function W(t, e) {
      return t.filter((t => t.name.toLowerCase().includes(e.toLowerCase())))[0];
    }
    function V(t, e) {
      let r = t;
      return e && (r = e.map((e => W(t, e))).filter(Boolean)), r;
    }
    const $ = "https://registry.walletconnect.org";
    function G() {
      return $ + "/data/wallets.json";
    }
    function Y() {
      return $ + "/data/dapps.json";
    }
    function J(t) {
      return $ + "/logo/sm/" + t + ".jpeg";
    }
    function Q(t, e = "mobile") {
      return {
        name: t.name || "",
        shortName: t.metadata.shortName || "",
        color: t.metadata.colors.primary || "",
        logo: t.id ? J(t.id) : "",
        universalLink: t[e].universal || "",
        deepLink: t[e].native || ""
      };
    }
    function X(t, e = "mobile") {
      return Object.values(t).filter((t => !!t[e].universal || !!t[e].native)).map((t => Q(t, e)));
    }
  },
  23087: function(t, e, r) {
    "use strict";
    var n = r(48764).Buffer;
    var i = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.removeHexLeadingZeros = e.sanitizeHex = e.addHexPrefix = e.removeHexPrefix = e.padRight = e.padLeft = e.sanitizeBytes = e.swapHex = e.swapBytes = e.splitBytes = e.calcByteLength = e.trimRight = e.trimLeft = e.concatArrays = e.concatBuffers = e.getEncoding = e.getType = e.isArrayBuffer = e.isTypedArray = e.isBuffer = e.isHexString = e.isBinaryString = e.binaryToNumber = e.binaryToUtf8 = e.binaryToHex = e.binaryToArray = e.binaryToBuffer = e.numberToBinary = e.numberToUtf8 = e.numberToHex = e.numberToArray = e.numberToBuffer = e.utf8ToBinary = e.utf8ToNumber = e.utf8ToHex = e.utf8ToArray = e.utf8ToBuffer = e.hexToBinary = e.hexToNumber = e.hexToUtf8 = e.hexToArray = e.hexToBuffer = e.arrayToBinary = e.arrayToNumber = e.arrayToUtf8 = e.arrayToHex = e.arrayToBuffer = e.bufferToBinary = e.bufferToNumber = e.bufferToUtf8 = e.bufferToHex = e.bufferToArray = void 0;
    const o = i(r(4501));
    const a = i(r(65054));
    const s = "hex";
    const u = "utf8";
    const h = "0";
    function l(t) {
      return new Uint8Array(t);
    }
    function c(t, e = !1) {
      const r = t.toString(s);
      return e ? q(r) : r;
    }
    function f(t) {
      return t.toString(u);
    }
    function d(t) {
      return t.readUIntBE(0, t.length);
    }
    function p(t) {
      return a.default(t);
    }
    function m(t, e = !1) {
      return c(p(t), e);
    }
    function v(t) {
      return f(p(t));
    }
    function g(t) {
      return d(p(t));
    }
    function y(t) {
      return Array.from(t).map(x).join("");
    }
    function w(t) {
      return n.from(j(t), s);
    }
    function _(t) {
      return l(w(t));
    }
    function M(t) {
      return y(_(t));
    }
    function b(t) {
      return n.from(t, u);
    }
    function k(t) {
      return l(b(t));
    }
    function x(t) {
      return N((t >>> 0).toString(2));
    }
    function A(t) {
      return p(E(t));
    }
    function E(t) {
      return new Uint8Array(I(t).map((t => parseInt(t, 2))));
    }
    function S(t, e) {
      return m(E(t), e);
    }
    function T(t) {
      return !("string" != typeof t || !new RegExp(/^[01]+$/).test(t)) && t.length % 8 == 0;
    }
    function C(t, e) {
      return !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e);
    }
    function R(t) {
      return n.isBuffer(t);
    }
    function B(t) {
      return o.default.strict(t) && !R(t);
    }
    function L(t) {
      return !B(t) && !R(t) && void 0 !== t.byteLength;
    }
    function P(t, e = 8) {
      const r = t % e;
      return r ? (t - r) / e * e + e : t;
    }
    function I(t, e = 8) {
      const r = N(t).match(new RegExp(`.{${e}}`, "gi"));
      return Array.from(r || []);
    }
    function O(t) {
      return I(t).map(K).join("");
    }
    function N(t, e = 8, r = "0") {
      return U(t, P(t.length, e), r);
    }
    function U(t, e, r = "0") {
      return H(t, e, !0, r);
    }
    function j(t) {
      return t.replace(/^0x/, "");
    }
    function q(t) {
      return t.startsWith("0x") ? t : `0x${t}`;
    }
    function K(t) {
      return t.split("").reverse().join("");
    }
    function H(t, e, r, n = "0") {
      const i = e - t.length;
      let o = t;
      if (i > 0) {
        const e = n.repeat(i);
        o = r ? e + t : t + e;
      }
      return o;
    }
    e.bufferToArray = l, e.bufferToHex = c, e.bufferToUtf8 = f, e.bufferToNumber = d, e.bufferToBinary = function(t) {
      return y(l(t));
    }, e.arrayToBuffer = p, e.arrayToHex = m, e.arrayToUtf8 = v, e.arrayToNumber = g, e.arrayToBinary = y, e.hexToBuffer = w, 
    e.hexToArray = _, e.hexToUtf8 = function(t) {
      return f(w(t));
    }, e.hexToNumber = function(t) {
      return g(_(t));
    }, e.hexToBinary = M, e.utf8ToBuffer = b, e.utf8ToArray = k, e.utf8ToHex = function(t, e = !1) {
      return c(b(t), e);
    }, e.utf8ToNumber = function(t) {
      const e = parseInt(t, 10);
      return function(t, e) {
        if (!t) throw new Error(e);
      }(function(t) {
        return !function(t) {
          return void 0 === t;
        }(t);
      }(e), "Number can only safely store up to 53 bits"), e;
    }, e.utf8ToBinary = function(t) {
      return y(k(t));
    }, e.numberToBuffer = function(t) {
      return A(x(t));
    }, e.numberToArray = function(t) {
      return E(x(t));
    }, e.numberToHex = function(t, e) {
      return S(x(t), e);
    }, e.numberToUtf8 = function(t) {
      return `${t}`;
    }, e.numberToBinary = x, e.binaryToBuffer = A, e.binaryToArray = E, e.binaryToHex = S, e.binaryToUtf8 = function(t) {
      return v(E(t));
    }, e.binaryToNumber = function(t) {
      return g(E(t));
    }, e.isBinaryString = T, e.isHexString = C, e.isBuffer = R, e.isTypedArray = B, e.isArrayBuffer = L, e.getType = function(t) {
      return R(t) ? "buffer" : B(t) ? "typed-array" : L(t) ? "array-buffer" : Array.isArray(t) ? "array" : typeof t;
    }, e.getEncoding = function(t) {
      return T(t) ? "binary" : C(t) ? s : u;
    }, e.concatBuffers = function(...t) {
      return n.concat(t);
    }, e.concatArrays = function(...t) {
      let e = [];
      return t.forEach((t => e = e.concat(Array.from(t)))), new Uint8Array([ ...e ]);
    }, e.trimLeft = function(t, e) {
      const r = t.length - e;
      return r > 0 && (t = t.slice(r)), t;
    }, e.trimRight = function(t, e) {
      return t.slice(0, e);
    }, e.calcByteLength = P, e.splitBytes = I, e.swapBytes = O, e.swapHex = function(t) {
      return S(O(M(t)));
    }, e.sanitizeBytes = N, e.padLeft = U, e.padRight = function(t, e, r = "0") {
      return H(t, e, !1, r);
    }, e.removeHexPrefix = j, e.addHexPrefix = q, e.sanitizeHex = function(t) {
      return (t = N(t = j(t), 2)) && (t = q(t)), t;
    }, e.removeHexLeadingZeros = function(t) {
      const e = t.startsWith("0x");
      return t = (t = j(t)).startsWith(h) ? t.substring(1) : t, e ? q(t) : t;
    };
  },
  40926: (t, e, r) => {
    "use strict";
    function n() {
      return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {};
    }
    function i() {
      const t = n();
      return t.subtle || t.webkitSubtle;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = n, e.getSubtleCrypto = i, 
    e.isBrowserCryptoAvailable = function() {
      return !!n() && !!i();
    };
  },
  88618: (t, e, r) => {
    "use strict";
    var n = r(34155);
    function i() {
      return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product;
    }
    function o() {
      return void 0 !== n && void 0 !== n.versions && void 0 !== n.versions.node;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = i, e.isNode = o, e.isBrowser = function() {
      return !i() && !o();
    };
  },
  1468: function(t, e, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
      void 0 === n && (n = r), Object.defineProperty(t, n, {
        enumerable: !0,
        get: function() {
          return e[r];
        }
      });
    } : function(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    });
    var i = this && this.__exportStar || function(t, e) {
      for (var r in t) "default" === r || e.hasOwnProperty(r) || n(e, t, r);
    };
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), i(r(40926), e), i(r(88618), e);
  },
  4337: (t, e, r) => {
    var n = r(25108);
    var i = r(34155);
    function o(t) {
      return t && 'object' == typeof t && 'default' in t ? t.default : t;
    }
    var a = r(55522);
    var s = o(r(92592));
    var u = o(r(20640));
    var h = r(35776);
    "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
    "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
    var l = "walletconnect-wrapper";
    var c = "walletconnect-style-sheet";
    var f = "walletconnect-qrcode-modal";
    var d = "walletconnect-qrcode-text";
    function p(t) {
      return h.createElement("div", {
        className: "walletconnect-modal__header"
      }, h.createElement("img", {
        src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
        className: "walletconnect-modal__headerLogo"
      }), h.createElement("p", null, "WalletConnect"), h.createElement("div", {
        className: "walletconnect-modal__close__wrapper",
        onClick: t.onClose
      }, h.createElement("div", {
        id: "walletconnect-qrcode-close",
        className: "walletconnect-modal__close__icon"
      }, h.createElement("div", {
        className: "walletconnect-modal__close__line1"
      }), h.createElement("div", {
        className: "walletconnect-modal__close__line2"
      }))));
    }
    function m(t) {
      return h.createElement("a", {
        className: "walletconnect-connect__button",
        href: t.href,
        id: "walletconnect-connect-button-" + t.name,
        onClick: t.onClick,
        rel: "noopener noreferrer",
        style: {
          backgroundColor: t.color
        },
        target: "_blank"
      }, t.name);
    }
    function v(t) {
      var e = t.color;
      var r = t.href;
      var n = t.name;
      var i = t.logo;
      var o = t.onClick;
      return h.createElement("a", {
        className: "walletconnect-modal__base__row",
        href: r,
        onClick: o,
        rel: "noopener noreferrer",
        target: "_blank"
      }, h.createElement("h3", {
        className: "walletconnect-modal__base__row__h3"
      }, n), h.createElement("div", {
        className: "walletconnect-modal__base__row__right"
      }, h.createElement("div", {
        className: "walletconnect-modal__base__row__right__app-icon",
        style: {
          background: "url('" + i + "') " + e,
          backgroundSize: "100%"
        }
      }), h.createElement("img", {
        src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
        className: "walletconnect-modal__base__row__right__caret"
      })));
    }
    function g(t) {
      var e = t.color;
      var r = t.href;
      var n = t.name;
      var i = t.logo;
      var o = t.onClick;
      var a = window.innerWidth < 768 ? (n.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
      return h.createElement("a", {
        className: "walletconnect-connect__button__icon_anchor",
        href: r,
        onClick: o,
        rel: "noopener noreferrer",
        target: "_blank"
      }, h.createElement("div", {
        className: "walletconnect-connect__button__icon",
        style: {
          background: "url('" + i + "') " + e,
          backgroundSize: "100%"
        }
      }), h.createElement("div", {
        style: {
          fontSize: a
        },
        className: "walletconnect-connect__button__text"
      }, n));
    }
    function y(t) {
      var e = a.isAndroid();
      var r = h.useState("");
      var n = r[0];
      var i = r[1];
      var o = h.useState("");
      var s = o[0];
      var u = o[1];
      var l = h.useState(1);
      var c = l[0];
      var f = l[1];
      var p = s ? t.links.filter((function(t) {
        return t.name.toLowerCase().includes(s.toLowerCase());
      })) : t.links;
      var y = t.errorMessage;
      var w = s || p.length > 5;
      var _ = Math.ceil(p.length / 12);
      var M = [ 12 * (c - 1) + 1, 12 * c ];
      var b = p.length ? p.filter((function(t, e) {
        return e + 1 >= M[0] && e + 1 <= M[1];
      })) : [];
      var k = !(e || !(_ > 1));
      var x = void 0;
      return h.createElement("div", null, h.createElement("p", {
        id: d,
        className: "walletconnect-qrcode__text"
      }, e ? t.text.connect_mobile_wallet : t.text.choose_preferred_wallet), !e && h.createElement("input", {
        className: "walletconnect-search__input",
        placeholder: "Search",
        value: n,
        onChange: function(t) {
          i(t.target.value), clearTimeout(x), t.target.value ? x = setTimeout((function() {
            u(t.target.value), f(1);
          }), 1e3) : (i(""), u(""), f(1));
        }
      }), h.createElement("div", {
        className: "walletconnect-connect__buttons__wrapper" + (e ? "__android" : w && p.length ? "__wrap" : "")
      }, e ? h.createElement(m, {
        name: t.text.connect,
        color: "rgb(64, 153, 255)",
        href: t.uri,
        onClick: h.useCallback((function() {
          a.saveMobileLinkInfo({
            name: "Unknown",
            href: t.uri
          });
        }), [])
      }) : b.length ? b.map((function(e) {
        var r = e.color;
        var n = e.name;
        var i = e.shortName;
        var o = e.logo;
        var s = a.formatIOSMobile(t.uri, e);
        var u = h.useCallback((function() {
          a.saveMobileLinkInfo({
            name: n,
            href: s
          });
        }), [ b ]);
        return w ? h.createElement(g, {
          color: r,
          href: s,
          name: i,
          logo: o,
          onClick: u
        }) : h.createElement(v, {
          color: r,
          href: s,
          name: n,
          logo: o,
          onClick: u
        });
      })) : h.createElement(h.Fragment, null, h.createElement("p", null, y.length ? t.errorMessage : t.links.length && !p.length ? t.text.no_wallets_found : t.text.loading))), k && h.createElement("div", {
        className: "walletconnect-modal__footer"
      }, Array(_).fill(0).map((function(t, e) {
        var r = e + 1;
        var n = c === r;
        return h.createElement("a", {
          style: {
            margin: "auto 10px",
            fontWeight: n ? "bold" : "normal"
          },
          onClick: function() {
            return f(r);
          }
        }, r);
      }))));
    }
    function w(t) {
      var e = !!t.message.trim();
      return h.createElement("div", {
        className: "walletconnect-qrcode__notification" + (e ? " notification__show" : "")
      }, t.message);
    }
    function _(t) {
      var e = h.useState("");
      var r = e[0];
      var n = e[1];
      var i = h.useState("");
      var o = i[0];
      var a = i[1];
      h.useEffect((function() {
        try {
          return Promise.resolve(function(t) {
            try {
              var e = "";
              return Promise.resolve(s.toString(t, {
                margin: 0,
                type: "svg"
              })).then((function(t) {
                return "string" == typeof t && (e = t.replace("<svg", "<svg class=\"walletconnect-qrcode__image\"")), e;
              }));
            } catch (r) {
              return Promise.reject(r);
            }
          }(t.uri)).then((function(t) {
            a(t);
          }));
        } catch (e) {
          Promise.reject(e);
        }
      }), []);
      return h.createElement("div", null, h.createElement("p", {
        id: d,
        className: "walletconnect-qrcode__text"
      }, t.text.scan_qrcode_with_wallet), h.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: o
        }
      }), h.createElement("div", {
        className: "walletconnect-modal__footer"
      }, h.createElement("a", {
        onClick: function() {
          u(t.uri) ? (n(t.text.copied_to_clipboard), setInterval((function() {
            return n("");
          }), 1200)) : (n("Error"), setInterval((function() {
            return n("");
          }), 1200));
        }
      }, t.text.copy_to_clipboard)), h.createElement(w, {
        message: r
      }));
    }
    function M(t) {
      var e = a.isAndroid();
      var r = a.isMobile();
      var i = r ? t.qrcodeModalOptions && t.qrcodeModalOptions.mobileLinks ? t.qrcodeModalOptions.mobileLinks : void 0 : t.qrcodeModalOptions && t.qrcodeModalOptions.desktopLinks ? t.qrcodeModalOptions.desktopLinks : void 0;
      var o = h.useState(!1);
      var s = o[0];
      var u = o[1];
      var l = h.useState(!1);
      var c = l[0];
      var d = l[1];
      var m = h.useState(!r);
      var v = m[0];
      var g = m[1];
      var w = {
        mobile: r,
        text: t.text,
        uri: t.uri,
        qrcodeModalOptions: t.qrcodeModalOptions
      };
      var M = h.useState("");
      var b = M[0];
      var k = M[1];
      var x = h.useState(!1);
      var A = x[0];
      var E = x[1];
      var S = h.useState([]);
      var T = S[0];
      var C = S[1];
      var R = h.useState("");
      var B = R[0];
      var L = R[1];
      var P = function() {
        c || s || i && !i.length || T.length > 0 || h.useEffect((function() {
          !function() {
            try {
              if (e) return Promise.resolve();
              u(!0);
              var o = function(t, e) {
                try {
                  var r = t();
                } catch (n) {
                  return e(n);
                }
                return r && r.then ? r.then(void 0, e) : r;
              }((function() {
                var e = t.qrcodeModalOptions && t.qrcodeModalOptions.registryUrl ? t.qrcodeModalOptions.registryUrl : a.getWalletRegistryUrl();
                return Promise.resolve(fetch(e).then((function(t) {
                  return t.json();
                }))).then((function(e) {
                  var n = r ? "mobile" : "desktop";
                  var o = a.getMobileLinkRegistry(a.formatMobileRegistry(e, n), i);
                  u(!1), d(!0), L(o.length ? "" : t.text.no_supported_wallets), C(o);
                  var s = 1 === o.length;
                  s && (k(a.formatIOSMobile(t.uri, o[0])), g(!0)), E(s);
                }));
              }), (function(e) {
                u(!1), d(!0), L(t.text.something_went_wrong), n.error(e);
              }));
              Promise.resolve(o && o.then ? o.then((function() {})) : void 0);
            } catch (s) {
              return Promise.reject(s);
            }
          }();
        }));
      };
      P();
      var I = r ? v : !v;
      return h.createElement("div", {
        id: f,
        className: "walletconnect-qrcode__base animated fadeIn"
      }, h.createElement("div", {
        className: "walletconnect-modal__base"
      }, h.createElement(p, {
        onClose: t.onClose
      }), A && v ? h.createElement("div", {
        className: "walletconnect-modal__single_wallet"
      }, h.createElement("a", {
        onClick: function() {
          return a.saveMobileLinkInfo({
            name: T[0].name,
            href: b
          });
        },
        href: b,
        rel: "noopener noreferrer",
        target: "_blank"
      }, t.text.connect_with + " " + (A ? T[0].name : "") + " ›")) : e || s || !s && T.length ? h.createElement("div", {
        className: "walletconnect-modal__mobile__toggle" + (I ? " right__selected" : "")
      }, h.createElement("div", {
        className: "walletconnect-modal__mobile__toggle_selector"
      }), r ? h.createElement(h.Fragment, null, h.createElement("a", {
        onClick: function() {
          return g(!1), P();
        }
      }, t.text.mobile), h.createElement("a", {
        onClick: function() {
          return g(!0);
        }
      }, t.text.qrcode)) : h.createElement(h.Fragment, null, h.createElement("a", {
        onClick: function() {
          return g(!0);
        }
      }, t.text.qrcode), h.createElement("a", {
        onClick: function() {
          return g(!1), P();
        }
      }, t.text.desktop))) : null, h.createElement("div", null, v || !e && !s && !T.length ? h.createElement(_, Object.assign({}, w)) : h.createElement(y, Object.assign({}, w, {
        links: T,
        errorMessage: B
      })))));
    }
    var b = {
      de: {
        choose_preferred_wallet: "Wähle bevorzugte Wallet",
        connect_mobile_wallet: "Verbinde mit Mobile Wallet",
        scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
        connect: "Verbinden",
        qrcode: "QR-Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "In die Zwischenablage kopieren",
        copied_to_clipboard: "In die Zwischenablage kopiert!",
        connect_with: "Verbinden mit Hilfe von",
        loading: "Laden...",
        something_went_wrong: "Etwas ist schief gelaufen",
        no_supported_wallets: "Es gibt noch keine unterstützten Wallet",
        no_wallets_found: "keine Wallet gefunden"
      },
      en: {
        choose_preferred_wallet: "Choose your preferred wallet",
        connect_mobile_wallet: "Connect to Mobile Wallet",
        scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
        connect: "Connect",
        qrcode: "QR Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "Copy to clipboard",
        copied_to_clipboard: "Copied to clipboard!",
        connect_with: "Connect with",
        loading: "Loading...",
        something_went_wrong: "Something went wrong",
        no_supported_wallets: "There are no supported wallets yet",
        no_wallets_found: "No wallets found"
      },
      es: {
        choose_preferred_wallet: "Elige tu billetera preferida",
        connect_mobile_wallet: "Conectar a billetera móvil",
        scan_qrcode_with_wallet: "Escanea el código QR con una billetera compatible con WalletConnect",
        connect: "Conectar",
        qrcode: "Código QR",
        mobile: "Móvil",
        desktop: "Desktop",
        copy_to_clipboard: "Copiar",
        copied_to_clipboard: "Copiado!",
        connect_with: "Conectar mediante",
        loading: "Cargando...",
        something_went_wrong: "Algo salió mal",
        no_supported_wallets: "Todavía no hay billeteras compatibles",
        no_wallets_found: "No se encontraron billeteras"
      },
      fr: {
        choose_preferred_wallet: "Choisissez votre portefeuille préféré",
        connect_mobile_wallet: "Se connecter au portefeuille mobile",
        scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
        connect: "Se connecter",
        qrcode: "QR Code",
        mobile: "Mobile",
        desktop: "Desktop",
        copy_to_clipboard: "Copier",
        copied_to_clipboard: "Copié!",
        connect_with: "Connectez-vous à l'aide de",
        loading: "Chargement...",
        something_went_wrong: "Quelque chose a mal tourné",
        no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
        no_wallets_found: "Aucun portefeuille trouvé"
      },
      ko: {
        choose_preferred_wallet: "원하는 지갑을 선택하세요",
        connect_mobile_wallet: "모바일 지갑과 연결",
        scan_qrcode_with_wallet: "WalletConnect 지원 지갑에서 QR코드를 스캔하세요",
        connect: "연결",
        qrcode: "QR 코드",
        mobile: "모바일",
        desktop: "데스크탑",
        copy_to_clipboard: "클립보드에 복사",
        copied_to_clipboard: "클립보드에 복사되었습니다!",
        connect_with: "와 연결하다",
        loading: "로드 중...",
        something_went_wrong: "문제가 발생했습니다.",
        no_supported_wallets: "아직 지원되는 지갑이 없습니다",
        no_wallets_found: "지갑을 찾을 수 없습니다"
      },
      pt: {
        choose_preferred_wallet: "Escolha sua carteira preferida",
        connect_mobile_wallet: "Conectar-se à carteira móvel",
        scan_qrcode_with_wallet: "Ler o código QR com uma carteira compatível com WalletConnect",
        connect: "Conectar",
        qrcode: "Código QR",
        mobile: "Móvel",
        desktop: "Desktop",
        copy_to_clipboard: "Copiar",
        copied_to_clipboard: "Copiado!",
        connect_with: "Ligar por meio de",
        loading: "Carregamento...",
        something_went_wrong: "Algo correu mal",
        no_supported_wallets: "Ainda não há carteiras suportadas",
        no_wallets_found: "Nenhuma carteira encontrada"
      },
      zh: {
        choose_preferred_wallet: "选择你的钱包",
        connect_mobile_wallet: "连接至移动端钱包",
        scan_qrcode_with_wallet: "使用兼容 WalletConnect 的钱包扫描二维码",
        connect: "连接",
        qrcode: "二维码",
        mobile: "移动",
        desktop: "桌面",
        copy_to_clipboard: "复制到剪贴板",
        copied_to_clipboard: "复制到剪贴板成功！",
        connect_with: "通过以下方式连接",
        loading: "正在加载...",
        something_went_wrong: "出了问题",
        no_supported_wallets: "目前还没有支持的钱包",
        no_wallets_found: "没有找到钱包"
      },
      fa: {
        choose_preferred_wallet: "کیف پول مورد نظر خود را انتخاب کنید",
        connect_mobile_wallet: "به کیف پول موبایل وصل شوید",
        scan_qrcode_with_wallet: "کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",
        connect: "اتصال",
        qrcode: "کد QR",
        mobile: "سیار",
        desktop: "دسکتاپ",
        copy_to_clipboard: "کپی به کلیپ بورد",
        copied_to_clipboard: "در کلیپ بورد کپی شد!",
        connect_with: "ارتباط با",
        loading: "...بارگذاری",
        something_went_wrong: "مشکلی پیش آمد",
        no_supported_wallets: "هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",
        no_wallets_found: "هیچ کیف پولی پیدا نشد"
      }
    };
    function k() {
      var t = a.getDocumentOrThrow();
      var e = t.getElementById(f);
      e && (e.className = e.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
        var e = t.getElementById(l);
        e && t.body.removeChild(e);
      }), 300));
    }
    function x(t) {
      return function() {
        k(), t && t();
      };
    }
    function A() {
      var t = a.getNavigatorOrThrow().language.split("-")[0] || "en";
      return b[t] || b.en;
    }
    function E(t, e, r) {
      !function() {
        var t = a.getDocumentOrThrow();
        var e = t.getElementById(c);
        e && t.head.removeChild(e);
        var r = t.createElement("style");
        r.setAttribute("id", c), r.innerText = ":root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, \"SF Pro Rounded\", \"SF Pro Text\", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell,\n    \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url(\"images/wc-logo.svg\") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n", 
        t.head.appendChild(r);
      }();
      var n = function() {
        var t = a.getDocumentOrThrow();
        var e = t.createElement("div");
        return e.setAttribute("id", l), t.body.appendChild(e), e;
      }();
      h.render(h.createElement(M, {
        text: A(),
        uri: t,
        onClose: x(e),
        qrcodeModalOptions: r
      }), n);
    }
    var S = function() {
      return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node;
    };
    var T = {
      open: function(t, e, r) {
        n.log(t), S() ? function(t) {
          s.toString(t, {
            type: "terminal"
          }).then(n.log);
        }(t) : E(t, e, r);
      },
      close: function() {
        S() || function() {
          k();
        }();
      }
    };
    t.exports = T;
  },
  11460: function(t, e, r) {
    !function(t, e) {
      'use strict';
      function n(t, e) {
        if (!t) throw new Error(e || 'Assertion failed');
      }
      function i(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
      }
      function o(t, e, r) {
        if (o.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ('le' !== e && 'be' !== e || (r = e, 
        e = 10), this._init(t || 0, e || 10, r || 'be'));
      }
      var a;
      'object' == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
      try {
        a = r(36563).Buffer;
      } catch (x) {}
      function s(t, e, r) {
        var n = 0;
        var i = Math.min(t.length, r);
        for (var o = e; o < i; o++) {
          var a = t.charCodeAt(o) - 48;
          n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a;
        }
        return n;
      }
      function u(t, e, r, n) {
        var i = 0;
        var o = Math.min(t.length, r);
        for (var a = e; a < o; a++) {
          var s = t.charCodeAt(a) - 48;
          i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
        }
        return i;
      }
      o.isBN = function(t) {
        return t instanceof o || null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
      }, o.max = function(t, e) {
        return t.cmp(e) > 0 ? t : e;
      }, o.min = function(t, e) {
        return t.cmp(e) < 0 ? t : e;
      }, o.prototype._init = function(t, e, r) {
        if ('number' == typeof t) return this._initNumber(t, e, r);
        if ('object' == typeof t) return this._initArray(t, e, r);
        'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
        var i = 0;
        '-' === (t = t.toString().replace(/\s+/g, ''))[0] && i++, 16 === e ? this._parseHex(t, i) : this._parseBase(t, e, i), '-' === t[0] && (this.negative = 1), 
        this.strip(), 'le' === r && this._initArray(this.toArray(), e, r);
      }, o.prototype._initNumber = function(t, e, r) {
        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [ 67108863 & t ], this.length = 1) : t < 4503599627370496 ? (this.words = [ 67108863 & t, t / 67108864 & 67108863 ], 
        this.length = 2) : (n(t < 9007199254740992), this.words = [ 67108863 & t, t / 67108864 & 67108863, 1 ], this.length = 3), 
        'le' === r && this._initArray(this.toArray(), e, r);
      }, o.prototype._initArray = function(t, e, r) {
        if (n('number' == typeof t.length), t.length <= 0) return this.words = [ 0 ], this.length = 1, this;
        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) this.words[i] = 0;
        var o, a;
        var s = 0;
        if ('be' === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, 
        this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); else if ('le' === r) for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, 
        this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
        return this.strip();
      }, o.prototype._parseHex = function(t, e) {
        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
        for (var r = 0; r < this.length; r++) this.words[r] = 0;
        var n, i;
        var o = 0;
        for (r = t.length - 6, n = 0; r >= e; r -= 6) i = s(t, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, 
        (o += 24) >= 26 && (o -= 26, n++);
        r + 6 !== e && (i = s(t, e, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip();
      }, o.prototype._parseBase = function(t, e, r) {
        this.words = [ 0 ], this.length = 1;
        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
        n--, i = i / e | 0;
        var o = t.length - r;
        var a = o % n;
        var s = Math.min(o, o - a) + r;
        var h = 0;
        for (var l = r; l < s; l += n) h = u(t, l, l + n, e), this.imuln(i), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
        if (0 !== a) {
          var c = 1;
          for (h = u(t, l, t.length, e), l = 0; l < a; l++) c *= e;
          this.imuln(c), this.words[0] + h < 67108864 ? this.words[0] += h : this._iaddn(h);
        }
      }, o.prototype.copy = function(t) {
        t.words = new Array(this.length);
        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
        t.length = this.length, t.negative = this.negative, t.red = this.red;
      }, o.prototype.clone = function() {
        var t = new o(null);
        return this.copy(t), t;
      }, o.prototype._expand = function(t) {
        for (;this.length < t; ) this.words[this.length++] = 0;
        return this;
      }, o.prototype.strip = function() {
        for (;this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
        return this._normSign();
      }, o.prototype._normSign = function() {
        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
      }, o.prototype.inspect = function() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      var h = [ '', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000' ];
      var l = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
      var c = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
      function f(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var n = t.length + e.length | 0;
        r.length = n, n = n - 1 | 0;
        var i = 0 | t.words[0];
        var o = 0 | e.words[0];
        var a = i * o;
        var s = 67108863 & a;
        var u = a / 67108864 | 0;
        r.words[0] = s;
        for (var h = 1; h < n; h++) {
          var l = u >>> 26;
          var c = 67108863 & u;
          var f = Math.min(h, e.length - 1);
          for (var d = Math.max(0, h - t.length + 1); d <= f; d++) {
            var p = h - d | 0;
            l += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a;
          }
          r.words[h] = 0 | c, u = 0 | l;
        }
        return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
      }
      o.prototype.toString = function(t, e) {
        var r;
        if (e = 0 | e || 1, 16 === (t = t || 10) || 'hex' === t) {
          r = '';
          var i = 0;
          var o = 0;
          for (var a = 0; a < this.length; a++) {
            var s = this.words[a];
            var u = (16777215 & (s << i | o)).toString(16);
            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? h[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, 
            a--);
          }
          for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
          var f = l[t];
          var d = c[t];
          r = '';
          var p = this.clone();
          for (p.negative = 0; !p.isZero(); ) {
            var m = p.modn(d).toString(t);
            r = (p = p.idivn(d)).isZero() ? m + r : h[f - m.length] + m + r;
          }
          for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        n(!1, 'Base should be between 2 and 36');
      }, o.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'), 
        0 !== this.negative ? -t : t;
      }, o.prototype.toJSON = function() {
        return this.toString(16);
      }, o.prototype.toBuffer = function(t, e) {
        return n(void 0 !== a), this.toArrayLike(a, t, e);
      }, o.prototype.toArray = function(t, e) {
        return this.toArrayLike(Array, t, e);
      }, o.prototype.toArrayLike = function(t, e, r) {
        var i = this.byteLength();
        var o = r || Math.max(1, i);
        n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0'), this.strip();
        var a = 'le' === e;
        var s = new t(o);
        var u, h;
        var l = this.clone();
        if (a) {
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[h] = u;
          for (;h < o; h++) s[h] = 0;
        } else {
          for (h = 0; h < o - i; h++) s[h] = 0;
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[o - h - 1] = u;
        }
        return s;
      }, Math.clz32 ? o.prototype._countBits = function(t) {
        return 32 - Math.clz32(t);
      } : o.prototype._countBits = function(t) {
        var e = t;
        var r = 0;
        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, 
        e >>>= 2), r + e;
      }, o.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var e = t;
        var r = 0;
        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 
        0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
      }, o.prototype.bitLength = function() {
        var t = this.words[this.length - 1];
        var e = this._countBits(t);
        return 26 * (this.length - 1) + e;
      }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        var t = 0;
        for (var e = 0; e < this.length; e++) {
          var r = this._zeroBits(this.words[e]);
          if (t += r, 26 !== r) break;
        }
        return t;
      }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, o.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
      }, o.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
      }, o.prototype.isNeg = function() {
        return 0 !== this.negative;
      }, o.prototype.neg = function() {
        return this.clone().ineg();
      }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, o.prototype.iuor = function(t) {
        for (;this.length < t.length; ) this.words[this.length++] = 0;
        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
        return this.strip();
      }, o.prototype.ior = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuor(t);
      }, o.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
      }, o.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
      }, o.prototype.iuand = function(t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
        return this.length = e.length, this.strip();
      }, o.prototype.iand = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuand(t);
      }, o.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
      }, o.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
      }, o.prototype.iuxor = function(t) {
        var e;
        var r;
        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
        for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
        if (this !== e) for (;n < e.length; n++) this.words[n] = e.words[n];
        return this.length = e.length, this.strip();
      }, o.prototype.ixor = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuxor(t);
      }, o.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
      }, o.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
      }, o.prototype.inotn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = 0 | Math.ceil(t / 26);
        var r = t % 26;
        this._expand(e), r > 0 && e--;
        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
      }, o.prototype.notn = function(t) {
        return this.clone().inotn(t);
      }, o.prototype.setn = function(t, e) {
        n('number' == typeof t && t >= 0);
        var r = t / 26 | 0;
        var i = t % 26;
        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
      }, o.prototype.iadd = function(t) {
        var e;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
        var r, n;
        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
        var i = 0;
        for (var o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        for (;0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (;o < r.length; o++) this.words[o] = r.words[o];
        return this;
      }, o.prototype.add = function(t) {
        var e;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, 
        e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
      }, o.prototype.isub = function(t) {
        if (0 !== t.negative) {
          t.negative = 0;
          var e = this.iadd(t);
          return t.negative = 1, e._normSign();
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var r = this.cmp(t);
        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var n, i;
        r > 0 ? (n = this, i = t) : (n = t, i = this);
        var o = 0;
        for (var a = 0; a < i.length; a++) o = (e = (0 | n.words[a]) - (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        for (;0 !== o && a < n.length; a++) o = (e = (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        if (0 === o && a < n.length && n !== this) for (;a < n.length; a++) this.words[a] = n.words[a];
        return this.length = Math.max(this.length, a), n !== this && (this.negative = 1), this.strip();
      }, o.prototype.sub = function(t) {
        return this.clone().isub(t);
      };
      var d = function(t, e, r) {
        var n = t.words;
        var i = e.words;
        var o = r.words;
        var a = 0;
        var s;
        var u;
        var h;
        var l = 0 | n[0];
        var c = 8191 & l;
        var f = l >>> 13;
        var d = 0 | n[1];
        var p = 8191 & d;
        var m = d >>> 13;
        var v = 0 | n[2];
        var g = 8191 & v;
        var y = v >>> 13;
        var w = 0 | n[3];
        var _ = 8191 & w;
        var M = w >>> 13;
        var b = 0 | n[4];
        var k = 8191 & b;
        var x = b >>> 13;
        var A = 0 | n[5];
        var E = 8191 & A;
        var S = A >>> 13;
        var T = 0 | n[6];
        var C = 8191 & T;
        var R = T >>> 13;
        var B = 0 | n[7];
        var L = 8191 & B;
        var P = B >>> 13;
        var I = 0 | n[8];
        var O = 8191 & I;
        var N = I >>> 13;
        var U = 0 | n[9];
        var j = 8191 & U;
        var q = U >>> 13;
        var K = 0 | i[0];
        var H = 8191 & K;
        var F = K >>> 13;
        var z = 0 | i[1];
        var D = 8191 & z;
        var Z = z >>> 13;
        var W = 0 | i[2];
        var V = 8191 & W;
        var $ = W >>> 13;
        var G = 0 | i[3];
        var Y = 8191 & G;
        var J = G >>> 13;
        var Q = 0 | i[4];
        var X = 8191 & Q;
        var tt = Q >>> 13;
        var et = 0 | i[5];
        var rt = 8191 & et;
        var nt = et >>> 13;
        var it = 0 | i[6];
        var ot = 8191 & it;
        var at = it >>> 13;
        var st = 0 | i[7];
        var ut = 8191 & st;
        var ht = st >>> 13;
        var lt = 0 | i[8];
        var ct = 8191 & lt;
        var ft = lt >>> 13;
        var dt = 0 | i[9];
        var pt = 8191 & dt;
        var mt = dt >>> 13;
        r.negative = t.negative ^ e.negative, r.length = 19;
        var vt = (a + (s = Math.imul(c, H)) | 0) + ((8191 & (u = (u = Math.imul(c, F)) + Math.imul(f, H) | 0)) << 13) | 0;
        a = ((h = Math.imul(f, F)) + (u >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, s = Math.imul(p, H), u = (u = Math.imul(p, F)) + Math.imul(m, H) | 0, 
        h = Math.imul(m, F);
        var gt = (a + (s = s + Math.imul(c, D) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, Z) | 0) + Math.imul(f, D) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, Z) | 0) + (u >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, s = Math.imul(g, H), u = (u = Math.imul(g, F)) + Math.imul(y, H) | 0, 
        h = Math.imul(y, F), s = s + Math.imul(p, D) | 0, u = (u = u + Math.imul(p, Z) | 0) + Math.imul(m, D) | 0, h = h + Math.imul(m, Z) | 0;
        var yt = (a + (s = s + Math.imul(c, V) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, $) | 0) + Math.imul(f, V) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, $) | 0) + (u >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, s = Math.imul(_, H), u = (u = Math.imul(_, F)) + Math.imul(M, H) | 0, 
        h = Math.imul(M, F), s = s + Math.imul(g, D) | 0, u = (u = u + Math.imul(g, Z) | 0) + Math.imul(y, D) | 0, h = h + Math.imul(y, Z) | 0, 
        s = s + Math.imul(p, V) | 0, u = (u = u + Math.imul(p, $) | 0) + Math.imul(m, V) | 0, h = h + Math.imul(m, $) | 0;
        var wt = (a + (s = s + Math.imul(c, Y) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, J) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, J) | 0) + (u >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, s = Math.imul(k, H), u = (u = Math.imul(k, F)) + Math.imul(x, H) | 0, 
        h = Math.imul(x, F), s = s + Math.imul(_, D) | 0, u = (u = u + Math.imul(_, Z) | 0) + Math.imul(M, D) | 0, h = h + Math.imul(M, Z) | 0, 
        s = s + Math.imul(g, V) | 0, u = (u = u + Math.imul(g, $) | 0) + Math.imul(y, V) | 0, h = h + Math.imul(y, $) | 0, s = s + Math.imul(p, Y) | 0, 
        u = (u = u + Math.imul(p, J) | 0) + Math.imul(m, Y) | 0, h = h + Math.imul(m, J) | 0;
        var _t = (a + (s = s + Math.imul(c, X) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, tt) | 0) + (u >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, s = Math.imul(E, H), u = (u = Math.imul(E, F)) + Math.imul(S, H) | 0, 
        h = Math.imul(S, F), s = s + Math.imul(k, D) | 0, u = (u = u + Math.imul(k, Z) | 0) + Math.imul(x, D) | 0, h = h + Math.imul(x, Z) | 0, 
        s = s + Math.imul(_, V) | 0, u = (u = u + Math.imul(_, $) | 0) + Math.imul(M, V) | 0, h = h + Math.imul(M, $) | 0, s = s + Math.imul(g, Y) | 0, 
        u = (u = u + Math.imul(g, J) | 0) + Math.imul(y, Y) | 0, h = h + Math.imul(y, J) | 0, s = s + Math.imul(p, X) | 0, u = (u = u + Math.imul(p, tt) | 0) + Math.imul(m, X) | 0, 
        h = h + Math.imul(m, tt) | 0;
        var Mt = (a + (s = s + Math.imul(c, rt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, nt) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, nt) | 0) + (u >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, s = Math.imul(C, H), u = (u = Math.imul(C, F)) + Math.imul(R, H) | 0, 
        h = Math.imul(R, F), s = s + Math.imul(E, D) | 0, u = (u = u + Math.imul(E, Z) | 0) + Math.imul(S, D) | 0, h = h + Math.imul(S, Z) | 0, 
        s = s + Math.imul(k, V) | 0, u = (u = u + Math.imul(k, $) | 0) + Math.imul(x, V) | 0, h = h + Math.imul(x, $) | 0, s = s + Math.imul(_, Y) | 0, 
        u = (u = u + Math.imul(_, J) | 0) + Math.imul(M, Y) | 0, h = h + Math.imul(M, J) | 0, s = s + Math.imul(g, X) | 0, u = (u = u + Math.imul(g, tt) | 0) + Math.imul(y, X) | 0, 
        h = h + Math.imul(y, tt) | 0, s = s + Math.imul(p, rt) | 0, u = (u = u + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, h = h + Math.imul(m, nt) | 0;
        var bt = (a + (s = s + Math.imul(c, ot) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, at) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, at) | 0) + (u >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, s = Math.imul(L, H), u = (u = Math.imul(L, F)) + Math.imul(P, H) | 0, 
        h = Math.imul(P, F), s = s + Math.imul(C, D) | 0, u = (u = u + Math.imul(C, Z) | 0) + Math.imul(R, D) | 0, h = h + Math.imul(R, Z) | 0, 
        s = s + Math.imul(E, V) | 0, u = (u = u + Math.imul(E, $) | 0) + Math.imul(S, V) | 0, h = h + Math.imul(S, $) | 0, s = s + Math.imul(k, Y) | 0, 
        u = (u = u + Math.imul(k, J) | 0) + Math.imul(x, Y) | 0, h = h + Math.imul(x, J) | 0, s = s + Math.imul(_, X) | 0, u = (u = u + Math.imul(_, tt) | 0) + Math.imul(M, X) | 0, 
        h = h + Math.imul(M, tt) | 0, s = s + Math.imul(g, rt) | 0, u = (u = u + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, h = h + Math.imul(y, nt) | 0, 
        s = s + Math.imul(p, ot) | 0, u = (u = u + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, h = h + Math.imul(m, at) | 0;
        var kt = (a + (s = s + Math.imul(c, ut) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ht) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ht) | 0) + (u >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, s = Math.imul(O, H), u = (u = Math.imul(O, F)) + Math.imul(N, H) | 0, 
        h = Math.imul(N, F), s = s + Math.imul(L, D) | 0, u = (u = u + Math.imul(L, Z) | 0) + Math.imul(P, D) | 0, h = h + Math.imul(P, Z) | 0, 
        s = s + Math.imul(C, V) | 0, u = (u = u + Math.imul(C, $) | 0) + Math.imul(R, V) | 0, h = h + Math.imul(R, $) | 0, s = s + Math.imul(E, Y) | 0, 
        u = (u = u + Math.imul(E, J) | 0) + Math.imul(S, Y) | 0, h = h + Math.imul(S, J) | 0, s = s + Math.imul(k, X) | 0, u = (u = u + Math.imul(k, tt) | 0) + Math.imul(x, X) | 0, 
        h = h + Math.imul(x, tt) | 0, s = s + Math.imul(_, rt) | 0, u = (u = u + Math.imul(_, nt) | 0) + Math.imul(M, rt) | 0, h = h + Math.imul(M, nt) | 0, 
        s = s + Math.imul(g, ot) | 0, u = (u = u + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, h = h + Math.imul(y, at) | 0, s = s + Math.imul(p, ut) | 0, 
        u = (u = u + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, h = h + Math.imul(m, ht) | 0;
        var xt = (a + (s = s + Math.imul(c, ct) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ft) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ft) | 0) + (u >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, s = Math.imul(j, H), u = (u = Math.imul(j, F)) + Math.imul(q, H) | 0, 
        h = Math.imul(q, F), s = s + Math.imul(O, D) | 0, u = (u = u + Math.imul(O, Z) | 0) + Math.imul(N, D) | 0, h = h + Math.imul(N, Z) | 0, 
        s = s + Math.imul(L, V) | 0, u = (u = u + Math.imul(L, $) | 0) + Math.imul(P, V) | 0, h = h + Math.imul(P, $) | 0, s = s + Math.imul(C, Y) | 0, 
        u = (u = u + Math.imul(C, J) | 0) + Math.imul(R, Y) | 0, h = h + Math.imul(R, J) | 0, s = s + Math.imul(E, X) | 0, u = (u = u + Math.imul(E, tt) | 0) + Math.imul(S, X) | 0, 
        h = h + Math.imul(S, tt) | 0, s = s + Math.imul(k, rt) | 0, u = (u = u + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0, h = h + Math.imul(x, nt) | 0, 
        s = s + Math.imul(_, ot) | 0, u = (u = u + Math.imul(_, at) | 0) + Math.imul(M, ot) | 0, h = h + Math.imul(M, at) | 0, s = s + Math.imul(g, ut) | 0, 
        u = (u = u + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, h = h + Math.imul(y, ht) | 0, s = s + Math.imul(p, ct) | 0, u = (u = u + Math.imul(p, ft) | 0) + Math.imul(m, ct) | 0, 
        h = h + Math.imul(m, ft) | 0;
        var At = (a + (s = s + Math.imul(c, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, mt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, mt) | 0) + (u >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, s = Math.imul(j, D), u = (u = Math.imul(j, Z)) + Math.imul(q, D) | 0, 
        h = Math.imul(q, Z), s = s + Math.imul(O, V) | 0, u = (u = u + Math.imul(O, $) | 0) + Math.imul(N, V) | 0, h = h + Math.imul(N, $) | 0, 
        s = s + Math.imul(L, Y) | 0, u = (u = u + Math.imul(L, J) | 0) + Math.imul(P, Y) | 0, h = h + Math.imul(P, J) | 0, s = s + Math.imul(C, X) | 0, 
        u = (u = u + Math.imul(C, tt) | 0) + Math.imul(R, X) | 0, h = h + Math.imul(R, tt) | 0, s = s + Math.imul(E, rt) | 0, u = (u = u + Math.imul(E, nt) | 0) + Math.imul(S, rt) | 0, 
        h = h + Math.imul(S, nt) | 0, s = s + Math.imul(k, ot) | 0, u = (u = u + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0, h = h + Math.imul(x, at) | 0, 
        s = s + Math.imul(_, ut) | 0, u = (u = u + Math.imul(_, ht) | 0) + Math.imul(M, ut) | 0, h = h + Math.imul(M, ht) | 0, s = s + Math.imul(g, ct) | 0, 
        u = (u = u + Math.imul(g, ft) | 0) + Math.imul(y, ct) | 0, h = h + Math.imul(y, ft) | 0;
        var Et = (a + (s = s + Math.imul(p, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(m, mt) | 0) + (u >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, s = Math.imul(j, V), u = (u = Math.imul(j, $)) + Math.imul(q, V) | 0, 
        h = Math.imul(q, $), s = s + Math.imul(O, Y) | 0, u = (u = u + Math.imul(O, J) | 0) + Math.imul(N, Y) | 0, h = h + Math.imul(N, J) | 0, 
        s = s + Math.imul(L, X) | 0, u = (u = u + Math.imul(L, tt) | 0) + Math.imul(P, X) | 0, h = h + Math.imul(P, tt) | 0, s = s + Math.imul(C, rt) | 0, 
        u = (u = u + Math.imul(C, nt) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, nt) | 0, s = s + Math.imul(E, ot) | 0, u = (u = u + Math.imul(E, at) | 0) + Math.imul(S, ot) | 0, 
        h = h + Math.imul(S, at) | 0, s = s + Math.imul(k, ut) | 0, u = (u = u + Math.imul(k, ht) | 0) + Math.imul(x, ut) | 0, h = h + Math.imul(x, ht) | 0, 
        s = s + Math.imul(_, ct) | 0, u = (u = u + Math.imul(_, ft) | 0) + Math.imul(M, ct) | 0, h = h + Math.imul(M, ft) | 0;
        var St = (a + (s = s + Math.imul(g, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(y, mt) | 0) + (u >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, s = Math.imul(j, Y), u = (u = Math.imul(j, J)) + Math.imul(q, Y) | 0, 
        h = Math.imul(q, J), s = s + Math.imul(O, X) | 0, u = (u = u + Math.imul(O, tt) | 0) + Math.imul(N, X) | 0, h = h + Math.imul(N, tt) | 0, 
        s = s + Math.imul(L, rt) | 0, u = (u = u + Math.imul(L, nt) | 0) + Math.imul(P, rt) | 0, h = h + Math.imul(P, nt) | 0, s = s + Math.imul(C, ot) | 0, 
        u = (u = u + Math.imul(C, at) | 0) + Math.imul(R, ot) | 0, h = h + Math.imul(R, at) | 0, s = s + Math.imul(E, ut) | 0, u = (u = u + Math.imul(E, ht) | 0) + Math.imul(S, ut) | 0, 
        h = h + Math.imul(S, ht) | 0, s = s + Math.imul(k, ct) | 0, u = (u = u + Math.imul(k, ft) | 0) + Math.imul(x, ct) | 0, h = h + Math.imul(x, ft) | 0;
        var Tt = (a + (s = s + Math.imul(_, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(_, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(M, mt) | 0) + (u >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, s = Math.imul(j, X), u = (u = Math.imul(j, tt)) + Math.imul(q, X) | 0, 
        h = Math.imul(q, tt), s = s + Math.imul(O, rt) | 0, u = (u = u + Math.imul(O, nt) | 0) + Math.imul(N, rt) | 0, h = h + Math.imul(N, nt) | 0, 
        s = s + Math.imul(L, ot) | 0, u = (u = u + Math.imul(L, at) | 0) + Math.imul(P, ot) | 0, h = h + Math.imul(P, at) | 0, s = s + Math.imul(C, ut) | 0, 
        u = (u = u + Math.imul(C, ht) | 0) + Math.imul(R, ut) | 0, h = h + Math.imul(R, ht) | 0, s = s + Math.imul(E, ct) | 0, u = (u = u + Math.imul(E, ft) | 0) + Math.imul(S, ct) | 0, 
        h = h + Math.imul(S, ft) | 0;
        var Ct = (a + (s = s + Math.imul(k, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(x, mt) | 0) + (u >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, s = Math.imul(j, rt), u = (u = Math.imul(j, nt)) + Math.imul(q, rt) | 0, 
        h = Math.imul(q, nt), s = s + Math.imul(O, ot) | 0, u = (u = u + Math.imul(O, at) | 0) + Math.imul(N, ot) | 0, h = h + Math.imul(N, at) | 0, 
        s = s + Math.imul(L, ut) | 0, u = (u = u + Math.imul(L, ht) | 0) + Math.imul(P, ut) | 0, h = h + Math.imul(P, ht) | 0, s = s + Math.imul(C, ct) | 0, 
        u = (u = u + Math.imul(C, ft) | 0) + Math.imul(R, ct) | 0, h = h + Math.imul(R, ft) | 0;
        var Rt = (a + (s = s + Math.imul(E, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(E, mt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(S, mt) | 0) + (u >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, s = Math.imul(j, ot), u = (u = Math.imul(j, at)) + Math.imul(q, ot) | 0, 
        h = Math.imul(q, at), s = s + Math.imul(O, ut) | 0, u = (u = u + Math.imul(O, ht) | 0) + Math.imul(N, ut) | 0, h = h + Math.imul(N, ht) | 0, 
        s = s + Math.imul(L, ct) | 0, u = (u = u + Math.imul(L, ft) | 0) + Math.imul(P, ct) | 0, h = h + Math.imul(P, ft) | 0;
        var Bt = (a + (s = s + Math.imul(C, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(C, mt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(R, mt) | 0) + (u >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, s = Math.imul(j, ut), u = (u = Math.imul(j, ht)) + Math.imul(q, ut) | 0, 
        h = Math.imul(q, ht), s = s + Math.imul(O, ct) | 0, u = (u = u + Math.imul(O, ft) | 0) + Math.imul(N, ct) | 0, h = h + Math.imul(N, ft) | 0;
        var Lt = (a + (s = s + Math.imul(L, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(L, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(P, mt) | 0) + (u >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, s = Math.imul(j, ct), u = (u = Math.imul(j, ft)) + Math.imul(q, ct) | 0, 
        h = Math.imul(q, ft);
        var Pt = (a + (s = s + Math.imul(O, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(O, mt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(N, mt) | 0) + (u >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
        var It = (a + (s = Math.imul(j, pt)) | 0) + ((8191 & (u = (u = Math.imul(j, mt)) + Math.imul(q, pt) | 0)) << 13) | 0;
        return a = ((h = Math.imul(q, mt)) + (u >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, o[0] = vt, o[1] = gt, o[2] = yt, 
        o[3] = wt, o[4] = _t, o[5] = Mt, o[6] = bt, o[7] = kt, o[8] = xt, o[9] = At, o[10] = Et, o[11] = St, o[12] = Tt, o[13] = Ct, 
        o[14] = Rt, o[15] = Bt, o[16] = Lt, o[17] = Pt, o[18] = It, 0 !== a && (o[19] = a, r.length++), r;
      };
      function p(t, e, r) {
        return (new m).mulp(t, e, r);
      }
      function m(t, e) {
        this.x = t, this.y = e;
      }
      Math.imul || (d = f), o.prototype.mulTo = function(t, e) {
        var r;
        var n = this.length + t.length;
        return r = 10 === this.length && 10 === t.length ? d(this, t, e) : n < 63 ? f(this, t, e) : n < 1024 ? function(t, e, r) {
          r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
          var n = 0;
          var i = 0;
          for (var o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            var s = 67108863 & n;
            var u = Math.min(o, e.length - 1);
            for (var h = Math.max(0, o - t.length + 1); h <= u; h++) {
              var l = o - h;
              var c = (0 | t.words[l]) * (0 | e.words[h]);
              var f = 67108863 & c;
              s = 67108863 & (f = f + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, a &= 67108863;
            }
            r.words[o] = s, n = a, a = i;
          }
          return 0 !== n ? r.words[o] = n : r.length--, r.strip();
        }(this, t, e) : p(this, t, e), r;
      }, m.prototype.makeRBT = function(t) {
        var e = new Array(t);
        var r = o.prototype._countBits(t) - 1;
        for (var n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
        return e;
      }, m.prototype.revBin = function(t, e, r) {
        if (0 === t || t === r - 1) return t;
        var n = 0;
        for (var i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
        return n;
      }, m.prototype.permute = function(t, e, r, n, i, o) {
        for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]];
      }, m.prototype.transform = function(t, e, r, n, i, o) {
        this.permute(o, t, e, r, n, i);
        for (var a = 1; a < i; a <<= 1) {
          var s = a << 1;
          var u = Math.cos(2 * Math.PI / s);
          var h = Math.sin(2 * Math.PI / s);
          for (var l = 0; l < i; l += s) {
            var c = u;
            var f = h;
            for (var d = 0; d < a; d++) {
              var p = r[l + d];
              var m = n[l + d];
              var v = r[l + d + a];
              var g = n[l + d + a];
              var y = c * v - f * g;
              g = c * g + f * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + a] = p - v, n[l + d + a] = m - g, d !== s && (y = u * c - h * f, 
              f = u * f + h * c, c = y);
            }
          }
        }
      }, m.prototype.guessLen13b = function(t, e) {
        var r = 1 | Math.max(e, t);
        var n = 1 & r;
        var i = 0;
        for (r = r / 2 | 0; r; r >>>= 1) i++;
        return 1 << i + 1 + n;
      }, m.prototype.conjugate = function(t, e, r) {
        if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
          var i = t[n];
          t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
        }
      }, m.prototype.normalize13b = function(t, e) {
        var r = 0;
        for (var n = 0; n < e / 2; n++) {
          var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
          t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
        }
        return t;
      }, m.prototype.convert13b = function(t, e, r, i) {
        var o = 0;
        for (var a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
        for (a = 2 * e; a < i; ++a) r[a] = 0;
        n(0 === o), n(0 == (-8192 & o));
      }, m.prototype.stub = function(t) {
        var e = new Array(t);
        for (var r = 0; r < t; r++) e[r] = 0;
        return e;
      }, m.prototype.mulp = function(t, e, r) {
        var n = 2 * this.guessLen13b(t.length, e.length);
        var i = this.makeRBT(n);
        var o = this.stub(n);
        var a = new Array(n);
        var s = new Array(n);
        var u = new Array(n);
        var h = new Array(n);
        var l = new Array(n);
        var c = new Array(n);
        var f = r.words;
        f.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, h, n), this.transform(a, o, s, u, n, i), 
        this.transform(h, o, l, c, n, i);
        for (var d = 0; d < n; d++) {
          var p = s[d] * l[d] - u[d] * c[d];
          u[d] = s[d] * c[d] + u[d] * l[d], s[d] = p;
        }
        return this.conjugate(s, u, n), this.transform(s, u, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = t.negative ^ e.negative, 
        r.length = t.length + e.length, r.strip();
      }, o.prototype.mul = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), this.mulTo(t, e);
      }, o.prototype.mulf = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), p(this, t, e);
      }, o.prototype.imul = function(t) {
        return this.clone().mulTo(t, this);
      }, o.prototype.imuln = function(t) {
        n('number' == typeof t), n(t < 67108864);
        var e = 0;
        for (var r = 0; r < this.length; r++) {
          var i = (0 | this.words[r]) * t;
          var o = (67108863 & i) + (67108863 & e);
          e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o;
        }
        return 0 !== e && (this.words[r] = e, this.length++), this;
      }, o.prototype.muln = function(t) {
        return this.clone().imuln(t);
      }, o.prototype.sqr = function() {
        return this.mul(this);
      }, o.prototype.isqr = function() {
        return this.imul(this.clone());
      }, o.prototype.pow = function(t) {
        var e = function(t) {
          var e = new Array(t.bitLength());
          for (var r = 0; r < e.length; r++) {
            var n = r / 26 | 0;
            var i = r % 26;
            e[r] = (t.words[n] & 1 << i) >>> i;
          }
          return e;
        }(t);
        if (0 === e.length) return new o(1);
        var r = this;
        for (var n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
        if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
        return r;
      }, o.prototype.iushln = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 67108863 >>> 26 - e << 26 - e;
        var o;
        if (0 !== e) {
          var a = 0;
          for (o = 0; o < this.length; o++) {
            var s = this.words[o] & i;
            var u = (0 | this.words[o]) - s << e;
            this.words[o] = u | a, a = s >>> 26 - e;
          }
          a && (this.words[o] = a, this.length++);
        }
        if (0 !== r) {
          for (o = this.length - 1; o >= 0; o--) this.words[o + r] = this.words[o];
          for (o = 0; o < r; o++) this.words[o] = 0;
          this.length += r;
        }
        return this.strip();
      }, o.prototype.ishln = function(t) {
        return n(0 === this.negative), this.iushln(t);
      }, o.prototype.iushrn = function(t, e, r) {
        var i;
        n('number' == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
        var o = t % 26;
        var a = Math.min((t - o) / 26, this.length);
        var s = 67108863 ^ 67108863 >>> o << o;
        var u = r;
        if (i -= a, i = Math.max(0, i), u) {
          for (var h = 0; h < a; h++) u.words[h] = this.words[h];
          u.length = a;
        }
        if (0 === a) ; else if (this.length > a) for (this.length -= a, h = 0; h < this.length; h++) this.words[h] = this.words[h + a]; else this.words[0] = 0, 
        this.length = 1;
        var l = 0;
        for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
          var c = 0 | this.words[h];
          this.words[h] = l << 26 - o | c >>> o, l = c & s;
        }
        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
      }, o.prototype.ishrn = function(t, e, r) {
        return n(0 === this.negative), this.iushrn(t, e, r);
      }, o.prototype.shln = function(t) {
        return this.clone().ishln(t);
      }, o.prototype.ushln = function(t) {
        return this.clone().iushln(t);
      }, o.prototype.shrn = function(t) {
        return this.clone().ishrn(t);
      }, o.prototype.ushrn = function(t) {
        return this.clone().iushrn(t);
      }, o.prototype.testn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        return !(this.length <= r) && !!(this.words[r] & i);
      }, o.prototype.imaskn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        if (n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r) return this;
        if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
          var i = 67108863 ^ 67108863 >>> e << e;
          this.words[this.length - 1] &= i;
        }
        return this.strip();
      }, o.prototype.maskn = function(t) {
        return this.clone().imaskn(t);
      }, o.prototype.iaddn = function(t) {
        return n('number' == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), 
        this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
      }, o.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
        return this.length = Math.max(this.length, e + 1), this;
      }, o.prototype.isubn = function(t) {
        if (n('number' == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, 
        this.words[e + 1] -= 1;
        return this.strip();
      }, o.prototype.addn = function(t) {
        return this.clone().iaddn(t);
      }, o.prototype.subn = function(t) {
        return this.clone().isubn(t);
      }, o.prototype.iabs = function() {
        return this.negative = 0, this;
      }, o.prototype.abs = function() {
        return this.clone().iabs();
      }, o.prototype._ishlnsubmul = function(t, e, r) {
        var i = t.length + r;
        var o;
        var a;
        this._expand(i);
        var s = 0;
        for (o = 0; o < t.length; o++) {
          a = (0 | this.words[o + r]) + s;
          var u = (0 | t.words[o]) * e;
          s = ((a -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[o + r] = 67108863 & a;
        }
        for (;o < this.length - r; o++) s = (a = (0 | this.words[o + r]) + s) >> 26, this.words[o + r] = 67108863 & a;
        if (0 === s) return this.strip();
        for (n(-1 === s), s = 0, o = 0; o < this.length; o++) s = (a = -(0 | this.words[o]) + s) >> 26, this.words[o] = 67108863 & a;
        return this.negative = 1, this.strip();
      }, o.prototype._wordDiv = function(t, e) {
        var r = (this.length, t.length);
        var n = this.clone();
        var i = t;
        var a = 0 | i.words[i.length - 1];
        0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
        var s = n.length - i.length;
        var u;
        if ('mod' !== e) {
          (u = new o(null)).length = s + 1, u.words = new Array(u.length);
          for (var h = 0; h < u.length; h++) u.words[h] = 0;
        }
        var l = n.clone()._ishlnsubmul(i, 1, s);
        0 === l.negative && (n = l, u && (u.words[s] = 1));
        for (var c = s - 1; c >= 0; c--) {
          var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
          for (f = Math.min(f / a | 0, 67108863), n._ishlnsubmul(i, f, c); 0 !== n.negative; ) f--, n.negative = 0, n._ishlnsubmul(i, 1, c), 
          n.isZero() || (n.negative ^= 1);
          u && (u.words[c] = f);
        }
        return u && u.strip(), n.strip(), 'div' !== e && 0 !== r && n.iushrn(r), {
          div: u || null,
          mod: n
        };
      }, o.prototype.divmod = function(t, e, r) {
        return n(!t.isZero()), this.isZero() ? {
          div: new o(0),
          mod: new o(0)
        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), 'mod' !== e && (i = s.div.neg()), 'div' !== e && (a = s.mod.neg(), 
        r && 0 !== a.negative && a.iadd(t)), {
          div: i,
          mod: a
        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), 'mod' !== e && (i = s.div.neg()), {
          div: i,
          mod: s.mod
        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), 'div' !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), 
        {
          div: s.div,
          mod: a
        }) : t.length > this.length || this.cmp(t) < 0 ? {
          div: new o(0),
          mod: this
        } : 1 === t.length ? 'div' === e ? {
          div: this.divn(t.words[0]),
          mod: null
        } : 'mod' === e ? {
          div: null,
          mod: new o(this.modn(t.words[0]))
        } : {
          div: this.divn(t.words[0]),
          mod: new o(this.modn(t.words[0]))
        } : this._wordDiv(t, e);
        var i, a, s;
      }, o.prototype.div = function(t) {
        return this.divmod(t, 'div', !1).div;
      }, o.prototype.mod = function(t) {
        return this.divmod(t, 'mod', !1).mod;
      }, o.prototype.umod = function(t) {
        return this.divmod(t, 'mod', !0).mod;
      }, o.prototype.divRound = function(t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) return e.div;
        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod;
        var n = t.ushrn(1);
        var i = t.andln(1);
        var o = r.cmp(n);
        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
      }, o.prototype.modn = function(t) {
        n(t <= 67108863);
        var e = (1 << 26) % t;
        var r = 0;
        for (var i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
        return r;
      }, o.prototype.idivn = function(t) {
        n(t <= 67108863);
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var i = (0 | this.words[r]) + 67108864 * e;
          this.words[r] = i / t | 0, e = i % t;
        }
        return this.strip();
      }, o.prototype.divn = function(t) {
        return this.clone().idivn(t);
      }, o.prototype.egcd = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = new o(0);
        var u = new o(1);
        var h = 0;
        for (;e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++h;
        var l = r.clone();
        var c = e.clone();
        for (;!e.isZero(); ) {
          for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1) ;
          if (f > 0) for (e.iushrn(f); f-- > 0; ) (i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(c)), i.iushrn(1), a.iushrn(1);
          for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1) ;
          if (p > 0) for (r.iushrn(p); p-- > 0; ) (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(c)), s.iushrn(1), u.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a));
        }
        return {
          a: s,
          b: u,
          gcd: r.iushln(h)
        };
      }, o.prototype._invmp = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = r.clone();
        for (;e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
          for (var u = 0, h = 1; 0 == (e.words[0] & h) && u < 26; ++u, h <<= 1) ;
          if (u > 0) for (e.iushrn(u); u-- > 0; ) i.isOdd() && i.iadd(s), i.iushrn(1);
          for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1) ;
          if (l > 0) for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(s), a.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(a)) : (r.isub(e), a.isub(i));
        }
        var f;
        return (f = 0 === e.cmpn(1) ? i : a).cmpn(0) < 0 && f.iadd(t), f;
      }, o.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var e = this.clone();
        var r = t.clone();
        e.negative = 0, r.negative = 0;
        for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
        for (;;) {
          for (;e.isEven(); ) e.iushrn(1);
          for (;r.isEven(); ) r.iushrn(1);
          var i = e.cmp(r);
          if (i < 0) {
            var o = e;
            e = r, r = o;
          } else if (0 === i || 0 === r.cmpn(1)) break;
          e.isub(r);
        }
        return r.iushln(n);
      }, o.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t);
      }, o.prototype.isEven = function() {
        return 0 == (1 & this.words[0]);
      }, o.prototype.isOdd = function() {
        return 1 == (1 & this.words[0]);
      }, o.prototype.andln = function(t) {
        return this.words[0] & t;
      }, o.prototype.bincn = function(t) {
        n('number' == typeof t);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
        var o = i;
        for (var a = r; 0 !== o && a < this.length; a++) {
          var s = 0 | this.words[a];
          o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
        }
        return 0 !== o && (this.words[a] = o, this.length++), this;
      }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0];
      }, o.prototype.cmpn = function(t) {
        var e = t < 0;
        if (0 !== this.negative && !e) return -1;
        if (0 === this.negative && e) return 1;
        var r;
        if (this.strip(), this.length > 1) r = 1; else {
          e && (t = -t), n(t <= 67108863, 'Number is too big');
          var i = 0 | this.words[0];
          r = i === t ? 0 : i < t ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -r : r;
      }, o.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var e = this.ucmp(t);
        return 0 !== this.negative ? 0 | -e : e;
      }, o.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var n = 0 | this.words[r];
          var i = 0 | t.words[r];
          if (n !== i) {
            n < i ? e = -1 : n > i && (e = 1);
            break;
          }
        }
        return e;
      }, o.prototype.gtn = function(t) {
        return 1 === this.cmpn(t);
      }, o.prototype.gt = function(t) {
        return 1 === this.cmp(t);
      }, o.prototype.gten = function(t) {
        return this.cmpn(t) >= 0;
      }, o.prototype.gte = function(t) {
        return this.cmp(t) >= 0;
      }, o.prototype.ltn = function(t) {
        return -1 === this.cmpn(t);
      }, o.prototype.lt = function(t) {
        return -1 === this.cmp(t);
      }, o.prototype.lten = function(t) {
        return this.cmpn(t) <= 0;
      }, o.prototype.lte = function(t) {
        return this.cmp(t) <= 0;
      }, o.prototype.eqn = function(t) {
        return 0 === this.cmpn(t);
      }, o.prototype.eq = function(t) {
        return 0 === this.cmp(t);
      }, o.red = function(t) {
        return new b(t);
      }, o.prototype.toRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), n(0 === this.negative, 'red works only with positives'), t.convertTo(this)._forceRed(t);
      }, o.prototype.fromRed = function() {
        return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
      }, o.prototype._forceRed = function(t) {
        return this.red = t, this;
      }, o.prototype.forceRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), this._forceRed(t);
      }, o.prototype.redAdd = function(t) {
        return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t);
      }, o.prototype.redIAdd = function(t) {
        return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t);
      }, o.prototype.redSub = function(t) {
        return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t);
      }, o.prototype.redISub = function(t) {
        return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t);
      }, o.prototype.redShl = function(t) {
        return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t);
      }, o.prototype.redMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t);
      }, o.prototype.redIMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t);
      }, o.prototype.redSqr = function() {
        return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
      }, o.prototype.redISqr = function() {
        return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
      }, o.prototype.redSqrt = function() {
        return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
      }, o.prototype.redInvm = function() {
        return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
      }, o.prototype.redNeg = function() {
        return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
      }, o.prototype.redPow = function(t) {
        return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t);
      };
      var v = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function g(t, e) {
        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      function y() {
        g.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }
      function w() {
        g.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }
      function _() {
        g.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }
      function M() {
        g.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }
      function b(t) {
        if ('string' == typeof t) {
          var e = o._prime(t);
          this.m = e.p, this.prime = e;
        } else n(t.gtn(1), 'modulus must be greater than 1'), this.m = t, this.prime = null;
      }
      function k(t) {
        b.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), 
        this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), 
        this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      g.prototype._tmp = function() {
        var t = new o(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t;
      }, g.prototype.ireduce = function(t) {
        var e = t;
        var r;
        do {
          this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
        } while (r > this.n);
        var n = r < this.n ? -1 : e.ucmp(this.p);
        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : e.strip(), e;
      }, g.prototype.split = function(t, e) {
        t.iushrn(this.n, 0, e);
      }, g.prototype.imulK = function(t) {
        return t.imul(this.k);
      }, i(y, g), y.prototype.split = function(t, e) {
        var r = 4194303;
        var n = Math.min(t.length, 9);
        for (var i = 0; i < n; i++) e.words[i] = t.words[i];
        if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
        var o = t.words[9];
        for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
          var a = 0 | t.words[i];
          t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a;
        }
        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
      }, y.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 0 | t.words[r];
          e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
      }, i(w, g), i(_, g), i(M, g), M.prototype.imulK = function(t) {
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 19 * (0 | t.words[r]) + e;
          var i = 67108863 & n;
          n >>>= 26, t.words[r] = i, e = n;
        }
        return 0 !== e && (t.words[t.length++] = e), t;
      }, o._prime = function(t) {
        if (v[t]) return v[t];
        var e;
        if ('k256' === t) e = new y; else if ('p224' === t) e = new w; else if ('p192' === t) e = new _; else {
          if ('p25519' !== t) throw new Error('Unknown prime ' + t);
          e = new M;
        }
        return v[t] = e, e;
      }, b.prototype._verify1 = function(t) {
        n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers');
      }, b.prototype._verify2 = function(t, e) {
        n(0 == (t.negative | e.negative), 'red works only with positives'), n(t.red && t.red === e.red, 'red works only with red numbers');
      }, b.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
      }, b.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
      }, b.prototype.add = function(t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
      }, b.prototype.iadd = function(t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r;
      }, b.prototype.sub = function(t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
      }, b.prototype.isub = function(t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r;
      }, b.prototype.shl = function(t, e) {
        return this._verify1(t), this.imod(t.ushln(e));
      }, b.prototype.imul = function(t, e) {
        return this._verify2(t, e), this.imod(t.imul(e));
      }, b.prototype.mul = function(t, e) {
        return this._verify2(t, e), this.imod(t.mul(e));
      }, b.prototype.isqr = function(t) {
        return this.imul(t, t.clone());
      }, b.prototype.sqr = function(t) {
        return this.mul(t, t);
      }, b.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var e = this.m.andln(3);
        if (n(e % 2 == 1), 3 === e) {
          var r = this.m.add(new o(1)).iushrn(2);
          return this.pow(t, r);
        }
        var i = this.m.subn(1);
        var a = 0;
        for (;!i.isZero() && 0 === i.andln(1); ) a++, i.iushrn(1);
        n(!i.isZero());
        var s = new o(1).toRed(this);
        var u = s.redNeg();
        var h = this.m.subn(1).iushrn(1);
        var l = this.m.bitLength();
        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u); ) l.redIAdd(u);
        var c = this.pow(l, i);
        var f = this.pow(t, i.addn(1).iushrn(1));
        var d = this.pow(t, i);
        var p = a;
        for (;0 !== d.cmp(s); ) {
          var m = d;
          for (var v = 0; 0 !== m.cmp(s); v++) m = m.redSqr();
          n(v < p);
          var g = this.pow(c, new o(1).iushln(p - v - 1));
          f = f.redMul(g), c = g.redSqr(), d = d.redMul(c), p = v;
        }
        return f;
      }, b.prototype.invm = function(t) {
        var e = t._invmp(this.m);
        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
      }, b.prototype.pow = function(t, e) {
        if (e.isZero()) return new o(1).toRed(this);
        if (0 === e.cmpn(1)) return t.clone();
        var r = new Array(16);
        r[0] = new o(1).toRed(this), r[1] = t;
        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
        var i = r[0];
        var a = 0;
        var s = 0;
        var u = e.bitLength() % 26;
        for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
          var h = e.words[n];
          for (var l = u - 1; l >= 0; l--) {
            var c = h >> l & 1;
            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === l) && (i = this.mul(i, r[a]), 
            s = 0, a = 0)) : s = 0;
          }
          u = 26;
        }
        return i;
      }, b.prototype.convertTo = function(t) {
        var e = t.umod(this.m);
        return e === t ? e.clone() : e;
      }, b.prototype.convertFrom = function(t) {
        var e = t.clone();
        return e.red = null, e;
      }, o.mont = function(t) {
        return new k(t);
      }, i(k, b), k.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift));
      }, k.prototype.convertFrom = function(t) {
        var e = this.imod(t.mul(this.rinv));
        return e.red = null, e;
      }, k.prototype.imul = function(t, e) {
        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
        var r = t.imul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var o = i;
        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
      }, k.prototype.mul = function(t, e) {
        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
        var r = t.mul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var a = i;
        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
      }, k.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    }(t = r.nmd(t), this);
  },
  62873: (t, e) => {
    "use strict";
    function r(t) {
      let e;
      return "undefined" != typeof window && void 0 !== window[t] && (e = window[t]), e;
    }
    function n(t) {
      const e = r(t);
      if (!e) throw new Error(`${t} is not defined in Window`);
      return e;
    }
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getLocalStorage = e.getLocalStorageOrThrow = e.getCrypto = e.getCryptoOrThrow = e.getLocation = e.getLocationOrThrow = e.getNavigator = e.getNavigatorOrThrow = e.getDocument = e.getDocumentOrThrow = e.getFromWindowOrThrow = e.getFromWindow = void 0, 
    e.getFromWindow = r, e.getFromWindowOrThrow = n, e.getDocumentOrThrow = function() {
      return n("document");
    }, e.getDocument = function() {
      return r("document");
    }, e.getNavigatorOrThrow = function() {
      return n("navigator");
    }, e.getNavigator = function() {
      return r("navigator");
    }, e.getLocationOrThrow = function() {
      return n("location");
    }, e.getLocation = function() {
      return r("location");
    }, e.getCryptoOrThrow = function() {
      return n("crypto");
    }, e.getCrypto = function() {
      return r("crypto");
    }, e.getLocalStorageOrThrow = function() {
      return n("localStorage");
    }, e.getLocalStorage = function() {
      return r("localStorage");
    };
  },
  65755: (t, e, r) => {
    "use strict";
    e.D = void 0;
    const n = r(62873);
    e.D = function() {
      let t;
      let e;
      try {
        t = n.getDocumentOrThrow(), e = n.getLocationOrThrow();
      } catch (o) {
        return null;
      }
      function r(...e) {
        const r = t.getElementsByTagName("meta");
        for (let t = 0; t < r.length; t++) {
          const n = r[t];
          const i = [ "itemprop", "property", "name" ].map((t => n.getAttribute(t))).filter((t => !!t && e.includes(t)));
          if (i.length && i) {
            const t = n.getAttribute("content");
            if (t) return t;
          }
        }
        return "";
      }
      const i = function() {
        let e = r("name", "og:site_name", "og:title", "twitter:title");
        return e || (e = t.title), e;
      }();
      return {
        description: function() {
          return r("description", "og:description", "twitter:description", "keywords");
        }(),
        url: e.origin,
        icons: function() {
          const r = t.getElementsByTagName("link");
          const n = [];
          for (let t = 0; t < r.length; t++) {
            const i = r[t];
            const o = i.getAttribute("rel");
            if (o && o.toLowerCase().indexOf("icon") > -1) {
              const t = i.getAttribute("href");
              if (t) if (-1 === t.toLowerCase().indexOf("https:") && -1 === t.toLowerCase().indexOf("http:") && 0 !== t.indexOf("//")) {
                let r = e.protocol + "//" + e.host;
                if (0 === t.indexOf("/")) r += t; else {
                  const n = e.pathname.split("/");
                  n.pop();
                  r += n.join("/") + "/" + t;
                }
                n.push(r);
              } else if (0 === t.indexOf("//")) {
                const r = e.protocol + t;
                n.push(r);
              } else n.push(t);
            }
          }
          return n;
        }(),
        name: i
      };
    };
  },
  85078: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(70655);
    var i = r(2403);
    var o = function() {
      function t() {
        this._semaphore = new i.default(1);
      }
      return t.prototype.acquire = function() {
        return n.__awaiter(this, void 0, void 0, (function() {
          var t;
          return n.__generator(this, (function(e) {
            switch (e.label) {
             case 0:
              return [ 4, this._semaphore.acquire() ];

             case 1:
              return t = e.sent(), [ 2, t[1] ];
            }
          }));
        }));
      }, t.prototype.runExclusive = function(t) {
        return this._semaphore.runExclusive((function() {
          return t();
        }));
      }, t.prototype.isLocked = function() {
        return this._semaphore.isLocked();
      }, t.prototype.release = function() {
        this._semaphore.release();
      }, t;
    }();
    e.default = o;
  },
  2403: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = r(70655);
    var i = function() {
      function t(t) {
        if (this._maxConcurrency = t, this._queue = [], t <= 0) throw new Error('semaphore must be initialized to a positive value');
        this._value = t;
      }
      return t.prototype.acquire = function() {
        var t = this;
        var e = this.isLocked();
        var r = new Promise((function(e) {
          return t._queue.push(e);
        }));
        return e || this._dispatch(), r;
      }, t.prototype.runExclusive = function(t) {
        return n.__awaiter(this, void 0, void 0, (function() {
          var e, r, i;
          return n.__generator(this, (function(n) {
            switch (n.label) {
             case 0:
              return [ 4, this.acquire() ];

             case 1:
              e = n.sent(), r = e[0], i = e[1], n.label = 2;

             case 2:
              return n.trys.push([ 2, , 4, 5 ]), [ 4, t(r) ];

             case 3:
              return [ 2, n.sent() ];

             case 4:
              return i(), [ 7 ];

             case 5:
              return [ 2 ];
            }
          }));
        }));
      }, t.prototype.isLocked = function() {
        return this._value <= 0;
      }, t.prototype.release = function() {
        if (this._maxConcurrency > 1) throw new Error('this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead');
        if (this._currentReleaser) {
          var t = this._currentReleaser;
          this._currentReleaser = void 0, t();
        }
      }, t.prototype._dispatch = function() {
        var t = this;
        var e = this._queue.shift();
        if (e) {
          var r = !1;
          this._currentReleaser = function() {
            r || (r = !0, t._value++, t._dispatch());
          }, e([ this._value--, this._currentReleaser ]);
        }
      }, t;
    }();
    e.default = i;
  },
  48125: (t, e, r) => {
    "use strict";
    e.WU = void 0;
    var n = r(85078);
    Object.defineProperty(e, "WU", {
      enumerable: !0,
      get: function() {
        return n.default;
      }
    });
    var i = r(2403);
    var o = r(41960);
  },
  41960: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.withTimeout = void 0;
    var n = r(70655);
    e.withTimeout = function(t, e, r) {
      var i = this;
      return void 0 === r && (r = new Error('timeout')), {
        acquire: function() {
          return new Promise((function(o, a) {
            return n.__awaiter(i, void 0, void 0, (function() {
              var i, s;
              return n.__generator(this, (function(n) {
                switch (n.label) {
                 case 0:
                  return i = !1, setTimeout((function() {
                    i = !0, a(r);
                  }), e), [ 4, t.acquire() ];

                 case 1:
                  return s = n.sent(), i ? (Array.isArray(s) ? s[1] : s)() : o(s), [ 2 ];
                }
              }));
            }));
          }));
        },
        runExclusive: function(t) {
          return n.__awaiter(this, void 0, void 0, (function() {
            var e, r;
            return n.__generator(this, (function(n) {
              switch (n.label) {
               case 0:
                e = function() {}, n.label = 1;

               case 1:
                return n.trys.push([ 1, , 7, 8 ]), [ 4, this.acquire() ];

               case 2:
                return r = n.sent(), Array.isArray(r) ? (e = r[1], [ 4, t(r[0]) ]) : [ 3, 4 ];

               case 3:
                return [ 2, n.sent() ];

               case 4:
                return e = r, [ 4, t() ];

               case 5:
                return [ 2, n.sent() ];

               case 6:
                return [ 3, 8 ];

               case 7:
                return e(), [ 7 ];

               case 8:
                return [ 2 ];
              }
            }));
          }));
        },
        release: function() {
          t.release();
        },
        isLocked: function() {
          return t.isLocked();
        }
      };
    };
  },
  44409: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return (0, i.default)((function(e, r) {
        var i;
        try {
          i = t.apply(this, e);
        } catch (o) {
          return r(o);
        }
        (0, n.default)(i) && 'function' == typeof i.then ? i.then((function(t) {
          s(r, null, t);
        }), (function(t) {
          s(r, t.message ? t : new Error(t));
        })) : r(null, i);
      }));
    };
    var n = a(r(13218));
    var i = a(r(43519));
    var o = a(r(3111));
    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function s(t, e, r) {
      try {
        t(e, r);
      } catch (n) {
        (0, o.default)(u, n);
      }
    }
    function u(t) {
      throw t;
    }
    t.exports = e.default;
  },
  14338: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e, r, a) {
      (0, n.default)(e)(t, (0, i.default)((0, o.default)(r)), a);
    };
    var n = a(r(56954));
    var i = a(r(36529));
    var o = a(r(28993));
    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  71846: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e, r) {
      ((0, n.default)(t) ? f : d)(t, (0, l.default)(e), r);
    };
    var n = c(r(98612));
    var i = c(r(1605));
    var o = c(r(97388));
    var a = c(r(53875));
    var s = c(r(50308));
    var u = c(r(46979));
    var h = c(r(13362));
    var l = c(r(28993));
    function c(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function f(t, e, r) {
      r = (0, u.default)(r || s.default);
      var n = 0, o = 0, a = t.length;
      function l(t, e) {
        t ? r(t) : ++o !== a && e !== i.default || r(null);
      }
      for (0 === a && r(null); n < a; n++) e(t[n], n, (0, h.default)(l));
    }
    var d = (0, a.default)(o.default, Infinity);
    t.exports = e.default;
  },
  97388: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e, r, o) {
      (0, n.default)(e)(t, (0, i.default)(r), o);
    };
    var n = o(r(56954));
    var i = o(r(28993));
    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  94282: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = o(r(14338));
    var i = o(r(53875));
    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.default = (0, i.default)(n.default, 1), t.exports = e.default;
  },
  1605: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = {}, t.exports = e.default;
  },
  53875: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e) {
      return function(r, n, i) {
        return t(r, e, n, i);
      };
    }, t.exports = e.default;
  },
  68468: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return function(e, r, o) {
        return t(n.default, e, (0, i.default)(r), o);
      };
    };
    var n = o(r(71846));
    var i = o(r(28993));
    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  56954: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return function(e, r, u) {
        if (u = (0, i.default)(u || n.default), t <= 0 || !e) return u(null);
        var h = (0, o.default)(e);
        var l = !1;
        var c = 0;
        var f = !1;
        function d(t, e) {
          if (c -= 1, t) l = !0, u(t); else {
            if (e === s.default || l && c <= 0) return l = !0, u(null);
            f || p();
          }
        }
        function p() {
          for (f = !0; c < t && !l; ) {
            var e = h();
            if (null === e) return l = !0, void (c <= 0 && u(null));
            c += 1, r(e.value, e.key, (0, a.default)(d));
          }
          f = !1;
        }
        p();
      };
    };
    var n = u(r(50308));
    var i = u(r(46979));
    var o = u(r(9733));
    var a = u(r(13362));
    var s = u(r(1605));
    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  37818: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return r && t[r] && t[r]();
    };
    var r = 'function' == typeof Symbol && Symbol.iterator;
    t.exports = e.default;
  },
  43519: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return function() {
        var e = (0, n.default)(arguments);
        var r = e.pop();
        t.call(this, e, r);
      };
    };
    var n = function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }(r(63033));
    t.exports = e.default;
  },
  9733: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      if ((0, n.default)(t)) return function(t) {
        var e = -1;
        var r = t.length;
        return function() {
          return ++e < r ? {
            value: t[e],
            key: e
          } : null;
        };
      }(t);
      var e = (0, i.default)(t);
      return e ? function(t) {
        var e = -1;
        return function() {
          var r = t.next();
          return r.done ? null : (e++, {
            value: r.value,
            key: e
          });
        };
      }(e) : function(t) {
        var e = (0, o.default)(t);
        var r = -1;
        var n = e.length;
        return function() {
          var i = e[++r];
          return r < n ? {
            value: t[i],
            key: i
          } : null;
        };
      }(t);
    };
    var n = a(r(98612));
    var i = a(r(37818));
    var o = a(r(3674));
    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  47662: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e, r, o) {
      o = o || n.default, e = e || [];
      var a = [];
      var s = 0;
      var u = (0, i.default)(r);
      t(e, (function(t, e, r) {
        var n = s++;
        u(t, (function(t, e) {
          a[n] = e, r(t);
        }));
      }), (function(t) {
        o(t, a);
      }));
    };
    var n = o(r(50308));
    var i = o(r(28993));
    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  46979: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return function() {
        if (null !== t) {
          var e = t;
          t = null, e.apply(this, arguments);
        }
      };
    }, t.exports = e.default;
  },
  13362: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return function() {
        if (null === t) throw new Error("Callback was already called.");
        var e = t;
        t = null, e.apply(this, arguments);
      };
    }, t.exports = e.default;
  },
  73409: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e, r) {
      r = r || n.default;
      var s = (0, i.default)(e) ? [] : {};
      t(e, (function(t, e, r) {
        (0, a.default)(t)((function(t, n) {
          arguments.length > 2 && (n = (0, o.default)(arguments, 1)), s[e] = n, r(t);
        }));
      }), (function(t) {
        r(t, s);
      }));
    };
    var n = s(r(50308));
    var i = s(r(98612));
    var o = s(r(63033));
    var a = s(r(28993));
    function s(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  3111: (t, e, r) => {
    "use strict";
    var n = r(34155);
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.hasNextTick = e.hasSetImmediate = void 0, e.fallback = s, e.wrap = u;
    var i = function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }(r(63033));
    var o = e.hasSetImmediate = 'function' == typeof setImmediate && setImmediate;
    var a = e.hasNextTick = 'object' == typeof n && 'function' == typeof n.nextTick;
    function s(t) {
      setTimeout(t, 0);
    }
    function u(t) {
      return function(e) {
        var r = (0, i.default)(arguments, 1);
        t((function() {
          e.apply(null, r);
        }));
      };
    }
    var h;
    h = o ? setImmediate : a ? n.nextTick : s, e.default = u(h);
  },
  63033: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e) {
      e |= 0;
      var r = Math.max(t.length - e, 0);
      var n = Array(r);
      for (var i = 0; i < r; i++) n[i] = t[e + i];
      return n;
    }, t.exports = e.default;
  },
  36529: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t) {
      return function(e, r, n) {
        return t(e, n);
      };
    }, t.exports = e.default;
  },
  28993: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.isAsync = void 0;
    var n = function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }(r(44409));
    var i = 'function' == typeof Symbol;
    function o(t) {
      return i && 'AsyncFunction' === t[Symbol.toStringTag];
    }
    e.default = function(t) {
      return o(t) ? (0, n.default)(t) : t;
    }, e.isAsync = o;
  },
  94005: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var n = o(r(68468));
    var i = o(r(47662));
    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    e.default = (0, n.default)(i.default), t.exports = e.default;
  },
  80047: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e) {
      (0, i.default)(n.default, t, e);
    };
    var n = o(r(71846));
    var i = o(r(73409));
    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  7879: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = function(t, e) {
      if (e = (0, o.default)(e || i.default), !(0, n.default)(t)) return e(new Error('First argument to waterfall must be an array of functions'));
      if (!t.length) return e();
      var r = 0;
      function h(e) {
        var n = (0, u.default)(t[r++]);
        e.push((0, s.default)(l)), n.apply(null, e);
      }
      function l(n) {
        if (n || r === t.length) return e.apply(null, arguments);
        h((0, a.default)(arguments, 1));
      }
      h([]);
    };
    var n = h(r(1469));
    var i = h(r(50308));
    var o = h(r(46979));
    var a = h(r(63033));
    var s = h(r(13362));
    var u = h(r(28993));
    function h(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    t.exports = e.default;
  },
  20640: (t, e, r) => {
    "use strict";
    var n = r(25108);
    var i = r(11742);
    var o = {
      "text/plain": "Text",
      "text/html": "Url",
      default: "Text"
    };
    t.exports = function(t, e) {
      var r, a, s, u, h, l, c = !1;
      e || (e = {}), r = e.debug || !1;
      try {
        if (s = i(), u = document.createRange(), h = document.getSelection(), (l = document.createElement("span")).textContent = t, 
        l.style.all = "unset", l.style.position = "fixed", l.style.top = 0, l.style.clip = "rect(0, 0, 0, 0)", l.style.whiteSpace = "pre", 
        l.style.webkitUserSelect = "text", l.style.MozUserSelect = "text", l.style.msUserSelect = "text", l.style.userSelect = "text", 
        l.addEventListener("copy", (function(i) {
          if (i.stopPropagation(), e.format) if (i.preventDefault(), void 0 === i.clipboardData) {
            r && n.warn("unable to use e.clipboardData"), r && n.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var a = o[e.format] || o.default;
            window.clipboardData.setData(a, t);
          } else i.clipboardData.clearData(), i.clipboardData.setData(e.format, t);
          e.onCopy && (i.preventDefault(), e.onCopy(i.clipboardData));
        })), document.body.appendChild(l), u.selectNodeContents(l), h.addRange(u), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
        c = !0;
      } catch (f) {
        r && n.error("unable to copy using execCommand: ", f), r && n.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(e.format || "text", t), e.onCopy && e.onCopy(window.clipboardData), c = !0;
        } catch (f) {
          r && n.error("unable to copy using clipboardData: ", f), r && n.error("falling back to prompt"), a = function(t) {
            var e = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
            return t.replace(/#{\s*key\s*}/g, e);
          }("message" in e ? e.message : "Copy to clipboard: #{key}, Enter"), window.prompt(a, t);
        }
      } finally {
        h && ("function" == typeof h.removeRange ? h.removeRange(u) : h.removeAllRanges()), l && document.body.removeChild(l), s();
      }
      return c;
    };
  },
  65987: t => {
    "use strict";
    var e = {
      single_source_shortest_paths: function(t, r, n) {
        var i = {};
        var o = {};
        o[r] = 0;
        var a = e.PriorityQueue.make();
        var s, u, h, l, c, f, d;
        for (a.push(r, 0); !a.empty(); ) for (h in u = (s = a.pop()).value, l = s.cost, c = t[u] || {}) c.hasOwnProperty(h) && (f = l + c[h], 
        d = o[h], (void 0 === o[h] || d > f) && (o[h] = f, a.push(h, f), i[h] = u));
        if (void 0 !== n && void 0 === o[n]) {
          var p = [ 'Could not find a path from ', r, ' to ', n, '.' ].join('');
          throw new Error(p);
        }
        return i;
      },
      extract_shortest_path_from_predecessor_list: function(t, e) {
        var r = [];
        var n = e;
        for (;n; ) r.push(n), t[n], n = t[n];
        return r.reverse(), r;
      },
      find_path: function(t, r, n) {
        var i = e.single_source_shortest_paths(t, r, n);
        return e.extract_shortest_path_from_predecessor_list(i, n);
      },
      PriorityQueue: {
        make: function(t) {
          var r, n = e.PriorityQueue, i = {};
          for (r in t = t || {}, n) n.hasOwnProperty(r) && (i[r] = n[r]);
          return i.queue = [], i.sorter = t.sorter || n.default_sorter, i;
        },
        default_sorter: function(t, e) {
          return t.cost - e.cost;
        },
        push: function(t, e) {
          var r = {
            value: t,
            cost: e
          };
          this.queue.push(r), this.queue.sort(this.sorter);
        },
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return 0 === this.queue.length;
        }
      }
    };
    t.exports = e;
  },
  55850: (t, e, r) => {
    r(75682);
    r(12352);
    const n = r(37253);
    const i = (t, e) => t + e;
    const o = [ 'sync', 'latest' ];
    function a(t) {
      return Number.parseInt(t, 16);
    }
    t.exports = class extends n {
      constructor(t = {}) {
        super(), this._blockResetDuration = t.blockResetDuration || 2e4, this._blockResetTimeout, this._currentBlock = null, this._isRunning = !1, 
        this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), 
        this._setupInternalEvents();
      }
      isRunning() {
        return this._isRunning;
      }
      getCurrentBlock() {
        return this._currentBlock;
      }
      async getLatestBlock() {
        if (this._currentBlock) return this._currentBlock;
        return await new Promise((t => this.once('latest', t)));
      }
      removeAllListeners(t) {
        t ? super.removeAllListeners(t) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener();
      }
      _start() {}
      _end() {}
      _setupInternalEvents() {
        this.removeListener('newListener', this._onNewListener), this.removeListener('removeListener', this._onRemoveListener), 
        this.on('newListener', this._onNewListener), this.on('removeListener', this._onRemoveListener);
      }
      _onNewListener(t, e) {
        o.includes(t) && this._maybeStart();
      }
      _onRemoveListener(t, e) {
        this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
      }
      _maybeStart() {
        this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), this._start());
      }
      _maybeEnd() {
        this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), this._end());
      }
      _getBlockTrackerEventCount() {
        return o.map((t => this.listenerCount(t))).reduce(i);
      }
      _newPotentialLatest(t) {
        const e = this._currentBlock;
        e && a(t) <= a(e) || this._setCurrentBlock(t);
      }
      _setCurrentBlock(t) {
        const e = this._currentBlock;
        this._currentBlock = t, this.emit('latest', t), this.emit('sync', {
          oldBlock: e,
          newBlock: t
        });
      }
      _setupBlockResetTimeout() {
        this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), 
        this._blockResetTimeout.unref && this._blockResetTimeout.unref();
      }
      _cancelBlockResetTimeout() {
        clearTimeout(this._blockResetTimeout);
      }
      _resetCurrentBlock() {
        this._currentBlock = null;
      }
    };
  },
  75012: (t, e, r) => {
    var n = r(25108);
    const i = r(12352);
    const o = r(55850);
    function a(t, e) {
      return new Promise((r => {
        const n = setTimeout(r, t);
        n.unref && e && n.unref();
      }));
    }
    t.exports = class extends o {
      constructor(t = {}) {
        if (!t.provider) throw new Error('PollingBlockTracker - no provider specified.');
        const e = t.pollingInterval || 2e4;
        const r = t.retryTimeout || e / 10;
        const n = void 0 === t.keepEventLoopActive || t.keepEventLoopActive;
        const i = t.setSkipCacheFlag || !1;
        super(Object.assign({
          blockResetDuration: e
        }, t)), this._provider = t.provider, this._pollingInterval = e, this._retryTimeout = r, this._keepEventLoopActive = n, this._setSkipCacheFlag = i;
      }
      async checkForLatestBlock() {
        return await this._updateLatestBlock(), await this.getLatestBlock();
      }
      _start() {
        this._performSync().catch((t => this.emit('error', t)));
      }
      async _performSync() {
        for (;this._isRunning; ) try {
          await this._updateLatestBlock(), await a(this._pollingInterval, !this._keepEventLoopActive);
        } catch (t) {
          const r = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${t.stack}`);
          try {
            this.emit('error', r);
          } catch (e) {
            n.error(r);
          }
          await a(this._retryTimeout, !this._keepEventLoopActive);
        }
      }
      async _updateLatestBlock() {
        const t = await this._fetchLatestBlock();
        this._newPotentialLatest(t);
      }
      async _fetchLatestBlock() {
        const t = {
          jsonrpc: "2.0",
          id: 1,
          method: 'eth_blockNumber',
          params: []
        };
        this._setSkipCacheFlag && (t.skipCache = !0);
        const e = await i((e => this._provider.sendAsync(t, e)))();
        if (e.error) throw new Error(`PollingBlockTracker - encountered error fetching block:\n${e.error}`);
        return e.result;
      }
    };
  },
  23256: (t, e, r) => {
    const n = r(76622);
    t.exports = class extends n {
      constructor() {
        super(), this.allResults = [];
      }
      async update() {
        throw new Error('BaseFilterWithHistory - no update method specified');
      }
      addResults(t) {
        this.allResults = this.allResults.concat(t), super.addResults(t);
      }
      addInitialResults(t) {
        this.allResults = this.allResults.concat(t), super.addInitialResults(t);
      }
      getAllResults() {
        return this.allResults;
      }
    };
  },
  76622: (t, e, r) => {
    const n = r(19394).default;
    t.exports = class extends n {
      constructor() {
        super(), this.updates = [];
      }
      async initialize() {}
      async update() {
        throw new Error('BaseFilter - no update method specified');
      }
      addResults(t) {
        this.updates = this.updates.concat(t), t.forEach((t => this.emit('update', t)));
      }
      addInitialResults(t) {}
      getChangesAndClear() {
        const t = this.updates;
        return this.updates = [], t;
      }
    };
  },
  72785: (t, e, r) => {
    const n = r(76622);
    const i = r(40207);
    const {incrementHexInt: o} = r(98112);
    t.exports = class extends n {
      constructor({provider: t, params: e}) {
        super(), this.type = 'block', this.provider = t;
      }
      async update({oldBlock: t, newBlock: e}) {
        const r = e;
        const n = o(t);
        const a = (await i({
          provider: this.provider,
          fromBlock: n,
          toBlock: r
        })).map((t => t.hash));
        this.addResults(a);
      }
    };
  },
  40207: t => {
    function e(t) {
      return null == t ? t : Number.parseInt(t, 16);
    }
    function r(t) {
      if (null == t) return t;
      return '0x' + t.toString(16);
    }
    t.exports = async function({provider: t, fromBlock: n, toBlock: i}) {
      n || (n = i);
      const o = e(n);
      const a = e(i);
      const s = Array(a - o + 1).fill().map(((t, e) => o + e)).map(r);
      return await Promise.all(s.map((e => function(t, e, r) {
        return new Promise(((n, i) => {
          t.sendAsync({
            id: 1,
            jsonrpc: '2.0',
            method: e,
            params: r
          }, ((t, e) => {
            if (t) return i(t);
            n(e.result);
          }));
        }));
      }(t, 'eth_getBlockByNumber', [ e, !1 ]))));
    };
  },
  98112: t => {
    function e(t) {
      return t.sort(((t, e) => 'latest' === t || 'earliest' === e ? 1 : 'latest' === e || 'earliest' === t ? -1 : r(t) - r(e)));
    }
    function r(t) {
      return null == t ? t : Number.parseInt(t, 16);
    }
    function n(t) {
      if (null == t) return t;
      let e = t.toString(16);
      return e.length % 2 && (e = '0' + e), '0x' + e;
    }
    function i() {
      return Math.floor(16 * Math.random()).toString(16);
    }
    t.exports = {
      minBlockRef: function(...t) {
        return e(t)[0];
      },
      maxBlockRef: function(...t) {
        const r = e(t);
        return r[r.length - 1];
      },
      sortBlockRefs: e,
      bnToHex: function(t) {
        return '0x' + t.toString(16);
      },
      blockRefIsNumber: function(t) {
        return t && ![ 'earliest', 'latest', 'pending' ].includes(t);
      },
      hexToInt: r,
      incrementHexInt: function(t) {
        if (null == t) return t;
        return n(r(t) + 1);
      },
      intToHex: n,
      unsafeRandomBytes: function(t) {
        let e = '0x';
        for (let r = 0; r < t; r++) e += i(), e += i();
        return e;
      }
    };
  },
  98406: (t, e, r) => {
    var n = r(25108);
    const i = r(48125).WU;
    const {createAsyncMiddleware: o} = r(88625);
    const a = r(57688);
    const s = r(81663);
    const u = r(72785);
    const h = r(25792);
    const {intToHex: l, hexToInt: c} = r(98112);
    function f(t) {
      return d((async (...e) => {
        const r = await t(...e);
        return l(r.id);
      }));
    }
    function d(t) {
      return o((async (e, r) => {
        const n = await t.apply(null, e.params);
        r.result = n;
      }));
    }
    function p(t, e) {
      const r = [];
      for (let n in t) r.push(t[n]);
      return r;
    }
    t.exports = function({blockTracker: t, provider: e}) {
      let r = 0;
      let o = {};
      const m = new i;
      const v = function({mutex: t}) {
        return e => async (r, n, i, o) => {
          (await t.acquire())(), e(r, n, i, o);
        };
      }({
        mutex: m
      });
      const g = a({
        eth_newFilter: v(f(w)),
        eth_newBlockFilter: v(f(_)),
        eth_newPendingTransactionFilter: v(f(M)),
        eth_uninstallFilter: v(d(x)),
        eth_getFilterChanges: v(d(b)),
        eth_getFilterLogs: v(d(k))
      });
      const y = async ({oldBlock: t, newBlock: e}) => {
        if (0 === o.length) return;
        const r = await m.acquire();
        try {
          await Promise.all(p(o).map((async r => {
            try {
              await r.update({
                oldBlock: t,
                newBlock: e
              });
            } catch (i) {
              n.error(i);
            }
          })));
        } catch (i) {
          n.error(i);
        }
        r();
      };
      return g.newLogFilter = w, g.newBlockFilter = _, g.newPendingTransactionFilter = M, g.uninstallFilter = x, g.getFilterChanges = b, 
      g.getFilterLogs = k, g.destroy = () => {
        !async function() {
          const t = p(o).length;
          o = {}, E({
            prevFilterCount: t,
            newFilterCount: 0
          });
        }();
      }, g;
      async function w(t) {
        const r = new s({
          provider: e,
          params: t
        });
        await A(r);
        return r;
      }
      async function _() {
        const t = new u({
          provider: e
        });
        await A(t);
        return t;
      }
      async function M() {
        const t = new h({
          provider: e
        });
        await A(t);
        return t;
      }
      async function b(t) {
        const e = c(t);
        const r = o[e];
        if (!r) throw new Error(`No filter for index "${e}"`);
        return r.getChangesAndClear();
      }
      async function k(t) {
        const e = c(t);
        const r = o[e];
        if (!r) throw new Error(`No filter for index "${e}"`);
        return 'log' === r.type ? results = r.getAllResults() : results = [], results;
      }
      async function x(t) {
        const e = c(t);
        const r = o[e];
        const n = Boolean(r);
        return n && await async function(t) {
          const e = p(o).length;
          delete o[t];
          const r = p(o).length;
          E({
            prevFilterCount: e,
            newFilterCount: r
          });
        }(e), n;
      }
      async function A(e) {
        const n = p(o).length;
        const i = await t.getLatestBlock();
        await e.initialize({
          currentBlock: i
        }), r++, o[r] = e, e.id = r, e.idHex = l(r);
        return E({
          prevFilterCount: n,
          newFilterCount: p(o).length
        }), r;
      }
      function E({prevFilterCount: e, newFilterCount: r}) {
        0 === e && r > 0 ? t.on('sync', y) : e > 0 && 0 === r && t.removeListener('sync', y);
      }
    };
  },
  81663: (t, e, r) => {
    const n = r(75682);
    const i = r(6417);
    const o = r(23256);
    const {bnToHex: a, hexToInt: s, incrementHexInt: u, minBlockRef: h, blockRefIsNumber: l} = r(98112);
    t.exports = class extends o {
      constructor({provider: t, params: e}) {
        super(), this.type = 'log', this.ethQuery = new n(t), this.params = Object.assign({
          fromBlock: 'latest',
          toBlock: 'latest',
          address: void 0,
          topics: []
        }, e), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [ this.params.address ]), this.params.address = this.params.address.map((t => t.toLowerCase())));
      }
      async initialize({currentBlock: t}) {
        let e = this.params.fromBlock;
        [ 'latest', 'pending' ].includes(e) && (e = t), 'earliest' === e && (e = '0x0'), this.params.fromBlock = e;
        const r = h(this.params.toBlock, t);
        const n = Object.assign({}, this.params, {
          toBlock: r
        });
        const i = await this._fetchLogs(n);
        this.addInitialResults(i);
      }
      async update({oldBlock: t, newBlock: e}) {
        const r = e;
        let n;
        n = t ? u(t) : e;
        const i = Object.assign({}, this.params, {
          fromBlock: n,
          toBlock: r
        });
        const o = (await this._fetchLogs(i)).filter((t => this.matchLog(t)));
        this.addResults(o);
      }
      async _fetchLogs(t) {
        return await i((e => this.ethQuery.getLogs(t, e)))();
      }
      matchLog(t) {
        if (s(this.params.fromBlock) >= s(t.blockNumber)) return !1;
        if (l(this.params.toBlock) && s(this.params.toBlock) <= s(t.blockNumber)) return !1;
        const e = t.address && t.address.toLowerCase();
        if (this.params.address && e && !this.params.address.includes(e)) return !1;
        return this.params.topics.every(((e, r) => {
          let n = t.topics[r];
          if (!n) return !1;
          n = n.toLowerCase();
          let i = Array.isArray(e) ? e : [ e ];
          if (i.includes(null)) return !0;
          i = i.map((t => t.toLowerCase()));
          return i.includes(n);
        }));
      }
    };
  },
  6417: t => {
    "use strict";
    const e = (t, e, r, n) => function(...i) {
      return new (0, e.promiseModule)(((o, a) => {
        e.multiArgs ? i.push(((...t) => {
          e.errorFirst ? t[0] ? a(t) : (t.shift(), o(t)) : o(t);
        })) : e.errorFirst ? i.push(((t, e) => {
          t ? a(t) : o(e);
        })) : i.push(o);
        const s = this === r ? n : this;
        Reflect.apply(t, s, i);
      }));
    };
    const r = new WeakMap;
    t.exports = (t, n) => {
      n = {
        exclude: [ /.+(?:Sync|Stream)$/ ],
        errorFirst: !0,
        promiseModule: Promise,
        ...n
      };
      const i = typeof t;
      if (null === t || 'object' !== i && 'function' !== i) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${null === t ? 'null' : i}\``);
      const o = new WeakMap;
      const a = new Proxy(t, {
        apply(t, r, i) {
          const s = o.get(t);
          if (s) return Reflect.apply(s, r, i);
          const u = n.excludeMain ? t : e(t, n, a, t);
          return o.set(t, u), Reflect.apply(u, r, i);
        },
        get(t, i) {
          const s = t[i];
          if (!((t, e) => {
            let i = r.get(t);
            if (i || (i = {}, r.set(t, i)), e in i) return i[e];
            const o = t => 'string' == typeof t || 'symbol' == typeof e ? e === t : t.test(e);
            const a = Reflect.getOwnPropertyDescriptor(t, e);
            const s = void 0 === a || a.writable || a.configurable;
            const u = (n.include ? n.include.some(o) : !n.exclude.some(o)) && s;
            return i[e] = u, u;
          })(t, i) || s === Function.prototype[i]) return s;
          const u = o.get(s);
          if (u) return u;
          if ('function' == typeof s) {
            const r = e(s, n, a, t);
            return o.set(s, r), r;
          }
          return s;
        }
      });
      return a;
    };
  },
  68961: (t, e, r) => {
    const n = r(19394).default;
    const i = r(57688);
    const {createAsyncMiddleware: o} = r(88625);
    const a = r(98406);
    const {unsafeRandomBytes: s, incrementHexInt: u} = r(98112);
    const h = r(40207);
    function l(t) {
      return {
        hash: t.hash,
        parentHash: t.parentHash,
        sha3Uncles: t.sha3Uncles,
        miner: t.miner,
        stateRoot: t.stateRoot,
        transactionsRoot: t.transactionsRoot,
        receiptsRoot: t.receiptsRoot,
        logsBloom: t.logsBloom,
        difficulty: t.difficulty,
        number: t.number,
        gasLimit: t.gasLimit,
        gasUsed: t.gasUsed,
        nonce: t.nonce,
        mixHash: t.mixHash,
        timestamp: t.timestamp,
        extraData: t.extraData
      };
    }
    t.exports = function({blockTracker: t, provider: e}) {
      const r = {};
      const c = a({
        blockTracker: t,
        provider: e
      });
      let f = !1;
      const d = new n;
      const p = i({
        eth_subscribe: o((async function(n, i) {
          if (f) throw new Error('SubscriptionManager - attempting to use after destroying');
          const o = n.params[0];
          const a = s(16);
          let d;
          switch (o) {
           case 'newHeads':
            d = p({
              subId: a
            });
            break;

           case 'logs':
            const t = n.params[1];
            d = v({
              subId: a,
              filter: await c.newLogFilter(t)
            });
            break;

           default:
            throw new Error(`SubscriptionManager - unsupported subscription type "${o}"`);
          }
          return r[a] = d, void (i.result = a);
          function p({subId: r}) {
            const n = {
              type: o,
              destroy: async () => {
                t.removeListener('sync', n.update);
              },
              update: async ({oldBlock: t, newBlock: n}) => {
                const i = n;
                const o = u(t);
                (await h({
                  provider: e,
                  fromBlock: o,
                  toBlock: i
                })).map(l).forEach((t => {
                  m(r, t);
                }));
              }
            };
            return t.on('sync', n.update), n;
          }
          function v({subId: t, filter: e}) {
            e.on('update', (e => m(t, e)));
            return {
              type: o,
              destroy: async () => await c.uninstallFilter(e.idHex)
            };
          }
        })),
        eth_unsubscribe: o((async function(t, e) {
          if (f) throw new Error('SubscriptionManager - attempting to use after destroying');
          const n = t.params[0];
          const i = r[n];
          if (!i) return void (e.result = !1);
          delete r[n], await i.destroy(), e.result = !0;
        }))
      });
      return p.destroy = function() {
        d.removeAllListeners();
        for (const t in r) r[t].destroy(), delete r[t];
        f = !0;
      }, {
        events: d,
        middleware: p
      };
      function m(t, e) {
        d.emit('notification', {
          jsonrpc: '2.0',
          method: 'eth_subscription',
          params: {
            subscription: t,
            result: e
          }
        });
      }
    };
  },
  25792: (t, e, r) => {
    const n = r(76622);
    const i = r(40207);
    const {incrementHexInt: o} = r(98112);
    t.exports = class extends n {
      constructor({provider: t}) {
        super(), this.type = 'tx', this.provider = t;
      }
      async update({oldBlock: t}) {
        const e = t;
        const r = o(t);
        const n = await i({
          provider: this.provider,
          fromBlock: r,
          toBlock: e
        });
        const a = [];
        for (const i of n) a.push(...i.transactions);
        this.addResults(a);
      }
    };
  },
  37870: (t, e, r) => {
    const n = r(91625);
    const i = r(3156);
    const o = [ void 0, null, '<nil>' ];
    t.exports = function(t = {}) {
      const {blockTracker: e} = t;
      if (!e) throw new Error('createBlockCacheMiddleware - No BlockTracker specified');
      const r = new a;
      const o = {
        perma: r,
        block: r,
        fork: r
      };
      return i((async (t, i, a) => {
        if (t.skipCache) return a();
        const s = n.cacheTypeForPayload(t);
        const u = o[s];
        if (!u) return a();
        if (!u.canCacheRequest(t)) return a();
        let h = n.blockTagForPayload(t);
        let l;
        if (h || (h = 'latest'), 'earliest' === h) l = '0x00'; else if ('latest' === h) {
          const t = await e.getLatestBlock();
          r.clearBefore(t), l = t;
        } else l = h;
        const c = await u.get(t, l);
        void 0 === c ? (await a(), await u.set(t, l, i.result)) : i.result = c;
      }));
    };
    class a {
      constructor() {
        this.cache = {};
      }
      getBlockCacheForPayload(t, e) {
        const r = Number.parseInt(e, 16);
        let n = this.cache[r];
        if (!n) {
          const t = {};
          this.cache[r] = t, n = t;
        }
        return n;
      }
      async get(t, e) {
        const r = this.getBlockCacheForPayload(t, e);
        if (!r) return;
        return r[n.cacheIdentifierForPayload(t, !0)];
      }
      async set(t, e, r) {
        if (!this.canCacheResult(t, r)) return;
        this.getBlockCacheForPayload(t, e)[n.cacheIdentifierForPayload(t, !0)] = r;
      }
      canCacheRequest(t) {
        if (!n.canCache(t)) return !1;
        return 'pending' !== n.blockTagForPayload(t);
      }
      canCacheResult(t, e) {
        if (!o.includes(e)) return !!(![ 'eth_getTransactionByHash', 'eth_getTransactionReceipt' ].includes(t.method) || e && e.blockHash && '0x0000000000000000000000000000000000000000000000000000000000000000' !== e.blockHash);
      }
      clearBefore(t) {
        const e = this;
        const r = Number.parseInt(t, 16);
        Object.keys(e.cache).map(Number).filter((t => t < r)).forEach((t => delete e.cache[t]));
      }
    }
  },
  91625: (t, e, r) => {
    const n = r(67266);
    function i(t) {
      return 'never' !== s(t);
    }
    function o(t) {
      const e = a(t);
      return e >= t.params.length ? t.params : 'eth_getBlockByNumber' === t.method ? t.params.slice(1) : t.params.slice(0, e);
    }
    function a(t) {
      switch (t.method) {
       case 'eth_getStorageAt':
        return 2;

       case 'eth_getBalance':
       case 'eth_getCode':
       case 'eth_getTransactionCount':
       case 'eth_call':
        return 1;

       case 'eth_getBlockByNumber':
        return 0;

       default:
        return;
      }
    }
    function s(t) {
      switch (t.method) {
       case 'web3_clientVersion':
       case 'web3_sha3':
       case 'eth_protocolVersion':
       case 'eth_getBlockTransactionCountByHash':
       case 'eth_getUncleCountByBlockHash':
       case 'eth_getCode':
       case 'eth_getBlockByHash':
       case 'eth_getTransactionByHash':
       case 'eth_getTransactionByBlockHashAndIndex':
       case 'eth_getTransactionReceipt':
       case 'eth_getUncleByBlockHashAndIndex':
       case 'eth_getCompilers':
       case 'eth_compileLLL':
       case 'eth_compileSolidity':
       case 'eth_compileSerpent':
       case 'shh_version':
       case 'test_permaCache':
        return 'perma';

       case 'eth_getBlockByNumber':
       case 'eth_getBlockTransactionCountByNumber':
       case 'eth_getUncleCountByBlockNumber':
       case 'eth_getTransactionByBlockNumberAndIndex':
       case 'eth_getUncleByBlockNumberAndIndex':
       case 'test_forkCache':
        return 'fork';

       case 'eth_gasPrice':
       case 'eth_blockNumber':
       case 'eth_getBalance':
       case 'eth_getStorageAt':
       case 'eth_getTransactionCount':
       case 'eth_call':
       case 'eth_estimateGas':
       case 'eth_getFilterLogs':
       case 'eth_getLogs':
       case 'test_blockCache':
        return 'block';

       case 'net_version':
       case 'net_peerCount':
       case 'net_listening':
       case 'eth_syncing':
       case 'eth_sign':
       case 'eth_coinbase':
       case 'eth_mining':
       case 'eth_hashrate':
       case 'eth_accounts':
       case 'eth_sendTransaction':
       case 'eth_sendRawTransaction':
       case 'eth_newFilter':
       case 'eth_newBlockFilter':
       case 'eth_newPendingTransactionFilter':
       case 'eth_uninstallFilter':
       case 'eth_getFilterChanges':
       case 'eth_getWork':
       case 'eth_submitWork':
       case 'eth_submitHashrate':
       case 'db_putString':
       case 'db_getString':
       case 'db_putHex':
       case 'db_getHex':
       case 'shh_post':
       case 'shh_newIdentity':
       case 'shh_hasIdentity':
       case 'shh_newGroup':
       case 'shh_addToGroup':
       case 'shh_newFilter':
       case 'shh_uninstallFilter':
       case 'shh_getFilterChanges':
       case 'shh_getMessages':
       case 'test_neverCache':
        return 'never';
      }
    }
    t.exports = {
      cacheIdentifierForPayload: function(t, e) {
        const r = e ? o(t) : t.params;
        return i(t) ? t.method + ':' + n(r) : null;
      },
      canCache: i,
      blockTagForPayload: function(t) {
        let e = a(t);
        if (e >= t.params.length) return null;
        return t.params[e];
      },
      paramsWithoutBlockTag: o,
      blockTagParamIndex: a,
      cacheTypeForPayload: s
    };
  },
  3156: t => {
    t.exports = function(t) {
      return (e, r, n, i) => {
        let o;
        const a = new Promise((t => {
          o = t;
        }));
        let s, u;
        t(e, r, (async () => {
          u = !0, n((t => {
            s = t, o();
          })), await a;
        })).then((async () => {
          u ? (await a, s(null)) : i(null);
        })).catch((t => {
          s ? s(t) : i(t);
        }));
      };
    };
  },
  59721: t => {
    t.exports = function(t) {
      return (e, r, n, i) => {
        const o = t[e.method];
        return void 0 === o ? n() : 'function' == typeof o ? o(e, r, n, i) : (r.result = o, i());
      };
    };
  },
  57688: (t, e, r) => {
    t.exports = r(59721);
  },
  75682: (t, e, r) => {
    const n = r(47529);
    const i = r(23420)();
    function o(t) {
      this.currentProvider = t;
    }
    function a(t) {
      return function() {
        const e = this;
        var r = [].slice.call(arguments);
        var n = r.pop();
        e.sendAsync({
          method: t,
          params: r
        }, n);
      };
    }
    function s(t, e) {
      return function() {
        const r = this;
        var n = [].slice.call(arguments);
        var i = n.pop();
        n.length < t && n.push('latest'), r.sendAsync({
          method: e,
          params: n
        }, i);
      };
    }
    t.exports = o, o.prototype.getBalance = s(2, 'eth_getBalance'), o.prototype.getCode = s(2, 'eth_getCode'), o.prototype.getTransactionCount = s(2, 'eth_getTransactionCount'), 
    o.prototype.getStorageAt = s(3, 'eth_getStorageAt'), o.prototype.call = s(2, 'eth_call'), o.prototype.protocolVersion = a('eth_protocolVersion'), 
    o.prototype.syncing = a('eth_syncing'), o.prototype.coinbase = a('eth_coinbase'), o.prototype.mining = a('eth_mining'), 
    o.prototype.hashrate = a('eth_hashrate'), o.prototype.gasPrice = a('eth_gasPrice'), o.prototype.accounts = a('eth_accounts'), 
    o.prototype.blockNumber = a('eth_blockNumber'), o.prototype.getBlockTransactionCountByHash = a('eth_getBlockTransactionCountByHash'), 
    o.prototype.getBlockTransactionCountByNumber = a('eth_getBlockTransactionCountByNumber'), o.prototype.getUncleCountByBlockHash = a('eth_getUncleCountByBlockHash'), 
    o.prototype.getUncleCountByBlockNumber = a('eth_getUncleCountByBlockNumber'), o.prototype.sign = a('eth_sign'), o.prototype.sendTransaction = a('eth_sendTransaction'), 
    o.prototype.sendRawTransaction = a('eth_sendRawTransaction'), o.prototype.estimateGas = a('eth_estimateGas'), o.prototype.getBlockByHash = a('eth_getBlockByHash'), 
    o.prototype.getBlockByNumber = a('eth_getBlockByNumber'), o.prototype.getTransactionByHash = a('eth_getTransactionByHash'), 
    o.prototype.getTransactionByBlockHashAndIndex = a('eth_getTransactionByBlockHashAndIndex'), o.prototype.getTransactionByBlockNumberAndIndex = a('eth_getTransactionByBlockNumberAndIndex'), 
    o.prototype.getTransactionReceipt = a('eth_getTransactionReceipt'), o.prototype.getUncleByBlockHashAndIndex = a('eth_getUncleByBlockHashAndIndex'), 
    o.prototype.getUncleByBlockNumberAndIndex = a('eth_getUncleByBlockNumberAndIndex'), o.prototype.getCompilers = a('eth_getCompilers'), 
    o.prototype.compileLLL = a('eth_compileLLL'), o.prototype.compileSolidity = a('eth_compileSolidity'), o.prototype.compileSerpent = a('eth_compileSerpent'), 
    o.prototype.newFilter = a('eth_newFilter'), o.prototype.newBlockFilter = a('eth_newBlockFilter'), o.prototype.newPendingTransactionFilter = a('eth_newPendingTransactionFilter'), 
    o.prototype.uninstallFilter = a('eth_uninstallFilter'), o.prototype.getFilterChanges = a('eth_getFilterChanges'), o.prototype.getFilterLogs = a('eth_getFilterLogs'), 
    o.prototype.getLogs = a('eth_getLogs'), o.prototype.getWork = a('eth_getWork'), o.prototype.submitWork = a('eth_submitWork'), 
    o.prototype.submitHashrate = a('eth_submitHashrate'), o.prototype.sendAsync = function(t, e) {
      this.currentProvider.sendAsync(function(t) {
        return n({
          id: i(),
          jsonrpc: '2.0',
          params: []
        }, t);
      }(t), (function(t, r) {
        if (!t && r.error && (t = new Error('EthQuery - RPC Error - ' + r.error.message)), t) return e(t);
        e(null, r.result);
      }));
    };
  },
  2843: (t, e, r) => {
    const n = r(17499);
    const i = r(68142);
    function o(t) {
      const e = new Error('Expect argument to be non-empty array');
      if ('object' != typeof t || !t.length) throw e;
      const r = t.map((function(t) {
        return 'bytes' === t.type ? n.toBuffer(t.value) : t.value;
      }));
      const o = t.map((function(t) {
        return t.type;
      }));
      const a = t.map((function(t) {
        if (!t.name) throw e;
        return t.type + ' ' + t.name;
      }));
      return i.soliditySHA3([ 'bytes32', 'bytes32' ], [ i.soliditySHA3(new Array(t.length).fill('string'), a), i.soliditySHA3(o, r) ]);
    }
    function a(t, e) {
      const r = n.toBuffer(e);
      const i = n.fromRpcSig(r);
      return n.ecrecover(t, i.v, i.r, i.s);
    }
    function s(t) {
      const e = n.toBuffer(t.data);
      return a(n.hashPersonalMessage(e), t.sig);
    }
    function u(t, e) {
      var r = '' + t;
      for (;r.length < e; ) r = '0' + r;
      return r;
    }
    t.exports = {
      concatSig: function(t, e, r) {
        const i = n.fromSigned(e);
        const o = n.fromSigned(r);
        const a = n.bufferToInt(t);
        const s = u(n.toUnsigned(i).toString('hex'), 64);
        const h = u(n.toUnsigned(o).toString('hex'), 64);
        const l = n.stripHexPrefix(n.intToHex(a));
        return n.addHexPrefix(s.concat(h, l)).toString('hex');
      },
      normalize: function(t) {
        if (t) {
          if ('number' == typeof t) {
            const e = n.toBuffer(t);
            t = n.bufferToHex(e);
          }
          if ('string' != typeof t) {
            var e = 'eth-sig-util.normalize() requires hex string or integer input.';
            throw new Error(e += ' received ' + typeof t + ': ' + t);
          }
          return n.addHexPrefix(t.toLowerCase());
        }
      },
      personalSign: function(t, e) {
        var r = n.toBuffer(e.data);
        var i = n.hashPersonalMessage(r);
        var o = n.ecsign(i, t);
        return n.bufferToHex(this.concatSig(o.v, o.r, o.s));
      },
      recoverPersonalSignature: function(t) {
        const e = s(t);
        const r = n.publicToAddress(e);
        return n.bufferToHex(r);
      },
      extractPublicKey: function(t) {
        return '0x' + s(t).toString('hex');
      },
      typedSignatureHash: function(t) {
        const e = o(t);
        return n.bufferToHex(e);
      },
      signTypedData: function(t, e) {
        const r = o(e.data);
        const i = n.ecsign(r, t);
        return n.bufferToHex(this.concatSig(i.v, i.r, i.s));
      },
      recoverTypedSignature: function(t) {
        const e = a(o(t.data), t.sig);
        const r = n.publicToAddress(e);
        return n.bufferToHex(r);
      }
    };
  },
  89817: function(t, e, r) {
    !function(t, e) {
      'use strict';
      function n(t, e) {
        if (!t) throw new Error(e || 'Assertion failed');
      }
      function i(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
      }
      function o(t, e, r) {
        if (o.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ('le' !== e && 'be' !== e || (r = e, 
        e = 10), this._init(t || 0, e || 10, r || 'be'));
      }
      var a;
      'object' == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
      try {
        a = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r(89568).Buffer;
      } catch (A) {}
      function s(t, e) {
        var r = t.charCodeAt(e);
        return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15;
      }
      function u(t, e, r) {
        var n = s(t, r);
        return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
      }
      function h(t, e, r, n) {
        var i = 0;
        var o = Math.min(t.length, r);
        for (var a = e; a < o; a++) {
          var s = t.charCodeAt(a) - 48;
          i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
        }
        return i;
      }
      o.isBN = function(t) {
        return t instanceof o || null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
      }, o.max = function(t, e) {
        return t.cmp(e) > 0 ? t : e;
      }, o.min = function(t, e) {
        return t.cmp(e) < 0 ? t : e;
      }, o.prototype._init = function(t, e, r) {
        if ('number' == typeof t) return this._initNumber(t, e, r);
        if ('object' == typeof t) return this._initArray(t, e, r);
        'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
        var i = 0;
        '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), 
        'le' === r && this._initArray(this.toArray(), e, r)));
      }, o.prototype._initNumber = function(t, e, r) {
        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [ 67108863 & t ], this.length = 1) : t < 4503599627370496 ? (this.words = [ 67108863 & t, t / 67108864 & 67108863 ], 
        this.length = 2) : (n(t < 9007199254740992), this.words = [ 67108863 & t, t / 67108864 & 67108863, 1 ], this.length = 3), 
        'le' === r && this._initArray(this.toArray(), e, r);
      }, o.prototype._initArray = function(t, e, r) {
        if (n('number' == typeof t.length), t.length <= 0) return this.words = [ 0 ], this.length = 1, this;
        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) this.words[i] = 0;
        var o, a;
        var s = 0;
        if ('be' === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, 
        this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); else if ('le' === r) for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, 
        this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
        return this.strip();
      }, o.prototype._parseHex = function(t, e, r) {
        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
        for (var n = 0; n < this.length; n++) this.words[n] = 0;
        var i = 0;
        var o = 0;
        var a;
        if ('be' === r) for (n = t.length - 1; n >= e; n -= 2) a = u(t, e, n) << i, this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, 
        o += 1, this.words[o] |= a >>> 26) : i += 8; else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) a = u(t, e, n) << i, 
        this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, o += 1, this.words[o] |= a >>> 26) : i += 8;
        this.strip();
      }, o.prototype._parseBase = function(t, e, r) {
        this.words = [ 0 ], this.length = 1;
        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
        n--, i = i / e | 0;
        var o = t.length - r;
        var a = o % n;
        var s = Math.min(o, o - a) + r;
        var u = 0;
        for (var l = r; l < s; l += n) u = h(t, l, l + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        if (0 !== a) {
          var c = 1;
          for (u = h(t, l, t.length, e), l = 0; l < a; l++) c *= e;
          this.imuln(c), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        }
        this.strip();
      }, o.prototype.copy = function(t) {
        t.words = new Array(this.length);
        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
        t.length = this.length, t.negative = this.negative, t.red = this.red;
      }, o.prototype.clone = function() {
        var t = new o(null);
        return this.copy(t), t;
      }, o.prototype._expand = function(t) {
        for (;this.length < t; ) this.words[this.length++] = 0;
        return this;
      }, o.prototype.strip = function() {
        for (;this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
        return this._normSign();
      }, o.prototype._normSign = function() {
        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
      }, o.prototype.inspect = function() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      var l = [ '', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000' ];
      var c = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
      var f = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
      function d(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var n = t.length + e.length | 0;
        r.length = n, n = n - 1 | 0;
        var i = 0 | t.words[0];
        var o = 0 | e.words[0];
        var a = i * o;
        var s = 67108863 & a;
        var u = a / 67108864 | 0;
        r.words[0] = s;
        for (var h = 1; h < n; h++) {
          var l = u >>> 26;
          var c = 67108863 & u;
          var f = Math.min(h, e.length - 1);
          for (var d = Math.max(0, h - t.length + 1); d <= f; d++) {
            var p = h - d | 0;
            l += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a;
          }
          r.words[h] = 0 | c, u = 0 | l;
        }
        return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
      }
      o.prototype.toString = function(t, e) {
        var r;
        if (e = 0 | e || 1, 16 === (t = t || 10) || 'hex' === t) {
          r = '';
          var i = 0;
          var o = 0;
          for (var a = 0; a < this.length; a++) {
            var s = this.words[a];
            var u = (16777215 & (s << i | o)).toString(16);
            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? l[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, 
            a--);
          }
          for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
          var h = c[t];
          var d = f[t];
          r = '';
          var p = this.clone();
          for (p.negative = 0; !p.isZero(); ) {
            var m = p.modn(d).toString(t);
            r = (p = p.idivn(d)).isZero() ? m + r : l[h - m.length] + m + r;
          }
          for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        n(!1, 'Base should be between 2 and 36');
      }, o.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'), 
        0 !== this.negative ? -t : t;
      }, o.prototype.toJSON = function() {
        return this.toString(16);
      }, o.prototype.toBuffer = function(t, e) {
        return n(void 0 !== a), this.toArrayLike(a, t, e);
      }, o.prototype.toArray = function(t, e) {
        return this.toArrayLike(Array, t, e);
      }, o.prototype.toArrayLike = function(t, e, r) {
        var i = this.byteLength();
        var o = r || Math.max(1, i);
        n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0'), this.strip();
        var a = 'le' === e;
        var s = new t(o);
        var u, h;
        var l = this.clone();
        if (a) {
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[h] = u;
          for (;h < o; h++) s[h] = 0;
        } else {
          for (h = 0; h < o - i; h++) s[h] = 0;
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[o - h - 1] = u;
        }
        return s;
      }, Math.clz32 ? o.prototype._countBits = function(t) {
        return 32 - Math.clz32(t);
      } : o.prototype._countBits = function(t) {
        var e = t;
        var r = 0;
        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, 
        e >>>= 2), r + e;
      }, o.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var e = t;
        var r = 0;
        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 
        0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
      }, o.prototype.bitLength = function() {
        var t = this.words[this.length - 1];
        var e = this._countBits(t);
        return 26 * (this.length - 1) + e;
      }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        var t = 0;
        for (var e = 0; e < this.length; e++) {
          var r = this._zeroBits(this.words[e]);
          if (t += r, 26 !== r) break;
        }
        return t;
      }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, o.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
      }, o.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
      }, o.prototype.isNeg = function() {
        return 0 !== this.negative;
      }, o.prototype.neg = function() {
        return this.clone().ineg();
      }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, o.prototype.iuor = function(t) {
        for (;this.length < t.length; ) this.words[this.length++] = 0;
        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
        return this.strip();
      }, o.prototype.ior = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuor(t);
      }, o.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
      }, o.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
      }, o.prototype.iuand = function(t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
        return this.length = e.length, this.strip();
      }, o.prototype.iand = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuand(t);
      }, o.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
      }, o.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
      }, o.prototype.iuxor = function(t) {
        var e;
        var r;
        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
        for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
        if (this !== e) for (;n < e.length; n++) this.words[n] = e.words[n];
        return this.length = e.length, this.strip();
      }, o.prototype.ixor = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuxor(t);
      }, o.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
      }, o.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
      }, o.prototype.inotn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = 0 | Math.ceil(t / 26);
        var r = t % 26;
        this._expand(e), r > 0 && e--;
        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
      }, o.prototype.notn = function(t) {
        return this.clone().inotn(t);
      }, o.prototype.setn = function(t, e) {
        n('number' == typeof t && t >= 0);
        var r = t / 26 | 0;
        var i = t % 26;
        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
      }, o.prototype.iadd = function(t) {
        var e;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
        var r, n;
        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
        var i = 0;
        for (var o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        for (;0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (;o < r.length; o++) this.words[o] = r.words[o];
        return this;
      }, o.prototype.add = function(t) {
        var e;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, 
        e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
      }, o.prototype.isub = function(t) {
        if (0 !== t.negative) {
          t.negative = 0;
          var e = this.iadd(t);
          return t.negative = 1, e._normSign();
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var r = this.cmp(t);
        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var n, i;
        r > 0 ? (n = this, i = t) : (n = t, i = this);
        var o = 0;
        for (var a = 0; a < i.length; a++) o = (e = (0 | n.words[a]) - (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        for (;0 !== o && a < n.length; a++) o = (e = (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        if (0 === o && a < n.length && n !== this) for (;a < n.length; a++) this.words[a] = n.words[a];
        return this.length = Math.max(this.length, a), n !== this && (this.negative = 1), this.strip();
      }, o.prototype.sub = function(t) {
        return this.clone().isub(t);
      };
      var p = function(t, e, r) {
        var n = t.words;
        var i = e.words;
        var o = r.words;
        var a = 0;
        var s;
        var u;
        var h;
        var l = 0 | n[0];
        var c = 8191 & l;
        var f = l >>> 13;
        var d = 0 | n[1];
        var p = 8191 & d;
        var m = d >>> 13;
        var v = 0 | n[2];
        var g = 8191 & v;
        var y = v >>> 13;
        var w = 0 | n[3];
        var _ = 8191 & w;
        var M = w >>> 13;
        var b = 0 | n[4];
        var k = 8191 & b;
        var x = b >>> 13;
        var A = 0 | n[5];
        var E = 8191 & A;
        var S = A >>> 13;
        var T = 0 | n[6];
        var C = 8191 & T;
        var R = T >>> 13;
        var B = 0 | n[7];
        var L = 8191 & B;
        var P = B >>> 13;
        var I = 0 | n[8];
        var O = 8191 & I;
        var N = I >>> 13;
        var U = 0 | n[9];
        var j = 8191 & U;
        var q = U >>> 13;
        var K = 0 | i[0];
        var H = 8191 & K;
        var F = K >>> 13;
        var z = 0 | i[1];
        var D = 8191 & z;
        var Z = z >>> 13;
        var W = 0 | i[2];
        var V = 8191 & W;
        var $ = W >>> 13;
        var G = 0 | i[3];
        var Y = 8191 & G;
        var J = G >>> 13;
        var Q = 0 | i[4];
        var X = 8191 & Q;
        var tt = Q >>> 13;
        var et = 0 | i[5];
        var rt = 8191 & et;
        var nt = et >>> 13;
        var it = 0 | i[6];
        var ot = 8191 & it;
        var at = it >>> 13;
        var st = 0 | i[7];
        var ut = 8191 & st;
        var ht = st >>> 13;
        var lt = 0 | i[8];
        var ct = 8191 & lt;
        var ft = lt >>> 13;
        var dt = 0 | i[9];
        var pt = 8191 & dt;
        var mt = dt >>> 13;
        r.negative = t.negative ^ e.negative, r.length = 19;
        var vt = (a + (s = Math.imul(c, H)) | 0) + ((8191 & (u = (u = Math.imul(c, F)) + Math.imul(f, H) | 0)) << 13) | 0;
        a = ((h = Math.imul(f, F)) + (u >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, s = Math.imul(p, H), u = (u = Math.imul(p, F)) + Math.imul(m, H) | 0, 
        h = Math.imul(m, F);
        var gt = (a + (s = s + Math.imul(c, D) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, Z) | 0) + Math.imul(f, D) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, Z) | 0) + (u >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, s = Math.imul(g, H), u = (u = Math.imul(g, F)) + Math.imul(y, H) | 0, 
        h = Math.imul(y, F), s = s + Math.imul(p, D) | 0, u = (u = u + Math.imul(p, Z) | 0) + Math.imul(m, D) | 0, h = h + Math.imul(m, Z) | 0;
        var yt = (a + (s = s + Math.imul(c, V) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, $) | 0) + Math.imul(f, V) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, $) | 0) + (u >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, s = Math.imul(_, H), u = (u = Math.imul(_, F)) + Math.imul(M, H) | 0, 
        h = Math.imul(M, F), s = s + Math.imul(g, D) | 0, u = (u = u + Math.imul(g, Z) | 0) + Math.imul(y, D) | 0, h = h + Math.imul(y, Z) | 0, 
        s = s + Math.imul(p, V) | 0, u = (u = u + Math.imul(p, $) | 0) + Math.imul(m, V) | 0, h = h + Math.imul(m, $) | 0;
        var wt = (a + (s = s + Math.imul(c, Y) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, J) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, J) | 0) + (u >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, s = Math.imul(k, H), u = (u = Math.imul(k, F)) + Math.imul(x, H) | 0, 
        h = Math.imul(x, F), s = s + Math.imul(_, D) | 0, u = (u = u + Math.imul(_, Z) | 0) + Math.imul(M, D) | 0, h = h + Math.imul(M, Z) | 0, 
        s = s + Math.imul(g, V) | 0, u = (u = u + Math.imul(g, $) | 0) + Math.imul(y, V) | 0, h = h + Math.imul(y, $) | 0, s = s + Math.imul(p, Y) | 0, 
        u = (u = u + Math.imul(p, J) | 0) + Math.imul(m, Y) | 0, h = h + Math.imul(m, J) | 0;
        var _t = (a + (s = s + Math.imul(c, X) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, tt) | 0) + (u >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, s = Math.imul(E, H), u = (u = Math.imul(E, F)) + Math.imul(S, H) | 0, 
        h = Math.imul(S, F), s = s + Math.imul(k, D) | 0, u = (u = u + Math.imul(k, Z) | 0) + Math.imul(x, D) | 0, h = h + Math.imul(x, Z) | 0, 
        s = s + Math.imul(_, V) | 0, u = (u = u + Math.imul(_, $) | 0) + Math.imul(M, V) | 0, h = h + Math.imul(M, $) | 0, s = s + Math.imul(g, Y) | 0, 
        u = (u = u + Math.imul(g, J) | 0) + Math.imul(y, Y) | 0, h = h + Math.imul(y, J) | 0, s = s + Math.imul(p, X) | 0, u = (u = u + Math.imul(p, tt) | 0) + Math.imul(m, X) | 0, 
        h = h + Math.imul(m, tt) | 0;
        var Mt = (a + (s = s + Math.imul(c, rt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, nt) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, nt) | 0) + (u >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, s = Math.imul(C, H), u = (u = Math.imul(C, F)) + Math.imul(R, H) | 0, 
        h = Math.imul(R, F), s = s + Math.imul(E, D) | 0, u = (u = u + Math.imul(E, Z) | 0) + Math.imul(S, D) | 0, h = h + Math.imul(S, Z) | 0, 
        s = s + Math.imul(k, V) | 0, u = (u = u + Math.imul(k, $) | 0) + Math.imul(x, V) | 0, h = h + Math.imul(x, $) | 0, s = s + Math.imul(_, Y) | 0, 
        u = (u = u + Math.imul(_, J) | 0) + Math.imul(M, Y) | 0, h = h + Math.imul(M, J) | 0, s = s + Math.imul(g, X) | 0, u = (u = u + Math.imul(g, tt) | 0) + Math.imul(y, X) | 0, 
        h = h + Math.imul(y, tt) | 0, s = s + Math.imul(p, rt) | 0, u = (u = u + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, h = h + Math.imul(m, nt) | 0;
        var bt = (a + (s = s + Math.imul(c, ot) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, at) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, at) | 0) + (u >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, s = Math.imul(L, H), u = (u = Math.imul(L, F)) + Math.imul(P, H) | 0, 
        h = Math.imul(P, F), s = s + Math.imul(C, D) | 0, u = (u = u + Math.imul(C, Z) | 0) + Math.imul(R, D) | 0, h = h + Math.imul(R, Z) | 0, 
        s = s + Math.imul(E, V) | 0, u = (u = u + Math.imul(E, $) | 0) + Math.imul(S, V) | 0, h = h + Math.imul(S, $) | 0, s = s + Math.imul(k, Y) | 0, 
        u = (u = u + Math.imul(k, J) | 0) + Math.imul(x, Y) | 0, h = h + Math.imul(x, J) | 0, s = s + Math.imul(_, X) | 0, u = (u = u + Math.imul(_, tt) | 0) + Math.imul(M, X) | 0, 
        h = h + Math.imul(M, tt) | 0, s = s + Math.imul(g, rt) | 0, u = (u = u + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, h = h + Math.imul(y, nt) | 0, 
        s = s + Math.imul(p, ot) | 0, u = (u = u + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, h = h + Math.imul(m, at) | 0;
        var kt = (a + (s = s + Math.imul(c, ut) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ht) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ht) | 0) + (u >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, s = Math.imul(O, H), u = (u = Math.imul(O, F)) + Math.imul(N, H) | 0, 
        h = Math.imul(N, F), s = s + Math.imul(L, D) | 0, u = (u = u + Math.imul(L, Z) | 0) + Math.imul(P, D) | 0, h = h + Math.imul(P, Z) | 0, 
        s = s + Math.imul(C, V) | 0, u = (u = u + Math.imul(C, $) | 0) + Math.imul(R, V) | 0, h = h + Math.imul(R, $) | 0, s = s + Math.imul(E, Y) | 0, 
        u = (u = u + Math.imul(E, J) | 0) + Math.imul(S, Y) | 0, h = h + Math.imul(S, J) | 0, s = s + Math.imul(k, X) | 0, u = (u = u + Math.imul(k, tt) | 0) + Math.imul(x, X) | 0, 
        h = h + Math.imul(x, tt) | 0, s = s + Math.imul(_, rt) | 0, u = (u = u + Math.imul(_, nt) | 0) + Math.imul(M, rt) | 0, h = h + Math.imul(M, nt) | 0, 
        s = s + Math.imul(g, ot) | 0, u = (u = u + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, h = h + Math.imul(y, at) | 0, s = s + Math.imul(p, ut) | 0, 
        u = (u = u + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, h = h + Math.imul(m, ht) | 0;
        var xt = (a + (s = s + Math.imul(c, ct) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ft) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ft) | 0) + (u >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, s = Math.imul(j, H), u = (u = Math.imul(j, F)) + Math.imul(q, H) | 0, 
        h = Math.imul(q, F), s = s + Math.imul(O, D) | 0, u = (u = u + Math.imul(O, Z) | 0) + Math.imul(N, D) | 0, h = h + Math.imul(N, Z) | 0, 
        s = s + Math.imul(L, V) | 0, u = (u = u + Math.imul(L, $) | 0) + Math.imul(P, V) | 0, h = h + Math.imul(P, $) | 0, s = s + Math.imul(C, Y) | 0, 
        u = (u = u + Math.imul(C, J) | 0) + Math.imul(R, Y) | 0, h = h + Math.imul(R, J) | 0, s = s + Math.imul(E, X) | 0, u = (u = u + Math.imul(E, tt) | 0) + Math.imul(S, X) | 0, 
        h = h + Math.imul(S, tt) | 0, s = s + Math.imul(k, rt) | 0, u = (u = u + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0, h = h + Math.imul(x, nt) | 0, 
        s = s + Math.imul(_, ot) | 0, u = (u = u + Math.imul(_, at) | 0) + Math.imul(M, ot) | 0, h = h + Math.imul(M, at) | 0, s = s + Math.imul(g, ut) | 0, 
        u = (u = u + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, h = h + Math.imul(y, ht) | 0, s = s + Math.imul(p, ct) | 0, u = (u = u + Math.imul(p, ft) | 0) + Math.imul(m, ct) | 0, 
        h = h + Math.imul(m, ft) | 0;
        var At = (a + (s = s + Math.imul(c, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, mt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, mt) | 0) + (u >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, s = Math.imul(j, D), u = (u = Math.imul(j, Z)) + Math.imul(q, D) | 0, 
        h = Math.imul(q, Z), s = s + Math.imul(O, V) | 0, u = (u = u + Math.imul(O, $) | 0) + Math.imul(N, V) | 0, h = h + Math.imul(N, $) | 0, 
        s = s + Math.imul(L, Y) | 0, u = (u = u + Math.imul(L, J) | 0) + Math.imul(P, Y) | 0, h = h + Math.imul(P, J) | 0, s = s + Math.imul(C, X) | 0, 
        u = (u = u + Math.imul(C, tt) | 0) + Math.imul(R, X) | 0, h = h + Math.imul(R, tt) | 0, s = s + Math.imul(E, rt) | 0, u = (u = u + Math.imul(E, nt) | 0) + Math.imul(S, rt) | 0, 
        h = h + Math.imul(S, nt) | 0, s = s + Math.imul(k, ot) | 0, u = (u = u + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0, h = h + Math.imul(x, at) | 0, 
        s = s + Math.imul(_, ut) | 0, u = (u = u + Math.imul(_, ht) | 0) + Math.imul(M, ut) | 0, h = h + Math.imul(M, ht) | 0, s = s + Math.imul(g, ct) | 0, 
        u = (u = u + Math.imul(g, ft) | 0) + Math.imul(y, ct) | 0, h = h + Math.imul(y, ft) | 0;
        var Et = (a + (s = s + Math.imul(p, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(m, mt) | 0) + (u >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, s = Math.imul(j, V), u = (u = Math.imul(j, $)) + Math.imul(q, V) | 0, 
        h = Math.imul(q, $), s = s + Math.imul(O, Y) | 0, u = (u = u + Math.imul(O, J) | 0) + Math.imul(N, Y) | 0, h = h + Math.imul(N, J) | 0, 
        s = s + Math.imul(L, X) | 0, u = (u = u + Math.imul(L, tt) | 0) + Math.imul(P, X) | 0, h = h + Math.imul(P, tt) | 0, s = s + Math.imul(C, rt) | 0, 
        u = (u = u + Math.imul(C, nt) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, nt) | 0, s = s + Math.imul(E, ot) | 0, u = (u = u + Math.imul(E, at) | 0) + Math.imul(S, ot) | 0, 
        h = h + Math.imul(S, at) | 0, s = s + Math.imul(k, ut) | 0, u = (u = u + Math.imul(k, ht) | 0) + Math.imul(x, ut) | 0, h = h + Math.imul(x, ht) | 0, 
        s = s + Math.imul(_, ct) | 0, u = (u = u + Math.imul(_, ft) | 0) + Math.imul(M, ct) | 0, h = h + Math.imul(M, ft) | 0;
        var St = (a + (s = s + Math.imul(g, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(y, mt) | 0) + (u >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, s = Math.imul(j, Y), u = (u = Math.imul(j, J)) + Math.imul(q, Y) | 0, 
        h = Math.imul(q, J), s = s + Math.imul(O, X) | 0, u = (u = u + Math.imul(O, tt) | 0) + Math.imul(N, X) | 0, h = h + Math.imul(N, tt) | 0, 
        s = s + Math.imul(L, rt) | 0, u = (u = u + Math.imul(L, nt) | 0) + Math.imul(P, rt) | 0, h = h + Math.imul(P, nt) | 0, s = s + Math.imul(C, ot) | 0, 
        u = (u = u + Math.imul(C, at) | 0) + Math.imul(R, ot) | 0, h = h + Math.imul(R, at) | 0, s = s + Math.imul(E, ut) | 0, u = (u = u + Math.imul(E, ht) | 0) + Math.imul(S, ut) | 0, 
        h = h + Math.imul(S, ht) | 0, s = s + Math.imul(k, ct) | 0, u = (u = u + Math.imul(k, ft) | 0) + Math.imul(x, ct) | 0, h = h + Math.imul(x, ft) | 0;
        var Tt = (a + (s = s + Math.imul(_, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(_, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(M, mt) | 0) + (u >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, s = Math.imul(j, X), u = (u = Math.imul(j, tt)) + Math.imul(q, X) | 0, 
        h = Math.imul(q, tt), s = s + Math.imul(O, rt) | 0, u = (u = u + Math.imul(O, nt) | 0) + Math.imul(N, rt) | 0, h = h + Math.imul(N, nt) | 0, 
        s = s + Math.imul(L, ot) | 0, u = (u = u + Math.imul(L, at) | 0) + Math.imul(P, ot) | 0, h = h + Math.imul(P, at) | 0, s = s + Math.imul(C, ut) | 0, 
        u = (u = u + Math.imul(C, ht) | 0) + Math.imul(R, ut) | 0, h = h + Math.imul(R, ht) | 0, s = s + Math.imul(E, ct) | 0, u = (u = u + Math.imul(E, ft) | 0) + Math.imul(S, ct) | 0, 
        h = h + Math.imul(S, ft) | 0;
        var Ct = (a + (s = s + Math.imul(k, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(x, mt) | 0) + (u >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, s = Math.imul(j, rt), u = (u = Math.imul(j, nt)) + Math.imul(q, rt) | 0, 
        h = Math.imul(q, nt), s = s + Math.imul(O, ot) | 0, u = (u = u + Math.imul(O, at) | 0) + Math.imul(N, ot) | 0, h = h + Math.imul(N, at) | 0, 
        s = s + Math.imul(L, ut) | 0, u = (u = u + Math.imul(L, ht) | 0) + Math.imul(P, ut) | 0, h = h + Math.imul(P, ht) | 0, s = s + Math.imul(C, ct) | 0, 
        u = (u = u + Math.imul(C, ft) | 0) + Math.imul(R, ct) | 0, h = h + Math.imul(R, ft) | 0;
        var Rt = (a + (s = s + Math.imul(E, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(E, mt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(S, mt) | 0) + (u >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, s = Math.imul(j, ot), u = (u = Math.imul(j, at)) + Math.imul(q, ot) | 0, 
        h = Math.imul(q, at), s = s + Math.imul(O, ut) | 0, u = (u = u + Math.imul(O, ht) | 0) + Math.imul(N, ut) | 0, h = h + Math.imul(N, ht) | 0, 
        s = s + Math.imul(L, ct) | 0, u = (u = u + Math.imul(L, ft) | 0) + Math.imul(P, ct) | 0, h = h + Math.imul(P, ft) | 0;
        var Bt = (a + (s = s + Math.imul(C, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(C, mt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(R, mt) | 0) + (u >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, s = Math.imul(j, ut), u = (u = Math.imul(j, ht)) + Math.imul(q, ut) | 0, 
        h = Math.imul(q, ht), s = s + Math.imul(O, ct) | 0, u = (u = u + Math.imul(O, ft) | 0) + Math.imul(N, ct) | 0, h = h + Math.imul(N, ft) | 0;
        var Lt = (a + (s = s + Math.imul(L, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(L, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(P, mt) | 0) + (u >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, s = Math.imul(j, ct), u = (u = Math.imul(j, ft)) + Math.imul(q, ct) | 0, 
        h = Math.imul(q, ft);
        var Pt = (a + (s = s + Math.imul(O, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(O, mt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(N, mt) | 0) + (u >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
        var It = (a + (s = Math.imul(j, pt)) | 0) + ((8191 & (u = (u = Math.imul(j, mt)) + Math.imul(q, pt) | 0)) << 13) | 0;
        return a = ((h = Math.imul(q, mt)) + (u >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, o[0] = vt, o[1] = gt, o[2] = yt, 
        o[3] = wt, o[4] = _t, o[5] = Mt, o[6] = bt, o[7] = kt, o[8] = xt, o[9] = At, o[10] = Et, o[11] = St, o[12] = Tt, o[13] = Ct, 
        o[14] = Rt, o[15] = Bt, o[16] = Lt, o[17] = Pt, o[18] = It, 0 !== a && (o[19] = a, r.length++), r;
      };
      function m(t, e, r) {
        return (new v).mulp(t, e, r);
      }
      function v(t, e) {
        this.x = t, this.y = e;
      }
      Math.imul || (p = d), o.prototype.mulTo = function(t, e) {
        var r;
        var n = this.length + t.length;
        return r = 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, r) {
          r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
          var n = 0;
          var i = 0;
          for (var o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            var s = 67108863 & n;
            var u = Math.min(o, e.length - 1);
            for (var h = Math.max(0, o - t.length + 1); h <= u; h++) {
              var l = o - h;
              var c = (0 | t.words[l]) * (0 | e.words[h]);
              var f = 67108863 & c;
              s = 67108863 & (f = f + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, a &= 67108863;
            }
            r.words[o] = s, n = a, a = i;
          }
          return 0 !== n ? r.words[o] = n : r.length--, r.strip();
        }(this, t, e) : m(this, t, e), r;
      }, v.prototype.makeRBT = function(t) {
        var e = new Array(t);
        var r = o.prototype._countBits(t) - 1;
        for (var n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
        return e;
      }, v.prototype.revBin = function(t, e, r) {
        if (0 === t || t === r - 1) return t;
        var n = 0;
        for (var i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
        return n;
      }, v.prototype.permute = function(t, e, r, n, i, o) {
        for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]];
      }, v.prototype.transform = function(t, e, r, n, i, o) {
        this.permute(o, t, e, r, n, i);
        for (var a = 1; a < i; a <<= 1) {
          var s = a << 1;
          var u = Math.cos(2 * Math.PI / s);
          var h = Math.sin(2 * Math.PI / s);
          for (var l = 0; l < i; l += s) {
            var c = u;
            var f = h;
            for (var d = 0; d < a; d++) {
              var p = r[l + d];
              var m = n[l + d];
              var v = r[l + d + a];
              var g = n[l + d + a];
              var y = c * v - f * g;
              g = c * g + f * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + a] = p - v, n[l + d + a] = m - g, d !== s && (y = u * c - h * f, 
              f = u * f + h * c, c = y);
            }
          }
        }
      }, v.prototype.guessLen13b = function(t, e) {
        var r = 1 | Math.max(e, t);
        var n = 1 & r;
        var i = 0;
        for (r = r / 2 | 0; r; r >>>= 1) i++;
        return 1 << i + 1 + n;
      }, v.prototype.conjugate = function(t, e, r) {
        if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
          var i = t[n];
          t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
        }
      }, v.prototype.normalize13b = function(t, e) {
        var r = 0;
        for (var n = 0; n < e / 2; n++) {
          var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
          t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
        }
        return t;
      }, v.prototype.convert13b = function(t, e, r, i) {
        var o = 0;
        for (var a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
        for (a = 2 * e; a < i; ++a) r[a] = 0;
        n(0 === o), n(0 == (-8192 & o));
      }, v.prototype.stub = function(t) {
        var e = new Array(t);
        for (var r = 0; r < t; r++) e[r] = 0;
        return e;
      }, v.prototype.mulp = function(t, e, r) {
        var n = 2 * this.guessLen13b(t.length, e.length);
        var i = this.makeRBT(n);
        var o = this.stub(n);
        var a = new Array(n);
        var s = new Array(n);
        var u = new Array(n);
        var h = new Array(n);
        var l = new Array(n);
        var c = new Array(n);
        var f = r.words;
        f.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, h, n), this.transform(a, o, s, u, n, i), 
        this.transform(h, o, l, c, n, i);
        for (var d = 0; d < n; d++) {
          var p = s[d] * l[d] - u[d] * c[d];
          u[d] = s[d] * c[d] + u[d] * l[d], s[d] = p;
        }
        return this.conjugate(s, u, n), this.transform(s, u, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = t.negative ^ e.negative, 
        r.length = t.length + e.length, r.strip();
      }, o.prototype.mul = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), this.mulTo(t, e);
      }, o.prototype.mulf = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), m(this, t, e);
      }, o.prototype.imul = function(t) {
        return this.clone().mulTo(t, this);
      }, o.prototype.imuln = function(t) {
        n('number' == typeof t), n(t < 67108864);
        var e = 0;
        for (var r = 0; r < this.length; r++) {
          var i = (0 | this.words[r]) * t;
          var o = (67108863 & i) + (67108863 & e);
          e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o;
        }
        return 0 !== e && (this.words[r] = e, this.length++), this;
      }, o.prototype.muln = function(t) {
        return this.clone().imuln(t);
      }, o.prototype.sqr = function() {
        return this.mul(this);
      }, o.prototype.isqr = function() {
        return this.imul(this.clone());
      }, o.prototype.pow = function(t) {
        var e = function(t) {
          var e = new Array(t.bitLength());
          for (var r = 0; r < e.length; r++) {
            var n = r / 26 | 0;
            var i = r % 26;
            e[r] = (t.words[n] & 1 << i) >>> i;
          }
          return e;
        }(t);
        if (0 === e.length) return new o(1);
        var r = this;
        for (var n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
        if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
        return r;
      }, o.prototype.iushln = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 67108863 >>> 26 - e << 26 - e;
        var o;
        if (0 !== e) {
          var a = 0;
          for (o = 0; o < this.length; o++) {
            var s = this.words[o] & i;
            var u = (0 | this.words[o]) - s << e;
            this.words[o] = u | a, a = s >>> 26 - e;
          }
          a && (this.words[o] = a, this.length++);
        }
        if (0 !== r) {
          for (o = this.length - 1; o >= 0; o--) this.words[o + r] = this.words[o];
          for (o = 0; o < r; o++) this.words[o] = 0;
          this.length += r;
        }
        return this.strip();
      }, o.prototype.ishln = function(t) {
        return n(0 === this.negative), this.iushln(t);
      }, o.prototype.iushrn = function(t, e, r) {
        var i;
        n('number' == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
        var o = t % 26;
        var a = Math.min((t - o) / 26, this.length);
        var s = 67108863 ^ 67108863 >>> o << o;
        var u = r;
        if (i -= a, i = Math.max(0, i), u) {
          for (var h = 0; h < a; h++) u.words[h] = this.words[h];
          u.length = a;
        }
        if (0 === a) ; else if (this.length > a) for (this.length -= a, h = 0; h < this.length; h++) this.words[h] = this.words[h + a]; else this.words[0] = 0, 
        this.length = 1;
        var l = 0;
        for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
          var c = 0 | this.words[h];
          this.words[h] = l << 26 - o | c >>> o, l = c & s;
        }
        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
      }, o.prototype.ishrn = function(t, e, r) {
        return n(0 === this.negative), this.iushrn(t, e, r);
      }, o.prototype.shln = function(t) {
        return this.clone().ishln(t);
      }, o.prototype.ushln = function(t) {
        return this.clone().iushln(t);
      }, o.prototype.shrn = function(t) {
        return this.clone().ishrn(t);
      }, o.prototype.ushrn = function(t) {
        return this.clone().iushrn(t);
      }, o.prototype.testn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        return !(this.length <= r) && !!(this.words[r] & i);
      }, o.prototype.imaskn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        if (n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r) return this;
        if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
          var i = 67108863 ^ 67108863 >>> e << e;
          this.words[this.length - 1] &= i;
        }
        return this.strip();
      }, o.prototype.maskn = function(t) {
        return this.clone().imaskn(t);
      }, o.prototype.iaddn = function(t) {
        return n('number' == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), 
        this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
      }, o.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
        return this.length = Math.max(this.length, e + 1), this;
      }, o.prototype.isubn = function(t) {
        if (n('number' == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, 
        this.words[e + 1] -= 1;
        return this.strip();
      }, o.prototype.addn = function(t) {
        return this.clone().iaddn(t);
      }, o.prototype.subn = function(t) {
        return this.clone().isubn(t);
      }, o.prototype.iabs = function() {
        return this.negative = 0, this;
      }, o.prototype.abs = function() {
        return this.clone().iabs();
      }, o.prototype._ishlnsubmul = function(t, e, r) {
        var i = t.length + r;
        var o;
        var a;
        this._expand(i);
        var s = 0;
        for (o = 0; o < t.length; o++) {
          a = (0 | this.words[o + r]) + s;
          var u = (0 | t.words[o]) * e;
          s = ((a -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[o + r] = 67108863 & a;
        }
        for (;o < this.length - r; o++) s = (a = (0 | this.words[o + r]) + s) >> 26, this.words[o + r] = 67108863 & a;
        if (0 === s) return this.strip();
        for (n(-1 === s), s = 0, o = 0; o < this.length; o++) s = (a = -(0 | this.words[o]) + s) >> 26, this.words[o] = 67108863 & a;
        return this.negative = 1, this.strip();
      }, o.prototype._wordDiv = function(t, e) {
        var r = (this.length, t.length);
        var n = this.clone();
        var i = t;
        var a = 0 | i.words[i.length - 1];
        0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
        var s = n.length - i.length;
        var u;
        if ('mod' !== e) {
          (u = new o(null)).length = s + 1, u.words = new Array(u.length);
          for (var h = 0; h < u.length; h++) u.words[h] = 0;
        }
        var l = n.clone()._ishlnsubmul(i, 1, s);
        0 === l.negative && (n = l, u && (u.words[s] = 1));
        for (var c = s - 1; c >= 0; c--) {
          var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
          for (f = Math.min(f / a | 0, 67108863), n._ishlnsubmul(i, f, c); 0 !== n.negative; ) f--, n.negative = 0, n._ishlnsubmul(i, 1, c), 
          n.isZero() || (n.negative ^= 1);
          u && (u.words[c] = f);
        }
        return u && u.strip(), n.strip(), 'div' !== e && 0 !== r && n.iushrn(r), {
          div: u || null,
          mod: n
        };
      }, o.prototype.divmod = function(t, e, r) {
        return n(!t.isZero()), this.isZero() ? {
          div: new o(0),
          mod: new o(0)
        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), 'mod' !== e && (i = s.div.neg()), 'div' !== e && (a = s.mod.neg(), 
        r && 0 !== a.negative && a.iadd(t)), {
          div: i,
          mod: a
        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), 'mod' !== e && (i = s.div.neg()), {
          div: i,
          mod: s.mod
        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), 'div' !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), 
        {
          div: s.div,
          mod: a
        }) : t.length > this.length || this.cmp(t) < 0 ? {
          div: new o(0),
          mod: this
        } : 1 === t.length ? 'div' === e ? {
          div: this.divn(t.words[0]),
          mod: null
        } : 'mod' === e ? {
          div: null,
          mod: new o(this.modn(t.words[0]))
        } : {
          div: this.divn(t.words[0]),
          mod: new o(this.modn(t.words[0]))
        } : this._wordDiv(t, e);
        var i, a, s;
      }, o.prototype.div = function(t) {
        return this.divmod(t, 'div', !1).div;
      }, o.prototype.mod = function(t) {
        return this.divmod(t, 'mod', !1).mod;
      }, o.prototype.umod = function(t) {
        return this.divmod(t, 'mod', !0).mod;
      }, o.prototype.divRound = function(t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) return e.div;
        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod;
        var n = t.ushrn(1);
        var i = t.andln(1);
        var o = r.cmp(n);
        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
      }, o.prototype.modn = function(t) {
        n(t <= 67108863);
        var e = (1 << 26) % t;
        var r = 0;
        for (var i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
        return r;
      }, o.prototype.idivn = function(t) {
        n(t <= 67108863);
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var i = (0 | this.words[r]) + 67108864 * e;
          this.words[r] = i / t | 0, e = i % t;
        }
        return this.strip();
      }, o.prototype.divn = function(t) {
        return this.clone().idivn(t);
      }, o.prototype.egcd = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = new o(0);
        var u = new o(1);
        var h = 0;
        for (;e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++h;
        var l = r.clone();
        var c = e.clone();
        for (;!e.isZero(); ) {
          for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1) ;
          if (f > 0) for (e.iushrn(f); f-- > 0; ) (i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(c)), i.iushrn(1), a.iushrn(1);
          for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1) ;
          if (p > 0) for (r.iushrn(p); p-- > 0; ) (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(c)), s.iushrn(1), u.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a));
        }
        return {
          a: s,
          b: u,
          gcd: r.iushln(h)
        };
      }, o.prototype._invmp = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = r.clone();
        for (;e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
          for (var u = 0, h = 1; 0 == (e.words[0] & h) && u < 26; ++u, h <<= 1) ;
          if (u > 0) for (e.iushrn(u); u-- > 0; ) i.isOdd() && i.iadd(s), i.iushrn(1);
          for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1) ;
          if (l > 0) for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(s), a.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(a)) : (r.isub(e), a.isub(i));
        }
        var f;
        return (f = 0 === e.cmpn(1) ? i : a).cmpn(0) < 0 && f.iadd(t), f;
      }, o.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var e = this.clone();
        var r = t.clone();
        e.negative = 0, r.negative = 0;
        for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
        for (;;) {
          for (;e.isEven(); ) e.iushrn(1);
          for (;r.isEven(); ) r.iushrn(1);
          var i = e.cmp(r);
          if (i < 0) {
            var o = e;
            e = r, r = o;
          } else if (0 === i || 0 === r.cmpn(1)) break;
          e.isub(r);
        }
        return r.iushln(n);
      }, o.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t);
      }, o.prototype.isEven = function() {
        return 0 == (1 & this.words[0]);
      }, o.prototype.isOdd = function() {
        return 1 == (1 & this.words[0]);
      }, o.prototype.andln = function(t) {
        return this.words[0] & t;
      }, o.prototype.bincn = function(t) {
        n('number' == typeof t);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
        var o = i;
        for (var a = r; 0 !== o && a < this.length; a++) {
          var s = 0 | this.words[a];
          o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
        }
        return 0 !== o && (this.words[a] = o, this.length++), this;
      }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0];
      }, o.prototype.cmpn = function(t) {
        var e = t < 0;
        if (0 !== this.negative && !e) return -1;
        if (0 === this.negative && e) return 1;
        var r;
        if (this.strip(), this.length > 1) r = 1; else {
          e && (t = -t), n(t <= 67108863, 'Number is too big');
          var i = 0 | this.words[0];
          r = i === t ? 0 : i < t ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -r : r;
      }, o.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var e = this.ucmp(t);
        return 0 !== this.negative ? 0 | -e : e;
      }, o.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var n = 0 | this.words[r];
          var i = 0 | t.words[r];
          if (n !== i) {
            n < i ? e = -1 : n > i && (e = 1);
            break;
          }
        }
        return e;
      }, o.prototype.gtn = function(t) {
        return 1 === this.cmpn(t);
      }, o.prototype.gt = function(t) {
        return 1 === this.cmp(t);
      }, o.prototype.gten = function(t) {
        return this.cmpn(t) >= 0;
      }, o.prototype.gte = function(t) {
        return this.cmp(t) >= 0;
      }, o.prototype.ltn = function(t) {
        return -1 === this.cmpn(t);
      }, o.prototype.lt = function(t) {
        return -1 === this.cmp(t);
      }, o.prototype.lten = function(t) {
        return this.cmpn(t) <= 0;
      }, o.prototype.lte = function(t) {
        return this.cmp(t) <= 0;
      }, o.prototype.eqn = function(t) {
        return 0 === this.cmpn(t);
      }, o.prototype.eq = function(t) {
        return 0 === this.cmp(t);
      }, o.red = function(t) {
        return new k(t);
      }, o.prototype.toRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), n(0 === this.negative, 'red works only with positives'), t.convertTo(this)._forceRed(t);
      }, o.prototype.fromRed = function() {
        return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
      }, o.prototype._forceRed = function(t) {
        return this.red = t, this;
      }, o.prototype.forceRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), this._forceRed(t);
      }, o.prototype.redAdd = function(t) {
        return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t);
      }, o.prototype.redIAdd = function(t) {
        return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t);
      }, o.prototype.redSub = function(t) {
        return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t);
      }, o.prototype.redISub = function(t) {
        return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t);
      }, o.prototype.redShl = function(t) {
        return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t);
      }, o.prototype.redMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t);
      }, o.prototype.redIMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t);
      }, o.prototype.redSqr = function() {
        return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
      }, o.prototype.redISqr = function() {
        return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
      }, o.prototype.redSqrt = function() {
        return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
      }, o.prototype.redInvm = function() {
        return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
      }, o.prototype.redNeg = function() {
        return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
      }, o.prototype.redPow = function(t) {
        return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t);
      };
      var g = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function y(t, e) {
        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      function w() {
        y.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }
      function _() {
        y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }
      function M() {
        y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }
      function b() {
        y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }
      function k(t) {
        if ('string' == typeof t) {
          var e = o._prime(t);
          this.m = e.p, this.prime = e;
        } else n(t.gtn(1), 'modulus must be greater than 1'), this.m = t, this.prime = null;
      }
      function x(t) {
        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), 
        this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), 
        this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      y.prototype._tmp = function() {
        var t = new o(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t;
      }, y.prototype.ireduce = function(t) {
        var e = t;
        var r;
        do {
          this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
        } while (r > this.n);
        var n = r < this.n ? -1 : e.ucmp(this.p);
        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), 
        e;
      }, y.prototype.split = function(t, e) {
        t.iushrn(this.n, 0, e);
      }, y.prototype.imulK = function(t) {
        return t.imul(this.k);
      }, i(w, y), w.prototype.split = function(t, e) {
        var r = 4194303;
        var n = Math.min(t.length, 9);
        for (var i = 0; i < n; i++) e.words[i] = t.words[i];
        if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
        var o = t.words[9];
        for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
          var a = 0 | t.words[i];
          t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a;
        }
        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
      }, w.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 0 | t.words[r];
          e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
      }, i(_, y), i(M, y), i(b, y), b.prototype.imulK = function(t) {
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 19 * (0 | t.words[r]) + e;
          var i = 67108863 & n;
          n >>>= 26, t.words[r] = i, e = n;
        }
        return 0 !== e && (t.words[t.length++] = e), t;
      }, o._prime = function(t) {
        if (g[t]) return g[t];
        var e;
        if ('k256' === t) e = new w; else if ('p224' === t) e = new _; else if ('p192' === t) e = new M; else {
          if ('p25519' !== t) throw new Error('Unknown prime ' + t);
          e = new b;
        }
        return g[t] = e, e;
      }, k.prototype._verify1 = function(t) {
        n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers');
      }, k.prototype._verify2 = function(t, e) {
        n(0 == (t.negative | e.negative), 'red works only with positives'), n(t.red && t.red === e.red, 'red works only with red numbers');
      }, k.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
      }, k.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
      }, k.prototype.add = function(t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
      }, k.prototype.iadd = function(t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r;
      }, k.prototype.sub = function(t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
      }, k.prototype.isub = function(t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r;
      }, k.prototype.shl = function(t, e) {
        return this._verify1(t), this.imod(t.ushln(e));
      }, k.prototype.imul = function(t, e) {
        return this._verify2(t, e), this.imod(t.imul(e));
      }, k.prototype.mul = function(t, e) {
        return this._verify2(t, e), this.imod(t.mul(e));
      }, k.prototype.isqr = function(t) {
        return this.imul(t, t.clone());
      }, k.prototype.sqr = function(t) {
        return this.mul(t, t);
      }, k.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var e = this.m.andln(3);
        if (n(e % 2 == 1), 3 === e) {
          var r = this.m.add(new o(1)).iushrn(2);
          return this.pow(t, r);
        }
        var i = this.m.subn(1);
        var a = 0;
        for (;!i.isZero() && 0 === i.andln(1); ) a++, i.iushrn(1);
        n(!i.isZero());
        var s = new o(1).toRed(this);
        var u = s.redNeg();
        var h = this.m.subn(1).iushrn(1);
        var l = this.m.bitLength();
        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u); ) l.redIAdd(u);
        var c = this.pow(l, i);
        var f = this.pow(t, i.addn(1).iushrn(1));
        var d = this.pow(t, i);
        var p = a;
        for (;0 !== d.cmp(s); ) {
          var m = d;
          for (var v = 0; 0 !== m.cmp(s); v++) m = m.redSqr();
          n(v < p);
          var g = this.pow(c, new o(1).iushln(p - v - 1));
          f = f.redMul(g), c = g.redSqr(), d = d.redMul(c), p = v;
        }
        return f;
      }, k.prototype.invm = function(t) {
        var e = t._invmp(this.m);
        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
      }, k.prototype.pow = function(t, e) {
        if (e.isZero()) return new o(1).toRed(this);
        if (0 === e.cmpn(1)) return t.clone();
        var r = new Array(16);
        r[0] = new o(1).toRed(this), r[1] = t;
        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
        var i = r[0];
        var a = 0;
        var s = 0;
        var u = e.bitLength() % 26;
        for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
          var h = e.words[n];
          for (var l = u - 1; l >= 0; l--) {
            var c = h >> l & 1;
            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === l) && (i = this.mul(i, r[a]), 
            s = 0, a = 0)) : s = 0;
          }
          u = 26;
        }
        return i;
      }, k.prototype.convertTo = function(t) {
        var e = t.umod(this.m);
        return e === t ? e.clone() : e;
      }, k.prototype.convertFrom = function(t) {
        var e = t.clone();
        return e.red = null, e;
      }, o.mont = function(t) {
        return new x(t);
      }, i(x, k), x.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift));
      }, x.prototype.convertFrom = function(t) {
        var e = this.imod(t.mul(this.rinv));
        return e.red = null, e;
      }, x.prototype.imul = function(t, e) {
        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
        var r = t.imul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var o = i;
        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
      }, x.prototype.mul = function(t, e) {
        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
        var r = t.mul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var a = i;
        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
      }, x.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    }(t = r.nmd(t), this);
  },
  17499: (t, e, r) => {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t;
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    var i = r(82192), o = i.keccak224, a = i.keccak384, s = i.keccak256, u = i.keccak512;
    var h = r(35525);
    var l = r(69282);
    var c = r(51675);
    var f = r(89817);
    var d = r(23482);
    var p = r(89509).Buffer;
    Object.assign(e, r(80884)), e.MAX_INTEGER = new f('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16), 
    e.TWO_POW256 = new f('10000000000000000000000000000000000000000000000000000000000000000', 16), e.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470', 
    e.SHA3_NULL_S = e.KECCAK256_NULL_S, e.KECCAK256_NULL = p.from(e.KECCAK256_NULL_S, 'hex'), e.SHA3_NULL = e.KECCAK256_NULL, 
    e.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', e.SHA3_RLP_ARRAY_S = e.KECCAK256_RLP_ARRAY_S, 
    e.KECCAK256_RLP_ARRAY = p.from(e.KECCAK256_RLP_ARRAY_S, 'hex'), e.SHA3_RLP_ARRAY = e.KECCAK256_RLP_ARRAY, e.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 
    e.SHA3_RLP_S = e.KECCAK256_RLP_S, e.KECCAK256_RLP = p.from(e.KECCAK256_RLP_S, 'hex'), e.SHA3_RLP = e.KECCAK256_RLP, e.BN = f, 
    e.rlp = c, e.secp256k1 = h, e.zeros = function(t) {
      return p.allocUnsafe(t).fill(0);
    }, e.zeroAddress = function() {
      var t = e.zeros(20);
      return e.bufferToHex(t);
    }, e.setLengthLeft = e.setLength = function(t, r, n) {
      var i = e.zeros(r);
      return t = e.toBuffer(t), n ? t.length < r ? (t.copy(i), i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length), i) : t.slice(-r);
    }, e.setLengthRight = function(t, r) {
      return e.setLength(t, r, !0);
    }, e.unpad = e.stripZeros = function(t) {
      var r = (t = e.stripHexPrefix(t))[0];
      for (;t.length > 0 && '0' === r.toString(); ) r = (t = t.slice(1))[0];
      return t;
    }, e.toBuffer = function(t) {
      if (!p.isBuffer(t)) if (Array.isArray(t)) t = p.from(t); else if ('string' == typeof t) t = e.isHexString(t) ? p.from(e.padToEven(e.stripHexPrefix(t)), 'hex') : p.from(t); else if ('number' == typeof t) t = e.intToBuffer(t); else if (null == t) t = p.allocUnsafe(0); else if (f.isBN(t)) t = t.toArrayLike(p); else {
        if (!t.toArray) throw new Error('invalid type');
        t = p.from(t.toArray());
      }
      return t;
    }, e.bufferToInt = function(t) {
      return new f(e.toBuffer(t)).toNumber();
    }, e.bufferToHex = function(t) {
      return '0x' + (t = e.toBuffer(t)).toString('hex');
    }, e.fromSigned = function(t) {
      return new f(t).fromTwos(256);
    }, e.toUnsigned = function(t) {
      return p.from(t.toTwos(256).toArray());
    }, e.keccak = function(t, r) {
      switch (t = e.toBuffer(t), r || (r = 256), r) {
       case 224:
        return o(t);

       case 256:
        return s(t);

       case 384:
        return a(t);

       case 512:
        return u(t);

       default:
        throw new Error('Invald algorithm: keccak' + r);
      }
    }, e.keccak256 = function(t) {
      return e.keccak(t);
    }, e.sha3 = e.keccak, e.sha256 = function(t) {
      return t = e.toBuffer(t), d('sha256').update(t).digest();
    }, e.ripemd160 = function(t, r) {
      t = e.toBuffer(t);
      var n = d('rmd160').update(t).digest();
      return !0 === r ? e.setLength(n, 32) : n;
    }, e.rlphash = function(t) {
      return e.keccak(c.encode(t));
    }, e.isValidPrivate = function(t) {
      return h.privateKeyVerify(t);
    }, e.isValidPublic = function(t, e) {
      return 64 === t.length ? h.publicKeyVerify(p.concat([ p.from([ 4 ]), t ])) : !!e && h.publicKeyVerify(t);
    }, e.pubToAddress = e.publicToAddress = function(t, r) {
      return t = e.toBuffer(t), r && 64 !== t.length && (t = h.publicKeyConvert(t, !1).slice(1)), l(64 === t.length), e.keccak(t).slice(-20);
    };
    var m = e.privateToPublic = function(t) {
      return t = e.toBuffer(t), h.publicKeyCreate(t, !1).slice(1);
    };
    e.importPublic = function(t) {
      return 64 !== (t = e.toBuffer(t)).length && (t = h.publicKeyConvert(t, !1).slice(1)), t;
    }, e.ecsign = function(t, e) {
      var r = h.sign(t, e);
      var n = {};
      return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n;
    }, e.hashPersonalMessage = function(t) {
      var r = e.toBuffer('Ethereum Signed Message:\n' + t.length.toString());
      return e.keccak(p.concat([ r, t ]));
    }, e.ecrecover = function(t, r, n, i) {
      var o = p.concat([ e.setLength(n, 32), e.setLength(i, 32) ], 64);
      var a = r - 27;
      if (0 !== a && 1 !== a) throw new Error('Invalid signature v value');
      var s = h.recover(t, o, a);
      return h.publicKeyConvert(s, !1).slice(1);
    }, e.toRpcSig = function(t, r, n) {
      if (27 !== t && 28 !== t) throw new Error('Invalid recovery id');
      return e.bufferToHex(p.concat([ e.setLengthLeft(r, 32), e.setLengthLeft(n, 32), e.toBuffer(t - 27) ]));
    }, e.fromRpcSig = function(t) {
      if (65 !== (t = e.toBuffer(t)).length) throw new Error('Invalid signature length');
      var r = t[64];
      return r < 27 && (r += 27), {
        v: r,
        r: t.slice(0, 32),
        s: t.slice(32, 64)
      };
    }, e.privateToAddress = function(t) {
      return e.publicToAddress(m(t));
    }, e.isValidAddress = function(t) {
      return /^0x[0-9a-fA-F]{40}$/.test(t);
    }, e.isZeroAddress = function(t) {
      return e.zeroAddress() === e.addHexPrefix(t);
    }, e.toChecksumAddress = function(t) {
      t = e.stripHexPrefix(t).toLowerCase();
      var r = e.keccak(t).toString('hex');
      var n = '0x';
      for (var i = 0; i < t.length; i++) parseInt(r[i], 16) >= 8 ? n += t[i].toUpperCase() : n += t[i];
      return n;
    }, e.isValidChecksumAddress = function(t) {
      return e.isValidAddress(t) && e.toChecksumAddress(t) === t;
    }, e.generateAddress = function(t, r) {
      return t = e.toBuffer(t), r = (r = new f(r)).isZero() ? null : p.from(r.toArray()), e.rlphash([ t, r ]).slice(-20);
    }, e.isPrecompiled = function(t) {
      var r = e.unpad(t);
      return 1 === r.length && r[0] >= 1 && r[0] <= 8;
    }, e.addHexPrefix = function(t) {
      return 'string' != typeof t || e.isHexPrefixed(t) ? t : '0x' + t;
    }, e.isValidSignature = function(t, e, r, n) {
      var i = new f('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
      var o = new f('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
      return 32 === e.length && 32 === r.length && ((27 === t || 28 === t) && (e = new f(e), r = new f(r), !(e.isZero() || e.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new f(r).cmp(i))));
    }, e.baToJSON = function(t) {
      if (p.isBuffer(t)) return '0x' + t.toString('hex');
      if (t instanceof Array) {
        var r = [];
        for (var n = 0; n < t.length; n++) r.push(e.baToJSON(t[n]));
        return r;
      }
    }, e.defineProperties = function(t, r, i) {
      if (t.raw = [], t._fields = [], t.toJSON = function(r) {
        if (r) {
          var n = {};
          return t._fields.forEach((function(e) {
            n[e] = '0x' + t[e].toString('hex');
          })), n;
        }
        return e.baToJSON(this.raw);
      }, t.serialize = function() {
        return c.encode(t.raw);
      }, r.forEach((function(r, n) {
        function i() {
          return t.raw[n];
        }
        function o(i) {
          '00' !== (i = e.toBuffer(i)).toString('hex') || r.allowZero || (i = p.allocUnsafe(0)), r.allowLess && r.length ? (i = e.stripZeros(i), 
          l(r.length >= i.length, 'The field ' + r.name + ' must not have more ' + r.length + ' bytes')) : r.allowZero && 0 === i.length || !r.length || l(r.length === i.length, 'The field ' + r.name + ' must have byte length of ' + r.length), 
          t.raw[n] = i;
        }
        t._fields.push(r.name), Object.defineProperty(t, r.name, {
          enumerable: !0,
          configurable: !0,
          get: i,
          set: o
        }), r.default && (t[r.name] = r.default), r.alias && Object.defineProperty(t, r.alias, {
          enumerable: !1,
          configurable: !0,
          set: o,
          get: i
        });
      })), i) if ('string' == typeof i && (i = p.from(e.stripHexPrefix(i), 'hex')), p.isBuffer(i) && (i = c.decode(i)), Array.isArray(i)) {
        if (i.length > t._fields.length) throw new Error('wrong number of fields in data');
        i.forEach((function(r, n) {
          t[t._fields[n]] = e.toBuffer(r);
        }));
      } else {
        if ('object' !== (void 0 === i ? 'undefined' : n(i))) throw new Error('invalid data');
        var o = Object.keys(i);
        r.forEach((function(e) {
          -1 !== o.indexOf(e.name) && (t[e.name] = i[e.name]), -1 !== o.indexOf(e.alias) && (t[e.alias] = i[e.alias]);
        }));
      }
    };
  },
  35525: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(95053);
    var o = r(33780);
    var a = r(1029);
    var s = function(t) {
      return 32 === t.length && i.privateKeyVerify(Uint8Array.from(t));
    };
    t.exports = {
      privateKeyVerify: s,
      privateKeyExport: function(t, e) {
        if (32 !== t.length) throw new RangeError('private key length is invalid');
        var r = o.privateKeyExport(t, e);
        return a.privateKeyExport(t, r, e);
      },
      privateKeyImport: function(t) {
        if (null !== (t = a.privateKeyImport(t)) && 32 === t.length && s(t)) return t;
        throw new Error("couldn't import from DER format");
      },
      privateKeyNegate: function(t) {
        return n.from(i.privateKeyNegate(Uint8Array.from(t)));
      },
      privateKeyModInverse: function(t) {
        if (32 !== t.length) throw new Error('private key length is invalid');
        return n.from(o.privateKeyModInverse(Uint8Array.from(t)));
      },
      privateKeyTweakAdd: function(t, e) {
        return n.from(i.privateKeyTweakAdd(Uint8Array.from(t), e));
      },
      privateKeyTweakMul: function(t, e) {
        return n.from(i.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e)));
      },
      publicKeyCreate: function(t, e) {
        return n.from(i.publicKeyCreate(Uint8Array.from(t), e));
      },
      publicKeyConvert: function(t, e) {
        return n.from(i.publicKeyConvert(Uint8Array.from(t), e));
      },
      publicKeyVerify: function(t) {
        return (33 === t.length || 65 === t.length) && i.publicKeyVerify(Uint8Array.from(t));
      },
      publicKeyTweakAdd: function(t, e, r) {
        return n.from(i.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(e), r));
      },
      publicKeyTweakMul: function(t, e, r) {
        return n.from(i.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e), r));
      },
      publicKeyCombine: function(t, e) {
        var r = [];
        return t.forEach((function(t) {
          r.push(Uint8Array.from(t));
        })), n.from(i.publicKeyCombine(r, e));
      },
      signatureNormalize: function(t) {
        return n.from(i.signatureNormalize(Uint8Array.from(t)));
      },
      signatureExport: function(t) {
        return n.from(i.signatureExport(Uint8Array.from(t)));
      },
      signatureImport: function(t) {
        return n.from(i.signatureImport(Uint8Array.from(t)));
      },
      signatureImportLax: function(t) {
        if (0 === t.length) throw new RangeError('signature length is invalid');
        var e = a.signatureImportLax(t);
        if (null === e) throw new Error("couldn't parse DER signature");
        return o.signatureImport(e);
      },
      sign: function(t, e, r) {
        if (null === r) throw new TypeError('options should be an Object');
        var o = void 0;
        if (r) {
          if (o = {}, null === r.data) throw new TypeError('options.data should be a Buffer');
          if (r.data) {
            if (32 !== r.data.length) throw new RangeError('options.data length is invalid');
            o.data = new Uint8Array(r.data);
          }
          if (null === r.noncefn) throw new TypeError('options.noncefn should be a Function');
          r.noncefn && (o.noncefn = function(t, e, i, o, a) {
            var s = null != i ? n.from(i) : null;
            var u = null != o ? n.from(o) : null;
            var h = n.from('');
            return r.noncefn && (h = r.noncefn(n.from(t), n.from(e), s, u, a)), Uint8Array.from(h);
          });
        }
        var a = i.ecdsaSign(Uint8Array.from(t), Uint8Array.from(e), o);
        return {
          signature: n.from(a.signature),
          recovery: a.recid
        };
      },
      verify: function(t, e, r) {
        return i.ecdsaVerify(Uint8Array.from(e), Uint8Array.from(t), r);
      },
      recover: function(t, e, r, o) {
        return n.from(i.ecdsaRecover(Uint8Array.from(e), r, Uint8Array.from(t), o));
      },
      ecdh: function(t, e) {
        return n.from(i.ecdh(Uint8Array.from(t), Uint8Array.from(e), {}));
      },
      ecdhUnsafe: function(t, e, r) {
        if (33 !== t.length && 65 !== t.length) throw new RangeError('public key length is invalid');
        if (32 !== e.length) throw new RangeError('private key length is invalid');
        return n.from(o.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(e), r));
      }
    };
  },
  1029: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = n.from([ 48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    var o = n.from([ 48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    e.privateKeyExport = function(t, e, r) {
      var a = n.from(r ? i : o);
      return t.copy(a, r ? 8 : 9), e.copy(a, r ? 181 : 214), a;
    }, e.privateKeyImport = function(t) {
      var e = t.length;
      var r = 0;
      if (e < r + 1 || 48 !== t[r]) return null;
      if (e < (r += 1) + 1 || !(128 & t[r])) return null;
      var n = 127 & t[r];
      if (n < 1 || n > 2) return null;
      if (e < (r += 1) + n) return null;
      var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0);
      return e < (r += n) + i || e < r + 3 || 2 !== t[r] || 1 !== t[r + 1] || 1 !== t[r + 2] || e < (r += 3) + 2 || 4 !== t[r] || t[r + 1] > 32 || e < r + 2 + t[r + 1] ? null : t.slice(r + 2, r + 2 + t[r + 1]);
    }, e.signatureImportLax = function(t) {
      var e = n.alloc(32, 0);
      var r = n.alloc(32, 0);
      var i = t.length;
      var o = 0;
      if (48 !== t[o++]) return null;
      var a = t[o++];
      if (128 & a && (o += a - 128) > i) return null;
      if (2 !== t[o++]) return null;
      var s = t[o++];
      if (128 & s) {
        if (o + (a = s - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o];
      }
      if (s > i - o) return null;
      var u = o;
      if (o += s, 2 !== t[o++]) return null;
      var h = t[o++];
      if (128 & h) {
        if (o + (a = h - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (h = 0; a > 0; o += 1, a -= 1) h = (h << 8) + t[o];
      }
      if (h > i - o) return null;
      var l = o;
      for (o += h; s > 0 && 0 === t[u]; s -= 1, u += 1) ;
      if (s > 32) return null;
      var c = t.slice(u, u + s);
      for (c.copy(e, 32 - c.length); h > 0 && 0 === t[l]; h -= 1, l += 1) ;
      if (h > 32) return null;
      var f = t.slice(l, l + h);
      return f.copy(r, 32 - f.length), {
        r: e,
        s: r
      };
    };
  },
  33780: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(89817);
    var o = new (0, r(86266).ec)('secp256k1');
    var a = o.curve;
    e.privateKeyExport = function(t, e) {
      var r = new i(t);
      if (r.ucmp(a.n) >= 0) throw new Error('couldn\'t export to DER format');
      var n = o.g.mul(r);
      return s(n.getX(), n.getY(), e);
    }, e.privateKeyModInverse = function(t) {
      var e = new i(t);
      if (e.ucmp(a.n) >= 0 || e.isZero()) throw new Error('private key range is invalid');
      return e.invm(a.n).toArrayLike(n, 'be', 32);
    }, e.signatureImport = function(t) {
      var e = new i(t.r);
      e.ucmp(a.n) >= 0 && (e = new i(0));
      var r = new i(t.s);
      return r.ucmp(a.n) >= 0 && (r = new i(0)), n.concat([ e.toArrayLike(n, 'be', 32), r.toArrayLike(n, 'be', 32) ]);
    }, e.ecdhUnsafe = function(t, e, r) {
      var n = o.keyFromPublic(t);
      var u = new i(e);
      if (u.ucmp(a.n) >= 0 || u.isZero()) throw new Error('scalar was invalid (zero or overflow)');
      var h = n.pub.mul(u);
      return s(h.getX(), h.getY(), r);
    };
    var s = function(t, e, r) {
      var i = void 0;
      return r ? ((i = n.alloc(33))[0] = e.isOdd() ? 3 : 2, t.toArrayLike(n, 'be', 32).copy(i, 1)) : ((i = n.alloc(65))[0] = 4, 
      t.toArrayLike(n, 'be', 32).copy(i, 1), e.toArrayLike(n, 'be', 32).copy(i, 33)), i;
    };
  },
  68142: (t, e, r) => {
    t.exports = r(75437);
  },
  75437: (t, e, r) => {
    var n = r(48764).Buffer;
    const i = r(86589);
    const o = r(91609);
    var a = function() {};
    function s(t) {
      return t.startsWith('int[') ? 'int256' + t.slice(3) : 'int' === t ? 'int256' : t.startsWith('uint[') ? 'uint256' + t.slice(4) : 'uint' === t ? 'uint256' : t.startsWith('fixed[') ? 'fixed128x128' + t.slice(5) : 'fixed' === t ? 'fixed128x128' : t.startsWith('ufixed[') ? 'ufixed128x128' + t.slice(6) : 'ufixed' === t ? 'ufixed128x128' : t;
    }
    function u(t) {
      return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
    }
    function h(t) {
      var e = /^\D+(\d+)x(\d+)$/.exec(t);
      return [ parseInt(e[1], 10), parseInt(e[2], 10) ];
    }
    function l(t) {
      var e = t.match(/(.*)\[(.*?)\]$/);
      return e ? '' === e[2] ? 'dynamic' : parseInt(e[2], 10) : null;
    }
    function c(t) {
      var e = typeof t;
      if ('string' === e) return i.isHexPrefixed(t) ? new o(i.stripHexPrefix(t), 16) : new o(t, 10);
      if ('number' === e) return new o(t);
      if (t.toArray) return t;
      throw new Error('Argument is not a number');
    }
    function f(t) {
      var e = /^(\w+)\((.*)\)$/.exec(t);
      if (3 !== e.length) throw new Error('Invalid method signature');
      var r = /^(.+)\):\((.+)$/.exec(e[2]);
      if (null !== r && 3 === r.length) return {
        method: e[1],
        args: r[1].split(','),
        retargs: r[2].split(',')
      };
      var n = e[2].split(',');
      return 1 === n.length && '' === n[0] && (n = []), {
        method: e[1],
        args: n
      };
    }
    function d(t, e) {
      var r, a, s, f;
      if ('address' === t) return d('uint160', c(e));
      if ('bool' === t) return d('uint8', e ? 1 : 0);
      if ('string' === t) return d('bytes', n.from(e, 'utf8'));
      if (g(t)) {
        if (void 0 === e.length) throw new Error('Not an array?');
        if ('dynamic' !== (r = l(t)) && 0 !== r && e.length > r) throw new Error('Elements exceed array size: ' + r);
        for (f in s = [], t = t.slice(0, t.lastIndexOf('[')), 'string' == typeof e && (e = JSON.parse(e)), e) s.push(d(t, e[f]));
        if ('dynamic' === r) {
          var p = d('uint256', e.length);
          s.unshift(p);
        }
        return n.concat(s);
      }
      if ('bytes' === t) return e = n.from(e), s = n.concat([ d('uint256', e.length), e ]), e.length % 32 != 0 && (s = n.concat([ s, i.zeros(32 - e.length % 32) ])), 
      s;
      if (t.startsWith('bytes')) {
        if ((r = u(t)) < 1 || r > 32) throw new Error('Invalid bytes<N> width: ' + r);
        return i.setLengthRight(e, 32);
      }
      if (t.startsWith('uint')) {
        if ((r = u(t)) % 8 || r < 8 || r > 256) throw new Error('Invalid uint<N> width: ' + r);
        if ((a = c(e)).bitLength() > r) throw new Error('Supplied uint exceeds width: ' + r + ' vs ' + a.bitLength());
        if (a < 0) throw new Error('Supplied uint is negative');
        return a.toArrayLike(n, 'be', 32);
      }
      if (t.startsWith('int')) {
        if ((r = u(t)) % 8 || r < 8 || r > 256) throw new Error('Invalid int<N> width: ' + r);
        if ((a = c(e)).bitLength() > r) throw new Error('Supplied int exceeds width: ' + r + ' vs ' + a.bitLength());
        return a.toTwos(256).toArrayLike(n, 'be', 32);
      }
      if (t.startsWith('ufixed')) {
        if (r = h(t), (a = c(e)) < 0) throw new Error('Supplied ufixed is negative');
        return d('uint256', a.mul(new o(2).pow(new o(r[1]))));
      }
      if (t.startsWith('fixed')) return r = h(t), d('int256', c(e).mul(new o(2).pow(new o(r[1]))));
      throw new Error('Unsupported or invalid type: ' + t);
    }
    function p(t, e, r) {
      var i, a, s, u;
      if ('string' == typeof t && (t = m(t)), 'address' === t.name) return p(t.rawType, e, r).toArrayLike(n, 'be', 20).toString('hex');
      if ('bool' === t.name) return p(t.rawType, e, r).toString() === new o(1).toString();
      if ('string' === t.name) {
        var h = p(t.rawType, e, r);
        return n.from(h, 'utf8').toString();
      }
      if (t.isArray) {
        for (s = [], i = t.size, 'dynamic' === t.size && (r = p('uint256', e, r).toNumber(), i = p('uint256', e, r).toNumber(), 
        r += 32), u = 0; u < i; u++) {
          var l = p(t.subArray, e, r);
          s.push(l), r += t.subArray.memoryUsage;
        }
        return s;
      }
      if ('bytes' === t.name) return r = p('uint256', e, r).toNumber(), i = p('uint256', e, r).toNumber(), e.slice(r + 32, r + 32 + i);
      if (t.name.startsWith('bytes')) return e.slice(r, r + t.size);
      if (t.name.startsWith('uint')) {
        if ((a = new o(e.slice(r, r + 32), 16, 'be')).bitLength() > t.size) throw new Error('Decoded int exceeds width: ' + t.size + ' vs ' + a.bitLength());
        return a;
      }
      if (t.name.startsWith('int')) {
        if ((a = new o(e.slice(r, r + 32), 16, 'be').fromTwos(256)).bitLength() > t.size) throw new Error('Decoded uint exceeds width: ' + t.size + ' vs ' + a.bitLength());
        return a;
      }
      if (t.name.startsWith('ufixed')) {
        if (i = new o(2).pow(new o(t.size[1])), !(a = p('uint256', e, r)).mod(i).isZero()) throw new Error('Decimals not supported yet');
        return a.div(i);
      }
      if (t.name.startsWith('fixed')) {
        if (i = new o(2).pow(new o(t.size[1])), !(a = p('int256', e, r)).mod(i).isZero()) throw new Error('Decimals not supported yet');
        return a.div(i);
      }
      throw new Error('Unsupported or invalid type: ' + t.name);
    }
    function m(t) {
      var e;
      var r;
      if (g(t)) {
        e = l(t);
        var n = t.slice(0, t.lastIndexOf('['));
        return n = m(n), r = {
          isArray: !0,
          name: t,
          size: e,
          memoryUsage: 'dynamic' === e ? 32 : n.memoryUsage * e,
          subArray: n
        };
      }
      var i;
      switch (t) {
       case 'address':
        i = 'uint160';
        break;

       case 'bool':
        i = 'uint8';
        break;

       case 'string':
        i = 'bytes';
      }
      if (r = {
        rawType: i,
        name: t,
        memoryUsage: 32
      }, t.startsWith('bytes') && 'bytes' !== t || t.startsWith('uint') || t.startsWith('int') ? r.size = u(t) : (t.startsWith('ufixed') || t.startsWith('fixed')) && (r.size = h(t)), 
      t.startsWith('bytes') && 'bytes' !== t && (r.size < 1 || r.size > 32)) throw new Error('Invalid bytes<N> width: ' + r.size);
      if ((t.startsWith('uint') || t.startsWith('int')) && (r.size % 8 || r.size < 8 || r.size > 256)) throw new Error('Invalid int/uint<N> width: ' + r.size);
      return r;
    }
    function v(t) {
      return 'string' === t || 'bytes' === t || 'dynamic' === l(t);
    }
    function g(t) {
      return t.lastIndexOf(']') === t.length - 1;
    }
    function y(t, e) {
      return t.startsWith('address') || t.startsWith('bytes') ? '0x' + e.toString('hex') : e.toString();
    }
    function w(t) {
      return t >= '0' && t <= '9';
    }
    a.eventID = function(t, e) {
      var r = t + '(' + e.map(s).join(',') + ')';
      return i.keccak256(n.from(r));
    }, a.methodID = function(t, e) {
      return a.eventID(t, e).slice(0, 4);
    }, a.rawEncode = function(t, e) {
      var r = [];
      var i = [];
      var o = 0;
      t.forEach((function(t) {
        if (g(t)) {
          var e = l(t);
          o += 'dynamic' !== e ? 32 * e : 32;
        } else o += 32;
      }));
      for (var a = 0; a < t.length; a++) {
        var u = s(t[a]);
        var h = d(u, e[a]);
        v(u) ? (r.push(d('uint256', o)), i.push(h), o += h.length) : r.push(h);
      }
      return n.concat(r.concat(i));
    }, a.rawDecode = function(t, e) {
      var r = [];
      e = n.from(e);
      var i = 0;
      for (var o = 0; o < t.length; o++) {
        var a = m(s(t[o]));
        var u = p(a, e, i);
        i += a.memoryUsage, r.push(u);
      }
      return r;
    }, a.simpleEncode = function(t) {
      var e = Array.prototype.slice.call(arguments).slice(1);
      var r = f(t);
      if (e.length !== r.args.length) throw new Error('Argument count mismatch');
      return n.concat([ a.methodID(r.method, r.args), a.rawEncode(r.args, e) ]);
    }, a.simpleDecode = function(t, e) {
      var r = f(t);
      if (!r.retargs) throw new Error('No return values in method');
      return a.rawDecode(r.retargs, e);
    }, a.stringify = function(t, e) {
      var r = [];
      for (var n in t) {
        var i = t[n];
        var o = e[n];
        o = /^[^\[]+\[.*\]$/.test(i) ? o.map((function(t) {
          return y(i, t);
        })).join(', ') : y(i, o), r.push(o);
      }
      return r;
    }, a.solidityHexValue = function(t, e, r) {
      var o, s;
      if (g(t)) {
        var h = t.replace(/\[.*?\]/, '');
        if (!g(h)) {
          var f = l(t);
          if ('dynamic' !== f && 0 !== f && e.length > f) throw new Error('Elements exceed array size: ' + f);
        }
        var d = e.map((function(t) {
          return a.solidityHexValue(h, t, 256);
        }));
        return n.concat(d);
      }
      if ('bytes' === t) return e;
      if ('string' === t) return n.from(e, 'utf8');
      if ('bool' === t) {
        r = r || 8;
        var p = Array(r / 4).join('0');
        return n.from(e ? p + '1' : p + '0', 'hex');
      }
      if ('address' === t) {
        var m = 20;
        return r && (m = r / 8), i.setLengthLeft(e, m);
      }
      if (t.startsWith('bytes')) {
        if ((o = u(t)) < 1 || o > 32) throw new Error('Invalid bytes<N> width: ' + o);
        return i.setLengthRight(e, o);
      }
      if (t.startsWith('uint')) {
        if ((o = u(t)) % 8 || o < 8 || o > 256) throw new Error('Invalid uint<N> width: ' + o);
        if ((s = c(e)).bitLength() > o) throw new Error('Supplied uint exceeds width: ' + o + ' vs ' + s.bitLength());
        return r = r || o, s.toArrayLike(n, 'be', r / 8);
      }
      if (t.startsWith('int')) {
        if ((o = u(t)) % 8 || o < 8 || o > 256) throw new Error('Invalid int<N> width: ' + o);
        if ((s = c(e)).bitLength() > o) throw new Error('Supplied int exceeds width: ' + o + ' vs ' + s.bitLength());
        return r = r || o, s.toTwos(o).toArrayLike(n, 'be', r / 8);
      }
      throw new Error('Unsupported or invalid type: ' + t);
    }, a.solidityPack = function(t, e) {
      if (t.length !== e.length) throw new Error('Number of types are not matching the values');
      var r = [];
      for (var i = 0; i < t.length; i++) {
        var o = s(t[i]);
        var u = e[i];
        r.push(a.solidityHexValue(o, u, null));
      }
      return n.concat(r);
    }, a.soliditySHA3 = function(t, e) {
      return i.keccak256(a.solidityPack(t, e));
    }, a.soliditySHA256 = function(t, e) {
      return i.sha256(a.solidityPack(t, e));
    }, a.solidityRIPEMD160 = function(t, e) {
      return i.ripemd160(a.solidityPack(t, e), !0);
    }, a.fromSerpent = function(t) {
      var e = [];
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        if ('s' === n) e.push('bytes'); else if ('b' === n) {
          var i = 'bytes';
          var o = r + 1;
          for (;o < t.length && w(t[o]); ) i += t[o] - '0', o++;
          r = o - 1, e.push(i);
        } else if ('i' === n) e.push('int256'); else {
          if ('a' !== n) throw new Error('Unsupported or invalid type: ' + n);
          e.push('int256[]');
        }
      }
      return e;
    }, a.toSerpent = function(t) {
      var e = [];
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        if ('bytes' === n) e.push('s'); else if (n.startsWith('bytes')) e.push('b' + u(n)); else if ('int256' === n) e.push('i'); else {
          if ('int256[]' !== n) throw new Error('Unsupported or invalid type: ' + n);
          e.push('a');
        }
      }
      return e.join('');
    }, t.exports = a;
  },
  91609: function(t, e, r) {
    !function(t, e) {
      'use strict';
      function n(t, e) {
        if (!t) throw new Error(e || 'Assertion failed');
      }
      function i(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
      }
      function o(t, e, r) {
        if (o.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ('le' !== e && 'be' !== e || (r = e, 
        e = 10), this._init(t || 0, e || 10, r || 'be'));
      }
      var a;
      'object' == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
      try {
        a = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r(40127).Buffer;
      } catch (A) {}
      function s(t, e) {
        var r = t.charCodeAt(e);
        return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15;
      }
      function u(t, e, r) {
        var n = s(t, r);
        return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
      }
      function h(t, e, r, n) {
        var i = 0;
        var o = Math.min(t.length, r);
        for (var a = e; a < o; a++) {
          var s = t.charCodeAt(a) - 48;
          i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
        }
        return i;
      }
      o.isBN = function(t) {
        return t instanceof o || null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
      }, o.max = function(t, e) {
        return t.cmp(e) > 0 ? t : e;
      }, o.min = function(t, e) {
        return t.cmp(e) < 0 ? t : e;
      }, o.prototype._init = function(t, e, r) {
        if ('number' == typeof t) return this._initNumber(t, e, r);
        if ('object' == typeof t) return this._initArray(t, e, r);
        'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
        var i = 0;
        '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), 
        'le' === r && this._initArray(this.toArray(), e, r)));
      }, o.prototype._initNumber = function(t, e, r) {
        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [ 67108863 & t ], this.length = 1) : t < 4503599627370496 ? (this.words = [ 67108863 & t, t / 67108864 & 67108863 ], 
        this.length = 2) : (n(t < 9007199254740992), this.words = [ 67108863 & t, t / 67108864 & 67108863, 1 ], this.length = 3), 
        'le' === r && this._initArray(this.toArray(), e, r);
      }, o.prototype._initArray = function(t, e, r) {
        if (n('number' == typeof t.length), t.length <= 0) return this.words = [ 0 ], this.length = 1, this;
        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) this.words[i] = 0;
        var o, a;
        var s = 0;
        if ('be' === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, 
        this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); else if ('le' === r) for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, 
        this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
        return this.strip();
      }, o.prototype._parseHex = function(t, e, r) {
        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
        for (var n = 0; n < this.length; n++) this.words[n] = 0;
        var i = 0;
        var o = 0;
        var a;
        if ('be' === r) for (n = t.length - 1; n >= e; n -= 2) a = u(t, e, n) << i, this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, 
        o += 1, this.words[o] |= a >>> 26) : i += 8; else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) a = u(t, e, n) << i, 
        this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, o += 1, this.words[o] |= a >>> 26) : i += 8;
        this.strip();
      }, o.prototype._parseBase = function(t, e, r) {
        this.words = [ 0 ], this.length = 1;
        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
        n--, i = i / e | 0;
        var o = t.length - r;
        var a = o % n;
        var s = Math.min(o, o - a) + r;
        var u = 0;
        for (var l = r; l < s; l += n) u = h(t, l, l + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        if (0 !== a) {
          var c = 1;
          for (u = h(t, l, t.length, e), l = 0; l < a; l++) c *= e;
          this.imuln(c), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        }
        this.strip();
      }, o.prototype.copy = function(t) {
        t.words = new Array(this.length);
        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
        t.length = this.length, t.negative = this.negative, t.red = this.red;
      }, o.prototype.clone = function() {
        var t = new o(null);
        return this.copy(t), t;
      }, o.prototype._expand = function(t) {
        for (;this.length < t; ) this.words[this.length++] = 0;
        return this;
      }, o.prototype.strip = function() {
        for (;this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
        return this._normSign();
      }, o.prototype._normSign = function() {
        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
      }, o.prototype.inspect = function() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      var l = [ '', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000' ];
      var c = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
      var f = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
      function d(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var n = t.length + e.length | 0;
        r.length = n, n = n - 1 | 0;
        var i = 0 | t.words[0];
        var o = 0 | e.words[0];
        var a = i * o;
        var s = 67108863 & a;
        var u = a / 67108864 | 0;
        r.words[0] = s;
        for (var h = 1; h < n; h++) {
          var l = u >>> 26;
          var c = 67108863 & u;
          var f = Math.min(h, e.length - 1);
          for (var d = Math.max(0, h - t.length + 1); d <= f; d++) {
            var p = h - d | 0;
            l += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a;
          }
          r.words[h] = 0 | c, u = 0 | l;
        }
        return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
      }
      o.prototype.toString = function(t, e) {
        var r;
        if (e = 0 | e || 1, 16 === (t = t || 10) || 'hex' === t) {
          r = '';
          var i = 0;
          var o = 0;
          for (var a = 0; a < this.length; a++) {
            var s = this.words[a];
            var u = (16777215 & (s << i | o)).toString(16);
            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? l[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, 
            a--);
          }
          for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
          var h = c[t];
          var d = f[t];
          r = '';
          var p = this.clone();
          for (p.negative = 0; !p.isZero(); ) {
            var m = p.modn(d).toString(t);
            r = (p = p.idivn(d)).isZero() ? m + r : l[h - m.length] + m + r;
          }
          for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        n(!1, 'Base should be between 2 and 36');
      }, o.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'), 
        0 !== this.negative ? -t : t;
      }, o.prototype.toJSON = function() {
        return this.toString(16);
      }, o.prototype.toBuffer = function(t, e) {
        return n(void 0 !== a), this.toArrayLike(a, t, e);
      }, o.prototype.toArray = function(t, e) {
        return this.toArrayLike(Array, t, e);
      }, o.prototype.toArrayLike = function(t, e, r) {
        var i = this.byteLength();
        var o = r || Math.max(1, i);
        n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0'), this.strip();
        var a = 'le' === e;
        var s = new t(o);
        var u, h;
        var l = this.clone();
        if (a) {
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[h] = u;
          for (;h < o; h++) s[h] = 0;
        } else {
          for (h = 0; h < o - i; h++) s[h] = 0;
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[o - h - 1] = u;
        }
        return s;
      }, Math.clz32 ? o.prototype._countBits = function(t) {
        return 32 - Math.clz32(t);
      } : o.prototype._countBits = function(t) {
        var e = t;
        var r = 0;
        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, 
        e >>>= 2), r + e;
      }, o.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var e = t;
        var r = 0;
        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 
        0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
      }, o.prototype.bitLength = function() {
        var t = this.words[this.length - 1];
        var e = this._countBits(t);
        return 26 * (this.length - 1) + e;
      }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        var t = 0;
        for (var e = 0; e < this.length; e++) {
          var r = this._zeroBits(this.words[e]);
          if (t += r, 26 !== r) break;
        }
        return t;
      }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, o.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
      }, o.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
      }, o.prototype.isNeg = function() {
        return 0 !== this.negative;
      }, o.prototype.neg = function() {
        return this.clone().ineg();
      }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, o.prototype.iuor = function(t) {
        for (;this.length < t.length; ) this.words[this.length++] = 0;
        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
        return this.strip();
      }, o.prototype.ior = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuor(t);
      }, o.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
      }, o.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
      }, o.prototype.iuand = function(t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
        return this.length = e.length, this.strip();
      }, o.prototype.iand = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuand(t);
      }, o.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
      }, o.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
      }, o.prototype.iuxor = function(t) {
        var e;
        var r;
        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
        for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
        if (this !== e) for (;n < e.length; n++) this.words[n] = e.words[n];
        return this.length = e.length, this.strip();
      }, o.prototype.ixor = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuxor(t);
      }, o.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
      }, o.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
      }, o.prototype.inotn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = 0 | Math.ceil(t / 26);
        var r = t % 26;
        this._expand(e), r > 0 && e--;
        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
      }, o.prototype.notn = function(t) {
        return this.clone().inotn(t);
      }, o.prototype.setn = function(t, e) {
        n('number' == typeof t && t >= 0);
        var r = t / 26 | 0;
        var i = t % 26;
        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
      }, o.prototype.iadd = function(t) {
        var e;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
        var r, n;
        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
        var i = 0;
        for (var o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        for (;0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (;o < r.length; o++) this.words[o] = r.words[o];
        return this;
      }, o.prototype.add = function(t) {
        var e;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, 
        e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
      }, o.prototype.isub = function(t) {
        if (0 !== t.negative) {
          t.negative = 0;
          var e = this.iadd(t);
          return t.negative = 1, e._normSign();
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var r = this.cmp(t);
        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var n, i;
        r > 0 ? (n = this, i = t) : (n = t, i = this);
        var o = 0;
        for (var a = 0; a < i.length; a++) o = (e = (0 | n.words[a]) - (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        for (;0 !== o && a < n.length; a++) o = (e = (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        if (0 === o && a < n.length && n !== this) for (;a < n.length; a++) this.words[a] = n.words[a];
        return this.length = Math.max(this.length, a), n !== this && (this.negative = 1), this.strip();
      }, o.prototype.sub = function(t) {
        return this.clone().isub(t);
      };
      var p = function(t, e, r) {
        var n = t.words;
        var i = e.words;
        var o = r.words;
        var a = 0;
        var s;
        var u;
        var h;
        var l = 0 | n[0];
        var c = 8191 & l;
        var f = l >>> 13;
        var d = 0 | n[1];
        var p = 8191 & d;
        var m = d >>> 13;
        var v = 0 | n[2];
        var g = 8191 & v;
        var y = v >>> 13;
        var w = 0 | n[3];
        var _ = 8191 & w;
        var M = w >>> 13;
        var b = 0 | n[4];
        var k = 8191 & b;
        var x = b >>> 13;
        var A = 0 | n[5];
        var E = 8191 & A;
        var S = A >>> 13;
        var T = 0 | n[6];
        var C = 8191 & T;
        var R = T >>> 13;
        var B = 0 | n[7];
        var L = 8191 & B;
        var P = B >>> 13;
        var I = 0 | n[8];
        var O = 8191 & I;
        var N = I >>> 13;
        var U = 0 | n[9];
        var j = 8191 & U;
        var q = U >>> 13;
        var K = 0 | i[0];
        var H = 8191 & K;
        var F = K >>> 13;
        var z = 0 | i[1];
        var D = 8191 & z;
        var Z = z >>> 13;
        var W = 0 | i[2];
        var V = 8191 & W;
        var $ = W >>> 13;
        var G = 0 | i[3];
        var Y = 8191 & G;
        var J = G >>> 13;
        var Q = 0 | i[4];
        var X = 8191 & Q;
        var tt = Q >>> 13;
        var et = 0 | i[5];
        var rt = 8191 & et;
        var nt = et >>> 13;
        var it = 0 | i[6];
        var ot = 8191 & it;
        var at = it >>> 13;
        var st = 0 | i[7];
        var ut = 8191 & st;
        var ht = st >>> 13;
        var lt = 0 | i[8];
        var ct = 8191 & lt;
        var ft = lt >>> 13;
        var dt = 0 | i[9];
        var pt = 8191 & dt;
        var mt = dt >>> 13;
        r.negative = t.negative ^ e.negative, r.length = 19;
        var vt = (a + (s = Math.imul(c, H)) | 0) + ((8191 & (u = (u = Math.imul(c, F)) + Math.imul(f, H) | 0)) << 13) | 0;
        a = ((h = Math.imul(f, F)) + (u >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, s = Math.imul(p, H), u = (u = Math.imul(p, F)) + Math.imul(m, H) | 0, 
        h = Math.imul(m, F);
        var gt = (a + (s = s + Math.imul(c, D) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, Z) | 0) + Math.imul(f, D) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, Z) | 0) + (u >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, s = Math.imul(g, H), u = (u = Math.imul(g, F)) + Math.imul(y, H) | 0, 
        h = Math.imul(y, F), s = s + Math.imul(p, D) | 0, u = (u = u + Math.imul(p, Z) | 0) + Math.imul(m, D) | 0, h = h + Math.imul(m, Z) | 0;
        var yt = (a + (s = s + Math.imul(c, V) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, $) | 0) + Math.imul(f, V) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, $) | 0) + (u >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, s = Math.imul(_, H), u = (u = Math.imul(_, F)) + Math.imul(M, H) | 0, 
        h = Math.imul(M, F), s = s + Math.imul(g, D) | 0, u = (u = u + Math.imul(g, Z) | 0) + Math.imul(y, D) | 0, h = h + Math.imul(y, Z) | 0, 
        s = s + Math.imul(p, V) | 0, u = (u = u + Math.imul(p, $) | 0) + Math.imul(m, V) | 0, h = h + Math.imul(m, $) | 0;
        var wt = (a + (s = s + Math.imul(c, Y) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, J) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, J) | 0) + (u >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, s = Math.imul(k, H), u = (u = Math.imul(k, F)) + Math.imul(x, H) | 0, 
        h = Math.imul(x, F), s = s + Math.imul(_, D) | 0, u = (u = u + Math.imul(_, Z) | 0) + Math.imul(M, D) | 0, h = h + Math.imul(M, Z) | 0, 
        s = s + Math.imul(g, V) | 0, u = (u = u + Math.imul(g, $) | 0) + Math.imul(y, V) | 0, h = h + Math.imul(y, $) | 0, s = s + Math.imul(p, Y) | 0, 
        u = (u = u + Math.imul(p, J) | 0) + Math.imul(m, Y) | 0, h = h + Math.imul(m, J) | 0;
        var _t = (a + (s = s + Math.imul(c, X) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, tt) | 0) + (u >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, s = Math.imul(E, H), u = (u = Math.imul(E, F)) + Math.imul(S, H) | 0, 
        h = Math.imul(S, F), s = s + Math.imul(k, D) | 0, u = (u = u + Math.imul(k, Z) | 0) + Math.imul(x, D) | 0, h = h + Math.imul(x, Z) | 0, 
        s = s + Math.imul(_, V) | 0, u = (u = u + Math.imul(_, $) | 0) + Math.imul(M, V) | 0, h = h + Math.imul(M, $) | 0, s = s + Math.imul(g, Y) | 0, 
        u = (u = u + Math.imul(g, J) | 0) + Math.imul(y, Y) | 0, h = h + Math.imul(y, J) | 0, s = s + Math.imul(p, X) | 0, u = (u = u + Math.imul(p, tt) | 0) + Math.imul(m, X) | 0, 
        h = h + Math.imul(m, tt) | 0;
        var Mt = (a + (s = s + Math.imul(c, rt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, nt) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, nt) | 0) + (u >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, s = Math.imul(C, H), u = (u = Math.imul(C, F)) + Math.imul(R, H) | 0, 
        h = Math.imul(R, F), s = s + Math.imul(E, D) | 0, u = (u = u + Math.imul(E, Z) | 0) + Math.imul(S, D) | 0, h = h + Math.imul(S, Z) | 0, 
        s = s + Math.imul(k, V) | 0, u = (u = u + Math.imul(k, $) | 0) + Math.imul(x, V) | 0, h = h + Math.imul(x, $) | 0, s = s + Math.imul(_, Y) | 0, 
        u = (u = u + Math.imul(_, J) | 0) + Math.imul(M, Y) | 0, h = h + Math.imul(M, J) | 0, s = s + Math.imul(g, X) | 0, u = (u = u + Math.imul(g, tt) | 0) + Math.imul(y, X) | 0, 
        h = h + Math.imul(y, tt) | 0, s = s + Math.imul(p, rt) | 0, u = (u = u + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, h = h + Math.imul(m, nt) | 0;
        var bt = (a + (s = s + Math.imul(c, ot) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, at) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, at) | 0) + (u >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, s = Math.imul(L, H), u = (u = Math.imul(L, F)) + Math.imul(P, H) | 0, 
        h = Math.imul(P, F), s = s + Math.imul(C, D) | 0, u = (u = u + Math.imul(C, Z) | 0) + Math.imul(R, D) | 0, h = h + Math.imul(R, Z) | 0, 
        s = s + Math.imul(E, V) | 0, u = (u = u + Math.imul(E, $) | 0) + Math.imul(S, V) | 0, h = h + Math.imul(S, $) | 0, s = s + Math.imul(k, Y) | 0, 
        u = (u = u + Math.imul(k, J) | 0) + Math.imul(x, Y) | 0, h = h + Math.imul(x, J) | 0, s = s + Math.imul(_, X) | 0, u = (u = u + Math.imul(_, tt) | 0) + Math.imul(M, X) | 0, 
        h = h + Math.imul(M, tt) | 0, s = s + Math.imul(g, rt) | 0, u = (u = u + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, h = h + Math.imul(y, nt) | 0, 
        s = s + Math.imul(p, ot) | 0, u = (u = u + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, h = h + Math.imul(m, at) | 0;
        var kt = (a + (s = s + Math.imul(c, ut) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ht) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ht) | 0) + (u >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, s = Math.imul(O, H), u = (u = Math.imul(O, F)) + Math.imul(N, H) | 0, 
        h = Math.imul(N, F), s = s + Math.imul(L, D) | 0, u = (u = u + Math.imul(L, Z) | 0) + Math.imul(P, D) | 0, h = h + Math.imul(P, Z) | 0, 
        s = s + Math.imul(C, V) | 0, u = (u = u + Math.imul(C, $) | 0) + Math.imul(R, V) | 0, h = h + Math.imul(R, $) | 0, s = s + Math.imul(E, Y) | 0, 
        u = (u = u + Math.imul(E, J) | 0) + Math.imul(S, Y) | 0, h = h + Math.imul(S, J) | 0, s = s + Math.imul(k, X) | 0, u = (u = u + Math.imul(k, tt) | 0) + Math.imul(x, X) | 0, 
        h = h + Math.imul(x, tt) | 0, s = s + Math.imul(_, rt) | 0, u = (u = u + Math.imul(_, nt) | 0) + Math.imul(M, rt) | 0, h = h + Math.imul(M, nt) | 0, 
        s = s + Math.imul(g, ot) | 0, u = (u = u + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, h = h + Math.imul(y, at) | 0, s = s + Math.imul(p, ut) | 0, 
        u = (u = u + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, h = h + Math.imul(m, ht) | 0;
        var xt = (a + (s = s + Math.imul(c, ct) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ft) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ft) | 0) + (u >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, s = Math.imul(j, H), u = (u = Math.imul(j, F)) + Math.imul(q, H) | 0, 
        h = Math.imul(q, F), s = s + Math.imul(O, D) | 0, u = (u = u + Math.imul(O, Z) | 0) + Math.imul(N, D) | 0, h = h + Math.imul(N, Z) | 0, 
        s = s + Math.imul(L, V) | 0, u = (u = u + Math.imul(L, $) | 0) + Math.imul(P, V) | 0, h = h + Math.imul(P, $) | 0, s = s + Math.imul(C, Y) | 0, 
        u = (u = u + Math.imul(C, J) | 0) + Math.imul(R, Y) | 0, h = h + Math.imul(R, J) | 0, s = s + Math.imul(E, X) | 0, u = (u = u + Math.imul(E, tt) | 0) + Math.imul(S, X) | 0, 
        h = h + Math.imul(S, tt) | 0, s = s + Math.imul(k, rt) | 0, u = (u = u + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0, h = h + Math.imul(x, nt) | 0, 
        s = s + Math.imul(_, ot) | 0, u = (u = u + Math.imul(_, at) | 0) + Math.imul(M, ot) | 0, h = h + Math.imul(M, at) | 0, s = s + Math.imul(g, ut) | 0, 
        u = (u = u + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, h = h + Math.imul(y, ht) | 0, s = s + Math.imul(p, ct) | 0, u = (u = u + Math.imul(p, ft) | 0) + Math.imul(m, ct) | 0, 
        h = h + Math.imul(m, ft) | 0;
        var At = (a + (s = s + Math.imul(c, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, mt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, mt) | 0) + (u >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, s = Math.imul(j, D), u = (u = Math.imul(j, Z)) + Math.imul(q, D) | 0, 
        h = Math.imul(q, Z), s = s + Math.imul(O, V) | 0, u = (u = u + Math.imul(O, $) | 0) + Math.imul(N, V) | 0, h = h + Math.imul(N, $) | 0, 
        s = s + Math.imul(L, Y) | 0, u = (u = u + Math.imul(L, J) | 0) + Math.imul(P, Y) | 0, h = h + Math.imul(P, J) | 0, s = s + Math.imul(C, X) | 0, 
        u = (u = u + Math.imul(C, tt) | 0) + Math.imul(R, X) | 0, h = h + Math.imul(R, tt) | 0, s = s + Math.imul(E, rt) | 0, u = (u = u + Math.imul(E, nt) | 0) + Math.imul(S, rt) | 0, 
        h = h + Math.imul(S, nt) | 0, s = s + Math.imul(k, ot) | 0, u = (u = u + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0, h = h + Math.imul(x, at) | 0, 
        s = s + Math.imul(_, ut) | 0, u = (u = u + Math.imul(_, ht) | 0) + Math.imul(M, ut) | 0, h = h + Math.imul(M, ht) | 0, s = s + Math.imul(g, ct) | 0, 
        u = (u = u + Math.imul(g, ft) | 0) + Math.imul(y, ct) | 0, h = h + Math.imul(y, ft) | 0;
        var Et = (a + (s = s + Math.imul(p, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(m, mt) | 0) + (u >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, s = Math.imul(j, V), u = (u = Math.imul(j, $)) + Math.imul(q, V) | 0, 
        h = Math.imul(q, $), s = s + Math.imul(O, Y) | 0, u = (u = u + Math.imul(O, J) | 0) + Math.imul(N, Y) | 0, h = h + Math.imul(N, J) | 0, 
        s = s + Math.imul(L, X) | 0, u = (u = u + Math.imul(L, tt) | 0) + Math.imul(P, X) | 0, h = h + Math.imul(P, tt) | 0, s = s + Math.imul(C, rt) | 0, 
        u = (u = u + Math.imul(C, nt) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, nt) | 0, s = s + Math.imul(E, ot) | 0, u = (u = u + Math.imul(E, at) | 0) + Math.imul(S, ot) | 0, 
        h = h + Math.imul(S, at) | 0, s = s + Math.imul(k, ut) | 0, u = (u = u + Math.imul(k, ht) | 0) + Math.imul(x, ut) | 0, h = h + Math.imul(x, ht) | 0, 
        s = s + Math.imul(_, ct) | 0, u = (u = u + Math.imul(_, ft) | 0) + Math.imul(M, ct) | 0, h = h + Math.imul(M, ft) | 0;
        var St = (a + (s = s + Math.imul(g, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(y, mt) | 0) + (u >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, s = Math.imul(j, Y), u = (u = Math.imul(j, J)) + Math.imul(q, Y) | 0, 
        h = Math.imul(q, J), s = s + Math.imul(O, X) | 0, u = (u = u + Math.imul(O, tt) | 0) + Math.imul(N, X) | 0, h = h + Math.imul(N, tt) | 0, 
        s = s + Math.imul(L, rt) | 0, u = (u = u + Math.imul(L, nt) | 0) + Math.imul(P, rt) | 0, h = h + Math.imul(P, nt) | 0, s = s + Math.imul(C, ot) | 0, 
        u = (u = u + Math.imul(C, at) | 0) + Math.imul(R, ot) | 0, h = h + Math.imul(R, at) | 0, s = s + Math.imul(E, ut) | 0, u = (u = u + Math.imul(E, ht) | 0) + Math.imul(S, ut) | 0, 
        h = h + Math.imul(S, ht) | 0, s = s + Math.imul(k, ct) | 0, u = (u = u + Math.imul(k, ft) | 0) + Math.imul(x, ct) | 0, h = h + Math.imul(x, ft) | 0;
        var Tt = (a + (s = s + Math.imul(_, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(_, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(M, mt) | 0) + (u >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, s = Math.imul(j, X), u = (u = Math.imul(j, tt)) + Math.imul(q, X) | 0, 
        h = Math.imul(q, tt), s = s + Math.imul(O, rt) | 0, u = (u = u + Math.imul(O, nt) | 0) + Math.imul(N, rt) | 0, h = h + Math.imul(N, nt) | 0, 
        s = s + Math.imul(L, ot) | 0, u = (u = u + Math.imul(L, at) | 0) + Math.imul(P, ot) | 0, h = h + Math.imul(P, at) | 0, s = s + Math.imul(C, ut) | 0, 
        u = (u = u + Math.imul(C, ht) | 0) + Math.imul(R, ut) | 0, h = h + Math.imul(R, ht) | 0, s = s + Math.imul(E, ct) | 0, u = (u = u + Math.imul(E, ft) | 0) + Math.imul(S, ct) | 0, 
        h = h + Math.imul(S, ft) | 0;
        var Ct = (a + (s = s + Math.imul(k, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(x, mt) | 0) + (u >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, s = Math.imul(j, rt), u = (u = Math.imul(j, nt)) + Math.imul(q, rt) | 0, 
        h = Math.imul(q, nt), s = s + Math.imul(O, ot) | 0, u = (u = u + Math.imul(O, at) | 0) + Math.imul(N, ot) | 0, h = h + Math.imul(N, at) | 0, 
        s = s + Math.imul(L, ut) | 0, u = (u = u + Math.imul(L, ht) | 0) + Math.imul(P, ut) | 0, h = h + Math.imul(P, ht) | 0, s = s + Math.imul(C, ct) | 0, 
        u = (u = u + Math.imul(C, ft) | 0) + Math.imul(R, ct) | 0, h = h + Math.imul(R, ft) | 0;
        var Rt = (a + (s = s + Math.imul(E, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(E, mt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(S, mt) | 0) + (u >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, s = Math.imul(j, ot), u = (u = Math.imul(j, at)) + Math.imul(q, ot) | 0, 
        h = Math.imul(q, at), s = s + Math.imul(O, ut) | 0, u = (u = u + Math.imul(O, ht) | 0) + Math.imul(N, ut) | 0, h = h + Math.imul(N, ht) | 0, 
        s = s + Math.imul(L, ct) | 0, u = (u = u + Math.imul(L, ft) | 0) + Math.imul(P, ct) | 0, h = h + Math.imul(P, ft) | 0;
        var Bt = (a + (s = s + Math.imul(C, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(C, mt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(R, mt) | 0) + (u >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, s = Math.imul(j, ut), u = (u = Math.imul(j, ht)) + Math.imul(q, ut) | 0, 
        h = Math.imul(q, ht), s = s + Math.imul(O, ct) | 0, u = (u = u + Math.imul(O, ft) | 0) + Math.imul(N, ct) | 0, h = h + Math.imul(N, ft) | 0;
        var Lt = (a + (s = s + Math.imul(L, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(L, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(P, mt) | 0) + (u >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, s = Math.imul(j, ct), u = (u = Math.imul(j, ft)) + Math.imul(q, ct) | 0, 
        h = Math.imul(q, ft);
        var Pt = (a + (s = s + Math.imul(O, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(O, mt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(N, mt) | 0) + (u >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
        var It = (a + (s = Math.imul(j, pt)) | 0) + ((8191 & (u = (u = Math.imul(j, mt)) + Math.imul(q, pt) | 0)) << 13) | 0;
        return a = ((h = Math.imul(q, mt)) + (u >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, o[0] = vt, o[1] = gt, o[2] = yt, 
        o[3] = wt, o[4] = _t, o[5] = Mt, o[6] = bt, o[7] = kt, o[8] = xt, o[9] = At, o[10] = Et, o[11] = St, o[12] = Tt, o[13] = Ct, 
        o[14] = Rt, o[15] = Bt, o[16] = Lt, o[17] = Pt, o[18] = It, 0 !== a && (o[19] = a, r.length++), r;
      };
      function m(t, e, r) {
        return (new v).mulp(t, e, r);
      }
      function v(t, e) {
        this.x = t, this.y = e;
      }
      Math.imul || (p = d), o.prototype.mulTo = function(t, e) {
        var r;
        var n = this.length + t.length;
        return r = 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, r) {
          r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
          var n = 0;
          var i = 0;
          for (var o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            var s = 67108863 & n;
            var u = Math.min(o, e.length - 1);
            for (var h = Math.max(0, o - t.length + 1); h <= u; h++) {
              var l = o - h;
              var c = (0 | t.words[l]) * (0 | e.words[h]);
              var f = 67108863 & c;
              s = 67108863 & (f = f + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, a &= 67108863;
            }
            r.words[o] = s, n = a, a = i;
          }
          return 0 !== n ? r.words[o] = n : r.length--, r.strip();
        }(this, t, e) : m(this, t, e), r;
      }, v.prototype.makeRBT = function(t) {
        var e = new Array(t);
        var r = o.prototype._countBits(t) - 1;
        for (var n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
        return e;
      }, v.prototype.revBin = function(t, e, r) {
        if (0 === t || t === r - 1) return t;
        var n = 0;
        for (var i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
        return n;
      }, v.prototype.permute = function(t, e, r, n, i, o) {
        for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]];
      }, v.prototype.transform = function(t, e, r, n, i, o) {
        this.permute(o, t, e, r, n, i);
        for (var a = 1; a < i; a <<= 1) {
          var s = a << 1;
          var u = Math.cos(2 * Math.PI / s);
          var h = Math.sin(2 * Math.PI / s);
          for (var l = 0; l < i; l += s) {
            var c = u;
            var f = h;
            for (var d = 0; d < a; d++) {
              var p = r[l + d];
              var m = n[l + d];
              var v = r[l + d + a];
              var g = n[l + d + a];
              var y = c * v - f * g;
              g = c * g + f * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + a] = p - v, n[l + d + a] = m - g, d !== s && (y = u * c - h * f, 
              f = u * f + h * c, c = y);
            }
          }
        }
      }, v.prototype.guessLen13b = function(t, e) {
        var r = 1 | Math.max(e, t);
        var n = 1 & r;
        var i = 0;
        for (r = r / 2 | 0; r; r >>>= 1) i++;
        return 1 << i + 1 + n;
      }, v.prototype.conjugate = function(t, e, r) {
        if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
          var i = t[n];
          t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
        }
      }, v.prototype.normalize13b = function(t, e) {
        var r = 0;
        for (var n = 0; n < e / 2; n++) {
          var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
          t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
        }
        return t;
      }, v.prototype.convert13b = function(t, e, r, i) {
        var o = 0;
        for (var a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
        for (a = 2 * e; a < i; ++a) r[a] = 0;
        n(0 === o), n(0 == (-8192 & o));
      }, v.prototype.stub = function(t) {
        var e = new Array(t);
        for (var r = 0; r < t; r++) e[r] = 0;
        return e;
      }, v.prototype.mulp = function(t, e, r) {
        var n = 2 * this.guessLen13b(t.length, e.length);
        var i = this.makeRBT(n);
        var o = this.stub(n);
        var a = new Array(n);
        var s = new Array(n);
        var u = new Array(n);
        var h = new Array(n);
        var l = new Array(n);
        var c = new Array(n);
        var f = r.words;
        f.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, h, n), this.transform(a, o, s, u, n, i), 
        this.transform(h, o, l, c, n, i);
        for (var d = 0; d < n; d++) {
          var p = s[d] * l[d] - u[d] * c[d];
          u[d] = s[d] * c[d] + u[d] * l[d], s[d] = p;
        }
        return this.conjugate(s, u, n), this.transform(s, u, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = t.negative ^ e.negative, 
        r.length = t.length + e.length, r.strip();
      }, o.prototype.mul = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), this.mulTo(t, e);
      }, o.prototype.mulf = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), m(this, t, e);
      }, o.prototype.imul = function(t) {
        return this.clone().mulTo(t, this);
      }, o.prototype.imuln = function(t) {
        n('number' == typeof t), n(t < 67108864);
        var e = 0;
        for (var r = 0; r < this.length; r++) {
          var i = (0 | this.words[r]) * t;
          var o = (67108863 & i) + (67108863 & e);
          e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o;
        }
        return 0 !== e && (this.words[r] = e, this.length++), this;
      }, o.prototype.muln = function(t) {
        return this.clone().imuln(t);
      }, o.prototype.sqr = function() {
        return this.mul(this);
      }, o.prototype.isqr = function() {
        return this.imul(this.clone());
      }, o.prototype.pow = function(t) {
        var e = function(t) {
          var e = new Array(t.bitLength());
          for (var r = 0; r < e.length; r++) {
            var n = r / 26 | 0;
            var i = r % 26;
            e[r] = (t.words[n] & 1 << i) >>> i;
          }
          return e;
        }(t);
        if (0 === e.length) return new o(1);
        var r = this;
        for (var n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
        if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
        return r;
      }, o.prototype.iushln = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 67108863 >>> 26 - e << 26 - e;
        var o;
        if (0 !== e) {
          var a = 0;
          for (o = 0; o < this.length; o++) {
            var s = this.words[o] & i;
            var u = (0 | this.words[o]) - s << e;
            this.words[o] = u | a, a = s >>> 26 - e;
          }
          a && (this.words[o] = a, this.length++);
        }
        if (0 !== r) {
          for (o = this.length - 1; o >= 0; o--) this.words[o + r] = this.words[o];
          for (o = 0; o < r; o++) this.words[o] = 0;
          this.length += r;
        }
        return this.strip();
      }, o.prototype.ishln = function(t) {
        return n(0 === this.negative), this.iushln(t);
      }, o.prototype.iushrn = function(t, e, r) {
        var i;
        n('number' == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
        var o = t % 26;
        var a = Math.min((t - o) / 26, this.length);
        var s = 67108863 ^ 67108863 >>> o << o;
        var u = r;
        if (i -= a, i = Math.max(0, i), u) {
          for (var h = 0; h < a; h++) u.words[h] = this.words[h];
          u.length = a;
        }
        if (0 === a) ; else if (this.length > a) for (this.length -= a, h = 0; h < this.length; h++) this.words[h] = this.words[h + a]; else this.words[0] = 0, 
        this.length = 1;
        var l = 0;
        for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
          var c = 0 | this.words[h];
          this.words[h] = l << 26 - o | c >>> o, l = c & s;
        }
        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
      }, o.prototype.ishrn = function(t, e, r) {
        return n(0 === this.negative), this.iushrn(t, e, r);
      }, o.prototype.shln = function(t) {
        return this.clone().ishln(t);
      }, o.prototype.ushln = function(t) {
        return this.clone().iushln(t);
      }, o.prototype.shrn = function(t) {
        return this.clone().ishrn(t);
      }, o.prototype.ushrn = function(t) {
        return this.clone().iushrn(t);
      }, o.prototype.testn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        return !(this.length <= r) && !!(this.words[r] & i);
      }, o.prototype.imaskn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        if (n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r) return this;
        if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
          var i = 67108863 ^ 67108863 >>> e << e;
          this.words[this.length - 1] &= i;
        }
        return this.strip();
      }, o.prototype.maskn = function(t) {
        return this.clone().imaskn(t);
      }, o.prototype.iaddn = function(t) {
        return n('number' == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), 
        this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
      }, o.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
        return this.length = Math.max(this.length, e + 1), this;
      }, o.prototype.isubn = function(t) {
        if (n('number' == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, 
        this.words[e + 1] -= 1;
        return this.strip();
      }, o.prototype.addn = function(t) {
        return this.clone().iaddn(t);
      }, o.prototype.subn = function(t) {
        return this.clone().isubn(t);
      }, o.prototype.iabs = function() {
        return this.negative = 0, this;
      }, o.prototype.abs = function() {
        return this.clone().iabs();
      }, o.prototype._ishlnsubmul = function(t, e, r) {
        var i = t.length + r;
        var o;
        var a;
        this._expand(i);
        var s = 0;
        for (o = 0; o < t.length; o++) {
          a = (0 | this.words[o + r]) + s;
          var u = (0 | t.words[o]) * e;
          s = ((a -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[o + r] = 67108863 & a;
        }
        for (;o < this.length - r; o++) s = (a = (0 | this.words[o + r]) + s) >> 26, this.words[o + r] = 67108863 & a;
        if (0 === s) return this.strip();
        for (n(-1 === s), s = 0, o = 0; o < this.length; o++) s = (a = -(0 | this.words[o]) + s) >> 26, this.words[o] = 67108863 & a;
        return this.negative = 1, this.strip();
      }, o.prototype._wordDiv = function(t, e) {
        var r = (this.length, t.length);
        var n = this.clone();
        var i = t;
        var a = 0 | i.words[i.length - 1];
        0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
        var s = n.length - i.length;
        var u;
        if ('mod' !== e) {
          (u = new o(null)).length = s + 1, u.words = new Array(u.length);
          for (var h = 0; h < u.length; h++) u.words[h] = 0;
        }
        var l = n.clone()._ishlnsubmul(i, 1, s);
        0 === l.negative && (n = l, u && (u.words[s] = 1));
        for (var c = s - 1; c >= 0; c--) {
          var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
          for (f = Math.min(f / a | 0, 67108863), n._ishlnsubmul(i, f, c); 0 !== n.negative; ) f--, n.negative = 0, n._ishlnsubmul(i, 1, c), 
          n.isZero() || (n.negative ^= 1);
          u && (u.words[c] = f);
        }
        return u && u.strip(), n.strip(), 'div' !== e && 0 !== r && n.iushrn(r), {
          div: u || null,
          mod: n
        };
      }, o.prototype.divmod = function(t, e, r) {
        return n(!t.isZero()), this.isZero() ? {
          div: new o(0),
          mod: new o(0)
        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), 'mod' !== e && (i = s.div.neg()), 'div' !== e && (a = s.mod.neg(), 
        r && 0 !== a.negative && a.iadd(t)), {
          div: i,
          mod: a
        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), 'mod' !== e && (i = s.div.neg()), {
          div: i,
          mod: s.mod
        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), 'div' !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), 
        {
          div: s.div,
          mod: a
        }) : t.length > this.length || this.cmp(t) < 0 ? {
          div: new o(0),
          mod: this
        } : 1 === t.length ? 'div' === e ? {
          div: this.divn(t.words[0]),
          mod: null
        } : 'mod' === e ? {
          div: null,
          mod: new o(this.modn(t.words[0]))
        } : {
          div: this.divn(t.words[0]),
          mod: new o(this.modn(t.words[0]))
        } : this._wordDiv(t, e);
        var i, a, s;
      }, o.prototype.div = function(t) {
        return this.divmod(t, 'div', !1).div;
      }, o.prototype.mod = function(t) {
        return this.divmod(t, 'mod', !1).mod;
      }, o.prototype.umod = function(t) {
        return this.divmod(t, 'mod', !0).mod;
      }, o.prototype.divRound = function(t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) return e.div;
        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod;
        var n = t.ushrn(1);
        var i = t.andln(1);
        var o = r.cmp(n);
        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
      }, o.prototype.modn = function(t) {
        n(t <= 67108863);
        var e = (1 << 26) % t;
        var r = 0;
        for (var i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
        return r;
      }, o.prototype.idivn = function(t) {
        n(t <= 67108863);
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var i = (0 | this.words[r]) + 67108864 * e;
          this.words[r] = i / t | 0, e = i % t;
        }
        return this.strip();
      }, o.prototype.divn = function(t) {
        return this.clone().idivn(t);
      }, o.prototype.egcd = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = new o(0);
        var u = new o(1);
        var h = 0;
        for (;e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++h;
        var l = r.clone();
        var c = e.clone();
        for (;!e.isZero(); ) {
          for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1) ;
          if (f > 0) for (e.iushrn(f); f-- > 0; ) (i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(c)), i.iushrn(1), a.iushrn(1);
          for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1) ;
          if (p > 0) for (r.iushrn(p); p-- > 0; ) (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(c)), s.iushrn(1), u.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a));
        }
        return {
          a: s,
          b: u,
          gcd: r.iushln(h)
        };
      }, o.prototype._invmp = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = r.clone();
        for (;e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
          for (var u = 0, h = 1; 0 == (e.words[0] & h) && u < 26; ++u, h <<= 1) ;
          if (u > 0) for (e.iushrn(u); u-- > 0; ) i.isOdd() && i.iadd(s), i.iushrn(1);
          for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1) ;
          if (l > 0) for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(s), a.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(a)) : (r.isub(e), a.isub(i));
        }
        var f;
        return (f = 0 === e.cmpn(1) ? i : a).cmpn(0) < 0 && f.iadd(t), f;
      }, o.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var e = this.clone();
        var r = t.clone();
        e.negative = 0, r.negative = 0;
        for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
        for (;;) {
          for (;e.isEven(); ) e.iushrn(1);
          for (;r.isEven(); ) r.iushrn(1);
          var i = e.cmp(r);
          if (i < 0) {
            var o = e;
            e = r, r = o;
          } else if (0 === i || 0 === r.cmpn(1)) break;
          e.isub(r);
        }
        return r.iushln(n);
      }, o.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t);
      }, o.prototype.isEven = function() {
        return 0 == (1 & this.words[0]);
      }, o.prototype.isOdd = function() {
        return 1 == (1 & this.words[0]);
      }, o.prototype.andln = function(t) {
        return this.words[0] & t;
      }, o.prototype.bincn = function(t) {
        n('number' == typeof t);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
        var o = i;
        for (var a = r; 0 !== o && a < this.length; a++) {
          var s = 0 | this.words[a];
          o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
        }
        return 0 !== o && (this.words[a] = o, this.length++), this;
      }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0];
      }, o.prototype.cmpn = function(t) {
        var e = t < 0;
        if (0 !== this.negative && !e) return -1;
        if (0 === this.negative && e) return 1;
        var r;
        if (this.strip(), this.length > 1) r = 1; else {
          e && (t = -t), n(t <= 67108863, 'Number is too big');
          var i = 0 | this.words[0];
          r = i === t ? 0 : i < t ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -r : r;
      }, o.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var e = this.ucmp(t);
        return 0 !== this.negative ? 0 | -e : e;
      }, o.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var n = 0 | this.words[r];
          var i = 0 | t.words[r];
          if (n !== i) {
            n < i ? e = -1 : n > i && (e = 1);
            break;
          }
        }
        return e;
      }, o.prototype.gtn = function(t) {
        return 1 === this.cmpn(t);
      }, o.prototype.gt = function(t) {
        return 1 === this.cmp(t);
      }, o.prototype.gten = function(t) {
        return this.cmpn(t) >= 0;
      }, o.prototype.gte = function(t) {
        return this.cmp(t) >= 0;
      }, o.prototype.ltn = function(t) {
        return -1 === this.cmpn(t);
      }, o.prototype.lt = function(t) {
        return -1 === this.cmp(t);
      }, o.prototype.lten = function(t) {
        return this.cmpn(t) <= 0;
      }, o.prototype.lte = function(t) {
        return this.cmp(t) <= 0;
      }, o.prototype.eqn = function(t) {
        return 0 === this.cmpn(t);
      }, o.prototype.eq = function(t) {
        return 0 === this.cmp(t);
      }, o.red = function(t) {
        return new k(t);
      }, o.prototype.toRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), n(0 === this.negative, 'red works only with positives'), t.convertTo(this)._forceRed(t);
      }, o.prototype.fromRed = function() {
        return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
      }, o.prototype._forceRed = function(t) {
        return this.red = t, this;
      }, o.prototype.forceRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), this._forceRed(t);
      }, o.prototype.redAdd = function(t) {
        return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t);
      }, o.prototype.redIAdd = function(t) {
        return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t);
      }, o.prototype.redSub = function(t) {
        return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t);
      }, o.prototype.redISub = function(t) {
        return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t);
      }, o.prototype.redShl = function(t) {
        return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t);
      }, o.prototype.redMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t);
      }, o.prototype.redIMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t);
      }, o.prototype.redSqr = function() {
        return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
      }, o.prototype.redISqr = function() {
        return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
      }, o.prototype.redSqrt = function() {
        return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
      }, o.prototype.redInvm = function() {
        return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
      }, o.prototype.redNeg = function() {
        return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
      }, o.prototype.redPow = function(t) {
        return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t);
      };
      var g = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function y(t, e) {
        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      function w() {
        y.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }
      function _() {
        y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }
      function M() {
        y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }
      function b() {
        y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }
      function k(t) {
        if ('string' == typeof t) {
          var e = o._prime(t);
          this.m = e.p, this.prime = e;
        } else n(t.gtn(1), 'modulus must be greater than 1'), this.m = t, this.prime = null;
      }
      function x(t) {
        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), 
        this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), 
        this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      y.prototype._tmp = function() {
        var t = new o(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t;
      }, y.prototype.ireduce = function(t) {
        var e = t;
        var r;
        do {
          this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
        } while (r > this.n);
        var n = r < this.n ? -1 : e.ucmp(this.p);
        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), 
        e;
      }, y.prototype.split = function(t, e) {
        t.iushrn(this.n, 0, e);
      }, y.prototype.imulK = function(t) {
        return t.imul(this.k);
      }, i(w, y), w.prototype.split = function(t, e) {
        var r = 4194303;
        var n = Math.min(t.length, 9);
        for (var i = 0; i < n; i++) e.words[i] = t.words[i];
        if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
        var o = t.words[9];
        for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
          var a = 0 | t.words[i];
          t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a;
        }
        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
      }, w.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 0 | t.words[r];
          e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
      }, i(_, y), i(M, y), i(b, y), b.prototype.imulK = function(t) {
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 19 * (0 | t.words[r]) + e;
          var i = 67108863 & n;
          n >>>= 26, t.words[r] = i, e = n;
        }
        return 0 !== e && (t.words[t.length++] = e), t;
      }, o._prime = function(t) {
        if (g[t]) return g[t];
        var e;
        if ('k256' === t) e = new w; else if ('p224' === t) e = new _; else if ('p192' === t) e = new M; else {
          if ('p25519' !== t) throw new Error('Unknown prime ' + t);
          e = new b;
        }
        return g[t] = e, e;
      }, k.prototype._verify1 = function(t) {
        n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers');
      }, k.prototype._verify2 = function(t, e) {
        n(0 == (t.negative | e.negative), 'red works only with positives'), n(t.red && t.red === e.red, 'red works only with red numbers');
      }, k.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
      }, k.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
      }, k.prototype.add = function(t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
      }, k.prototype.iadd = function(t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r;
      }, k.prototype.sub = function(t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
      }, k.prototype.isub = function(t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r;
      }, k.prototype.shl = function(t, e) {
        return this._verify1(t), this.imod(t.ushln(e));
      }, k.prototype.imul = function(t, e) {
        return this._verify2(t, e), this.imod(t.imul(e));
      }, k.prototype.mul = function(t, e) {
        return this._verify2(t, e), this.imod(t.mul(e));
      }, k.prototype.isqr = function(t) {
        return this.imul(t, t.clone());
      }, k.prototype.sqr = function(t) {
        return this.mul(t, t);
      }, k.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var e = this.m.andln(3);
        if (n(e % 2 == 1), 3 === e) {
          var r = this.m.add(new o(1)).iushrn(2);
          return this.pow(t, r);
        }
        var i = this.m.subn(1);
        var a = 0;
        for (;!i.isZero() && 0 === i.andln(1); ) a++, i.iushrn(1);
        n(!i.isZero());
        var s = new o(1).toRed(this);
        var u = s.redNeg();
        var h = this.m.subn(1).iushrn(1);
        var l = this.m.bitLength();
        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u); ) l.redIAdd(u);
        var c = this.pow(l, i);
        var f = this.pow(t, i.addn(1).iushrn(1));
        var d = this.pow(t, i);
        var p = a;
        for (;0 !== d.cmp(s); ) {
          var m = d;
          for (var v = 0; 0 !== m.cmp(s); v++) m = m.redSqr();
          n(v < p);
          var g = this.pow(c, new o(1).iushln(p - v - 1));
          f = f.redMul(g), c = g.redSqr(), d = d.redMul(c), p = v;
        }
        return f;
      }, k.prototype.invm = function(t) {
        var e = t._invmp(this.m);
        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
      }, k.prototype.pow = function(t, e) {
        if (e.isZero()) return new o(1).toRed(this);
        if (0 === e.cmpn(1)) return t.clone();
        var r = new Array(16);
        r[0] = new o(1).toRed(this), r[1] = t;
        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
        var i = r[0];
        var a = 0;
        var s = 0;
        var u = e.bitLength() % 26;
        for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
          var h = e.words[n];
          for (var l = u - 1; l >= 0; l--) {
            var c = h >> l & 1;
            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === l) && (i = this.mul(i, r[a]), 
            s = 0, a = 0)) : s = 0;
          }
          u = 26;
        }
        return i;
      }, k.prototype.convertTo = function(t) {
        var e = t.umod(this.m);
        return e === t ? e.clone() : e;
      }, k.prototype.convertFrom = function(t) {
        var e = t.clone();
        return e.red = null, e;
      }, o.mont = function(t) {
        return new x(t);
      }, i(x, k), x.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift));
      }, x.prototype.convertFrom = function(t) {
        var e = this.imod(t.mul(this.rinv));
        return e.red = null, e;
      }, x.prototype.imul = function(t, e) {
        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
        var r = t.imul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var o = i;
        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
      }, x.prototype.mul = function(t, e) {
        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
        var r = t.mul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var a = i;
        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
      }, x.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    }(t = r.nmd(t), this);
  },
  30248: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.importPublic = e.privateToPublic = e.privateToAddress = e.publicToAddress = e.pubToAddress = e.isValidPublic = e.isValidPrivate = e.isPrecompiled = e.generateAddress2 = e.generateAddress = e.isValidChecksumAddress = e.toChecksumAddress = e.isZeroAddress = e.isValidAddress = e.zeroAddress = void 0;
    var i = r(69282);
    var o = r(80884);
    var a = r(83230);
    var s = r(91609);
    var u = r(77124);
    var h = r(91550);
    e.zeroAddress = function() {
      var t = u.zeros(20);
      return u.bufferToHex(t);
    }, e.isValidAddress = function(t) {
      return /^0x[0-9a-fA-F]{40}$/.test(t);
    }, e.isZeroAddress = function(t) {
      return e.zeroAddress() === u.addHexPrefix(t);
    }, e.toChecksumAddress = function(t, e) {
      t = o.stripHexPrefix(t).toLowerCase();
      var r = void 0 !== e ? e.toString() + '0x' : '';
      var n = h.keccak(r + t).toString('hex');
      var i = '0x';
      for (var a = 0; a < t.length; a++) parseInt(n[a], 16) >= 8 ? i += t[a].toUpperCase() : i += t[a];
      return i;
    }, e.isValidChecksumAddress = function(t, r) {
      return e.isValidAddress(t) && e.toChecksumAddress(t, r) === t;
    }, e.generateAddress = function(t, e) {
      t = u.toBuffer(t);
      var r = new s(e);
      return r.isZero() ? h.rlphash([ t, null ]).slice(-20) : h.rlphash([ t, n.from(r.toArray()) ]).slice(-20);
    }, e.generateAddress2 = function(t, e, r) {
      var o = u.toBuffer(t);
      var a = u.toBuffer(e);
      var s = u.toBuffer(r);
      return i(20 === o.length), i(32 === a.length), h.keccak256(n.concat([ n.from('ff', 'hex'), o, a, h.keccak256(s) ])).slice(-20);
    }, e.isPrecompiled = function(t) {
      var e = u.unpad(t);
      return 1 === e.length && e[0] >= 1 && e[0] <= 8;
    }, e.isValidPrivate = function(t) {
      return a.privateKeyVerify(t);
    }, e.isValidPublic = function(t, e) {
      return void 0 === e && (e = !1), 64 === t.length ? a.publicKeyVerify(n.concat([ n.from([ 4 ]), t ])) : !!e && a.publicKeyVerify(t);
    }, e.pubToAddress = function(t, e) {
      return void 0 === e && (e = !1), t = u.toBuffer(t), e && 64 !== t.length && (t = a.publicKeyConvert(t, !1).slice(1)), i(64 === t.length), 
      h.keccak(t).slice(-20);
    }, e.publicToAddress = e.pubToAddress, e.privateToAddress = function(t) {
      return e.publicToAddress(e.privateToPublic(t));
    }, e.privateToPublic = function(t) {
      return t = u.toBuffer(t), a.publicKeyCreate(t, !1).slice(1);
    }, e.importPublic = function(t) {
      return 64 !== (t = u.toBuffer(t)).length && (t = a.publicKeyConvert(t, !1).slice(1)), t;
    };
  },
  77124: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.baToJSON = e.addHexPrefix = e.toUnsigned = e.fromSigned = e.bufferToHex = e.bufferToInt = e.toBuffer = e.stripZeros = e.unpad = e.setLengthRight = e.setLength = e.setLengthLeft = e.zeros = void 0;
    var i = r(80884);
    var o = r(91609);
    e.zeros = function(t) {
      return n.allocUnsafe(t).fill(0);
    }, e.setLengthLeft = function(t, r, n) {
      void 0 === n && (n = !1);
      var i = e.zeros(r);
      return t = e.toBuffer(t), n ? t.length < r ? (t.copy(i), i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length), i) : t.slice(-r);
    }, e.setLength = e.setLengthLeft, e.setLengthRight = function(t, r) {
      return e.setLength(t, r, !0);
    }, e.unpad = function(t) {
      var e = (t = i.stripHexPrefix(t))[0];
      for (;t.length > 0 && '0' === e.toString(); ) e = (t = t.slice(1))[0];
      return t;
    }, e.stripZeros = e.unpad, e.toBuffer = function(t) {
      if (!n.isBuffer(t)) if (Array.isArray(t)) t = n.from(t); else if ('string' == typeof t) {
        if (!i.isHexString(t)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + t);
        t = n.from(i.padToEven(i.stripHexPrefix(t)), 'hex');
      } else if ('number' == typeof t) t = i.intToBuffer(t); else if (null == t) t = n.allocUnsafe(0); else if (o.isBN(t)) t = t.toArrayLike(n); else {
        if (!t.toArray) throw new Error('invalid type');
        t = n.from(t.toArray());
      }
      return t;
    }, e.bufferToInt = function(t) {
      return new o(e.toBuffer(t)).toNumber();
    }, e.bufferToHex = function(t) {
      return '0x' + (t = e.toBuffer(t)).toString('hex');
    }, e.fromSigned = function(t) {
      return new o(t).fromTwos(256);
    }, e.toUnsigned = function(t) {
      return n.from(t.toTwos(256).toArray());
    }, e.addHexPrefix = function(t) {
      return 'string' != typeof t || i.isHexPrefixed(t) ? t : '0x' + t;
    }, e.baToJSON = function(t) {
      if (n.isBuffer(t)) return "0x" + t.toString('hex');
      if (t instanceof Array) {
        var r = [];
        for (var i = 0; i < t.length; i++) r.push(e.baToJSON(t[i]));
        return r;
      }
    };
  },
  46649: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.KECCAK256_RLP = e.KECCAK256_RLP_S = e.KECCAK256_RLP_ARRAY = e.KECCAK256_RLP_ARRAY_S = e.KECCAK256_NULL = e.KECCAK256_NULL_S = e.TWO_POW256 = e.MAX_INTEGER = void 0;
    var i = r(91609);
    e.MAX_INTEGER = new i('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16), e.TWO_POW256 = new i('10000000000000000000000000000000000000000000000000000000000000000', 16), 
    e.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470', e.KECCAK256_NULL = n.from(e.KECCAK256_NULL_S, 'hex'), 
    e.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', e.KECCAK256_RLP_ARRAY = n.from(e.KECCAK256_RLP_ARRAY_S, 'hex'), 
    e.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', e.KECCAK256_RLP = n.from(e.KECCAK256_RLP_S, 'hex');
  },
  91550: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.rlphash = e.ripemd160 = e.sha256 = e.keccak256 = e.keccak = void 0;
    var i = r(82192), o = i.keccak224, a = i.keccak384, s = i.keccak256, u = i.keccak512;
    var h = r(23482);
    var l = r(80884);
    var c = r(51675);
    var f = r(77124);
    e.keccak = function(t, e) {
      switch (void 0 === e && (e = 256), t = 'string' != typeof t || l.isHexString(t) ? f.toBuffer(t) : n.from(t, 'utf8'), e || (e = 256), 
      e) {
       case 224:
        return o(t);

       case 256:
        return s(t);

       case 384:
        return a(t);

       case 512:
        return u(t);

       default:
        throw new Error("Invald algorithm: keccak" + e);
      }
    }, e.keccak256 = function(t) {
      return e.keccak(t);
    }, e.sha256 = function(t) {
      return t = f.toBuffer(t), h('sha256').update(t).digest();
    }, e.ripemd160 = function(t, e) {
      t = f.toBuffer(t);
      var r = h('rmd160').update(t).digest();
      return !0 === e ? f.setLength(r, 32) : r;
    }, e.rlphash = function(t) {
      return e.keccak(c.encode(t));
    };
  },
  86589: function(t, e, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
      void 0 === n && (n = r), Object.defineProperty(t, n, {
        enumerable: !0,
        get: function() {
          return e[r];
        }
      });
    } : function(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    });
    var i = this && this.__exportStar || function(t, e) {
      for (var r in t) "default" === r || e.hasOwnProperty(r) || n(e, t, r);
    };
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.secp256k1 = e.rlp = e.BN = void 0;
    var o = r(83230);
    e.secp256k1 = o;
    var a = r(80884);
    var s = r(91609);
    e.BN = s;
    var u = r(51675);
    e.rlp = u, Object.assign(e, a), i(r(46649), e), i(r(30248), e), i(r(91550), e), i(r(86232), e), i(r(77124), e), i(r(81113), e);
  },
  81113: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.defineProperties = void 0;
    var i = r(69282);
    var o = r(80884);
    var a = r(51675);
    var s = r(77124);
    e.defineProperties = function(t, e, r) {
      if (t.raw = [], t._fields = [], t.toJSON = function(e) {
        if (void 0 === e && (e = !1), e) {
          var r = {};
          return t._fields.forEach((function(e) {
            r[e] = "0x" + t[e].toString('hex');
          })), r;
        }
        return s.baToJSON(t.raw);
      }, t.serialize = function() {
        return a.encode(t.raw);
      }, e.forEach((function(e, r) {
        function o() {
          return t.raw[r];
        }
        function a(o) {
          '00' !== (o = s.toBuffer(o)).toString('hex') || e.allowZero || (o = n.allocUnsafe(0)), e.allowLess && e.length ? (o = s.stripZeros(o), 
          i(e.length >= o.length, "The field " + e.name + " must not have more " + e.length + " bytes")) : e.allowZero && 0 === o.length || !e.length || i(e.length === o.length, "The field " + e.name + " must have byte length of " + e.length), 
          t.raw[r] = o;
        }
        t._fields.push(e.name), Object.defineProperty(t, e.name, {
          enumerable: !0,
          configurable: !0,
          get: o,
          set: a
        }), e.default && (t[e.name] = e.default), e.alias && Object.defineProperty(t, e.alias, {
          enumerable: !1,
          configurable: !0,
          set: a,
          get: o
        });
      })), r) if ('string' == typeof r && (r = n.from(o.stripHexPrefix(r), 'hex')), n.isBuffer(r) && (r = a.decode(r)), Array.isArray(r)) {
        if (r.length > t._fields.length) throw new Error('wrong number of fields in data');
        r.forEach((function(e, r) {
          t[t._fields[r]] = s.toBuffer(e);
        }));
      } else {
        if ('object' != typeof r) throw new Error('invalid data');
        var u = Object.keys(r);
        e.forEach((function(e) {
          -1 !== u.indexOf(e.name) && (t[e.name] = r[e.name]), -1 !== u.indexOf(e.alias) && (t[e.alias] = r[e.alias]);
        }));
      }
    };
  },
  83230: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.ecdhUnsafe = e.ecdh = e.recover = e.verify = e.sign = e.signatureImportLax = e.signatureImport = e.signatureExport = e.signatureNormalize = e.publicKeyCombine = e.publicKeyTweakMul = e.publicKeyTweakAdd = e.publicKeyVerify = e.publicKeyConvert = e.publicKeyCreate = e.privateKeyTweakMul = e.privateKeyTweakAdd = e.privateKeyModInverse = e.privateKeyNegate = e.privateKeyImport = e.privateKeyExport = e.privateKeyVerify = void 0;
    var i = r(95053);
    var o = r(78427);
    var a = r(33646);
    e.privateKeyVerify = function(t) {
      return 32 === t.length && i.privateKeyVerify(Uint8Array.from(t));
    }, e.privateKeyExport = function(t, e) {
      if (32 !== t.length) throw new RangeError('private key length is invalid');
      var r = o.privateKeyExport(t, e);
      return a.privateKeyExport(t, r, e);
    }, e.privateKeyImport = function(t) {
      if (null !== (t = a.privateKeyImport(t)) && 32 === t.length && e.privateKeyVerify(t)) return t;
      throw new Error("couldn't import from DER format");
    }, e.privateKeyNegate = function(t) {
      return n.from(i.privateKeyNegate(Uint8Array.from(t)));
    }, e.privateKeyModInverse = function(t) {
      if (32 !== t.length) throw new Error('private key length is invalid');
      return n.from(o.privateKeyModInverse(Uint8Array.from(t)));
    }, e.privateKeyTweakAdd = function(t, e) {
      return n.from(i.privateKeyTweakAdd(Uint8Array.from(t), e));
    }, e.privateKeyTweakMul = function(t, e) {
      return n.from(i.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e)));
    }, e.publicKeyCreate = function(t, e) {
      return n.from(i.publicKeyCreate(Uint8Array.from(t), e));
    }, e.publicKeyConvert = function(t, e) {
      return n.from(i.publicKeyConvert(Uint8Array.from(t), e));
    }, e.publicKeyVerify = function(t) {
      return (33 === t.length || 65 === t.length) && i.publicKeyVerify(Uint8Array.from(t));
    }, e.publicKeyTweakAdd = function(t, e, r) {
      return n.from(i.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(e), r));
    }, e.publicKeyTweakMul = function(t, e, r) {
      return n.from(i.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e), r));
    }, e.publicKeyCombine = function(t, e) {
      var r = [];
      return t.forEach((function(t) {
        r.push(Uint8Array.from(t));
      })), n.from(i.publicKeyCombine(r, e));
    }, e.signatureNormalize = function(t) {
      return n.from(i.signatureNormalize(Uint8Array.from(t)));
    }, e.signatureExport = function(t) {
      return n.from(i.signatureExport(Uint8Array.from(t)));
    }, e.signatureImport = function(t) {
      return n.from(i.signatureImport(Uint8Array.from(t)));
    }, e.signatureImportLax = function(t) {
      if (0 === t.length) throw new RangeError('signature length is invalid');
      var e = a.signatureImportLax(t);
      if (null === e) throw new Error("couldn't parse DER signature");
      return o.signatureImport(e);
    }, e.sign = function(t, e, r) {
      if (null === r) throw new TypeError('options should be an Object');
      var o = void 0;
      if (r) {
        if (o = {}, null === r.data) throw new TypeError('options.data should be a Buffer');
        if (r.data) {
          if (32 != r.data.length) throw new RangeError('options.data length is invalid');
          o.data = new Uint8Array(r.data);
        }
        if (null === r.noncefn) throw new TypeError('options.noncefn should be a Function');
        r.noncefn && (o.noncefn = function(t, e, i, o, a) {
          var s = null != i ? n.from(i) : null;
          var u = null != o ? n.from(o) : null;
          var h = n.from('');
          return r.noncefn && (h = r.noncefn(n.from(t), n.from(e), s, u, a)), new Uint8Array(h);
        });
      }
      var a = i.ecdsaSign(Uint8Array.from(t), Uint8Array.from(e), o);
      return {
        signature: n.from(a.signature),
        recovery: a.recid
      };
    }, e.verify = function(t, e, r) {
      return i.ecdsaVerify(Uint8Array.from(e), Uint8Array.from(t), r);
    }, e.recover = function(t, e, r, o) {
      return n.from(i.ecdsaRecover(Uint8Array.from(e), r, Uint8Array.from(t), o));
    }, e.ecdh = function(t, e) {
      return n.from(i.ecdh(Uint8Array.from(t), Uint8Array.from(e), {}));
    }, e.ecdhUnsafe = function(t, e, r) {
      if (33 !== t.length && 65 !== t.length) throw new RangeError('public key length is invalid');
      if (32 !== e.length) throw new RangeError('private key length is invalid');
      return n.from(o.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(e), r));
    };
  },
  33646: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = n.from([ 48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    var o = n.from([ 48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    e.privateKeyExport = function(t, e, r) {
      void 0 === r && (r = !0);
      var a = n.from(r ? i : o);
      return t.copy(a, r ? 8 : 9), e.copy(a, r ? 181 : 214), a;
    }, e.privateKeyImport = function(t) {
      var e = t.length;
      var r = 0;
      if (e < r + 1 || 48 !== t[r]) return null;
      if (e < (r += 1) + 1 || !(128 & t[r])) return null;
      var n = 127 & t[r];
      if (n < 1 || n > 2) return null;
      if (e < (r += 1) + n) return null;
      var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0);
      return e < (r += n) + i || e < r + 3 || 2 !== t[r] || 1 !== t[r + 1] || 1 !== t[r + 2] || e < (r += 3) + 2 || 4 !== t[r] || t[r + 1] > 32 || e < r + 2 + t[r + 1] ? null : t.slice(r + 2, r + 2 + t[r + 1]);
    }, e.signatureImportLax = function(t) {
      var e = n.alloc(32, 0);
      var r = n.alloc(32, 0);
      var i = t.length;
      var o = 0;
      if (48 !== t[o++]) return null;
      var a = t[o++];
      if (128 & a && (o += a - 128) > i) return null;
      if (2 !== t[o++]) return null;
      var s = t[o++];
      if (128 & s) {
        if (o + (a = s - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o];
      }
      if (s > i - o) return null;
      var u = o;
      if (o += s, 2 !== t[o++]) return null;
      var h = t[o++];
      if (128 & h) {
        if (o + (a = h - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (h = 0; a > 0; o += 1, a -= 1) h = (h << 8) + t[o];
      }
      if (h > i - o) return null;
      var l = o;
      for (o += h; s > 0 && 0 === t[u]; s -= 1, u += 1) ;
      if (s > 32) return null;
      var c = t.slice(u, u + s);
      for (c.copy(e, 32 - c.length); h > 0 && 0 === t[l]; h -= 1, l += 1) ;
      if (h > 32) return null;
      var f = t.slice(l, l + h);
      return f.copy(r, 32 - f.length), {
        r: e,
        s: r
      };
    };
  },
  78427: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = r(91609);
    var o = new (0, r(86266).ec)('secp256k1');
    var a = o.curve;
    e.privateKeyExport = function(t, e) {
      void 0 === e && (e = !0);
      var r = new i(t);
      if (r.ucmp(a.n) >= 0) throw new Error("couldn't export to DER format");
      var n = o.g.mul(r);
      return s(n.getX(), n.getY(), e);
    }, e.privateKeyModInverse = function(t) {
      var e = new i(t);
      if (e.ucmp(a.n) >= 0 || e.isZero()) throw new Error('private key range is invalid');
      return e.invm(a.n).toArrayLike(n, 'be', 32);
    }, e.signatureImport = function(t) {
      var e = new i(t.r);
      e.ucmp(a.n) >= 0 && (e = new i(0));
      var r = new i(t.s);
      return r.ucmp(a.n) >= 0 && (r = new i(0)), n.concat([ e.toArrayLike(n, 'be', 32), r.toArrayLike(n, 'be', 32) ]);
    }, e.ecdhUnsafe = function(t, e, r) {
      void 0 === r && (r = !0);
      var n = o.keyFromPublic(t);
      var u = new i(e);
      if (u.ucmp(a.n) >= 0 || u.isZero()) throw new Error('scalar was invalid (zero or overflow)');
      var h = n.pub.mul(u);
      return s(h.getX(), h.getY(), r);
    };
    var s = function(t, e, r) {
      var i;
      return r ? ((i = n.alloc(33))[0] = e.isOdd() ? 3 : 2, t.toArrayLike(n, 'be', 32).copy(i, 1)) : ((i = n.alloc(65))[0] = 4, 
      t.toArrayLike(n, 'be', 32).copy(i, 1), e.toArrayLike(n, 'be', 32).copy(i, 33)), i;
    };
  },
  86232: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.hashPersonalMessage = e.isValidSignature = e.fromRpcSig = e.toRpcSig = e.ecrecover = e.ecsign = void 0;
    var i = r(83230);
    var o = r(91609);
    var a = r(77124);
    var s = r(91550);
    function u(t, e) {
      return e ? t - (2 * e + 35) : t - 27;
    }
    function h(t) {
      return 0 === t || 1 === t;
    }
    e.ecsign = function(t, e, r) {
      var n = i.sign(t, e);
      var o = n.recovery;
      return {
        r: n.signature.slice(0, 32),
        s: n.signature.slice(32, 64),
        v: r ? o + (2 * r + 35) : o + 27
      };
    }, e.ecrecover = function(t, e, r, o, s) {
      var l = n.concat([ a.setLength(r, 32), a.setLength(o, 32) ], 64);
      var c = u(e, s);
      if (!h(c)) throw new Error('Invalid signature v value');
      var f = i.recover(t, l, c);
      return i.publicKeyConvert(f, !1).slice(1);
    }, e.toRpcSig = function(t, e, r, i) {
      if (!h(u(t, i))) throw new Error('Invalid signature v value');
      return a.bufferToHex(n.concat([ a.setLengthLeft(e, 32), a.setLengthLeft(r, 32), a.toBuffer(t) ]));
    }, e.fromRpcSig = function(t) {
      var e = a.toBuffer(t);
      if (65 !== e.length) throw new Error('Invalid signature length');
      var r = e[64];
      return r < 27 && (r += 27), {
        v: r,
        r: e.slice(0, 32),
        s: e.slice(32, 64)
      };
    }, e.isValidSignature = function(t, e, r, n, i) {
      void 0 === n && (n = !0);
      var a = new o('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
      var s = new o('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
      if (32 !== e.length || 32 !== r.length) return !1;
      if (!h(u(t, i))) return !1;
      var l = new o(e);
      var c = new o(r);
      return !(l.isZero() || l.gt(s) || c.isZero() || c.gt(s)) && (!n || 1 !== c.cmp(a));
    }, e.hashPersonalMessage = function(t) {
      var e = n.from("Ethereum Signed Message:\n" + t.length.toString(), 'utf-8');
      return s.keccak(n.concat([ e, t ]));
    };
  },
  29847: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(97754);
    var o = r(42696);
    var a = i.BN;
    var s = new a('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
    var u = function() {
      function t(e) {
        !function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), e = e || {};
        var r = [ {
          name: 'nonce',
          length: 32,
          allowLess: !0,
          default: new n([])
        }, {
          name: 'gasPrice',
          length: 32,
          allowLess: !0,
          default: new n([])
        }, {
          name: 'gasLimit',
          alias: 'gas',
          length: 32,
          allowLess: !0,
          default: new n([])
        }, {
          name: 'to',
          allowZero: !0,
          length: 20,
          default: new n([])
        }, {
          name: 'value',
          length: 32,
          allowLess: !0,
          default: new n([])
        }, {
          name: 'data',
          alias: 'input',
          allowZero: !0,
          default: new n([])
        }, {
          name: 'v',
          allowZero: !0,
          default: new n([ 28 ])
        }, {
          name: 'r',
          length: 32,
          allowZero: !0,
          allowLess: !0,
          default: new n([])
        }, {
          name: 's',
          length: 32,
          allowZero: !0,
          allowLess: !0,
          default: new n([])
        } ];
        i.defineProperties(this, r, e), Object.defineProperty(this, 'from', {
          enumerable: !0,
          configurable: !0,
          get: this.getSenderAddress.bind(this)
        });
        var o = i.bufferToInt(this.v);
        var a = Math.floor((o - 35) / 2);
        a < 0 && (a = 0), this._chainId = a || e.chainId || 0, this._homestead = !0;
      }
      return t.prototype.toCreationAddress = function() {
        return '' === this.to.toString('hex');
      }, t.prototype.hash = function(t) {
        void 0 === t && (t = !0);
        var e = void 0;
        if (t) e = this.raw; else if (this._chainId > 0) {
          var r = this.raw.slice();
          this.v = this._chainId, this.r = 0, this.s = 0, e = this.raw, this.raw = r;
        } else e = this.raw.slice(0, 6);
        return i.rlphash(e);
      }, t.prototype.getChainId = function() {
        return this._chainId;
      }, t.prototype.getSenderAddress = function() {
        if (this._from) return this._from;
        var t = this.getSenderPublicKey();
        return this._from = i.publicToAddress(t), this._from;
      }, t.prototype.getSenderPublicKey = function() {
        if (!(this._senderPubKey && this._senderPubKey.length || this.verifySignature())) throw new Error('Invalid Signature');
        return this._senderPubKey;
      }, t.prototype.verifySignature = function() {
        var t = this.hash(!1);
        if (this._homestead && 1 === new a(this.s).cmp(s)) return !1;
        try {
          var e = i.bufferToInt(this.v);
          this._chainId > 0 && (e -= 2 * this._chainId + 8), this._senderPubKey = i.ecrecover(t, e, this.r, this.s);
        } catch (r) {
          return !1;
        }
        return !!this._senderPubKey;
      }, t.prototype.sign = function(t) {
        var e = this.hash(!1);
        var r = i.ecsign(e, t);
        this._chainId > 0 && (r.v += 2 * this._chainId + 8), Object.assign(this, r);
      }, t.prototype.getDataFee = function() {
        var t = this.raw[5];
        var e = new a(0);
        for (var r = 0; r < t.length; r++) 0 === t[r] ? e.iaddn(o.txDataZeroGas.v) : e.iaddn(o.txDataNonZeroGas.v);
        return e;
      }, t.prototype.getBaseFee = function() {
        var t = this.getDataFee().iaddn(o.txGas.v);
        return this._homestead && this.toCreationAddress() && t.iaddn(o.txCreation.v), t;
      }, t.prototype.getUpfrontCost = function() {
        return new a(this.gasLimit).imul(new a(this.gasPrice)).iadd(new a(this.value));
      }, t.prototype.validate = function(t) {
        var e = [];
        return this.verifySignature() || e.push('Invalid Signature'), this.getBaseFee().cmp(new a(this.gasLimit)) > 0 && e.push([ 'gas limit is too low. Need at least ' + this.getBaseFee() ]), 
        void 0 === t || !1 === t ? 0 === e.length : e.join(' ');
      }, t;
    }();
    t.exports = u;
  },
  97771: function(t, e, r) {
    !function(t, e) {
      'use strict';
      function n(t, e) {
        if (!t) throw new Error(e || 'Assertion failed');
      }
      function i(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
      }
      function o(t, e, r) {
        if (o.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ('le' !== e && 'be' !== e || (r = e, 
        e = 10), this._init(t || 0, e || 10, r || 'be'));
      }
      var a;
      'object' == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
      try {
        a = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r(40194).Buffer;
      } catch (A) {}
      function s(t, e) {
        var r = t.charCodeAt(e);
        return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15;
      }
      function u(t, e, r) {
        var n = s(t, r);
        return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
      }
      function h(t, e, r, n) {
        var i = 0;
        var o = Math.min(t.length, r);
        for (var a = e; a < o; a++) {
          var s = t.charCodeAt(a) - 48;
          i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
        }
        return i;
      }
      o.isBN = function(t) {
        return t instanceof o || null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
      }, o.max = function(t, e) {
        return t.cmp(e) > 0 ? t : e;
      }, o.min = function(t, e) {
        return t.cmp(e) < 0 ? t : e;
      }, o.prototype._init = function(t, e, r) {
        if ('number' == typeof t) return this._initNumber(t, e, r);
        if ('object' == typeof t) return this._initArray(t, e, r);
        'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
        var i = 0;
        '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), 
        'le' === r && this._initArray(this.toArray(), e, r)));
      }, o.prototype._initNumber = function(t, e, r) {
        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [ 67108863 & t ], this.length = 1) : t < 4503599627370496 ? (this.words = [ 67108863 & t, t / 67108864 & 67108863 ], 
        this.length = 2) : (n(t < 9007199254740992), this.words = [ 67108863 & t, t / 67108864 & 67108863, 1 ], this.length = 3), 
        'le' === r && this._initArray(this.toArray(), e, r);
      }, o.prototype._initArray = function(t, e, r) {
        if (n('number' == typeof t.length), t.length <= 0) return this.words = [ 0 ], this.length = 1, this;
        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) this.words[i] = 0;
        var o, a;
        var s = 0;
        if ('be' === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, 
        this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); else if ('le' === r) for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, 
        this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
        return this.strip();
      }, o.prototype._parseHex = function(t, e, r) {
        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
        for (var n = 0; n < this.length; n++) this.words[n] = 0;
        var i = 0;
        var o = 0;
        var a;
        if ('be' === r) for (n = t.length - 1; n >= e; n -= 2) a = u(t, e, n) << i, this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, 
        o += 1, this.words[o] |= a >>> 26) : i += 8; else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) a = u(t, e, n) << i, 
        this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, o += 1, this.words[o] |= a >>> 26) : i += 8;
        this.strip();
      }, o.prototype._parseBase = function(t, e, r) {
        this.words = [ 0 ], this.length = 1;
        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
        n--, i = i / e | 0;
        var o = t.length - r;
        var a = o % n;
        var s = Math.min(o, o - a) + r;
        var u = 0;
        for (var l = r; l < s; l += n) u = h(t, l, l + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        if (0 !== a) {
          var c = 1;
          for (u = h(t, l, t.length, e), l = 0; l < a; l++) c *= e;
          this.imuln(c), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        }
        this.strip();
      }, o.prototype.copy = function(t) {
        t.words = new Array(this.length);
        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
        t.length = this.length, t.negative = this.negative, t.red = this.red;
      }, o.prototype.clone = function() {
        var t = new o(null);
        return this.copy(t), t;
      }, o.prototype._expand = function(t) {
        for (;this.length < t; ) this.words[this.length++] = 0;
        return this;
      }, o.prototype.strip = function() {
        for (;this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
        return this._normSign();
      }, o.prototype._normSign = function() {
        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
      }, o.prototype.inspect = function() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      var l = [ '', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000' ];
      var c = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
      var f = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
      function d(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var n = t.length + e.length | 0;
        r.length = n, n = n - 1 | 0;
        var i = 0 | t.words[0];
        var o = 0 | e.words[0];
        var a = i * o;
        var s = 67108863 & a;
        var u = a / 67108864 | 0;
        r.words[0] = s;
        for (var h = 1; h < n; h++) {
          var l = u >>> 26;
          var c = 67108863 & u;
          var f = Math.min(h, e.length - 1);
          for (var d = Math.max(0, h - t.length + 1); d <= f; d++) {
            var p = h - d | 0;
            l += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a;
          }
          r.words[h] = 0 | c, u = 0 | l;
        }
        return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
      }
      o.prototype.toString = function(t, e) {
        var r;
        if (e = 0 | e || 1, 16 === (t = t || 10) || 'hex' === t) {
          r = '';
          var i = 0;
          var o = 0;
          for (var a = 0; a < this.length; a++) {
            var s = this.words[a];
            var u = (16777215 & (s << i | o)).toString(16);
            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? l[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, 
            a--);
          }
          for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
          var h = c[t];
          var d = f[t];
          r = '';
          var p = this.clone();
          for (p.negative = 0; !p.isZero(); ) {
            var m = p.modn(d).toString(t);
            r = (p = p.idivn(d)).isZero() ? m + r : l[h - m.length] + m + r;
          }
          for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        n(!1, 'Base should be between 2 and 36');
      }, o.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'), 
        0 !== this.negative ? -t : t;
      }, o.prototype.toJSON = function() {
        return this.toString(16);
      }, o.prototype.toBuffer = function(t, e) {
        return n(void 0 !== a), this.toArrayLike(a, t, e);
      }, o.prototype.toArray = function(t, e) {
        return this.toArrayLike(Array, t, e);
      }, o.prototype.toArrayLike = function(t, e, r) {
        var i = this.byteLength();
        var o = r || Math.max(1, i);
        n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0'), this.strip();
        var a = 'le' === e;
        var s = new t(o);
        var u, h;
        var l = this.clone();
        if (a) {
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[h] = u;
          for (;h < o; h++) s[h] = 0;
        } else {
          for (h = 0; h < o - i; h++) s[h] = 0;
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[o - h - 1] = u;
        }
        return s;
      }, Math.clz32 ? o.prototype._countBits = function(t) {
        return 32 - Math.clz32(t);
      } : o.prototype._countBits = function(t) {
        var e = t;
        var r = 0;
        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, 
        e >>>= 2), r + e;
      }, o.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var e = t;
        var r = 0;
        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 
        0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
      }, o.prototype.bitLength = function() {
        var t = this.words[this.length - 1];
        var e = this._countBits(t);
        return 26 * (this.length - 1) + e;
      }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        var t = 0;
        for (var e = 0; e < this.length; e++) {
          var r = this._zeroBits(this.words[e]);
          if (t += r, 26 !== r) break;
        }
        return t;
      }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, o.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
      }, o.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
      }, o.prototype.isNeg = function() {
        return 0 !== this.negative;
      }, o.prototype.neg = function() {
        return this.clone().ineg();
      }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, o.prototype.iuor = function(t) {
        for (;this.length < t.length; ) this.words[this.length++] = 0;
        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
        return this.strip();
      }, o.prototype.ior = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuor(t);
      }, o.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
      }, o.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
      }, o.prototype.iuand = function(t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
        return this.length = e.length, this.strip();
      }, o.prototype.iand = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuand(t);
      }, o.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
      }, o.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
      }, o.prototype.iuxor = function(t) {
        var e;
        var r;
        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
        for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
        if (this !== e) for (;n < e.length; n++) this.words[n] = e.words[n];
        return this.length = e.length, this.strip();
      }, o.prototype.ixor = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuxor(t);
      }, o.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
      }, o.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
      }, o.prototype.inotn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = 0 | Math.ceil(t / 26);
        var r = t % 26;
        this._expand(e), r > 0 && e--;
        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
      }, o.prototype.notn = function(t) {
        return this.clone().inotn(t);
      }, o.prototype.setn = function(t, e) {
        n('number' == typeof t && t >= 0);
        var r = t / 26 | 0;
        var i = t % 26;
        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
      }, o.prototype.iadd = function(t) {
        var e;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
        var r, n;
        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
        var i = 0;
        for (var o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        for (;0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (;o < r.length; o++) this.words[o] = r.words[o];
        return this;
      }, o.prototype.add = function(t) {
        var e;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, 
        e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
      }, o.prototype.isub = function(t) {
        if (0 !== t.negative) {
          t.negative = 0;
          var e = this.iadd(t);
          return t.negative = 1, e._normSign();
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var r = this.cmp(t);
        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var n, i;
        r > 0 ? (n = this, i = t) : (n = t, i = this);
        var o = 0;
        for (var a = 0; a < i.length; a++) o = (e = (0 | n.words[a]) - (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        for (;0 !== o && a < n.length; a++) o = (e = (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        if (0 === o && a < n.length && n !== this) for (;a < n.length; a++) this.words[a] = n.words[a];
        return this.length = Math.max(this.length, a), n !== this && (this.negative = 1), this.strip();
      }, o.prototype.sub = function(t) {
        return this.clone().isub(t);
      };
      var p = function(t, e, r) {
        var n = t.words;
        var i = e.words;
        var o = r.words;
        var a = 0;
        var s;
        var u;
        var h;
        var l = 0 | n[0];
        var c = 8191 & l;
        var f = l >>> 13;
        var d = 0 | n[1];
        var p = 8191 & d;
        var m = d >>> 13;
        var v = 0 | n[2];
        var g = 8191 & v;
        var y = v >>> 13;
        var w = 0 | n[3];
        var _ = 8191 & w;
        var M = w >>> 13;
        var b = 0 | n[4];
        var k = 8191 & b;
        var x = b >>> 13;
        var A = 0 | n[5];
        var E = 8191 & A;
        var S = A >>> 13;
        var T = 0 | n[6];
        var C = 8191 & T;
        var R = T >>> 13;
        var B = 0 | n[7];
        var L = 8191 & B;
        var P = B >>> 13;
        var I = 0 | n[8];
        var O = 8191 & I;
        var N = I >>> 13;
        var U = 0 | n[9];
        var j = 8191 & U;
        var q = U >>> 13;
        var K = 0 | i[0];
        var H = 8191 & K;
        var F = K >>> 13;
        var z = 0 | i[1];
        var D = 8191 & z;
        var Z = z >>> 13;
        var W = 0 | i[2];
        var V = 8191 & W;
        var $ = W >>> 13;
        var G = 0 | i[3];
        var Y = 8191 & G;
        var J = G >>> 13;
        var Q = 0 | i[4];
        var X = 8191 & Q;
        var tt = Q >>> 13;
        var et = 0 | i[5];
        var rt = 8191 & et;
        var nt = et >>> 13;
        var it = 0 | i[6];
        var ot = 8191 & it;
        var at = it >>> 13;
        var st = 0 | i[7];
        var ut = 8191 & st;
        var ht = st >>> 13;
        var lt = 0 | i[8];
        var ct = 8191 & lt;
        var ft = lt >>> 13;
        var dt = 0 | i[9];
        var pt = 8191 & dt;
        var mt = dt >>> 13;
        r.negative = t.negative ^ e.negative, r.length = 19;
        var vt = (a + (s = Math.imul(c, H)) | 0) + ((8191 & (u = (u = Math.imul(c, F)) + Math.imul(f, H) | 0)) << 13) | 0;
        a = ((h = Math.imul(f, F)) + (u >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, s = Math.imul(p, H), u = (u = Math.imul(p, F)) + Math.imul(m, H) | 0, 
        h = Math.imul(m, F);
        var gt = (a + (s = s + Math.imul(c, D) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, Z) | 0) + Math.imul(f, D) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, Z) | 0) + (u >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, s = Math.imul(g, H), u = (u = Math.imul(g, F)) + Math.imul(y, H) | 0, 
        h = Math.imul(y, F), s = s + Math.imul(p, D) | 0, u = (u = u + Math.imul(p, Z) | 0) + Math.imul(m, D) | 0, h = h + Math.imul(m, Z) | 0;
        var yt = (a + (s = s + Math.imul(c, V) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, $) | 0) + Math.imul(f, V) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, $) | 0) + (u >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, s = Math.imul(_, H), u = (u = Math.imul(_, F)) + Math.imul(M, H) | 0, 
        h = Math.imul(M, F), s = s + Math.imul(g, D) | 0, u = (u = u + Math.imul(g, Z) | 0) + Math.imul(y, D) | 0, h = h + Math.imul(y, Z) | 0, 
        s = s + Math.imul(p, V) | 0, u = (u = u + Math.imul(p, $) | 0) + Math.imul(m, V) | 0, h = h + Math.imul(m, $) | 0;
        var wt = (a + (s = s + Math.imul(c, Y) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, J) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, J) | 0) + (u >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, s = Math.imul(k, H), u = (u = Math.imul(k, F)) + Math.imul(x, H) | 0, 
        h = Math.imul(x, F), s = s + Math.imul(_, D) | 0, u = (u = u + Math.imul(_, Z) | 0) + Math.imul(M, D) | 0, h = h + Math.imul(M, Z) | 0, 
        s = s + Math.imul(g, V) | 0, u = (u = u + Math.imul(g, $) | 0) + Math.imul(y, V) | 0, h = h + Math.imul(y, $) | 0, s = s + Math.imul(p, Y) | 0, 
        u = (u = u + Math.imul(p, J) | 0) + Math.imul(m, Y) | 0, h = h + Math.imul(m, J) | 0;
        var _t = (a + (s = s + Math.imul(c, X) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, tt) | 0) + (u >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, s = Math.imul(E, H), u = (u = Math.imul(E, F)) + Math.imul(S, H) | 0, 
        h = Math.imul(S, F), s = s + Math.imul(k, D) | 0, u = (u = u + Math.imul(k, Z) | 0) + Math.imul(x, D) | 0, h = h + Math.imul(x, Z) | 0, 
        s = s + Math.imul(_, V) | 0, u = (u = u + Math.imul(_, $) | 0) + Math.imul(M, V) | 0, h = h + Math.imul(M, $) | 0, s = s + Math.imul(g, Y) | 0, 
        u = (u = u + Math.imul(g, J) | 0) + Math.imul(y, Y) | 0, h = h + Math.imul(y, J) | 0, s = s + Math.imul(p, X) | 0, u = (u = u + Math.imul(p, tt) | 0) + Math.imul(m, X) | 0, 
        h = h + Math.imul(m, tt) | 0;
        var Mt = (a + (s = s + Math.imul(c, rt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, nt) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, nt) | 0) + (u >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, s = Math.imul(C, H), u = (u = Math.imul(C, F)) + Math.imul(R, H) | 0, 
        h = Math.imul(R, F), s = s + Math.imul(E, D) | 0, u = (u = u + Math.imul(E, Z) | 0) + Math.imul(S, D) | 0, h = h + Math.imul(S, Z) | 0, 
        s = s + Math.imul(k, V) | 0, u = (u = u + Math.imul(k, $) | 0) + Math.imul(x, V) | 0, h = h + Math.imul(x, $) | 0, s = s + Math.imul(_, Y) | 0, 
        u = (u = u + Math.imul(_, J) | 0) + Math.imul(M, Y) | 0, h = h + Math.imul(M, J) | 0, s = s + Math.imul(g, X) | 0, u = (u = u + Math.imul(g, tt) | 0) + Math.imul(y, X) | 0, 
        h = h + Math.imul(y, tt) | 0, s = s + Math.imul(p, rt) | 0, u = (u = u + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, h = h + Math.imul(m, nt) | 0;
        var bt = (a + (s = s + Math.imul(c, ot) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, at) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, at) | 0) + (u >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, s = Math.imul(L, H), u = (u = Math.imul(L, F)) + Math.imul(P, H) | 0, 
        h = Math.imul(P, F), s = s + Math.imul(C, D) | 0, u = (u = u + Math.imul(C, Z) | 0) + Math.imul(R, D) | 0, h = h + Math.imul(R, Z) | 0, 
        s = s + Math.imul(E, V) | 0, u = (u = u + Math.imul(E, $) | 0) + Math.imul(S, V) | 0, h = h + Math.imul(S, $) | 0, s = s + Math.imul(k, Y) | 0, 
        u = (u = u + Math.imul(k, J) | 0) + Math.imul(x, Y) | 0, h = h + Math.imul(x, J) | 0, s = s + Math.imul(_, X) | 0, u = (u = u + Math.imul(_, tt) | 0) + Math.imul(M, X) | 0, 
        h = h + Math.imul(M, tt) | 0, s = s + Math.imul(g, rt) | 0, u = (u = u + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, h = h + Math.imul(y, nt) | 0, 
        s = s + Math.imul(p, ot) | 0, u = (u = u + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, h = h + Math.imul(m, at) | 0;
        var kt = (a + (s = s + Math.imul(c, ut) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ht) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ht) | 0) + (u >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, s = Math.imul(O, H), u = (u = Math.imul(O, F)) + Math.imul(N, H) | 0, 
        h = Math.imul(N, F), s = s + Math.imul(L, D) | 0, u = (u = u + Math.imul(L, Z) | 0) + Math.imul(P, D) | 0, h = h + Math.imul(P, Z) | 0, 
        s = s + Math.imul(C, V) | 0, u = (u = u + Math.imul(C, $) | 0) + Math.imul(R, V) | 0, h = h + Math.imul(R, $) | 0, s = s + Math.imul(E, Y) | 0, 
        u = (u = u + Math.imul(E, J) | 0) + Math.imul(S, Y) | 0, h = h + Math.imul(S, J) | 0, s = s + Math.imul(k, X) | 0, u = (u = u + Math.imul(k, tt) | 0) + Math.imul(x, X) | 0, 
        h = h + Math.imul(x, tt) | 0, s = s + Math.imul(_, rt) | 0, u = (u = u + Math.imul(_, nt) | 0) + Math.imul(M, rt) | 0, h = h + Math.imul(M, nt) | 0, 
        s = s + Math.imul(g, ot) | 0, u = (u = u + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, h = h + Math.imul(y, at) | 0, s = s + Math.imul(p, ut) | 0, 
        u = (u = u + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, h = h + Math.imul(m, ht) | 0;
        var xt = (a + (s = s + Math.imul(c, ct) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ft) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ft) | 0) + (u >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, s = Math.imul(j, H), u = (u = Math.imul(j, F)) + Math.imul(q, H) | 0, 
        h = Math.imul(q, F), s = s + Math.imul(O, D) | 0, u = (u = u + Math.imul(O, Z) | 0) + Math.imul(N, D) | 0, h = h + Math.imul(N, Z) | 0, 
        s = s + Math.imul(L, V) | 0, u = (u = u + Math.imul(L, $) | 0) + Math.imul(P, V) | 0, h = h + Math.imul(P, $) | 0, s = s + Math.imul(C, Y) | 0, 
        u = (u = u + Math.imul(C, J) | 0) + Math.imul(R, Y) | 0, h = h + Math.imul(R, J) | 0, s = s + Math.imul(E, X) | 0, u = (u = u + Math.imul(E, tt) | 0) + Math.imul(S, X) | 0, 
        h = h + Math.imul(S, tt) | 0, s = s + Math.imul(k, rt) | 0, u = (u = u + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0, h = h + Math.imul(x, nt) | 0, 
        s = s + Math.imul(_, ot) | 0, u = (u = u + Math.imul(_, at) | 0) + Math.imul(M, ot) | 0, h = h + Math.imul(M, at) | 0, s = s + Math.imul(g, ut) | 0, 
        u = (u = u + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, h = h + Math.imul(y, ht) | 0, s = s + Math.imul(p, ct) | 0, u = (u = u + Math.imul(p, ft) | 0) + Math.imul(m, ct) | 0, 
        h = h + Math.imul(m, ft) | 0;
        var At = (a + (s = s + Math.imul(c, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, mt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, mt) | 0) + (u >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, s = Math.imul(j, D), u = (u = Math.imul(j, Z)) + Math.imul(q, D) | 0, 
        h = Math.imul(q, Z), s = s + Math.imul(O, V) | 0, u = (u = u + Math.imul(O, $) | 0) + Math.imul(N, V) | 0, h = h + Math.imul(N, $) | 0, 
        s = s + Math.imul(L, Y) | 0, u = (u = u + Math.imul(L, J) | 0) + Math.imul(P, Y) | 0, h = h + Math.imul(P, J) | 0, s = s + Math.imul(C, X) | 0, 
        u = (u = u + Math.imul(C, tt) | 0) + Math.imul(R, X) | 0, h = h + Math.imul(R, tt) | 0, s = s + Math.imul(E, rt) | 0, u = (u = u + Math.imul(E, nt) | 0) + Math.imul(S, rt) | 0, 
        h = h + Math.imul(S, nt) | 0, s = s + Math.imul(k, ot) | 0, u = (u = u + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0, h = h + Math.imul(x, at) | 0, 
        s = s + Math.imul(_, ut) | 0, u = (u = u + Math.imul(_, ht) | 0) + Math.imul(M, ut) | 0, h = h + Math.imul(M, ht) | 0, s = s + Math.imul(g, ct) | 0, 
        u = (u = u + Math.imul(g, ft) | 0) + Math.imul(y, ct) | 0, h = h + Math.imul(y, ft) | 0;
        var Et = (a + (s = s + Math.imul(p, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(m, mt) | 0) + (u >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, s = Math.imul(j, V), u = (u = Math.imul(j, $)) + Math.imul(q, V) | 0, 
        h = Math.imul(q, $), s = s + Math.imul(O, Y) | 0, u = (u = u + Math.imul(O, J) | 0) + Math.imul(N, Y) | 0, h = h + Math.imul(N, J) | 0, 
        s = s + Math.imul(L, X) | 0, u = (u = u + Math.imul(L, tt) | 0) + Math.imul(P, X) | 0, h = h + Math.imul(P, tt) | 0, s = s + Math.imul(C, rt) | 0, 
        u = (u = u + Math.imul(C, nt) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, nt) | 0, s = s + Math.imul(E, ot) | 0, u = (u = u + Math.imul(E, at) | 0) + Math.imul(S, ot) | 0, 
        h = h + Math.imul(S, at) | 0, s = s + Math.imul(k, ut) | 0, u = (u = u + Math.imul(k, ht) | 0) + Math.imul(x, ut) | 0, h = h + Math.imul(x, ht) | 0, 
        s = s + Math.imul(_, ct) | 0, u = (u = u + Math.imul(_, ft) | 0) + Math.imul(M, ct) | 0, h = h + Math.imul(M, ft) | 0;
        var St = (a + (s = s + Math.imul(g, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(y, mt) | 0) + (u >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, s = Math.imul(j, Y), u = (u = Math.imul(j, J)) + Math.imul(q, Y) | 0, 
        h = Math.imul(q, J), s = s + Math.imul(O, X) | 0, u = (u = u + Math.imul(O, tt) | 0) + Math.imul(N, X) | 0, h = h + Math.imul(N, tt) | 0, 
        s = s + Math.imul(L, rt) | 0, u = (u = u + Math.imul(L, nt) | 0) + Math.imul(P, rt) | 0, h = h + Math.imul(P, nt) | 0, s = s + Math.imul(C, ot) | 0, 
        u = (u = u + Math.imul(C, at) | 0) + Math.imul(R, ot) | 0, h = h + Math.imul(R, at) | 0, s = s + Math.imul(E, ut) | 0, u = (u = u + Math.imul(E, ht) | 0) + Math.imul(S, ut) | 0, 
        h = h + Math.imul(S, ht) | 0, s = s + Math.imul(k, ct) | 0, u = (u = u + Math.imul(k, ft) | 0) + Math.imul(x, ct) | 0, h = h + Math.imul(x, ft) | 0;
        var Tt = (a + (s = s + Math.imul(_, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(_, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(M, mt) | 0) + (u >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, s = Math.imul(j, X), u = (u = Math.imul(j, tt)) + Math.imul(q, X) | 0, 
        h = Math.imul(q, tt), s = s + Math.imul(O, rt) | 0, u = (u = u + Math.imul(O, nt) | 0) + Math.imul(N, rt) | 0, h = h + Math.imul(N, nt) | 0, 
        s = s + Math.imul(L, ot) | 0, u = (u = u + Math.imul(L, at) | 0) + Math.imul(P, ot) | 0, h = h + Math.imul(P, at) | 0, s = s + Math.imul(C, ut) | 0, 
        u = (u = u + Math.imul(C, ht) | 0) + Math.imul(R, ut) | 0, h = h + Math.imul(R, ht) | 0, s = s + Math.imul(E, ct) | 0, u = (u = u + Math.imul(E, ft) | 0) + Math.imul(S, ct) | 0, 
        h = h + Math.imul(S, ft) | 0;
        var Ct = (a + (s = s + Math.imul(k, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(x, mt) | 0) + (u >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, s = Math.imul(j, rt), u = (u = Math.imul(j, nt)) + Math.imul(q, rt) | 0, 
        h = Math.imul(q, nt), s = s + Math.imul(O, ot) | 0, u = (u = u + Math.imul(O, at) | 0) + Math.imul(N, ot) | 0, h = h + Math.imul(N, at) | 0, 
        s = s + Math.imul(L, ut) | 0, u = (u = u + Math.imul(L, ht) | 0) + Math.imul(P, ut) | 0, h = h + Math.imul(P, ht) | 0, s = s + Math.imul(C, ct) | 0, 
        u = (u = u + Math.imul(C, ft) | 0) + Math.imul(R, ct) | 0, h = h + Math.imul(R, ft) | 0;
        var Rt = (a + (s = s + Math.imul(E, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(E, mt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(S, mt) | 0) + (u >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, s = Math.imul(j, ot), u = (u = Math.imul(j, at)) + Math.imul(q, ot) | 0, 
        h = Math.imul(q, at), s = s + Math.imul(O, ut) | 0, u = (u = u + Math.imul(O, ht) | 0) + Math.imul(N, ut) | 0, h = h + Math.imul(N, ht) | 0, 
        s = s + Math.imul(L, ct) | 0, u = (u = u + Math.imul(L, ft) | 0) + Math.imul(P, ct) | 0, h = h + Math.imul(P, ft) | 0;
        var Bt = (a + (s = s + Math.imul(C, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(C, mt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(R, mt) | 0) + (u >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, s = Math.imul(j, ut), u = (u = Math.imul(j, ht)) + Math.imul(q, ut) | 0, 
        h = Math.imul(q, ht), s = s + Math.imul(O, ct) | 0, u = (u = u + Math.imul(O, ft) | 0) + Math.imul(N, ct) | 0, h = h + Math.imul(N, ft) | 0;
        var Lt = (a + (s = s + Math.imul(L, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(L, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(P, mt) | 0) + (u >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, s = Math.imul(j, ct), u = (u = Math.imul(j, ft)) + Math.imul(q, ct) | 0, 
        h = Math.imul(q, ft);
        var Pt = (a + (s = s + Math.imul(O, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(O, mt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(N, mt) | 0) + (u >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
        var It = (a + (s = Math.imul(j, pt)) | 0) + ((8191 & (u = (u = Math.imul(j, mt)) + Math.imul(q, pt) | 0)) << 13) | 0;
        return a = ((h = Math.imul(q, mt)) + (u >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, o[0] = vt, o[1] = gt, o[2] = yt, 
        o[3] = wt, o[4] = _t, o[5] = Mt, o[6] = bt, o[7] = kt, o[8] = xt, o[9] = At, o[10] = Et, o[11] = St, o[12] = Tt, o[13] = Ct, 
        o[14] = Rt, o[15] = Bt, o[16] = Lt, o[17] = Pt, o[18] = It, 0 !== a && (o[19] = a, r.length++), r;
      };
      function m(t, e, r) {
        return (new v).mulp(t, e, r);
      }
      function v(t, e) {
        this.x = t, this.y = e;
      }
      Math.imul || (p = d), o.prototype.mulTo = function(t, e) {
        var r;
        var n = this.length + t.length;
        return r = 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, r) {
          r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
          var n = 0;
          var i = 0;
          for (var o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            var s = 67108863 & n;
            var u = Math.min(o, e.length - 1);
            for (var h = Math.max(0, o - t.length + 1); h <= u; h++) {
              var l = o - h;
              var c = (0 | t.words[l]) * (0 | e.words[h]);
              var f = 67108863 & c;
              s = 67108863 & (f = f + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, a &= 67108863;
            }
            r.words[o] = s, n = a, a = i;
          }
          return 0 !== n ? r.words[o] = n : r.length--, r.strip();
        }(this, t, e) : m(this, t, e), r;
      }, v.prototype.makeRBT = function(t) {
        var e = new Array(t);
        var r = o.prototype._countBits(t) - 1;
        for (var n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
        return e;
      }, v.prototype.revBin = function(t, e, r) {
        if (0 === t || t === r - 1) return t;
        var n = 0;
        for (var i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
        return n;
      }, v.prototype.permute = function(t, e, r, n, i, o) {
        for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]];
      }, v.prototype.transform = function(t, e, r, n, i, o) {
        this.permute(o, t, e, r, n, i);
        for (var a = 1; a < i; a <<= 1) {
          var s = a << 1;
          var u = Math.cos(2 * Math.PI / s);
          var h = Math.sin(2 * Math.PI / s);
          for (var l = 0; l < i; l += s) {
            var c = u;
            var f = h;
            for (var d = 0; d < a; d++) {
              var p = r[l + d];
              var m = n[l + d];
              var v = r[l + d + a];
              var g = n[l + d + a];
              var y = c * v - f * g;
              g = c * g + f * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + a] = p - v, n[l + d + a] = m - g, d !== s && (y = u * c - h * f, 
              f = u * f + h * c, c = y);
            }
          }
        }
      }, v.prototype.guessLen13b = function(t, e) {
        var r = 1 | Math.max(e, t);
        var n = 1 & r;
        var i = 0;
        for (r = r / 2 | 0; r; r >>>= 1) i++;
        return 1 << i + 1 + n;
      }, v.prototype.conjugate = function(t, e, r) {
        if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
          var i = t[n];
          t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
        }
      }, v.prototype.normalize13b = function(t, e) {
        var r = 0;
        for (var n = 0; n < e / 2; n++) {
          var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
          t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
        }
        return t;
      }, v.prototype.convert13b = function(t, e, r, i) {
        var o = 0;
        for (var a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
        for (a = 2 * e; a < i; ++a) r[a] = 0;
        n(0 === o), n(0 == (-8192 & o));
      }, v.prototype.stub = function(t) {
        var e = new Array(t);
        for (var r = 0; r < t; r++) e[r] = 0;
        return e;
      }, v.prototype.mulp = function(t, e, r) {
        var n = 2 * this.guessLen13b(t.length, e.length);
        var i = this.makeRBT(n);
        var o = this.stub(n);
        var a = new Array(n);
        var s = new Array(n);
        var u = new Array(n);
        var h = new Array(n);
        var l = new Array(n);
        var c = new Array(n);
        var f = r.words;
        f.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, h, n), this.transform(a, o, s, u, n, i), 
        this.transform(h, o, l, c, n, i);
        for (var d = 0; d < n; d++) {
          var p = s[d] * l[d] - u[d] * c[d];
          u[d] = s[d] * c[d] + u[d] * l[d], s[d] = p;
        }
        return this.conjugate(s, u, n), this.transform(s, u, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = t.negative ^ e.negative, 
        r.length = t.length + e.length, r.strip();
      }, o.prototype.mul = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), this.mulTo(t, e);
      }, o.prototype.mulf = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), m(this, t, e);
      }, o.prototype.imul = function(t) {
        return this.clone().mulTo(t, this);
      }, o.prototype.imuln = function(t) {
        n('number' == typeof t), n(t < 67108864);
        var e = 0;
        for (var r = 0; r < this.length; r++) {
          var i = (0 | this.words[r]) * t;
          var o = (67108863 & i) + (67108863 & e);
          e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o;
        }
        return 0 !== e && (this.words[r] = e, this.length++), this;
      }, o.prototype.muln = function(t) {
        return this.clone().imuln(t);
      }, o.prototype.sqr = function() {
        return this.mul(this);
      }, o.prototype.isqr = function() {
        return this.imul(this.clone());
      }, o.prototype.pow = function(t) {
        var e = function(t) {
          var e = new Array(t.bitLength());
          for (var r = 0; r < e.length; r++) {
            var n = r / 26 | 0;
            var i = r % 26;
            e[r] = (t.words[n] & 1 << i) >>> i;
          }
          return e;
        }(t);
        if (0 === e.length) return new o(1);
        var r = this;
        for (var n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
        if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
        return r;
      }, o.prototype.iushln = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 67108863 >>> 26 - e << 26 - e;
        var o;
        if (0 !== e) {
          var a = 0;
          for (o = 0; o < this.length; o++) {
            var s = this.words[o] & i;
            var u = (0 | this.words[o]) - s << e;
            this.words[o] = u | a, a = s >>> 26 - e;
          }
          a && (this.words[o] = a, this.length++);
        }
        if (0 !== r) {
          for (o = this.length - 1; o >= 0; o--) this.words[o + r] = this.words[o];
          for (o = 0; o < r; o++) this.words[o] = 0;
          this.length += r;
        }
        return this.strip();
      }, o.prototype.ishln = function(t) {
        return n(0 === this.negative), this.iushln(t);
      }, o.prototype.iushrn = function(t, e, r) {
        var i;
        n('number' == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
        var o = t % 26;
        var a = Math.min((t - o) / 26, this.length);
        var s = 67108863 ^ 67108863 >>> o << o;
        var u = r;
        if (i -= a, i = Math.max(0, i), u) {
          for (var h = 0; h < a; h++) u.words[h] = this.words[h];
          u.length = a;
        }
        if (0 === a) ; else if (this.length > a) for (this.length -= a, h = 0; h < this.length; h++) this.words[h] = this.words[h + a]; else this.words[0] = 0, 
        this.length = 1;
        var l = 0;
        for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
          var c = 0 | this.words[h];
          this.words[h] = l << 26 - o | c >>> o, l = c & s;
        }
        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
      }, o.prototype.ishrn = function(t, e, r) {
        return n(0 === this.negative), this.iushrn(t, e, r);
      }, o.prototype.shln = function(t) {
        return this.clone().ishln(t);
      }, o.prototype.ushln = function(t) {
        return this.clone().iushln(t);
      }, o.prototype.shrn = function(t) {
        return this.clone().ishrn(t);
      }, o.prototype.ushrn = function(t) {
        return this.clone().iushrn(t);
      }, o.prototype.testn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        return !(this.length <= r) && !!(this.words[r] & i);
      }, o.prototype.imaskn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        if (n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r) return this;
        if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
          var i = 67108863 ^ 67108863 >>> e << e;
          this.words[this.length - 1] &= i;
        }
        return this.strip();
      }, o.prototype.maskn = function(t) {
        return this.clone().imaskn(t);
      }, o.prototype.iaddn = function(t) {
        return n('number' == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), 
        this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
      }, o.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
        return this.length = Math.max(this.length, e + 1), this;
      }, o.prototype.isubn = function(t) {
        if (n('number' == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, 
        this.words[e + 1] -= 1;
        return this.strip();
      }, o.prototype.addn = function(t) {
        return this.clone().iaddn(t);
      }, o.prototype.subn = function(t) {
        return this.clone().isubn(t);
      }, o.prototype.iabs = function() {
        return this.negative = 0, this;
      }, o.prototype.abs = function() {
        return this.clone().iabs();
      }, o.prototype._ishlnsubmul = function(t, e, r) {
        var i = t.length + r;
        var o;
        var a;
        this._expand(i);
        var s = 0;
        for (o = 0; o < t.length; o++) {
          a = (0 | this.words[o + r]) + s;
          var u = (0 | t.words[o]) * e;
          s = ((a -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[o + r] = 67108863 & a;
        }
        for (;o < this.length - r; o++) s = (a = (0 | this.words[o + r]) + s) >> 26, this.words[o + r] = 67108863 & a;
        if (0 === s) return this.strip();
        for (n(-1 === s), s = 0, o = 0; o < this.length; o++) s = (a = -(0 | this.words[o]) + s) >> 26, this.words[o] = 67108863 & a;
        return this.negative = 1, this.strip();
      }, o.prototype._wordDiv = function(t, e) {
        var r = (this.length, t.length);
        var n = this.clone();
        var i = t;
        var a = 0 | i.words[i.length - 1];
        0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
        var s = n.length - i.length;
        var u;
        if ('mod' !== e) {
          (u = new o(null)).length = s + 1, u.words = new Array(u.length);
          for (var h = 0; h < u.length; h++) u.words[h] = 0;
        }
        var l = n.clone()._ishlnsubmul(i, 1, s);
        0 === l.negative && (n = l, u && (u.words[s] = 1));
        for (var c = s - 1; c >= 0; c--) {
          var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
          for (f = Math.min(f / a | 0, 67108863), n._ishlnsubmul(i, f, c); 0 !== n.negative; ) f--, n.negative = 0, n._ishlnsubmul(i, 1, c), 
          n.isZero() || (n.negative ^= 1);
          u && (u.words[c] = f);
        }
        return u && u.strip(), n.strip(), 'div' !== e && 0 !== r && n.iushrn(r), {
          div: u || null,
          mod: n
        };
      }, o.prototype.divmod = function(t, e, r) {
        return n(!t.isZero()), this.isZero() ? {
          div: new o(0),
          mod: new o(0)
        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), 'mod' !== e && (i = s.div.neg()), 'div' !== e && (a = s.mod.neg(), 
        r && 0 !== a.negative && a.iadd(t)), {
          div: i,
          mod: a
        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), 'mod' !== e && (i = s.div.neg()), {
          div: i,
          mod: s.mod
        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), 'div' !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), 
        {
          div: s.div,
          mod: a
        }) : t.length > this.length || this.cmp(t) < 0 ? {
          div: new o(0),
          mod: this
        } : 1 === t.length ? 'div' === e ? {
          div: this.divn(t.words[0]),
          mod: null
        } : 'mod' === e ? {
          div: null,
          mod: new o(this.modn(t.words[0]))
        } : {
          div: this.divn(t.words[0]),
          mod: new o(this.modn(t.words[0]))
        } : this._wordDiv(t, e);
        var i, a, s;
      }, o.prototype.div = function(t) {
        return this.divmod(t, 'div', !1).div;
      }, o.prototype.mod = function(t) {
        return this.divmod(t, 'mod', !1).mod;
      }, o.prototype.umod = function(t) {
        return this.divmod(t, 'mod', !0).mod;
      }, o.prototype.divRound = function(t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) return e.div;
        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod;
        var n = t.ushrn(1);
        var i = t.andln(1);
        var o = r.cmp(n);
        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
      }, o.prototype.modn = function(t) {
        n(t <= 67108863);
        var e = (1 << 26) % t;
        var r = 0;
        for (var i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
        return r;
      }, o.prototype.idivn = function(t) {
        n(t <= 67108863);
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var i = (0 | this.words[r]) + 67108864 * e;
          this.words[r] = i / t | 0, e = i % t;
        }
        return this.strip();
      }, o.prototype.divn = function(t) {
        return this.clone().idivn(t);
      }, o.prototype.egcd = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = new o(0);
        var u = new o(1);
        var h = 0;
        for (;e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++h;
        var l = r.clone();
        var c = e.clone();
        for (;!e.isZero(); ) {
          for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1) ;
          if (f > 0) for (e.iushrn(f); f-- > 0; ) (i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(c)), i.iushrn(1), a.iushrn(1);
          for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1) ;
          if (p > 0) for (r.iushrn(p); p-- > 0; ) (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(c)), s.iushrn(1), u.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a));
        }
        return {
          a: s,
          b: u,
          gcd: r.iushln(h)
        };
      }, o.prototype._invmp = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = r.clone();
        for (;e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
          for (var u = 0, h = 1; 0 == (e.words[0] & h) && u < 26; ++u, h <<= 1) ;
          if (u > 0) for (e.iushrn(u); u-- > 0; ) i.isOdd() && i.iadd(s), i.iushrn(1);
          for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1) ;
          if (l > 0) for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(s), a.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(a)) : (r.isub(e), a.isub(i));
        }
        var f;
        return (f = 0 === e.cmpn(1) ? i : a).cmpn(0) < 0 && f.iadd(t), f;
      }, o.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var e = this.clone();
        var r = t.clone();
        e.negative = 0, r.negative = 0;
        for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
        for (;;) {
          for (;e.isEven(); ) e.iushrn(1);
          for (;r.isEven(); ) r.iushrn(1);
          var i = e.cmp(r);
          if (i < 0) {
            var o = e;
            e = r, r = o;
          } else if (0 === i || 0 === r.cmpn(1)) break;
          e.isub(r);
        }
        return r.iushln(n);
      }, o.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t);
      }, o.prototype.isEven = function() {
        return 0 == (1 & this.words[0]);
      }, o.prototype.isOdd = function() {
        return 1 == (1 & this.words[0]);
      }, o.prototype.andln = function(t) {
        return this.words[0] & t;
      }, o.prototype.bincn = function(t) {
        n('number' == typeof t);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
        var o = i;
        for (var a = r; 0 !== o && a < this.length; a++) {
          var s = 0 | this.words[a];
          o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
        }
        return 0 !== o && (this.words[a] = o, this.length++), this;
      }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0];
      }, o.prototype.cmpn = function(t) {
        var e = t < 0;
        if (0 !== this.negative && !e) return -1;
        if (0 === this.negative && e) return 1;
        var r;
        if (this.strip(), this.length > 1) r = 1; else {
          e && (t = -t), n(t <= 67108863, 'Number is too big');
          var i = 0 | this.words[0];
          r = i === t ? 0 : i < t ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -r : r;
      }, o.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var e = this.ucmp(t);
        return 0 !== this.negative ? 0 | -e : e;
      }, o.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var n = 0 | this.words[r];
          var i = 0 | t.words[r];
          if (n !== i) {
            n < i ? e = -1 : n > i && (e = 1);
            break;
          }
        }
        return e;
      }, o.prototype.gtn = function(t) {
        return 1 === this.cmpn(t);
      }, o.prototype.gt = function(t) {
        return 1 === this.cmp(t);
      }, o.prototype.gten = function(t) {
        return this.cmpn(t) >= 0;
      }, o.prototype.gte = function(t) {
        return this.cmp(t) >= 0;
      }, o.prototype.ltn = function(t) {
        return -1 === this.cmpn(t);
      }, o.prototype.lt = function(t) {
        return -1 === this.cmp(t);
      }, o.prototype.lten = function(t) {
        return this.cmpn(t) <= 0;
      }, o.prototype.lte = function(t) {
        return this.cmp(t) <= 0;
      }, o.prototype.eqn = function(t) {
        return 0 === this.cmpn(t);
      }, o.prototype.eq = function(t) {
        return 0 === this.cmp(t);
      }, o.red = function(t) {
        return new k(t);
      }, o.prototype.toRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), n(0 === this.negative, 'red works only with positives'), t.convertTo(this)._forceRed(t);
      }, o.prototype.fromRed = function() {
        return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
      }, o.prototype._forceRed = function(t) {
        return this.red = t, this;
      }, o.prototype.forceRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), this._forceRed(t);
      }, o.prototype.redAdd = function(t) {
        return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t);
      }, o.prototype.redIAdd = function(t) {
        return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t);
      }, o.prototype.redSub = function(t) {
        return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t);
      }, o.prototype.redISub = function(t) {
        return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t);
      }, o.prototype.redShl = function(t) {
        return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t);
      }, o.prototype.redMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t);
      }, o.prototype.redIMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t);
      }, o.prototype.redSqr = function() {
        return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
      }, o.prototype.redISqr = function() {
        return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
      }, o.prototype.redSqrt = function() {
        return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
      }, o.prototype.redInvm = function() {
        return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
      }, o.prototype.redNeg = function() {
        return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
      }, o.prototype.redPow = function(t) {
        return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t);
      };
      var g = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function y(t, e) {
        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      function w() {
        y.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }
      function _() {
        y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }
      function M() {
        y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }
      function b() {
        y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }
      function k(t) {
        if ('string' == typeof t) {
          var e = o._prime(t);
          this.m = e.p, this.prime = e;
        } else n(t.gtn(1), 'modulus must be greater than 1'), this.m = t, this.prime = null;
      }
      function x(t) {
        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), 
        this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), 
        this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      y.prototype._tmp = function() {
        var t = new o(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t;
      }, y.prototype.ireduce = function(t) {
        var e = t;
        var r;
        do {
          this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
        } while (r > this.n);
        var n = r < this.n ? -1 : e.ucmp(this.p);
        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), 
        e;
      }, y.prototype.split = function(t, e) {
        t.iushrn(this.n, 0, e);
      }, y.prototype.imulK = function(t) {
        return t.imul(this.k);
      }, i(w, y), w.prototype.split = function(t, e) {
        var r = 4194303;
        var n = Math.min(t.length, 9);
        for (var i = 0; i < n; i++) e.words[i] = t.words[i];
        if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
        var o = t.words[9];
        for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
          var a = 0 | t.words[i];
          t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a;
        }
        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
      }, w.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 0 | t.words[r];
          e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
      }, i(_, y), i(M, y), i(b, y), b.prototype.imulK = function(t) {
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 19 * (0 | t.words[r]) + e;
          var i = 67108863 & n;
          n >>>= 26, t.words[r] = i, e = n;
        }
        return 0 !== e && (t.words[t.length++] = e), t;
      }, o._prime = function(t) {
        if (g[t]) return g[t];
        var e;
        if ('k256' === t) e = new w; else if ('p224' === t) e = new _; else if ('p192' === t) e = new M; else {
          if ('p25519' !== t) throw new Error('Unknown prime ' + t);
          e = new b;
        }
        return g[t] = e, e;
      }, k.prototype._verify1 = function(t) {
        n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers');
      }, k.prototype._verify2 = function(t, e) {
        n(0 == (t.negative | e.negative), 'red works only with positives'), n(t.red && t.red === e.red, 'red works only with red numbers');
      }, k.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
      }, k.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
      }, k.prototype.add = function(t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
      }, k.prototype.iadd = function(t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r;
      }, k.prototype.sub = function(t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
      }, k.prototype.isub = function(t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r;
      }, k.prototype.shl = function(t, e) {
        return this._verify1(t), this.imod(t.ushln(e));
      }, k.prototype.imul = function(t, e) {
        return this._verify2(t, e), this.imod(t.imul(e));
      }, k.prototype.mul = function(t, e) {
        return this._verify2(t, e), this.imod(t.mul(e));
      }, k.prototype.isqr = function(t) {
        return this.imul(t, t.clone());
      }, k.prototype.sqr = function(t) {
        return this.mul(t, t);
      }, k.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var e = this.m.andln(3);
        if (n(e % 2 == 1), 3 === e) {
          var r = this.m.add(new o(1)).iushrn(2);
          return this.pow(t, r);
        }
        var i = this.m.subn(1);
        var a = 0;
        for (;!i.isZero() && 0 === i.andln(1); ) a++, i.iushrn(1);
        n(!i.isZero());
        var s = new o(1).toRed(this);
        var u = s.redNeg();
        var h = this.m.subn(1).iushrn(1);
        var l = this.m.bitLength();
        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u); ) l.redIAdd(u);
        var c = this.pow(l, i);
        var f = this.pow(t, i.addn(1).iushrn(1));
        var d = this.pow(t, i);
        var p = a;
        for (;0 !== d.cmp(s); ) {
          var m = d;
          for (var v = 0; 0 !== m.cmp(s); v++) m = m.redSqr();
          n(v < p);
          var g = this.pow(c, new o(1).iushln(p - v - 1));
          f = f.redMul(g), c = g.redSqr(), d = d.redMul(c), p = v;
        }
        return f;
      }, k.prototype.invm = function(t) {
        var e = t._invmp(this.m);
        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
      }, k.prototype.pow = function(t, e) {
        if (e.isZero()) return new o(1).toRed(this);
        if (0 === e.cmpn(1)) return t.clone();
        var r = new Array(16);
        r[0] = new o(1).toRed(this), r[1] = t;
        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
        var i = r[0];
        var a = 0;
        var s = 0;
        var u = e.bitLength() % 26;
        for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
          var h = e.words[n];
          for (var l = u - 1; l >= 0; l--) {
            var c = h >> l & 1;
            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === l) && (i = this.mul(i, r[a]), 
            s = 0, a = 0)) : s = 0;
          }
          u = 26;
        }
        return i;
      }, k.prototype.convertTo = function(t) {
        var e = t.umod(this.m);
        return e === t ? e.clone() : e;
      }, k.prototype.convertFrom = function(t) {
        var e = t.clone();
        return e.red = null, e;
      }, o.mont = function(t) {
        return new x(t);
      }, i(x, k), x.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift));
      }, x.prototype.convertFrom = function(t) {
        var e = this.imod(t.mul(this.rinv));
        return e.red = null, e;
      }, x.prototype.imul = function(t, e) {
        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
        var r = t.imul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var o = i;
        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
      }, x.prototype.mul = function(t, e) {
        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
        var r = t.mul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var a = i;
        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
      }, x.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    }(t = r.nmd(t), this);
  },
  97754: (t, e, r) => {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t;
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    var i = r(82192), o = i.keccak224, a = i.keccak384, s = i.keccak256, u = i.keccak512;
    var h = r(24063);
    var l = r(69282);
    var c = r(51675);
    var f = r(97771);
    var d = r(23482);
    var p = r(89509).Buffer;
    Object.assign(e, r(80884)), e.MAX_INTEGER = new f('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16), 
    e.TWO_POW256 = new f('10000000000000000000000000000000000000000000000000000000000000000', 16), e.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470', 
    e.SHA3_NULL_S = e.KECCAK256_NULL_S, e.KECCAK256_NULL = p.from(e.KECCAK256_NULL_S, 'hex'), e.SHA3_NULL = e.KECCAK256_NULL, 
    e.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', e.SHA3_RLP_ARRAY_S = e.KECCAK256_RLP_ARRAY_S, 
    e.KECCAK256_RLP_ARRAY = p.from(e.KECCAK256_RLP_ARRAY_S, 'hex'), e.SHA3_RLP_ARRAY = e.KECCAK256_RLP_ARRAY, e.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 
    e.SHA3_RLP_S = e.KECCAK256_RLP_S, e.KECCAK256_RLP = p.from(e.KECCAK256_RLP_S, 'hex'), e.SHA3_RLP = e.KECCAK256_RLP, e.BN = f, 
    e.rlp = c, e.secp256k1 = h, e.zeros = function(t) {
      return p.allocUnsafe(t).fill(0);
    }, e.zeroAddress = function() {
      var t = e.zeros(20);
      return e.bufferToHex(t);
    }, e.setLengthLeft = e.setLength = function(t, r, n) {
      var i = e.zeros(r);
      return t = e.toBuffer(t), n ? t.length < r ? (t.copy(i), i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length), i) : t.slice(-r);
    }, e.setLengthRight = function(t, r) {
      return e.setLength(t, r, !0);
    }, e.unpad = e.stripZeros = function(t) {
      var r = (t = e.stripHexPrefix(t))[0];
      for (;t.length > 0 && '0' === r.toString(); ) r = (t = t.slice(1))[0];
      return t;
    }, e.toBuffer = function(t) {
      if (!p.isBuffer(t)) if (Array.isArray(t)) t = p.from(t); else if ('string' == typeof t) t = e.isHexString(t) ? p.from(e.padToEven(e.stripHexPrefix(t)), 'hex') : p.from(t); else if ('number' == typeof t) t = e.intToBuffer(t); else if (null == t) t = p.allocUnsafe(0); else if (f.isBN(t)) t = t.toArrayLike(p); else {
        if (!t.toArray) throw new Error('invalid type');
        t = p.from(t.toArray());
      }
      return t;
    }, e.bufferToInt = function(t) {
      return new f(e.toBuffer(t)).toNumber();
    }, e.bufferToHex = function(t) {
      return '0x' + (t = e.toBuffer(t)).toString('hex');
    }, e.fromSigned = function(t) {
      return new f(t).fromTwos(256);
    }, e.toUnsigned = function(t) {
      return p.from(t.toTwos(256).toArray());
    }, e.keccak = function(t, r) {
      switch (t = e.toBuffer(t), r || (r = 256), r) {
       case 224:
        return o(t);

       case 256:
        return s(t);

       case 384:
        return a(t);

       case 512:
        return u(t);

       default:
        throw new Error('Invald algorithm: keccak' + r);
      }
    }, e.keccak256 = function(t) {
      return e.keccak(t);
    }, e.sha3 = e.keccak, e.sha256 = function(t) {
      return t = e.toBuffer(t), d('sha256').update(t).digest();
    }, e.ripemd160 = function(t, r) {
      t = e.toBuffer(t);
      var n = d('rmd160').update(t).digest();
      return !0 === r ? e.setLength(n, 32) : n;
    }, e.rlphash = function(t) {
      return e.keccak(c.encode(t));
    }, e.isValidPrivate = function(t) {
      return h.privateKeyVerify(t);
    }, e.isValidPublic = function(t, e) {
      return 64 === t.length ? h.publicKeyVerify(p.concat([ p.from([ 4 ]), t ])) : !!e && h.publicKeyVerify(t);
    }, e.pubToAddress = e.publicToAddress = function(t, r) {
      return t = e.toBuffer(t), r && 64 !== t.length && (t = h.publicKeyConvert(t, !1).slice(1)), l(64 === t.length), e.keccak(t).slice(-20);
    };
    var m = e.privateToPublic = function(t) {
      return t = e.toBuffer(t), h.publicKeyCreate(t, !1).slice(1);
    };
    e.importPublic = function(t) {
      return 64 !== (t = e.toBuffer(t)).length && (t = h.publicKeyConvert(t, !1).slice(1)), t;
    }, e.ecsign = function(t, e) {
      var r = h.sign(t, e);
      var n = {};
      return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n;
    }, e.hashPersonalMessage = function(t) {
      var r = e.toBuffer('Ethereum Signed Message:\n' + t.length.toString());
      return e.keccak(p.concat([ r, t ]));
    }, e.ecrecover = function(t, r, n, i) {
      var o = p.concat([ e.setLength(n, 32), e.setLength(i, 32) ], 64);
      var a = r - 27;
      if (0 !== a && 1 !== a) throw new Error('Invalid signature v value');
      var s = h.recover(t, o, a);
      return h.publicKeyConvert(s, !1).slice(1);
    }, e.toRpcSig = function(t, r, n) {
      if (27 !== t && 28 !== t) throw new Error('Invalid recovery id');
      return e.bufferToHex(p.concat([ e.setLengthLeft(r, 32), e.setLengthLeft(n, 32), e.toBuffer(t - 27) ]));
    }, e.fromRpcSig = function(t) {
      if (65 !== (t = e.toBuffer(t)).length) throw new Error('Invalid signature length');
      var r = t[64];
      return r < 27 && (r += 27), {
        v: r,
        r: t.slice(0, 32),
        s: t.slice(32, 64)
      };
    }, e.privateToAddress = function(t) {
      return e.publicToAddress(m(t));
    }, e.isValidAddress = function(t) {
      return /^0x[0-9a-fA-F]{40}$/.test(t);
    }, e.isZeroAddress = function(t) {
      return e.zeroAddress() === e.addHexPrefix(t);
    }, e.toChecksumAddress = function(t) {
      t = e.stripHexPrefix(t).toLowerCase();
      var r = e.keccak(t).toString('hex');
      var n = '0x';
      for (var i = 0; i < t.length; i++) parseInt(r[i], 16) >= 8 ? n += t[i].toUpperCase() : n += t[i];
      return n;
    }, e.isValidChecksumAddress = function(t) {
      return e.isValidAddress(t) && e.toChecksumAddress(t) === t;
    }, e.generateAddress = function(t, r) {
      return t = e.toBuffer(t), r = (r = new f(r)).isZero() ? null : p.from(r.toArray()), e.rlphash([ t, r ]).slice(-20);
    }, e.isPrecompiled = function(t) {
      var r = e.unpad(t);
      return 1 === r.length && r[0] >= 1 && r[0] <= 8;
    }, e.addHexPrefix = function(t) {
      return 'string' != typeof t || e.isHexPrefixed(t) ? t : '0x' + t;
    }, e.isValidSignature = function(t, e, r, n) {
      var i = new f('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
      var o = new f('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
      return 32 === e.length && 32 === r.length && ((27 === t || 28 === t) && (e = new f(e), r = new f(r), !(e.isZero() || e.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new f(r).cmp(i))));
    }, e.baToJSON = function(t) {
      if (p.isBuffer(t)) return '0x' + t.toString('hex');
      if (t instanceof Array) {
        var r = [];
        for (var n = 0; n < t.length; n++) r.push(e.baToJSON(t[n]));
        return r;
      }
    }, e.defineProperties = function(t, r, i) {
      if (t.raw = [], t._fields = [], t.toJSON = function(r) {
        if (r) {
          var n = {};
          return t._fields.forEach((function(e) {
            n[e] = '0x' + t[e].toString('hex');
          })), n;
        }
        return e.baToJSON(this.raw);
      }, t.serialize = function() {
        return c.encode(t.raw);
      }, r.forEach((function(r, n) {
        function i() {
          return t.raw[n];
        }
        function o(i) {
          '00' !== (i = e.toBuffer(i)).toString('hex') || r.allowZero || (i = p.allocUnsafe(0)), r.allowLess && r.length ? (i = e.stripZeros(i), 
          l(r.length >= i.length, 'The field ' + r.name + ' must not have more ' + r.length + ' bytes')) : r.allowZero && 0 === i.length || !r.length || l(r.length === i.length, 'The field ' + r.name + ' must have byte length of ' + r.length), 
          t.raw[n] = i;
        }
        t._fields.push(r.name), Object.defineProperty(t, r.name, {
          enumerable: !0,
          configurable: !0,
          get: i,
          set: o
        }), r.default && (t[r.name] = r.default), r.alias && Object.defineProperty(t, r.alias, {
          enumerable: !1,
          configurable: !0,
          set: o,
          get: i
        });
      })), i) if ('string' == typeof i && (i = p.from(e.stripHexPrefix(i), 'hex')), p.isBuffer(i) && (i = c.decode(i)), Array.isArray(i)) {
        if (i.length > t._fields.length) throw new Error('wrong number of fields in data');
        i.forEach((function(r, n) {
          t[t._fields[n]] = e.toBuffer(r);
        }));
      } else {
        if ('object' !== (void 0 === i ? 'undefined' : n(i))) throw new Error('invalid data');
        var o = Object.keys(i);
        r.forEach((function(e) {
          -1 !== o.indexOf(e.name) && (t[e.name] = i[e.name]), -1 !== o.indexOf(e.alias) && (t[e.alias] = i[e.alias]);
        }));
      }
    };
  },
  24063: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(95053);
    var o = r(8570);
    var a = r(90119);
    var s = function(t) {
      return 32 === t.length && i.privateKeyVerify(Uint8Array.from(t));
    };
    t.exports = {
      privateKeyVerify: s,
      privateKeyExport: function(t, e) {
        if (32 !== t.length) throw new RangeError('private key length is invalid');
        var r = o.privateKeyExport(t, e);
        return a.privateKeyExport(t, r, e);
      },
      privateKeyImport: function(t) {
        if (null !== (t = a.privateKeyImport(t)) && 32 === t.length && s(t)) return t;
        throw new Error("couldn't import from DER format");
      },
      privateKeyNegate: function(t) {
        return n.from(i.privateKeyNegate(Uint8Array.from(t)));
      },
      privateKeyModInverse: function(t) {
        if (32 !== t.length) throw new Error('private key length is invalid');
        return n.from(o.privateKeyModInverse(Uint8Array.from(t)));
      },
      privateKeyTweakAdd: function(t, e) {
        return n.from(i.privateKeyTweakAdd(Uint8Array.from(t), e));
      },
      privateKeyTweakMul: function(t, e) {
        return n.from(i.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e)));
      },
      publicKeyCreate: function(t, e) {
        return n.from(i.publicKeyCreate(Uint8Array.from(t), e));
      },
      publicKeyConvert: function(t, e) {
        return n.from(i.publicKeyConvert(Uint8Array.from(t), e));
      },
      publicKeyVerify: function(t) {
        return (33 === t.length || 65 === t.length) && i.publicKeyVerify(Uint8Array.from(t));
      },
      publicKeyTweakAdd: function(t, e, r) {
        return n.from(i.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(e), r));
      },
      publicKeyTweakMul: function(t, e, r) {
        return n.from(i.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e), r));
      },
      publicKeyCombine: function(t, e) {
        var r = [];
        return t.forEach((function(t) {
          r.push(Uint8Array.from(t));
        })), n.from(i.publicKeyCombine(r, e));
      },
      signatureNormalize: function(t) {
        return n.from(i.signatureNormalize(Uint8Array.from(t)));
      },
      signatureExport: function(t) {
        return n.from(i.signatureExport(Uint8Array.from(t)));
      },
      signatureImport: function(t) {
        return n.from(i.signatureImport(Uint8Array.from(t)));
      },
      signatureImportLax: function(t) {
        if (0 === t.length) throw new RangeError('signature length is invalid');
        var e = a.signatureImportLax(t);
        if (null === e) throw new Error("couldn't parse DER signature");
        return o.signatureImport(e);
      },
      sign: function(t, e, r) {
        if (null === r) throw new TypeError('options should be an Object');
        var o = void 0;
        if (r) {
          if (o = {}, null === r.data) throw new TypeError('options.data should be a Buffer');
          if (r.data) {
            if (32 !== r.data.length) throw new RangeError('options.data length is invalid');
            o.data = new Uint8Array(r.data);
          }
          if (null === r.noncefn) throw new TypeError('options.noncefn should be a Function');
          r.noncefn && (o.noncefn = function(t, e, i, o, a) {
            var s = null != i ? n.from(i) : null;
            var u = null != o ? n.from(o) : null;
            var h = n.from('');
            return r.noncefn && (h = r.noncefn(n.from(t), n.from(e), s, u, a)), Uint8Array.from(h);
          });
        }
        var a = i.ecdsaSign(Uint8Array.from(t), Uint8Array.from(e), o);
        return {
          signature: n.from(a.signature),
          recovery: a.recid
        };
      },
      verify: function(t, e, r) {
        return i.ecdsaVerify(Uint8Array.from(e), Uint8Array.from(t), r);
      },
      recover: function(t, e, r, o) {
        return n.from(i.ecdsaRecover(Uint8Array.from(e), r, Uint8Array.from(t), o));
      },
      ecdh: function(t, e) {
        return n.from(i.ecdh(Uint8Array.from(t), Uint8Array.from(e), {}));
      },
      ecdhUnsafe: function(t, e, r) {
        if (33 !== t.length && 65 !== t.length) throw new RangeError('public key length is invalid');
        if (32 !== e.length) throw new RangeError('private key length is invalid');
        return n.from(o.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(e), r));
      }
    };
  },
  90119: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = n.from([ 48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    var o = n.from([ 48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    e.privateKeyExport = function(t, e, r) {
      var a = n.from(r ? i : o);
      return t.copy(a, r ? 8 : 9), e.copy(a, r ? 181 : 214), a;
    }, e.privateKeyImport = function(t) {
      var e = t.length;
      var r = 0;
      if (e < r + 1 || 48 !== t[r]) return null;
      if (e < (r += 1) + 1 || !(128 & t[r])) return null;
      var n = 127 & t[r];
      if (n < 1 || n > 2) return null;
      if (e < (r += 1) + n) return null;
      var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0);
      return e < (r += n) + i || e < r + 3 || 2 !== t[r] || 1 !== t[r + 1] || 1 !== t[r + 2] || e < (r += 3) + 2 || 4 !== t[r] || t[r + 1] > 32 || e < r + 2 + t[r + 1] ? null : t.slice(r + 2, r + 2 + t[r + 1]);
    }, e.signatureImportLax = function(t) {
      var e = n.alloc(32, 0);
      var r = n.alloc(32, 0);
      var i = t.length;
      var o = 0;
      if (48 !== t[o++]) return null;
      var a = t[o++];
      if (128 & a && (o += a - 128) > i) return null;
      if (2 !== t[o++]) return null;
      var s = t[o++];
      if (128 & s) {
        if (o + (a = s - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o];
      }
      if (s > i - o) return null;
      var u = o;
      if (o += s, 2 !== t[o++]) return null;
      var h = t[o++];
      if (128 & h) {
        if (o + (a = h - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (h = 0; a > 0; o += 1, a -= 1) h = (h << 8) + t[o];
      }
      if (h > i - o) return null;
      var l = o;
      for (o += h; s > 0 && 0 === t[u]; s -= 1, u += 1) ;
      if (s > 32) return null;
      var c = t.slice(u, u + s);
      for (c.copy(e, 32 - c.length); h > 0 && 0 === t[l]; h -= 1, l += 1) ;
      if (h > 32) return null;
      var f = t.slice(l, l + h);
      return f.copy(r, 32 - f.length), {
        r: e,
        s: r
      };
    };
  },
  8570: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(97771);
    var o = new (0, r(86266).ec)('secp256k1');
    var a = o.curve;
    e.privateKeyExport = function(t, e) {
      var r = new i(t);
      if (r.ucmp(a.n) >= 0) throw new Error('couldn\'t export to DER format');
      var n = o.g.mul(r);
      return s(n.getX(), n.getY(), e);
    }, e.privateKeyModInverse = function(t) {
      var e = new i(t);
      if (e.ucmp(a.n) >= 0 || e.isZero()) throw new Error('private key range is invalid');
      return e.invm(a.n).toArrayLike(n, 'be', 32);
    }, e.signatureImport = function(t) {
      var e = new i(t.r);
      e.ucmp(a.n) >= 0 && (e = new i(0));
      var r = new i(t.s);
      return r.ucmp(a.n) >= 0 && (r = new i(0)), n.concat([ e.toArrayLike(n, 'be', 32), r.toArrayLike(n, 'be', 32) ]);
    }, e.ecdhUnsafe = function(t, e, r) {
      var n = o.keyFromPublic(t);
      var u = new i(e);
      if (u.ucmp(a.n) >= 0 || u.isZero()) throw new Error('scalar was invalid (zero or overflow)');
      var h = n.pub.mul(u);
      return s(h.getX(), h.getY(), r);
    };
    var s = function(t, e, r) {
      var i = void 0;
      return r ? ((i = n.alloc(33))[0] = e.isOdd() ? 3 : 2, t.toArrayLike(n, 'be', 32).copy(i, 1)) : ((i = n.alloc(65))[0] = 4, 
      t.toArrayLike(n, 'be', 32).copy(i, 1), e.toArrayLike(n, 'be', 32).copy(i, 33)), i;
    };
  },
  80884: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(23944);
    var o = r(49604);
    function a(t) {
      var e = t;
      if ('string' != typeof e) throw new Error('[ethjs-util] while padding to even, value must be string, is currently ' + typeof e + ', while padToEven.');
      return e.length % 2 && (e = '0' + e), e;
    }
    function s(t) {
      return '0x' + t.toString(16);
    }
    t.exports = {
      arrayContainsArray: function(t, e, r) {
        if (!0 !== Array.isArray(t)) throw new Error('[ethjs-util] method arrayContainsArray requires input \'superset\' to be an array got type \'' + typeof t + '\'');
        if (!0 !== Array.isArray(e)) throw new Error('[ethjs-util] method arrayContainsArray requires input \'subset\' to be an array got type \'' + typeof e + '\'');
        return e[Boolean(r) ? 'some' : 'every']((function(e) {
          return t.indexOf(e) >= 0;
        }));
      },
      intToBuffer: function(t) {
        var e = s(t);
        return new n(a(e.slice(2)), 'hex');
      },
      getBinarySize: function(t) {
        if ('string' != typeof t) throw new Error('[ethjs-util] while getting binary size, method getBinarySize requires input \'str\' to be type String, got \'' + typeof t + '\'.');
        return n.byteLength(t, 'utf8');
      },
      isHexPrefixed: i,
      stripHexPrefix: o,
      padToEven: a,
      intToHex: s,
      fromAscii: function(t) {
        var e = '';
        for (var r = 0; r < t.length; r++) {
          var n = t.charCodeAt(r).toString(16);
          e += n.length < 2 ? '0' + n : n;
        }
        return '0x' + e;
      },
      fromUtf8: function(t) {
        return '0x' + a(new n(t, 'utf8').toString('hex')).replace(/^0+|0+$/g, '');
      },
      toAscii: function(t) {
        var e = '';
        var r = 0, n = t.length;
        for ('0x' === t.substring(0, 2) && (r = 2); r < n; r += 2) {
          var i = parseInt(t.substr(r, 2), 16);
          e += String.fromCharCode(i);
        }
        return e;
      },
      toUtf8: function(t) {
        return new n(a(o(t).replace(/^0+|0+$/g, '')), 'hex').toString('utf8');
      },
      getKeys: function(t, e, r) {
        if (!Array.isArray(t)) throw new Error('[ethjs-util] method getKeys expecting type Array as \'params\' input, got \'' + typeof t + '\'');
        if ('string' != typeof e) throw new Error('[ethjs-util] method getKeys expecting type String for input \'key\' got \'' + typeof e + '\'.');
        var n = [];
        for (var i = 0; i < t.length; i++) {
          var o = t[i][e];
          if (r && !o) o = ''; else if ('string' != typeof o) throw new Error('invalid abi');
          n.push(o);
        }
        return n;
      },
      isHexString: function(t, e) {
        return !('string' != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) && (!e || t.length === 2 + 2 * e);
      }
    };
  },
  26729: t => {
    "use strict";
    var e = Object.prototype.hasOwnProperty, r = '~';
    function n() {}
    function i(t, e, r) {
      this.fn = t, this.context = e, this.once = r || !1;
    }
    function o(t, e, n, o, a) {
      if ('function' != typeof n) throw new TypeError('The listener must be a function');
      var s = new i(n, o || t, a), u = r ? r + e : e;
      return t._events[u] ? t._events[u].fn ? t._events[u] = [ t._events[u], s ] : t._events[u].push(s) : (t._events[u] = s, t._eventsCount++), 
      t;
    }
    function a(t, e) {
      0 == --t._eventsCount ? t._events = new n : delete t._events[e];
    }
    function s() {
      this._events = new n, this._eventsCount = 0;
    }
    Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (r = !1)), s.prototype.eventNames = function() {
      var t, n, i = [];
      if (0 === this._eventsCount) return i;
      for (n in t = this._events) e.call(t, n) && i.push(r ? n.slice(1) : n);
      return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i;
    }, s.prototype.listeners = function(t) {
      var e = r ? r + t : t, n = this._events[e];
      if (!n) return [];
      if (n.fn) return [ n.fn ];
      for (var i = 0, o = n.length, a = new Array(o); i < o; i++) a[i] = n[i].fn;
      return a;
    }, s.prototype.listenerCount = function(t) {
      var e = r ? r + t : t, n = this._events[e];
      return n ? n.fn ? 1 : n.length : 0;
    }, s.prototype.emit = function(t, e, n, i, o, a) {
      var s = r ? r + t : t;
      if (!this._events[s]) return !1;
      var u, h, l = this._events[s], c = arguments.length;
      if (l.fn) {
        switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
         case 1:
          return l.fn.call(l.context), !0;

         case 2:
          return l.fn.call(l.context, e), !0;

         case 3:
          return l.fn.call(l.context, e, n), !0;

         case 4:
          return l.fn.call(l.context, e, n, i), !0;

         case 5:
          return l.fn.call(l.context, e, n, i, o), !0;

         case 6:
          return l.fn.call(l.context, e, n, i, o, a), !0;
        }
        for (h = 1, u = new Array(c - 1); h < c; h++) u[h - 1] = arguments[h];
        l.fn.apply(l.context, u);
      } else {
        var f, d = l.length;
        for (h = 0; h < d; h++) switch (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), c) {
         case 1:
          l[h].fn.call(l[h].context);
          break;

         case 2:
          l[h].fn.call(l[h].context, e);
          break;

         case 3:
          l[h].fn.call(l[h].context, e, n);
          break;

         case 4:
          l[h].fn.call(l[h].context, e, n, i);
          break;

         default:
          if (!u) for (f = 1, u = new Array(c - 1); f < c; f++) u[f - 1] = arguments[f];
          l[h].fn.apply(l[h].context, u);
        }
      }
      return !0;
    }, s.prototype.on = function(t, e, r) {
      return o(this, t, e, r, !1);
    }, s.prototype.once = function(t, e, r) {
      return o(this, t, e, r, !0);
    }, s.prototype.removeListener = function(t, e, n, i) {
      var o = r ? r + t : t;
      if (!this._events[o]) return this;
      if (!e) return a(this, o), this;
      var s = this._events[o];
      if (s.fn) s.fn !== e || i && !s.once || n && s.context !== n || a(this, o); else {
        for (var u = 0, h = [], l = s.length; u < l; u++) (s[u].fn !== e || i && !s[u].once || n && s[u].context !== n) && h.push(s[u]);
        h.length ? this._events[o] = 1 === h.length ? h[0] : h : a(this, o);
      }
      return this;
    }, s.prototype.removeAllListeners = function(t) {
      var e;
      return t ? (e = r ? r + t : t, this._events[e] && a(this, e)) : (this._events = new n, this._eventsCount = 0), this;
    }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = r, s.EventEmitter = s, 
    t.exports = s;
  },
  4501: t => {
    t.exports = n, n.strict = i, n.loose = o;
    var e = Object.prototype.toString;
    var r = {
      '[object Int8Array]': !0,
      '[object Int16Array]': !0,
      '[object Int32Array]': !0,
      '[object Uint8Array]': !0,
      '[object Uint8ClampedArray]': !0,
      '[object Uint16Array]': !0,
      '[object Uint32Array]': !0,
      '[object Float32Array]': !0,
      '[object Float64Array]': !0
    };
    function n(t) {
      return i(t) || o(t);
    }
    function i(t) {
      return t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array;
    }
    function o(t) {
      return r[e.call(t)];
    }
  },
  5826: t => {
    var e = {}.toString;
    t.exports = Array.isArray || function(t) {
      return '[object Array]' == e.call(t);
    };
  },
  17398: function(t, e, r) {
    "use strict";
    var n = this && this.__importDefault || function(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.JsonRpcEngine = void 0;
    const i = n(r(19394));
    const o = r(79826);
    class a extends i.default {
      constructor() {
        super(), this._middleware = [];
      }
      push(t) {
        this._middleware.push(t);
      }
      handle(t, e) {
        if (e && 'function' != typeof e) throw new Error('"callback" must be a function if provided.');
        return Array.isArray(t) ? e ? this._handleBatch(t, e) : this._handleBatch(t) : e ? this._handle(t, e) : this._promiseHandle(t);
      }
      asMiddleware() {
        return async (t, e, r, n) => {
          try {
            const [i, o, s] = await a._runAllMiddleware(t, e, this._middleware);
            return o ? (await a._runReturnHandlers(s), n(i)) : r((async t => {
              try {
                await a._runReturnHandlers(s);
              } catch (e) {
                return t(e);
              }
              return t();
            }));
          } catch (i) {
            return n(i);
          }
        };
      }
      async _handleBatch(t, e) {
        try {
          const r = await Promise.all(t.map(this._promiseHandle.bind(this)));
          return e ? e(null, r) : r;
        } catch (r) {
          if (e) return e(r);
          throw r;
        }
      }
      _promiseHandle(t) {
        return new Promise((e => {
          this._handle(t, ((t, r) => {
            e(r);
          }));
        }));
      }
      async _handle(t, e) {
        if (!t || Array.isArray(t) || 'object' != typeof t) {
          const r = new o.EthereumRpcError(o.errorCodes.rpc.invalidRequest, "Requests must be plain objects. Received: " + typeof t, {
            request: t
          });
          return e(r, {
            id: void 0,
            jsonrpc: '2.0',
            error: r
          });
        }
        if ('string' != typeof t.method) {
          const r = new o.EthereumRpcError(o.errorCodes.rpc.invalidRequest, "Must specify a string method. Received: " + typeof t.method, {
            request: t
          });
          return e(r, {
            id: t.id,
            jsonrpc: '2.0',
            error: r
          });
        }
        const r = Object.assign({}, t);
        const n = {
          id: r.id,
          jsonrpc: r.jsonrpc
        };
        let i = null;
        try {
          await this._processRequest(r, n);
        } catch (a) {
          i = a;
        }
        return i && (delete n.result, n.error || (n.error = o.serializeError(i))), e(i, n);
      }
      async _processRequest(t, e) {
        const [r, n, i] = await a._runAllMiddleware(t, e, this._middleware);
        if (a._checkForCompletion(t, e, n), await a._runReturnHandlers(i), r) throw r;
      }
      static async _runAllMiddleware(t, e, r) {
        const n = [];
        let i = null;
        let o = !1;
        for (const s of r) if ([i, o] = await a._runMiddleware(t, e, s, n), o) break;
        return [ i, o, n.reverse() ];
      }
      static _runMiddleware(t, e, r, n) {
        return new Promise((i => {
          const a = t => {
            const r = t || e.error;
            r && (e.error = o.serializeError(r)), i([ r, !0 ]);
          };
          const u = r => {
            e.error ? a(e.error) : (r && ('function' != typeof r && a(new o.EthereumRpcError(o.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof r}" for request:\n${s(t)}`, {
              request: t
            })), n.push(r)), i([ null, !1 ]));
          };
          try {
            r(t, e, u, a);
          } catch (h) {
            a(h);
          }
        }));
      }
      static async _runReturnHandlers(t) {
        for (const e of t) await new Promise(((t, r) => {
          e((e => e ? r(e) : t()));
        }));
      }
      static _checkForCompletion(t, e, r) {
        if (!('result' in e) && !('error' in e)) throw new o.EthereumRpcError(o.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${s(t)}`, {
          request: t
        });
        if (!r) throw new o.EthereumRpcError(o.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${s(t)}`, {
          request: t
        });
      }
    }
    function s(t) {
      return JSON.stringify(t, null, 2);
    }
    e.JsonRpcEngine = a;
  },
  31841: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.createAsyncMiddleware = void 0, e.createAsyncMiddleware = function(t) {
      return async (e, r, n, i) => {
        let o;
        const a = new Promise((t => {
          o = t;
        }));
        let s = null;
        let u = !1;
        const h = async () => {
          u = !0, n((t => {
            s = t, o();
          })), await a;
        };
        try {
          await t(e, r, h), u ? (await a, s(null)) : i(null);
        } catch (l) {
          s ? s(l) : i(l);
        }
      };
    };
  },
  48508: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.createScaffoldMiddleware = void 0, e.createScaffoldMiddleware = function(t) {
      return (e, r, n, i) => {
        const o = t[e.method];
        return void 0 === o ? n() : 'function' == typeof o ? o(e, r, n, i) : (r.result = o, i());
      };
    };
  },
  33107: (t, e) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.getUniqueId = void 0;
    const r = 4294967295;
    let n = Math.floor(Math.random() * r);
    e.getUniqueId = function() {
      return n = (n + 1) % r, n;
    };
  },
  85086: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.createIdRemapMiddleware = void 0;
    const n = r(33107);
    e.createIdRemapMiddleware = function() {
      return (t, e, r, i) => {
        const o = t.id;
        const a = n.getUniqueId();
        t.id = a, e.id = a, r((r => {
          t.id = o, e.id = o, r();
        }));
      };
    };
  },
  88625: function(t, e, r) {
    "use strict";
    var n = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
      void 0 === n && (n = r), Object.defineProperty(t, n, {
        enumerable: !0,
        get: function() {
          return e[r];
        }
      });
    } : function(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    });
    var i = this && this.__exportStar || function(t, e) {
      for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || n(e, t, r);
    };
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), i(r(85086), e), i(r(31841), e), i(r(48508), e), i(r(33107), e), i(r(17398), e), i(r(79962), e);
  },
  79962: (t, e, r) => {
    "use strict";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.mergeMiddleware = void 0;
    const n = r(17398);
    e.mergeMiddleware = function(t) {
      const e = new n.JsonRpcEngine;
      return t.forEach((t => e.push(t))), e.asMiddleware();
    };
  },
  23420: t => {
    t.exports = function(t) {
      var e = (t = t || {}).max || Number.MAX_SAFE_INTEGER;
      var r = void 0 !== t.start ? t.start : Math.floor(Math.random() * e);
      return function() {
        return r %= e, r++;
      };
    };
  },
  62705: (t, e, r) => {
    var n = r(55639).Symbol;
    t.exports = n;
  },
  14636: (t, e, r) => {
    var n = r(22545), i = r(35694), o = r(1469), a = r(44144), s = r(65776), u = r(36719);
    var h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
      var r = o(t), l = !r && i(t), c = !r && !l && a(t), f = !r && !l && !c && u(t), d = r || l || c || f, p = d ? n(t.length, String) : [], m = p.length;
      for (var v in t) !e && !h.call(t, v) || d && ('length' == v || c && ('offset' == v || 'parent' == v) || f && ('buffer' == v || 'byteLength' == v || 'byteOffset' == v) || s(v, m)) || p.push(v);
      return p;
    };
  },
  44239: (t, e, r) => {
    var n = r(62705), i = r(89607), o = r(2333);
    var a = n ? n.toStringTag : void 0;
    t.exports = function(t) {
      return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? i(t) : o(t);
    };
  },
  9454: (t, e, r) => {
    var n = r(44239), i = r(37005);
    t.exports = function(t) {
      return i(t) && "[object Arguments]" == n(t);
    };
  },
  38749: (t, e, r) => {
    var n = r(44239), i = r(41780), o = r(37005);
    var a = {};
    a['[object Float32Array]'] = a['[object Float64Array]'] = a['[object Int8Array]'] = a['[object Int16Array]'] = a['[object Int32Array]'] = a['[object Uint8Array]'] = a['[object Uint8ClampedArray]'] = a['[object Uint16Array]'] = a['[object Uint32Array]'] = !0, 
    a['[object Arguments]'] = a['[object Array]'] = a['[object ArrayBuffer]'] = a['[object Boolean]'] = a['[object DataView]'] = a['[object Date]'] = a['[object Error]'] = a['[object Function]'] = a['[object Map]'] = a['[object Number]'] = a['[object Object]'] = a['[object RegExp]'] = a['[object Set]'] = a['[object String]'] = a['[object WeakMap]'] = !1, 
    t.exports = function(t) {
      return o(t) && i(t.length) && !!a[n(t)];
    };
  },
  280: (t, e, r) => {
    var n = r(25726), i = r(86916);
    var o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
      if (!n(t)) return i(t);
      var e = [];
      for (var r in Object(t)) o.call(t, r) && 'constructor' != r && e.push(r);
      return e;
    };
  },
  22545: t => {
    t.exports = function(t, e) {
      var r = -1, n = Array(t);
      for (;++r < t; ) n[r] = e(r);
      return n;
    };
  },
  7518: t => {
    t.exports = function(t) {
      return function(e) {
        return t(e);
      };
    };
  },
  31957: (t, e, r) => {
    var n = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g;
    t.exports = n;
  },
  89607: (t, e, r) => {
    var n = r(62705);
    var i = Object.prototype;
    var o = i.hasOwnProperty;
    var a = i.toString;
    var s = n ? n.toStringTag : void 0;
    t.exports = function(t) {
      var e = o.call(t, s), r = t[s];
      try {
        t[s] = void 0;
        var n = !0;
      } catch (u) {}
      var i = a.call(t);
      return n && (e ? t[s] = r : delete t[s]), i;
    };
  },
  65776: t => {
    var e = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, r) {
      var n = typeof t;
      return !!(r = null == r ? 9007199254740991 : r) && ('number' == n || 'symbol' != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r;
    };
  },
  25726: t => {
    var e = Object.prototype;
    t.exports = function(t) {
      var r = t && t.constructor;
      return t === ('function' == typeof r && r.prototype || e);
    };
  },
  86916: (t, e, r) => {
    var n = r(5569)(Object.keys, Object);
    t.exports = n;
  },
  31167: (t, e, r) => {
    t = r.nmd(t);
    var n = r(31957);
    var i = e && !e.nodeType && e;
    var o = i && t && !t.nodeType && t;
    var a = o && o.exports === i && n.process;
    var s = function() {
      try {
        var t = o && o.require && o.require('util').types;
        return t || a && a.binding && a.binding('util');
      } catch (e) {}
    }();
    t.exports = s;
  },
  2333: t => {
    var e = Object.prototype.toString;
    t.exports = function(t) {
      return e.call(t);
    };
  },
  5569: t => {
    t.exports = function(t, e) {
      return function(r) {
        return t(e(r));
      };
    };
  },
  55639: (t, e, r) => {
    var n = r(31957);
    var i = 'object' == typeof self && self && self.Object === Object && self;
    var o = n || i || Function('return this')();
    t.exports = o;
  },
  35694: (t, e, r) => {
    var n = r(9454), i = r(37005);
    var o = Object.prototype;
    var a = o.hasOwnProperty;
    var s = o.propertyIsEnumerable;
    var u = n(function() {
      return arguments;
    }()) ? n : function(t) {
      return i(t) && a.call(t, 'callee') && !s.call(t, 'callee');
    };
    t.exports = u;
  },
  1469: t => {
    var e = Array.isArray;
    t.exports = e;
  },
  98612: (t, e, r) => {
    var n = r(23560), i = r(41780);
    t.exports = function(t) {
      return null != t && i(t.length) && !n(t);
    };
  },
  44144: (t, e, r) => {
    t = r.nmd(t);
    var n = r(55639), i = r(95062);
    var o = e && !e.nodeType && e;
    var a = o && t && !t.nodeType && t;
    var s = a && a.exports === o ? n.Buffer : void 0;
    var u = (s ? s.isBuffer : void 0) || i;
    t.exports = u;
  },
  23560: (t, e, r) => {
    var n = r(44239), i = r(13218);
    t.exports = function(t) {
      if (!i(t)) return !1;
      var e = n(t);
      return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
    };
  },
  41780: t => {
    t.exports = function(t) {
      return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
    };
  },
  13218: t => {
    t.exports = function(t) {
      var e = typeof t;
      return null != t && ('object' == e || 'function' == e);
    };
  },
  37005: t => {
    t.exports = function(t) {
      return null != t && 'object' == typeof t;
    };
  },
  36719: (t, e, r) => {
    var n = r(38749), i = r(7518), o = r(31167);
    var a = o && o.isTypedArray;
    var s = a ? i(a) : n;
    t.exports = s;
  },
  3674: (t, e, r) => {
    var n = r(14636), i = r(280), o = r(98612);
    t.exports = function(t) {
      return o(t) ? n(t) : i(t);
    };
  },
  50308: t => {
    t.exports = function() {};
  },
  95062: t => {
    t.exports = function() {
      return !1;
    };
  },
  12352: t => {
    "use strict";
    const e = (t, e) => function() {
      const r = e.promiseModule;
      const n = new Array(arguments.length);
      for (let t = 0; t < arguments.length; t++) n[t] = arguments[t];
      return new r(((r, i) => {
        e.errorFirst ? n.push((function(t, n) {
          if (e.multiArgs) {
            const e = new Array(arguments.length - 1);
            for (let t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
            t ? (e.unshift(t), i(e)) : r(e);
          } else t ? i(t) : r(n);
        })) : n.push((function(t) {
          if (e.multiArgs) {
            const t = new Array(arguments.length - 1);
            for (let e = 0; e < arguments.length; e++) t[e] = arguments[e];
            r(t);
          } else r(t);
        })), t.apply(this, n);
      }));
    };
    t.exports = (t, r) => {
      r = Object.assign({
        exclude: [ /.+(Sync|Stream)$/ ],
        errorFirst: !0,
        promiseModule: Promise
      }, r);
      const n = t => {
        const e = e => 'string' == typeof e ? t === e : e.test(t);
        return r.include ? r.include.some(e) : !r.exclude.some(e);
      };
      let i;
      i = 'function' == typeof t ? function() {
        return r.excludeMain ? t.apply(this, arguments) : e(t, r).apply(this, arguments);
      } : Object.create(Object.getPrototypeOf(t));
      for (const o in t) {
        const a = t[o];
        i[o] = 'function' == typeof a && n(o) ? e(a, r) : a;
      }
      return i;
    };
  },
  35776: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      Children: () => yt,
      Component: () => w,
      Fragment: () => y,
      PureComponent: () => dt,
      Suspense: () => Mt,
      SuspenseList: () => xt,
      cloneElement: () => Kt,
      createContext: () => j,
      createElement: () => m,
      createFactory: () => jt,
      createPortal: () => Tt,
      createRef: () => g,
      default: () => Dt,
      findDOMNode: () => Ft,
      forwardRef: () => vt,
      hydrate: () => Lt,
      isValidElement: () => qt,
      lazy: () => kt,
      memo: () => pt,
      render: () => Bt,
      unmountComponentAtNode: () => Ht,
      unstable_batchedUpdates: () => zt,
      useCallback: () => rt,
      useContext: () => nt,
      useDebugValue: () => it,
      useEffect: () => J,
      useErrorBoundary: () => ot,
      useImperativeHandle: () => tt,
      useLayoutEffect: () => Q,
      useMemo: () => et,
      useReducer: () => Y,
      useRef: () => X,
      useState: () => G,
      version: () => Ut
    });
    var n, i, o, a, s, u, h, l = {}, c = [], f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
    function d(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    }
    function p(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function m(t, e, r) {
      var n, i = arguments, o = {};
      for (n in e) "key" !== n && "ref" !== n && (o[n] = e[n]);
      if (arguments.length > 3) for (r = [ r ], n = 3; n < arguments.length; n++) r.push(i[n]);
      if (null != r && (o.children = r), "function" == typeof t && null != t.defaultProps) for (n in t.defaultProps) void 0 === o[n] && (o[n] = t.defaultProps[n]);
      return v(t, o, e && e.key, e && e.ref, null);
    }
    function v(t, e, r, i, o) {
      var a = {
        type: t,
        props: e,
        key: r,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: o
      };
      return null == o && (a.__v = a), n.vnode && n.vnode(a), a;
    }
    function g() {
      return {};
    }
    function y(t) {
      return t.children;
    }
    function w(t, e) {
      this.props = t, this.context = e;
    }
    function _(t, e) {
      if (null == e) return t.__ ? _(t.__, t.__.__k.indexOf(t) + 1) : null;
      for (var r; e < t.__k.length; e++) if (null != (r = t.__k[e]) && null != r.__e) return r.__e;
      return "function" == typeof t.type ? _(t) : null;
    }
    function M(t) {
      var e, r;
      if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if (null != (r = t.__k[e]) && null != r.__e) {
          t.__e = t.__c.base = r.__e;
          break;
        }
        return M(t);
      }
    }
    function b(t) {
      (!t.__d && (t.__d = !0) && i.push(t) && !o++ || s !== n.debounceRendering) && ((s = n.debounceRendering) || a)(k);
    }
    function k() {
      for (var t; o = i.length; ) t = i.sort((function(t, e) {
        return t.__v.__b - e.__v.__b;
      })), i = [], t.some((function(t) {
        var e, r, n, i, o, a, s;
        t.__d && (a = (o = (e = t).__v).__e, (s = e.__P) && (r = [], (n = d({}, o)).__v = n, i = C(s, o, n, e.__n, void 0 !== s.ownerSVGElement, null, r, null == a ? _(o) : a), 
        R(r, o), i != a && M(o)));
      }));
    }
    function x(t, e, r, n, i, o, a, s, u) {
      var h, f, d, m, v, g, y, w = r && r.__k || c, M = w.length;
      if (s == l && (s = null != o ? o[0] : M ? _(r, 0) : null), h = 0, e.__k = A(e.__k, (function(r) {
        if (null != r) {
          if (r.__ = e, r.__b = e.__b + 1, null === (d = w[h]) || d && r.key == d.key && r.type === d.type) w[h] = void 0; else for (f = 0; f < M; f++) {
            if ((d = w[f]) && r.key == d.key && r.type === d.type) {
              w[f] = void 0;
              break;
            }
            d = null;
          }
          if (m = C(t, r, d = d || l, n, i, o, a, s, u), (f = r.ref) && d.ref != f && (y || (y = []), d.ref && y.push(d.ref, null, r), 
          y.push(f, r.__c || m, r)), null != m) {
            var c;
            if (null == g && (g = m), void 0 !== r.__d) c = r.__d, r.__d = void 0; else if (o == d || m != s || null == m.parentNode) {
              t: if (null == s || s.parentNode !== t) t.appendChild(m), c = null; else {
                for (v = s, f = 0; (v = v.nextSibling) && f < M; f += 2) if (v == m) break t;
                t.insertBefore(m, s), c = s;
              }
              "option" == e.type && (t.value = "");
            }
            s = void 0 !== c ? c : m.nextSibling, "function" == typeof e.type && (e.__d = s);
          } else s && d.__e == s && s.parentNode != t && (s = _(d));
        }
        return h++, r;
      })), e.__e = g, null != o && "function" != typeof e.type) for (h = o.length; h--; ) null != o[h] && p(o[h]);
      for (h = M; h--; ) null != w[h] && P(w[h], w[h]);
      if (y) for (h = 0; h < y.length; h++) L(y[h], y[++h], y[++h]);
    }
    function A(t, e, r) {
      if (null == r && (r = []), null == t || "boolean" == typeof t) e && r.push(e(null)); else if (Array.isArray(t)) for (var n = 0; n < t.length; n++) A(t[n], e, r); else r.push(e ? e("string" == typeof t || "number" == typeof t ? v(null, t, null, null, t) : null != t.__e || null != t.__c ? v(t.type, t.props, t.key, null, t.__v) : t) : t);
      return r;
    }
    function E(t, e, r) {
      "-" === e[0] ? t.setProperty(e, r) : t[e] = "number" == typeof r && !1 === f.test(e) ? r + "px" : null == r ? "" : r;
    }
    function S(t, e, r, n, i) {
      var o, a, s, u, h;
      if (i ? "className" === e && (e = "class") : "class" === e && (e = "className"), "style" === e) if (o = t.style, "string" == typeof r) o.cssText = r; else {
        if ("string" == typeof n && (o.cssText = "", n = null), n) for (u in n) r && u in r || E(o, u, "");
        if (r) for (h in r) n && r[h] === n[h] || E(o, h, r[h]);
      } else "o" === e[0] && "n" === e[1] ? (a = e !== (e = e.replace(/Capture$/, "")), s = e.toLowerCase(), e = (s in t ? s : e).slice(2), 
      r ? (n || t.addEventListener(e, T, a), (t.l || (t.l = {}))[e] = r) : t.removeEventListener(e, T, a)) : "list" !== e && "tagName" !== e && "form" !== e && "type" !== e && "size" !== e && !i && e in t ? t[e] = null == r ? "" : r : "function" != typeof r && "dangerouslySetInnerHTML" !== e && (e !== (e = e.replace(/^xlink:?/, "")) ? null == r || !1 === r ? t.removeAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase()) : t.setAttributeNS("http://www.w3.org/1999/xlink", e.toLowerCase(), r) : null == r || !1 === r && !/^ar/.test(e) ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
    function T(t) {
      this.l[t.type](n.event ? n.event(t) : t);
    }
    function C(t, e, r, i, o, a, s, u, h) {
      var l, c, f, p, m, v, g, _, M, b, k = e.type;
      if (void 0 !== e.constructor) return null;
      (l = n.__b) && l(e);
      try {
        t: if ("function" == typeof k) {
          if (_ = e.props, M = (l = k.contextType) && i[l.__c], b = l ? M ? M.props.value : l.__ : i, r.__c ? g = (c = e.__c = r.__c).__ = c.__E : ("prototype" in k && k.prototype.render ? e.__c = c = new k(_, b) : (e.__c = c = new w(_, b), 
          c.constructor = k, c.render = I), M && M.sub(c), c.props = _, c.state || (c.state = {}), c.context = b, c.__n = i, f = c.__d = !0, 
          c.__h = []), null == c.__s && (c.__s = c.state), null != k.getDerivedStateFromProps && (c.__s == c.state && (c.__s = d({}, c.__s)), 
          d(c.__s, k.getDerivedStateFromProps(_, c.__s))), p = c.props, m = c.state, f) null == k.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(), 
          null != c.componentDidMount && c.__h.push(c.componentDidMount); else {
            if (null == k.getDerivedStateFromProps && _ !== p && null != c.componentWillReceiveProps && c.componentWillReceiveProps(_, b), 
            !c.__e && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(_, c.__s, b) || e.__v === r.__v && !c.__) {
              for (c.props = _, c.state = c.__s, e.__v !== r.__v && (c.__d = !1), c.__v = e, e.__e = r.__e, e.__k = r.__k, c.__h.length && s.push(c), 
              l = 0; l < e.__k.length; l++) e.__k[l] && (e.__k[l].__ = e);
              break t;
            }
            null != c.componentWillUpdate && c.componentWillUpdate(_, c.__s, b), null != c.componentDidUpdate && c.__h.push((function() {
              c.componentDidUpdate(p, m, v);
            }));
          }
          c.context = b, c.props = _, c.state = c.__s, (l = n.__r) && l(e), c.__d = !1, c.__v = e, c.__P = t, l = c.render(c.props, c.state, c.context), 
          e.__k = null != l && l.type == y && null == l.key ? l.props.children : Array.isArray(l) ? l : [ l ], null != c.getChildContext && (i = d(d({}, i), c.getChildContext())), 
          f || null == c.getSnapshotBeforeUpdate || (v = c.getSnapshotBeforeUpdate(p, m)), x(t, e, r, i, o, a, s, u, h), c.base = e.__e, 
          c.__h.length && s.push(c), g && (c.__E = c.__ = null), c.__e = !1;
        } else null == a && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = B(r.__e, e, r, i, o, a, s, h);
        (l = n.diffed) && l(e);
      } catch (t) {
        e.__v = null, n.__e(t, e, r);
      }
      return e.__e;
    }
    function R(t, e) {
      n.__c && n.__c(e, t), t.some((function(e) {
        try {
          t = e.__h, e.__h = [], t.some((function(t) {
            t.call(e);
          }));
        } catch (t) {
          n.__e(t, e.__v);
        }
      }));
    }
    function B(t, e, r, n, i, o, a, s) {
      var u, h, f, d, p, m = r.props, v = e.props;
      if (i = "svg" === e.type || i, null != o) for (u = 0; u < o.length; u++) if (null != (h = o[u]) && ((null === e.type ? 3 === h.nodeType : h.localName === e.type) || t == h)) {
        t = h, o[u] = null;
        break;
      }
      if (null == t) {
        if (null === e.type) return document.createTextNode(v);
        t = i ? document.createElementNS("http://www.w3.org/2000/svg", e.type) : document.createElement(e.type, v.is && {
          is: v.is
        }), o = null, s = !1;
      }
      if (null === e.type) m !== v && t.data != v && (t.data = v); else {
        if (null != o && (o = c.slice.call(t.childNodes)), f = (m = r.props || l).dangerouslySetInnerHTML, d = v.dangerouslySetInnerHTML, 
        !s) {
          if (m === l) for (m = {}, p = 0; p < t.attributes.length; p++) m[t.attributes[p].name] = t.attributes[p].value;
          (d || f) && (d && f && d.__html == f.__html || (t.innerHTML = d && d.__html || ""));
        }
        (function(t, e, r, n, i) {
          var o;
          for (o in r) "children" === o || "key" === o || o in e || S(t, o, null, r[o], n);
          for (o in e) i && "function" != typeof e[o] || "children" === o || "key" === o || "value" === o || "checked" === o || r[o] === e[o] || S(t, o, e[o], r[o], n);
        })(t, v, m, i, s), d ? e.__k = [] : (e.__k = e.props.children, x(t, e, r, n, "foreignObject" !== e.type && i, o, a, l, s)), 
        s || ("value" in v && void 0 !== (u = v.value) && u !== t.value && S(t, "value", u, m.value, !1), "checked" in v && void 0 !== (u = v.checked) && u !== t.checked && S(t, "checked", u, m.checked, !1));
      }
      return t;
    }
    function L(t, e, r) {
      try {
        "function" == typeof t ? t(e) : t.current = e;
      } catch (t) {
        n.__e(t, r);
      }
    }
    function P(t, e, r) {
      var i, o, a;
      if (n.unmount && n.unmount(t), (i = t.ref) && (i.current && i.current !== t.__e || L(i, null, e)), r || "function" == typeof t.type || (r = null != (o = t.__e)), 
      t.__e = t.__d = void 0, null != (i = t.__c)) {
        if (i.componentWillUnmount) try {
          i.componentWillUnmount();
        } catch (t) {
          n.__e(t, e);
        }
        i.base = i.__P = null;
      }
      if (i = t.__k) for (a = 0; a < i.length; a++) i[a] && P(i[a], e, r);
      null != o && p(o);
    }
    function I(t, e, r) {
      return this.constructor(t, r);
    }
    function O(t, e, r) {
      var i, o, a;
      n.__ && n.__(t, e), o = (i = r === u) ? null : r && r.__k || e.__k, t = m(y, null, [ t ]), a = [], C(e, (i ? e : r || e).__k = t, o || l, l, void 0 !== e.ownerSVGElement, r && !i ? [ r ] : o ? null : c.slice.call(e.childNodes), a, r || l, i), 
      R(a, t);
    }
    function N(t, e) {
      O(t, e, u);
    }
    function U(t, e) {
      var r, n;
      for (n in e = d(d({}, t.props), e), arguments.length > 2 && (e.children = c.slice.call(arguments, 2)), r = {}, e) "key" !== n && "ref" !== n && (r[n] = e[n]);
      return v(t.type, r, e.key || t.key, e.ref || t.ref, null);
    }
    function j(t) {
      var e = {}, r = {
        __c: "__cC" + h++,
        __: t,
        Consumer: function(t, e) {
          return t.children(e);
        },
        Provider: function(t) {
          var n, i = this;
          return this.getChildContext || (n = [], this.getChildContext = function() {
            return e[r.__c] = i, e;
          }, this.shouldComponentUpdate = function(t) {
            i.props.value !== t.value && n.some((function(e) {
              e.context = t.value, b(e);
            }));
          }, this.sub = function(t) {
            n.push(t);
            var e = t.componentWillUnmount;
            t.componentWillUnmount = function() {
              n.splice(n.indexOf(t), 1), e && e.call(t);
            };
          }), t.children;
        }
      };
      return r.Consumer.contextType = r, r.Provider.__ = r, r;
    }
    n = {
      __e: function(t, e) {
        for (var r, n; e = e.__; ) if ((r = e.__c) && !r.__) try {
          if (r.constructor && null != r.constructor.getDerivedStateFromError && (n = !0, r.setState(r.constructor.getDerivedStateFromError(t))), 
          null != r.componentDidCatch && (n = !0, r.componentDidCatch(t)), n) return b(r.__E = r);
        } catch (e) {
          t = e;
        }
        throw t;
      }
    }, w.prototype.setState = function(t, e) {
      var r;
      r = this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof t && (t = t(r, this.props)), 
      t && d(r, t), null != t && this.__v && (e && this.__h.push(e), b(this));
    }, w.prototype.forceUpdate = function(t) {
      this.__v && (this.__e = !0, t && this.__h.push(t), b(this));
    }, w.prototype.render = y, i = [], o = 0, a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
    u = l, h = 0;
    var q, K, H, F = 0, z = [], D = n.__r, Z = n.diffed, W = n.__c, V = n.unmount;
    function $(t, e) {
      n.__h && n.__h(K, t, F || e), F = 0;
      var r = K.__H || (K.__H = {
        __: [],
        __h: []
      });
      return t >= r.__.length && r.__.push({}), r.__[t];
    }
    function G(t) {
      return F = 1, Y(lt, t);
    }
    function Y(t, e, r) {
      var n = $(q++, 2);
      return n.__c || (n.__c = K, n.__ = [ r ? r(e) : lt(void 0, e), function(e) {
        var r = t(n.__[0], e);
        n.__[0] !== r && (n.__[0] = r, n.__c.setState({}));
      } ]), n.__;
    }
    function J(t, e) {
      var r = $(q++, 3);
      !n.__s && ht(r.__H, e) && (r.__ = t, r.__H = e, K.__H.__h.push(r));
    }
    function Q(t, e) {
      var r = $(q++, 4);
      !n.__s && ht(r.__H, e) && (r.__ = t, r.__H = e, K.__h.push(r));
    }
    function X(t) {
      return F = 5, et((function() {
        return {
          current: t
        };
      }), []);
    }
    function tt(t, e, r) {
      F = 6, Q((function() {
        "function" == typeof t ? t(e()) : t && (t.current = e());
      }), null == r ? r : r.concat(t));
    }
    function et(t, e) {
      var r = $(q++, 7);
      return ht(r.__H, e) ? (r.__H = e, r.__h = t, r.__ = t()) : r.__;
    }
    function rt(t, e) {
      return F = 8, et((function() {
        return t;
      }), e);
    }
    function nt(t) {
      var e = K.context[t.__c], r = $(q++, 9);
      return r.__c = t, e ? (null == r.__ && (r.__ = !0, e.sub(K)), e.props.value) : t.__;
    }
    function it(t, e) {
      n.useDebugValue && n.useDebugValue(e ? e(t) : t);
    }
    function ot(t) {
      var e = $(q++, 10), r = G();
      return e.__ = t, K.componentDidCatch || (K.componentDidCatch = function(t) {
        e.__ && e.__(t), r[1](t);
      }), [ r[0], function() {
        r[1](void 0);
      } ];
    }
    function at() {
      z.some((function(t) {
        if (t.__P) try {
          t.__H.__h.forEach(st), t.__H.__h.forEach(ut), t.__H.__h = [];
        } catch (i) {
          return t.__H.__h = [], n.__e(i, t.__v), !0;
        }
      })), z = [];
    }
    function st(t) {
      t.t && t.t();
    }
    function ut(t) {
      var e = t.__();
      "function" == typeof e && (t.t = e);
    }
    function ht(t, e) {
      return !t || e.some((function(e, r) {
        return e !== t[r];
      }));
    }
    function lt(t, e) {
      return "function" == typeof e ? e(t) : e;
    }
    function ct(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    }
    function ft(t, e) {
      for (var r in t) if ("__source" !== r && !(r in e)) return !0;
      for (var n in e) if ("__source" !== n && t[n] !== e[n]) return !0;
      return !1;
    }
    n.__r = function(t) {
      D && D(t), q = 0, (K = t.__c).__H && (K.__H.__h.forEach(st), K.__H.__h.forEach(ut), K.__H.__h = []);
    }, n.diffed = function(t) {
      Z && Z(t);
      var e = t.__c;
      if (e) {
        var r = e.__H;
        r && r.__h.length && (1 !== z.push(e) && H === n.requestAnimationFrame || ((H = n.requestAnimationFrame) || function(t) {
          var e, r = function() {
            clearTimeout(n), cancelAnimationFrame(e), setTimeout(t);
          }, n = setTimeout(r, 100);
          "undefined" != typeof window && (e = requestAnimationFrame(r));
        })(at));
      }
    }, n.__c = function(t, e) {
      e.some((function(t) {
        try {
          t.__h.forEach(st), t.__h = t.__h.filter((function(t) {
            return !t.__ || ut(t);
          }));
        } catch (s) {
          e.some((function(t) {
            t.__h && (t.__h = []);
          })), e = [], n.__e(s, t.__v);
        }
      })), W && W(t, e);
    }, n.unmount = function(t) {
      V && V(t);
      var e = t.__c;
      if (e) {
        var r = e.__H;
        if (r) try {
          r.__.forEach((function(t) {
            return t.t && t.t();
          }));
        } catch (t) {
          n.__e(t, e.__v);
        }
      }
    };
    var dt = function(t) {
      var e, r;
      function n(e) {
        var r;
        return (r = t.call(this, e) || this).isPureReactComponent = !0, r;
      }
      return r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, n.prototype.shouldComponentUpdate = function(t, e) {
        return ft(this.props, t) || ft(this.state, e);
      }, n;
    }(w);
    function pt(t, e) {
      function r(t) {
        var r = this.props.ref, n = r == t.ref;
        return !n && r && (r.call ? r(null) : r.current = null), e ? !e(this.props, t) || !n : ft(this.props, t);
      }
      function n(e) {
        return this.shouldComponentUpdate = r, m(t, ct({}, e));
      }
      return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.t = !0, n;
    }
    var mt = n.__b;
    function vt(t) {
      function e(e) {
        var r = ct({}, e);
        return delete r.ref, t(r, e.ref);
      }
      return e.prototype.isReactComponent = e.t = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
    }
    n.__b = function(t) {
      t.type && t.type.t && t.ref && (t.props.ref = t.ref, t.ref = null), mt && mt(t);
    };
    var gt = function(t, e) {
      return t ? A(t).reduce((function(t, r, n) {
        return t.concat(e(r, n));
      }), []) : null;
    }, yt = {
      map: gt,
      forEach: gt,
      count: function(t) {
        return t ? A(t).length : 0;
      },
      only: function(t) {
        if (1 !== (t = A(t)).length) throw new Error("Children.only() expects only one child.");
        return t[0];
      },
      toArray: A
    }, wt = n.__e;
    function _t(t) {
      return t && ((t = ct({}, t)).__c = null, t.__k = t.__k && t.__k.map(_t)), t;
    }
    function Mt() {
      this.__u = 0, this.o = null, this.__b = null;
    }
    function bt(t) {
      var e = t.__.__c;
      return e && e.u && e.u(t);
    }
    function kt(t) {
      var e, r, n;
      function i(i) {
        if (e || (e = t()).then((function(t) {
          r = t.default || t;
        }), (function(t) {
          n = t;
        })), n) throw n;
        if (!r) throw e;
        return m(r, i);
      }
      return i.displayName = "Lazy", i.t = !0, i;
    }
    function xt() {
      this.i = null, this.l = null;
    }
    n.__e = function(t, e, r) {
      if (t.then) for (var n, i = e; i = i.__; ) if ((n = i.__c) && n.__c) return n.__c(t, e.__c);
      wt(t, e, r);
    }, (Mt.prototype = new w).__c = function(t, e) {
      var r = this;
      null == r.o && (r.o = []), r.o.push(e);
      var n = bt(r.__v), i = !1, o = function() {
        i || (i = !0, n ? n(a) : a());
      };
      e.__c = e.componentWillUnmount, e.componentWillUnmount = function() {
        o(), e.__c && e.__c();
      };
      var a = function() {
        var t;
        if (!--r.__u) for (r.__v.__k[0] = r.state.u, r.setState({
          u: r.__b = null
        }); t = r.o.pop(); ) t.forceUpdate();
      };
      r.__u++ || r.setState({
        u: r.__b = r.__v.__k[0]
      }), t.then(o, o);
    }, Mt.prototype.render = function(t, e) {
      return this.__b && (this.__v.__k[0] = _t(this.__b), this.__b = null), [ m(w, null, e.u ? null : t.children), e.u && t.fallback ];
    };
    var At = function(t, e, r) {
      if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size)) for (r = t.i; r; ) {
        for (;r.length > 3; ) r.pop()();
        if (r[1] < r[0]) break;
        t.i = r = r[2];
      }
    };
    (xt.prototype = new w).u = function(t) {
      var e = this, r = bt(e.__v), n = e.l.get(t);
      return n[0]++, function(i) {
        var o = function() {
          e.props.revealOrder ? (n.push(i), At(e, t, n)) : i();
        };
        r ? r(o) : o();
      };
    }, xt.prototype.render = function(t) {
      this.i = null, this.l = new Map;
      var e = A(t.children);
      t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
      for (var r = e.length; r--; ) this.l.set(e[r], this.i = [ 1, 0, this.i ]);
      return t.children;
    }, xt.prototype.componentDidUpdate = xt.prototype.componentDidMount = function() {
      var t = this;
      t.l.forEach((function(e, r) {
        At(t, r, e);
      }));
    };
    var Et = function() {
      function t() {}
      var e = t.prototype;
      return e.getChildContext = function() {
        return this.props.context;
      }, e.render = function(t) {
        return t.children;
      }, t;
    }();
    function St(t) {
      var e = this, r = t.container, n = m(Et, {
        context: e.context
      }, t.vnode);
      return e.s && e.s !== r && (e.v.parentNode && e.s.removeChild(e.v), P(e.h), e.p = !1), t.vnode ? e.p ? (r.__k = e.__k, O(n, r), 
      e.__k = r.__k) : (e.v = document.createTextNode(""), N("", r), r.appendChild(e.v), e.p = !0, e.s = r, O(n, r, e.v), e.__k = e.v.__k) : e.p && (e.v.parentNode && e.s.removeChild(e.v), 
      P(e.h)), e.h = n, e.componentWillUnmount = function() {
        e.v.parentNode && e.s.removeChild(e.v), P(e.h);
      }, null;
    }
    function Tt(t, e) {
      return m(St, {
        vnode: t,
        container: e
      });
    }
    var Ct = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
    w.prototype.isReactComponent = {};
    var Rt = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
    function Bt(t, e, r) {
      if (null == e.__k) for (;e.firstChild; ) e.removeChild(e.firstChild);
      return O(t, e), "function" == typeof r && r(), t ? t.__c : null;
    }
    function Lt(t, e, r) {
      return N(t, e), "function" == typeof r && r(), t ? t.__c : null;
    }
    var Pt = n.event;
    function It(t, e) {
      t["UNSAFE_" + e] && !t[e] && Object.defineProperty(t, e, {
        configurable: !1,
        get: function() {
          return this["UNSAFE_" + e];
        },
        set: function(t) {
          this["UNSAFE_" + e] = t;
        }
      });
    }
    n.event = function(t) {
      Pt && (t = Pt(t)), t.persist = function() {};
      var e = !1, r = !1, n = t.stopPropagation;
      t.stopPropagation = function() {
        n.call(t), e = !0;
      };
      var i = t.preventDefault;
      return t.preventDefault = function() {
        i.call(t), r = !0;
      }, t.isPropagationStopped = function() {
        return e;
      }, t.isDefaultPrevented = function() {
        return r;
      }, t.nativeEvent = t;
    };
    var Ot = {
      configurable: !0,
      get: function() {
        return this.class;
      }
    }, Nt = n.vnode;
    n.vnode = function(t) {
      t.$$typeof = Rt;
      var e = t.type, r = t.props;
      if (e) {
        if (r.class != r.className && (Ot.enumerable = "className" in r, null != r.className && (r.class = r.className), Object.defineProperty(r, "className", Ot)), 
        "function" != typeof e) {
          var n, i, o;
          for (o in r.defaultValue && void 0 !== r.value && (r.value || 0 === r.value || (r.value = r.defaultValue), delete r.defaultValue), 
          Array.isArray(r.value) && r.multiple && "select" === e && (A(r.children).forEach((function(t) {
            -1 != r.value.indexOf(t.props.value) && (t.props.selected = !0);
          })), delete r.value), r) if (n = Ct.test(o)) break;
          if (n) for (o in i = t.props = {}, r) i[Ct.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = r[o];
        }
        !function(e) {
          var r = t.type, n = t.props;
          if (n && "string" == typeof r) {
            var i = {};
            for (var o in n) /^on(Ani|Tra|Tou)/.test(o) && (n[o.toLowerCase()] = n[o], delete n[o]), i[o.toLowerCase()] = o;
            if (i.ondoubleclick && (n.ondblclick = n[i.ondoubleclick], delete n[i.ondoubleclick]), i.onbeforeinput && (n.onbeforeinput = n[i.onbeforeinput], 
            delete n[i.onbeforeinput]), i.onchange && ("textarea" === r || "input" === r.toLowerCase() && !/^fil|che|ra/i.test(n.type))) {
              var a = i.oninput || "oninput";
              n[a] || (n[a] = n[i.onchange], delete n[i.onchange]);
            }
          }
        }(), "function" == typeof e && !e.m && e.prototype && (It(e.prototype, "componentWillMount"), It(e.prototype, "componentWillReceiveProps"), 
        It(e.prototype, "componentWillUpdate"), e.m = !0);
      }
      Nt && Nt(t);
    };
    var Ut = "16.8.0";
    function jt(t) {
      return m.bind(null, t);
    }
    function qt(t) {
      return !!t && t.$$typeof === Rt;
    }
    function Kt(t) {
      return qt(t) ? U.apply(null, arguments) : t;
    }
    function Ht(t) {
      return !!t.__k && (O(null, t), !0);
    }
    function Ft(t) {
      return t && (t.base || 1 === t.nodeType && t) || null;
    }
    var zt = function(t, e) {
      return t(e);
    };
    const Dt = {
      useState: G,
      useReducer: Y,
      useEffect: J,
      useLayoutEffect: Q,
      useRef: X,
      useImperativeHandle: tt,
      useMemo: et,
      useCallback: rt,
      useContext: nt,
      useDebugValue: it,
      version: "16.8.0",
      Children: yt,
      render: Bt,
      hydrate: Bt,
      unmountComponentAtNode: Ht,
      createPortal: Tt,
      createElement: m,
      createContext: j,
      createFactory: jt,
      cloneElement: Kt,
      createRef: g,
      Fragment: y,
      isValidElement: qt,
      findDOMNode: Ft,
      Component: w,
      PureComponent: dt,
      memo: pt,
      forwardRef: vt,
      unstable_batchedUpdates: zt,
      Suspense: Mt,
      SuspenseList: xt,
      lazy: kt
    };
  },
  92592: (t, e, r) => {
    var n = r(47138);
    var i = r(95115);
    var o = r(6907);
    var a = r(93776);
    function s(t, e, r, o, a) {
      var s = [].slice.call(arguments, 1);
      var u = s.length;
      var h = 'function' == typeof s[u - 1];
      if (!h && !n()) throw new Error('Callback required as last argument');
      if (!h) {
        if (u < 1) throw new Error('Too few arguments provided');
        return 1 === u ? (r = e, e = o = void 0) : 2 !== u || e.getContext || (o = r, r = e, e = void 0), new Promise((function(n, a) {
          try {
            var s = i.create(r, o);
            n(t(s, e, o));
          } catch (u) {
            a(u);
          }
        }));
      }
      if (u < 2) throw new Error('Too few arguments provided');
      2 === u ? (a = r, r = e, e = o = void 0) : 3 === u && (e.getContext && void 0 === a ? (a = o, o = void 0) : (a = o, o = r, 
      r = e, e = void 0));
      try {
        var l = i.create(r, o);
        a(null, t(l, e, o));
      } catch (c) {
        a(c);
      }
    }
    e.create = i.create, e.toCanvas = s.bind(null, o.render), e.toDataURL = s.bind(null, o.renderToDataURL), e.toString = s.bind(null, (function(t, e, r) {
      return a.render(t, r);
    }));
  },
  47138: t => {
    t.exports = function() {
      return 'function' == typeof Promise && Promise.prototype && Promise.prototype.then;
    };
  },
  21845: (t, e, r) => {
    var n = r(10242).getSymbolSize;
    e.getRowColCoords = function(t) {
      if (1 === t) return [];
      var e = Math.floor(t / 7) + 2;
      var r = n(t);
      var i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2));
      var o = [ r - 7 ];
      for (var a = 1; a < e - 1; a++) o[a] = o[a - 1] - i;
      return o.push(6), o.reverse();
    }, e.getPositions = function(t) {
      var r = [];
      var n = e.getRowColCoords(t);
      var i = n.length;
      for (var o = 0; o < i; o++) for (var a = 0; a < i; a++) 0 === o && 0 === a || 0 === o && a === i - 1 || o === i - 1 && 0 === a || r.push([ n[o], n[a] ]);
      return r;
    };
  },
  8260: (t, e, r) => {
    var n = r(76910);
    var i = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '$', '%', '*', '+', '-', '.', '/', ':' ];
    function o(t) {
      this.mode = n.ALPHANUMERIC, this.data = t;
    }
    o.getBitsLength = function(t) {
      return 11 * Math.floor(t / 2) + t % 2 * 6;
    }, o.prototype.getLength = function() {
      return this.data.length;
    }, o.prototype.getBitsLength = function() {
      return o.getBitsLength(this.data.length);
    }, o.prototype.write = function(t) {
      var e;
      for (e = 0; e + 2 <= this.data.length; e += 2) {
        var r = 45 * i.indexOf(this.data[e]);
        r += i.indexOf(this.data[e + 1]), t.put(r, 11);
      }
      this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6);
    }, t.exports = o;
  },
  97245: t => {
    function e() {
      this.buffer = [], this.length = 0;
    }
    e.prototype = {
      get: function(t) {
        var e = Math.floor(t / 8);
        return 1 == (this.buffer[e] >>> 7 - t % 8 & 1);
      },
      put: function(t, e) {
        for (var r = 0; r < e; r++) this.putBit(1 == (t >>> e - r - 1 & 1));
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
      }
    }, t.exports = e;
  },
  73280: (t, e, r) => {
    var n = r(99131);
    function i(t) {
      if (!t || t < 1) throw new Error('BitMatrix size must be defined and greater than 0');
      this.size = t, this.data = n.alloc(t * t), this.reservedBit = n.alloc(t * t);
    }
    i.prototype.set = function(t, e, r, n) {
      var i = t * this.size + e;
      this.data[i] = r, n && (this.reservedBit[i] = !0);
    }, i.prototype.get = function(t, e) {
      return this.data[t * this.size + e];
    }, i.prototype.xor = function(t, e, r) {
      this.data[t * this.size + e] ^= r;
    }, i.prototype.isReserved = function(t, e) {
      return this.reservedBit[t * this.size + e];
    }, t.exports = i;
  },
  43424: (t, e, r) => {
    var n = r(99131);
    var i = r(76910);
    function o(t) {
      this.mode = i.BYTE, this.data = n.from(t);
    }
    o.getBitsLength = function(t) {
      return 8 * t;
    }, o.prototype.getLength = function() {
      return this.data.length;
    }, o.prototype.getBitsLength = function() {
      return o.getBitsLength(this.data.length);
    }, o.prototype.write = function(t) {
      for (var e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8);
    }, t.exports = o;
  },
  35393: (t, e, r) => {
    var n = r(64908);
    var i = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81 ];
    var o = [ 7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430 ];
    e.getBlocksCount = function(t, e) {
      switch (e) {
       case n.L:
        return i[4 * (t - 1) + 0];

       case n.M:
        return i[4 * (t - 1) + 1];

       case n.Q:
        return i[4 * (t - 1) + 2];

       case n.H:
        return i[4 * (t - 1) + 3];

       default:
        return;
      }
    }, e.getTotalCodewordsCount = function(t, e) {
      switch (e) {
       case n.L:
        return o[4 * (t - 1) + 0];

       case n.M:
        return o[4 * (t - 1) + 1];

       case n.Q:
        return o[4 * (t - 1) + 2];

       case n.H:
        return o[4 * (t - 1) + 3];

       default:
        return;
      }
    };
  },
  64908: (t, e) => {
    e.L = {
      bit: 1
    }, e.M = {
      bit: 0
    }, e.Q = {
      bit: 3
    }, e.H = {
      bit: 2
    }, e.isValid = function(t) {
      return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
    }, e.from = function(t, r) {
      if (e.isValid(t)) return t;
      try {
        return function(t) {
          if ('string' != typeof t) throw new Error('Param is not a string');
          switch (t.toLowerCase()) {
           case 'l':
           case 'low':
            return e.L;

           case 'm':
           case 'medium':
            return e.M;

           case 'q':
           case 'quartile':
            return e.Q;

           case 'h':
           case 'high':
            return e.H;

           default:
            throw new Error('Unknown EC Level: ' + t);
          }
        }(t);
      } catch (n) {
        return r;
      }
    };
  },
  76526: (t, e, r) => {
    var n = r(10242).getSymbolSize;
    e.getPositions = function(t) {
      var e = n(t);
      return [ [ 0, 0 ], [ e - 7, 0 ], [ 0, e - 7 ] ];
    };
  },
  61642: (t, e, r) => {
    var n = r(10242);
    var i = n.getBCHDigit(1335);
    e.getEncodedBits = function(t, e) {
      var r = t.bit << 3 | e;
      var o = r << 10;
      for (;n.getBCHDigit(o) - i >= 0; ) o ^= 1335 << n.getBCHDigit(o) - i;
      return 21522 ^ (r << 10 | o);
    };
  },
  69729: (t, e, r) => {
    var n = r(99131);
    var i = n.alloc(512);
    var o = n.alloc(256);
    !function() {
      var t = 1;
      for (var e = 0; e < 255; e++) i[e] = t, o[t] = e, 256 & (t <<= 1) && (t ^= 285);
      for (e = 255; e < 512; e++) i[e] = i[e - 255];
    }(), e.log = function(t) {
      if (t < 1) throw new Error('log(' + t + ')');
      return o[t];
    }, e.exp = function(t) {
      return i[t];
    }, e.mul = function(t, e) {
      return 0 === t || 0 === e ? 0 : i[o[t] + o[e]];
    };
  },
  35442: (t, e, r) => {
    var n = r(76910);
    var i = r(10242);
    function o(t) {
      this.mode = n.KANJI, this.data = t;
    }
    o.getBitsLength = function(t) {
      return 13 * t;
    }, o.prototype.getLength = function() {
      return this.data.length;
    }, o.prototype.getBitsLength = function() {
      return o.getBitsLength(this.data.length);
    }, o.prototype.write = function(t) {
      var e;
      for (e = 0; e < this.data.length; e++) {
        var r = i.toSJIS(this.data[e]);
        if (r >= 33088 && r <= 40956) r -= 33088; else {
          if (!(r >= 57408 && r <= 60351)) throw new Error('Invalid SJIS character: ' + this.data[e] + "\nMake sure your charset is UTF-8");
          r -= 49472;
        }
        r = 192 * (r >>> 8 & 255) + (255 & r), t.put(r, 13);
      }
    }, t.exports = o;
  },
  27126: (t, e) => {
    e.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var r = 3, n = 3, i = 40, o = 10;
    function a(t, r, n) {
      switch (t) {
       case e.Patterns.PATTERN000:
        return (r + n) % 2 == 0;

       case e.Patterns.PATTERN001:
        return r % 2 == 0;

       case e.Patterns.PATTERN010:
        return n % 3 == 0;

       case e.Patterns.PATTERN011:
        return (r + n) % 3 == 0;

       case e.Patterns.PATTERN100:
        return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;

       case e.Patterns.PATTERN101:
        return r * n % 2 + r * n % 3 == 0;

       case e.Patterns.PATTERN110:
        return (r * n % 2 + r * n % 3) % 2 == 0;

       case e.Patterns.PATTERN111:
        return (r * n % 3 + (r + n) % 2) % 2 == 0;

       default:
        throw new Error('bad maskPattern:' + t);
      }
    }
    e.isValid = function(t) {
      return null != t && '' !== t && !isNaN(t) && t >= 0 && t <= 7;
    }, e.from = function(t) {
      return e.isValid(t) ? parseInt(t, 10) : void 0;
    }, e.getPenaltyN1 = function(t) {
      var e = t.size;
      var n = 0;
      var i = 0;
      var o = 0;
      var a = null;
      var s = null;
      for (var u = 0; u < e; u++) {
        i = o = 0, a = s = null;
        for (var h = 0; h < e; h++) {
          var l = t.get(u, h);
          l === a ? i++ : (i >= 5 && (n += r + (i - 5)), a = l, i = 1), (l = t.get(h, u)) === s ? o++ : (o >= 5 && (n += r + (o - 5)), 
          s = l, o = 1);
        }
        i >= 5 && (n += r + (i - 5)), o >= 5 && (n += r + (o - 5));
      }
      return n;
    }, e.getPenaltyN2 = function(t) {
      var e = t.size;
      var r = 0;
      for (var i = 0; i < e - 1; i++) for (var o = 0; o < e - 1; o++) {
        var a = t.get(i, o) + t.get(i, o + 1) + t.get(i + 1, o) + t.get(i + 1, o + 1);
        4 !== a && 0 !== a || r++;
      }
      return r * n;
    }, e.getPenaltyN3 = function(t) {
      var e = t.size;
      var r = 0;
      var n = 0;
      var o = 0;
      for (var a = 0; a < e; a++) {
        n = o = 0;
        for (var s = 0; s < e; s++) n = n << 1 & 2047 | t.get(a, s), s >= 10 && (1488 === n || 93 === n) && r++, o = o << 1 & 2047 | t.get(s, a), 
        s >= 10 && (1488 === o || 93 === o) && r++;
      }
      return r * i;
    }, e.getPenaltyN4 = function(t) {
      var e = 0;
      var r = t.data.length;
      for (var n = 0; n < r; n++) e += t.data[n];
      return Math.abs(Math.ceil(100 * e / r / 5) - 10) * o;
    }, e.applyMask = function(t, e) {
      var r = e.size;
      for (var n = 0; n < r; n++) for (var i = 0; i < r; i++) e.isReserved(i, n) || e.xor(i, n, a(t, i, n));
    }, e.getBestMask = function(t, r) {
      var n = Object.keys(e.Patterns).length;
      var i = 0;
      var o = Infinity;
      for (var a = 0; a < n; a++) {
        r(a), e.applyMask(a, t);
        var s = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
        e.applyMask(a, t), s < o && (o = s, i = a);
      }
      return i;
    };
  },
  76910: (t, e, r) => {
    var n = r(43114);
    var i = r(7007);
    e.NUMERIC = {
      id: 'Numeric',
      bit: 1,
      ccBits: [ 10, 12, 14 ]
    }, e.ALPHANUMERIC = {
      id: 'Alphanumeric',
      bit: 2,
      ccBits: [ 9, 11, 13 ]
    }, e.BYTE = {
      id: 'Byte',
      bit: 4,
      ccBits: [ 8, 16, 16 ]
    }, e.KANJI = {
      id: 'Kanji',
      bit: 8,
      ccBits: [ 8, 10, 12 ]
    }, e.MIXED = {
      bit: -1
    }, e.getCharCountIndicator = function(t, e) {
      if (!t.ccBits) throw new Error('Invalid mode: ' + t);
      if (!n.isValid(e)) throw new Error('Invalid version: ' + e);
      return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2];
    }, e.getBestModeForData = function(t) {
      return i.testNumeric(t) ? e.NUMERIC : i.testAlphanumeric(t) ? e.ALPHANUMERIC : i.testKanji(t) ? e.KANJI : e.BYTE;
    }, e.toString = function(t) {
      if (t && t.id) return t.id;
      throw new Error('Invalid mode');
    }, e.isValid = function(t) {
      return t && t.bit && t.ccBits;
    }, e.from = function(t, r) {
      if (e.isValid(t)) return t;
      try {
        return function(t) {
          if ('string' != typeof t) throw new Error('Param is not a string');
          switch (t.toLowerCase()) {
           case 'numeric':
            return e.NUMERIC;

           case 'alphanumeric':
            return e.ALPHANUMERIC;

           case 'kanji':
            return e.KANJI;

           case 'byte':
            return e.BYTE;

           default:
            throw new Error('Unknown mode: ' + t);
          }
        }(t);
      } catch (n) {
        return r;
      }
    };
  },
  41085: (t, e, r) => {
    var n = r(76910);
    function i(t) {
      this.mode = n.NUMERIC, this.data = t.toString();
    }
    i.getBitsLength = function(t) {
      return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
    }, i.prototype.getLength = function() {
      return this.data.length;
    }, i.prototype.getBitsLength = function() {
      return i.getBitsLength(this.data.length);
    }, i.prototype.write = function(t) {
      var e, r, n;
      for (e = 0; e + 3 <= this.data.length; e += 3) r = this.data.substr(e, 3), n = parseInt(r, 10), t.put(n, 10);
      var i = this.data.length - e;
      i > 0 && (r = this.data.substr(e), n = parseInt(r, 10), t.put(n, 3 * i + 1));
    }, t.exports = i;
  },
  26143: (t, e, r) => {
    var n = r(99131);
    var i = r(69729);
    e.mul = function(t, e) {
      var r = n.alloc(t.length + e.length - 1);
      for (var o = 0; o < t.length; o++) for (var a = 0; a < e.length; a++) r[o + a] ^= i.mul(t[o], e[a]);
      return r;
    }, e.mod = function(t, e) {
      var r = n.from(t);
      for (;r.length - e.length >= 0; ) {
        var o = r[0];
        for (var a = 0; a < e.length; a++) r[a] ^= i.mul(e[a], o);
        var s = 0;
        for (;s < r.length && 0 === r[s]; ) s++;
        r = r.slice(s);
      }
      return r;
    }, e.generateECPolynomial = function(t) {
      var r = n.from([ 1 ]);
      for (var o = 0; o < t; o++) r = e.mul(r, [ 1, i.exp(o) ]);
      return r;
    };
  },
  95115: (t, e, r) => {
    var n = r(99131);
    var i = r(10242);
    var o = r(64908);
    var a = r(97245);
    var s = r(73280);
    var u = r(21845);
    var h = r(76526);
    var l = r(27126);
    var c = r(35393);
    var f = r(52882);
    var d = r(23103);
    var p = r(61642);
    var m = r(76910);
    var v = r(16130);
    var g = r(5826);
    function y(t, e, r) {
      var n = t.size;
      var i = p.getEncodedBits(e, r);
      var o, a;
      for (o = 0; o < 15; o++) a = 1 == (i >> o & 1), o < 6 ? t.set(o, 8, a, !0) : o < 8 ? t.set(o + 1, 8, a, !0) : t.set(n - 15 + o, 8, a, !0), 
      o < 8 ? t.set(8, n - o - 1, a, !0) : o < 9 ? t.set(8, 15 - o - 1 + 1, a, !0) : t.set(8, 15 - o - 1, a, !0);
      t.set(n - 8, 8, 1, !0);
    }
    function w(t, e, r) {
      var o = new a;
      r.forEach((function(e) {
        o.put(e.mode.bit, 4), o.put(e.getLength(), m.getCharCountIndicator(e.mode, t)), e.write(o);
      }));
      var s = 8 * (i.getSymbolTotalCodewords(t) - c.getTotalCodewordsCount(t, e));
      for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 != 0; ) o.putBit(0);
      var u = (s - o.getLengthInBits()) / 8;
      for (var h = 0; h < u; h++) o.put(h % 2 ? 17 : 236, 8);
      return function(t, e, r) {
        var o = i.getSymbolTotalCodewords(e);
        var a = c.getTotalCodewordsCount(e, r);
        var s = o - a;
        var u = c.getBlocksCount(e, r);
        var h = u - o % u;
        var l = Math.floor(o / u);
        var d = Math.floor(s / u);
        var p = d + 1;
        var m = l - d;
        var v = new f(m);
        var g = 0;
        var y = new Array(u);
        var w = new Array(u);
        var _ = 0;
        var M = n.from(t.buffer);
        for (var b = 0; b < u; b++) {
          var k = b < h ? d : p;
          y[b] = M.slice(g, g + k), w[b] = v.encode(y[b]), g += k, _ = Math.max(_, k);
        }
        var x = n.alloc(o);
        var A = 0;
        var E, S;
        for (E = 0; E < _; E++) for (S = 0; S < u; S++) E < y[S].length && (x[A++] = y[S][E]);
        for (E = 0; E < m; E++) for (S = 0; S < u; S++) x[A++] = w[S][E];
        return x;
      }(o, t, e);
    }
    function _(t, e, r, n) {
      var o;
      if (g(t)) o = v.fromArray(t); else {
        if ('string' != typeof t) throw new Error('Invalid data');
        var a = e;
        if (!a) {
          var c = v.rawSplit(t);
          a = d.getBestVersionForData(c, r);
        }
        o = v.fromString(t, a || 40);
      }
      var f = d.getBestVersionForData(o, r);
      if (!f) throw new Error('The amount of data is too big to be stored in a QR Code');
      if (e) {
        if (e < f) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + f + '.\n');
      } else e = f;
      var p = w(e, r, o);
      var m = i.getSymbolSize(e);
      var _ = new s(m);
      return function(t, e) {
        var r = t.size;
        var n = h.getPositions(e);
        for (var i = 0; i < n.length; i++) {
          var o = n[i][0];
          var a = n[i][1];
          for (var s = -1; s <= 7; s++) if (!(o + s <= -1 || r <= o + s)) for (var u = -1; u <= 7; u++) a + u <= -1 || r <= a + u || (s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? t.set(o + s, a + u, !0, !0) : t.set(o + s, a + u, !1, !0));
        }
      }(_, e), function(t) {
        var e = t.size;
        for (var r = 8; r < e - 8; r++) {
          var n = r % 2 == 0;
          t.set(r, 6, n, !0), t.set(6, r, n, !0);
        }
      }(_), function(t, e) {
        var r = u.getPositions(e);
        for (var n = 0; n < r.length; n++) {
          var i = r[n][0];
          var o = r[n][1];
          for (var a = -2; a <= 2; a++) for (var s = -2; s <= 2; s++) -2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? t.set(i + a, o + s, !0, !0) : t.set(i + a, o + s, !1, !0);
        }
      }(_, e), y(_, r, 0), e >= 7 && function(t, e) {
        var r = t.size;
        var n = d.getEncodedBits(e);
        var i, o, a;
        for (var s = 0; s < 18; s++) i = Math.floor(s / 3), o = s % 3 + r - 8 - 3, a = 1 == (n >> s & 1), t.set(i, o, a, !0), t.set(o, i, a, !0);
      }(_, e), function(t, e) {
        var r = t.size;
        var n = -1;
        var i = r - 1;
        var o = 7;
        var a = 0;
        for (var s = r - 1; s > 0; s -= 2) for (6 === s && s--; ;) {
          for (var u = 0; u < 2; u++) if (!t.isReserved(i, s - u)) {
            var h = !1;
            a < e.length && (h = 1 == (e[a] >>> o & 1)), t.set(i, s - u, h), -1 == --o && (a++, o = 7);
          }
          if ((i += n) < 0 || r <= i) {
            i -= n, n = -n;
            break;
          }
        }
      }(_, p), isNaN(n) && (n = l.getBestMask(_, y.bind(null, _, r))), l.applyMask(n, _), y(_, r, n), {
        modules: _,
        version: e,
        errorCorrectionLevel: r,
        maskPattern: n,
        segments: o
      };
    }
    e.create = function(t, e) {
      if (void 0 === t || '' === t) throw new Error('No input text');
      var r = o.M;
      var n;
      var a;
      return void 0 !== e && (r = o.from(e.errorCorrectionLevel, o.M), n = d.from(e.version), a = l.from(e.maskPattern), e.toSJISFunc && i.setToSJISFunction(e.toSJISFunc)), 
      _(t, n, r, a);
    };
  },
  52882: (t, e, r) => {
    var n = r(99131);
    var i = r(26143);
    var o = r(6772).lW;
    function a(t) {
      this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
    }
    a.prototype.initialize = function(t) {
      this.degree = t, this.genPoly = i.generateECPolynomial(this.degree);
    }, a.prototype.encode = function(t) {
      if (!this.genPoly) throw new Error('Encoder not initialized');
      var e = n.alloc(this.degree);
      var r = o.concat([ t, e ], t.length + this.degree);
      var a = i.mod(r, this.genPoly);
      var s = this.degree - a.length;
      if (s > 0) {
        var u = n.alloc(this.degree);
        return a.copy(u, s), u;
      }
      return a;
    }, t.exports = a;
  },
  7007: (t, e) => {
    var r = '[0-9]+';
    var n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    var i = '(?:(?![A-Z0-9 $%*+\\-./:]|' + (n = n.replace(/u/g, '\\u')) + ')(?:.|[\r\n]))+';
    e.KANJI = new RegExp(n, 'g'), e.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g'), e.BYTE = new RegExp(i, 'g'), e.NUMERIC = new RegExp(r, 'g'), 
    e.ALPHANUMERIC = new RegExp('[A-Z $%*+\\-./:]+', 'g');
    var o = new RegExp('^' + n + '$');
    var a = new RegExp("^[0-9]+$");
    var s = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
    e.testKanji = function(t) {
      return o.test(t);
    }, e.testNumeric = function(t) {
      return a.test(t);
    }, e.testAlphanumeric = function(t) {
      return s.test(t);
    };
  },
  16130: (t, e, r) => {
    var n = r(76910);
    var i = r(41085);
    var o = r(8260);
    var a = r(43424);
    var s = r(35442);
    var u = r(7007);
    var h = r(10242);
    var l = r(65987);
    function c(t) {
      return unescape(encodeURIComponent(t)).length;
    }
    function f(t, e, r) {
      var n = [];
      var i;
      for (;null !== (i = t.exec(r)); ) n.push({
        data: i[0],
        index: i.index,
        mode: e,
        length: i[0].length
      });
      return n;
    }
    function d(t) {
      var e = f(u.NUMERIC, n.NUMERIC, t);
      var r = f(u.ALPHANUMERIC, n.ALPHANUMERIC, t);
      var i;
      var o;
      return h.isKanjiModeEnabled() ? (i = f(u.BYTE, n.BYTE, t), o = f(u.KANJI, n.KANJI, t)) : (i = f(u.BYTE_KANJI, n.BYTE, t), 
      o = []), e.concat(r, i, o).sort((function(t, e) {
        return t.index - e.index;
      })).map((function(t) {
        return {
          data: t.data,
          mode: t.mode,
          length: t.length
        };
      }));
    }
    function p(t, e) {
      switch (e) {
       case n.NUMERIC:
        return i.getBitsLength(t);

       case n.ALPHANUMERIC:
        return o.getBitsLength(t);

       case n.KANJI:
        return s.getBitsLength(t);

       case n.BYTE:
        return a.getBitsLength(t);
      }
    }
    function m(t, e) {
      var r;
      var u = n.getBestModeForData(t);
      if ((r = n.from(e, u)) !== n.BYTE && r.bit < u.bit) throw new Error('"' + t + "\" cannot be encoded with mode " + n.toString(r) + '.\n Suggested mode is: ' + n.toString(u));
      switch (r !== n.KANJI || h.isKanjiModeEnabled() || (r = n.BYTE), r) {
       case n.NUMERIC:
        return new i(t);

       case n.ALPHANUMERIC:
        return new o(t);

       case n.KANJI:
        return new s(t);

       case n.BYTE:
        return new a(t);
      }
    }
    e.fromArray = function(t) {
      return t.reduce((function(t, e) {
        return 'string' == typeof e ? t.push(m(e, null)) : e.data && t.push(m(e.data, e.mode)), t;
      }), []);
    }, e.fromString = function(t, r) {
      var i = function(t) {
        var e = [];
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          switch (i.mode) {
           case n.NUMERIC:
            e.push([ i, {
              data: i.data,
              mode: n.ALPHANUMERIC,
              length: i.length
            }, {
              data: i.data,
              mode: n.BYTE,
              length: i.length
            } ]);
            break;

           case n.ALPHANUMERIC:
            e.push([ i, {
              data: i.data,
              mode: n.BYTE,
              length: i.length
            } ]);
            break;

           case n.KANJI:
            e.push([ i, {
              data: i.data,
              mode: n.BYTE,
              length: c(i.data)
            } ]);
            break;

           case n.BYTE:
            e.push([ {
              data: i.data,
              mode: n.BYTE,
              length: c(i.data)
            } ]);
          }
        }
        return e;
      }(d(t, h.isKanjiModeEnabled()));
      var o = function(t, e) {
        var r = {};
        var i = {
          start: {}
        };
        var o = [ 'start' ];
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          var u = [];
          for (var h = 0; h < s.length; h++) {
            var l = s[h];
            var c = '' + a + h;
            u.push(c), r[c] = {
              node: l,
              lastCount: 0
            }, i[c] = {};
            for (var f = 0; f < o.length; f++) {
              var d = o[f];
              r[d] && r[d].node.mode === l.mode ? (i[d][c] = p(r[d].lastCount + l.length, l.mode) - p(r[d].lastCount, l.mode), r[d].lastCount += l.length) : (r[d] && (r[d].lastCount = l.length), 
              i[d][c] = p(l.length, l.mode) + 4 + n.getCharCountIndicator(l.mode, e));
            }
          }
          o = u;
        }
        for (f = 0; f < o.length; f++) i[o[f]].end = 0;
        return {
          map: i,
          table: r
        };
      }(i, r);
      var a = l.find_path(o.map, 'start', 'end');
      var s = [];
      for (var u = 1; u < a.length - 1; u++) s.push(o.table[a[u]].node);
      return e.fromArray(function(t) {
        return t.reduce((function(t, e) {
          var r = t.length - 1 >= 0 ? t[t.length - 1] : null;
          return r && r.mode === e.mode ? (t[t.length - 1].data += e.data, t) : (t.push(e), t);
        }), []);
      }(s));
    }, e.rawSplit = function(t) {
      return e.fromArray(d(t, h.isKanjiModeEnabled()));
    };
  },
  10242: (t, e) => {
    var r;
    var n = [ 0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706 ];
    e.getSymbolSize = function(t) {
      if (!t) throw new Error('"version" cannot be null or undefined');
      if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
      return 4 * t + 17;
    }, e.getSymbolTotalCodewords = function(t) {
      return n[t];
    }, e.getBCHDigit = function(t) {
      var e = 0;
      for (;0 !== t; ) e++, t >>>= 1;
      return e;
    }, e.setToSJISFunction = function(t) {
      if ('function' != typeof t) throw new Error('"toSJISFunc" is not a valid function.');
      r = t;
    }, e.isKanjiModeEnabled = function() {
      return void 0 !== r;
    }, e.toSJIS = function(t) {
      return r(t);
    };
  },
  43114: (t, e) => {
    e.isValid = function(t) {
      return !isNaN(t) && t >= 1 && t <= 40;
    };
  },
  23103: (t, e, r) => {
    var n = r(10242);
    var i = r(35393);
    var o = r(64908);
    var a = r(76910);
    var s = r(43114);
    var u = r(5826);
    var h = n.getBCHDigit(7973);
    function l(t, e) {
      return a.getCharCountIndicator(t, e) + 4;
    }
    function c(t, e) {
      var r = 0;
      return t.forEach((function(t) {
        var n = l(t.mode, e);
        r += n + t.getBitsLength();
      })), r;
    }
    e.from = function(t, e) {
      return s.isValid(t) ? parseInt(t, 10) : e;
    }, e.getCapacity = function(t, e, r) {
      if (!s.isValid(t)) throw new Error('Invalid QR Code version');
      void 0 === r && (r = a.BYTE);
      var o = 8 * (n.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e));
      if (r === a.MIXED) return o;
      var u = o - l(r, t);
      switch (r) {
       case a.NUMERIC:
        return Math.floor(u / 10 * 3);

       case a.ALPHANUMERIC:
        return Math.floor(u / 11 * 2);

       case a.KANJI:
        return Math.floor(u / 13);

       case a.BYTE:
       default:
        return Math.floor(u / 8);
      }
    }, e.getBestVersionForData = function(t, r) {
      var n;
      var i = o.from(r, o.M);
      if (u(t)) {
        if (t.length > 1) return function(t, r) {
          for (var n = 1; n <= 40; n++) if (c(t, n) <= e.getCapacity(n, r, a.MIXED)) return n;
        }(t, i);
        if (0 === t.length) return 1;
        n = t[0];
      } else n = t;
      return function(t, r, n) {
        for (var i = 1; i <= 40; i++) if (r <= e.getCapacity(i, n, t)) return i;
      }(n.mode, n.getLength(), i);
    }, e.getEncodedBits = function(t) {
      if (!s.isValid(t) || t < 7) throw new Error('Invalid QR Code version');
      var e = t << 12;
      for (;n.getBCHDigit(e) - h >= 0; ) e ^= 7973 << n.getBCHDigit(e) - h;
      return t << 12 | e;
    };
  },
  6907: (t, e, r) => {
    var n = r(89653);
    e.render = function(t, e, r) {
      var i = r;
      var o = e;
      void 0 !== i || e && e.getContext || (i = e, e = void 0), e || (o = function() {
        try {
          return document.createElement('canvas');
        } catch (t) {
          throw new Error('You need to specify a canvas element');
        }
      }()), i = n.getOptions(i);
      var a = n.getImageWidth(t.modules.size, i);
      var s = o.getContext('2d');
      var u = s.createImageData(a, a);
      return n.qrToImageData(u.data, t, i), function(t, e, r) {
        t.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = r, e.width = r, e.style.height = r + 'px', e.style.width = r + 'px';
      }(s, o, a), s.putImageData(u, 0, 0), o;
    }, e.renderToDataURL = function(t, r, n) {
      var i = n;
      void 0 !== i || r && r.getContext || (i = r, r = void 0), i || (i = {});
      var o = e.render(t, r, i);
      var a = i.type || 'image/png';
      var s = i.rendererOpts || {};
      return o.toDataURL(a, s.quality);
    };
  },
  93776: (t, e, r) => {
    var n = r(89653);
    function i(t, e) {
      var r = t.a / 255;
      var n = e + '="' + t.hex + '"';
      return r < 1 ? n + ' ' + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
    }
    function o(t, e, r) {
      var n = t + e;
      return void 0 !== r && (n += ' ' + r), n;
    }
    e.render = function(t, e, r) {
      var a = n.getOptions(e);
      var s = t.modules.size;
      var u = t.modules.data;
      var h = s + 2 * a.margin;
      var l = a.color.light.a ? '<path ' + i(a.color.light, 'fill') + ' d="M0 0h' + h + 'v' + h + 'H0z"/>' : '';
      var c = '<path ' + i(a.color.dark, 'stroke') + ' d="' + function(t, e, r) {
        var n = '';
        var i = 0;
        var a = !1;
        var s = 0;
        for (var u = 0; u < t.length; u++) {
          var h = Math.floor(u % e);
          var l = Math.floor(u / e);
          h || a || (a = !0), t[u] ? (s++, u > 0 && h > 0 && t[u - 1] || (n += a ? o('M', h + r, .5 + l + r) : o('m', i, 0), i = 0, 
          a = !1), h + 1 < e && t[u + 1] || (n += o('h', s), s = 0)) : i++;
        }
        return n;
      }(u, s, a.margin) + '"/>';
      var f = "viewBox=\"0 0 " + h + ' ' + h + '"';
      var d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : '') + f + ' shape-rendering="crispEdges">' + l + c + '</svg>\n';
      return 'function' == typeof r && r(null, d), d;
    };
  },
  89653: (t, e) => {
    function r(t) {
      if ('number' == typeof t && (t = t.toString()), 'string' != typeof t) throw new Error('Color should be defined as hex string');
      var e = t.slice().replace('#', '').split('');
      if (e.length < 3 || 5 === e.length || e.length > 8) throw new Error('Invalid hex color: ' + t);
      3 !== e.length && 4 !== e.length || (e = Array.prototype.concat.apply([], e.map((function(t) {
        return [ t, t ];
      })))), 6 === e.length && e.push('F', 'F');
      var r = parseInt(e.join(''), 16);
      return {
        r: r >> 24 & 255,
        g: r >> 16 & 255,
        b: r >> 8 & 255,
        a: 255 & r,
        hex: '#' + e.slice(0, 6).join('')
      };
    }
    e.getOptions = function(t) {
      t || (t = {}), t.color || (t.color = {});
      var e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin;
      var n = t.width && t.width >= 21 ? t.width : void 0;
      var i = t.scale || 4;
      return {
        width: n,
        scale: n ? 4 : i,
        margin: e,
        color: {
          dark: r(t.color.dark || '#000000ff'),
          light: r(t.color.light || '#ffffffff')
        },
        type: t.type,
        rendererOpts: t.rendererOpts || {}
      };
    }, e.getScale = function(t, e) {
      return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale;
    }, e.getImageWidth = function(t, r) {
      var n = e.getScale(t, r);
      return Math.floor((t + 2 * r.margin) * n);
    }, e.qrToImageData = function(t, r, n) {
      var i = r.modules.size;
      var o = r.modules.data;
      var a = e.getScale(i, n);
      var s = Math.floor((i + 2 * n.margin) * a);
      var u = n.margin * a;
      var h = [ n.color.light, n.color.dark ];
      for (var l = 0; l < s; l++) for (var c = 0; c < s; c++) {
        var f = 4 * (l * s + c);
        var d = n.color.light;
        if (l >= u && c >= u && l < s - u && c < s - u) d = h[o[Math.floor((l - u) / a) * i + Math.floor((c - u) / a)] ? 1 : 0];
        t[f++] = d.r, t[f++] = d.g, t[f++] = d.b, t[f] = d.a;
      }
    };
  },
  99131: (t, e, r) => {
    "use strict";
    var n = r(5826);
    o.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function() {
            return 42;
          }
        }, 42 === t.foo();
      } catch (e) {
        return !1;
      }
    }();
    var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    function o(t, e, r) {
      return o.TYPED_ARRAY_SUPPORT || this instanceof o ? 'number' == typeof t ? u(this, t) : function(t, e, r, n) {
        if ('number' == typeof e) throw new TypeError('"value" argument must not be a number');
        if ('undefined' != typeof ArrayBuffer && e instanceof ArrayBuffer) return function(t, e, r, n) {
          if (r < 0 || e.byteLength < r) throw new RangeError('\'offset\' is out of bounds');
          if (e.byteLength < r + (n || 0)) throw new RangeError('\'length\' is out of bounds');
          var i;
          i = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n);
          o.TYPED_ARRAY_SUPPORT ? i.__proto__ = o.prototype : i = h(t, i);
          return i;
        }(t, e, r, n);
        if ('string' == typeof e) return function(t, e) {
          var r = 0 | c(e);
          var n = s(t, r);
          var i = n.write(e);
          i !== r && (n = n.slice(0, i));
          return n;
        }(t, e);
        return function(t, e) {
          if (o.isBuffer(e)) {
            var r = 0 | a(e.length);
            var n = s(t, r);
            return 0 === n.length || e.copy(n, 0, 0, r), n;
          }
          if (e) {
            if ('undefined' != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || 'length' in e) return 'number' != typeof e.length || function(t) {
              return t != t;
            }(e.length) ? s(t, 0) : h(t, e);
            if ('Buffer' === e.type && Array.isArray(e.data)) return h(t, e.data);
          }
          throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
        }(t, e);
      }(this, t, e, r) : new o(t, e, r);
    }
    function a(t) {
      if (t >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + ' bytes');
      return 0 | t;
    }
    function s(t, e) {
      var r;
      return o.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(e)).__proto__ = o.prototype : (null === (r = t) && (r = new o(e)), r.length = e), 
      r;
    }
    function u(t, e) {
      var r = s(t, e < 0 ? 0 : 0 | a(e));
      if (!o.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) r[n] = 0;
      return r;
    }
    function h(t, e) {
      var r = e.length < 0 ? 0 : 0 | a(e.length);
      var n = s(t, r);
      for (var i = 0; i < r; i += 1) n[i] = 255 & e[i];
      return n;
    }
    function l(t, e) {
      var r;
      e = e || Infinity;
      var n = t.length;
      var i = null;
      var o = [];
      for (var a = 0; a < n; ++a) {
        if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            if (a + 1 === n) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }
          r = 65536 + (i - 55296 << 10 | r - 56320);
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((e -= 1) < 0) break;
          o.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          o.push(r >> 6 | 192, 63 & r | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
        } else {
          if (!(r < 1114112)) throw new Error('Invalid code point');
          if ((e -= 4) < 0) break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
        }
      }
      return o;
    }
    function c(t) {
      return o.isBuffer(t) ? t.length : 'undefined' != typeof ArrayBuffer && 'function' == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer) ? t.byteLength : ('string' != typeof t && (t = '' + t), 
      0 === t.length ? 0 : l(t).length);
    }
    o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, 'undefined' != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
      value: null,
      configurable: !0,
      enumerable: !1,
      writable: !1
    })), o.prototype.write = function(t, e, r) {
      void 0 === e || void 0 === r && 'string' == typeof e ? (r = this.length, e = 0) : isFinite(e) && (e |= 0, isFinite(r) ? r |= 0 : r = void 0);
      var n = this.length - e;
      if ((void 0 === r || r > n) && (r = n), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError('Attempt to write outside buffer bounds');
      return function(t, e, r, n) {
        return function(t, e, r, n) {
          for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
          return i;
        }(l(e, t.length - r), t, r, n);
      }(this, t, e, r);
    }, o.prototype.slice = function(t, e) {
      var r = this.length;
      var n;
      if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), 
      e < t && (e = t), o.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = o.prototype; else {
        var i = e - t;
        n = new o(i, void 0);
        for (var a = 0; a < i; ++a) n[a] = this[a + t];
      }
      return n;
    }, o.prototype.copy = function(t, e, r, n) {
      if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), 
      n === r) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError('targetStart out of bounds');
      if (r < 0 || r >= this.length) throw new RangeError('sourceStart out of bounds');
      if (n < 0) throw new RangeError('sourceEnd out of bounds');
      n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
      var i = n - r;
      var a;
      if (this === t && r < e && e < n) for (a = i - 1; a >= 0; --a) t[a + e] = this[a + r]; else if (i < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (a = 0; a < i; ++a) t[a + e] = this[a + r]; else Uint8Array.prototype.set.call(t, this.subarray(r, r + i), e);
      return i;
    }, o.prototype.fill = function(t, e, r) {
      if ('string' == typeof t) {
        if ('string' == typeof e ? (e = 0, r = this.length) : 'string' == typeof r && (r = this.length), 1 === t.length) {
          var n = t.charCodeAt(0);
          n < 256 && (t = n);
        }
      } else 'number' == typeof t && (t &= 255);
      if (e < 0 || this.length < e || this.length < r) throw new RangeError('Out of range index');
      if (r <= e) return this;
      var i;
      if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), 'number' == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
        var a = o.isBuffer(t) ? t : new o(t);
        var s = a.length;
        for (i = 0; i < r - e; ++i) this[i + e] = a[i % s];
      }
      return this;
    }, o.concat = function(t, e) {
      if (!n(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return s(null, 0);
      var r;
      if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
      var i = u(null, e);
      var a = 0;
      for (r = 0; r < t.length; ++r) {
        var h = t[r];
        if (!o.isBuffer(h)) throw new TypeError('"list" argument must be an Array of Buffers');
        h.copy(i, a), a += h.length;
      }
      return i;
    }, o.byteLength = c, o.prototype._isBuffer = !0, o.isBuffer = function(t) {
      return !(null == t || !t._isBuffer);
    }, t.exports.alloc = function(t) {
      var e = new o(t);
      return e.fill(0), e;
    }, t.exports.from = function(t) {
      return new o(t);
    };
  },
  6772: (t, e, r) => {
    "use strict";
    var n = r(25108);
    var i = r(79742);
    var o = r(80645);
    var a = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
    e.lW = h, e.h2 = 50;
    var s = 2147483647;
    function u(t) {
      if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      var e = new Uint8Array(t);
      return Object.setPrototypeOf(e, h.prototype), e;
    }
    function h(t, e, r) {
      if ('number' == typeof t) {
        if ('string' == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
        return f(t);
      }
      return l(t, e, r);
    }
    function l(t, e, r) {
      if ('string' == typeof t) return function(t, e) {
        'string' == typeof e && '' !== e || (e = 'utf8');
        if (!h.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e);
        var r = 0 | v(t, e);
        var n = u(r);
        var i = n.write(t, e);
        i !== r && (n = n.slice(0, i));
        return n;
      }(t, e);
      if (ArrayBuffer.isView(t)) return function(t) {
        if (F(t, Uint8Array)) {
          var e = new Uint8Array(t);
          return p(e.buffer, e.byteOffset, e.byteLength);
        }
        return d(t);
      }(t);
      if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
      if (F(t, ArrayBuffer) || t && F(t.buffer, ArrayBuffer)) return p(t, e, r);
      if ('undefined' != typeof SharedArrayBuffer && (F(t, SharedArrayBuffer) || t && F(t.buffer, SharedArrayBuffer))) return p(t, e, r);
      if ('number' == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
      var n = t.valueOf && t.valueOf();
      if (null != n && n !== t) return h.from(n, e, r);
      var i = function(t) {
        if (h.isBuffer(t)) {
          var e = 0 | m(t.length);
          var r = u(e);
          return 0 === r.length || t.copy(r, 0, 0, e), r;
        }
        if (void 0 !== t.length) return 'number' != typeof t.length || z(t.length) ? u(0) : d(t);
        if ('Buffer' === t.type && Array.isArray(t.data)) return d(t.data);
      }(t);
      if (i) return i;
      if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof t[Symbol.toPrimitive]) return h.from(t[Symbol.toPrimitive]('string'), e, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
    }
    function c(t) {
      if ('number' != typeof t) throw new TypeError('"size" argument must be of type number');
      if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
    }
    function f(t) {
      return c(t), u(t < 0 ? 0 : 0 | m(t));
    }
    function d(t) {
      var e = t.length < 0 ? 0 : 0 | m(t.length);
      var r = u(e);
      for (var n = 0; n < e; n += 1) r[n] = 255 & t[n];
      return r;
    }
    function p(t, e, r) {
      if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
      if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var n;
      return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), 
      Object.setPrototypeOf(n, h.prototype), n;
    }
    function m(t) {
      if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + ' bytes');
      return 0 | t;
    }
    function v(t, e) {
      if (h.isBuffer(t)) return t.length;
      if (ArrayBuffer.isView(t) || F(t, ArrayBuffer)) return t.byteLength;
      if ('string' != typeof t) throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof t);
      var r = t.length;
      var n = arguments.length > 2 && !0 === arguments[2];
      if (!n && 0 === r) return 0;
      var i = !1;
      for (;;) switch (e) {
       case 'ascii':
       case 'latin1':
       case 'binary':
        return r;

       case 'utf8':
       case 'utf-8':
        return q(t).length;

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return 2 * r;

       case 'hex':
        return r >>> 1;

       case 'base64':
        return K(t).length;

       default:
        if (i) return n ? -1 : q(t).length;
        e = ('' + e).toLowerCase(), i = !0;
      }
    }
    function g(t, e, r) {
      var n = !1;
      if ((void 0 === e || e < 0) && (e = 0), e > this.length) return '';
      if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return '';
      if ((r >>>= 0) <= (e >>>= 0)) return '';
      for (t || (t = 'utf8'); ;) switch (t) {
       case 'hex':
        return B(this, e, r);

       case 'utf8':
       case 'utf-8':
        return S(this, e, r);

       case 'ascii':
        return C(this, e, r);

       case 'latin1':
       case 'binary':
        return R(this, e, r);

       case 'base64':
        return E(this, e, r);

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return L(this, e, r);

       default:
        if (n) throw new TypeError('Unknown encoding: ' + t);
        t = (t + '').toLowerCase(), n = !0;
      }
    }
    function y(t, e, r) {
      var n = t[e];
      t[e] = t[r], t[r] = n;
    }
    function w(t, e, r, n, i) {
      if (0 === t.length) return -1;
      if ('string' == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), z(r = +r) && (r = i ? 0 : t.length - 1), 
      r < 0 && (r = t.length + r), r >= t.length) {
        if (i) return -1;
        r = t.length - 1;
      } else if (r < 0) {
        if (!i) return -1;
        r = 0;
      }
      if ('string' == typeof e && (e = h.from(e, n)), h.isBuffer(e)) return 0 === e.length ? -1 : _(t, e, r, n, i);
      if ('number' == typeof e) return e &= 255, 'function' == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : _(t, [ e ], r, n, i);
      throw new TypeError('val must be string, number or Buffer');
    }
    function _(t, e, r, n, i) {
      var o = 1;
      var a = t.length;
      var s = e.length;
      if (void 0 !== n && ('ucs2' === (n = String(n).toLowerCase()) || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)) {
        if (t.length < 2 || e.length < 2) return -1;
        o = 2, a /= 2, s /= 2, r /= 2;
      }
      function u(t, e) {
        return 1 === o ? t[e] : t.readUInt16BE(e * o);
      }
      var h;
      if (i) {
        var l = -1;
        for (h = r; h < a; h++) if (u(t, h) === u(e, -1 === l ? 0 : h - l)) {
          if (-1 === l && (l = h), h - l + 1 === s) return l * o;
        } else -1 !== l && (h -= h - l), l = -1;
      } else for (r + s > a && (r = a - s), h = r; h >= 0; h--) {
        var c = !0;
        for (var f = 0; f < s; f++) if (u(t, h + f) !== u(e, f)) {
          c = !1;
          break;
        }
        if (c) return h;
      }
      return -1;
    }
    function M(t, e, r, n) {
      r = Number(r) || 0;
      var i = t.length - r;
      n ? (n = Number(n)) > i && (n = i) : n = i;
      var o = e.length;
      n > o / 2 && (n = o / 2);
      for (var a = 0; a < n; ++a) {
        var s = parseInt(e.substr(2 * a, 2), 16);
        if (z(s)) return a;
        t[r + a] = s;
      }
      return a;
    }
    function b(t, e, r, n) {
      return H(q(e, t.length - r), t, r, n);
    }
    function k(t, e, r, n) {
      return H(function(t) {
        var e = [];
        for (var r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
        return e;
      }(e), t, r, n);
    }
    function x(t, e, r, n) {
      return H(K(e), t, r, n);
    }
    function A(t, e, r, n) {
      return H(function(t, e) {
        var r, n, i;
        var o = [];
        for (var a = 0; a < t.length && !((e -= 2) < 0); ++a) n = (r = t.charCodeAt(a)) >> 8, i = r % 256, o.push(i), o.push(n);
        return o;
      }(e, t.length - r), t, r, n);
    }
    function E(t, e, r) {
      return 0 === e && r === t.length ? i.fromByteArray(t) : i.fromByteArray(t.slice(e, r));
    }
    function S(t, e, r) {
      r = Math.min(t.length, r);
      var n = [];
      var i = e;
      for (;i < r; ) {
        var o = t[i];
        var a = null;
        var s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        var u, h, l, c;
        if (i + s <= r) switch (s) {
         case 1:
          o < 128 && (a = o);
          break;

         case 2:
          128 == (192 & (u = t[i + 1])) && (c = (31 & o) << 6 | 63 & u) > 127 && (a = c);
          break;

         case 3:
          u = t[i + 1], h = t[i + 2], 128 == (192 & u) && 128 == (192 & h) && (c = (15 & o) << 12 | (63 & u) << 6 | 63 & h) > 2047 && (c < 55296 || c > 57343) && (a = c);
          break;

         case 4:
          u = t[i + 1], h = t[i + 2], l = t[i + 3], 128 == (192 & u) && 128 == (192 & h) && 128 == (192 & l) && (c = (15 & o) << 18 | (63 & u) << 12 | (63 & h) << 6 | 63 & l) > 65535 && c < 1114112 && (a = c);
        }
        null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), n.push(a), 
        i += s;
      }
      return function(t) {
        var e = t.length;
        if (e <= T) return String.fromCharCode.apply(String, t);
        var r = '';
        var n = 0;
        for (;n < e; ) r += String.fromCharCode.apply(String, t.slice(n, n += T));
        return r;
      }(n);
    }
    h.TYPED_ARRAY_SUPPORT = function() {
      try {
        var t = new Uint8Array(1);
        var e = {
          foo: function() {
            return 42;
          }
        };
        return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
      } catch (r) {
        return !1;
      }
    }(), h.TYPED_ARRAY_SUPPORT || void 0 === n || 'function' != typeof n.error || n.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
    Object.defineProperty(h.prototype, 'parent', {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this)) return this.buffer;
      }
    }), Object.defineProperty(h.prototype, 'offset', {
      enumerable: !0,
      get: function() {
        if (h.isBuffer(this)) return this.byteOffset;
      }
    }), h.poolSize = 8192, h.from = function(t, e, r) {
      return l(t, e, r);
    }, Object.setPrototypeOf(h.prototype, Uint8Array.prototype), Object.setPrototypeOf(h, Uint8Array), h.alloc = function(t, e, r) {
      return function(t, e, r) {
        return c(t), t <= 0 ? u(t) : void 0 !== e ? 'string' == typeof r ? u(t).fill(e, r) : u(t).fill(e) : u(t);
      }(t, e, r);
    }, h.allocUnsafe = function(t) {
      return f(t);
    }, h.allocUnsafeSlow = function(t) {
      return f(t);
    }, h.isBuffer = function(t) {
      return null != t && !0 === t._isBuffer && t !== h.prototype;
    }, h.compare = function(t, e) {
      if (F(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), F(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), 
      !h.isBuffer(t) || !h.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === e) return 0;
      var r = t.length;
      var n = e.length;
      for (var i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
        r = t[i], n = e[i];
        break;
      }
      return r < n ? -1 : n < r ? 1 : 0;
    }, h.isEncoding = function(t) {
      switch (String(t).toLowerCase()) {
       case 'hex':
       case 'utf8':
       case 'utf-8':
       case 'ascii':
       case 'latin1':
       case 'binary':
       case 'base64':
       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return !0;

       default:
        return !1;
      }
    }, h.concat = function(t, e) {
      if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return h.alloc(0);
      var r;
      if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
      var n = h.allocUnsafe(e);
      var i = 0;
      for (r = 0; r < t.length; ++r) {
        var o = t[r];
        if (F(o, Uint8Array)) i + o.length > n.length ? h.from(o).copy(n, i) : Uint8Array.prototype.set.call(n, o, i); else {
          if (!h.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
          o.copy(n, i);
        }
        i += o.length;
      }
      return n;
    }, h.byteLength = v, h.prototype._isBuffer = !0, h.prototype.swap16 = function() {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
      for (var e = 0; e < t; e += 2) y(this, e, e + 1);
      return this;
    }, h.prototype.swap32 = function() {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
      for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
      return this;
    }, h.prototype.swap64 = function() {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
      for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
      return this;
    }, h.prototype.toString = function() {
      var t = this.length;
      return 0 === t ? '' : 0 === arguments.length ? S(this, 0, t) : g.apply(this, arguments);
    }, h.prototype.toLocaleString = h.prototype.toString, h.prototype.equals = function(t) {
      if (!h.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
      return this === t || 0 === h.compare(this, t);
    }, h.prototype.inspect = function() {
      var t = '';
      var r = e.h2;
      return t = this.toString('hex', 0, r).replace(/(.{2})/g, '$1 ').trim(), this.length > r && (t += ' ... '), '<Buffer ' + t + '>';
    }, a && (h.prototype[a] = h.prototype.inspect), h.prototype.compare = function(t, e, r, n, i) {
      if (F(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof t);
      if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), 
      e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError('out of range index');
      if (n >= i && e >= r) return 0;
      if (n >= i) return -1;
      if (e >= r) return 1;
      if (this === t) return 0;
      var o = (i >>>= 0) - (n >>>= 0);
      var a = (r >>>= 0) - (e >>>= 0);
      var s = Math.min(o, a);
      var u = this.slice(n, i);
      var l = t.slice(e, r);
      for (var c = 0; c < s; ++c) if (u[c] !== l[c]) {
        o = u[c], a = l[c];
        break;
      }
      return o < a ? -1 : a < o ? 1 : 0;
    }, h.prototype.includes = function(t, e, r) {
      return -1 !== this.indexOf(t, e, r);
    }, h.prototype.indexOf = function(t, e, r) {
      return w(this, t, e, r, !0);
    }, h.prototype.lastIndexOf = function(t, e, r) {
      return w(this, t, e, r, !1);
    }, h.prototype.write = function(t, e, r, n) {
      if (void 0 === e) n = 'utf8', r = this.length, e = 0; else if (void 0 === r && 'string' == typeof e) n = e, r = this.length, 
      e = 0; else {
        if (!isFinite(e)) throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
        e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = 'utf8')) : (n = r, r = void 0);
      }
      var i = this.length - e;
      if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError('Attempt to write outside buffer bounds');
      n || (n = 'utf8');
      var o = !1;
      for (;;) switch (n) {
       case 'hex':
        return M(this, t, e, r);

       case 'utf8':
       case 'utf-8':
        return b(this, t, e, r);

       case 'ascii':
       case 'latin1':
       case 'binary':
        return k(this, t, e, r);

       case 'base64':
        return x(this, t, e, r);

       case 'ucs2':
       case 'ucs-2':
       case 'utf16le':
       case 'utf-16le':
        return A(this, t, e, r);

       default:
        if (o) throw new TypeError('Unknown encoding: ' + n);
        n = ('' + n).toLowerCase(), o = !0;
      }
    }, h.prototype.toJSON = function() {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var T = 4096;
    function C(t, e, r) {
      var n = '';
      r = Math.min(t.length, r);
      for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
      return n;
    }
    function R(t, e, r) {
      var n = '';
      r = Math.min(t.length, r);
      for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
      return n;
    }
    function B(t, e, r) {
      var n = t.length;
      (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
      var i = '';
      for (var o = e; o < r; ++o) i += D[t[o]];
      return i;
    }
    function L(t, e, r) {
      var n = t.slice(e, r);
      var i = '';
      for (var o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
      return i;
    }
    function P(t, e, r) {
      if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
      if (t + e > r) throw new RangeError('Trying to access beyond buffer length');
    }
    function I(t, e, r, n, i, o) {
      if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
      if (r + n > t.length) throw new RangeError('Index out of range');
    }
    function O(t, e, r, n, i, o) {
      if (r + n > t.length) throw new RangeError('Index out of range');
      if (r < 0) throw new RangeError('Index out of range');
    }
    function N(t, e, r, n, i) {
      return e = +e, r >>>= 0, i || O(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4;
    }
    function U(t, e, r, n, i) {
      return e = +e, r >>>= 0, i || O(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8;
    }
    h.prototype.slice = function(t, e) {
      var r = this.length;
      (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), 
      e < t && (e = t);
      var n = this.subarray(t, e);
      return Object.setPrototypeOf(n, h.prototype), n;
    }, h.prototype.readUintLE = h.prototype.readUIntLE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || P(t, e, this.length);
      var n = this[t];
      var i = 1;
      var o = 0;
      for (;++o < e && (i *= 256); ) n += this[t + o] * i;
      return n;
    }, h.prototype.readUintBE = h.prototype.readUIntBE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || P(t, e, this.length);
      var n = this[t + --e];
      var i = 1;
      for (;e > 0 && (i *= 256); ) n += this[t + --e] * i;
      return n;
    }, h.prototype.readUint8 = h.prototype.readUInt8 = function(t, e) {
      return t >>>= 0, e || P(t, 1, this.length), this[t];
    }, h.prototype.readUint16LE = h.prototype.readUInt16LE = function(t, e) {
      return t >>>= 0, e || P(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, h.prototype.readUint16BE = h.prototype.readUInt16BE = function(t, e) {
      return t >>>= 0, e || P(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, h.prototype.readUint32LE = h.prototype.readUInt32LE = function(t, e) {
      return t >>>= 0, e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, h.prototype.readUint32BE = h.prototype.readUInt32BE = function(t, e) {
      return t >>>= 0, e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, h.prototype.readIntLE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || P(t, e, this.length);
      var n = this[t];
      var i = 1;
      var o = 0;
      for (;++o < e && (i *= 256); ) n += this[t + o] * i;
      return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
    }, h.prototype.readIntBE = function(t, e, r) {
      t >>>= 0, e >>>= 0, r || P(t, e, this.length);
      var n = e;
      var i = 1;
      var o = this[t + --n];
      for (;n > 0 && (i *= 256); ) o += this[t + --n] * i;
      return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
    }, h.prototype.readInt8 = function(t, e) {
      return t >>>= 0, e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, h.prototype.readInt16LE = function(t, e) {
      t >>>= 0, e || P(t, 2, this.length);
      var r = this[t] | this[t + 1] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, h.prototype.readInt16BE = function(t, e) {
      t >>>= 0, e || P(t, 2, this.length);
      var r = this[t + 1] | this[t] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, h.prototype.readInt32LE = function(t, e) {
      return t >>>= 0, e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, h.prototype.readInt32BE = function(t, e) {
      return t >>>= 0, e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, h.prototype.readFloatLE = function(t, e) {
      return t >>>= 0, e || P(t, 4, this.length), o.read(this, t, !0, 23, 4);
    }, h.prototype.readFloatBE = function(t, e) {
      return t >>>= 0, e || P(t, 4, this.length), o.read(this, t, !1, 23, 4);
    }, h.prototype.readDoubleLE = function(t, e) {
      return t >>>= 0, e || P(t, 8, this.length), o.read(this, t, !0, 52, 8);
    }, h.prototype.readDoubleBE = function(t, e) {
      return t >>>= 0, e || P(t, 8, this.length), o.read(this, t, !1, 52, 8);
    }, h.prototype.writeUintLE = h.prototype.writeUIntLE = function(t, e, r, n) {
      (t = +t, e >>>= 0, r >>>= 0, n) || I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var i = 1;
      var o = 0;
      for (this[e] = 255 & t; ++o < r && (i *= 256); ) this[e + o] = t / i & 255;
      return e + r;
    }, h.prototype.writeUintBE = h.prototype.writeUIntBE = function(t, e, r, n) {
      (t = +t, e >>>= 0, r >>>= 0, n) || I(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var i = r - 1;
      var o = 1;
      for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = t / o & 255;
      return e + r;
    }, h.prototype.writeUint8 = h.prototype.writeUInt8 = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1;
    }, h.prototype.writeUint16LE = h.prototype.writeUInt16LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
    }, h.prototype.writeUint16BE = h.prototype.writeUInt16BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
    }, h.prototype.writeUint32LE = h.prototype.writeUInt32LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, 
      this[e] = 255 & t, e + 4;
    }, h.prototype.writeUint32BE = h.prototype.writeUInt32BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, 
      this[e + 3] = 255 & t, e + 4;
    }, h.prototype.writeIntLE = function(t, e, r, n) {
      if (t = +t, e >>>= 0, !n) {
        var i = Math.pow(2, 8 * r - 1);
        I(this, t, e, r, i - 1, -i);
      }
      var o = 0;
      var a = 1;
      var s = 0;
      for (this[e] = 255 & t; ++o < r && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
      return e + r;
    }, h.prototype.writeIntBE = function(t, e, r, n) {
      if (t = +t, e >>>= 0, !n) {
        var i = Math.pow(2, 8 * r - 1);
        I(this, t, e, r, i - 1, -i);
      }
      var o = r - 1;
      var a = 1;
      var s = 0;
      for (this[e + o] = 255 & t; --o >= 0 && (a *= 256); ) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / a >> 0) - s & 255;
      return e + r;
    }, h.prototype.writeInt8 = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, h.prototype.writeInt16LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2;
    }, h.prototype.writeInt16BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2;
    }, h.prototype.writeInt32LE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, 
      this[e + 3] = t >>> 24, e + 4;
    }, h.prototype.writeInt32BE = function(t, e, r) {
      return t = +t, e >>>= 0, r || I(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, 
      this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
    }, h.prototype.writeFloatLE = function(t, e, r) {
      return N(this, t, e, !0, r);
    }, h.prototype.writeFloatBE = function(t, e, r) {
      return N(this, t, e, !1, r);
    }, h.prototype.writeDoubleLE = function(t, e, r) {
      return U(this, t, e, !0, r);
    }, h.prototype.writeDoubleBE = function(t, e, r) {
      return U(this, t, e, !1, r);
    }, h.prototype.copy = function(t, e, r, n) {
      if (!h.isBuffer(t)) throw new TypeError('argument should be a Buffer');
      if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), 
      n === r) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError('targetStart out of bounds');
      if (r < 0 || r >= this.length) throw new RangeError('Index out of range');
      if (n < 0) throw new RangeError('sourceEnd out of bounds');
      n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
      var i = n - r;
      return this === t && 'function' == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), 
      i;
    }, h.prototype.fill = function(t, e, r, n) {
      if ('string' == typeof t) {
        if ('string' == typeof e ? (n = e, e = 0, r = this.length) : 'string' == typeof r && (n = r, r = this.length), void 0 !== n && 'string' != typeof n) throw new TypeError('encoding must be a string');
        if ('string' == typeof n && !h.isEncoding(n)) throw new TypeError('Unknown encoding: ' + n);
        if (1 === t.length) {
          var i = t.charCodeAt(0);
          ('utf8' === n && i < 128 || 'latin1' === n) && (t = i);
        }
      } else 'number' == typeof t ? t &= 255 : 'boolean' == typeof t && (t = Number(t));
      if (e < 0 || this.length < e || this.length < r) throw new RangeError('Out of range index');
      if (r <= e) return this;
      var o;
      if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), 'number' == typeof t) for (o = e; o < r; ++o) this[o] = t; else {
        var a = h.isBuffer(t) ? t : h.from(t, n);
        var s = a.length;
        if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (o = 0; o < r - e; ++o) this[o + e] = a[o % s];
      }
      return this;
    };
    var j = /[^+/0-9A-Za-z-_]/g;
    function q(t, e) {
      var r;
      e = e || Infinity;
      var n = t.length;
      var i = null;
      var o = [];
      for (var a = 0; a < n; ++a) {
        if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            if (a + 1 === n) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = r;
            continue;
          }
          if (r < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }
          r = 65536 + (i - 55296 << 10 | r - 56320);
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, r < 128) {
          if ((e -= 1) < 0) break;
          o.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          o.push(r >> 6 | 192, 63 & r | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
        } else {
          if (!(r < 1114112)) throw new Error('Invalid code point');
          if ((e -= 4) < 0) break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
        }
      }
      return o;
    }
    function K(t) {
      return i.toByteArray(function(t) {
        if ((t = (t = t.split('=')[0]).trim().replace(j, '')).length < 2) return '';
        for (;t.length % 4 != 0; ) t += '=';
        return t;
      }(t));
    }
    function H(t, e, r, n) {
      for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
      return i;
    }
    function F(t, e) {
      return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name;
    }
    function z(t) {
      return t != t;
    }
    var D = function() {
      var t = '0123456789abcdef';
      var e = new Array(256);
      for (var r = 0; r < 16; ++r) {
        var n = 16 * r;
        for (var i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
      }
      return e;
    }();
  },
  17563: (t, e, r) => {
    "use strict";
    const n = r(70610);
    const i = r(44020);
    const o = r(80500);
    function a(t) {
      if ('string' != typeof t || 1 !== t.length) throw new TypeError('arrayFormatSeparator must be single character string');
    }
    function s(t, e) {
      return e.encode ? e.strict ? n(t) : encodeURIComponent(t) : t;
    }
    function u(t, e) {
      return e.decode ? i(t) : t;
    }
    function h(t) {
      return Array.isArray(t) ? t.sort() : 'object' == typeof t ? h(Object.keys(t)).sort(((t, e) => Number(t) - Number(e))).map((e => t[e])) : t;
    }
    function l(t) {
      const e = t.indexOf('#');
      return -1 !== e && (t = t.slice(0, e)), t;
    }
    function c(t) {
      const e = (t = l(t)).indexOf('?');
      return -1 === e ? '' : t.slice(e + 1);
    }
    function f(t, e) {
      return e.parseNumbers && !Number.isNaN(Number(t)) && 'string' == typeof t && '' !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || 'true' !== t.toLowerCase() && 'false' !== t.toLowerCase() || (t = 'true' === t.toLowerCase()), 
      t;
    }
    function d(t, e) {
      a((e = Object.assign({
        decode: !0,
        sort: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ',',
        parseNumbers: !1,
        parseBooleans: !1
      }, e)).arrayFormatSeparator);
      const r = function(t) {
        let e;
        switch (t.arrayFormat) {
         case 'index':
          return (t, r, n) => {
            e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ''), e ? (void 0 === n[t] && (n[t] = {}), n[t][e[1]] = r) : n[t] = r;
          };

         case 'bracket':
          return (t, r, n) => {
            e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ''), e ? void 0 !== n[t] ? n[t] = [].concat(n[t], r) : n[t] = [ r ] : n[t] = r;
          };

         case 'comma':
         case 'separator':
          return (e, r, n) => {
            const i = 'string' == typeof r && r.split('').indexOf(t.arrayFormatSeparator) > -1 ? r.split(t.arrayFormatSeparator).map((e => u(e, t))) : null === r ? r : u(r, t);
            n[e] = i;
          };

         default:
          return (t, e, r) => {
            void 0 !== r[t] ? r[t] = [].concat(r[t], e) : r[t] = e;
          };
        }
      }(e);
      const n = Object.create(null);
      if ('string' != typeof t) return n;
      if (!(t = t.trim().replace(/^[?#&]/, ''))) return n;
      for (const i of t.split('&')) {
        let [t, a] = o(e.decode ? i.replace(/\+/g, ' ') : i, '=');
        a = void 0 === a ? null : [ 'comma', 'separator' ].includes(e.arrayFormat) ? a : u(a, e), r(u(t, e), a, n);
      }
      for (const i of Object.keys(n)) {
        const t = n[i];
        if ('object' == typeof t && null !== t) for (const r of Object.keys(t)) t[r] = f(t[r], e); else n[i] = f(t, e);
      }
      return !1 === e.sort ? n : (!0 === e.sort ? Object.keys(n).sort() : Object.keys(n).sort(e.sort)).reduce(((t, e) => {
        const r = n[e];
        return Boolean(r) && 'object' == typeof r && !Array.isArray(r) ? t[e] = h(r) : t[e] = r, t;
      }), Object.create(null));
    }
    e.extract = c, e.parse = d, e.stringify = (t, e) => {
      if (!t) return '';
      a((e = Object.assign({
        encode: !0,
        strict: !0,
        arrayFormat: 'none',
        arrayFormatSeparator: ','
      }, e)).arrayFormatSeparator);
      const r = r => e.skipNull && (t => null == t)(t[r]) || e.skipEmptyString && '' === t[r];
      const n = function(t) {
        switch (t.arrayFormat) {
         case 'index':
          return e => (r, n) => {
            const i = r.length;
            return void 0 === n || t.skipNull && null === n || t.skipEmptyString && '' === n ? r : null === n ? [ ...r, [ s(e, t), '[', i, ']' ].join('') ] : [ ...r, [ s(e, t), '[', s(i, t), ']=', s(n, t) ].join('') ];
          };

         case 'bracket':
          return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && '' === n ? r : null === n ? [ ...r, [ s(e, t), '[]' ].join('') ] : [ ...r, [ s(e, t), '[]=', s(n, t) ].join('') ];

         case 'comma':
         case 'separator':
          return e => (r, n) => null == n || 0 === n.length ? r : 0 === r.length ? [ [ s(e, t), '=', s(n, t) ].join('') ] : [ [ r, s(n, t) ].join(t.arrayFormatSeparator) ];

         default:
          return e => (r, n) => void 0 === n || t.skipNull && null === n || t.skipEmptyString && '' === n ? r : null === n ? [ ...r, s(e, t) ] : [ ...r, [ s(e, t), '=', s(n, t) ].join('') ];
        }
      }(e);
      const i = {};
      for (const a of Object.keys(t)) r(a) || (i[a] = t[a]);
      const o = Object.keys(i);
      return !1 !== e.sort && o.sort(e.sort), o.map((r => {
        const i = t[r];
        return void 0 === i ? '' : null === i ? s(r, e) : Array.isArray(i) ? i.reduce(n(r), []).join('&') : s(r, e) + '=' + s(i, e);
      })).filter((t => t.length > 0)).join('&');
    }, e.parseUrl = (t, e) => {
      e = Object.assign({
        decode: !0
      }, e);
      const [r, n] = o(t, '#');
      return Object.assign({
        url: r.split('?')[0] || '',
        query: d(c(t), e)
      }, e && e.parseFragmentIdentifier && n ? {
        fragmentIdentifier: u(n, e)
      } : {});
    }, e.stringifyUrl = (t, r) => {
      r = Object.assign({
        encode: !0,
        strict: !0
      }, r);
      const n = l(t.url).split('?')[0] || '';
      const i = e.extract(t.url);
      const o = e.parse(i, {
        sort: !1
      });
      const a = Object.assign(o, t.query);
      let u = e.stringify(a, r);
      u && (u = `?${u}`);
      let h = function(t) {
        let e = '';
        const r = t.indexOf('#');
        return -1 !== r && (e = t.slice(r)), e;
      }(t.url);
      return t.fragmentIdentifier && (h = `#${s(t.fragmentIdentifier, r)}`), `${n}${u}${h}`;
    };
  },
  37253: (t, e, r) => {
    const n = r(89539);
    const i = r(17187);
    var o = 'object' == typeof Reflect ? Reflect : null;
    var a = o && 'function' == typeof o.apply ? o.apply : function(t, e, r) {
      return Function.prototype.apply.call(t, e, r);
    };
    function s() {
      i.call(this);
    }
    function u(t, e, r) {
      try {
        a(t, e, r);
      } catch (n) {
        setTimeout((() => {
          throw n;
        }));
      }
    }
    function h(t, e) {
      var r = new Array(e);
      for (var n = 0; n < e; ++n) r[n] = t[n];
      return r;
    }
    t.exports = s, n.inherits(s, i), s.prototype.emit = function(t) {
      var e = [];
      for (var r = 1; r < arguments.length; r++) e.push(arguments[r]);
      var n = 'error' === t;
      var i = this._events;
      if (void 0 !== i) n = n && void 0 === i.error; else if (!n) return !1;
      if (n) {
        var o;
        if (e.length > 0 && (o = e[0]), o instanceof Error) throw o;
        var a = new Error('Unhandled error.' + (o ? ' (' + o.message + ')' : ''));
        throw a.context = o, a;
      }
      var s = i[t];
      if (void 0 === s) return !1;
      if ('function' == typeof s) u(s, this, e); else {
        var l = s.length;
        var c = h(s, l);
        for (r = 0; r < l; ++r) u(c[r], this, e);
      }
      return !0;
    };
  },
  80045: function(t, e, r) {
    var n = r(34155);
    !function(e) {
      'use strict';
      var r = function(t) {
        setTimeout(t, 0);
      };
      void 0 !== n && n && 'function' == typeof n.nextTick && (r = n.nextTick), t.exports = function(t) {
        var e = {
          capacity: t || 1,
          current: 0,
          queue: [],
          firstHere: !1,
          take: function() {
            if (!1 === e.firstHere) {
              e.current++, e.firstHere = !0;
              var t = 1;
            } else t = 0;
            var r = {
              n: 1
            };
            'function' == typeof arguments[0] ? r.task = arguments[0] : r.n = arguments[0], arguments.length >= 2 && ('function' == typeof arguments[1] ? r.task = arguments[1] : r.n = arguments[1]);
            var n = r.task;
            if (r.task = function() {
              n(e.leave);
            }, e.current + r.n - t > e.capacity) return 1 === t && (e.current--, e.firstHere = !1), e.queue.push(r);
            e.current += r.n - t, r.task(e.leave), 1 === t && (e.firstHere = !1);
          },
          leave: function(t) {
            if (t = t || 1, e.current -= t, e.queue.length) {
              var n = e.queue[0];
              n.n + e.current > e.capacity || (e.queue.shift(), e.current += n.n, r(n.task));
            } else if (e.current < 0) throw new Error('leave called too many times.');
          },
          available: function(t) {
            return t = t || 1, e.current + t <= e.capacity;
          }
        };
        return e;
      };
    }();
  },
  80500: t => {
    "use strict";
    t.exports = (t, e) => {
      if ('string' != typeof t || 'string' != typeof e) throw new TypeError('Expected the arguments to be of type `string`');
      if ('' === e) return [ t ];
      const r = t.indexOf(e);
      return -1 === r ? [ t ] : [ t.slice(0, r), t.slice(r + e.length) ];
    };
  },
  70610: t => {
    "use strict";
    t.exports = t => encodeURIComponent(t).replace(/[!'()*]/g, (t => `%${t.charCodeAt(0).toString(16).toUpperCase()}`));
  },
  11742: t => {
    t.exports = function() {
      var t = document.getSelection();
      if (!t.rangeCount) return function() {};
      var e = document.activeElement;
      var r = [];
      for (var n = 0; n < t.rangeCount; n++) r.push(t.getRangeAt(n));
      switch (e.tagName.toUpperCase()) {
       case 'INPUT':
       case 'TEXTAREA':
        e.blur();
        break;

       default:
        e = null;
      }
      return t.removeAllRanges(), function() {
        'Caret' === t.type && t.removeAllRanges(), t.rangeCount || r.forEach((function(e) {
          t.addRange(e);
        })), e && e.focus();
      };
    };
  },
  70655: (t, e, r) => {
    "use strict";
    r.r(e), r.d(e, {
      __assign: () => o,
      __asyncDelegator: () => M,
      __asyncGenerator: () => _,
      __asyncValues: () => b,
      __await: () => w,
      __awaiter: () => l,
      __classPrivateFieldGet: () => S,
      __classPrivateFieldIn: () => C,
      __classPrivateFieldSet: () => T,
      __createBinding: () => f,
      __decorate: () => s,
      __exportStar: () => d,
      __extends: () => i,
      __generator: () => c,
      __importDefault: () => E,
      __importStar: () => A,
      __makeTemplateObject: () => k,
      __metadata: () => h,
      __param: () => u,
      __read: () => m,
      __rest: () => a,
      __spread: () => v,
      __spreadArray: () => y,
      __spreadArrays: () => g,
      __values: () => p
    });
    var n = function(t, e) {
      return n = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function(t, e) {
        t.__proto__ = e;
      } || function(t, e) {
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      }, n(t, e);
    };
    function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
      function r() {
        this.constructor = t;
      }
      n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r);
    }
    var o = function() {
      return o = Object.assign || function(t) {
        for (var e, r = 1, n = arguments.length; r < n; r++) for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t;
      }, o.apply(this, arguments);
    };
    function a(t, e) {
      var r = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
      }
      return r;
    }
    function s(t, e, r, n) {
      var i, o = arguments.length, a = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, r, a) : i(e, r)) || a);
      return o > 3 && a && Object.defineProperty(e, r, a), a;
    }
    function u(t, e) {
      return function(r, n) {
        e(r, n, t);
      };
    }
    function h(t, e) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
    }
    function l(t, e, r, n) {
      return new (r || (r = Promise))((function(i, o) {
        function a(t) {
          try {
            u(n.next(t));
          } catch (e) {
            o(e);
          }
        }
        function s(t) {
          try {
            u(n.throw(t));
          } catch (e) {
            o(e);
          }
        }
        function u(t) {
          t.done ? i(t.value) : function(t) {
            return t instanceof r ? t : new r((function(e) {
              e(t);
            }));
          }(t.value).then(a, s);
        }
        u((n = n.apply(t, e || [])).next());
      }));
    }
    function c(t, e) {
      var r, n, i, o, a = {
        label: 0,
        sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        throw: s(1),
        return: s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
        return this;
      }), o;
      function s(o) {
        return function(s) {
          return function(o) {
            if (r) throw new TypeError("Generator is already executing.");
            for (;a; ) try {
              if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
              switch (n = 0, i && (o = [ 2 & o[0], i.value ]), o[0]) {
               case 0:
               case 1:
                i = o;
                break;

               case 4:
                return a.label++, {
                  value: o[1],
                  done: !1
                };

               case 5:
                a.label++, n = o[1], o = [ 0 ];
                continue;

               case 7:
                o = a.ops.pop(), a.trys.pop();
                continue;

               default:
                if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                  a = 0;
                  continue;
                }
                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                  a.label = o[1];
                  break;
                }
                if (6 === o[0] && a.label < i[1]) {
                  a.label = i[1], i = o;
                  break;
                }
                if (i && a.label < i[2]) {
                  a.label = i[2], a.ops.push(o);
                  break;
                }
                i[2] && a.ops.pop(), a.trys.pop();
                continue;
              }
              o = e.call(t, a);
            } catch (s) {
              o = [ 6, s ], n = 0;
            } finally {
              r = i = 0;
            }
            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([ o, s ]);
        };
      }
    }
    var f = Object.create ? function(t, e, r, n) {
      void 0 === n && (n = r);
      var i = Object.getOwnPropertyDescriptor(e, r);
      i && !("get" in i ? !e.__esModule : i.writable || i.configurable) || (i = {
        enumerable: !0,
        get: function() {
          return e[r];
        }
      }), Object.defineProperty(t, n, i);
    } : function(t, e, r, n) {
      void 0 === n && (n = r), t[n] = e[r];
    };
    function d(t, e) {
      for (var r in t) "default" === r || Object.prototype.hasOwnProperty.call(e, r) || f(e, t, r);
    }
    function p(t) {
      var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], n = 0;
      if (r) return r.call(t);
      if (t && "number" == typeof t.length) return {
        next: function() {
          return t && n >= t.length && (t = void 0), {
            value: t && t[n++],
            done: !t
          };
        }
      };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function m(t, e) {
      var r = "function" == typeof Symbol && t[Symbol.iterator];
      if (!r) return t;
      var n, i, o = r.call(t), a = [];
      try {
        for (;(void 0 === e || e-- > 0) && !(n = o.next()).done; ) a.push(n.value);
      } catch (s) {
        i = {
          error: s
        };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    }
    function v() {
      for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(m(arguments[e]));
      return t;
    }
    function g() {
      for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
      var n = Array(t), i = 0;
      for (e = 0; e < r; e++) for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
      return n;
    }
    function y(t, e, r) {
      if (r || 2 === arguments.length) for (var n, i = 0, o = e.length; i < o; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), 
      n[i] = e[i]);
      return t.concat(n || Array.prototype.slice.call(e));
    }
    function w(t) {
      return this instanceof w ? (this.v = t, this) : new w(t);
    }
    function _(t, e, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var n, i = r.apply(t, e || []), o = [];
      return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
        return this;
      }, n;
      function a(t) {
        i[t] && (n[t] = function(e) {
          return new Promise((function(r, n) {
            o.push([ t, e, r, n ]) > 1 || s(t, e);
          }));
        });
      }
      function s(t, e) {
        try {
          !function(t) {
            t.value instanceof w ? Promise.resolve(t.value.v).then(u, h) : l(o[0][2], t);
          }(i[t](e));
        } catch (r) {
          l(o[0][3], r);
        }
      }
      function u(t) {
        s("next", t);
      }
      function h(t) {
        s("throw", t);
      }
      function l(t, e) {
        t(e), o.shift(), o.length && s(o[0][0], o[0][1]);
      }
    }
    function M(t) {
      var e, r;
      return e = {}, n("next"), n("throw", (function(t) {
        throw t;
      })), n("return"), e[Symbol.iterator] = function() {
        return this;
      }, e;
      function n(n, i) {
        e[n] = t[n] ? function(e) {
          return (r = !r) ? {
            value: w(t[n](e)),
            done: "return" === n
          } : i ? i(e) : e;
        } : i;
      }
    }
    function b(t) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var e, r = t[Symbol.asyncIterator];
      return r ? r.call(t) : (t = p(t), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
        return this;
      }, e);
      function n(r) {
        e[r] = t[r] && function(e) {
          return new Promise((function(n, i) {
            (function(t, e, r, n) {
              Promise.resolve(n).then((function(e) {
                t({
                  value: e,
                  done: r
                });
              }), e);
            })(n, i, (e = t[r](e)).done, e.value);
          }));
        };
      }
    }
    function k(t, e) {
      return Object.defineProperty ? Object.defineProperty(t, "raw", {
        value: e
      }) : t.raw = e, t;
    }
    var x = Object.create ? function(t, e) {
      Object.defineProperty(t, "default", {
        enumerable: !0,
        value: e
      });
    } : function(t, e) {
      t.default = e;
    };
    function A(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && f(e, t, r);
      return x(e, t), e;
    }
    function E(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }
    function S(t, e, r, n) {
      if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
      if ("function" == typeof e ? t !== e || !n : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
    }
    function T(t, e, r, n, i) {
      if ("m" === n) throw new TypeError("Private method is not writable");
      if ("a" === n && !i) throw new TypeError("Private accessor was defined without a setter");
      if ("function" == typeof e ? t !== e || !i : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === n ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
    }
    function C(t, e) {
      if (null === e || "object" != typeof e && "function" != typeof e) throw new TypeError("Cannot use 'in' operator on non-object");
      return "function" == typeof t ? e === t : t.has(e);
    }
  },
  65054: (t, e, r) => {
    var n = r(48764).Buffer;
    var i = r(4501).strict;
    t.exports = function(t) {
      if (i(t)) {
        var e = n.from(t.buffer);
        return t.byteLength !== t.buffer.byteLength && (e = e.slice(t.byteOffset, t.byteOffset + t.byteLength)), e;
      }
      return n.from(t);
    };
  },
  12906: (t, e, r) => {
    var n = r(25108);
    const i = r(17187).EventEmitter;
    const o = r(89539).inherits;
    const a = r(86918);
    const s = r(75012);
    const u = r(94005);
    const h = r(94282);
    const l = r(52698);
    r(6496);
    const c = r(39728);
    const f = function() {};
    function d(t) {
      const e = this;
      i.call(e), e.setMaxListeners(30), t = t || {};
      const r = {
        sendAsync: e._handleAsync.bind(e)
      };
      const n = t.blockTrackerProvider || r;
      e._blockTracker = t.blockTracker || new s({
        provider: n,
        pollingInterval: t.pollingInterval || 4e3,
        setSkipCacheFlag: !0
      }), e._ready = new l, e.currentBlock = null, e._providers = [];
    }
    t.exports = d, o(d, i), d.prototype.start = function(t = f) {
      const e = this;
      e._ready.go(), e._blockTracker.on('latest', (t => {
        e._getBlockByNumberWithRetry(t, ((t, r) => {
          if (t) return void this.emit('error', t);
          if (!r) return n.log(r), void this.emit('error', new Error("Could not find block"));
          const i = function(t) {
            return {
              number: a.toBuffer(t.number),
              hash: a.toBuffer(t.hash),
              parentHash: a.toBuffer(t.parentHash),
              nonce: a.toBuffer(t.nonce),
              mixHash: a.toBuffer(t.mixHash),
              sha3Uncles: a.toBuffer(t.sha3Uncles),
              logsBloom: a.toBuffer(t.logsBloom),
              transactionsRoot: a.toBuffer(t.transactionsRoot),
              stateRoot: a.toBuffer(t.stateRoot),
              receiptsRoot: a.toBuffer(t.receiptRoot || t.receiptsRoot),
              miner: a.toBuffer(t.miner),
              difficulty: a.toBuffer(t.difficulty),
              totalDifficulty: a.toBuffer(t.totalDifficulty),
              size: a.toBuffer(t.size),
              extraData: a.toBuffer(t.extraData),
              gasLimit: a.toBuffer(t.gasLimit),
              gasUsed: a.toBuffer(t.gasUsed),
              timestamp: a.toBuffer(t.timestamp),
              transactions: t.transactions
            };
          }(r);
          e._setCurrentBlock(i), e.emit('rawBlock', r), e.emit('latest', r);
        }));
      })), e._blockTracker.on('sync', e.emit.bind(e, 'sync')), e._blockTracker.on('error', e.emit.bind(e, 'error')), e._running = !0, 
      e.emit('start');
    }, d.prototype.stop = function() {
      const t = this;
      t._blockTracker.removeAllListeners(), t._running = !1, t.emit('stop');
    }, d.prototype.isRunning = function() {
      return this._running;
    }, d.prototype.addProvider = function(t, e) {
      const r = this;
      'number' == typeof e ? r._providers.splice(e, 0, t) : r._providers.push(t), t.setEngine(this);
    }, d.prototype.removeProvider = function(t) {
      const e = this._providers.indexOf(t);
      if (e < 0) throw new Error('Provider not found.');
      this._providers.splice(e, 1);
    }, d.prototype.send = function(t) {
      throw new Error('Web3ProviderEngine does not support synchronous requests.');
    }, d.prototype.sendAsync = function(t, e) {
      const r = this;
      r._ready.await((function() {
        Array.isArray(t) ? u(t, r._handleAsync.bind(r), e) : r._handleAsync(t, e);
      }));
    }, d.prototype._getBlockByNumberWithRetry = function(t, e) {
      const r = this;
      let n = 5;
      return void i();
      function i() {
        r._getBlockByNumber(t, o);
      }
      function o(t, r) {
        return t ? e(t) : r ? void e(null, r) : n > 0 ? (n--, void setTimeout((function() {
          i();
        }), 1e3)) : void e(null, null);
      }
    }, d.prototype._getBlockByNumber = function(t, e) {
      const r = c({
        method: 'eth_getBlockByNumber',
        params: [ t, !1 ],
        skipCache: !0
      });
      this._handleAsync(r, ((t, r) => t ? e(t) : e(null, r.result)));
    }, d.prototype._handleAsync = function(t, e) {
      var r = this;
      var n = -1;
      var i = null;
      var o = null;
      var a = [];
      function s(r, n) {
        o = r, i = n, h(a, (function(t, e) {
          t ? t(o, i, e) : e();
        }), (function() {
          var r = {
            id: t.id,
            jsonrpc: t.jsonrpc,
            result: i
          };
          null != o ? (r.error = {
            message: o.stack || o.message || o,
            code: -32e3
          }, e(o, r)) : e(null, r);
        }));
      }
      !function e(i) {
        if (n += 1, a.unshift(i), n >= r._providers.length) s(new Error('Request for method "' + t.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.')); else try {
          r._providers[n].handleRequest(t, e, s);
        } catch (o) {
          s(o);
        }
      }();
    }, d.prototype._setCurrentBlock = function(t) {
      this.currentBlock = t, this.emit('block', t);
    };
  },
  26949: function(t, e, r) {
    !function(t, e) {
      'use strict';
      function n(t, e) {
        if (!t) throw new Error(e || 'Assertion failed');
      }
      function i(t, e) {
        t.super_ = e;
        var r = function() {};
        r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
      }
      function o(t, e, r) {
        if (o.isBN(t)) return t;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== t && ('le' !== e && 'be' !== e || (r = e, 
        e = 10), this._init(t || 0, e || 10, r || 'be'));
      }
      var a;
      'object' == typeof t ? t.exports = o : e.BN = o, o.BN = o, o.wordSize = 26;
      try {
        a = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : r(24414).Buffer;
      } catch (A) {}
      function s(t, e) {
        var r = t.charCodeAt(e);
        return r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : r - 48 & 15;
      }
      function u(t, e, r) {
        var n = s(t, r);
        return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
      }
      function h(t, e, r, n) {
        var i = 0;
        var o = Math.min(t.length, r);
        for (var a = e; a < o; a++) {
          var s = t.charCodeAt(a) - 48;
          i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s;
        }
        return i;
      }
      o.isBN = function(t) {
        return t instanceof o || null !== t && 'object' == typeof t && t.constructor.wordSize === o.wordSize && Array.isArray(t.words);
      }, o.max = function(t, e) {
        return t.cmp(e) > 0 ? t : e;
      }, o.min = function(t, e) {
        return t.cmp(e) < 0 ? t : e;
      }, o.prototype._init = function(t, e, r) {
        if ('number' == typeof t) return this._initNumber(t, e, r);
        if ('object' == typeof t) return this._initArray(t, e, r);
        'hex' === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
        var i = 0;
        '-' === (t = t.toString().replace(/\s+/g, ''))[0] && (i++, this.negative = 1), i < t.length && (16 === e ? this._parseHex(t, i, r) : (this._parseBase(t, e, i), 
        'le' === r && this._initArray(this.toArray(), e, r)));
      }, o.prototype._initNumber = function(t, e, r) {
        t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [ 67108863 & t ], this.length = 1) : t < 4503599627370496 ? (this.words = [ 67108863 & t, t / 67108864 & 67108863 ], 
        this.length = 2) : (n(t < 9007199254740992), this.words = [ 67108863 & t, t / 67108864 & 67108863, 1 ], this.length = 3), 
        'le' === r && this._initArray(this.toArray(), e, r);
      }, o.prototype._initArray = function(t, e, r) {
        if (n('number' == typeof t.length), t.length <= 0) return this.words = [ 0 ], this.length = 1, this;
        this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
        for (var i = 0; i < this.length; i++) this.words[i] = 0;
        var o, a;
        var s = 0;
        if ('be' === r) for (i = t.length - 1, o = 0; i >= 0; i -= 3) a = t[i] | t[i - 1] << 8 | t[i - 2] << 16, this.words[o] |= a << s & 67108863, 
        this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++); else if ('le' === r) for (i = 0, o = 0; i < t.length; i += 3) a = t[i] | t[i + 1] << 8 | t[i + 2] << 16, 
        this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
        return this.strip();
      }, o.prototype._parseHex = function(t, e, r) {
        this.length = Math.ceil((t.length - e) / 6), this.words = new Array(this.length);
        for (var n = 0; n < this.length; n++) this.words[n] = 0;
        var i = 0;
        var o = 0;
        var a;
        if ('be' === r) for (n = t.length - 1; n >= e; n -= 2) a = u(t, e, n) << i, this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, 
        o += 1, this.words[o] |= a >>> 26) : i += 8; else for (n = (t.length - e) % 2 == 0 ? e + 1 : e; n < t.length; n += 2) a = u(t, e, n) << i, 
        this.words[o] |= 67108863 & a, i >= 18 ? (i -= 18, o += 1, this.words[o] |= a >>> 26) : i += 8;
        this.strip();
      }, o.prototype._parseBase = function(t, e, r) {
        this.words = [ 0 ], this.length = 1;
        for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
        n--, i = i / e | 0;
        var o = t.length - r;
        var a = o % n;
        var s = Math.min(o, o - a) + r;
        var u = 0;
        for (var l = r; l < s; l += n) u = h(t, l, l + n, e), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        if (0 !== a) {
          var c = 1;
          for (u = h(t, l, t.length, e), l = 0; l < a; l++) c *= e;
          this.imuln(c), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
        }
        this.strip();
      }, o.prototype.copy = function(t) {
        t.words = new Array(this.length);
        for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
        t.length = this.length, t.negative = this.negative, t.red = this.red;
      }, o.prototype.clone = function() {
        var t = new o(null);
        return this.copy(t), t;
      }, o.prototype._expand = function(t) {
        for (;this.length < t; ) this.words[this.length++] = 0;
        return this;
      }, o.prototype.strip = function() {
        for (;this.length > 1 && 0 === this.words[this.length - 1]; ) this.length--;
        return this._normSign();
      }, o.prototype._normSign = function() {
        return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
      }, o.prototype.inspect = function() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
      };
      var l = [ '', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000', '0000000000', '00000000000', '000000000000', '0000000000000', '00000000000000', '000000000000000', '0000000000000000', '00000000000000000', '000000000000000000', '0000000000000000000', '00000000000000000000', '000000000000000000000', '0000000000000000000000', '00000000000000000000000', '000000000000000000000000', '0000000000000000000000000' ];
      var c = [ 0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
      var f = [ 0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176 ];
      function d(t, e, r) {
        r.negative = e.negative ^ t.negative;
        var n = t.length + e.length | 0;
        r.length = n, n = n - 1 | 0;
        var i = 0 | t.words[0];
        var o = 0 | e.words[0];
        var a = i * o;
        var s = 67108863 & a;
        var u = a / 67108864 | 0;
        r.words[0] = s;
        for (var h = 1; h < n; h++) {
          var l = u >>> 26;
          var c = 67108863 & u;
          var f = Math.min(h, e.length - 1);
          for (var d = Math.max(0, h - t.length + 1); d <= f; d++) {
            var p = h - d | 0;
            l += (a = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + c) / 67108864 | 0, c = 67108863 & a;
          }
          r.words[h] = 0 | c, u = 0 | l;
        }
        return 0 !== u ? r.words[h] = 0 | u : r.length--, r.strip();
      }
      o.prototype.toString = function(t, e) {
        var r;
        if (e = 0 | e || 1, 16 === (t = t || 10) || 'hex' === t) {
          r = '';
          var i = 0;
          var o = 0;
          for (var a = 0; a < this.length; a++) {
            var s = this.words[a];
            var u = (16777215 & (s << i | o)).toString(16);
            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? l[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, 
            a--);
          }
          for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        if (t === (0 | t) && t >= 2 && t <= 36) {
          var h = c[t];
          var d = f[t];
          r = '';
          var p = this.clone();
          for (p.negative = 0; !p.isZero(); ) {
            var m = p.modn(d).toString(t);
            r = (p = p.idivn(d)).isZero() ? m + r : l[h - m.length] + m + r;
          }
          for (this.isZero() && (r = '0' + r); r.length % e != 0; ) r = '0' + r;
          return 0 !== this.negative && (r = '-' + r), r;
        }
        n(!1, 'Base should be between 2 and 36');
      }, o.prototype.toNumber = function() {
        var t = this.words[0];
        return 2 === this.length ? t += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? t += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, 'Number can only safely store up to 53 bits'), 
        0 !== this.negative ? -t : t;
      }, o.prototype.toJSON = function() {
        return this.toString(16);
      }, o.prototype.toBuffer = function(t, e) {
        return n(void 0 !== a), this.toArrayLike(a, t, e);
      }, o.prototype.toArray = function(t, e) {
        return this.toArrayLike(Array, t, e);
      }, o.prototype.toArrayLike = function(t, e, r) {
        var i = this.byteLength();
        var o = r || Math.max(1, i);
        n(i <= o, 'byte array longer than desired length'), n(o > 0, 'Requested array length <= 0'), this.strip();
        var a = 'le' === e;
        var s = new t(o);
        var u, h;
        var l = this.clone();
        if (a) {
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[h] = u;
          for (;h < o; h++) s[h] = 0;
        } else {
          for (h = 0; h < o - i; h++) s[h] = 0;
          for (h = 0; !l.isZero(); h++) u = l.andln(255), l.iushrn(8), s[o - h - 1] = u;
        }
        return s;
      }, Math.clz32 ? o.prototype._countBits = function(t) {
        return 32 - Math.clz32(t);
      } : o.prototype._countBits = function(t) {
        var e = t;
        var r = 0;
        return e >= 4096 && (r += 13, e >>>= 13), e >= 64 && (r += 7, e >>>= 7), e >= 8 && (r += 4, e >>>= 4), e >= 2 && (r += 2, 
        e >>>= 2), r + e;
      }, o.prototype._zeroBits = function(t) {
        if (0 === t) return 26;
        var e = t;
        var r = 0;
        return 0 == (8191 & e) && (r += 13, e >>>= 13), 0 == (127 & e) && (r += 7, e >>>= 7), 0 == (15 & e) && (r += 4, e >>>= 4), 
        0 == (3 & e) && (r += 2, e >>>= 2), 0 == (1 & e) && r++, r;
      }, o.prototype.bitLength = function() {
        var t = this.words[this.length - 1];
        var e = this._countBits(t);
        return 26 * (this.length - 1) + e;
      }, o.prototype.zeroBits = function() {
        if (this.isZero()) return 0;
        var t = 0;
        for (var e = 0; e < this.length; e++) {
          var r = this._zeroBits(this.words[e]);
          if (t += r, 26 !== r) break;
        }
        return t;
      }, o.prototype.byteLength = function() {
        return Math.ceil(this.bitLength() / 8);
      }, o.prototype.toTwos = function(t) {
        return 0 !== this.negative ? this.abs().inotn(t).iaddn(1) : this.clone();
      }, o.prototype.fromTwos = function(t) {
        return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
      }, o.prototype.isNeg = function() {
        return 0 !== this.negative;
      }, o.prototype.neg = function() {
        return this.clone().ineg();
      }, o.prototype.ineg = function() {
        return this.isZero() || (this.negative ^= 1), this;
      }, o.prototype.iuor = function(t) {
        for (;this.length < t.length; ) this.words[this.length++] = 0;
        for (var e = 0; e < t.length; e++) this.words[e] = this.words[e] | t.words[e];
        return this.strip();
      }, o.prototype.ior = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuor(t);
      }, o.prototype.or = function(t) {
        return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
      }, o.prototype.uor = function(t) {
        return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
      }, o.prototype.iuand = function(t) {
        var e;
        e = this.length > t.length ? t : this;
        for (var r = 0; r < e.length; r++) this.words[r] = this.words[r] & t.words[r];
        return this.length = e.length, this.strip();
      }, o.prototype.iand = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuand(t);
      }, o.prototype.and = function(t) {
        return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
      }, o.prototype.uand = function(t) {
        return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
      }, o.prototype.iuxor = function(t) {
        var e;
        var r;
        this.length > t.length ? (e = this, r = t) : (e = t, r = this);
        for (var n = 0; n < r.length; n++) this.words[n] = e.words[n] ^ r.words[n];
        if (this !== e) for (;n < e.length; n++) this.words[n] = e.words[n];
        return this.length = e.length, this.strip();
      }, o.prototype.ixor = function(t) {
        return n(0 == (this.negative | t.negative)), this.iuxor(t);
      }, o.prototype.xor = function(t) {
        return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
      }, o.prototype.uxor = function(t) {
        return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
      }, o.prototype.inotn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = 0 | Math.ceil(t / 26);
        var r = t % 26;
        this._expand(e), r > 0 && e--;
        for (var i = 0; i < e; i++) this.words[i] = 67108863 & ~this.words[i];
        return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip();
      }, o.prototype.notn = function(t) {
        return this.clone().inotn(t);
      }, o.prototype.setn = function(t, e) {
        n('number' == typeof t && t >= 0);
        var r = t / 26 | 0;
        var i = t % 26;
        return this._expand(r + 1), this.words[r] = e ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip();
      }, o.prototype.iadd = function(t) {
        var e;
        if (0 !== this.negative && 0 === t.negative) return this.negative = 0, e = this.isub(t), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== t.negative) return t.negative = 0, e = this.isub(t), t.negative = 1, e._normSign();
        var r, n;
        this.length > t.length ? (r = this, n = t) : (r = t, n = this);
        var i = 0;
        for (var o = 0; o < n.length; o++) e = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        for (;0 !== i && o < r.length; o++) e = (0 | r.words[o]) + i, this.words[o] = 67108863 & e, i = e >>> 26;
        if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++; else if (r !== this) for (;o < r.length; o++) this.words[o] = r.words[o];
        return this;
      }, o.prototype.add = function(t) {
        var e;
        return 0 !== t.negative && 0 === this.negative ? (t.negative = 0, e = this.sub(t), t.negative ^= 1, e) : 0 === t.negative && 0 !== this.negative ? (this.negative = 0, 
        e = t.sub(this), this.negative = 1, e) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
      }, o.prototype.isub = function(t) {
        if (0 !== t.negative) {
          t.negative = 0;
          var e = this.iadd(t);
          return t.negative = 1, e._normSign();
        }
        if (0 !== this.negative) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
        var r = this.cmp(t);
        if (0 === r) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        var n, i;
        r > 0 ? (n = this, i = t) : (n = t, i = this);
        var o = 0;
        for (var a = 0; a < i.length; a++) o = (e = (0 | n.words[a]) - (0 | i.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        for (;0 !== o && a < n.length; a++) o = (e = (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & e;
        if (0 === o && a < n.length && n !== this) for (;a < n.length; a++) this.words[a] = n.words[a];
        return this.length = Math.max(this.length, a), n !== this && (this.negative = 1), this.strip();
      }, o.prototype.sub = function(t) {
        return this.clone().isub(t);
      };
      var p = function(t, e, r) {
        var n = t.words;
        var i = e.words;
        var o = r.words;
        var a = 0;
        var s;
        var u;
        var h;
        var l = 0 | n[0];
        var c = 8191 & l;
        var f = l >>> 13;
        var d = 0 | n[1];
        var p = 8191 & d;
        var m = d >>> 13;
        var v = 0 | n[2];
        var g = 8191 & v;
        var y = v >>> 13;
        var w = 0 | n[3];
        var _ = 8191 & w;
        var M = w >>> 13;
        var b = 0 | n[4];
        var k = 8191 & b;
        var x = b >>> 13;
        var A = 0 | n[5];
        var E = 8191 & A;
        var S = A >>> 13;
        var T = 0 | n[6];
        var C = 8191 & T;
        var R = T >>> 13;
        var B = 0 | n[7];
        var L = 8191 & B;
        var P = B >>> 13;
        var I = 0 | n[8];
        var O = 8191 & I;
        var N = I >>> 13;
        var U = 0 | n[9];
        var j = 8191 & U;
        var q = U >>> 13;
        var K = 0 | i[0];
        var H = 8191 & K;
        var F = K >>> 13;
        var z = 0 | i[1];
        var D = 8191 & z;
        var Z = z >>> 13;
        var W = 0 | i[2];
        var V = 8191 & W;
        var $ = W >>> 13;
        var G = 0 | i[3];
        var Y = 8191 & G;
        var J = G >>> 13;
        var Q = 0 | i[4];
        var X = 8191 & Q;
        var tt = Q >>> 13;
        var et = 0 | i[5];
        var rt = 8191 & et;
        var nt = et >>> 13;
        var it = 0 | i[6];
        var ot = 8191 & it;
        var at = it >>> 13;
        var st = 0 | i[7];
        var ut = 8191 & st;
        var ht = st >>> 13;
        var lt = 0 | i[8];
        var ct = 8191 & lt;
        var ft = lt >>> 13;
        var dt = 0 | i[9];
        var pt = 8191 & dt;
        var mt = dt >>> 13;
        r.negative = t.negative ^ e.negative, r.length = 19;
        var vt = (a + (s = Math.imul(c, H)) | 0) + ((8191 & (u = (u = Math.imul(c, F)) + Math.imul(f, H) | 0)) << 13) | 0;
        a = ((h = Math.imul(f, F)) + (u >>> 13) | 0) + (vt >>> 26) | 0, vt &= 67108863, s = Math.imul(p, H), u = (u = Math.imul(p, F)) + Math.imul(m, H) | 0, 
        h = Math.imul(m, F);
        var gt = (a + (s = s + Math.imul(c, D) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, Z) | 0) + Math.imul(f, D) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, Z) | 0) + (u >>> 13) | 0) + (gt >>> 26) | 0, gt &= 67108863, s = Math.imul(g, H), u = (u = Math.imul(g, F)) + Math.imul(y, H) | 0, 
        h = Math.imul(y, F), s = s + Math.imul(p, D) | 0, u = (u = u + Math.imul(p, Z) | 0) + Math.imul(m, D) | 0, h = h + Math.imul(m, Z) | 0;
        var yt = (a + (s = s + Math.imul(c, V) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, $) | 0) + Math.imul(f, V) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, $) | 0) + (u >>> 13) | 0) + (yt >>> 26) | 0, yt &= 67108863, s = Math.imul(_, H), u = (u = Math.imul(_, F)) + Math.imul(M, H) | 0, 
        h = Math.imul(M, F), s = s + Math.imul(g, D) | 0, u = (u = u + Math.imul(g, Z) | 0) + Math.imul(y, D) | 0, h = h + Math.imul(y, Z) | 0, 
        s = s + Math.imul(p, V) | 0, u = (u = u + Math.imul(p, $) | 0) + Math.imul(m, V) | 0, h = h + Math.imul(m, $) | 0;
        var wt = (a + (s = s + Math.imul(c, Y) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, J) | 0) + Math.imul(f, Y) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, J) | 0) + (u >>> 13) | 0) + (wt >>> 26) | 0, wt &= 67108863, s = Math.imul(k, H), u = (u = Math.imul(k, F)) + Math.imul(x, H) | 0, 
        h = Math.imul(x, F), s = s + Math.imul(_, D) | 0, u = (u = u + Math.imul(_, Z) | 0) + Math.imul(M, D) | 0, h = h + Math.imul(M, Z) | 0, 
        s = s + Math.imul(g, V) | 0, u = (u = u + Math.imul(g, $) | 0) + Math.imul(y, V) | 0, h = h + Math.imul(y, $) | 0, s = s + Math.imul(p, Y) | 0, 
        u = (u = u + Math.imul(p, J) | 0) + Math.imul(m, Y) | 0, h = h + Math.imul(m, J) | 0;
        var _t = (a + (s = s + Math.imul(c, X) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, tt) | 0) + Math.imul(f, X) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, tt) | 0) + (u >>> 13) | 0) + (_t >>> 26) | 0, _t &= 67108863, s = Math.imul(E, H), u = (u = Math.imul(E, F)) + Math.imul(S, H) | 0, 
        h = Math.imul(S, F), s = s + Math.imul(k, D) | 0, u = (u = u + Math.imul(k, Z) | 0) + Math.imul(x, D) | 0, h = h + Math.imul(x, Z) | 0, 
        s = s + Math.imul(_, V) | 0, u = (u = u + Math.imul(_, $) | 0) + Math.imul(M, V) | 0, h = h + Math.imul(M, $) | 0, s = s + Math.imul(g, Y) | 0, 
        u = (u = u + Math.imul(g, J) | 0) + Math.imul(y, Y) | 0, h = h + Math.imul(y, J) | 0, s = s + Math.imul(p, X) | 0, u = (u = u + Math.imul(p, tt) | 0) + Math.imul(m, X) | 0, 
        h = h + Math.imul(m, tt) | 0;
        var Mt = (a + (s = s + Math.imul(c, rt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, nt) | 0) + Math.imul(f, rt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, nt) | 0) + (u >>> 13) | 0) + (Mt >>> 26) | 0, Mt &= 67108863, s = Math.imul(C, H), u = (u = Math.imul(C, F)) + Math.imul(R, H) | 0, 
        h = Math.imul(R, F), s = s + Math.imul(E, D) | 0, u = (u = u + Math.imul(E, Z) | 0) + Math.imul(S, D) | 0, h = h + Math.imul(S, Z) | 0, 
        s = s + Math.imul(k, V) | 0, u = (u = u + Math.imul(k, $) | 0) + Math.imul(x, V) | 0, h = h + Math.imul(x, $) | 0, s = s + Math.imul(_, Y) | 0, 
        u = (u = u + Math.imul(_, J) | 0) + Math.imul(M, Y) | 0, h = h + Math.imul(M, J) | 0, s = s + Math.imul(g, X) | 0, u = (u = u + Math.imul(g, tt) | 0) + Math.imul(y, X) | 0, 
        h = h + Math.imul(y, tt) | 0, s = s + Math.imul(p, rt) | 0, u = (u = u + Math.imul(p, nt) | 0) + Math.imul(m, rt) | 0, h = h + Math.imul(m, nt) | 0;
        var bt = (a + (s = s + Math.imul(c, ot) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, at) | 0) + Math.imul(f, ot) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, at) | 0) + (u >>> 13) | 0) + (bt >>> 26) | 0, bt &= 67108863, s = Math.imul(L, H), u = (u = Math.imul(L, F)) + Math.imul(P, H) | 0, 
        h = Math.imul(P, F), s = s + Math.imul(C, D) | 0, u = (u = u + Math.imul(C, Z) | 0) + Math.imul(R, D) | 0, h = h + Math.imul(R, Z) | 0, 
        s = s + Math.imul(E, V) | 0, u = (u = u + Math.imul(E, $) | 0) + Math.imul(S, V) | 0, h = h + Math.imul(S, $) | 0, s = s + Math.imul(k, Y) | 0, 
        u = (u = u + Math.imul(k, J) | 0) + Math.imul(x, Y) | 0, h = h + Math.imul(x, J) | 0, s = s + Math.imul(_, X) | 0, u = (u = u + Math.imul(_, tt) | 0) + Math.imul(M, X) | 0, 
        h = h + Math.imul(M, tt) | 0, s = s + Math.imul(g, rt) | 0, u = (u = u + Math.imul(g, nt) | 0) + Math.imul(y, rt) | 0, h = h + Math.imul(y, nt) | 0, 
        s = s + Math.imul(p, ot) | 0, u = (u = u + Math.imul(p, at) | 0) + Math.imul(m, ot) | 0, h = h + Math.imul(m, at) | 0;
        var kt = (a + (s = s + Math.imul(c, ut) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ht) | 0) + Math.imul(f, ut) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ht) | 0) + (u >>> 13) | 0) + (kt >>> 26) | 0, kt &= 67108863, s = Math.imul(O, H), u = (u = Math.imul(O, F)) + Math.imul(N, H) | 0, 
        h = Math.imul(N, F), s = s + Math.imul(L, D) | 0, u = (u = u + Math.imul(L, Z) | 0) + Math.imul(P, D) | 0, h = h + Math.imul(P, Z) | 0, 
        s = s + Math.imul(C, V) | 0, u = (u = u + Math.imul(C, $) | 0) + Math.imul(R, V) | 0, h = h + Math.imul(R, $) | 0, s = s + Math.imul(E, Y) | 0, 
        u = (u = u + Math.imul(E, J) | 0) + Math.imul(S, Y) | 0, h = h + Math.imul(S, J) | 0, s = s + Math.imul(k, X) | 0, u = (u = u + Math.imul(k, tt) | 0) + Math.imul(x, X) | 0, 
        h = h + Math.imul(x, tt) | 0, s = s + Math.imul(_, rt) | 0, u = (u = u + Math.imul(_, nt) | 0) + Math.imul(M, rt) | 0, h = h + Math.imul(M, nt) | 0, 
        s = s + Math.imul(g, ot) | 0, u = (u = u + Math.imul(g, at) | 0) + Math.imul(y, ot) | 0, h = h + Math.imul(y, at) | 0, s = s + Math.imul(p, ut) | 0, 
        u = (u = u + Math.imul(p, ht) | 0) + Math.imul(m, ut) | 0, h = h + Math.imul(m, ht) | 0;
        var xt = (a + (s = s + Math.imul(c, ct) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, ft) | 0) + Math.imul(f, ct) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, ft) | 0) + (u >>> 13) | 0) + (xt >>> 26) | 0, xt &= 67108863, s = Math.imul(j, H), u = (u = Math.imul(j, F)) + Math.imul(q, H) | 0, 
        h = Math.imul(q, F), s = s + Math.imul(O, D) | 0, u = (u = u + Math.imul(O, Z) | 0) + Math.imul(N, D) | 0, h = h + Math.imul(N, Z) | 0, 
        s = s + Math.imul(L, V) | 0, u = (u = u + Math.imul(L, $) | 0) + Math.imul(P, V) | 0, h = h + Math.imul(P, $) | 0, s = s + Math.imul(C, Y) | 0, 
        u = (u = u + Math.imul(C, J) | 0) + Math.imul(R, Y) | 0, h = h + Math.imul(R, J) | 0, s = s + Math.imul(E, X) | 0, u = (u = u + Math.imul(E, tt) | 0) + Math.imul(S, X) | 0, 
        h = h + Math.imul(S, tt) | 0, s = s + Math.imul(k, rt) | 0, u = (u = u + Math.imul(k, nt) | 0) + Math.imul(x, rt) | 0, h = h + Math.imul(x, nt) | 0, 
        s = s + Math.imul(_, ot) | 0, u = (u = u + Math.imul(_, at) | 0) + Math.imul(M, ot) | 0, h = h + Math.imul(M, at) | 0, s = s + Math.imul(g, ut) | 0, 
        u = (u = u + Math.imul(g, ht) | 0) + Math.imul(y, ut) | 0, h = h + Math.imul(y, ht) | 0, s = s + Math.imul(p, ct) | 0, u = (u = u + Math.imul(p, ft) | 0) + Math.imul(m, ct) | 0, 
        h = h + Math.imul(m, ft) | 0;
        var At = (a + (s = s + Math.imul(c, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(c, mt) | 0) + Math.imul(f, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(f, mt) | 0) + (u >>> 13) | 0) + (At >>> 26) | 0, At &= 67108863, s = Math.imul(j, D), u = (u = Math.imul(j, Z)) + Math.imul(q, D) | 0, 
        h = Math.imul(q, Z), s = s + Math.imul(O, V) | 0, u = (u = u + Math.imul(O, $) | 0) + Math.imul(N, V) | 0, h = h + Math.imul(N, $) | 0, 
        s = s + Math.imul(L, Y) | 0, u = (u = u + Math.imul(L, J) | 0) + Math.imul(P, Y) | 0, h = h + Math.imul(P, J) | 0, s = s + Math.imul(C, X) | 0, 
        u = (u = u + Math.imul(C, tt) | 0) + Math.imul(R, X) | 0, h = h + Math.imul(R, tt) | 0, s = s + Math.imul(E, rt) | 0, u = (u = u + Math.imul(E, nt) | 0) + Math.imul(S, rt) | 0, 
        h = h + Math.imul(S, nt) | 0, s = s + Math.imul(k, ot) | 0, u = (u = u + Math.imul(k, at) | 0) + Math.imul(x, ot) | 0, h = h + Math.imul(x, at) | 0, 
        s = s + Math.imul(_, ut) | 0, u = (u = u + Math.imul(_, ht) | 0) + Math.imul(M, ut) | 0, h = h + Math.imul(M, ht) | 0, s = s + Math.imul(g, ct) | 0, 
        u = (u = u + Math.imul(g, ft) | 0) + Math.imul(y, ct) | 0, h = h + Math.imul(y, ft) | 0;
        var Et = (a + (s = s + Math.imul(p, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(p, mt) | 0) + Math.imul(m, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(m, mt) | 0) + (u >>> 13) | 0) + (Et >>> 26) | 0, Et &= 67108863, s = Math.imul(j, V), u = (u = Math.imul(j, $)) + Math.imul(q, V) | 0, 
        h = Math.imul(q, $), s = s + Math.imul(O, Y) | 0, u = (u = u + Math.imul(O, J) | 0) + Math.imul(N, Y) | 0, h = h + Math.imul(N, J) | 0, 
        s = s + Math.imul(L, X) | 0, u = (u = u + Math.imul(L, tt) | 0) + Math.imul(P, X) | 0, h = h + Math.imul(P, tt) | 0, s = s + Math.imul(C, rt) | 0, 
        u = (u = u + Math.imul(C, nt) | 0) + Math.imul(R, rt) | 0, h = h + Math.imul(R, nt) | 0, s = s + Math.imul(E, ot) | 0, u = (u = u + Math.imul(E, at) | 0) + Math.imul(S, ot) | 0, 
        h = h + Math.imul(S, at) | 0, s = s + Math.imul(k, ut) | 0, u = (u = u + Math.imul(k, ht) | 0) + Math.imul(x, ut) | 0, h = h + Math.imul(x, ht) | 0, 
        s = s + Math.imul(_, ct) | 0, u = (u = u + Math.imul(_, ft) | 0) + Math.imul(M, ct) | 0, h = h + Math.imul(M, ft) | 0;
        var St = (a + (s = s + Math.imul(g, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(g, mt) | 0) + Math.imul(y, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(y, mt) | 0) + (u >>> 13) | 0) + (St >>> 26) | 0, St &= 67108863, s = Math.imul(j, Y), u = (u = Math.imul(j, J)) + Math.imul(q, Y) | 0, 
        h = Math.imul(q, J), s = s + Math.imul(O, X) | 0, u = (u = u + Math.imul(O, tt) | 0) + Math.imul(N, X) | 0, h = h + Math.imul(N, tt) | 0, 
        s = s + Math.imul(L, rt) | 0, u = (u = u + Math.imul(L, nt) | 0) + Math.imul(P, rt) | 0, h = h + Math.imul(P, nt) | 0, s = s + Math.imul(C, ot) | 0, 
        u = (u = u + Math.imul(C, at) | 0) + Math.imul(R, ot) | 0, h = h + Math.imul(R, at) | 0, s = s + Math.imul(E, ut) | 0, u = (u = u + Math.imul(E, ht) | 0) + Math.imul(S, ut) | 0, 
        h = h + Math.imul(S, ht) | 0, s = s + Math.imul(k, ct) | 0, u = (u = u + Math.imul(k, ft) | 0) + Math.imul(x, ct) | 0, h = h + Math.imul(x, ft) | 0;
        var Tt = (a + (s = s + Math.imul(_, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(_, mt) | 0) + Math.imul(M, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(M, mt) | 0) + (u >>> 13) | 0) + (Tt >>> 26) | 0, Tt &= 67108863, s = Math.imul(j, X), u = (u = Math.imul(j, tt)) + Math.imul(q, X) | 0, 
        h = Math.imul(q, tt), s = s + Math.imul(O, rt) | 0, u = (u = u + Math.imul(O, nt) | 0) + Math.imul(N, rt) | 0, h = h + Math.imul(N, nt) | 0, 
        s = s + Math.imul(L, ot) | 0, u = (u = u + Math.imul(L, at) | 0) + Math.imul(P, ot) | 0, h = h + Math.imul(P, at) | 0, s = s + Math.imul(C, ut) | 0, 
        u = (u = u + Math.imul(C, ht) | 0) + Math.imul(R, ut) | 0, h = h + Math.imul(R, ht) | 0, s = s + Math.imul(E, ct) | 0, u = (u = u + Math.imul(E, ft) | 0) + Math.imul(S, ct) | 0, 
        h = h + Math.imul(S, ft) | 0;
        var Ct = (a + (s = s + Math.imul(k, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(k, mt) | 0) + Math.imul(x, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(x, mt) | 0) + (u >>> 13) | 0) + (Ct >>> 26) | 0, Ct &= 67108863, s = Math.imul(j, rt), u = (u = Math.imul(j, nt)) + Math.imul(q, rt) | 0, 
        h = Math.imul(q, nt), s = s + Math.imul(O, ot) | 0, u = (u = u + Math.imul(O, at) | 0) + Math.imul(N, ot) | 0, h = h + Math.imul(N, at) | 0, 
        s = s + Math.imul(L, ut) | 0, u = (u = u + Math.imul(L, ht) | 0) + Math.imul(P, ut) | 0, h = h + Math.imul(P, ht) | 0, s = s + Math.imul(C, ct) | 0, 
        u = (u = u + Math.imul(C, ft) | 0) + Math.imul(R, ct) | 0, h = h + Math.imul(R, ft) | 0;
        var Rt = (a + (s = s + Math.imul(E, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(E, mt) | 0) + Math.imul(S, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(S, mt) | 0) + (u >>> 13) | 0) + (Rt >>> 26) | 0, Rt &= 67108863, s = Math.imul(j, ot), u = (u = Math.imul(j, at)) + Math.imul(q, ot) | 0, 
        h = Math.imul(q, at), s = s + Math.imul(O, ut) | 0, u = (u = u + Math.imul(O, ht) | 0) + Math.imul(N, ut) | 0, h = h + Math.imul(N, ht) | 0, 
        s = s + Math.imul(L, ct) | 0, u = (u = u + Math.imul(L, ft) | 0) + Math.imul(P, ct) | 0, h = h + Math.imul(P, ft) | 0;
        var Bt = (a + (s = s + Math.imul(C, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(C, mt) | 0) + Math.imul(R, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(R, mt) | 0) + (u >>> 13) | 0) + (Bt >>> 26) | 0, Bt &= 67108863, s = Math.imul(j, ut), u = (u = Math.imul(j, ht)) + Math.imul(q, ut) | 0, 
        h = Math.imul(q, ht), s = s + Math.imul(O, ct) | 0, u = (u = u + Math.imul(O, ft) | 0) + Math.imul(N, ct) | 0, h = h + Math.imul(N, ft) | 0;
        var Lt = (a + (s = s + Math.imul(L, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(L, mt) | 0) + Math.imul(P, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(P, mt) | 0) + (u >>> 13) | 0) + (Lt >>> 26) | 0, Lt &= 67108863, s = Math.imul(j, ct), u = (u = Math.imul(j, ft)) + Math.imul(q, ct) | 0, 
        h = Math.imul(q, ft);
        var Pt = (a + (s = s + Math.imul(O, pt) | 0) | 0) + ((8191 & (u = (u = u + Math.imul(O, mt) | 0) + Math.imul(N, pt) | 0)) << 13) | 0;
        a = ((h = h + Math.imul(N, mt) | 0) + (u >>> 13) | 0) + (Pt >>> 26) | 0, Pt &= 67108863;
        var It = (a + (s = Math.imul(j, pt)) | 0) + ((8191 & (u = (u = Math.imul(j, mt)) + Math.imul(q, pt) | 0)) << 13) | 0;
        return a = ((h = Math.imul(q, mt)) + (u >>> 13) | 0) + (It >>> 26) | 0, It &= 67108863, o[0] = vt, o[1] = gt, o[2] = yt, 
        o[3] = wt, o[4] = _t, o[5] = Mt, o[6] = bt, o[7] = kt, o[8] = xt, o[9] = At, o[10] = Et, o[11] = St, o[12] = Tt, o[13] = Ct, 
        o[14] = Rt, o[15] = Bt, o[16] = Lt, o[17] = Pt, o[18] = It, 0 !== a && (o[19] = a, r.length++), r;
      };
      function m(t, e, r) {
        return (new v).mulp(t, e, r);
      }
      function v(t, e) {
        this.x = t, this.y = e;
      }
      Math.imul || (p = d), o.prototype.mulTo = function(t, e) {
        var r;
        var n = this.length + t.length;
        return r = 10 === this.length && 10 === t.length ? p(this, t, e) : n < 63 ? d(this, t, e) : n < 1024 ? function(t, e, r) {
          r.negative = e.negative ^ t.negative, r.length = t.length + e.length;
          var n = 0;
          var i = 0;
          for (var o = 0; o < r.length - 1; o++) {
            var a = i;
            i = 0;
            var s = 67108863 & n;
            var u = Math.min(o, e.length - 1);
            for (var h = Math.max(0, o - t.length + 1); h <= u; h++) {
              var l = o - h;
              var c = (0 | t.words[l]) * (0 | e.words[h]);
              var f = 67108863 & c;
              s = 67108863 & (f = f + s | 0), i += (a = (a = a + (c / 67108864 | 0) | 0) + (f >>> 26) | 0) >>> 26, a &= 67108863;
            }
            r.words[o] = s, n = a, a = i;
          }
          return 0 !== n ? r.words[o] = n : r.length--, r.strip();
        }(this, t, e) : m(this, t, e), r;
      }, v.prototype.makeRBT = function(t) {
        var e = new Array(t);
        var r = o.prototype._countBits(t) - 1;
        for (var n = 0; n < t; n++) e[n] = this.revBin(n, r, t);
        return e;
      }, v.prototype.revBin = function(t, e, r) {
        if (0 === t || t === r - 1) return t;
        var n = 0;
        for (var i = 0; i < e; i++) n |= (1 & t) << e - i - 1, t >>= 1;
        return n;
      }, v.prototype.permute = function(t, e, r, n, i, o) {
        for (var a = 0; a < o; a++) n[a] = e[t[a]], i[a] = r[t[a]];
      }, v.prototype.transform = function(t, e, r, n, i, o) {
        this.permute(o, t, e, r, n, i);
        for (var a = 1; a < i; a <<= 1) {
          var s = a << 1;
          var u = Math.cos(2 * Math.PI / s);
          var h = Math.sin(2 * Math.PI / s);
          for (var l = 0; l < i; l += s) {
            var c = u;
            var f = h;
            for (var d = 0; d < a; d++) {
              var p = r[l + d];
              var m = n[l + d];
              var v = r[l + d + a];
              var g = n[l + d + a];
              var y = c * v - f * g;
              g = c * g + f * v, v = y, r[l + d] = p + v, n[l + d] = m + g, r[l + d + a] = p - v, n[l + d + a] = m - g, d !== s && (y = u * c - h * f, 
              f = u * f + h * c, c = y);
            }
          }
        }
      }, v.prototype.guessLen13b = function(t, e) {
        var r = 1 | Math.max(e, t);
        var n = 1 & r;
        var i = 0;
        for (r = r / 2 | 0; r; r >>>= 1) i++;
        return 1 << i + 1 + n;
      }, v.prototype.conjugate = function(t, e, r) {
        if (!(r <= 1)) for (var n = 0; n < r / 2; n++) {
          var i = t[n];
          t[n] = t[r - n - 1], t[r - n - 1] = i, i = e[n], e[n] = -e[r - n - 1], e[r - n - 1] = -i;
        }
      }, v.prototype.normalize13b = function(t, e) {
        var r = 0;
        for (var n = 0; n < e / 2; n++) {
          var i = 8192 * Math.round(t[2 * n + 1] / e) + Math.round(t[2 * n] / e) + r;
          t[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0;
        }
        return t;
      }, v.prototype.convert13b = function(t, e, r, i) {
        var o = 0;
        for (var a = 0; a < e; a++) o += 0 | t[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
        for (a = 2 * e; a < i; ++a) r[a] = 0;
        n(0 === o), n(0 == (-8192 & o));
      }, v.prototype.stub = function(t) {
        var e = new Array(t);
        for (var r = 0; r < t; r++) e[r] = 0;
        return e;
      }, v.prototype.mulp = function(t, e, r) {
        var n = 2 * this.guessLen13b(t.length, e.length);
        var i = this.makeRBT(n);
        var o = this.stub(n);
        var a = new Array(n);
        var s = new Array(n);
        var u = new Array(n);
        var h = new Array(n);
        var l = new Array(n);
        var c = new Array(n);
        var f = r.words;
        f.length = n, this.convert13b(t.words, t.length, a, n), this.convert13b(e.words, e.length, h, n), this.transform(a, o, s, u, n, i), 
        this.transform(h, o, l, c, n, i);
        for (var d = 0; d < n; d++) {
          var p = s[d] * l[d] - u[d] * c[d];
          u[d] = s[d] * c[d] + u[d] * l[d], s[d] = p;
        }
        return this.conjugate(s, u, n), this.transform(s, u, f, o, n, i), this.conjugate(f, o, n), this.normalize13b(f, n), r.negative = t.negative ^ e.negative, 
        r.length = t.length + e.length, r.strip();
      }, o.prototype.mul = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), this.mulTo(t, e);
      }, o.prototype.mulf = function(t) {
        var e = new o(null);
        return e.words = new Array(this.length + t.length), m(this, t, e);
      }, o.prototype.imul = function(t) {
        return this.clone().mulTo(t, this);
      }, o.prototype.imuln = function(t) {
        n('number' == typeof t), n(t < 67108864);
        var e = 0;
        for (var r = 0; r < this.length; r++) {
          var i = (0 | this.words[r]) * t;
          var o = (67108863 & i) + (67108863 & e);
          e >>= 26, e += i / 67108864 | 0, e += o >>> 26, this.words[r] = 67108863 & o;
        }
        return 0 !== e && (this.words[r] = e, this.length++), this;
      }, o.prototype.muln = function(t) {
        return this.clone().imuln(t);
      }, o.prototype.sqr = function() {
        return this.mul(this);
      }, o.prototype.isqr = function() {
        return this.imul(this.clone());
      }, o.prototype.pow = function(t) {
        var e = function(t) {
          var e = new Array(t.bitLength());
          for (var r = 0; r < e.length; r++) {
            var n = r / 26 | 0;
            var i = r % 26;
            e[r] = (t.words[n] & 1 << i) >>> i;
          }
          return e;
        }(t);
        if (0 === e.length) return new o(1);
        var r = this;
        for (var n = 0; n < e.length && 0 === e[n]; n++, r = r.sqr()) ;
        if (++n < e.length) for (var i = r.sqr(); n < e.length; n++, i = i.sqr()) 0 !== e[n] && (r = r.mul(i));
        return r;
      }, o.prototype.iushln = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 67108863 >>> 26 - e << 26 - e;
        var o;
        if (0 !== e) {
          var a = 0;
          for (o = 0; o < this.length; o++) {
            var s = this.words[o] & i;
            var u = (0 | this.words[o]) - s << e;
            this.words[o] = u | a, a = s >>> 26 - e;
          }
          a && (this.words[o] = a, this.length++);
        }
        if (0 !== r) {
          for (o = this.length - 1; o >= 0; o--) this.words[o + r] = this.words[o];
          for (o = 0; o < r; o++) this.words[o] = 0;
          this.length += r;
        }
        return this.strip();
      }, o.prototype.ishln = function(t) {
        return n(0 === this.negative), this.iushln(t);
      }, o.prototype.iushrn = function(t, e, r) {
        var i;
        n('number' == typeof t && t >= 0), i = e ? (e - e % 26) / 26 : 0;
        var o = t % 26;
        var a = Math.min((t - o) / 26, this.length);
        var s = 67108863 ^ 67108863 >>> o << o;
        var u = r;
        if (i -= a, i = Math.max(0, i), u) {
          for (var h = 0; h < a; h++) u.words[h] = this.words[h];
          u.length = a;
        }
        if (0 === a) ; else if (this.length > a) for (this.length -= a, h = 0; h < this.length; h++) this.words[h] = this.words[h + a]; else this.words[0] = 0, 
        this.length = 1;
        var l = 0;
        for (h = this.length - 1; h >= 0 && (0 !== l || h >= i); h--) {
          var c = 0 | this.words[h];
          this.words[h] = l << 26 - o | c >>> o, l = c & s;
        }
        return u && 0 !== l && (u.words[u.length++] = l), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip();
      }, o.prototype.ishrn = function(t, e, r) {
        return n(0 === this.negative), this.iushrn(t, e, r);
      }, o.prototype.shln = function(t) {
        return this.clone().ishln(t);
      }, o.prototype.ushln = function(t) {
        return this.clone().iushln(t);
      }, o.prototype.shrn = function(t) {
        return this.clone().ishrn(t);
      }, o.prototype.ushrn = function(t) {
        return this.clone().iushrn(t);
      }, o.prototype.testn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        return !(this.length <= r) && !!(this.words[r] & i);
      }, o.prototype.imaskn = function(t) {
        n('number' == typeof t && t >= 0);
        var e = t % 26;
        var r = (t - e) / 26;
        if (n(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= r) return this;
        if (0 !== e && r++, this.length = Math.min(r, this.length), 0 !== e) {
          var i = 67108863 ^ 67108863 >>> e << e;
          this.words[this.length - 1] &= i;
        }
        return this.strip();
      }, o.prototype.maskn = function(t) {
        return this.clone().imaskn(t);
      }, o.prototype.iaddn = function(t) {
        return n('number' == typeof t), n(t < 67108864), t < 0 ? this.isubn(-t) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < t ? (this.words[0] = t - (0 | this.words[0]), 
        this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
      }, o.prototype._iaddn = function(t) {
        this.words[0] += t;
        for (var e = 0; e < this.length && this.words[e] >= 67108864; e++) this.words[e] -= 67108864, e === this.length - 1 ? this.words[e + 1] = 1 : this.words[e + 1]++;
        return this.length = Math.max(this.length, e + 1), this;
      }, o.prototype.isubn = function(t) {
        if (n('number' == typeof t), n(t < 67108864), t < 0) return this.iaddn(-t);
        if (0 !== this.negative) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
        if (this.words[0] -= t, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1; else for (var e = 0; e < this.length && this.words[e] < 0; e++) this.words[e] += 67108864, 
        this.words[e + 1] -= 1;
        return this.strip();
      }, o.prototype.addn = function(t) {
        return this.clone().iaddn(t);
      }, o.prototype.subn = function(t) {
        return this.clone().isubn(t);
      }, o.prototype.iabs = function() {
        return this.negative = 0, this;
      }, o.prototype.abs = function() {
        return this.clone().iabs();
      }, o.prototype._ishlnsubmul = function(t, e, r) {
        var i = t.length + r;
        var o;
        var a;
        this._expand(i);
        var s = 0;
        for (o = 0; o < t.length; o++) {
          a = (0 | this.words[o + r]) + s;
          var u = (0 | t.words[o]) * e;
          s = ((a -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[o + r] = 67108863 & a;
        }
        for (;o < this.length - r; o++) s = (a = (0 | this.words[o + r]) + s) >> 26, this.words[o + r] = 67108863 & a;
        if (0 === s) return this.strip();
        for (n(-1 === s), s = 0, o = 0; o < this.length; o++) s = (a = -(0 | this.words[o]) + s) >> 26, this.words[o] = 67108863 & a;
        return this.negative = 1, this.strip();
      }, o.prototype._wordDiv = function(t, e) {
        var r = (this.length, t.length);
        var n = this.clone();
        var i = t;
        var a = 0 | i.words[i.length - 1];
        0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
        var s = n.length - i.length;
        var u;
        if ('mod' !== e) {
          (u = new o(null)).length = s + 1, u.words = new Array(u.length);
          for (var h = 0; h < u.length; h++) u.words[h] = 0;
        }
        var l = n.clone()._ishlnsubmul(i, 1, s);
        0 === l.negative && (n = l, u && (u.words[s] = 1));
        for (var c = s - 1; c >= 0; c--) {
          var f = 67108864 * (0 | n.words[i.length + c]) + (0 | n.words[i.length + c - 1]);
          for (f = Math.min(f / a | 0, 67108863), n._ishlnsubmul(i, f, c); 0 !== n.negative; ) f--, n.negative = 0, n._ishlnsubmul(i, 1, c), 
          n.isZero() || (n.negative ^= 1);
          u && (u.words[c] = f);
        }
        return u && u.strip(), n.strip(), 'div' !== e && 0 !== r && n.iushrn(r), {
          div: u || null,
          mod: n
        };
      }, o.prototype.divmod = function(t, e, r) {
        return n(!t.isZero()), this.isZero() ? {
          div: new o(0),
          mod: new o(0)
        } : 0 !== this.negative && 0 === t.negative ? (s = this.neg().divmod(t, e), 'mod' !== e && (i = s.div.neg()), 'div' !== e && (a = s.mod.neg(), 
        r && 0 !== a.negative && a.iadd(t)), {
          div: i,
          mod: a
        }) : 0 === this.negative && 0 !== t.negative ? (s = this.divmod(t.neg(), e), 'mod' !== e && (i = s.div.neg()), {
          div: i,
          mod: s.mod
        }) : 0 != (this.negative & t.negative) ? (s = this.neg().divmod(t.neg(), e), 'div' !== e && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(t)), 
        {
          div: s.div,
          mod: a
        }) : t.length > this.length || this.cmp(t) < 0 ? {
          div: new o(0),
          mod: this
        } : 1 === t.length ? 'div' === e ? {
          div: this.divn(t.words[0]),
          mod: null
        } : 'mod' === e ? {
          div: null,
          mod: new o(this.modn(t.words[0]))
        } : {
          div: this.divn(t.words[0]),
          mod: new o(this.modn(t.words[0]))
        } : this._wordDiv(t, e);
        var i, a, s;
      }, o.prototype.div = function(t) {
        return this.divmod(t, 'div', !1).div;
      }, o.prototype.mod = function(t) {
        return this.divmod(t, 'mod', !1).mod;
      }, o.prototype.umod = function(t) {
        return this.divmod(t, 'mod', !0).mod;
      }, o.prototype.divRound = function(t) {
        var e = this.divmod(t);
        if (e.mod.isZero()) return e.div;
        var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod;
        var n = t.ushrn(1);
        var i = t.andln(1);
        var o = r.cmp(n);
        return o < 0 || 1 === i && 0 === o ? e.div : 0 !== e.div.negative ? e.div.isubn(1) : e.div.iaddn(1);
      }, o.prototype.modn = function(t) {
        n(t <= 67108863);
        var e = (1 << 26) % t;
        var r = 0;
        for (var i = this.length - 1; i >= 0; i--) r = (e * r + (0 | this.words[i])) % t;
        return r;
      }, o.prototype.idivn = function(t) {
        n(t <= 67108863);
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var i = (0 | this.words[r]) + 67108864 * e;
          this.words[r] = i / t | 0, e = i % t;
        }
        return this.strip();
      }, o.prototype.divn = function(t) {
        return this.clone().idivn(t);
      }, o.prototype.egcd = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = new o(0);
        var u = new o(1);
        var h = 0;
        for (;e.isEven() && r.isEven(); ) e.iushrn(1), r.iushrn(1), ++h;
        var l = r.clone();
        var c = e.clone();
        for (;!e.isZero(); ) {
          for (var f = 0, d = 1; 0 == (e.words[0] & d) && f < 26; ++f, d <<= 1) ;
          if (f > 0) for (e.iushrn(f); f-- > 0; ) (i.isOdd() || a.isOdd()) && (i.iadd(l), a.isub(c)), i.iushrn(1), a.iushrn(1);
          for (var p = 0, m = 1; 0 == (r.words[0] & m) && p < 26; ++p, m <<= 1) ;
          if (p > 0) for (r.iushrn(p); p-- > 0; ) (s.isOdd() || u.isOdd()) && (s.iadd(l), u.isub(c)), s.iushrn(1), u.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(s), a.isub(u)) : (r.isub(e), s.isub(i), u.isub(a));
        }
        return {
          a: s,
          b: u,
          gcd: r.iushln(h)
        };
      }, o.prototype._invmp = function(t) {
        n(0 === t.negative), n(!t.isZero());
        var e = this;
        var r = t.clone();
        e = 0 !== e.negative ? e.umod(t) : e.clone();
        var i = new o(1);
        var a = new o(0);
        var s = r.clone();
        for (;e.cmpn(1) > 0 && r.cmpn(1) > 0; ) {
          for (var u = 0, h = 1; 0 == (e.words[0] & h) && u < 26; ++u, h <<= 1) ;
          if (u > 0) for (e.iushrn(u); u-- > 0; ) i.isOdd() && i.iadd(s), i.iushrn(1);
          for (var l = 0, c = 1; 0 == (r.words[0] & c) && l < 26; ++l, c <<= 1) ;
          if (l > 0) for (r.iushrn(l); l-- > 0; ) a.isOdd() && a.iadd(s), a.iushrn(1);
          e.cmp(r) >= 0 ? (e.isub(r), i.isub(a)) : (r.isub(e), a.isub(i));
        }
        var f;
        return (f = 0 === e.cmpn(1) ? i : a).cmpn(0) < 0 && f.iadd(t), f;
      }, o.prototype.gcd = function(t) {
        if (this.isZero()) return t.abs();
        if (t.isZero()) return this.abs();
        var e = this.clone();
        var r = t.clone();
        e.negative = 0, r.negative = 0;
        for (var n = 0; e.isEven() && r.isEven(); n++) e.iushrn(1), r.iushrn(1);
        for (;;) {
          for (;e.isEven(); ) e.iushrn(1);
          for (;r.isEven(); ) r.iushrn(1);
          var i = e.cmp(r);
          if (i < 0) {
            var o = e;
            e = r, r = o;
          } else if (0 === i || 0 === r.cmpn(1)) break;
          e.isub(r);
        }
        return r.iushln(n);
      }, o.prototype.invm = function(t) {
        return this.egcd(t).a.umod(t);
      }, o.prototype.isEven = function() {
        return 0 == (1 & this.words[0]);
      }, o.prototype.isOdd = function() {
        return 1 == (1 & this.words[0]);
      }, o.prototype.andln = function(t) {
        return this.words[0] & t;
      }, o.prototype.bincn = function(t) {
        n('number' == typeof t);
        var e = t % 26;
        var r = (t - e) / 26;
        var i = 1 << e;
        if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
        var o = i;
        for (var a = r; 0 !== o && a < this.length; a++) {
          var s = 0 | this.words[a];
          o = (s += o) >>> 26, s &= 67108863, this.words[a] = s;
        }
        return 0 !== o && (this.words[a] = o, this.length++), this;
      }, o.prototype.isZero = function() {
        return 1 === this.length && 0 === this.words[0];
      }, o.prototype.cmpn = function(t) {
        var e = t < 0;
        if (0 !== this.negative && !e) return -1;
        if (0 === this.negative && e) return 1;
        var r;
        if (this.strip(), this.length > 1) r = 1; else {
          e && (t = -t), n(t <= 67108863, 'Number is too big');
          var i = 0 | this.words[0];
          r = i === t ? 0 : i < t ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -r : r;
      }, o.prototype.cmp = function(t) {
        if (0 !== this.negative && 0 === t.negative) return -1;
        if (0 === this.negative && 0 !== t.negative) return 1;
        var e = this.ucmp(t);
        return 0 !== this.negative ? 0 | -e : e;
      }, o.prototype.ucmp = function(t) {
        if (this.length > t.length) return 1;
        if (this.length < t.length) return -1;
        var e = 0;
        for (var r = this.length - 1; r >= 0; r--) {
          var n = 0 | this.words[r];
          var i = 0 | t.words[r];
          if (n !== i) {
            n < i ? e = -1 : n > i && (e = 1);
            break;
          }
        }
        return e;
      }, o.prototype.gtn = function(t) {
        return 1 === this.cmpn(t);
      }, o.prototype.gt = function(t) {
        return 1 === this.cmp(t);
      }, o.prototype.gten = function(t) {
        return this.cmpn(t) >= 0;
      }, o.prototype.gte = function(t) {
        return this.cmp(t) >= 0;
      }, o.prototype.ltn = function(t) {
        return -1 === this.cmpn(t);
      }, o.prototype.lt = function(t) {
        return -1 === this.cmp(t);
      }, o.prototype.lten = function(t) {
        return this.cmpn(t) <= 0;
      }, o.prototype.lte = function(t) {
        return this.cmp(t) <= 0;
      }, o.prototype.eqn = function(t) {
        return 0 === this.cmpn(t);
      }, o.prototype.eq = function(t) {
        return 0 === this.cmp(t);
      }, o.red = function(t) {
        return new k(t);
      }, o.prototype.toRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), n(0 === this.negative, 'red works only with positives'), t.convertTo(this)._forceRed(t);
      }, o.prototype.fromRed = function() {
        return n(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
      }, o.prototype._forceRed = function(t) {
        return this.red = t, this;
      }, o.prototype.forceRed = function(t) {
        return n(!this.red, 'Already a number in reduction context'), this._forceRed(t);
      }, o.prototype.redAdd = function(t) {
        return n(this.red, 'redAdd works only with red numbers'), this.red.add(this, t);
      }, o.prototype.redIAdd = function(t) {
        return n(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, t);
      }, o.prototype.redSub = function(t) {
        return n(this.red, 'redSub works only with red numbers'), this.red.sub(this, t);
      }, o.prototype.redISub = function(t) {
        return n(this.red, 'redISub works only with red numbers'), this.red.isub(this, t);
      }, o.prototype.redShl = function(t) {
        return n(this.red, 'redShl works only with red numbers'), this.red.shl(this, t);
      }, o.prototype.redMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.mul(this, t);
      }, o.prototype.redIMul = function(t) {
        return n(this.red, 'redMul works only with red numbers'), this.red._verify2(this, t), this.red.imul(this, t);
      }, o.prototype.redSqr = function() {
        return n(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
      }, o.prototype.redISqr = function() {
        return n(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
      }, o.prototype.redSqrt = function() {
        return n(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
      }, o.prototype.redInvm = function() {
        return n(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
      }, o.prototype.redNeg = function() {
        return n(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
      }, o.prototype.redPow = function(t) {
        return n(this.red && !t.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, t);
      };
      var g = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
      };
      function y(t, e) {
        this.name = t, this.p = new o(e, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
      }
      function w() {
        y.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
      }
      function _() {
        y.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
      }
      function M() {
        y.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
      }
      function b() {
        y.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
      }
      function k(t) {
        if ('string' == typeof t) {
          var e = o._prime(t);
          this.m = e.p, this.prime = e;
        } else n(t.gtn(1), 'modulus must be greater than 1'), this.m = t, this.prime = null;
      }
      function x(t) {
        k.call(this, t), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), 
        this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), 
        this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
      }
      y.prototype._tmp = function() {
        var t = new o(null);
        return t.words = new Array(Math.ceil(this.n / 13)), t;
      }, y.prototype.ireduce = function(t) {
        var e = t;
        var r;
        do {
          this.split(e, this.tmp), r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength();
        } while (r > this.n);
        var n = r < this.n ? -1 : e.ucmp(this.p);
        return 0 === n ? (e.words[0] = 0, e.length = 1) : n > 0 ? e.isub(this.p) : void 0 !== e.strip ? e.strip() : e._strip(), 
        e;
      }, y.prototype.split = function(t, e) {
        t.iushrn(this.n, 0, e);
      }, y.prototype.imulK = function(t) {
        return t.imul(this.k);
      }, i(w, y), w.prototype.split = function(t, e) {
        var r = 4194303;
        var n = Math.min(t.length, 9);
        for (var i = 0; i < n; i++) e.words[i] = t.words[i];
        if (e.length = n, t.length <= 9) return t.words[0] = 0, void (t.length = 1);
        var o = t.words[9];
        for (e.words[e.length++] = o & r, i = 10; i < t.length; i++) {
          var a = 0 | t.words[i];
          t.words[i - 10] = (a & r) << 4 | o >>> 22, o = a;
        }
        o >>>= 22, t.words[i - 10] = o, 0 === o && t.length > 10 ? t.length -= 10 : t.length -= 9;
      }, w.prototype.imulK = function(t) {
        t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 0 | t.words[r];
          e += 977 * n, t.words[r] = 67108863 & e, e = 64 * n + (e / 67108864 | 0);
        }
        return 0 === t.words[t.length - 1] && (t.length--, 0 === t.words[t.length - 1] && t.length--), t;
      }, i(_, y), i(M, y), i(b, y), b.prototype.imulK = function(t) {
        var e = 0;
        for (var r = 0; r < t.length; r++) {
          var n = 19 * (0 | t.words[r]) + e;
          var i = 67108863 & n;
          n >>>= 26, t.words[r] = i, e = n;
        }
        return 0 !== e && (t.words[t.length++] = e), t;
      }, o._prime = function(t) {
        if (g[t]) return g[t];
        var e;
        if ('k256' === t) e = new w; else if ('p224' === t) e = new _; else if ('p192' === t) e = new M; else {
          if ('p25519' !== t) throw new Error('Unknown prime ' + t);
          e = new b;
        }
        return g[t] = e, e;
      }, k.prototype._verify1 = function(t) {
        n(0 === t.negative, 'red works only with positives'), n(t.red, 'red works only with red numbers');
      }, k.prototype._verify2 = function(t, e) {
        n(0 == (t.negative | e.negative), 'red works only with positives'), n(t.red && t.red === e.red, 'red works only with red numbers');
      }, k.prototype.imod = function(t) {
        return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
      }, k.prototype.neg = function(t) {
        return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
      }, k.prototype.add = function(t, e) {
        this._verify2(t, e);
        var r = t.add(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
      }, k.prototype.iadd = function(t, e) {
        this._verify2(t, e);
        var r = t.iadd(e);
        return r.cmp(this.m) >= 0 && r.isub(this.m), r;
      }, k.prototype.sub = function(t, e) {
        this._verify2(t, e);
        var r = t.sub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this);
      }, k.prototype.isub = function(t, e) {
        this._verify2(t, e);
        var r = t.isub(e);
        return r.cmpn(0) < 0 && r.iadd(this.m), r;
      }, k.prototype.shl = function(t, e) {
        return this._verify1(t), this.imod(t.ushln(e));
      }, k.prototype.imul = function(t, e) {
        return this._verify2(t, e), this.imod(t.imul(e));
      }, k.prototype.mul = function(t, e) {
        return this._verify2(t, e), this.imod(t.mul(e));
      }, k.prototype.isqr = function(t) {
        return this.imul(t, t.clone());
      }, k.prototype.sqr = function(t) {
        return this.mul(t, t);
      }, k.prototype.sqrt = function(t) {
        if (t.isZero()) return t.clone();
        var e = this.m.andln(3);
        if (n(e % 2 == 1), 3 === e) {
          var r = this.m.add(new o(1)).iushrn(2);
          return this.pow(t, r);
        }
        var i = this.m.subn(1);
        var a = 0;
        for (;!i.isZero() && 0 === i.andln(1); ) a++, i.iushrn(1);
        n(!i.isZero());
        var s = new o(1).toRed(this);
        var u = s.redNeg();
        var h = this.m.subn(1).iushrn(1);
        var l = this.m.bitLength();
        for (l = new o(2 * l * l).toRed(this); 0 !== this.pow(l, h).cmp(u); ) l.redIAdd(u);
        var c = this.pow(l, i);
        var f = this.pow(t, i.addn(1).iushrn(1));
        var d = this.pow(t, i);
        var p = a;
        for (;0 !== d.cmp(s); ) {
          var m = d;
          for (var v = 0; 0 !== m.cmp(s); v++) m = m.redSqr();
          n(v < p);
          var g = this.pow(c, new o(1).iushln(p - v - 1));
          f = f.redMul(g), c = g.redSqr(), d = d.redMul(c), p = v;
        }
        return f;
      }, k.prototype.invm = function(t) {
        var e = t._invmp(this.m);
        return 0 !== e.negative ? (e.negative = 0, this.imod(e).redNeg()) : this.imod(e);
      }, k.prototype.pow = function(t, e) {
        if (e.isZero()) return new o(1).toRed(this);
        if (0 === e.cmpn(1)) return t.clone();
        var r = new Array(16);
        r[0] = new o(1).toRed(this), r[1] = t;
        for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
        var i = r[0];
        var a = 0;
        var s = 0;
        var u = e.bitLength() % 26;
        for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
          var h = e.words[n];
          for (var l = u - 1; l >= 0; l--) {
            var c = h >> l & 1;
            i !== r[0] && (i = this.sqr(i)), 0 !== c || 0 !== a ? (a <<= 1, a |= c, (4 === ++s || 0 === n && 0 === l) && (i = this.mul(i, r[a]), 
            s = 0, a = 0)) : s = 0;
          }
          u = 26;
        }
        return i;
      }, k.prototype.convertTo = function(t) {
        var e = t.umod(this.m);
        return e === t ? e.clone() : e;
      }, k.prototype.convertFrom = function(t) {
        var e = t.clone();
        return e.red = null, e;
      }, o.mont = function(t) {
        return new x(t);
      }, i(x, k), x.prototype.convertTo = function(t) {
        return this.imod(t.ushln(this.shift));
      }, x.prototype.convertFrom = function(t) {
        var e = this.imod(t.mul(this.rinv));
        return e.red = null, e;
      }, x.prototype.imul = function(t, e) {
        if (t.isZero() || e.isZero()) return t.words[0] = 0, t.length = 1, t;
        var r = t.imul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var o = i;
        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this);
      }, x.prototype.mul = function(t, e) {
        if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
        var r = t.mul(e);
        var n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var i = r.isub(n).iushrn(this.shift);
        var a = i;
        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this);
      }, x.prototype.invm = function(t) {
        return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
      };
    }(t = r.nmd(t), this);
  },
  86918: (t, e, r) => {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t;
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    };
    var i = r(82192), o = i.keccak224, a = i.keccak384, s = i.keccak256, u = i.keccak512;
    var h = r(76666);
    var l = r(69282);
    var c = r(51675);
    var f = r(26949);
    var d = r(23482);
    var p = r(89509).Buffer;
    Object.assign(e, r(80884)), e.MAX_INTEGER = new f('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 16), 
    e.TWO_POW256 = new f('10000000000000000000000000000000000000000000000000000000000000000', 16), e.KECCAK256_NULL_S = 'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470', 
    e.SHA3_NULL_S = e.KECCAK256_NULL_S, e.KECCAK256_NULL = p.from(e.KECCAK256_NULL_S, 'hex'), e.SHA3_NULL = e.KECCAK256_NULL, 
    e.KECCAK256_RLP_ARRAY_S = '1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', e.SHA3_RLP_ARRAY_S = e.KECCAK256_RLP_ARRAY_S, 
    e.KECCAK256_RLP_ARRAY = p.from(e.KECCAK256_RLP_ARRAY_S, 'hex'), e.SHA3_RLP_ARRAY = e.KECCAK256_RLP_ARRAY, e.KECCAK256_RLP_S = '56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421', 
    e.SHA3_RLP_S = e.KECCAK256_RLP_S, e.KECCAK256_RLP = p.from(e.KECCAK256_RLP_S, 'hex'), e.SHA3_RLP = e.KECCAK256_RLP, e.BN = f, 
    e.rlp = c, e.secp256k1 = h, e.zeros = function(t) {
      return p.allocUnsafe(t).fill(0);
    }, e.zeroAddress = function() {
      var t = e.zeros(20);
      return e.bufferToHex(t);
    }, e.setLengthLeft = e.setLength = function(t, r, n) {
      var i = e.zeros(r);
      return t = e.toBuffer(t), n ? t.length < r ? (t.copy(i), i) : t.slice(0, r) : t.length < r ? (t.copy(i, r - t.length), i) : t.slice(-r);
    }, e.setLengthRight = function(t, r) {
      return e.setLength(t, r, !0);
    }, e.unpad = e.stripZeros = function(t) {
      var r = (t = e.stripHexPrefix(t))[0];
      for (;t.length > 0 && '0' === r.toString(); ) r = (t = t.slice(1))[0];
      return t;
    }, e.toBuffer = function(t) {
      if (!p.isBuffer(t)) if (Array.isArray(t)) t = p.from(t); else if ('string' == typeof t) t = e.isHexString(t) ? p.from(e.padToEven(e.stripHexPrefix(t)), 'hex') : p.from(t); else if ('number' == typeof t) t = e.intToBuffer(t); else if (null == t) t = p.allocUnsafe(0); else if (f.isBN(t)) t = t.toArrayLike(p); else {
        if (!t.toArray) throw new Error('invalid type');
        t = p.from(t.toArray());
      }
      return t;
    }, e.bufferToInt = function(t) {
      return new f(e.toBuffer(t)).toNumber();
    }, e.bufferToHex = function(t) {
      return '0x' + (t = e.toBuffer(t)).toString('hex');
    }, e.fromSigned = function(t) {
      return new f(t).fromTwos(256);
    }, e.toUnsigned = function(t) {
      return p.from(t.toTwos(256).toArray());
    }, e.keccak = function(t, r) {
      switch (t = e.toBuffer(t), r || (r = 256), r) {
       case 224:
        return o(t);

       case 256:
        return s(t);

       case 384:
        return a(t);

       case 512:
        return u(t);

       default:
        throw new Error('Invald algorithm: keccak' + r);
      }
    }, e.keccak256 = function(t) {
      return e.keccak(t);
    }, e.sha3 = e.keccak, e.sha256 = function(t) {
      return t = e.toBuffer(t), d('sha256').update(t).digest();
    }, e.ripemd160 = function(t, r) {
      t = e.toBuffer(t);
      var n = d('rmd160').update(t).digest();
      return !0 === r ? e.setLength(n, 32) : n;
    }, e.rlphash = function(t) {
      return e.keccak(c.encode(t));
    }, e.isValidPrivate = function(t) {
      return h.privateKeyVerify(t);
    }, e.isValidPublic = function(t, e) {
      return 64 === t.length ? h.publicKeyVerify(p.concat([ p.from([ 4 ]), t ])) : !!e && h.publicKeyVerify(t);
    }, e.pubToAddress = e.publicToAddress = function(t, r) {
      return t = e.toBuffer(t), r && 64 !== t.length && (t = h.publicKeyConvert(t, !1).slice(1)), l(64 === t.length), e.keccak(t).slice(-20);
    };
    var m = e.privateToPublic = function(t) {
      return t = e.toBuffer(t), h.publicKeyCreate(t, !1).slice(1);
    };
    e.importPublic = function(t) {
      return 64 !== (t = e.toBuffer(t)).length && (t = h.publicKeyConvert(t, !1).slice(1)), t;
    }, e.ecsign = function(t, e) {
      var r = h.sign(t, e);
      var n = {};
      return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n;
    }, e.hashPersonalMessage = function(t) {
      var r = e.toBuffer('Ethereum Signed Message:\n' + t.length.toString());
      return e.keccak(p.concat([ r, t ]));
    }, e.ecrecover = function(t, r, n, i) {
      var o = p.concat([ e.setLength(n, 32), e.setLength(i, 32) ], 64);
      var a = r - 27;
      if (0 !== a && 1 !== a) throw new Error('Invalid signature v value');
      var s = h.recover(t, o, a);
      return h.publicKeyConvert(s, !1).slice(1);
    }, e.toRpcSig = function(t, r, n) {
      if (27 !== t && 28 !== t) throw new Error('Invalid recovery id');
      return e.bufferToHex(p.concat([ e.setLengthLeft(r, 32), e.setLengthLeft(n, 32), e.toBuffer(t - 27) ]));
    }, e.fromRpcSig = function(t) {
      if (65 !== (t = e.toBuffer(t)).length) throw new Error('Invalid signature length');
      var r = t[64];
      return r < 27 && (r += 27), {
        v: r,
        r: t.slice(0, 32),
        s: t.slice(32, 64)
      };
    }, e.privateToAddress = function(t) {
      return e.publicToAddress(m(t));
    }, e.isValidAddress = function(t) {
      return /^0x[0-9a-fA-F]{40}$/.test(t);
    }, e.isZeroAddress = function(t) {
      return e.zeroAddress() === e.addHexPrefix(t);
    }, e.toChecksumAddress = function(t) {
      t = e.stripHexPrefix(t).toLowerCase();
      var r = e.keccak(t).toString('hex');
      var n = '0x';
      for (var i = 0; i < t.length; i++) parseInt(r[i], 16) >= 8 ? n += t[i].toUpperCase() : n += t[i];
      return n;
    }, e.isValidChecksumAddress = function(t) {
      return e.isValidAddress(t) && e.toChecksumAddress(t) === t;
    }, e.generateAddress = function(t, r) {
      return t = e.toBuffer(t), r = (r = new f(r)).isZero() ? null : p.from(r.toArray()), e.rlphash([ t, r ]).slice(-20);
    }, e.isPrecompiled = function(t) {
      var r = e.unpad(t);
      return 1 === r.length && r[0] >= 1 && r[0] <= 8;
    }, e.addHexPrefix = function(t) {
      return 'string' != typeof t || e.isHexPrefixed(t) ? t : '0x' + t;
    }, e.isValidSignature = function(t, e, r, n) {
      var i = new f('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
      var o = new f('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 16);
      return 32 === e.length && 32 === r.length && ((27 === t || 28 === t) && (e = new f(e), r = new f(r), !(e.isZero() || e.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new f(r).cmp(i))));
    }, e.baToJSON = function(t) {
      if (p.isBuffer(t)) return '0x' + t.toString('hex');
      if (t instanceof Array) {
        var r = [];
        for (var n = 0; n < t.length; n++) r.push(e.baToJSON(t[n]));
        return r;
      }
    }, e.defineProperties = function(t, r, i) {
      if (t.raw = [], t._fields = [], t.toJSON = function(r) {
        if (r) {
          var n = {};
          return t._fields.forEach((function(e) {
            n[e] = '0x' + t[e].toString('hex');
          })), n;
        }
        return e.baToJSON(this.raw);
      }, t.serialize = function() {
        return c.encode(t.raw);
      }, r.forEach((function(r, n) {
        function i() {
          return t.raw[n];
        }
        function o(i) {
          '00' !== (i = e.toBuffer(i)).toString('hex') || r.allowZero || (i = p.allocUnsafe(0)), r.allowLess && r.length ? (i = e.stripZeros(i), 
          l(r.length >= i.length, 'The field ' + r.name + ' must not have more ' + r.length + ' bytes')) : r.allowZero && 0 === i.length || !r.length || l(r.length === i.length, 'The field ' + r.name + ' must have byte length of ' + r.length), 
          t.raw[n] = i;
        }
        t._fields.push(r.name), Object.defineProperty(t, r.name, {
          enumerable: !0,
          configurable: !0,
          get: i,
          set: o
        }), r.default && (t[r.name] = r.default), r.alias && Object.defineProperty(t, r.alias, {
          enumerable: !1,
          configurable: !0,
          set: o,
          get: i
        });
      })), i) if ('string' == typeof i && (i = p.from(e.stripHexPrefix(i), 'hex')), p.isBuffer(i) && (i = c.decode(i)), Array.isArray(i)) {
        if (i.length > t._fields.length) throw new Error('wrong number of fields in data');
        i.forEach((function(r, n) {
          t[t._fields[n]] = e.toBuffer(r);
        }));
      } else {
        if ('object' !== (void 0 === i ? 'undefined' : n(i))) throw new Error('invalid data');
        var o = Object.keys(i);
        r.forEach((function(e) {
          -1 !== o.indexOf(e.name) && (t[e.name] = i[e.name]), -1 !== o.indexOf(e.alias) && (t[e.alias] = i[e.alias]);
        }));
      }
    };
  },
  76666: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(95053);
    var o = r(64078);
    var a = r(78741);
    var s = function(t) {
      return 32 === t.length && i.privateKeyVerify(Uint8Array.from(t));
    };
    t.exports = {
      privateKeyVerify: s,
      privateKeyExport: function(t, e) {
        if (32 !== t.length) throw new RangeError('private key length is invalid');
        var r = o.privateKeyExport(t, e);
        return a.privateKeyExport(t, r, e);
      },
      privateKeyImport: function(t) {
        if (null !== (t = a.privateKeyImport(t)) && 32 === t.length && s(t)) return t;
        throw new Error("couldn't import from DER format");
      },
      privateKeyNegate: function(t) {
        return n.from(i.privateKeyNegate(Uint8Array.from(t)));
      },
      privateKeyModInverse: function(t) {
        if (32 !== t.length) throw new Error('private key length is invalid');
        return n.from(o.privateKeyModInverse(Uint8Array.from(t)));
      },
      privateKeyTweakAdd: function(t, e) {
        return n.from(i.privateKeyTweakAdd(Uint8Array.from(t), e));
      },
      privateKeyTweakMul: function(t, e) {
        return n.from(i.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e)));
      },
      publicKeyCreate: function(t, e) {
        return n.from(i.publicKeyCreate(Uint8Array.from(t), e));
      },
      publicKeyConvert: function(t, e) {
        return n.from(i.publicKeyConvert(Uint8Array.from(t), e));
      },
      publicKeyVerify: function(t) {
        return (33 === t.length || 65 === t.length) && i.publicKeyVerify(Uint8Array.from(t));
      },
      publicKeyTweakAdd: function(t, e, r) {
        return n.from(i.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(e), r));
      },
      publicKeyTweakMul: function(t, e, r) {
        return n.from(i.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(e), r));
      },
      publicKeyCombine: function(t, e) {
        var r = [];
        return t.forEach((function(t) {
          r.push(Uint8Array.from(t));
        })), n.from(i.publicKeyCombine(r, e));
      },
      signatureNormalize: function(t) {
        return n.from(i.signatureNormalize(Uint8Array.from(t)));
      },
      signatureExport: function(t) {
        return n.from(i.signatureExport(Uint8Array.from(t)));
      },
      signatureImport: function(t) {
        return n.from(i.signatureImport(Uint8Array.from(t)));
      },
      signatureImportLax: function(t) {
        if (0 === t.length) throw new RangeError('signature length is invalid');
        var e = a.signatureImportLax(t);
        if (null === e) throw new Error("couldn't parse DER signature");
        return o.signatureImport(e);
      },
      sign: function(t, e, r) {
        if (null === r) throw new TypeError('options should be an Object');
        var o = void 0;
        if (r) {
          if (o = {}, null === r.data) throw new TypeError('options.data should be a Buffer');
          if (r.data) {
            if (32 !== r.data.length) throw new RangeError('options.data length is invalid');
            o.data = new Uint8Array(r.data);
          }
          if (null === r.noncefn) throw new TypeError('options.noncefn should be a Function');
          r.noncefn && (o.noncefn = function(t, e, i, o, a) {
            var s = null != i ? n.from(i) : null;
            var u = null != o ? n.from(o) : null;
            var h = n.from('');
            return r.noncefn && (h = r.noncefn(n.from(t), n.from(e), s, u, a)), Uint8Array.from(h);
          });
        }
        var a = i.ecdsaSign(Uint8Array.from(t), Uint8Array.from(e), o);
        return {
          signature: n.from(a.signature),
          recovery: a.recid
        };
      },
      verify: function(t, e, r) {
        return i.ecdsaVerify(Uint8Array.from(e), Uint8Array.from(t), r);
      },
      recover: function(t, e, r, o) {
        return n.from(i.ecdsaRecover(Uint8Array.from(e), r, Uint8Array.from(t), o));
      },
      ecdh: function(t, e) {
        return n.from(i.ecdh(Uint8Array.from(t), Uint8Array.from(e), {}));
      },
      ecdhUnsafe: function(t, e, r) {
        if (33 !== t.length && 65 !== t.length) throw new RangeError('public key length is invalid');
        if (32 !== e.length) throw new RangeError('private key length is invalid');
        return n.from(o.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(e), r));
      }
    };
  },
  78741: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = n.from([ 48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    var o = n.from([ 48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]);
    e.privateKeyExport = function(t, e, r) {
      var a = n.from(r ? i : o);
      return t.copy(a, r ? 8 : 9), e.copy(a, r ? 181 : 214), a;
    }, e.privateKeyImport = function(t) {
      var e = t.length;
      var r = 0;
      if (e < r + 1 || 48 !== t[r]) return null;
      if (e < (r += 1) + 1 || !(128 & t[r])) return null;
      var n = 127 & t[r];
      if (n < 1 || n > 2) return null;
      if (e < (r += 1) + n) return null;
      var i = t[r + n - 1] | (n > 1 ? t[r + n - 2] << 8 : 0);
      return e < (r += n) + i || e < r + 3 || 2 !== t[r] || 1 !== t[r + 1] || 1 !== t[r + 2] || e < (r += 3) + 2 || 4 !== t[r] || t[r + 1] > 32 || e < r + 2 + t[r + 1] ? null : t.slice(r + 2, r + 2 + t[r + 1]);
    }, e.signatureImportLax = function(t) {
      var e = n.alloc(32, 0);
      var r = n.alloc(32, 0);
      var i = t.length;
      var o = 0;
      if (48 !== t[o++]) return null;
      var a = t[o++];
      if (128 & a && (o += a - 128) > i) return null;
      if (2 !== t[o++]) return null;
      var s = t[o++];
      if (128 & s) {
        if (o + (a = s - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o];
      }
      if (s > i - o) return null;
      var u = o;
      if (o += s, 2 !== t[o++]) return null;
      var h = t[o++];
      if (128 & h) {
        if (o + (a = h - 128) > i) return null;
        for (;a > 0 && 0 === t[o]; o += 1, a -= 1) ;
        for (h = 0; a > 0; o += 1, a -= 1) h = (h << 8) + t[o];
      }
      if (h > i - o) return null;
      var l = o;
      for (o += h; s > 0 && 0 === t[u]; s -= 1, u += 1) ;
      if (s > 32) return null;
      var c = t.slice(u, u + s);
      for (c.copy(e, 32 - c.length); h > 0 && 0 === t[l]; h -= 1, l += 1) ;
      if (h > 32) return null;
      var f = t.slice(l, l + h);
      return f.copy(r, 32 - f.length), {
        r: e,
        s: r
      };
    };
  },
  64078: (t, e, r) => {
    "use strict";
    var n = r(48764).Buffer;
    var i = r(26949);
    var o = new (0, r(86266).ec)('secp256k1');
    var a = o.curve;
    e.privateKeyExport = function(t, e) {
      var r = new i(t);
      if (r.ucmp(a.n) >= 0) throw new Error('couldn\'t export to DER format');
      var n = o.g.mul(r);
      return s(n.getX(), n.getY(), e);
    }, e.privateKeyModInverse = function(t) {
      var e = new i(t);
      if (e.ucmp(a.n) >= 0 || e.isZero()) throw new Error('private key range is invalid');
      return e.invm(a.n).toArrayLike(n, 'be', 32);
    }, e.signatureImport = function(t) {
      var e = new i(t.r);
      e.ucmp(a.n) >= 0 && (e = new i(0));
      var r = new i(t.s);
      return r.ucmp(a.n) >= 0 && (r = new i(0)), n.concat([ e.toArrayLike(n, 'be', 32), r.toArrayLike(n, 'be', 32) ]);
    }, e.ecdhUnsafe = function(t, e, r) {
      var n = o.keyFromPublic(t);
      var u = new i(e);
      if (u.ucmp(a.n) >= 0 || u.isZero()) throw new Error('scalar was invalid (zero or overflow)');
      var h = n.pub.mul(u);
      return s(h.getX(), h.getY(), r);
    };
    var s = function(t, e, r) {
      var i = void 0;
      return r ? ((i = n.alloc(33))[0] = e.isOdd() ? 3 : 2, t.toArrayLike(n, 'be', 32).copy(i, 1)) : ((i = n.alloc(65))[0] = 4, 
      t.toArrayLike(n, 'be', 32).copy(i, 1), e.toArrayLike(n, 'be', 32).copy(i, 33)), i;
    };
  },
  41955: (t, e, r) => {
    const n = r(6403);
    const i = r(37870);
    t.exports = class extends n {
      constructor(t) {
        super((({blockTracker: e}) => i(Object.assign({
          blockTracker: e
        }, t))));
      }
    };
  },
  28260: (t, e, r) => {
    const n = r(6403);
    const i = r(98406);
    t.exports = class extends n {
      constructor() {
        super((({blockTracker: t, provider: e, engine: r}) => i({
          blockTracker: t,
          provider: e
        })));
      }
    };
  },
  2110: (t, e, r) => {
    const n = r(89539).inherits;
    const i = r(30398);
    function o(t) {
      t = t || {}, this.staticResponses = t;
    }
    t.exports = o, n(o, i), o.prototype.handleRequest = function(t, e, r) {
      var n = this.staticResponses[t.method];
      'function' == typeof n ? n(t, e, r) : void 0 !== n ? setTimeout((() => r(null, n))) : e();
    };
  },
  78747: (t, e, r) => {
    var n = r(25108);
    const i = r(7879);
    const o = r(80047);
    const a = r(89539).inherits;
    const s = r(86918);
    const u = r(2843);
    const h = r(47529);
    const l = r(80045);
    const c = r(30398);
    const f = r(28372);
    const d = /^[0-9A-Fa-f]+$/g;
    function p(t) {
      const e = this;
      e.nonceLock = l(1), t.getAccounts && (e.getAccounts = t.getAccounts), t.processTransaction && (e.processTransaction = t.processTransaction), 
      t.processMessage && (e.processMessage = t.processMessage), t.processPersonalMessage && (e.processPersonalMessage = t.processPersonalMessage), 
      t.processTypedMessage && (e.processTypedMessage = t.processTypedMessage), e.approveTransaction = t.approveTransaction || e.autoApprove, 
      e.approveMessage = t.approveMessage || e.autoApprove, e.approvePersonalMessage = t.approvePersonalMessage || e.autoApprove, 
      e.approveDecryptMessage = t.approveDecryptMessage || e.autoApprove, e.approveEncryptionPublicKey = t.approveEncryptionPublicKey || e.autoApprove, 
      e.approveTypedMessage = t.approveTypedMessage || e.autoApprove, t.signTransaction && (e.signTransaction = t.signTransaction || w('signTransaction')), 
      t.signMessage && (e.signMessage = t.signMessage || w('signMessage')), t.signPersonalMessage && (e.signPersonalMessage = t.signPersonalMessage || w('signPersonalMessage')), 
      t.decryptMessage && (e.decryptMessage = t.decryptMessage || w('decryptMessage')), t.encryptionPublicKey && (e.encryptionPublicKey = t.encryptionPublicKey || w('encryptionPublicKey')), 
      t.signTypedMessage && (e.signTypedMessage = t.signTypedMessage || w('signTypedMessage')), t.recoverPersonalSignature && (e.recoverPersonalSignature = t.recoverPersonalSignature), 
      t.publishTransaction && (e.publishTransaction = t.publishTransaction), e.estimateGas = t.estimateGas || e.estimateGas, e.getGasPrice = t.getGasPrice || e.getGasPrice;
    }
    function m(t) {
      return t.toLowerCase();
    }
    function v(t) {
      const e = s.addHexPrefix(t);
      return s.isValidAddress(e);
    }
    function g(t) {
      const e = s.addHexPrefix(t);
      return !s.isValidAddress(e) && y(t);
    }
    function y(t) {
      if (!('string' == typeof t)) return !1;
      if (!('0x' === t.slice(0, 2))) return !1;
      return t.slice(2).match(d);
    }
    function w(t) {
      return function(e, r) {
        r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + t + '" fn in constructor options'));
      };
    }
    t.exports = p, a(p, c), p.prototype.handleRequest = function(t, e, r) {
      const o = this;
      let a, s, u;
      let l, c;
      switch (o._parityRequests = {}, o._parityRequestCount = 0, t.method) {
       case 'eth_coinbase':
        return void o.getAccounts((function(t, e) {
          if (t) return r(t);
          let n = e[0] || null;
          r(null, n);
        }));

       case 'eth_accounts':
        return void o.getAccounts((function(t, e) {
          if (t) return r(t);
          r(null, e);
        }));

       case 'eth_sendTransaction':
        return a = t.params[0], void i([ t => o.validateTransaction(a, t), t => o.processTransaction(a, t) ], r);

       case 'eth_signTransaction':
        return a = t.params[0], void i([ t => o.validateTransaction(a, t), t => o.processSignTransaction(a, t) ], r);

       case 'eth_sign':
        return c = t.params[0], l = t.params[1], u = t.params[2] || {}, s = h(u, {
          from: c,
          data: l
        }), void i([ t => o.validateMessage(s, t), t => o.processMessage(s, t) ], r);

       case 'personal_sign':
        return function() {
          const e = t.params[0];
          if (g(t.params[1]) && v(e)) {
            let e = "The eth_personalSign method requires params ordered ";
            e += "[message, address]. This was previously handled incorrectly, ", e += "and has been corrected automatically. ", e += "Please switch this param order for smooth behavior in the future.", 
            n.warn(e), c = t.params[0], l = t.params[1];
          } else l = t.params[0], c = t.params[1];
          u = t.params[2] || {}, s = h(u, {
            from: c,
            data: l
          }), i([ t => o.validatePersonalMessage(s, t), t => o.processPersonalMessage(s, t) ], r);
        }();

       case 'eth_decryptMessage':
        return function() {
          const e = t.params[0];
          if (g(t.params[1]) && v(e)) {
            let e = "The eth_decryptMessage method requires params ordered ";
            e += "[message, address]. This was previously handled incorrectly, ", e += "and has been corrected automatically. ", e += "Please switch this param order for smooth behavior in the future.", 
            n.warn(e), c = t.params[0], l = t.params[1];
          } else l = t.params[0], c = t.params[1];
          u = t.params[2] || {}, s = h(u, {
            from: c,
            data: l
          }), i([ t => o.validateDecryptMessage(s, t), t => o.processDecryptMessage(s, t) ], r);
        }();

       case 'encryption_public_key':
        return function() {
          const e = t.params[0];
          i([ t => o.validateEncryptionPublicKey(e, t), t => o.processEncryptionPublicKey(e, t) ], r);
        }();

       case 'personal_ecRecover':
        return function() {
          l = t.params[0];
          let e = t.params[1];
          u = t.params[2] || {}, s = h(u, {
            sig: e,
            data: l
          }), o.recoverPersonalSignature(s, r);
        }();

       case 'eth_signTypedData':
       case 'eth_signTypedData_v3':
       case 'eth_signTypedData_v4':
        return function() {
          const e = t.params[0];
          const n = t.params[1];
          v(e) ? (c = e, l = n) : (l = e, c = n), u = t.params[2] || {}, s = h(u, {
            from: c,
            data: l
          }), i([ t => o.validateTypedMessage(s, t), t => o.processTypedMessage(s, t) ], r);
        }();

       case 'parity_postTransaction':
        return a = t.params[0], void o.parityPostTransaction(a, r);

       case 'parity_postSign':
        return c = t.params[0], l = t.params[1], void o.parityPostSign(c, l, r);

       case 'parity_checkRequest':
        return function() {
          const e = t.params[0];
          o.parityCheckRequest(e, r);
        }();

       case 'parity_defaultAccount':
        return void o.getAccounts((function(t, e) {
          if (t) return r(t);
          const n = e[0] || null;
          r(null, n);
        }));

       default:
        return void e();
      }
    }, p.prototype.getAccounts = function(t) {
      t(null, []);
    }, p.prototype.processTransaction = function(t, e) {
      const r = this;
      i([ e => r.approveTransaction(t, e), (t, e) => r.checkApproval('transaction', t, e), e => r.finalizeAndSubmitTx(t, e) ], e);
    }, p.prototype.processSignTransaction = function(t, e) {
      const r = this;
      i([ e => r.approveTransaction(t, e), (t, e) => r.checkApproval('transaction', t, e), e => r.finalizeTx(t, e) ], e);
    }, p.prototype.processMessage = function(t, e) {
      const r = this;
      i([ e => r.approveMessage(t, e), (t, e) => r.checkApproval('message', t, e), e => r.signMessage(t, e) ], e);
    }, p.prototype.processPersonalMessage = function(t, e) {
      const r = this;
      i([ e => r.approvePersonalMessage(t, e), (t, e) => r.checkApproval('message', t, e), e => r.signPersonalMessage(t, e) ], e);
    }, p.prototype.processDecryptMessage = function(t, e) {
      const r = this;
      i([ e => r.approveDecryptMessage(t, e), (t, e) => r.checkApproval('decryptMessage', t, e), e => r.decryptMessage(t, e) ], e);
    }, p.prototype.processEncryptionPublicKey = function(t, e) {
      const r = this;
      i([ e => r.approveEncryptionPublicKey(t, e), (t, e) => r.checkApproval('encryptionPublicKey', t, e), e => r.encryptionPublicKey(t, e) ], e);
    }, p.prototype.processTypedMessage = function(t, e) {
      const r = this;
      i([ e => r.approveTypedMessage(t, e), (t, e) => r.checkApproval('message', t, e), e => r.signTypedMessage(t, e) ], e);
    }, p.prototype.autoApprove = function(t, e) {
      e(null, !0);
    }, p.prototype.checkApproval = function(t, e, r) {
      r(e ? null : new Error('User denied ' + t + ' signature.'));
    }, p.prototype.parityPostTransaction = function(t, e) {
      const r = this;
      const n = `0x${r._parityRequestCount.toString(16)}`;
      r._parityRequestCount++, r.emitPayload({
        method: 'eth_sendTransaction',
        params: [ t ]
      }, (function(t, e) {
        if (t) return void (r._parityRequests[n] = {
          error: t
        });
        const i = e.result;
        r._parityRequests[n] = i;
      })), e(null, n);
    }, p.prototype.parityPostSign = function(t, e, r) {
      const n = this;
      const i = `0x${n._parityRequestCount.toString(16)}`;
      n._parityRequestCount++, n.emitPayload({
        method: 'eth_sign',
        params: [ t, e ]
      }, (function(t, e) {
        if (t) return void (n._parityRequests[i] = {
          error: t
        });
        const r = e.result;
        n._parityRequests[i] = r;
      })), r(null, i);
    }, p.prototype.parityCheckRequest = function(t, e) {
      const r = this._parityRequests[t] || null;
      return r ? r.error ? e(r.error) : void e(null, r) : e(null, null);
    }, p.prototype.recoverPersonalSignature = function(t, e) {
      let r;
      try {
        r = u.recoverPersonalSignature(t);
      } catch (n) {
        return e(n);
      }
      e(null, r);
    }, p.prototype.validateTransaction = function(t, e) {
      if (void 0 === t.from) return e(new Error("Undefined address - from address required to sign transaction."));
      this.validateSender(t.from, (function(r, n) {
        return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign transaction for this address: "${t.from}"`));
      }));
    }, p.prototype.validateMessage = function(t, e) {
      if (void 0 === t.from) return e(new Error("Undefined address - from address required to sign message."));
      this.validateSender(t.from, (function(r, n) {
        return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`));
      }));
    }, p.prototype.validatePersonalMessage = function(t, e) {
      return void 0 === t.from ? e(new Error("Undefined address - from address required to sign personal message.")) : void 0 === t.data ? e(new Error("Undefined message - message required to sign personal message.")) : y(t.data) ? void this.validateSender(t.from, (function(r, n) {
        return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`));
      })) : e(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."));
    }, p.prototype.validateDecryptMessage = function(t, e) {
      return void 0 === t.from ? e(new Error("Undefined address - from address required to decrypt message.")) : void 0 === t.data ? e(new Error("Undefined message - message required to decrypt message.")) : y(t.data) ? void this.validateSender(t.from, (function(r, n) {
        return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to decrypt message for this address: "${t.from}"`));
      })) : e(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."));
    }, p.prototype.validateEncryptionPublicKey = function(t, e) {
      this.validateSender(t, (function(r, n) {
        return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to obtain encryption public key for this address: "${t}"`));
      }));
    }, p.prototype.validateTypedMessage = function(t, e) {
      return void 0 === t.from ? e(new Error("Undefined address - from address required to sign typed data.")) : void 0 === t.data ? e(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(t.from, (function(r, n) {
        return r ? e(r) : n ? void e() : e(new Error(`Unknown address - unable to sign message for this address: "${t.from}"`));
      }));
    }, p.prototype.validateSender = function(t, e) {
      if (!t) return e(null, !1);
      this.getAccounts((function(r, n) {
        if (r) return e(r);
        const i = -1 !== n.map(m).indexOf(t.toLowerCase());
        e(null, i);
      }));
    }, p.prototype.finalizeAndSubmitTx = function(t, e) {
      const r = this;
      r.nonceLock.take((function() {
        i([ r.fillInTxExtras.bind(r, t), r.signTransaction.bind(r), r.publishTransaction.bind(r) ], (function(t, n) {
          if (r.nonceLock.leave(), t) return e(t);
          e(null, n);
        }));
      }));
    }, p.prototype.finalizeTx = function(t, e) {
      const r = this;
      r.nonceLock.take((function() {
        i([ r.fillInTxExtras.bind(r, t), r.signTransaction.bind(r) ], (function(n, i) {
          if (r.nonceLock.leave(), n) return e(n);
          e(null, {
            raw: i,
            tx: t
          });
        }));
      }));
    }, p.prototype.publishTransaction = function(t, e) {
      this.emitPayload({
        method: 'eth_sendRawTransaction',
        params: [ t ]
      }, (function(t, r) {
        if (t) return e(t);
        e(null, r.result);
      }));
    }, p.prototype.estimateGas = function(t, e) {
      f(this.engine, t, e);
    }, p.prototype.getGasPrice = function(t) {
      this.emitPayload({
        method: 'eth_gasPrice',
        params: []
      }, (function(e, r) {
        if (e) return t(e);
        t(null, r.result);
      }));
    }, p.prototype.fillInTxExtras = function(t, e) {
      const r = this;
      const n = t.from;
      const i = {};
      void 0 === t.gasPrice && (i.gasPrice = r.getGasPrice.bind(r)), void 0 === t.nonce && (i.nonce = r.emitPayload.bind(r, {
        method: 'eth_getTransactionCount',
        params: [ n, 'pending' ]
      })), void 0 === t.gas && (i.gas = r.estimateGas.bind(r, function(t) {
        return {
          from: t.from,
          to: t.to,
          value: t.value,
          data: t.data,
          gas: t.gas,
          gasPrice: t.gasPrice,
          nonce: t.nonce
        };
      }(t))), o(i, (function(r, n) {
        if (r) return e(r);
        const i = {};
        n.gasPrice && (i.gasPrice = n.gasPrice), n.nonce && (i.nonce = n.nonce.result), n.gas && (i.gas = n.gas), e(null, h(t, i));
      }));
    };
  },
  6403: (t, e, r) => {
    const n = r(30398);
    t.exports = class extends n {
      constructor(t) {
        if (super(), !t) throw new Error('JsonRpcEngineMiddlewareSubprovider - no constructorFn specified');
        this._constructorFn = t;
      }
      setEngine(t) {
        if (this.middleware) throw new Error('JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice');
        const e = t._blockTracker;
        const r = this._constructorFn({
          engine: t,
          provider: t,
          blockTracker: e
        });
        if (!r) throw new Error('JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware');
        if ('function' != typeof r) throw new Error('JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function');
        this.middleware = r;
      }
      handleRequest(t, e, r) {
        const n = {
          id: t.id
        };
        this.middleware(t, n, (function(t) {
          e(((e, r, i) => {
            e ? (delete n.result, n.error = {
              message: e.message || e
            }) : n.result = r, t ? t(i) : i();
          }));
        }), (function(t) {
          if (t) return r(t);
          r(null, n.result);
        }));
      }
    };
  },
  3621: (t, e, r) => {
    var n = r(48764).Buffer;
    const i = r(89539).inherits;
    const o = r(29847);
    const a = r(86918);
    const s = r(30398);
    const u = r(6496).blockTagForPayload;
    function h(t) {
      this.nonceCache = {};
    }
    t.exports = h, i(h, s), h.prototype.handleRequest = function(t, e, r) {
      const i = this;
      switch (t.method) {
       case 'eth_getTransactionCount':
        var s = u(t);
        var h = t.params[0].toLowerCase();
        var l = i.nonceCache[h];
        return void ('pending' === s ? l ? r(null, l) : e((function(t, e, r) {
          if (t) return r();
          void 0 === i.nonceCache[h] && (i.nonceCache[h] = e), r();
        })) : e());

       case 'eth_sendRawTransaction':
        return void e((function(e, r, s) {
          if (e) return s();
          var u = t.params[0];
          a.stripHexPrefix(u);
          n.from(a.stripHexPrefix(u), 'hex');
          var h = new o(n.from(a.stripHexPrefix(u), 'hex'));
          var l = '0x' + h.getSenderAddress().toString('hex').toLowerCase();
          var c = a.bufferToInt(h.nonce);
          var f = (++c).toString(16);
          f.length % 2 && (f = '0' + f), f = '0x' + f, i.nonceCache[l] = f, s();
        }));

       case 'evm_revert':
        return i.nonceCache = {}, void e();

       default:
        return void e();
      }
    };
  },
  30398: (t, e, r) => {
    const n = r(39728);
    function i() {}
    t.exports = i, i.prototype.setEngine = function(t) {
      const e = this;
      e.engine || (e.engine = t, t.on('block', (function(t) {
        e.currentBlock = t;
      })), t.on('start', (function() {
        e.start();
      })), t.on('stop', (function() {
        e.stop();
      })));
    }, i.prototype.handleRequest = function(t, e, r) {
      throw new Error('Subproviders should override `handleRequest`.');
    }, i.prototype.emitPayload = function(t, e) {
      this.engine.sendAsync(n(t), e);
    }, i.prototype.stop = function() {}, i.prototype.start = function() {};
  },
  78191: (t, e, r) => {
    const n = r(6403);
    const i = r(68961);
    t.exports = class extends n {
      constructor() {
        super((({blockTracker: t, provider: e, engine: r}) => {
          const {events: n, middleware: o} = i({
            blockTracker: t,
            provider: e
          });
          return n.on('notification', (t => r.emit('data', null, t))), o;
        }));
      }
    };
  },
  39728: (t, e, r) => {
    const n = r(88620);
    const i = r(47529);
    t.exports = function(t) {
      return i({
        id: n(),
        jsonrpc: '2.0',
        params: []
      }, t);
    };
  },
  28372: (t, e, r) => {
    const n = r(39728);
    t.exports = function(t, e, r) {
      t.sendAsync(n({
        method: 'eth_estimateGas',
        params: [ e ]
      }), (function(t, e) {
        if (t) return 'no contract code at given address' === t.message ? r(null, '0xcf08') : r(t);
        r(null, e.result);
      }));
    };
  },
  88620: t => {
    t.exports = function() {
      return Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
    };
  },
  6496: (t, e, r) => {
    const n = r(67266);
    function i(t) {
      return 'never' !== s(t);
    }
    function o(t) {
      var e = a(t);
      return e >= t.params.length ? t.params : 'eth_getBlockByNumber' === t.method ? t.params.slice(1) : t.params.slice(0, e);
    }
    function a(t) {
      switch (t.method) {
       case 'eth_getStorageAt':
        return 2;

       case 'eth_getBalance':
       case 'eth_getCode':
       case 'eth_getTransactionCount':
       case 'eth_call':
       case 'eth_estimateGas':
        return 1;

       case 'eth_getBlockByNumber':
        return 0;

       default:
        return;
      }
    }
    function s(t) {
      switch (t.method) {
       case 'web3_clientVersion':
       case 'web3_sha3':
       case 'eth_protocolVersion':
       case 'eth_getBlockTransactionCountByHash':
       case 'eth_getUncleCountByBlockHash':
       case 'eth_getCode':
       case 'eth_getBlockByHash':
       case 'eth_getTransactionByHash':
       case 'eth_getTransactionByBlockHashAndIndex':
       case 'eth_getTransactionReceipt':
       case 'eth_getUncleByBlockHashAndIndex':
       case 'eth_getCompilers':
       case 'eth_compileLLL':
       case 'eth_compileSolidity':
       case 'eth_compileSerpent':
       case 'shh_version':
        return 'perma';

       case 'eth_getBlockByNumber':
       case 'eth_getBlockTransactionCountByNumber':
       case 'eth_getUncleCountByBlockNumber':
       case 'eth_getTransactionByBlockNumberAndIndex':
       case 'eth_getUncleByBlockNumberAndIndex':
        return 'fork';

       case 'eth_gasPrice':
       case 'eth_getBalance':
       case 'eth_getStorageAt':
       case 'eth_getTransactionCount':
       case 'eth_call':
       case 'eth_estimateGas':
       case 'eth_getFilterLogs':
       case 'eth_getLogs':
       case 'eth_blockNumber':
        return 'block';

       case 'net_version':
       case 'net_peerCount':
       case 'net_listening':
       case 'eth_syncing':
       case 'eth_sign':
       case 'eth_coinbase':
       case 'eth_mining':
       case 'eth_hashrate':
       case 'eth_accounts':
       case 'eth_sendTransaction':
       case 'eth_sendRawTransaction':
       case 'eth_newFilter':
       case 'eth_newBlockFilter':
       case 'eth_newPendingTransactionFilter':
       case 'eth_uninstallFilter':
       case 'eth_getFilterChanges':
       case 'eth_getWork':
       case 'eth_submitWork':
       case 'eth_submitHashrate':
       case 'db_putString':
       case 'db_getString':
       case 'db_putHex':
       case 'db_getHex':
       case 'shh_post':
       case 'shh_newIdentity':
       case 'shh_hasIdentity':
       case 'shh_newGroup':
       case 'shh_addToGroup':
       case 'shh_newFilter':
       case 'shh_uninstallFilter':
       case 'shh_getFilterChanges':
       case 'shh_getMessages':
        return 'never';
      }
    }
    t.exports = {
      cacheIdentifierForPayload: function(t, e = {}) {
        if (!i(t)) return null;
        const {includeBlockRef: r} = e;
        const a = r ? t.params : o(t);
        return t.method + ':' + n(a);
      },
      canCache: i,
      blockTagForPayload: function(t) {
        var e = a(t);
        if (e >= t.params.length) return null;
        return t.params[e];
      },
      paramsWithoutBlockTag: o,
      blockTagParamIndex: a,
      cacheTypeForPayload: s
    };
  },
  52698: (t, e, r) => {
    const n = r(17187).EventEmitter;
    const i = r(89539).inherits;
    function o() {
      n.call(this), this.isLocked = !0;
    }
    t.exports = o, i(o, n), o.prototype.go = function() {
      this.isLocked = !1, this.emit('unlock');
    }, o.prototype.stop = function() {
      this.isLocked = !0, this.emit('lock');
    }, o.prototype.await = function(t) {
      const e = this;
      e.isLocked ? e.once('unlock', t) : setTimeout(t);
    };
  },
  57026: t => {
    "use strict";
    t.exports = function() {
      throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
  },
  42696: t => {
    "use strict";
    t.exports = JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}');
  }
} ]);