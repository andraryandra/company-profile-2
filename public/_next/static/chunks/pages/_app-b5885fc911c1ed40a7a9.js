_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [10], {
        "/0+H": function (e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = i, t.useAmp = function () {
                return i(o.default.useContext(a.AmpStateContext))
            };
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                a = n("lwAK");

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    a = e.hasQuery,
                    i = void 0 !== a && a;
                return n || o && i
            }
        },
        0: function (e, t, n) {
            n("GcxT"), e.exports = n("nOHt")
        },
        "1TCz": function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                o = n.n(r),
                a = (n("PVTQ"), n("KD4J"), n("FAzj"), n("cYzS"), n("2sAp"), n("HP2+"), n("QYuT"), n("znoa"), n("B5sv"), n("ODXe")),
                i = n("8Kt/"),
                u = n.n(i),
                c = o.a.createElement,
                s = function (e) {
                    var t = e.scrollStepInPx,
                        n = e.delayInMs,
                        r = o.a.useState(!1),
                        i = Object(a.a)(r, 2),
                        u = i[0],
                        s = i[1],
                        l = o.a.useRef(null);
                    o.a.useEffect((function () {
                        document.addEventListener("scroll", (function () {
                            window.scrollY > 170 ? s(!0) : s(!1)
                        }))
                    }), []);
                    var f = function () {
                            0 === window.pageYOffset && clearInterval(l.current), window.scroll(0, window.pageYOffset - t)
                        },
                        d = function () {
                            l.current = setInterval(f, n)
                        };
                    return c(o.a.Fragment, null, c("div", {
                        className: "go-top ".concat(u ? "active" : ""),
                        onClick: d
                    }, c("i", {
                        className: "bx bx-chevrons-up"
                    }), c("i", {
                        className: "bx bx-chevrons-up"
                    })))
                },
                l = o.a.createElement,
                f = function () {
                    return l("div", {
                        className: "loader-content"
                    }, l("div", {
                        className: "d-table"
                    }, l("div", {
                        className: "d-table-cell"
                    }, l("div", {
                        className: "sk-folding-cube"
                    }, l("div", {
                        className: "sk-cube1 sk-cube"
                    }), l("div", {
                        className: "sk-cube2 sk-cube"
                    }), l("div", {
                        className: "sk-cube4 sk-cube"
                    }), l("div", {
                        className: "sk-cube3 sk-cube"
                    })))))
                },
                d = o.a.createElement,
                p = function (e) {
                    var t = e.children,
                        n = o.a.useState(!0),
                        r = Object(a.a)(n, 2),
                        i = r[0],
                        c = r[1];
                    return o.a.useEffect((function () {
                        setTimeout((function () {
                            return c(!1)
                        }), 1500)
                    }), []), d(o.a.Fragment, null, d(u.a, null, d("title", null, "Zoko - React IT Solutions & Digital Services Template"), d("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }), d("meta", {
                        name: "description",
                        content: "Zoko - React IT Solutions & Digital Services Template"
                    }), d("meta", {
                        name: "og:title",
                        property: "og:title",
                        content: "Zoko - React IT Solutions & Digital Services Template"
                    }), d("meta", {
                        name: "twitter:card",
                        content: "Zoko - React IT Solutions & Digital Services Template"
                    }), d("link", {
                        rel: "canonical",
                        href: "https://zoko-react.hibootstrap.com/"
                    })), t, i ? d(f, null) : null, d(s, {
                        scrollStepInPx: "100",
                        delayInMs: "10.50"
                    }))
                },
                v = o.a.createElement;
            t.default = function (e) {
                var t = e.Component,
                    n = e.pageProps;
                return v(p, null, v(t, n))
            }
        },
        "2sAp": function (e, t, n) {},
        "7W2i": function (e, t, n) {
            var r = n("SksO");
            e.exports = function (e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && r(e, t)
            }
        },
        "8Kt/": function (e, t, n) {
            "use strict";
            n("lSNA");
            t.__esModule = !0, t.defaultHead = l, t.default = void 0;
            var r, o = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                a = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                i = n("lwAK"),
                u = n("FYa8"),
                c = n("/0+H");

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function () {
                    return e
                }, e
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [o.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function f(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((function (e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var d = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                return e.reduce((function (e, t) {
                    var n = o.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(f, []).reverse().concat(l(t.inAmpMode)).filter(function () {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function (o) {
                        var a = !0;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            var i = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(i) ? a = !1 : e.add(i)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? a = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (var u = 0, c = d.length; u < c; u++) {
                                    var s = d[u];
                                    if (o.props.hasOwnProperty(s))
                                        if ("charSet" === s) n.has(s) ? a = !1 : n.add(s);
                                        else {
                                            var l = o.props[s],
                                                f = r[s] || new Set;
                                            f.has(l) ? a = !1 : (f.add(l), r[s] = f)
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function (e, t) {
                    var n = e.key || t;
                    return o.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function v(e) {
                var t = e.children,
                    n = (0, o.useContext)(i.AmpStateContext),
                    r = (0, o.useContext)(u.HeadManagerContext);
                return o.default.createElement(a.default, {
                    reduceComponentsToState: p,
                    headManager: r,
                    inAmpMode: (0, c.isInAmpMode)(n)
                }, t)
            }
            v.rewind = function () {};
            var m = v;
            t.default = m
        },
        B5sv: function (e, t, n) {},
        Bnag: function (e, t) {
            e.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        EbDI: function (e, t) {
            e.exports = function (e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        FAzj: function (e, t, n) {},
        FYa8: function (e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.HeadManagerContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.HeadManagerContext = o
        },
        GcxT: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n("1TCz")
            }])
        },
        "HP2+": function (e, t, n) {},
        Ijbi: function (e, t, n) {
            var r = n("WkPL");
            e.exports = function (e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        KD4J: function (e, t, n) {},
        Nsbk: function (e, t) {
            function n(t) {
                return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(t)
            }
            e.exports = n
        },
        ODXe: function (e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function o(e, t) {
                return function (e) {
                    if (Array.isArray(e)) return e
                }(e) || function (e, t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            o = !1,
                            a = void 0;
                        try {
                            for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                        } catch (c) {
                            o = !0, a = c
                        } finally {
                            try {
                                r || null == u.return || u.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return n
                    }
                }(e, t) || function (e, t) {
                    if (e) {
                        if ("string" === typeof e) return r(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
                    }
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            n.d(t, "a", (function () {
                return o
            }))
        },
        PJYZ: function (e, t) {
            e.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        },
        PVTQ: function (e, t, n) {},
        QYuT: function (e, t, n) {},
        RIqP: function (e, t, n) {
            var r = n("Ijbi"),
                o = n("EbDI"),
                a = n("ZhPi"),
                i = n("Bnag");
            e.exports = function (e) {
                return r(e) || o(e) || a(e) || i()
            }
        },
        Xuae: function (e, t, n) {
            "use strict";
            var r = n("RIqP"),
                o = n("lwsE"),
                a = n("W8MJ"),
                i = (n("PJYZ"), n("7W2i")),
                u = n("a1gu"),
                c = n("Nsbk");

            function s(e) {
                var t = function () {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function () {
                    var n, r = c(e);
                    if (t) {
                        var o = c(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var l = n("q1tI"),
                f = function (e) {
                    i(n, e);
                    var t = s(n);

                    function n(e) {
                        var a;
                        return o(this, n), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function () {
                            a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                        }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                    }
                    return a(n, [{
                        key: "componentDidMount",
                        value: function () {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function () {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return null
                        }
                    }]), n
                }(l.Component);
            t.default = f
        },
        a1gu: function (e, t, n) {
            var r = n("cDf5"),
                o = n("PJYZ");
            e.exports = function (e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? o(e) : t
            }
        },
        cYzS: function (e, t, n) {},
        lSNA: function (e, t) {
            e.exports = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        lwAK: function (e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = o
        },
        znoa: function (e, t, n) {}
    },
    [
        [0, 0, 2, 1]
    ]
]);
