! function(a, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? c(a, !0) : function(a) {
        if (!a.document) throw Error("jQuery requires a window with a document");
        return c(a)
    } : c(a)
}("undefined" != typeof window ? window : this, function(a, c) {
    function b(a) {
        var b = a.length,
            f = h.type(a);
        return "function" === f || h.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === f || 0 === b || "number" == typeof b && 0 < b && b - 1 in a
    }

    function e(a, b, f) {
        if (h.isFunction(b)) return h.grep(a, function(a, t) {
            return !!b.call(a, t,
                a) !== f
        });
        if (b.nodeType) return h.grep(a, function(a) {
            return a === b !== f
        });
        if ("string" == typeof b) {
            if (jb.test(b)) return h.filter(b, a, f);
            b = h.filter(b, a)
        }
        return h.grep(a, function(a) {
            return 0 <= z.call(b, a) !== f
        })
    }

    function d(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function g(a) {
        var b = Na[a] = {};
        return h.each(a.match(ga) || [], function(a, t) {
            b[t] = !0
        }), b
    }

    function m() {
        I.removeEventListener("DOMContentLoaded", m, !1);
        a.removeEventListener("load", m, !1);
        h.ready()
    }

    function n() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        });
        this.expando = h.expando + n.uid++
    }

    function p(a, b, f) {
        var k;
        if (void 0 === f && 1 === a.nodeType)
            if (k = "data-" + b.replace(kb, "-$1").toLowerCase(), f = a.getAttribute(k), "string" == typeof f) {
                try {
                    f = "true" === f ? !0 : "false" === f ? !1 : "null" === f ? null : +f + "" === f ? +f : lb.test(f) ? h.parseJSON(f) : f
                } catch (c) {}
                V.set(a, b, f)
            } else f = void 0;
        return f
    }

    function r() {
        return !0
    }

    function v() {
        return !1
    }

    function u() {
        try {
            return I.activeElement
        } catch (a) {}
    }

    function B(a, b) {
        return h.nodeName(a, "table") && h.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] ||
            a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function y(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function C(a) {
        var b = mb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function O(a, b) {
        for (var f = 0, h = a.length; h > f; f++) F.set(a[f], "globalEval", !b || F.get(b[f], "globalEval"))
    }

    function w(a, b) {
        var f, k, c, d, e, s;
        if (1 === b.nodeType) {
            if (F.hasData(a) && (f = F.access(a), k = F.set(b, f), s = f.events))
                for (c in delete k.handle, k.events = {}, s)
                    for (f = 0, k = s[c].length; k > f; f++) h.event.add(b,
                        c, s[c][f]);
            V.hasData(a) && (d = V.access(a), e = h.extend({}, d), V.set(b, e))
        }
    }

    function l(a, b) {
        var f = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && h.nodeName(a, b) ? h.merge([a], f) : f
    }

    function L(t, b) {
        var f, k = h(b.createElement(t)).appendTo(b.body),
            c = a.getDefaultComputedStyle && (f = a.getDefaultComputedStyle(k[0])) ? f.display : h.css(k[0], "display");
        return k.detach(), c
    }

    function R(a) {
        var b = I,
            f = Oa[a];
        return f || (f = L(a, b), "none" !== f && f || (xa = (xa ||
            h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = xa[0].contentDocument, b.write(), b.close(), f = L(a, b), xa.detach()), Oa[a] = f), f
    }

    function Y(a, b, f) {
        var k, c, d, e, s = a.style;
        return f = f || ya(a), f && (e = f.getPropertyValue(b) || f[b]), f && ("" !== e || h.contains(a.ownerDocument, a) || (e = h.style(a, b)), Ga.test(e) && Pa.test(b) && (k = s.width, c = s.minWidth, d = s.maxWidth, s.minWidth = s.maxWidth = s.width = e, e = f.width, s.width = k, s.minWidth = c, s.maxWidth = d)), void 0 !== e ? e + "" : e
    }

    function ca(a, b) {
        return {
            get: function() {
                return a() ?
                    void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function aa(a, b) {
        if (b in a) return b;
        for (var f = b[0].toUpperCase() + b.slice(1), h = b, k = Qa.length; k--;)
            if (b = Qa[k] + f, b in a) return b;
        return h
    }

    function Q(a, b, f) {
        return (a = nb.exec(b)) ? Math.max(0, a[1] - (f || 0)) + (a[2] || "px") : b
    }

    function U(a, b, f, k, c) {
        b = f === (k ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var d = 0; 4 > b; b += 2) "margin" === f && (d += h.css(a, f + ma[b], !0, c)), k ? ("content" === f && (d -= h.css(a, "padding" + ma[b], !0, c)), "margin" !== f && (d -= h.css(a, "border" + ma[b] + "Width", !0, c))) : (d += h.css(a, "padding" + ma[b], !0, c), "padding" !== f && (d += h.css(a, "border" + ma[b] + "Width", !0, c)));
        return d
    }

    function J(a, b, f) {
        var k = !0,
            c = "width" === b ? a.offsetWidth : a.offsetHeight,
            d = ya(a),
            e = "border-box" === h.css(a, "boxSizing", !1, d);
        if (0 >= c || null == c) {
            if (c = Y(a, b, d), (0 > c || null == c) && (c = a.style[b]), Ga.test(c)) return c;
            k = e && (K.boxSizingReliable() || c === a.style[b]);
            c = parseFloat(c) || 0
        }
        return c + U(a, b, f || (e ? "border" : "content"), k, d) + "px"
    }

    function ba(a, b) {
        for (var f, k, c, d = [], e = 0, s = a.length; s > e; e++) k = a[e], k.style &&
            (d[e] = F.get(k, "olddisplay"), f = k.style.display, b ? (d[e] || "none" !== f || (k.style.display = ""), "" === k.style.display && ta(k) && (d[e] = F.access(k, "olddisplay", R(k.nodeName)))) : (c = ta(k), "none" === f && c || F.set(k, "olddisplay", c ? f : h.css(k, "display"))));
        for (e = 0; s > e; e++) k = a[e], k.style && (b && "none" !== k.style.display && "" !== k.style.display || (k.style.display = b ? d[e] || "" : "none"));
        return a
    }

    function G(a, b, f, k, h) {
        return new G.prototype.init(a, b, f, k, h)
    }

    function H() {
        return setTimeout(function() {
            ia = void 0
        }), ia = h.now()
    }

    function X(a,
        b) {
        var f, k = 0,
            h = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > k; k += 2 - b) f = ma[k], h["margin" + f] = h["padding" + f] = a;
        return b && (h.opacity = h.width = a), h
    }

    function W(a, b, f) {
        for (var k, h = (ua[b] || []).concat(ua["*"]), c = 0, d = h.length; d > c; c++)
            if (k = h[c].call(f, b, a)) return k
    }

    function q(a, b) {
        var f, k, c, d, e;
        for (f in a)
            if (k = h.camelCase(f), c = b[k], d = a[f], h.isArray(d) && (c = d[1], d = a[f] = d[0]), f !== k && (a[k] = d, delete a[f]), e = h.cssHooks[k], e && "expand" in e)
                for (f in d = e.expand(d), delete a[k], d) f in a || (a[f] = d[f], b[f] = c);
            else b[k] = c
    }

    function M(a, b, f) {
        var k,
            c = 0,
            d = za.length,
            e = h.Deferred().always(function() {
                delete s.elem
            }),
            s = function() {
                if (k) return !1;
                for (var b = ia || H(), b = Math.max(0, g.startTime + g.duration - b), f = 1 - (b / g.duration || 0), A = 0, h = g.tweens.length; h > A; A++) g.tweens[A].run(f);
                return e.notifyWith(a, [g, f, b]), 1 > f && h ? b : (e.resolveWith(a, [g]), !1)
            },
            g = e.promise({
                elem: a,
                props: h.extend({}, b),
                opts: h.extend(!0, {
                    specialEasing: {}
                }, f),
                originalProperties: b,
                originalOptions: f,
                startTime: ia || H(),
                duration: f.duration,
                tweens: [],
                createTween: function(b, f) {
                    var A = h.Tween(a, g.opts,
                        b, f, g.opts.specialEasing[b] || g.opts.easing);
                    return g.tweens.push(A), A
                },
                stop: function(b) {
                    var f = 0,
                        A = b ? g.tweens.length : 0;
                    if (k) return this;
                    for (k = !0; A > f; f++) g.tweens[f].run(1);
                    return b ? e.resolveWith(a, [g, b]) : e.rejectWith(a, [g, b]), this
                }
            });
        f = g.props;
        for (q(f, g.opts.specialEasing); d > c; c++)
            if (b = za[c].call(g, a, f, g.opts)) return b;
        return h.map(f, W, g), h.isFunction(g.opts.start) && g.opts.start.call(a, g), h.fx.timer(h.extend(s, {
            elem: a,
            anim: g,
            queue: g.opts.queue
        })), g.progress(g.opts.progress).done(g.opts.done, g.opts.complete).fail(g.opts.fail).always(g.opts.always)
    }

    function D(a) {
        return function(b, f) {
            "string" != typeof b && (f = b, b = "*");
            var k, c = 0,
                d = b.toLowerCase().match(ga) || [];
            if (h.isFunction(f))
                for (; k = d[c++];) "+" === k[0] ? (k = k.slice(1) || "*", (a[k] = a[k] || []).unshift(f)) : (a[k] = a[k] || []).push(f)
        }
    }

    function T(a, b, f, k) {
        function c(s) {
            var g;
            return d[s] = !0, h.each(a[s] || [], function(a, t) {
                var h = t(b, f, k);
                return "string" != typeof h || e || d[h] ? e ? !(g = h) : void 0 : (b.dataTypes.unshift(h), c(h), !1)
            }), g
        }
        var d = {},
            e = a === Ha;
        return c(b.dataTypes[0]) || !d["*"] && c("*")
    }

    function N(a, b) {
        var f, k, c = h.ajaxSettings.flatOptions || {};
        for (f in b) void 0 !== b[f] && ((c[f] ? a : k || (k = {}))[f] = b[f]);
        return k && h.extend(!0, a, k), a
    }

    function P(a, b, f, k) {
        var c;
        if (h.isArray(b)) h.each(b, function(b, A) {
            f || ob.test(a) ? k(a, A) : P(a + "[" + ("object" == typeof A ? b : "") + "]", A, f, k)
        });
        else if (f || "object" !== h.type(b)) k(a, b);
        else
            for (c in b) P(a + "[" + c + "]", b[c], f, k)
    }

    function Z(a) {
        return h.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var f = [],
        k = f.slice,
        s = f.concat,
        x = f.push,
        z = f.indexOf,
        S = {},
        fa = S.toString,
        ja = S.hasOwnProperty,
        K = {},
        I = a.document,
        h = function(a, b) {
            return new h.fn.init(a,
                b)
        },
        ka = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        na = /^-ms-/,
        pb = /-([\da-z])/gi,
        qb = function(a, b) {
            return b.toUpperCase()
        };
    h.fn = h.prototype = {
        jquery: "2.1.3",
        constructor: h,
        selector: "",
        length: 0,
        toArray: function() {
            return k.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : k.call(this)
        },
        pushStack: function(a) {
            a = h.merge(this.constructor(), a);
            return a.prevObject = this, a.context = this.context, a
        },
        each: function(a, b) {
            return h.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(h.map(this, function(b,
                f) {
                return a.call(b, f, b)
            }))
        },
        slice: function() {
            return this.pushStack(k.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && b > a ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: x,
        sort: f.sort,
        splice: f.splice
    };
    h.extend = h.fn.extend = function() {
        var a, b, f, k, c, d, e = arguments[0] || {},
            s = 1,
            g = arguments.length,
            l = !1;
        "boolean" == typeof e && (l = e, e = arguments[s] || {}, s++);
        "object" == typeof e || h.isFunction(e) || (e = {});
        for (s === g && (e = this, s--); g > s; s++)
            if (null != (a = arguments[s]))
                for (b in a) f = e[b], k = a[b], e !== k && (l && k && (h.isPlainObject(k) || (c = h.isArray(k))) ? (c ? (c = !1, d = f && h.isArray(f) ? f : []) : d = f && h.isPlainObject(f) ? f : {}, e[b] = h.extend(l, d, k)) : void 0 !== k && (e[b] = k));
        return e
    };
    h.extend({
        expando: "jQuery" + ("2.1.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === h.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !h.isArray(a) && 0 <= a - parseFloat(a) + 1
        },
        isPlainObject: function(a) {
            return "object" !== h.type(a) || a.nodeType || h.isWindow(a) ? !1 : a.constructor && !ja.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? S[fa.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, f = eval;
            (a = h.trim(a)) && (1 === a.indexOf("use strict") ?
                (b = I.createElement("script"), b.text = a, I.head.appendChild(b).parentNode.removeChild(b)) : f(a))
        },
        camelCase: function(a) {
            return a.replace(na, "ms-").replace(pb, qb)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, f, k) {
            var h, c = 0,
                d = a.length,
                e = b(a);
            if (k)
                if (e)
                    for (; d > c && (h = f.apply(a[c], k), !1 !== h); c++);
                else
                    for (c in a) {
                        if (h = f.apply(a[c], k), !1 === h) break
                    } else if (e)
                        for (; d > c && (h = f.call(a[c], c, a[c]), !1 !== h); c++);
                    else
                        for (c in a)
                            if (h = f.call(a[c], c, a[c]), !1 === h) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(ka, "")
        },
        makeArray: function(a, f) {
            var k = f || [];
            return null != a && (b(Object(a)) ? h.merge(k, "string" == typeof a ? [a] : a) : x.call(k, a)), k
        },
        inArray: function(a, b, f) {
            return null == b ? -1 : z.call(b, a, f)
        },
        merge: function(a, b) {
            for (var f = +b.length, k = 0, h = a.length; f > k; k++) a[h++] = b[k];
            return a.length = h, a
        },
        grep: function(a, b, f) {
            for (var k = [], h = 0, c = a.length, d = !f; c > h; h++) f = !b(a[h], h), f !== d && k.push(a[h]);
            return k
        },
        map: function(a, f, k) {
            var h, c = 0,
                d = a.length,
                e = [];
            if (b(a))
                for (; d >
                    c; c++) h = f(a[c], c, k), null != h && e.push(h);
            else
                for (c in a) h = f(a[c], c, k), null != h && e.push(h);
            return s.apply([], e)
        },
        guid: 1,
        proxy: function(a, b) {
            var f, c, d;
            return "string" == typeof b && (f = a[b], b = a, a = f), h.isFunction(a) ? (c = k.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(k.call(arguments)))
            }, d.guid = a.guid = a.guid || h.guid++, d) : void 0
        },
        now: Date.now,
        support: K
    });
    h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        S["[object " + b + "]"] = b.toLowerCase()
    });
    var qa =
        function(a) {
            function b(a, f, t, k) {
                var h, c, A, d, e;
                if ((f ? f.ownerDocument || f : W) !== C && y(f), f = f || C, t = t || [], d = f.nodeType, "string" != typeof a || !a || 1 !== d && 9 !== d && 11 !== d) return t;
                if (!k && I) {
                    if (11 !== d && (h = za.exec(a)))
                        if (A = h[1])
                            if (9 === d) {
                                if (c = f.getElementById(A), !c || !c.parentNode) return t;
                                if (c.id === A) return t.push(c), t
                            } else {
                                if (f.ownerDocument && (c = f.ownerDocument.getElementById(A)) && X(f, c) && c.id === A) return t.push(c), t
                            }
                    else {
                        if (h[2]) return ka.apply(t, f.getElementsByTagName(a)), t;
                        if ((A = h[3]) && v.getElementsByClassName) return ka.apply(t,
                            f.getElementsByClassName(A)), t
                    }
                    if (v.qsa && (!K || !K.test(a))) {
                        if (c = h = P, A = f, e = 1 !== d && a, 1 === d && "object" !== f.nodeName.toLowerCase()) {
                            d = T(a);
                            (h = f.getAttribute("id")) ? c = h.replace(Aa, "\\$&"): f.setAttribute("id", c);
                            c = "[id='" + c + "'] ";
                            for (A = d.length; A--;) d[A] = c + q(d[A]);
                            A = ra.test(a) && l(f.parentNode) || f;
                            e = d.join(",")
                        }
                        if (e) try {
                            return ka.apply(t, A.querySelectorAll(e)), t
                        } catch (E) {} finally {
                            h || f.removeAttribute("id")
                        }
                    }
                }
                return ja(a.replace(ia, "$1"), f, t, k)
            }

            function f() {
                function a(f, t) {
                    return b.push(f + " ") > D.cacheLength &&
                        delete a[b.shift()], a[f + " "] = t
                }
                var b = [];
                return a
            }

            function k(a) {
                return a[P] = !0, a
            }

            function h(a) {
                var b = C.createElement("div");
                try {
                    return !!a(b)
                } catch (f) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b)
                }
            }

            function c(a, b) {
                for (var f = a.split("|"), t = a.length; t--;) D.attrHandle[f[t]] = b
            }

            function d(a, b) {
                var f = b && a,
                    t = f && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
                if (t) return t;
                if (f)
                    for (; f = f.nextSibling;)
                        if (f === b) return -1;
                return a ? 1 : -1
            }

            function e(a) {
                return function(b) {
                    return "input" ===
                        b.nodeName.toLowerCase() && b.type === a
                }
            }

            function s(a) {
                return function(b) {
                    var f = b.nodeName.toLowerCase();
                    return ("input" === f || "button" === f) && b.type === a
                }
            }

            function g(a) {
                return k(function(b) {
                    return b = +b, k(function(f, t) {
                        for (var k, h = a([], f.length, b), c = h.length; c--;) f[k = h[c]] && (f[k] = !(t[k] = f[k]))
                    })
                })
            }

            function l(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function x() {}

            function q(a) {
                for (var b = 0, f = a.length, t = ""; f > b; b++) t += a[b].value;
                return t
            }

            function m(a, b, f) {
                var t = b.dir,
                    k = f && "parentNode" === t,
                    h = F++;
                return b.first ? function(b, f, h) {
                    for (; b = b[t];)
                        if (1 === b.nodeType || k) return a(b, f, h)
                } : function(b, f, c) {
                    var A, d, e = [L, h];
                    if (c)
                        for (; b = b[t];) {
                            if ((1 === b.nodeType || k) && a(b, f, c)) return !0
                        } else
                            for (; b = b[t];)
                                if (1 === b.nodeType || k) {
                                    if (d = b[P] || (b[P] = {}), (A = d[t]) && A[0] === L && A[1] === h) return e[2] = A[2];
                                    if (d[t] = e, e[2] = a(b, f, c)) return !0
                                }
                }
            }

            function z(a) {
                return 1 < a.length ? function(b, f, t) {
                    for (var k = a.length; k--;)
                        if (!a[k](b, f, t)) return !1;
                    return !0
                } : a[0]
            }

            function r(a, b, f, t, k) {
                for (var h, c = [], A = 0, d = a.length, e = null != b; d > A; A++)(h =
                    a[A]) && (!f || f(h, t, k)) && (c.push(h), e && b.push(A));
                return c
            }

            function M(a, f, t, h, c, d) {
                return h && !h[P] && (h = M(h)), c && !c[P] && (c = M(c, d)), k(function(k, d, e, E) {
                    var s, g, ea = [],
                        l = [],
                        x = d.length,
                        q;
                    if (!(q = k)) {
                        q = f || "*";
                        for (var m = e.nodeType ? [e] : e, Ba = [], z = 0, Ea = m.length; Ea > z; z++) b(q, m[z], Ba);
                        q = Ba
                    }
                    q = !a || !k && f ? q : r(q, ea, a, e, E);
                    m = t ? c || (k ? a : x || h) ? [] : d : q;
                    if (t && t(q, m, e, E), h)
                        for (s = r(m, l), h(s, [], e, E), e = s.length; e--;)(g = s[e]) && (m[l[e]] = !(q[l[e]] = g));
                    if (k) {
                        if (c || a) {
                            if (c) {
                                s = [];
                                for (e = m.length; e--;)(g = m[e]) && s.push(q[e] = g);
                                c(null, m = [], s, E)
                            }
                            for (e = m.length; e--;)(g = m[e]) && -1 < (s = c ? na(k, g) : ea[e]) && (k[s] = !(d[s] = g))
                        }
                    } else m = r(m === d ? m.splice(x, m.length) : m), c ? c(null, d, m, E) : ka.apply(d, m)
                })
            }

            function n(a) {
                var b, f, t, k = a.length,
                    h = D.relative[a[0].type];
                f = h || D.relative[" "];
                for (var c = h ? 1 : 0, A = m(function(a) {
                        return a === b
                    }, f, !0), d = m(function(a) {
                        return -1 < na(b, a)
                    }, f, !0), e = [function(a, f, t) {
                        a = !h && (t || f !== G) || ((b = f).nodeType ? A(a, f, t) : d(a, f, t));
                        return b = null, a
                    }]; k > c; c++)
                    if (f = D.relative[a[c].type]) e = [m(z(e), f)];
                    else {
                        if (f = D.filter[a[c].type].apply(null,
                                a[c].matches), f[P]) {
                            for (t = ++c; k > t && !D.relative[a[t].type]; t++);
                            return M(1 < c && z(e), 1 < c && q(a.slice(0, c - 1).concat({
                                value: " " === a[c - 2].type ? "*" : ""
                            })).replace(ia, "$1"), f, t > c && n(a.slice(c, t)), k > t && n(a = a.slice(t)), k > t && q(a))
                        }
                        e.push(f)
                    }
                return z(e)
            }

            function S(a, f) {
                var t = 0 < f.length,
                    h = 0 < a.length,
                    c = function(k, c, d, e, E) {
                        var s, g, ea, l = 0,
                            x = "0",
                            q = k && [],
                            m = [],
                            Ba = G,
                            z = k || h && D.find.TAG("*", E),
                            Ea = L += null == Ba ? 1 : Math.random() || .1,
                            M = z.length;
                        for (E && (G = c !== C && c); x !== M && null != (s = z[x]); x++) {
                            if (h && s) {
                                for (g = 0; ea = a[g++];)
                                    if (ea(s,
                                            c, d)) {
                                        e.push(s);
                                        break
                                    }
                                E && (L = Ea)
                            }
                            t && ((s = !ea && s) && l--, k && q.push(s))
                        }
                        if (l += x, t && x !== l) {
                            for (g = 0; ea = f[g++];) ea(q, m, c, d);
                            if (k) {
                                if (0 < l)
                                    for (; x--;) q[x] || m[x] || (m[x] = aa.call(e));
                                m = r(m)
                            }
                            ka.apply(e, m);
                            E && !k && 0 < m.length && 1 < l + f.length && b.uniqueSort(e)
                        }
                        return E && (L = Ea, G = Ba), q
                    };
                return t ? k(c) : c
            }
            var u, v, D, p, fa, T, B, ja, G, N, H, y, C, w, I, K, Z, O, X, P = "sizzle" + 1 * new Date,
                W = a.document,
                L = 0,
                F = 0,
                J = f(),
                R = f(),
                Q = f(),
                U = function(a, b) {
                    return a === b && (H = !0), 0
                },
                Y = {}.hasOwnProperty,
                V = [],
                aa = V.pop,
                ba = V.push,
                ka = V.push,
                ca = V.slice,
                na = function(a,
                    b) {
                    for (var f = 0, t = a.length; t > f; f++)
                        if (a[f] === b) return f;
                    return -1
                },
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
                ga = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)[\\x20\\t\\r\\n\\f]*\\]",
                ha = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)",
                ma = /[\x20\t\r\n\f]+/g,
                ia = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
                qa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
                sa = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
                ta = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
                ua = new RegExp(ha),
                wa = new RegExp("^" + da + "$"),
                la = {
                    ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                    TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ga),
                    PSEUDO: new RegExp("^" + ha),
                    CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                    bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                    needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
                },
                xa = /^(?:input|select|textarea|button)$/i,
                ya = /^h\d$/i,
                Ca = /^[^{]+\{\s*\[native \w/,
                za = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ra = /[+~]/,
                Aa = /'|\\/g,
                oa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
                pa = function(a, b, f) {
                    a = "0x" + b - 65536;
                    return a !== a || f ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
                },
                va = function() {
                    y()
                };
            try {
                ka.apply(V = ca.call(W.childNodes), W.childNodes), V[W.childNodes.length].nodeType
            } catch (Da) {
                ka = {
                    apply: V.length ? function(a, b) {
                        ba.apply(a, ca.call(b))
                    } : function(a, b) {
                        for (var f = a.length, t = 0; a[f++] = b[t++];);
                        a.length = f - 1
                    }
                }
            }
            v = b.support = {};
            fa = b.isXML = function(a) {
                return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
            };
            y = b.setDocument = function(a) {
                var b, f, t = a ? a.ownerDocument ||
                    a : W;
                return t !== C && 9 === t.nodeType && t.documentElement ? (C = t, w = t.documentElement, f = t.defaultView, f && f !== f.top && (f.addEventListener ? f.addEventListener("unload", va, !1) : f.attachEvent && f.attachEvent("onunload", va)), I = !fa(t), v.attributes = h(function(a) {
                        return a.className = "i", !a.getAttribute("className")
                    }), v.getElementsByTagName = h(function(a) {
                        return a.appendChild(t.createComment("")), !a.getElementsByTagName("*").length
                    }), v.getElementsByClassName = Ca.test(t.getElementsByClassName), v.getById = h(function(a) {
                        return w.appendChild(a).id =
                            P, !t.getElementsByName || !t.getElementsByName(P).length
                    }), v.getById ? (D.find.ID = function(a, b) {
                        if ("undefined" != typeof b.getElementById && I) {
                            var f = b.getElementById(a);
                            return f && f.parentNode ? [f] : []
                        }
                    }, D.filter.ID = function(a) {
                        var b = a.replace(oa, pa);
                        return function(a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete D.find.ID, D.filter.ID = function(a) {
                        var b = a.replace(oa, pa);
                        return function(a) {
                            return (a = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                        }
                    }), D.find.TAG = v.getElementsByTagName ?
                    function(a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                    } : function(a, b) {
                        var f, t = [],
                            k = 0,
                            h = b.getElementsByTagName(a);
                        if ("*" === a) {
                            for (; f = h[k++];) 1 === f.nodeType && t.push(f);
                            return t
                        }
                        return h
                    }, D.find.CLASS = v.getElementsByClassName && function(a, b) {
                        return I ? b.getElementsByClassName(a) : void 0
                    }, Z = [], K = [], (v.qsa = Ca.test(t.querySelectorAll)) && (h(function(a) {
                        w.appendChild(a).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>";
                        a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                        a.querySelectorAll("[selected]").length || K.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                        a.querySelectorAll("[id~=" + P + "-]").length || K.push("~=");
                        a.querySelectorAll(":checked").length || K.push(":checked");
                        a.querySelectorAll("a#" + P + "+*").length || K.push(".#.+[+~]")
                    }), h(function(a) {
                        var b =
                            t.createElement("input");
                        b.setAttribute("type", "hidden");
                        a.appendChild(b).setAttribute("name", "D");
                        a.querySelectorAll("[name=d]").length && K.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                        a.querySelectorAll(":enabled").length || K.push(":enabled", ":disabled");
                        a.querySelectorAll("*,:x");
                        K.push(",.*:")
                    })), (v.matchesSelector = Ca.test(O = w.matches || w.webkitMatchesSelector || w.mozMatchesSelector || w.oMatchesSelector || w.msMatchesSelector)) && h(function(a) {
                        v.disconnectedMatch = O.call(a, "div");
                        O.call(a, "[s!='']:x");
                        Z.push("!=",
                            ha)
                    }), K = K.length && new RegExp(K.join("|")), Z = Z.length && new RegExp(Z.join("|")), b = Ca.test(w.compareDocumentPosition), X = b || Ca.test(w.contains) ? function(a, b) {
                        var f = 9 === a.nodeType ? a.documentElement : a,
                            t = b && b.parentNode;
                        return a === t || !(!t || 1 !== t.nodeType || !(f.contains ? f.contains(t) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(t)))
                    } : function(a, b) {
                        if (b)
                            for (; b = b.parentNode;)
                                if (b === a) return !0;
                        return !1
                    }, U = b ? function(a, b) {
                        if (a === b) return H = !0, 0;
                        var f = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return f ? f : (f = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & f || !v.sortDetached && b.compareDocumentPosition(a) === f ? a === t || a.ownerDocument === W && X(W, a) ? -1 : b === t || b.ownerDocument === W && X(W, b) ? 1 : N ? na(N, a) - na(N, b) : 0 : 4 & f ? -1 : 1)
                    } : function(a, b) {
                        if (a === b) return H = !0, 0;
                        var f, k = 0;
                        f = a.parentNode;
                        var h = b.parentNode,
                            c = [a],
                            A = [b];
                        if (!f || !h) return a === t ? -1 : b === t ? 1 : f ? -1 : h ? 1 : N ? na(N, a) - na(N, b) : 0;
                        if (f === h) return d(a, b);
                        for (f = a; f = f.parentNode;) c.unshift(f);
                        for (f = b; f = f.parentNode;) A.unshift(f);
                        for (; c[k] === A[k];) k++;
                        return k ? d(c[k], A[k]) : c[k] === W ? -1 : A[k] === W ? 1 : 0
                    }, t) : C
            };
            b.matches = function(a, f) {
                return b(a, null, null, f)
            };
            b.matchesSelector = function(a, f) {
                if ((a.ownerDocument || a) !== C && y(a), f = f.replace(ta, "='$1']"), !(!v.matchesSelector || !I || Z && Z.test(f) || K && K.test(f))) try {
                    var t = O.call(a, f);
                    if (t || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return t
                } catch (k) {}
                return 0 < b(f, C, null, [a]).length
            };
            b.contains = function(a, b) {
                return (a.ownerDocument || a) !== C && y(a), X(a, b)
            };
            b.attr = function(a, b) {
                (a.ownerDocument ||
                    a) !== C && y(a);
                var f = D.attrHandle[b.toLowerCase()],
                    f = f && Y.call(D.attrHandle, b.toLowerCase()) ? f(a, b, !I) : void 0;
                return void 0 !== f ? f : v.attributes || !I ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            };
            b.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a);
            };
            b.uniqueSort = function(a) {
                var b, f = [],
                    t = 0,
                    k = 0;
                if (H = !v.detectDuplicates, N = !v.sortStable && a.slice(0), a.sort(U), H) {
                    for (; b = a[k++];) b === a[k] && (t = f.push(k));
                    for (; t--;) a.splice(f[t], 1)
                }
                return N = null, a
            };
            p = b.getText = function(a) {
                var b,
                    f = "",
                    t = 0;
                if (b = a.nodeType)
                    if (1 === b || 9 === b || 11 === b) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) f += p(a)
                    } else {
                        if (3 === b || 4 === b) return a.nodeValue
                    }
                else
                    for (; b = a[t++];) f += p(b);
                return f
            };
            D = b.selectors = {
                cacheLength: 50,
                createPseudo: k,
                match: la,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(oa, pa), a[3] = (a[3] ||
                            a[4] || a[5] || "").replace(oa, pa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, f = !a[6] && a[2];
                        return la.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : f && ua.test(f) && (b = T(f, !0)) && (b = f.indexOf(")", f.length - b) - f.length) && (a[0] = a[0].slice(0, b), a[2] = f.slice(0, b)), a.slice(0,
                            3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(oa, pa).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = J[a + " "];
                        return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && J(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, f, t) {
                        return function(k) {
                            k = b.attr(k, a);
                            return null == k ? "!=" === f : f ? (k +=
                                "", "=" === f ? k === t : "!=" === f ? k !== t : "^=" === f ? t && 0 === k.indexOf(t) : "*=" === f ? t && -1 < k.indexOf(t) : "$=" === f ? t && k.slice(-t.length) === t : "~=" === f ? -1 < (" " + k.replace(ma, " ") + " ").indexOf(t) : "|=" === f ? k === t || k.slice(0, t.length + 1) === t + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, f, t, k) {
                        var h = "nth" !== a.slice(0, 3),
                            c = "last" !== a.slice(-4),
                            A = "of-type" === b;
                        return 1 === t && 0 === k ? function(a) {
                            return !!a.parentNode
                        } : function(b, f, d) {
                            var e, E, s, g, ea;
                            f = h !== c ? "nextSibling" : "previousSibling";
                            var l = b.parentNode,
                                x = A && b.nodeName.toLowerCase();
                            d = !d &&
                                !A;
                            if (l) {
                                if (h) {
                                    for (; f;) {
                                        for (E = b; E = E[f];)
                                            if (A ? E.nodeName.toLowerCase() === x : 1 === E.nodeType) return !1;
                                        ea = f = "only" === a && !ea && "nextSibling"
                                    }
                                    return !0
                                }
                                if (ea = [c ? l.firstChild : l.lastChild], c && d)
                                    for (d = l[P] || (l[P] = {}), e = d[a] || [], g = e[0] === L && e[1], s = e[0] === L && e[2], E = g && l.childNodes[g]; E = ++g && E && E[f] || (s = g = 0) || ea.pop();) {
                                        if (1 === E.nodeType && ++s && E === b) {
                                            d[a] = [L, g, s];
                                            break
                                        }
                                    } else if (d && (e = (b[P] || (b[P] = {}))[a]) && e[0] === L) s = e[1];
                                    else
                                        for (;
                                            (E = ++g && E && E[f] || (s = g = 0) || ea.pop()) && ((A ? E.nodeName.toLowerCase() !== x : 1 !== E.nodeType) ||
                                                !++s || (d && ((E[P] || (E[P] = {}))[a] = [L, s]), E !== b)););
                                return s -= k, s === t || 0 === s % t && 0 <= s / t
                            }
                        }
                    },
                    PSEUDO: function(a, f) {
                        var t, h = D.pseudos[a] || D.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return h[P] ? h(f) : 1 < h.length ? (t = [a, a, "", f], D.setFilters.hasOwnProperty(a.toLowerCase()) ? k(function(a, b) {
                            for (var t, k = h(a, f), c = k.length; c--;) t = na(a, k[c]), a[t] = !(b[t] = k[c])
                        }) : function(a) {
                            return h(a, 0, t)
                        }) : h
                    }
                },
                pseudos: {
                    not: k(function(a) {
                        var b = [],
                            f = [],
                            t = B(a.replace(ia, "$1"));
                        return t[P] ? k(function(a, b, f, k) {
                            var h;
                            f = t(a, null, k, []);
                            for (k = a.length; k--;)(h = f[k]) && (a[k] = !(b[k] = h))
                        }) : function(a, k, h) {
                            return b[0] = a, t(b, null, h, f), b[0] = null, !f.pop()
                        }
                    }),
                    has: k(function(a) {
                        return function(f) {
                            return 0 < b(a, f).length
                        }
                    }),
                    contains: k(function(a) {
                        return a = a.replace(oa, pa),
                            function(b) {
                                return -1 < (b.textContent || b.innerText || p(b)).indexOf(a)
                            }
                    }),
                    lang: k(function(a) {
                        return wa.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(oa, pa).toLowerCase(),
                            function(b) {
                                var f;
                                do
                                    if (f = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return f =
                                        f.toLowerCase(), f === a || 0 === f.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var f = a.location && a.location.hash;
                        return f && f.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === w
                    },
                    focus: function(a) {
                        return a === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return !1 === a.disabled
                    },
                    disabled: function(a) {
                        return !0 === a.disabled
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b &&
                            !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (6 > a.nodeType) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !D.pseudos.empty(a)
                    },
                    header: function(a) {
                        return ya.test(a.nodeName)
                    },
                    input: function(a) {
                        return xa.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" ===
                            a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: g(function() {
                        return [0]
                    }),
                    last: g(function(a, b) {
                        return [b - 1]
                    }),
                    eq: g(function(a, b, f) {
                        return [0 > f ? f + b : f]
                    }),
                    even: g(function(a, b) {
                        for (var f = 0; b > f; f += 2) a.push(f);
                        return a
                    }),
                    odd: g(function(a, b) {
                        for (var f = 1; b > f; f += 2) a.push(f);
                        return a
                    }),
                    lt: g(function(a, b, f) {
                        for (b = 0 > f ? f + b : f; 0 <= --b;) a.push(b);
                        return a
                    }),
                    gt: g(function(a, b, f) {
                        for (f = 0 > f ? f + b : f; ++f < b;) a.push(f);
                        return a
                    })
                }
            };
            D.pseudos.nth = D.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) D.pseudos[u] = e(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) D.pseudos[u] = s(u);
            x.prototype = D.filters = D.pseudos;
            D.setFilters = new x;
            T = b.tokenize = function(a, f) {
                var t, k, h, c, d, e, E;
                if (d = R[a + " "]) return f ? 0 : d.slice(0);
                d = a;
                e = [];
                for (E = D.preFilter; d;) {
                    t && !(k = qa.exec(d)) || (k && (d = d.slice(k[0].length) || d), e.push(h = []));
                    t = !1;
                    (k = sa.exec(d)) && (t = k.shift(), h.push({
                        value: t,
                        type: k[0].replace(ia, " ")
                    }), d = d.slice(t.length));
                    for (c in D.filter) !(k = la[c].exec(d)) || E[c] && !(k = E[c](k)) || (t = k.shift(), h.push({
                            value: t,
                            type: c,
                            matches: k
                        }),
                        d = d.slice(t.length));
                    if (!t) break
                }
                return f ? d.length : d ? b.error(a) : R(a, e).slice(0)
            };
            return B = b.compile = function(a, b) {
                    var f, t = [],
                        k = [],
                        h = Q[a + " "];
                    if (!h) {
                        b || (b = T(a));
                        for (f = b.length; f--;) h = n(b[f]), h[P] ? t.push(h) : k.push(h);
                        h = Q(a, S(k, t));
                        h.selector = a
                    }
                    return h
                }, ja = b.select = function(a, b, f, t) {
                    var k, h, c, A, d, e = "function" == typeof a && a,
                        E = !t && T(a = e.selector || a);
                    if (f = f || [], 1 === E.length) {
                        if (h = E[0] = E[0].slice(0), 2 < h.length && "ID" === (c = h[0]).type && v.getById && 9 === b.nodeType && I && D.relative[h[1].type]) {
                            if (b = (D.find.ID(c.matches[0].replace(oa,
                                    pa), b) || [])[0], !b) return f;
                            e && (b = b.parentNode);
                            a = a.slice(h.shift().value.length)
                        }
                        for (k = la.needsContext.test(a) ? 0 : h.length; k-- && (c = h[k], !D.relative[A = c.type]);)
                            if ((d = D.find[A]) && (t = d(c.matches[0].replace(oa, pa), ra.test(h[0].type) && l(b.parentNode) || b))) {
                                if (h.splice(k, 1), a = t.length && q(h), !a) return ka.apply(f, t), f;
                                break
                            }
                    }
                    return (e || B(a, E))(t, b, !I, f, ra.test(a) && l(b.parentNode) || b), f
                }, v.sortStable = P.split("").sort(U).join("") === P, v.detectDuplicates = !!H, y(), v.sortDetached = h(function(a) {
                    return 1 & a.compareDocumentPosition(C.createElement("div"))
                }),
                h(function(a) {
                    return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                }) || c("type|href|height|width", function(a, b, f) {
                    return f ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                }), v.attributes && h(function(a) {
                    return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                }) || c("value", function(a, b, f) {
                    return f || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                }), h(function(a) {
                    return null == a.getAttribute("disabled")
                }) || c("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    function(a, b, f) {
                        var t;
                        return f ? void 0 : !0 === a[b] ? b.toLowerCase() : (t = a.getAttributeNode(b)) && t.specified ? t.value : null
                    }), b
        }(a);
    h.find = qa;
    h.expr = qa.selectors;
    h.expr[":"] = h.expr.pseudos;
    h.unique = qa.uniqueSort;
    h.text = qa.getText;
    h.isXMLDoc = qa.isXML;
    h.contains = qa.contains;
    var Ra = h.expr.match.needsContext,
        Sa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        jb = /^.[^:#\[\.,]*$/;
    h.filter = function(a, b, f) {
        var k = b[0];
        return f && (a = ":not(" + a + ")"), 1 === b.length && 1 === k.nodeType ? h.find.matchesSelector(k, a) ? [k] : [] : h.find.matches(a, h.grep(b,
            function(a) {
                return 1 === a.nodeType
            }))
    };
    h.fn.extend({
        find: function(a) {
            var b, f = this.length,
                k = [],
                c = this;
            if ("string" != typeof a) return this.pushStack(h(a).filter(function() {
                for (b = 0; f > b; b++)
                    if (h.contains(c[b], this)) return !0
            }));
            for (b = 0; f > b; b++) h.find(a, c[b], k);
            return k = this.pushStack(1 < f ? h.unique(k) : k), k.selector = this.selector ? this.selector + " " + a : a, k
        },
        filter: function(a) {
            return this.pushStack(e(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(e(this, a || [], !0))
        },
        is: function(a) {
            return !!e(this, "string" ==
                typeof a && Ra.test(a) ? h(a) : a || [], !1).length
        }
    });
    var ra, sb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (h.fn.init = function(a, b) {
        var f, k;
        if (!a) return this;
        if ("string" == typeof a) {
            if (f = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : sb.exec(a), !f || !f[1] && b) return !b || b.jquery ? (b || ra).find(a) : this.constructor(b).find(a);
            if (f[1]) {
                if (b = b instanceof h ? b[0] : b, h.merge(this, h.parseHTML(f[1], b && b.nodeType ? b.ownerDocument || b : I, !0)), Sa.test(f[1]) && h.isPlainObject(b))
                    for (f in b) h.isFunction(this[f]) ? this[f](b[f]) :
                        this.attr(f, b[f]);
                return this
            }
            return k = I.getElementById(f[2]), k && k.parentNode && (this.length = 1, this[0] = k), this.context = I, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : h.isFunction(a) ? "undefined" != typeof ra.ready ? ra.ready(a) : a(h) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
    }).prototype = h.fn;
    ra = h(I);
    var tb = /^(?:parents|prev(?:Until|All))/,
        ub = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    h.extend({
        dir: function(a, b, f) {
            for (var k = [], c = void 0 !== f;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (c && h(a).is(f)) break;
                    k.push(a)
                }
            return k
        },
        sibling: function(a, b) {
            for (var f = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && f.push(a);
            return f
        }
    });
    h.fn.extend({
        has: function(a) {
            var b = h(a, this),
                f = b.length;
            return this.filter(function() {
                for (var a = 0; f > a; a++)
                    if (h.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var f, k = 0, c = this.length, d = [], e = Ra.test(a) || "string" != typeof a ? h(a, b || this.context) : 0; c > k; k++)
                for (f = this[k]; f && f !== b; f = f.parentNode)
                    if (11 >
                        f.nodeType && (e ? -1 < e.index(f) : 1 === f.nodeType && h.find.matchesSelector(f, a))) {
                        d.push(f);
                        break
                    }
            return this.pushStack(1 < d.length ? h.unique(d) : d)
        },
        index: function(a) {
            return a ? "string" == typeof a ? z.call(h(a), this[0]) : z.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(h.unique(h.merge(this.get(), h(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    h.each({
        parent: function(a) {
            return (a =
                a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return h.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, f) {
            return h.dir(a, "parentNode", f)
        },
        next: function(a) {
            return d(a, "nextSibling")
        },
        prev: function(a) {
            return d(a, "previousSibling")
        },
        nextAll: function(a) {
            return h.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return h.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, f) {
            return h.dir(a, "nextSibling", f)
        },
        prevUntil: function(a, b, f) {
            return h.dir(a, "previousSibling", f)
        },
        siblings: function(a) {
            return h.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return h.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || h.merge([], a.childNodes)
        }
    }, function(a, b) {
        h.fn[a] = function(f, k) {
            var c = h.map(this, b, f);
            return "Until" !== a.slice(-5) && (k = f), k && "string" == typeof k && (c = h.filter(k, c)), 1 < this.length && (ub[a] || h.unique(c), tb.test(a) && c.reverse()), this.pushStack(c)
        }
    });
    var ga = /\S+/g,
        Na = {};
    h.Callbacks = function(a) {
        a = "string" == typeof a ? Na[a] || g(a) : h.extend({}, a);
        var b, f, k, c, d, e, s = [],
            l = !a.once && [],
            x = function(h) {
                b =
                    a.memory && h;
                f = !0;
                e = c || 0;
                c = 0;
                d = s.length;
                for (k = !0; s && d > e; e++)
                    if (!1 === s[e].apply(h[0], h[1]) && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                k = !1;
                s && (l ? l.length && x(l.shift()) : b ? s = [] : q.disable())
            },
            q = {
                add: function() {
                    if (s) {
                        var f = s.length;
                        ! function rb(b) {
                            h.each(b, function(b, f) {
                                var k = h.type(f);
                                "function" === k ? a.unique && q.has(f) || s.push(f) : f && f.length && "string" !== k && rb(f)
                            })
                        }(arguments);
                        k ? d = s.length : b && (c = f, x(b))
                    }
                    return this
                },
                remove: function() {
                    return s && h.each(arguments, function(a, b) {
                        for (var f; - 1 < (f = h.inArray(b, s, f));) s.splice(f,
                            1), k && (d >= f && d--, e >= f && e--)
                    }), this
                },
                has: function(a) {
                    return a ? -1 < h.inArray(a, s) : !(!s || !s.length)
                },
                empty: function() {
                    return s = [], d = 0, this
                },
                disable: function() {
                    return s = l = b = void 0, this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return l = void 0, b || q.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(a, b) {
                    return !s || f && !l || (b = b || [], b = [a, b.slice ? b.slice() : b], k ? l.push(b) : x(b)), this
                },
                fire: function() {
                    return q.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!f
                }
            };
        return q
    };
    h.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", h.Callbacks("memory")]
                ],
                f = "pending",
                k = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return c.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return h.Deferred(function(f) {
                            h.each(b, function(b, t) {
                                var d = h.isFunction(a[b]) && a[b];
                                c[t[1]](function() {
                                    var a = d && d.apply(this, arguments);
                                    a && h.isFunction(a.promise) ? a.promise().done(f.resolve).fail(f.reject).progress(f.notify) :
                                        f[t[0] + "With"](this === k ? f.promise() : this, d ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? h.extend(a, k) : k
                    }
                },
                c = {};
            return k.pipe = k.then, h.each(b, function(a, t) {
                var h = t[2],
                    d = t[3];
                k[t[1]] = h.add;
                d && h.add(function() {
                    f = d
                }, b[1 ^ a][2].disable, b[2][2].lock);
                c[t[0]] = function() {
                    return c[t[0] + "With"](this === c ? k : this, arguments), this
                };
                c[t[0] + "With"] = h.fireWith
            }), k.promise(c), a && a.call(c, c), c
        },
        when: function(a) {
            var b = 0,
                f = k.call(arguments),
                c = f.length,
                d = 1 !== c || a && h.isFunction(a.promise) ? c : 0,
                e = 1 === d ? a : h.Deferred(),
                s = function(a, b, f) {
                    return function(t) {
                        b[a] = this;
                        f[a] = 1 < arguments.length ? k.call(arguments) : t;
                        f === g ? e.notifyWith(b, f) : --d || e.resolveWith(b, f)
                    }
                },
                g, l, x;
            if (1 < c)
                for (g = Array(c), l = Array(c), x = Array(c); c > b; b++) f[b] && h.isFunction(f[b].promise) ? f[b].promise().done(s(b, x, f)).fail(e.reject).progress(s(b, l, g)) : --d;
            return d || e.resolveWith(x, f), e.promise()
        }
    });
    var Aa;
    h.fn.ready = function(a) {
        return h.ready.promise().done(a), this
    };
    h.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? h.readyWait++ :
                h.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --h.readyWait : h.isReady) || (h.isReady = !0, !0 !== a && 0 < --h.readyWait || (Aa.resolveWith(I, [h]), h.fn.triggerHandler && (h(I).triggerHandler("ready"), h(I).off("ready"))))
        }
    });
    h.ready.promise = function(b) {
        return Aa || (Aa = h.Deferred(), "complete" === I.readyState ? setTimeout(h.ready) : (I.addEventListener("DOMContentLoaded", m, !1), a.addEventListener("load", m, !1))), Aa.promise(b)
    };
    h.ready.promise();
    var ha = h.access = function(a, b, f, k, c, d, e) {
        var s = 0,
            g = a.length,
            l = null == f;
        if ("object" === h.type(f))
            for (s in c = !0, f) h.access(a, b, s, f[s], !0, d, e);
        else if (void 0 !== k && (c = !0, h.isFunction(k) || (e = !0), l && (e ? (b.call(a, k), b = null) : (l = b, b = function(a, b, f) {
                return l.call(h(a), f)
            })), b))
            for (; g > s; s++) b(a[s], f, e ? k : k.call(a[s], s, b(a[s], f)));
        return c ? a : l ? b.call(a) : g ? b(a[0], f) : d
    };
    h.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    n.uid = 1;
    n.accepts = h.acceptData;
    n.prototype = {
        key: function(a) {
            if (!n.accepts(a)) return 0;
            var b = {},
                f = a[this.expando];
            if (!f) {
                f = n.uid++;
                try {
                    b[this.expando] = {
                        value: f
                    }, Object.defineProperties(a,
                        b)
                } catch (k) {
                    b[this.expando] = f, h.extend(a, b)
                }
            }
            return this.cache[f] || (this.cache[f] = {}), f
        },
        set: function(a, b, f) {
            var k;
            a = this.key(a);
            var c = this.cache[a];
            if ("string" == typeof b) c[b] = f;
            else if (h.isEmptyObject(c)) h.extend(this.cache[a], b);
            else
                for (k in b) c[k] = b[k];
            return c
        },
        get: function(a, b) {
            var f = this.cache[this.key(a)];
            return void 0 === b ? f : f[b]
        },
        access: function(a, b, f) {
            var k;
            return void 0 === b || b && "string" == typeof b && void 0 === f ? (k = this.get(a, b), void 0 !== k ? k : this.get(a, h.camelCase(b))) : (this.set(a, b, f), void 0 !==
                f ? f : b)
        },
        remove: function(a, b) {
            var f, k, c = this.key(a),
                d = this.cache[c];
            if (void 0 === b) this.cache[c] = {};
            else
                for (h.isArray(b) ? k = b.concat(b.map(h.camelCase)) : (f = h.camelCase(b), b in d ? k = [b, f] : (k = f, k = k in d ? [k] : k.match(ga) || [])), f = k.length; f--;) delete d[k[f]]
        },
        hasData: function(a) {
            return !h.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var F = new n,
        V = new n,
        lb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        kb = /([A-Z])/g;
    h.extend({
        hasData: function(a) {
            return V.hasData(a) ||
                F.hasData(a)
        },
        data: function(a, b, f) {
            return V.access(a, b, f)
        },
        removeData: function(a, b) {
            V.remove(a, b)
        },
        _data: function(a, b, f) {
            return F.access(a, b, f)
        },
        _removeData: function(a, b) {
            F.remove(a, b)
        }
    });
    h.fn.extend({
        data: function(a, b) {
            var f, k, c, d = this[0],
                e = d && d.attributes;
            if (void 0 === a) {
                if (this.length && (c = V.get(d), 1 === d.nodeType && !F.get(d, "hasDataAttrs"))) {
                    for (f = e.length; f--;) e[f] && (k = e[f].name, 0 === k.indexOf("data-") && (k = h.camelCase(k.slice(5)), p(d, k, c[k])));
                    F.set(d, "hasDataAttrs", !0)
                }
                return c
            }
            return "object" == typeof a ?
                this.each(function() {
                    V.set(this, a)
                }) : ha(this, function(b) {
                    var f, k = h.camelCase(a);
                    if (d && void 0 === b) {
                        if ((f = V.get(d, a), void 0 !== f) || (f = V.get(d, k), void 0 !== f) || (f = p(d, k, void 0), void 0 !== f)) return f
                    } else this.each(function() {
                        var f = V.get(this, k);
                        V.set(this, k, b); - 1 !== a.indexOf("-") && void 0 !== f && V.set(this, a, b)
                    })
                }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                V.remove(this, a)
            })
        }
    });
    h.extend({
        queue: function(a, b, f) {
            var k;
            return a ? (b = (b || "fx") + "queue", k = F.get(a, b), f && (!k ||
                h.isArray(f) ? k = F.access(a, b, h.makeArray(f)) : k.push(f)), k || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var f = h.queue(a, b),
                k = f.length,
                c = f.shift(),
                d = h._queueHooks(a, b),
                e = function() {
                    h.dequeue(a, b)
                };
            "inprogress" === c && (c = f.shift(), k--);
            c && ("fx" === b && f.unshift("inprogress"), delete d.stop, c.call(a, e, d));
            !k && d && d.empty.fire()
        },
        _queueHooks: function(a, b) {
            var f = b + "queueHooks";
            return F.get(a, f) || F.access(a, f, {
                empty: h.Callbacks("once memory").add(function() {
                    F.remove(a, [b + "queue", f])
                })
            })
        }
    });
    h.fn.extend({
        queue: function(a,
            b) {
            var f = 2;
            return "string" != typeof a && (b = a, a = "fx", f--), arguments.length < f ? h.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var f = h.queue(this, a, b);
                h._queueHooks(this, a);
                "fx" === a && "inprogress" !== f[0] && h.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                h.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var f, k = 1,
                c = h.Deferred(),
                d = this,
                e = this.length,
                s = function() {
                    --k || c.resolveWith(d, [d])
                };
            "string" != typeof a && (b = a, a = void 0);
            for (a = a ||
                "fx"; e--;)(f = F.get(d[e], a + "queueHooks")) && f.empty && (k++, f.empty.add(s));
            return s(), c.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ma = ["Top", "Right", "Bottom", "Left"],
        ta = function(a, b) {
            return a = b || a, "none" === h.css(a, "display") || !h.contains(a.ownerDocument, a)
        },
        Ta = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = I.createDocumentFragment().appendChild(I.createElement("div")),
            b = I.createElement("input");
        b.setAttribute("type", "radio");
        b.setAttribute("checked", "checked");
        b.setAttribute("name",
            "t");
        a.appendChild(b);
        K.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        K.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    }();
    K.focusinBubbles = "onfocusin" in a;
    var vb = /^key/,
        wb = /^(?:mouse|pointer|contextmenu)|click/,
        Ua = /^(?:focusinfocus|focusoutblur)$/,
        Va = /^([^.]*)(?:\.(.+)|)$/;
    h.event = {
        global: {},
        add: function(a, b, f, k, c) {
            var d, e, s, g, l, x, q, m, z, r;
            if (l = F.get(a))
                for (f.handler && (d = f, f = d.handler, c = d.selector), f.guid || (f.guid = h.guid++), (g = l.events) || (g =
                        l.events = {}), (e = l.handle) || (e = l.handle = function(b) {
                        return "undefined" !== typeof h && h.event.triggered !== b.type ? h.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(ga) || [""], l = b.length; l--;) s = Va.exec(b[l]) || [], z = r = s[1], s = (s[2] || "").split(".").sort(), z && (q = h.event.special[z] || {}, z = (c ? q.delegateType : q.bindType) || z, q = h.event.special[z] || {}, x = h.extend({
                    type: z,
                    origType: r,
                    data: k,
                    handler: f,
                    guid: f.guid,
                    selector: c,
                    needsContext: c && h.expr.match.needsContext.test(c),
                    namespace: s.join(".")
                }, d), (m = g[z]) || (m =
                    g[z] = [], m.delegateCount = 0, q.setup && !1 !== q.setup.call(a, k, s, e) || a.addEventListener && a.addEventListener(z, e, !1)), q.add && (q.add.call(a, x), x.handler.guid || (x.handler.guid = f.guid)), c ? m.splice(m.delegateCount++, 0, x) : m.push(x), h.event.global[z] = !0)
        },
        remove: function(a, b, f, k, c) {
            var d, e, s, g, l, x, q, m, z, r, M, n = F.hasData(a) && F.get(a);
            if (n && (g = n.events)) {
                b = (b || "").match(ga) || [""];
                for (l = b.length; l--;)
                    if (s = Va.exec(b[l]) || [], z = M = s[1], r = (s[2] || "").split(".").sort(), z) {
                        q = h.event.special[z] || {};
                        z = (k ? q.delegateType : q.bindType) ||
                            z;
                        m = g[z] || [];
                        s = s[2] && new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (e = d = m.length; d--;) x = m[d], !c && M !== x.origType || f && f.guid !== x.guid || s && !s.test(x.namespace) || k && k !== x.selector && ("**" !== k || !x.selector) || (m.splice(d, 1), x.selector && m.delegateCount--, q.remove && q.remove.call(a, x));
                        e && !m.length && (q.teardown && !1 !== q.teardown.call(a, r, n.handle) || h.removeEvent(a, z, n.handle), delete g[z])
                    } else
                        for (z in g) h.event.remove(a, z + b[l], f, k, !0);
                h.isEmptyObject(g) && (delete n.handle, F.remove(a, "events"))
            }
        },
        trigger: function(b, f, k, c) {
            var d, e, s, g, l, x, q, m = [k || I],
                z = ja.call(b, "type") ? b.type : b;
            d = ja.call(b, "namespace") ? b.namespace.split(".") : [];
            if (e = s = k = k || I, 3 !== k.nodeType && 8 !== k.nodeType && !Ua.test(z + h.event.triggered) && (0 <= z.indexOf(".") && (d = z.split("."), z = d.shift(), d.sort()), l = 0 > z.indexOf(":") && "on" + z, b = b[h.expando] ? b : new h.Event(z, "object" == typeof b && b), b.isTrigger = c ? 2 : 3, b.namespace = d.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target ||
                    (b.target = k), f = null == f ? [b] : h.makeArray(f, [b]), q = h.event.special[z] || {}, c || !q.trigger || !1 !== q.trigger.apply(k, f))) {
                if (!c && !q.noBubble && !h.isWindow(k)) {
                    g = q.delegateType || z;
                    for (Ua.test(g + z) || (e = e.parentNode); e; e = e.parentNode) m.push(e), s = e;
                    s === (k.ownerDocument || I) && m.push(s.defaultView || s.parentWindow || a)
                }
                for (d = 0;
                    (e = m[d++]) && !b.isPropagationStopped();) b.type = 1 < d ? g : q.bindType || z, (x = (F.get(e, "events") || {})[b.type] && F.get(e, "handle")) && x.apply(e, f), (x = l && e[l]) && x.apply && h.acceptData(e) && (b.result = x.apply(e,
                    f), !1 === b.result && b.preventDefault());
                return b.type = z, c || b.isDefaultPrevented() || q._default && !1 !== q._default.apply(m.pop(), f) || !h.acceptData(k) || l && h.isFunction(k[z]) && !h.isWindow(k) && (s = k[l], s && (k[l] = null), h.event.triggered = z, k[z](), h.event.triggered = void 0, s && (k[l] = s)), b.result
            }
        },
        dispatch: function(a) {
            a = h.event.fix(a);
            var b, f, c, d, e, s = [],
                g = k.call(arguments);
            b = (F.get(this, "events") || {})[a.type] || [];
            var l = h.event.special[a.type] || {};
            if (g[0] = a, a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this,
                    a)) {
                s = h.event.handlers.call(this, a, b);
                for (b = 0;
                    (d = s[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = d.elem, f = 0;
                        (e = d.handlers[f++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(e.namespace) || (a.handleObj = e, a.data = e.data, c = ((h.event.special[e.origType] || {}).handle || e.handler).apply(d.elem, g), void 0 === c || !1 !== (a.result = c) || (a.preventDefault(), a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var f, k, c, d, e = [],
                s =
                b.delegateCount,
                g = a.target;
            if (s && g.nodeType && (!a.button || "click" !== a.type))
                for (; g !== this; g = g.parentNode || this)
                    if (!0 !== g.disabled || "click" !== a.type) {
                        k = [];
                        for (f = 0; s > f; f++) d = b[f], c = d.selector + " ", void 0 === k[c] && (k[c] = d.needsContext ? 0 <= h(c, this).index(g) : h.find(c, this, null, [g]).length), k[c] && k.push(d);
                        k.length && e.push({
                            elem: g,
                            handlers: k
                        })
                    }
            return s < b.length && e.push({
                elem: this,
                handlers: b.slice(s)
            }), e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var f, k, c, h = b.button;
                return null == a.pageX && null != b.clientX && (f = a.target.ownerDocument || I, k = f.documentElement, c = f.body, a.pageX = b.clientX + (k && k.scrollLeft || c && c.scrollLeft || 0) - (k && k.clientLeft || c && c.clientLeft ||
                    0), a.pageY = b.clientY + (k && k.scrollTop || c && c.scrollTop || 0) - (k && k.clientTop || c && c.clientTop || 0)), a.which || void 0 === h || (a.which = 1 & h ? 1 : 2 & h ? 3 : 4 & h ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[h.expando]) return a;
            var b, f, k;
            b = a.type;
            var c = a,
                d = this.fixHooks[b];
            d || (this.fixHooks[b] = d = wb.test(b) ? this.mouseHooks : vb.test(b) ? this.keyHooks : {});
            k = d.props ? this.props.concat(d.props) : this.props;
            a = new h.Event(c);
            for (b = k.length; b--;) f = k[b], a[f] = c[f];
            return a.target || (a.target = I), 3 === a.target.nodeType && (a.target = a.target.parentNode),
                d.filter ? d.filter(a, c) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== u() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && h.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return h.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent &&
                        (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, f, k) {
            a = h.extend(new h.Event, f, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            k ? h.event.trigger(a, null, b) : h.event.dispatch.call(b, a);
            a.isDefaultPrevented() && f.preventDefault()
        }
    };
    h.removeEvent = function(a, b, f) {
        a.removeEventListener && a.removeEventListener(b, f, !1)
    };
    h.Event = function(a, b) {
        return this instanceof h.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 ===
            a.returnValue ? r : v) : this.type = a, b && h.extend(this, b), this.timeStamp = a && a.timeStamp || h.now(), void(this[h.expando] = !0)) : new h.Event(a, b)
    };
    h.Event.prototype = {
        isDefaultPrevented: v,
        isPropagationStopped: v,
        isImmediatePropagationStopped: v,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = r;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = r;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a =
                this.originalEvent;
            this.isImmediatePropagationStopped = r;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    h.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        h.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var f, k = a.relatedTarget,
                    c = a.handleObj;
                return (!k || k !== this && !h.contains(this, k)) && (a.type = c.origType, f = c.handler.apply(this, arguments), a.type = b), f
            }
        }
    });
    K.focusinBubbles || h.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var f = function(a) {
            h.event.simulate(b, a.target, h.event.fix(a), !0)
        };
        h.event.special[b] = {
            setup: function() {
                var k = this.ownerDocument || this,
                    c = F.access(k, b);
                c || k.addEventListener(a, f, !0);
                F.access(k, b, (c || 0) + 1)
            },
            teardown: function() {
                var k = this.ownerDocument || this,
                    c = F.access(k, b) - 1;
                c ? F.access(k, b, c) : (k.removeEventListener(a, f, !0), F.remove(k, b))
            }
        }
    });
    h.fn.extend({
        on: function(a, b, f, k, c) {
            var d, e;
            if ("object" == typeof a) {
                "string" != typeof b && (f = f || b, b = void 0);
                for (e in a) this.on(e, b, f,
                    a[e], c);
                return this
            }
            if (null == f && null == k ? (k = b, f = b = void 0) : null == k && ("string" == typeof b ? (k = f, f = void 0) : (k = f, f = b, b = void 0)), !1 === k) k = v;
            else if (!k) return this;
            return 1 === c && (d = k, k = function(a) {
                return h().off(a), d.apply(this, arguments)
            }, k.guid = d.guid || (d.guid = h.guid++)), this.each(function() {
                h.event.add(this, a, k, f, b)
            })
        },
        one: function(a, b, f, k) {
            return this.on(a, b, f, k, 1)
        },
        off: function(a, b, f) {
            var k, c;
            if (a && a.preventDefault && a.handleObj) return k = a.handleObj, h(a.delegateTarget).off(k.namespace ? k.origType + "." + k.namespace :
                k.origType, k.selector, k.handler), this;
            if ("object" == typeof a) {
                for (c in a) this.off(c, b, a[c]);
                return this
            }
            return (!1 === b || "function" == typeof b) && (f = b, b = void 0), !1 === f && (f = v), this.each(function() {
                h.event.remove(this, a, f, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                h.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var f = this[0];
            return f ? h.event.trigger(a, b, f, !0) : void 0
        }
    });
    var Wa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Xa = /<([\w:]+)/,
        xb = /<|&#?\w+;/,
        yb =
        /<(?:script|style|link)/i,
        zb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ya = /^$|\/(?:java|ecma)script/i,
        mb = /^true\/(.*)/,
        Ab = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        da = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    da.optgroup = da.option;
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead;
    da.th = da.td;
    h.extend({
        clone: function(a,
            b, f) {
            var k, c, d, e, s = a.cloneNode(!0),
                g = h.contains(a.ownerDocument, a);
            if (!(K.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || h.isXMLDoc(a)))
                for (e = l(s), d = l(a), k = 0, c = d.length; c > k; k++) {
                    var x = d[k],
                        q = e[k],
                        m = q.nodeName.toLowerCase();
                    "input" === m && Ta.test(x.type) ? q.checked = x.checked : ("input" === m || "textarea" === m) && (q.defaultValue = x.defaultValue)
                }
            if (b)
                if (f)
                    for (d = d || l(a), e = e || l(s), k = 0, c = d.length; c > k; k++) w(d[k], e[k]);
                else w(a, s);
            return e = l(s, "script"), 0 < e.length && O(e, !g && l(a, "script")), s
        },
        buildFragment: function(a,
            b, f, k) {
            for (var c, d, e, s, g = b.createDocumentFragment(), x = [], q = 0, m = a.length; m > q; q++)
                if (c = a[q], c || 0 === c)
                    if ("object" === h.type(c)) h.merge(x, c.nodeType ? [c] : c);
                    else if (xb.test(c)) {
                d = d || g.appendChild(b.createElement("div"));
                e = (Xa.exec(c) || ["", ""])[1].toLowerCase();
                e = da[e] || da._default;
                d.innerHTML = e[1] + c.replace(Wa, "<$1></$2>") + e[2];
                for (e = e[0]; e--;) d = d.lastChild;
                h.merge(x, d.childNodes);
                d = g.firstChild;
                d.textContent = ""
            } else x.push(b.createTextNode(c));
            g.textContent = "";
            for (q = 0; c = x[q++];)
                if ((!k || -1 === h.inArray(c,
                        k)) && (s = h.contains(c.ownerDocument, c), d = l(g.appendChild(c), "script"), s && O(d), f))
                    for (e = 0; c = d[e++];) Ya.test(c.type || "") && f.push(c);
            return g
        },
        cleanData: function(a) {
            for (var b, f, k, c, d = h.event.special, e = 0; void 0 !== (f = a[e]); e++) {
                if (h.acceptData(f) && (c = f[F.expando], c && (b = F.cache[c]))) {
                    if (b.events)
                        for (k in b.events) d[k] ? h.event.remove(f, k) : h.removeEvent(f, k, b.handle);
                    F.cache[c] && delete F.cache[c]
                }
                delete V.cache[f[V.expando]]
            }
        }
    });
    h.fn.extend({
        text: function(a) {
            return ha(this, function(a) {
                return void 0 === a ? h.text(this) :
                    this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || B(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = B(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
                function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var f, k = a ? h.filter(a, this) : this, c = 0; null != (f = k[c]); c++) b || 1 !== f.nodeType || h.cleanData(l(f)), f.parentNode && (b && h.contains(f.ownerDocument, f) && O(l(f, "script")), f.parentNode.removeChild(f));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (h.cleanData(l(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return h.clone(this, a, b)
            })
        },
        html: function(a) {
            return ha(this, function(a) {
                    var b = this[0] || {},
                        f = 0,
                        k = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !yb.test(a) && !da[(Xa.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Wa, "<$1></$2>");
                        try {
                            for (; k > f; f++) b = this[f] || {}, 1 === b.nodeType && (h.cleanData(l(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (c) {}
                    }
                    b && this.empty().append(a)
                },
                null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode;
                h.cleanData(l(this));
                a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = s.apply([], a);
            var f, k, c, d, e = 0,
                g = this.length,
                x = this,
                q = g - 1,
                m = a[0],
                z = h.isFunction(m);
            if (z || 1 < g && "string" == typeof m && !K.checkClone && zb.test(m)) return this.each(function(f) {
                var k = x.eq(f);
                z && (a[0] = m.call(this, f, k.html()));
                k.domManip(a, b)
            });
            if (g && (f = h.buildFragment(a, this[0].ownerDocument, !1, this), k = f.firstChild, 1 === f.childNodes.length && (f = k), k)) {
                k = h.map(l(f, "script"), y);
                for (c = k.length; g > e; e++) d = f, e !== q && (d = h.clone(d, !0, !0), c && h.merge(k, l(d, "script"))), b.call(this[e], d, e);
                if (c)
                    for (f = k[k.length - 1].ownerDocument, h.map(k, C), e = 0; c > e; e++) d = k[e], Ya.test(d.type || "") && !F.access(d, "globalEval") && h.contains(f, d) && (d.src ? h._evalUrl && h._evalUrl(d.src) : h.globalEval(d.textContent.replace(Ab, "")))
            }
            return this
        }
    });
    h.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        h.fn[a] = function(a) {
            for (var f = [], k = h(a), c = k.length - 1, d = 0; c >= d; d++) a = d === c ? this : this.clone(!0), h(k[d])[b](a), x.apply(f, a.get());
            return this.pushStack(f)
        }
    });
    var xa, Oa = {},
        Pa = /^margin/,
        Ga = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        ya = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        var b, f, k = I.documentElement,
            c = I.createElement("div"),
            d = I.createElement("div");
        if (d.style) {
            var e = function() {
                d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                d.innerHTML = "";
                k.appendChild(c);
                var h = a.getComputedStyle(d, null);
                b = "1%" !== h.top;
                f = "4px" === h.width;
                k.removeChild(c)
            };
            d.style.backgroundClip = "content-box";
            d.cloneNode(!0).style.backgroundClip = "";
            K.clearCloneStyle = "content-box" === d.style.backgroundClip;
            c.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute";
            c.appendChild(d);
            a.getComputedStyle && h.extend(K, {
                pixelPosition: function() {
                    return e(), b
                },
                boxSizingReliable: function() {
                    return null == f && e(), f
                },
                reliableMarginRight: function() {
                    var b, f = d.appendChild(I.createElement("div"));
                    return f.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", f.style.marginRight = f.style.width =
                        "0", d.style.width = "1px", k.appendChild(c), b = !parseFloat(a.getComputedStyle(f, null).marginRight), k.removeChild(c), d.removeChild(f), b
                }
            })
        }
    }();
    h.swap = function(a, b, f, k) {
        var c, h = {};
        for (c in b) h[c] = a.style[c], a.style[c] = b[c];
        f = f.apply(a, k || []);
        for (c in b) a.style[c] = h[c];
        return f
    };
    var Bb = /^(none|table(?!-c[ea]).+)/,
        nb = new RegExp("^(" + va + ")(.*)$", "i"),
        Cb = new RegExp("^([+-])=(" + va + ")", "i"),
        Db = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Za = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qa = ["Webkit", "O", "Moz",
            "ms"
        ];
    h.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var f = Y(a, "opacity");
                        return "" === f ? "1" : f
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, f, k) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var c, d, e, s = h.camelCase(b),
                    g = a.style;
                return b = h.cssProps[s] || (h.cssProps[s] = aa(g, s)), e = h.cssHooks[b] || h.cssHooks[s], void 0 === f ? e && "get" in e && void 0 !==
                    (c = e.get(a, !1, k)) ? c : g[b] : (d = typeof f, "string" === d && (c = Cb.exec(f)) && (f = (c[1] + 1) * c[2] + parseFloat(h.css(a, b)), d = "number"), null != f && f === f && ("number" !== d || h.cssNumber[s] || (f += "px"), K.clearCloneStyle || "" !== f || 0 !== b.indexOf("background") || (g[b] = "inherit"), e && "set" in e && void 0 === (f = e.set(a, f, k)) || (g[b] = f)), void 0)
            }
        },
        css: function(a, b, f, k) {
            var c, d, e, s = h.camelCase(b);
            return b = h.cssProps[s] || (h.cssProps[s] = aa(a.style, s)), e = h.cssHooks[b] || h.cssHooks[s], e && "get" in e && (c = e.get(a, !0, f)), void 0 === c && (c = Y(a, b, k)),
                "normal" === c && b in Za && (c = Za[b]), "" === f || f ? (d = parseFloat(c), !0 === f || h.isNumeric(d) ? d || 0 : c) : c
        }
    });
    h.each(["height", "width"], function(a, b) {
        h.cssHooks[b] = {
            get: function(a, f, k) {
                return f ? Bb.test(h.css(a, "display")) && 0 === a.offsetWidth ? h.swap(a, Db, function() {
                    return J(a, b, k)
                }) : J(a, b, k) : void 0
            },
            set: function(a, f, k) {
                var c = k && ya(a);
                return Q(a, f, k ? U(a, b, k, "border-box" === h.css(a, "boxSizing", !1, c), c) : 0)
            }
        }
    });
    h.cssHooks.marginRight = ca(K.reliableMarginRight, function(a, b) {
        return b ? h.swap(a, {
            display: "inline-block"
        }, Y, [a, "marginRight"]) : void 0
    });
    h.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        h.cssHooks[a + b] = {
            expand: function(f) {
                var k = 0,
                    c = {};
                for (f = "string" == typeof f ? f.split(" ") : [f]; 4 > k; k++) c[a + ma[k] + b] = f[k] || f[k - 2] || f[0];
                return c
            }
        };
        Pa.test(a) || (h.cssHooks[a + b].set = Q)
    });
    h.fn.extend({
        css: function(a, b) {
            return ha(this, function(a, b, f) {
                var k, c = {},
                    d = 0;
                if (h.isArray(b)) {
                    f = ya(a);
                    for (k = b.length; k > d; d++) c[b[d]] = h.css(a, b[d], !1, f);
                    return c
                }
                return void 0 !== f ? h.style(a, b, f) : h.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return ba(this, !0)
        },
        hide: function() {
            return ba(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ta(this) ? h(this).show() : h(this).hide()
            })
        }
    });
    h.Tween = G;
    G.prototype = {
        constructor: G,
        init: function(a, b, f, k, c, d) {
            this.elem = a;
            this.prop = f;
            this.easing = c || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = k;
            this.unit = d || (h.cssNumber[f] ? "" : "px")
        },
        cur: function() {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        },
        run: function(a) {
            var b,
                f = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? h.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), f && f.set ? f.set(this) : G.propHooks._default.set(this), this
        }
    };
    G.prototype.init.prototype = G.prototype;
    G.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = h.css(a.elem, a.prop, ""), b && "auto" !==
                    b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                h.fx.step[a.prop] ? h.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[h.cssProps[a.prop]] || h.cssHooks[a.prop]) ? h.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    h.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    h.fx = G.prototype.init;
    h.fx.step = {};
    var ia, Da, Eb = /^(?:toggle|show|hide)$/,
        $a =
        new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        Fb = /queueHooks$/,
        za = [function(a, b, f) {
            var k, c, d, e, s, g, l, x = this,
                q = {},
                m = a.style,
                z = a.nodeType && ta(a),
                r = F.get(a, "fxshow");
            f.queue || (e = h._queueHooks(a, "fx"), null == e.unqueued && (e.unqueued = 0, s = e.empty.fire, e.empty.fire = function() {
                e.unqueued || s()
            }), e.unqueued++, x.always(function() {
                x.always(function() {
                    e.unqueued--;
                    h.queue(a, "fx").length || e.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (f.overflow = [m.overflow, m.overflowX, m.overflowY], g = h.css(a,
                "display"), l = "none" === g ? F.get(a, "olddisplay") || R(a.nodeName) : g, "inline" === l && "none" === h.css(a, "float") && (m.display = "inline-block"));
            f.overflow && (m.overflow = "hidden", x.always(function() {
                m.overflow = f.overflow[0];
                m.overflowX = f.overflow[1];
                m.overflowY = f.overflow[2]
            }));
            for (k in b)
                if (c = b[k], Eb.exec(c)) {
                    if (delete b[k], d = d || "toggle" === c, c === (z ? "hide" : "show")) {
                        if ("show" !== c || !r || void 0 === r[k]) continue;
                        z = !0
                    }
                    q[k] = r && r[k] || h.style(a, k)
                } else g = void 0;
            if (h.isEmptyObject(q)) "inline" === ("none" === g ? R(a.nodeName) :
                g) && (m.display = g);
            else
                for (k in r ? "hidden" in r && (z = r.hidden) : r = F.access(a, "fxshow", {}), d && (r.hidden = !z), z ? h(a).show() : x.done(function() {
                        h(a).hide()
                    }), x.done(function() {
                        var b;
                        F.remove(a, "fxshow");
                        for (b in q) h.style(a, b, q[b])
                    }), q) b = W(z ? r[k] : 0, k, x), k in r || (r[k] = b.start, z && (b.end = b.start, b.start = "width" === k || "height" === k ? 1 : 0))
        }],
        ua = {
            "*": [function(a, b) {
                var f = this.createTween(a, b),
                    k = f.cur(),
                    c = $a.exec(b),
                    d = c && c[3] || (h.cssNumber[a] ? "" : "px"),
                    e = (h.cssNumber[a] || "px" !== d && +k) && $a.exec(h.css(f.elem, a)),
                    s = 1,
                    g = 20;
                if (e && e[3] !== d) {
                    d = d || e[3];
                    c = c || [];
                    e = +k || 1;
                    do s = s || ".5", e /= s, h.style(f.elem, a, e + d); while (s !== (s = f.cur() / k) && 1 !== s && --g)
                }
                return c && (e = f.start = +e || +k || 0, f.unit = d, f.end = c[1] ? e + (c[1] + 1) * c[2] : +c[2]), f
            }]
        };
    h.Animation = h.extend(M, {
        tweener: function(a, b) {
            h.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var f, k = 0, c = a.length; c > k; k++) f = a[k], ua[f] = ua[f] || [], ua[f].unshift(b)
        },
        prefilter: function(a, b) {
            b ? za.unshift(a) : za.push(a)
        }
    });
    h.speed = function(a, b, f) {
        var k = a && "object" == typeof a ? h.extend({}, a) : {
            complete: f ||
                !f && b || h.isFunction(a) && a,
            duration: a,
            easing: f && b || b && !h.isFunction(b) && b
        };
        return k.duration = h.fx.off ? 0 : "number" == typeof k.duration ? k.duration : k.duration in h.fx.speeds ? h.fx.speeds[k.duration] : h.fx.speeds._default, (null == k.queue || !0 === k.queue) && (k.queue = "fx"), k.old = k.complete, k.complete = function() {
            h.isFunction(k.old) && k.old.call(this);
            k.queue && h.dequeue(this, k.queue)
        }, k
    };
    h.fn.extend({
        fadeTo: function(a, b, f, k) {
            return this.filter(ta).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, f, k)
        },
        animate: function(a,
            b, f, k) {
            var c = h.isEmptyObject(a),
                d = h.speed(b, f, k);
            b = function() {
                var b = M(this, h.extend({}, a), d);
                (c || F.get(this, "finish")) && b.stop(!0)
            };
            return b.finish = b, c || !1 === d.queue ? this.each(b) : this.queue(d.queue, b)
        },
        stop: function(a, b, f) {
            var k = function(a) {
                var b = a.stop;
                delete a.stop;
                b(f)
            };
            return "string" != typeof a && (f = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    d = h.timers,
                    e = F.get(this);
                if (c) e[c] && e[c].stop && k(e[c]);
                else
                    for (c in e) e[c] && e[c].stop && Fb.test(c) &&
                        k(e[c]);
                for (c = d.length; c--;) d[c].elem !== this || null != a && d[c].queue !== a || (d[c].anim.stop(f), b = !1, d.splice(c, 1));
                !b && f || h.dequeue(this, a)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var b, f = F.get(this),
                    k = f[a + "queue"];
                b = f[a + "queueHooks"];
                var c = h.timers,
                    d = k ? k.length : 0;
                f.finish = !0;
                h.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = c.length; b--;) c[b].elem === this && c[b].queue === a && (c[b].anim.stop(!0), c.splice(b, 1));
                for (b = 0; d > b; b++) k[b] && k[b].finish && k[b].finish.call(this);
                delete f.finish
            })
        }
    });
    h.each(["toggle", "show", "hide"], function(a, b) {
        var f = h.fn[b];
        h.fn[b] = function(a, k, c) {
            return null == a || "boolean" == typeof a ? f.apply(this, arguments) : this.animate(X(b, !0), a, k, c)
        }
    });
    h.each({
        slideDown: X("show"),
        slideUp: X("hide"),
        slideToggle: X("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        h.fn[a] = function(a, f, k) {
            return this.animate(b, a, f, k)
        }
    });
    h.timers = [];
    h.fx.tick = function() {
        var a, b = 0,
            f = h.timers;
        for (ia = h.now(); b < f.length; b++) a = f[b], a() || f[b] !== a ||
            f.splice(b--, 1);
        f.length || h.fx.stop();
        ia = void 0
    };
    h.fx.timer = function(a) {
        h.timers.push(a);
        a() ? h.fx.start() : h.timers.pop()
    };
    h.fx.interval = 13;
    h.fx.start = function() {
        Da || (Da = setInterval(h.fx.tick, h.fx.interval))
    };
    h.fx.stop = function() {
        clearInterval(Da);
        Da = null
    };
    h.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    h.fn.delay = function(a, b) {
        return a = h.fx ? h.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, f) {
            var k = setTimeout(b, a);
            f.stop = function() {
                clearTimeout(k)
            }
        })
    };
    (function() {
        var a = I.createElement("input"),
            b =
            I.createElement("select"),
            f = b.appendChild(I.createElement("option"));
        a.type = "checkbox";
        K.checkOn = "" !== a.value;
        K.optSelected = f.selected;
        b.disabled = !0;
        K.optDisabled = !f.disabled;
        a = I.createElement("input");
        a.value = "t";
        a.type = "radio";
        K.radioValue = "t" === a.value
    })();
    var ab, wa = h.expr.attrHandle;
    h.fn.extend({
        attr: function(a, b) {
            return ha(this, h.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                h.removeAttr(this, a)
            })
        }
    });
    h.extend({
        attr: function(a, b, f) {
            var k, c, d = a.nodeType;
            if (a &&
                3 !== d && 8 !== d && 2 !== d) return "undefined" === typeof a.getAttribute ? h.prop(a, b, f) : (1 === d && h.isXMLDoc(a) || (b = b.toLowerCase(), k = h.attrHooks[b] || (h.expr.match.bool.test(b) ? ab : void 0)), void 0 === f ? k && "get" in k && null !== (c = k.get(a, b)) ? c : (c = h.find.attr(a, b), null == c ? void 0 : c) : null !== f ? k && "set" in k && void 0 !== (c = k.set(a, f, b)) ? c : (a.setAttribute(b, f + ""), f) : void h.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var f, k, c = 0,
                d = b && b.match(ga);
            if (d && 1 === a.nodeType)
                for (; f = d[c++];) k = h.propFix[f] || f, h.expr.match.bool.test(f) && (a[k] = !1), a.removeAttribute(f)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!K.radioValue && "radio" === b && h.nodeName(a, "input")) {
                        var f = a.value;
                        return a.setAttribute("type", b), f && (a.value = f), b
                    }
                }
            }
        }
    });
    ab = {
        set: function(a, b, f) {
            return !1 === b ? h.removeAttr(a, f) : a.setAttribute(f, f), f
        }
    };
    h.each(h.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var f = wa[b] || h.find.attr;
        wa[b] = function(a, b, k) {
            var c, d;
            return k || (d = wa[b], wa[b] = c, c = null != f(a, b, k) ? b.toLowerCase() : null, wa[b] = d), c
        }
    });
    var Gb = /^(?:input|select|textarea|button)$/i;
    h.fn.extend({
        prop: function(a, b) {
            return ha(this, h.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[h.propFix[a] || a]
            })
        }
    });
    h.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, f) {
            var k, c, d, e = a.nodeType;
            if (a && 3 !== e && 8 !== e && 2 !== e) return d = 1 !== e || !h.isXMLDoc(a), d && (b = h.propFix[b] || b, c = h.propHooks[b]), void 0 !== f ? c && "set" in c && void 0 !== (k = c.set(a, f, b)) ? k : a[b] = f : c && "get" in c && null !== (k = c.get(a, b)) ? k : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") ||
                        Gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    K.optSelected || (h.propHooks.selected = {
        get: function(a) {
            a = a.parentNode;
            return a && a.parentNode && a.parentNode.selectedIndex, null
        }
    });
    h.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        h.propFix[this.toLowerCase()] = this
    });
    var Ia = /[\t\r\n\f]/g;
    h.fn.extend({
        addClass: function(a) {
            var b, f, k, c, d;
            b = "string" == typeof a && a;
            var e = 0,
                s = this.length;
            if (h.isFunction(a)) return this.each(function(b) {
                h(this).addClass(a.call(this,
                    b, this.className))
            });
            if (b)
                for (b = (a || "").match(ga) || []; s > e; e++)
                    if (f = this[e], k = 1 === f.nodeType && (f.className ? (" " + f.className + " ").replace(Ia, " ") : " ")) {
                        for (d = 0; c = b[d++];) 0 > k.indexOf(" " + c + " ") && (k += c + " ");
                        k = h.trim(k);
                        f.className !== k && (f.className = k)
                    }
            return this
        },
        removeClass: function(a) {
            var b, f, k, c, d;
            b = 0 === arguments.length || "string" == typeof a && a;
            var e = 0,
                s = this.length;
            if (h.isFunction(a)) return this.each(function(b) {
                h(this).removeClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ga) || []; s >
                    e; e++)
                    if (f = this[e], k = 1 === f.nodeType && (f.className ? (" " + f.className + " ").replace(Ia, " ") : "")) {
                        for (d = 0; c = b[d++];)
                            for (; 0 <= k.indexOf(" " + c + " ");) k = k.replace(" " + c + " ", " ");
                        k = a ? h.trim(k) : "";
                        f.className !== k && (f.className = k)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var f = typeof a;
            return "boolean" == typeof b && "string" === f ? b ? this.addClass(a) : this.removeClass(a) : this.each(h.isFunction(a) ? function(f) {
                h(this).toggleClass(a.call(this, f, this.className, b), b)
            } : function() {
                if ("string" === f)
                    for (var b, k = 0, c = h(this), d = a.match(ga) || []; b = d[k++];) c.hasClass(b) ? c.removeClass(b) : c.addClass(b);
                else("undefined" === f || "boolean" === f) && (this.className && F.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : F.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, f = this.length; f > b; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ia, " ").indexOf(a)) return !0;
            return !1
        }
    });
    var Hb = /\r/g;
    h.fn.extend({
        val: function(a) {
            var b, f, k, c = this[0];
            if (arguments.length) return k = h.isFunction(a),
                this.each(function(f) {
                    var c;
                    1 === this.nodeType && (c = k ? a.call(this, f, h(this).val()) : a, null == c ? c = "" : "number" == typeof c ? c += "" : h.isArray(c) && (c = h.map(c, function(a) {
                        return null == a ? "" : a + ""
                    })), b = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
                });
            if (c) return b = h.valHooks[c.type] || h.valHooks[c.nodeName.toLowerCase()], b && "get" in b && void 0 !== (f = b.get(c, "value")) ? f : (f = c.value, "string" == typeof f ? f.replace(Hb, "") : null == f ? "" : f)
        }
    });
    h.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b =
                        h.find.attr(a, "value");
                    return null != b ? b : h.trim(h.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, f = a.options, k = a.selectedIndex, c = "select-one" === a.type || 0 > k, d = c ? null : [], e = c ? k + 1 : f.length, s = 0 > k ? e : c ? k : 0; e > s; s++)
                        if (b = f[s], !(!b.selected && s !== k || (K.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && h.nodeName(b.parentNode, "optgroup"))) {
                            if (a = h(b).val(), c) return a;
                            d.push(a)
                        }
                    return d
                },
                set: function(a, b) {
                    for (var f, k, c = a.options, d = h.makeArray(b), e = c.length; e--;) k = c[e], (k.selected = 0 <=
                        h.inArray(k.value, d)) && (f = !0);
                    return f || (a.selectedIndex = -1), d
                }
            }
        }
    });
    h.each(["radio", "checkbox"], function() {
        h.valHooks[this] = {
            set: function(a, b) {
                return h.isArray(b) ? a.checked = 0 <= h.inArray(h(a).val(), b) : void 0
            }
        };
        K.checkOn || (h.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(a, b) {
            h.fn[b] = function(a, f) {
                return 0 < arguments.length ? this.on(b, null, a, f) : this.trigger(b)
            }
        });
    h.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, f) {
            return this.on(a, null, b, f)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, f, k) {
            return this.on(b, a, f, k)
        },
        undelegate: function(a, b, f) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", f)
        }
    });
    var Ja = h.now(),
        Ka = /\?/;
    h.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    h.parseXML =
        function(a) {
            var b, f;
            if (!a || "string" != typeof a) return null;
            try {
                f = new DOMParser, b = f.parseFromString(a, "text/xml")
            } catch (k) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + a), b
        };
    var Ib = /#.*$/,
        bb = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        cb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        db = {},
        Ha = {},
        eb = "*/".concat("*"),
        La = a.location.href,
        sa = cb.exec(La.toLowerCase()) || [];
    h.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: La,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(sa[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": eb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": h.parseJSON,
                "text xml": h.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? N(N(a, h.ajaxSettings), b) : N(h.ajaxSettings, a)
        },
        ajaxPrefilter: D(db),
        ajaxTransport: D(Ha),
        ajax: function(a, b) {
            function f(a, b, e, g) {
                var x, t, S, v, u = b;
                if (2 !== D) {
                    D = 2;
                    s && clearTimeout(s);
                    k = void 0;
                    d = g || "";
                    p.readyState = 0 < a ? 4 : 0;
                    g = 200 <= a && 300 > a || 304 === a;
                    if (e) {
                        S = q;
                        for (var fa = p, T, A, B, N, ja = S.contents, G = S.dataTypes;
                            "*" === G[0];) G.shift(), void 0 === T && (T = S.mimeType || fa.getResponseHeader("Content-Type"));
                        if (T)
                            for (A in ja)
                                if (ja[A] && ja[A].test(T)) {
                                    G.unshift(A);
                                    break
                                }
                        if (G[0] in e) B = G[0];
                        else {
                            for (A in e) {
                                if (!G[0] || S.converters[A + " " + G[0]]) {
                                    B = A;
                                    break
                                }
                                N || (N = A)
                            }
                            B = B || N
                        }
                        S = B ? (B !== G[0] && G.unshift(B), e[B]) : void 0
                    }
                    var C;
                    a: {
                        e = q;T = S;A = p;B = g;
                        var H, y, E;S = {};fa = e.dataTypes.slice();
                        if (fa[1])
                            for (H in e.converters) S[H.toLowerCase()] = e.converters[H];
                        for (N = fa.shift(); N;)
                            if (e.responseFields[N] && (A[e.responseFields[N]] = T), !E && B && e.dataFilter && (T = e.dataFilter(T, e.dataType)), E = N, N = fa.shift())
                                if ("*" === N) N = E;
                                else if ("*" !== E && E !== N) {
                            if (H = S[E + " " + N] || S["* " + N], !H)
                                for (C in S)
                                    if (y = C.split(" "),
                                        y[1] === N && (H = S[E + " " + y[0]] || S["* " + y[0]])) {
                                        !0 === H ? H = S[C] : !0 !== S[C] && (N = y[0], fa.unshift(y[1]));
                                        break
                                    }
                            if (!0 !== H)
                                if (H && e["throws"]) T = H(T);
                                else try {
                                    T = H(T)
                                } catch (w) {
                                    C = {
                                        state: "parsererror",
                                        error: H ? w : "No conversion from " + E + " to " + N
                                    };
                                    break a
                                }
                        }
                        C = {
                            state: "success",
                            data: T
                        }
                    }
                    S = C;
                    g ? (q.ifModified && (v = p.getResponseHeader("Last-Modified"), v && (h.lastModified[c] = v), v = p.getResponseHeader("etag"), v && (h.etag[c] = v)), 204 === a || "HEAD" === q.type ? u = "nocontent" : 304 === a ? u = "notmodified" : (u = S.state, x = S.data, t = S.error, g = !t)) : (t = u,
                        (a || !u) && (u = "error", 0 > a && (a = 0)));
                    p.status = a;
                    p.statusText = (b || u) + "";
                    g ? r.resolveWith(m, [x, u, p]) : r.rejectWith(m, [p, u, t]);
                    p.statusCode(n);
                    n = void 0;
                    l && z.trigger(g ? "ajaxSuccess" : "ajaxError", [p, q, g ? x : t]);
                    M.fireWith(m, [p, u]);
                    l && (z.trigger("ajaxComplete", [p, q]), --h.active || h.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (b = a, a = void 0);
            b = b || {};
            var k, c, d, e, s, g, l, x, q = h.ajaxSetup({}, b),
                m = q.context || q,
                z = q.context && (m.nodeType || m.jquery) ? h(m) : h.event,
                r = h.Deferred(),
                M = h.Callbacks("once memory"),
                n = q.statusCode || {},
                S = {},
                v = {},
                D = 0,
                u = "canceled",
                p = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === D) {
                            if (!e)
                                for (e = {}; b = Jb.exec(d);) e[b[1].toLowerCase()] = b[2];
                            b = e[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === D ? d : null
                    },
                    setRequestHeader: function(a, b) {
                        var f = a.toLowerCase();
                        return D || (a = v[f] = v[f] || a, S[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return D || (q.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > D)
                                for (b in a) n[b] = [n[b], a[b]];
                            else p.always(a[p.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || u;
                        return k && k.abort(a), f(0, a), this
                    }
                };
            if (r.promise(p).complete = M.add, p.success = p.done, p.error = p.fail, q.url = ((a || q.url || La) + "").replace(Ib, "").replace(Lb, sa[1] + "//"), q.type = b.method || b.type || q.method || q.type, q.dataTypes = h.trim(q.dataType || "*").toLowerCase().match(ga) || [""], null == q.crossDomain && (g = cb.exec(q.url.toLowerCase()), q.crossDomain = !(!g || g[1] === sa[1] && g[2] === sa[2] && (g[3] || ("http:" === g[1] ? "80" : "443")) === (sa[3] || ("http:" === sa[1] ? "80" : "443")))), q.data && q.processData && "string" !=
                typeof q.data && (q.data = h.param(q.data, q.traditional)), T(db, q, b, p), 2 === D) return p;
            (l = h.event && q.global) && 0 === h.active++ && h.event.trigger("ajaxStart");
            q.type = q.type.toUpperCase();
            q.hasContent = !Kb.test(q.type);
            c = q.url;
            q.hasContent || (q.data && (c = q.url += (Ka.test(c) ? "&" : "?") + q.data, delete q.data), !1 === q.cache && (q.url = bb.test(c) ? c.replace(bb, "$1_=" + Ja++) : c + (Ka.test(c) ? "&" : "?") + "_=" + Ja++));
            q.ifModified && (h.lastModified[c] && p.setRequestHeader("If-Modified-Since", h.lastModified[c]), h.etag[c] && p.setRequestHeader("If-None-Match",
                h.etag[c]));
            (q.data && q.hasContent && !1 !== q.contentType || b.contentType) && p.setRequestHeader("Content-Type", q.contentType);
            p.setRequestHeader("Accept", q.dataTypes[0] && q.accepts[q.dataTypes[0]] ? q.accepts[q.dataTypes[0]] + ("*" !== q.dataTypes[0] ? ", " + eb + "; q=0.01" : "") : q.accepts["*"]);
            for (x in q.headers) p.setRequestHeader(x, q.headers[x]);
            if (q.beforeSend && (!1 === q.beforeSend.call(m, p, q) || 2 === D)) return p.abort();
            u = "abort";
            for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) p[x](q[x]);
            if (k = T(Ha, q, b, p)) {
                p.readyState = 1;
                l && z.trigger("ajaxSend", [p, q]);
                q.async && 0 < q.timeout && (s = setTimeout(function() {
                    p.abort("timeout")
                }, q.timeout));
                try {
                    D = 1, k.send(S, f)
                } catch (fa) {
                    if (!(2 > D)) throw fa;
                    f(-1, fa)
                }
            } else f(-1, "No Transport");
            return p
        },
        getJSON: function(a, b, f) {
            return h.get(a, b, f, "json")
        },
        getScript: function(a, b) {
            return h.get(a, void 0, b, "script")
        }
    });
    h.each(["get", "post"], function(a, b) {
        h[b] = function(a, f, k, c) {
            return h.isFunction(f) && (c = c || k, k = f, f = void 0), h.ajax({
                url: a,
                type: b,
                dataType: c,
                data: f,
                success: k
            })
        }
    });
    h._evalUrl = function(a) {
        return h.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    h.fn.extend({
        wrapAll: function(a) {
            var b;
            return h.isFunction(a) ? this.each(function(b) {
                h(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = h(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(h.isFunction(a) ? function(b) {
                h(this).wrapInner(a.call(this, b))
            } : function() {
                var b = h(this),
                    f = b.contents();
                f.length ? f.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = h.isFunction(a);
            return this.each(function(f) {
                h(this).wrapAll(b ? a.call(this, f) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    h.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    };
    h.expr.filters.visible = function(a) {
        return !h.expr.filters.hidden(a)
    };
    var Mb = /%20/g,
        ob = /\[\]$/,
        fb = /\r?\n/g,
        Nb = /^(?:submit|button|image|reset|file)$/i,
        Ob = /^(?:input|select|textarea|keygen)/i;
    h.param = function(a, b) {
        var f, k = [],
            c = function(a, b) {
                b = h.isFunction(b) ? b() : null == b ? "" : b;
                k[k.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = h.ajaxSettings && h.ajaxSettings.traditional), h.isArray(a) || a.jquery && !h.isPlainObject(a)) h.each(a, function() {
            c(this.name, this.value)
        });
        else
            for (f in a) P(f, a[f], b, c);
        return k.join("&").replace(Mb, "+")
    };
    h.fn.extend({
        serialize: function() {
            return h.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a =
                    h.prop(this, "elements");
                return a ? h.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !h(this).is(":disabled") && Ob.test(this.nodeName) && !Nb.test(a) && (this.checked || !Ta.test(a))
            }).map(function(a, b) {
                var f = h(this).val();
                return null == f ? null : h.isArray(f) ? h.map(f, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(fb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: f.replace(fb, "\r\n")
                }
            }).get()
        }
    });
    h.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Pb = 0,
        Fa = {},
        Qb = {
            0: 200,
            1223: 204
        },
        la =
        h.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Fa) Fa[a]()
    });
    K.cors = !!la && "withCredentials" in la;
    K.ajax = la = !!la;
    h.ajaxTransport(function(a) {
        var b;
        return K.cors || la && !a.crossDomain ? {
            send: function(f, k) {
                var c, d = a.xhr(),
                    h = ++Pb;
                if (d.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (c in a.xhrFields) d[c] = a.xhrFields[c];
                a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType);
                a.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                for (c in f) d.setRequestHeader(c, f[c]);
                b = function(a) {
                    return function() {
                        b && (delete Fa[h], b = d.onload = d.onerror = null, "abort" === a ? d.abort() : "error" === a ? k(d.status, d.statusText) : k(Qb[d.status] || d.status, d.statusText, "string" == typeof d.responseText ? {
                            text: d.responseText
                        } : void 0, d.getAllResponseHeaders()))
                    }
                };
                d.onload = b();
                d.onerror = b("error");
                b = Fa[h] = b("abort");
                try {
                    d.send(a.hasContent && a.data || null)
                } catch (e) {
                    if (b) throw e;
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    });
    h.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return h.globalEval(a), a
            }
        }
    });
    h.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    h.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, f;
            return {
                send: function(k, c) {
                    b = h("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", f = function(a) {
                        b.remove();
                        f = null;
                        a && c("error" === a.type ? 404 : 200, a.type)
                    });
                    I.head.appendChild(b[0])
                },
                abort: function() {
                    f && f()
                }
            }
        }
    });
    var gb = [],
        Ma = /(=)\?(?=&|$)|\?\?/;
    h.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = gb.pop() || h.expando + "_" + Ja++;
            return this[a] = !0, a
        }
    });
    h.ajaxPrefilter("json jsonp", function(b, f, k) {
        var c, d, e, s = !1 !== b.jsonp && (Ma.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ma.test(b.data) && "data");
        return s || "jsonp" === b.dataTypes[0] ? (c = b.jsonpCallback = h.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, s ? b[s] = b[s].replace(Ma, "$1" +
            c) : !1 !== b.jsonp && (b.url += (Ka.test(b.url) ? "&" : "?") + b.jsonp + "=" + c), b.converters["script json"] = function() {
            return e || h.error(c + " was not called"), e[0]
        }, b.dataTypes[0] = "json", d = a[c], a[c] = function() {
            e = arguments
        }, k.always(function() {
            a[c] = d;
            b[c] && (b.jsonpCallback = f.jsonpCallback, gb.push(c));
            e && h.isFunction(d) && d(e[0]);
            e = d = void 0
        }), "script") : void 0
    });
    h.parseHTML = function(a, b, f) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (f = b, b = !1);
        b = b || I;
        var k = Sa.exec(a);
        f = !f && [];
        return k ? [b.createElement(k[1])] :
            (k = h.buildFragment([a], b, f), f && f.length && h(f).remove(), h.merge([], k.childNodes))
    };
    var hb = h.fn.load;
    h.fn.load = function(a, b, f) {
        if ("string" != typeof a && hb) return hb.apply(this, arguments);
        var k, c, d, e = this,
            s = a.indexOf(" ");
        return 0 <= s && (k = h.trim(a.slice(s)), a = a.slice(0, s)), h.isFunction(b) ? (f = b, b = void 0) : b && "object" == typeof b && (c = "POST"), 0 < e.length && h.ajax({
            url: a,
            type: c,
            dataType: "html",
            data: b
        }).done(function(a) {
            d = arguments;
            e.html(k ? h("<div>").append(h.parseHTML(a)).find(k) : a)
        }).complete(f && function(a, b) {
            e.each(f,
                d || [a.responseText, b, a])
        }), this
    };
    h.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        h.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    h.expr.filters.animated = function(a) {
        return h.grep(h.timers, function(b) {
            return a === b.elem
        }).length
    };
    var ib = a.document.documentElement;
    h.offset = {
        setOffset: function(a, b, f) {
            var k, c, d, e, s, g, q = h.css(a, "position"),
                l = h(a),
                x = {};
            "static" === q && (a.style.position = "relative");
            s = l.offset();
            d = h.css(a, "top");
            g = h.css(a, "left");
            ("absolute" === q ||
                "fixed" === q) && -1 < (d + g).indexOf("auto") ? (k = l.position(), e = k.top, c = k.left) : (e = parseFloat(d) || 0, c = parseFloat(g) || 0);
            h.isFunction(b) && (b = b.call(a, f, s));
            null != b.top && (x.top = b.top - s.top + e);
            null != b.left && (x.left = b.left - s.left + c);
            "using" in b ? b.using.call(a, x) : l.css(x)
        }
    };
    h.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                h.offset.setOffset(this, a, b)
            });
            var b, f, k = this[0],
                c = {
                    top: 0,
                    left: 0
                },
                d = k && k.ownerDocument;
            if (d) return b = d.documentElement, h.contains(b, k) ? ("undefined" !==
                typeof k.getBoundingClientRect && (c = k.getBoundingClientRect()), f = Z(d), {
                    top: c.top + f.pageYOffset - b.clientTop,
                    left: c.left + f.pageXOffset - b.clientLeft
                }) : c
        },
        position: function() {
            if (this[0]) {
                var a, b, f = this[0],
                    k = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === h.css(f, "position") ? b = f.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), h.nodeName(a[0], "html") || (k = a.offset()), k.top += h.css(a[0], "borderTopWidth", !0), k.left += h.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - k.top - h.css(f, "marginTop", !0),
                    left: b.left - k.left -
                        h.css(f, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || ib; a && !h.nodeName(a, "html") && "static" === h.css(a, "position");) a = a.offsetParent;
                return a || ib
            })
        }
    });
    h.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, f) {
        var k = "pageYOffset" === f;
        h.fn[b] = function(c) {
            return ha(this, function(b, c, d) {
                var h = Z(b);
                return void 0 === d ? h ? h[f] : b[c] : void(h ? h.scrollTo(k ? a.pageXOffset : d, k ? d : a.pageYOffset) : b[c] = d)
            }, b, c, arguments.length, null)
        }
    });
    h.each(["top", "left"],
        function(a, b) {
            h.cssHooks[b] = ca(K.pixelPosition, function(a, f) {
                return f ? (f = Y(a, b), Ga.test(f) ? h(a).position()[b] + "px" : f) : void 0
            })
        });
    h.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        h.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(f, k) {
            h.fn[k] = function(k, c) {
                var d = arguments.length && (f || "boolean" != typeof k),
                    e = f || (!0 === k || !0 === c ? "margin" : "border");
                return ha(this, function(b, f, k) {
                    var c;
                    return h.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" +
                        a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === k ? h.css(b, f, e) : h.style(b, f, k, e)
                }, b, d ? k : void 0, d, null)
            }
        })
    });
    h.fn.size = function() {
        return this.length
    };
    h.fn.andSelf = h.fn.addBack;
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return h
    });
    var Rb = a.jQuery,
        Sb = a.$;
    return h.noConflict = function(b) {
        return a.$ === h && (a.$ = Sb), b && a.jQuery === h && (a.jQuery = Rb), h
    }, "undefined" === typeof c && (a.jQuery = a.$ = h), h
});
(function(a) {
    "function" === typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
})(function(a) {
    var c = 0,
        b = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
            var g, m, n;
            for (n = 0; null != (m = c[n]); n++) try {
                (g = a._data(m, "events")) && g.remove && a(m).triggerHandler("remove")
            } catch (p) {}
            b(c)
        }
    }(a.cleanData);
    a.widget = function(b, c, g) {
        var m, n, p, r, v = {},
            u = b.split(".")[0];
        b = b.split(".")[1];
        m = u + "-" + b;
        g || (g = c, c = a.Widget);
        a.expr[":"][m.toLowerCase()] = function(b) {
            return !!a.data(b, m)
        };
        a[u] = a[u] || {};
        n = a[u][b];
        p = a[u][b] = function(a, b) {
            if (!this._createWidget) return new p(a, b);
            arguments.length && this._createWidget(a, b)
        };
        a.extend(p, n, {
            version: g.version,
            _proto: a.extend({}, g),
            _childConstructors: []
        });
        r = new c;
        r.options = a.widget.extend({}, r.options);
        a.each(g, function(b, e) {
            a.isFunction(e) ? v[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    g = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b = this._super,
                        c = this._superApply,
                        d;
                    this._super = a;
                    this._superApply = g;
                    d = e.apply(this,
                        arguments);
                    this._super = b;
                    this._superApply = c;
                    return d
                }
            }() : v[b] = e
        });
        p.prototype = a.widget.extend(r, {
            widgetEventPrefix: n ? r.widgetEventPrefix || b : b
        }, v, {
            constructor: p,
            namespace: u,
            widgetName: b,
            widgetFullName: m
        });
        n ? (a.each(n._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, p, c._proto)
        }), delete n._childConstructors) : c._childConstructors.push(p);
        a.widget.bridge(b, p);
        return p
    };
    a.widget.extend = function(c) {
        for (var d = b.call(arguments, 1), g = 0, m = d.length, n, p; g < m; g++)
            for (n in d[g]) p =
                d[g][n], d[g].hasOwnProperty(n) && void 0 !== p && (a.isPlainObject(p) ? c[n] = a.isPlainObject(c[n]) ? a.widget.extend({}, c[n], p) : a.widget.extend({}, p) : c[n] = p);
        return c
    };
    a.widget.bridge = function(c, d) {
        var g = d.prototype.widgetFullName || c;
        a.fn[c] = function(m) {
            var n = "string" === typeof m,
                p = b.call(arguments, 1),
                r = this;
            m = !n && p.length ? a.widget.extend.apply(null, [m].concat(p)) : m;
            n ? this.each(function() {
                var b, d = a.data(this, g);
                if ("instance" === m) return r = d, !1;
                if (!d) return a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" +
                    m + "'");
                if (!a.isFunction(d[m]) || "_" === m.charAt(0)) return a.error("no such method '" + m + "' for " + c + " widget instance");
                b = d[m].apply(d, p);
                if (b !== d && void 0 !== b) return r = b && b.jquery ? r.pushStack(b.get()) : b, !1
            }) : this.each(function() {
                var b = a.data(this, g);
                b ? (b.option(m || {}), b._init && b._init()) : a.data(this, g, new d(m, this))
            });
            return r
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(b,
            d) {
            d = a(d || this.defaultElement || this)[0];
            this.element = a(d);
            this.uuid = c++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b);
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow));
            this._create();
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy();
            this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName));
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
            this.bindings.unbind(this.eventNamespace);
            this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var g = b,
                m, n, p;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" === typeof b)
                if (g = {}, m = b.split("."), b = m.shift(), m.length) {
                    n = g[b] = a.widget.extend({}, this.options[b]);
                    for (p = 0; p < m.length - 1; p++) n[m[p]] = n[m[p]] || {}, n = n[m[p]];
                    b = m.pop();
                    if (1 === arguments.length) return void 0 === n[b] ? null : n[b];
                    n[b] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[b] ? null :
                        this.options[b];
                    g[b] = c
                }
            this._setOptions(g);
            return this
        },
        _setOptions: function(a) {
            for (var b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            this.options[a] = b;
            "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")));
            return this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(b, c, g) {
            var m,
                n = this;
            "boolean" !== typeof b && (g = c, c = b, b = !1);
            g ? (c = m = a(c), this.bindings = this.bindings.add(c)) : (g = c, c = this.element, m = this.widget());
            a.each(g, function(g, r) {
                function v() {
                    if (b || !0 !== n.options.disabled && !a(this).hasClass("ui-state-disabled")) return ("string" === typeof r ? n[r] : r).apply(n, arguments)
                }
                "string" !== typeof r && (v.guid = r.guid = r.guid || v.guid || a.guid++);
                var u = g.match(/^([\w:-]*)\s*(.*)$/),
                    B = u[1] + n.eventNamespace;
                (u = u[2]) ? m.delegate(u, B, v): c.bind(B, v)
            })
        },
        _off: function(a, b) {
            b = (b || "").split(" ").join(this.eventNamespace +
                " ") + this.eventNamespace;
            a.unbind(b).undelegate(b)
        },
        _delay: function(a, b) {
            var c = this;
            return setTimeout(function() {
                return ("string" === typeof a ? c[a] : a).apply(c, arguments)
            }, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b);
            this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b);
            this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, g) {
            var m, n = this.options[b];
            g = g || {};
            c = a.Event(c);
            c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase();
            c.target = this.element[0];
            if (b = c.originalEvent)
                for (m in b) m in c || (c[m] = b[m]);
            this.element.trigger(c, g);
            return !(a.isFunction(n) && !1 === n.apply(this.element[0], [c].concat(g)) || c.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(g,
            m, n) {
            "string" === typeof m && (m = {
                effect: m
            });
            var p, r = m ? !0 === m || "number" === typeof m ? c : m.effect || c : b;
            m = m || {};
            "number" === typeof m && (m = {
                duration: m
            });
            p = !a.isEmptyObject(m);
            m.complete = n;
            m.delay && g.delay(m.delay);
            if (p && a.effects && a.effects.effect[r]) g[b](m);
            else if (r !== b && g[r]) g[r](m.duration, m.easing, n);
            else g.queue(function(c) {
                a(this)[b]();
                n && n.call(g[0]);
                c()
            })
        }
    })
});
(function() {
    function a(a) {
        return function(b, c, d, e) {
            c = L(c, e, 4);
            var g = !J(b) && l.keys(b),
                q = (g || b).length,
                m = 0 < a ? 0 : q - 1;
            3 > arguments.length && (d = b[g ? g[m] : m], m += a);
            for (var r = c, M = d; 0 <= m && q > m; m += a) var h = g ? g[m] : m,
                M = r(M, b[h], h, b);
            return M
        }
    }

    function c(a) {
        return function(b, c, d) {
            c = R(c, d);
            d = U(b);
            for (var e = 0 < a ? 0 : d - 1; 0 <= e && d > e; e += a)
                if (c(b[e], e, b)) return e;
            return -1
        }
    }

    function b(a, b, c) {
        return function(d, e, g) {
            var q = 0,
                m = U(d);
            if ("number" == typeof g) 0 < a ? q = 0 <= g ? g : Math.max(g + m, q) : m = 0 <= g ? Math.min(g + 1, m) : g + m + 1;
            else if (c && g && m) return g =
                c(d, e), d[g] === e ? g : -1;
            if (e !== e) return g = b(r.call(d, q, m), l.isNaN), 0 <= g ? g + q : -1;
            for (g = 0 < a ? q : m - 1; 0 <= g && m > g; g += a)
                if (d[g] === e) return g;
            return -1
        }
    }

    function e(a, b) {
        var c = W.length,
            d = a.constructor,
            d = l.isFunction(d) && d.prototype || n,
            e = "constructor";
        for (l.has(a, e) && !l.contains(b, e) && b.push(e); c--;) e = W[c], e in a && a[e] !== d[e] && !l.contains(b, e) && b.push(e)
    }
    var d = this,
        g = d._,
        m = Array.prototype,
        n = Object.prototype,
        p = m.push,
        r = m.slice,
        v = n.toString,
        u = n.hasOwnProperty,
        B = Array.isArray,
        y = Object.keys,
        C = Function.prototype.bind,
        O = Object.create,
        w = function() {},
        l = function(a) {
            return a instanceof l ? a : this instanceof l ? void(this._wrapped = a) : new l(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = l), exports._ = l) : d._ = l;
    l.VERSION = "1.8.3";
    var L = function(a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, s) {
                        return a.call(b,
                            c, d, e, s)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        R = function(a, b, c) {
            return null == a ? l.identity : l.isFunction(a) ? L(a, b, c) : l.isObject(a) ? l.matcher(a) : l.property(a)
        };
    l.iteratee = function(a, b) {
        return R(a, b, 1 / 0)
    };
    var Y = function(a, b) {
            return function(c) {
                var d = arguments.length;
                if (2 > d || null == c) return c;
                for (var e = 1; d > e; e++)
                    for (var g = arguments[e], q = a(g), l = q.length, m = 0; l > m; m++) {
                        var r = q[m];
                        b && void 0 !== c[r] || (c[r] = g[r])
                    }
                return c
            }
        },
        ca = function(a) {
            if (!l.isObject(a)) return {};
            if (O) return O(a);
            w.prototype = a;
            a =
                new w;
            return w.prototype = null, a
        },
        aa = function(a) {
            return function(b) {
                return null == b ? void 0 : b[a]
            }
        },
        Q = Math.pow(2, 53) - 1,
        U = aa("length"),
        J = function(a) {
            a = U(a);
            return "number" == typeof a && 0 <= a && Q >= a
        };
    l.each = l.forEach = function(a, b, c) {
        b = L(b, c);
        var d;
        if (J(a))
            for (c = 0, d = a.length; d > c; c++) b(a[c], c, a);
        else {
            var e = l.keys(a);
            c = 0;
            for (d = e.length; d > c; c++) b(a[e[c]], e[c], a)
        }
        return a
    };
    l.map = l.collect = function(a, b, c) {
        b = R(b, c);
        c = !J(a) && l.keys(a);
        for (var d = (c || a).length, e = Array(d), g = 0; d > g; g++) {
            var q = c ? c[g] : g;
            e[g] = b(a[q], q, a)
        }
        return e
    };
    l.reduce = l.foldl = l.inject = a(1);
    l.reduceRight = l.foldr = a(-1);
    l.find = l.detect = function(a, b, c) {
        var d;
        return d = J(a) ? l.findIndex(a, b, c) : l.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0
    };
    l.filter = l.select = function(a, b, c) {
        var d = [];
        return b = R(b, c), l.each(a, function(a, f, c) {
            b(a, f, c) && d.push(a)
        }), d
    };
    l.reject = function(a, b, c) {
        return l.filter(a, l.negate(R(b)), c)
    };
    l.every = l.all = function(a, b, c) {
        b = R(b, c);
        c = !J(a) && l.keys(a);
        for (var d = (c || a).length, e = 0; d > e; e++) {
            var g = c ? c[e] : e;
            if (!b(a[g], g, a)) return !1
        }
        return !0
    };
    l.some =
        l.any = function(a, b, c) {
            b = R(b, c);
            c = !J(a) && l.keys(a);
            for (var d = (c || a).length, e = 0; d > e; e++) {
                var g = c ? c[e] : e;
                if (b(a[g], g, a)) return !0
            }
            return !1
        };
    l.contains = l.includes = l.include = function(a, b, c, d) {
        return J(a) || (a = l.values(a)), ("number" != typeof c || d) && (c = 0), 0 <= l.indexOf(a, b, c)
    };
    l.invoke = function(a, b) {
        var c = r.call(arguments, 2),
            d = l.isFunction(b);
        return l.map(a, function(a) {
            var f = d ? b : a[b];
            return null == f ? f : f.apply(a, c)
        })
    };
    l.pluck = function(a, b) {
        return l.map(a, l.property(b))
    };
    l.where = function(a, b) {
        return l.filter(a,
            l.matcher(b))
    };
    l.findWhere = function(a, b) {
        return l.find(a, l.matcher(b))
    };
    l.max = function(a, b, c) {
        var d, e = -1 / 0,
            g = -1 / 0;
        if (null == b && null != a) {
            a = J(a) ? a : l.values(a);
            for (var q = 0, m = a.length; m > q; q++) c = a[q], c > e && (e = c)
        } else b = R(b, c), l.each(a, function(a, f, c) {
            d = b(a, f, c);
            (d > g || d === -1 / 0 && e === -1 / 0) && (e = a, g = d)
        });
        return e
    };
    l.min = function(a, b, c) {
        var d, e = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = J(a) ? a : l.values(a);
            for (var q = 0, m = a.length; m > q; q++) c = a[q], e > c && (e = c)
        } else b = R(b, c), l.each(a, function(a, f, c) {
            d = b(a, f, c);
            (g > d || 1 / 0 === d && 1 /
                0 === e) && (e = a, g = d)
        });
        return e
    };
    l.shuffle = function(a) {
        for (var b = J(a) ? a : l.values(a), c = b.length, d = Array(c), e = 0; c > e; e++) a = l.random(0, e), a !== e && (d[e] = d[a]), d[a] = b[e];
        return d
    };
    l.sample = function(a, b, c) {
        return null == b || c ? (J(a) || (a = l.values(a)), a[l.random(a.length - 1)]) : l.shuffle(a).slice(0, Math.max(0, b))
    };
    l.sortBy = function(a, b, c) {
        return b = R(b, c), l.pluck(l.map(a, function(a, f, c) {
            return {
                value: a,
                index: f,
                criteria: b(a, f, c)
            }
        }).sort(function(a, b) {
            var f = a.criteria,
                c = b.criteria;
            if (f !== c) {
                if (f > c || void 0 === f) return 1;
                if (c > f || void 0 === c) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var ba = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = R(c, d), l.each(b, function(d, g) {
                var q = c(d, g, b);
                a(e, d, q)
            }), e
        }
    };
    l.groupBy = ba(function(a, b, c) {
        l.has(a, c) ? a[c].push(b) : a[c] = [b]
    });
    l.indexBy = ba(function(a, b, c) {
        a[c] = b
    });
    l.countBy = ba(function(a, b, c) {
        l.has(a, c) ? a[c]++ : a[c] = 1
    });
    l.toArray = function(a) {
        return a ? l.isArray(a) ? r.call(a) : J(a) ? l.map(a, l.identity) : l.values(a) : []
    };
    l.size = function(a) {
        return null == a ? 0 : J(a) ? a.length : l.keys(a).length
    };
    l.partition = function(a, b, c) {
        b = R(b, c);
        var d = [],
            e = [];
        return l.each(a, function(a, f, c) {
            (b(a, f, c) ? d : e).push(a)
        }), [d, e]
    };
    l.first = l.head = l.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : l.initial(a, a.length - b)
    };
    l.initial = function(a, b, c) {
        return r.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    };
    l.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : l.rest(a, Math.max(0, a.length - b))
    };
    l.rest = l.tail = l.drop = function(a, b, c) {
        return r.call(a, null == b || c ? 1 : b)
    };
    l.compact = function(a) {
        return l.filter(a,
            l.identity)
    };
    var G = function(a, b, c, d) {
        var e = [],
            g = 0;
        d = d || 0;
        for (var q = U(a); q > d; d++) {
            var m = a[d];
            if (J(m) && (l.isArray(m) || l.isArguments(m))) {
                b || (m = G(m, b, c));
                var r = 0,
                    M = m.length;
                for (e.length += M; M > r;) e[g++] = m[r++]
            } else c || (e[g++] = m)
        }
        return e
    };
    l.flatten = function(a, b) {
        return G(a, b, !1)
    };
    l.without = function(a) {
        return l.difference(a, r.call(arguments, 1))
    };
    l.uniq = l.unique = function(a, b, c, d) {
        l.isBoolean(b) || (d = c, c = b, b = !1);
        null != c && (c = R(c, d));
        d = [];
        for (var e = [], g = 0, q = U(a); q > g; g++) {
            var m = a[g],
                r = c ? c(m, g, a) : m;
            b ? (g && e ===
                r || d.push(m), e = r) : c ? l.contains(e, r) || (e.push(r), d.push(m)) : l.contains(d, m) || d.push(m)
        }
        return d
    };
    l.union = function() {
        return l.uniq(G(arguments, !0, !0))
    };
    l.intersection = function(a) {
        for (var b = [], c = arguments.length, d = 0, e = U(a); e > d; d++) {
            var g = a[d];
            if (!l.contains(b, g)) {
                for (var q = 1; c > q && l.contains(arguments[q], g); q++);
                q === c && b.push(g)
            }
        }
        return b
    };
    l.difference = function(a) {
        var b = G(arguments, !0, !0, 1);
        return l.filter(a, function(a) {
            return !l.contains(b, a)
        })
    };
    l.zip = function() {
        return l.unzip(arguments)
    };
    l.unzip = function(a) {
        for (var b =
                a && l.max(a, U).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = l.pluck(a, d);
        return c
    };
    l.object = function(a, b) {
        for (var c = {}, d = 0, e = U(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    };
    l.findIndex = c(1);
    l.findLastIndex = c(-1);
    l.sortedIndex = function(a, b, c, d) {
        c = R(c, d, 1);
        b = c(b);
        d = 0;
        for (var e = U(a); e > d;) {
            var g = Math.floor((d + e) / 2);
            c(a[g]) < b ? d = g + 1 : e = g
        }
        return d
    };
    l.indexOf = b(1, l.findIndex, l.sortedIndex);
    l.lastIndexOf = b(-1, l.findLastIndex);
    l.range = function(a, b, c) {
        null == b && (b = a || 0, a = 0);
        c = c || 1;
        b = Math.max(Math.ceil((b - a) /
            c), 0);
        for (var d = Array(b), e = 0; b > e; e++, a += c) d[e] = a;
        return d
    };
    var H = function(a, b, c, d, e) {
        if (!(d instanceof b)) return a.apply(c, e);
        b = ca(a.prototype);
        a = a.apply(b, e);
        return l.isObject(a) ? a : b
    };
    l.bind = function(a, b) {
        if (C && a.bind === C) return C.apply(a, r.call(arguments, 1));
        if (!l.isFunction(a)) throw new TypeError("Bind must be called on a function");
        var c = r.call(arguments, 2),
            d = function() {
                return H(a, d, b, this, c.concat(r.call(arguments)))
            };
        return d
    };
    l.partial = function(a) {
        var b = r.call(arguments, 1),
            c = function() {
                for (var d =
                        0, e = b.length, g = Array(e), q = 0; e > q; q++) g[q] = b[q] === l ? arguments[d++] : b[q];
                for (; d < arguments.length;) g.push(arguments[d++]);
                return H(a, c, this, this, g)
            };
        return c
    };
    l.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (1 >= d) throw Error("bindAll must be passed function names");
        for (b = 1; d > b; b++) c = arguments[b], a[c] = l.bind(a[c], a);
        return a
    };
    l.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache,
                g = "" + (b ? b.apply(this, arguments) : d);
            return l.has(e, g) || (e[g] = a.apply(this, arguments)), e[g]
        };
        return c.cache = {}, c
    };
    l.delay =
        function(a, b) {
            var c = r.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(null, c)
            }, b)
        };
    l.defer = l.partial(l.delay, l, 1);
    l.throttle = function(a, b, c) {
        var d, e, g, q = null,
            m = 0;
        c || (c = {});
        var r = function() {
            m = !1 === c.leading ? 0 : l.now();
            q = null;
            g = a.apply(d, e);
            q || (d = e = null)
        };
        return function() {
            var M = l.now();
            m || !1 !== c.leading || (m = M);
            var h = b - (M - m);
            return d = this, e = arguments, 0 >= h || h > b ? (q && (clearTimeout(q), q = null), m = M, g = a.apply(d, e), q || (d = e = null)) : q || !1 === c.trailing || (q = setTimeout(r, h)), g
        }
    };
    l.debounce = function(a,
        b, c) {
        var d, e, g, q, m, r = function() {
            var M = l.now() - q;
            b > M && 0 <= M ? d = setTimeout(r, b - M) : (d = null, c || (m = a.apply(g, e), d || (g = e = null)))
        };
        return function() {
            g = this;
            e = arguments;
            q = l.now();
            var M = c && !d;
            return d || (d = setTimeout(r, b)), M && (m = a.apply(g, e), g = e = null), m
        }
    };
    l.wrap = function(a, b) {
        return l.partial(b, a)
    };
    l.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    l.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    };
    l.after = function(a, b) {
        return function() {
            return 1 > --a ? b.apply(this, arguments) : void 0
        }
    };
    l.before = function(a, b) {
        var c;
        return function() {
            return 0 < --a && (c = b.apply(this, arguments)), 1 >= a && (b = null), c
        }
    };
    l.once = l.partial(l.before, 2);
    var X = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        W = "valueOf isPrototypeOf toString propertyIsEnumerable hasOwnProperty toLocaleString".split(" ");
    l.keys = function(a) {
        if (!l.isObject(a)) return [];
        if (y) return y(a);
        var b = [],
            c;
        for (c in a) l.has(a, c) && b.push(c);
        return X && e(a, b), b
    };
    l.allKeys = function(a) {
        if (!l.isObject(a)) return [];
        var b = [],
            c;
        for (c in a) b.push(c);
        return X && e(a, b), b
    };
    l.values = function(a) {
        for (var b = l.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    };
    l.mapObject = function(a, b, c) {
        b = R(b, c);
        for (var d = l.keys(a), e = d.length, g = {}, q = 0; e > q; q++) c = d[q], g[c] = b(a[c], c, a);
        return g
    };
    l.pairs = function(a) {
        for (var b = l.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
        return d
    };
    l.invert = function(a) {
        for (var b = {}, c = l.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] =
            c[d];
        return b
    };
    l.functions = l.methods = function(a) {
        var b = [],
            c;
        for (c in a) l.isFunction(a[c]) && b.push(c);
        return b.sort()
    };
    l.extend = Y(l.allKeys);
    l.extendOwn = l.assign = Y(l.keys);
    l.findKey = function(a, b, c) {
        b = R(b, c);
        var d;
        c = l.keys(a);
        for (var e = 0, g = c.length; g > e; e++)
            if (d = c[e], b(a[d], d, a)) return d
    };
    l.pick = function(a, b, c) {
        var d, e, g = {},
            q = a;
        if (null == q) return g;
        l.isFunction(b) ? (e = l.allKeys(q), d = L(b, c)) : (e = G(arguments, !1, !1, 1), d = function(a, b, f) {
            return b in f
        }, q = Object(q));
        for (var m = 0, r = e.length; r > m; m++) {
            var M = e[m],
                h = q[M];
            d(h, M, q) && (g[M] = h)
        }
        return g
    };
    l.omit = function(a, b, c) {
        if (l.isFunction(b)) b = l.negate(b);
        else {
            var d = l.map(G(arguments, !1, !1, 1), String);
            b = function(a, b) {
                return !l.contains(d, b)
            }
        }
        return l.pick(a, b, c)
    };
    l.defaults = Y(l.allKeys, !0);
    l.create = function(a, b) {
        var c = ca(a);
        return b && l.extendOwn(c, b), c
    };
    l.clone = function(a) {
        return l.isObject(a) ? l.isArray(a) ? a.slice() : l.extend({}, a) : a
    };
    l.tap = function(a, b) {
        return b(a), a
    };
    l.isMatch = function(a, b) {
        var c = l.keys(b),
            d = c.length;
        if (null == a) return !d;
        for (var e = Object(a), g =
                0; d > g; g++) {
            var q = c[g];
            if (b[q] !== e[q] || !(q in e)) return !1
        }
        return !0
    };
    var q = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof l && (a = a._wrapped);
        b instanceof l && (b = b._wrapped);
        var e = v.call(a);
        if (e !== v.call(b)) return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        e = "[object Array]" === e;
        if (!e) {
            if ("object" !=
                typeof a || "object" != typeof b) return !1;
            var g = a.constructor,
                m = b.constructor;
            if (g !== m && !(l.isFunction(g) && g instanceof g && l.isFunction(m) && m instanceof m) && "constructor" in a && "constructor" in b) return !1
        }
        c = c || [];
        d = d || [];
        for (g = c.length; g--;)
            if (c[g] === a) return d[g] === b;
        if (c.push(a), d.push(b), e) {
            if (g = a.length, g !== b.length) return !1;
            for (; g--;)
                if (!q(a[g], b[g], c, d)) return !1
        } else {
            var r, e = l.keys(a);
            if (g = e.length, l.keys(b).length !== g) return !1;
            for (; g--;)
                if (r = e[g], !l.has(b, r) || !q(a[r], b[r], c, d)) return !1
        }
        return c.pop(),
            d.pop(), !0
    };
    l.isEqual = function(a, b) {
        return q(a, b)
    };
    l.isEmpty = function(a) {
        return null == a ? !0 : J(a) && (l.isArray(a) || l.isString(a) || l.isArguments(a)) ? 0 === a.length : 0 === l.keys(a).length
    };
    l.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    };
    l.isArray = B || function(a) {
        return "[object Array]" === v.call(a)
    };
    l.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    };
    l.each("Arguments Function String Number Date RegExp Error".split(" "), function(a) {
        l["is" + a] = function(b) {
            return v.call(b) === "[object " +
                a + "]"
        }
    });
    l.isArguments(arguments) || (l.isArguments = function(a) {
        return l.has(a, "callee")
    });
    "function" != typeof /./ && "object" != typeof Int8Array && (l.isFunction = function(a) {
        return "function" == typeof a || !1
    });
    l.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    };
    l.isNaN = function(a) {
        return l.isNumber(a) && a !== +a
    };
    l.isBoolean = function(a) {
        return !0 === a || !1 === a || "[object Boolean]" === v.call(a)
    };
    l.isNull = function(a) {
        return null === a
    };
    l.isUndefined = function(a) {
        return void 0 === a
    };
    l.has = function(a, b) {
        return null !=
            a && u.call(a, b)
    };
    l.noConflict = function() {
        return d._ = g, this
    };
    l.identity = function(a) {
        return a
    };
    l.constant = function(a) {
        return function() {
            return a
        }
    };
    l.noop = function() {};
    l.property = aa;
    l.propertyOf = function(a) {
        return null == a ? function() {} : function(b) {
            return a[b]
        }
    };
    l.matcher = l.matches = function(a) {
        return a = l.extendOwn({}, a),
            function(b) {
                return l.isMatch(b, a)
            }
    };
    l.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = L(b, c, 1);
        for (c = 0; a > c; c++) d[c] = b(c);
        return d
    };
    l.random = function(a, b) {
        return null == b && (b = a, a = 0), a +
            Math.floor(Math.random() * (b - a + 1))
    };
    l.now = Date.now || function() {
        return (new Date).getTime()
    };
    B = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    };
    Y = l.invert(B);
    aa = function(a) {
        var b = function(b) {
                return a[b]
            },
            c = "(?:" + l.keys(a).join("|") + ")",
            d = RegExp(c),
            e = RegExp(c, "g");
        return function(a) {
            return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
        }
    };
    l.escape = aa(B);
    l.unescape = aa(Y);
    l.result = function(a, b, c) {
        b = null == a ? void 0 : a[b];
        return void 0 === b && (b = c), l.isFunction(b) ? b.call(a) : b
    };
    var M = 0;
    l.uniqueId = function(a) {
        var b = ++M + "";
        return a ? a + b : b
    };
    l.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var D = /(.)^/,
        T = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        N = /\\|'|\r|\n|\u2028|\u2029/g,
        P = function(a) {
            return "\\" + T[a]
        };
    l.template = function(a, b, c) {
        !b && c && (b = c);
        b = l.defaults({}, b, l.templateSettings);
        c = RegExp([(b.escape || D).source, (b.interpolate || D).source, (b.evaluate || D).source].join("|") + "|$", "g");
        var d = 0,
            e = "__p+='";
        a.replace(c, function(b, c, k, h, g) {
            return e += a.slice(d, g).replace(N, P), d = g + b.length, c ? e += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : k ? e += "'+\n((__t=(" + k + "))==null?'':__t)+\n'" : h && (e += "';\n" + h + "\n__p+='"), b
        });
        e += "';\n";
        b.variable || (e = "with(obj||{}){\n" + e + "}\n");
        e = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + e + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", e)
        } catch (q) {
            throw q.source = e, q;
        }
        c = function(a) {
            return g.call(this, a, l)
        };
        return c.source =
            "function(" + (b.variable || "obj") + "){\n" + e + "}", c
    };
    l.chain = function(a) {
        a = l(a);
        return a._chain = !0, a
    };
    var Z = function(a, b) {
        return a._chain ? l(b).chain() : b
    };
    l.mixin = function(a) {
        l.each(l.functions(a), function(b) {
            var c = l[b] = a[b];
            l.prototype[b] = function() {
                var a = [this._wrapped];
                return p.apply(a, arguments), Z(this, c.apply(l, a))
            }
        })
    };
    l.mixin(l);
    l.each("pop push reverse shift sort splice unshift".split(" "), function(a) {
        var b = m[a];
        l.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !==
                a && "splice" !== a || 0 !== c.length || delete c[0], Z(this, c)
        }
    });
    l.each(["concat", "join", "slice"], function(a) {
        var b = m[a];
        l.prototype[a] = function() {
            return Z(this, b.apply(this._wrapped, arguments))
        }
    });
    l.prototype.value = function() {
        return this._wrapped
    };
    l.prototype.valueOf = l.prototype.toJSON = l.prototype.value;
    l.prototype.toString = function() {
        return "" + this._wrapped
    };
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return l
    })
}).call(this);
(function(a, c) {
    if ("function" === typeof define && define.amd) define(["underscore", "jquery", "exports"], function(b, d, g) {
        a.Backbone = c(a, g, b, d)
    });
    else if ("undefined" !== typeof exports) {
        var b = require("underscore");
        c(a, exports, b)
    } else a.Backbone = c(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
})(this, function(a, c, b, e) {
    var d = a.Backbone,
        g = [].slice;
    c.VERSION = "1.1.2";
    c.$ = e;
    c.noConflict = function() {
        a.Backbone = d;
        return this
    };
    c.emulateHTTP = !1;
    c.emulateJSON = !1;
    var m = c.Events = {
            on: function(a, b, c) {
                if (!p(this, "on", a, [b, c]) ||
                    !b) return this;
                this._events || (this._events = {});
                (this._events[a] || (this._events[a] = [])).push({
                    callback: b,
                    context: c,
                    ctx: c || this
                });
                return this
            },
            once: function(a, c, d) {
                if (!p(this, "once", a, [c, d]) || !c) return this;
                var e = this,
                    g = b.once(function() {
                        e.off(a, g);
                        c.apply(this, arguments)
                    });
                g._callback = c;
                return this.on(a, g, d)
            },
            off: function(a, c, d) {
                var e, g, m, l, f, k, s, r;
                if (!this._events || !p(this, "off", a, [c, d])) return this;
                if (!a && !c && !d) return this._events = void 0, this;
                l = a ? [a] : b.keys(this._events);
                f = 0;
                for (k = l.length; f < k; f++)
                    if (a =
                        l[f], m = this._events[a]) {
                        this._events[a] = e = [];
                        if (c || d)
                            for (s = 0, r = m.length; s < r; s++) g = m[s], (c && c !== g.callback && c !== g.callback._callback || d && d !== g.context) && e.push(g);
                        e.length || delete this._events[a]
                    }
                return this
            },
            trigger: function(a) {
                if (!this._events) return this;
                var b = g.call(arguments, 1);
                if (!p(this, "trigger", a, b)) return this;
                var c = this._events[a],
                    d = this._events.all;
                c && r(c, b);
                d && r(d, arguments);
                return this
            },
            stopListening: function(a, c, d) {
                var e = this._listeningTo;
                if (!e) return this;
                var g = !c && !d;
                d || "object" !==
                    typeof c || (d = this);
                a && ((e = {})[a._listenId] = a);
                for (var m in e) a = e[m], a.off(c, d, this), (g || b.isEmpty(a._events)) && delete this._listeningTo[m];
                return this
            }
        },
        n = /\s+/,
        p = function(a, b, c, d) {
            if (!c) return !0;
            if ("object" === typeof c) {
                for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
                return !1
            }
            if (n.test(c)) {
                c = c.split(n);
                e = 0;
                for (var g = c.length; e < g; e++) a[b].apply(a, [c[e]].concat(d));
                return !1
            }
            return !0
        },
        r = function(a, b) {
            var c, d = -1,
                e = a.length,
                g = b[0],
                m = b[1],
                f = b[2];
            switch (b.length) {
                case 0:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                    break;
                case 1:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, g);
                    break;
                case 2:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, g, m);
                    break;
                case 3:
                    for (; ++d < e;)(c = a[d]).callback.call(c.ctx, g, m, f);
                    break;
                default:
                    for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b)
            }
        };
    b.each({
        listenTo: "on",
        listenToOnce: "once"
    }, function(a, c) {
        m[c] = function(c, d, e) {
            var g = this._listeningTo || (this._listeningTo = {}),
                m = c._listenId || (c._listenId = b.uniqueId("l"));
            g[m] = c;
            e || "object" !== typeof d || (e = this);
            c[a](d, e, this);
            return this
        }
    });
    m.bind = m.on;
    m.unbind = m.off;
    b.extend(c, m);
    var v = c.Model = function(a, c) {
        var d = a || {};
        c || (c = {});
        this.cid = b.uniqueId("c");
        this.attributes = {};
        c.collection && (this.collection = c.collection);
        c.parse && (d = this.parse(d, c) || {});
        d = b.defaults({}, d, b.result(this, "defaults"));
        this.set(d, c);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    b.extend(v.prototype, m, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(a) {
            return b.clone(this.attributes)
        },
        sync: function() {
            return c.sync.apply(this, arguments)
        },
        get: function(a) {
            return this.attributes[a]
        },
        escape: function(a) {
            return b.escape(this.get(a))
        },
        has: function(a) {
            return null != this.get(a)
        },
        set: function(a, c, d) {
            var e, g, m, l, f, k, s;
            if (null == a) return this;
            "object" === typeof a ? (g = a, d = c) : (g = {})[a] = c;
            d || (d = {});
            if (!this._validate(g, d)) return !1;
            m = d.unset;
            l = d.silent;
            a = [];
            f = this._changing;
            this._changing = !0;
            f || (this._previousAttributes = b.clone(this.attributes), this.changed = {});
            s = this.attributes;
            k = this._previousAttributes;
            this.idAttribute in g && (this.id = g[this.idAttribute]);
            for (e in g) c = g[e], b.isEqual(s[e], c) || a.push(e), b.isEqual(k[e], c) ? delete this.changed[e] : this.changed[e] = c, m ? delete s[e] : s[e] = c;
            if (!l)
                for (a.length && (this._pending = d), c = 0, e = a.length; c < e; c++) this.trigger("change:" + a[c], this, s[a[c]], d);
            if (f) return this;
            if (!l)
                for (; this._pending;) d = this._pending, this._pending = !1, this.trigger("change", this, d);
            this._changing = this._pending = !1;
            return this
        },
        unset: function(a, c) {
            return this.set(a, void 0, b.extend({}, c, {
                unset: !0
            }))
        },
        clear: function(a) {
            var c = {},
                d;
            for (d in this.attributes) c[d] =
                void 0;
            return this.set(c, b.extend({}, a, {
                unset: !0
            }))
        },
        hasChanged: function(a) {
            return null == a ? !b.isEmpty(this.changed) : b.has(this.changed, a)
        },
        changedAttributes: function(a) {
            if (!a) return this.hasChanged() ? b.clone(this.changed) : !1;
            var c, d = !1,
                e = this._changing ? this._previousAttributes : this.attributes,
                g;
            for (g in a) b.isEqual(e[g], c = a[g]) || ((d || (d = {}))[g] = c);
            return d
        },
        previous: function(a) {
            return null != a && this._previousAttributes ? this._previousAttributes[a] : null
        },
        previousAttributes: function() {
            return b.clone(this._previousAttributes)
        },
        fetch: function(a) {
            a = a ? b.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var c = this,
                d = a.success;
            a.success = function(b) {
                if (!c.set(c.parse(b, a), a)) return !1;
                d && d(c, b, a);
                c.trigger("sync", c, b, a)
            };
            W(this, a);
            return this.sync("read", this, a)
        },
        save: function(a, c, d) {
            var e, g = this.attributes;
            null == a || "object" === typeof a ? (e = a, d = c) : (e = {})[a] = c;
            d = b.extend({
                validate: !0
            }, d);
            if (e && !d.wait) {
                if (!this.set(e, d)) return !1
            } else if (!this._validate(e, d)) return !1;
            e && d.wait && (this.attributes = b.extend({}, g, e));
            void 0 === d.parse && (d.parse = !0);
            var m = this,
                l = d.success;
            d.success = function(a) {
                m.attributes = g;
                var c = m.parse(a, d);
                d.wait && (c = b.extend(e || {}, c));
                if (b.isObject(c) && !m.set(c, d)) return !1;
                l && l(m, a, d);
                m.trigger("sync", m, a, d)
            };
            W(this, d);
            a = this.isNew() ? "create" : d.patch ? "patch" : "update";
            "patch" === a && (d.attrs = e);
            a = this.sync(a, this, d);
            e && d.wait && (this.attributes = g);
            return a
        },
        destroy: function(a) {
            a = a ? b.clone(a) : {};
            var c = this,
                d = a.success,
                e = function() {
                    c.trigger("destroy", c, c.collection, a)
                };
            a.success = function(b) {
                (a.wait || c.isNew()) && e();
                d && d(c,
                    b, a);
                c.isNew() || c.trigger("sync", c, b, a)
            };
            if (this.isNew()) return a.success(), !1;
            W(this, a);
            var g = this.sync("delete", this, a);
            a.wait || e();
            return g
        },
        url: function() {
            var a = b.result(this, "urlRoot") || b.result(this.collection, "url") || X();
            return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(a) {
            return this._validate({}, b.extend(a || {}, {
                validate: !0
            }))
        },
        _validate: function(a, c) {
            if (!c.validate || !this.validate) return !0;
            a = b.extend({}, this.attributes, a);
            var d = this.validationError = this.validate(a, c) || null;
            if (!d) return !0;
            this.trigger("invalid", this, d, b.extend(c, {
                validationError: d
            }));
            return !1
        }
    });
    b.each("keys values pairs invert pick omit".split(" "), function(a) {
        v.prototype[a] = function() {
            var c = g.call(arguments);
            c.unshift(this.attributes);
            return b[a].apply(b, c)
        }
    });
    var u = c.Collection = function(a, c) {
            c || (c = {});
            c.model && (this.model = c.model);
            void 0 !== c.comparator && (this.comparator = c.comparator);
            this._reset();
            this.initialize.apply(this, arguments);
            a && this.reset(a, b.extend({
                silent: !0
            }, c))
        },
        B = {
            add: !0,
            remove: !0,
            merge: !0
        },
        y = {
            add: !0,
            remove: !1
        };
    b.extend(u.prototype, m, {
        model: v,
        initialize: function() {},
        toJSON: function(a) {
            return this.map(function(b) {
                return b.toJSON(a)
            })
        },
        sync: function() {
            return c.sync.apply(this, arguments)
        },
        add: function(a, c) {
            return this.set(a, b.extend({
                merge: !1
            }, c, y))
        },
        remove: function(a, c) {
            var d = !b.isArray(a);
            a = d ? [a] : b.clone(a);
            c ||
                (c = {});
            var e, g, m, l;
            e = 0;
            for (g = a.length; e < g; e++)
                if (l = a[e] = this.get(a[e])) delete this._byId[l.id], delete this._byId[l.cid], m = this.indexOf(l), this.models.splice(m, 1), this.length--, c.silent || (c.index = m, l.trigger("remove", l, this, c)), this._removeReference(l, c);
            return d ? a[0] : a
        },
        set: function(a, c) {
            c = b.defaults({}, c, B);
            c.parse && (a = this.parse(a, c));
            var d = !b.isArray(a);
            a = d ? a ? [a] : [] : b.clone(a);
            var e, g, m, l, f, k, s = c.at,
                r = this.model,
                n = this.comparator && null == s && !1 !== c.sort,
                u = b.isString(this.comparator) ? this.comparator :
                null,
                p = [],
                G = [],
                H = {},
                C = c.add,
                h = c.merge,
                y = c.remove,
                w = !n && C && y ? [] : !1;
            e = 0;
            for (g = a.length; e < g; e++) {
                f = a[e] || {};
                m = f instanceof v ? l = f : f[r.prototype.idAttribute || "id"];
                if (m = this.get(m)) y && (H[m.cid] = !0), h && (f = f === l ? l.attributes : f, c.parse && (f = m.parse(f, c)), m.set(f, c), n && !k && m.hasChanged(u) && (k = !0)), a[e] = m;
                else if (C) {
                    l = a[e] = this._prepareModel(f, c);
                    if (!l) continue;
                    p.push(l);
                    this._addReference(l, c)
                }
                l = m || l;
                !w || !l.isNew() && H[l.id] || w.push(l);
                H[l.id] = !0
            }
            if (y) {
                e = 0;
                for (g = this.length; e < g; ++e) H[(l = this.models[e]).cid] ||
                    G.push(l);
                G.length && this.remove(G, c)
            }
            if (p.length || w && w.length)
                if (n && (k = !0), this.length += p.length, null != s)
                    for (e = 0, g = p.length; e < g; e++) this.models.splice(s + e, 0, p[e]);
                else
                    for (w && (this.models.length = 0), f = w || p, e = 0, g = f.length; e < g; e++) this.models.push(f[e]);
            k && this.sort({
                silent: !0
            });
            if (!c.silent) {
                e = 0;
                for (g = p.length; e < g; e++)(l = p[e]).trigger("add", l, this, c);
                (k || w && w.length) && this.trigger("sort", this, c)
            }
            return d ? a[0] : a
        },
        reset: function(a, c) {
            c || (c = {});
            for (var d = 0, e = this.models.length; d < e; d++) this._removeReference(this.models[d],
                c);
            c.previousModels = this.models;
            this._reset();
            a = this.add(a, b.extend({
                silent: !0
            }, c));
            c.silent || this.trigger("reset", this, c);
            return a
        },
        push: function(a, c) {
            return this.add(a, b.extend({
                at: this.length
            }, c))
        },
        pop: function(a) {
            var b = this.at(this.length - 1);
            this.remove(b, a);
            return b
        },
        unshift: function(a, c) {
            return this.add(a, b.extend({
                at: 0
            }, c))
        },
        shift: function(a) {
            var b = this.at(0);
            this.remove(b, a);
            return b
        },
        slice: function() {
            return g.apply(this.models, arguments)
        },
        get: function(a) {
            return null == a ? void 0 : this._byId[a] ||
                this._byId[a.id] || this._byId[a.cid]
        },
        at: function(a) {
            return this.models[a]
        },
        where: function(a, c) {
            return b.isEmpty(a) ? c ? void 0 : [] : this[c ? "find" : "filter"](function(b) {
                for (var c in a)
                    if (a[c] !== b.get(c)) return !1;
                return !0
            })
        },
        findWhere: function(a) {
            return this.where(a, !0)
        },
        sort: function(a) {
            if (!this.comparator) throw Error("Cannot sort a set without a comparator");
            a || (a = {});
            b.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(b.bind(this.comparator,
                this));
            a.silent || this.trigger("sort", this, a);
            return this
        },
        pluck: function(a) {
            return b.invoke(this.models, "get", a)
        },
        fetch: function(a) {
            a = a ? b.clone(a) : {};
            void 0 === a.parse && (a.parse = !0);
            var c = a.success,
                d = this;
            a.success = function(b) {
                d[a.reset ? "reset" : "set"](b, a);
                c && c(d, b, a);
                d.trigger("sync", d, b, a)
            };
            W(this, a);
            return this.sync("read", this, a)
        },
        create: function(a, c) {
            c = c ? b.clone(c) : {};
            if (!(a = this._prepareModel(a, c))) return !1;
            c.wait || this.add(a, c);
            var d = this,
                e = c.success;
            c.success = function(a, b) {
                c.wait && d.add(a,
                    c);
                e && e(a, b, c)
            };
            a.save(null, c);
            return a
        },
        parse: function(a, b) {
            return a
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(a, c) {
            if (a instanceof v) return a;
            c = c ? b.clone(c) : {};
            c.collection = this;
            var d = new this.model(a, c);
            if (!d.validationError) return d;
            this.trigger("invalid", this, d.validationError, c);
            return !1
        },
        _addReference: function(a, b) {
            this._byId[a.cid] = a;
            null != a.id && (this._byId[a.id] = a);
            a.collection || (a.collection =
                this);
            a.on("all", this._onModelEvent, this)
        },
        _removeReference: function(a, b) {
            this === a.collection && delete a.collection;
            a.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(a, b, c, d) {
            if ("add" !== a && "remove" !== a || c === this) "destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments)
        }
    });
    b.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without difference indexOf shuffle lastIndexOf isEmpty chain sample".split(" "),
        function(a) {
            u.prototype[a] = function() {
                var c = g.call(arguments);
                c.unshift(this.models);
                return b[a].apply(b, c)
            }
        });
    b.each(["groupBy", "countBy", "sortBy", "indexBy"], function(a) {
        u.prototype[a] = function(c, d) {
            var e = b.isFunction(c) ? c : function(a) {
                return a.get(c)
            };
            return b[a](this.models, e, d)
        }
    });
    e = c.View = function(a) {
        this.cid = b.uniqueId("view");
        a || (a = {});
        b.extend(this, b.pick(a, O));
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    };
    var C = /^(\S+)\s*(.*)$/,
        O = "model collection el id attributes className tagName events".split(" ");
    b.extend(e.prototype, m, {
        tagName: "div",
        $: function(a) {
            return this.$el.find(a)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this
        },
        setElement: function(a, b) {
            this.$el && this.undelegateEvents();
            this.$el = a instanceof c.$ ? a : c.$(a);
            this.el = this.$el[0];
            !1 !== b && this.delegateEvents();
            return this
        },
        delegateEvents: function(a) {
            if (!a && !(a = b.result(this, "events"))) return this;
            this.undelegateEvents();
            for (var c in a) {
                var d = a[c];
                b.isFunction(d) ||
                    (d = this[a[c]]);
                if (d) {
                    var e = c.match(C),
                        g = e[1],
                        e = e[2],
                        d = b.bind(d, this),
                        g = g + (".delegateEvents" + this.cid);
                    if ("" === e) this.$el.on(g, d);
                    else this.$el.on(g, e, d)
                }
            }
            return this
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        _ensureElement: function() {
            if (this.el) this.setElement(b.result(this, "el"), !1);
            else {
                var a = b.extend({}, b.result(this, "attributes"));
                this.id && (a.id = b.result(this, "id"));
                this.className && (a["class"] = b.result(this, "className"));
                a = c.$("<" + b.result(this, "tagName") +
                    ">").attr(a);
                this.setElement(a, !1)
            }
        }
    });
    c.sync = function(a, d, e) {
        var g = l[a];
        b.defaults(e || (e = {}), {
            emulateHTTP: c.emulateHTTP,
            emulateJSON: c.emulateJSON
        });
        var m = {
            type: g,
            dataType: "json"
        };
        e.url || (m.url = b.result(d, "url") || X());
        null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (m.contentType = "application/json", m.data = JSON.stringify(e.attrs || d.toJSON(e)));
        e.emulateJSON && (m.contentType = "application/x-www-form-urlencoded", m.data = m.data ? {
            model: m.data
        } : {});
        if (e.emulateHTTP && ("PUT" === g || "DELETE" === g || "PATCH" ===
                g)) {
            m.type = "POST";
            e.emulateJSON && (m.data._method = g);
            var r = e.beforeSend;
            e.beforeSend = function(a) {
                a.setRequestHeader("X-HTTP-Method-Override", g);
                if (r) return r.apply(this, arguments)
            }
        }
        "GET" === m.type || e.emulateJSON || (m.processData = !1);
        "PATCH" === m.type && w && (m.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        a = e.xhr = c.ajax(b.extend(m, e));
        d.trigger("request", d, a, e);
        return a
    };
    var w = "undefined" !== typeof window && !!window.ActiveXObject && !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
        l = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
    c.ajax = function() {
        return c.$.ajax.apply(c.$, arguments)
    };
    var L = c.Router = function(a) {
            a || (a = {});
            a.routes && (this.routes = a.routes);
            this._bindRoutes();
            this.initialize.apply(this, arguments)
        },
        R = /\((.*?)\)/g,
        Y = /(\(\?)?:\w+/g,
        ca = /\*\w+/g,
        aa = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    b.extend(L.prototype, m, {
        initialize: function() {},
        route: function(a, d, e) {
            b.isRegExp(a) || (a = this._routeToRegExp(a));
            b.isFunction(d) && (e = d, d = "");
            e || (e = this[d]);
            var g = this;
            c.history.route(a,
                function(b) {
                    b = g._extractParameters(a, b);
                    g.execute(e, b);
                    g.trigger.apply(g, ["route:" + d].concat(b));
                    g.trigger("route", d, b);
                    c.history.trigger("route", g, d, b)
                });
            return this
        },
        execute: function(a, b) {
            a && a.apply(this, b)
        },
        navigate: function(a, b) {
            c.history.navigate(a, b);
            return this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = b.result(this, "routes");
                for (var a, c = b.keys(this.routes); null != (a = c.pop());) this.route(a, this.routes[a])
            }
        },
        _routeToRegExp: function(a) {
            a = a.replace(aa, "\\$&").replace(R, "(?:$1)?").replace(Y,
                function(a, b) {
                    return b ? a : "([^/?]+)"
                }).replace(ca, "([^?]*?)");
            return new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(a, c) {
            var d = a.exec(c).slice(1);
            return b.map(d, function(a, b) {
                return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
            })
        }
    });
    var Q = c.History = function() {
            this.handlers = [];
            b.bindAll(this, "checkUrl");
            "undefined" !== typeof window && (this.location = window.location, this.history = window.history)
        },
        U = /^[#\/]|\s+$/g,
        J = /^\/+|\/+$/g,
        ba = /msie [\w.]+/,
        G = /\/$/,
        H = /#.*$/;
    Q.started = !1;
    b.extend(Q.prototype, m, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(a) {
            return (a = (a || this).location.href.match(/#(.*)$/)) ? a[1] : ""
        },
        getFragment: function(a, b) {
            if (null == a)
                if (this._hasPushState || !this._wantsHashChange || b) {
                    a = decodeURI(this.location.pathname + this.location.search);
                    var c = this.root.replace(G, "");
                    a.indexOf(c) || (a = a.slice(c.length))
                } else a = this.getHash();
            return a.replace(U, "")
        },
        start: function(a) {
            if (Q.started) throw Error("Backbone.history has already been started");
            Q.started = !0;
            this.options = b.extend({
                root: "/"
            }, this.options, a);
            this.root = this.options.root;
            this._wantsHashChange = !1 !== this.options.hashChange;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            a = this.getFragment();
            var d = document.documentMode,
                d = ba.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d);
            this.root = ("/" + this.root + "/").replace(J, "/");
            d && this._wantsHashChange && (this.iframe = c.$('<iframe src="javascript:0" tabindex="-1">').hide().appendTo("body")[0].contentWindow,
                this.navigate(a));
            if (this._hasPushState) c.$(window).on("popstate", this.checkUrl);
            else if (this._wantsHashChange && "onhashchange" in window && !d) c.$(window).on("hashchange", this.checkUrl);
            else this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
            this.fragment = a;
            a = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                this._hasPushState &&
                    this.atRoot() && a.hash && (this.fragment = this.getHash().replace(U, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            c.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            this._checkUrlInterval && clearInterval(this._checkUrlInterval);
            Q.started = !1
        },
        route: function(a, b) {
            this.handlers.unshift({
                route: a,
                callback: b
            })
        },
        checkUrl: function(a) {
            a = this.getFragment();
            a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
            if (a === this.fragment) return !1;
            this.iframe && this.navigate(a);
            this.loadUrl()
        },
        loadUrl: function(a) {
            a = this.fragment = this.getFragment(a);
            return b.any(this.handlers, function(b) {
                if (b.route.test(a)) return b.callback(a), !0
            })
        },
        navigate: function(a, b) {
            if (!Q.started) return !1;
            b && !0 !== b || (b = {
                trigger: !!b
            });
            var c = this.root + (a = this.getFragment(a || ""));
            a = a.replace(H, "");
            if (this.fragment !== a) {
                this.fragment = a;
                "" === a && "/" !== c && (c = c.slice(0, -1));
                if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({},
                    document.title, c);
                else if (this._wantsHashChange) this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace));
                else return this.location.assign(c);
                if (b.trigger) return this.loadUrl(a)
            }
        },
        _updateHash: function(a, b, c) {
            c ? (c = a.href.replace(/(javascript:|#).*$/, ""), a.replace(c + "#" + b)) : a.hash = "#" + b
        }
    });
    c.history = new Q;
    v.extend = u.extend = L.extend = e.extend = Q.extend = function(a,
        c) {
        var d = this,
            e;
        e = a && b.has(a, "constructor") ? a.constructor : function() {
            return d.apply(this, arguments)
        };
        b.extend(e, d, c);
        var g = function() {
            this.constructor = e
        };
        g.prototype = d.prototype;
        e.prototype = new g;
        a && b.extend(e.prototype, a);
        e.__super__ = d.prototype;
        return e
    };
    var X = function() {
            throw Error('A "url" property or function must be specified');
        },
        W = function(a, b) {
            var c = b.error;
            b.error = function(d) {
                c && c(a, d, b);
                a.trigger("error", a, d, b)
            }
        };
    return c
});
window.Modernizr = function(a, c, b) {
    function e(a, b) {
        return typeof a === b
    }

    function d(a, c) {
        for (var d in a) {
            var e = a[d];
            if (!~("" + e).indexOf("-") && B[e] !== b) return "pfx" == c ? e : !0
        }
        return !1
    }

    function g(a, c, g) {
        var m = a.charAt(0).toUpperCase() + a.slice(1),
            r = (a + " " + l.join(m + " ") + m).split(" ");
        if (e(c, "string") || e(c, "undefined")) c = d(r, c);
        else a: {
            r = (a + " " + L.join(m + " ") + m).split(" "),
            a = r;
            for (var n in a)
                if (m = c[a[n]], m !== b) {
                    c = !1 === g ? a[n] : e(m, "function") ? m.bind(g || c) : m;
                    break a
                }
            c = !1
        }
        return c
    }

    function m() {
        r.input = function(b) {
            for (var d =
                    0, e = b.length; e > d; d++) Y[b[d]] = !!(b[d] in y);
            return Y.list && (Y.list = !(!c.createElement("datalist") || !a.HTMLDataListElement)), Y
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        r.inputtypes = function(a) {
            for (var d, e, g, m = 0, l = a.length; l > m; m++) y.setAttribute("type", e = a[m]), (d = "text" !== y.type) && (y.value = C, y.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && y.style.WebkitAppearance !== b ? (v.appendChild(y), g = c.defaultView, d = g.getComputedStyle &&
                "textfield" !== g.getComputedStyle(y, null).WebkitAppearance && 0 !== y.offsetHeight, v.removeChild(y)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? y.checkValidity && !1 === y.checkValidity() : y.value != C)), R[a[m]] = !!d;
            return R
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var n, p, r = {},
        v = c.documentElement,
        u = c.createElement("modernizr"),
        B = u.style,
        y = c.createElement("input"),
        C = ":)",
        O = {}.toString,
        w = " -webkit- -moz- -o- -ms- ".split(" "),
        l = ["Webkit", "Moz",
            "O", "ms"
        ],
        L = ["webkit", "moz", "o", "ms"],
        u = {},
        R = {},
        Y = {},
        ca = [],
        aa = ca.slice,
        Q = function(a, b, d, e) {
            var g, m, l, r, n = c.createElement("div"),
                u = c.body,
                p = u || c.createElement("body");
            if (parseInt(d, 10))
                for (; d--;) l = c.createElement("div"), l.id = e ? e[d] : "modernizr" + (d + 1), n.appendChild(l);
            return g = ['&#173;<style id="smodernizr">', a, "</style>"].join(""), n.id = "modernizr", (u ? n : p).innerHTML += g, p.appendChild(n), u || (p.style.background = "", p.style.overflow = "hidden", r = v.style.overflow, v.style.overflow = "hidden", v.appendChild(p)),
                m = b(n, a), u ? n.parentNode.removeChild(n) : (p.parentNode.removeChild(p), v.style.overflow = r), !!m
        },
        U = function() {
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return function(d, g) {
                g = g || c.createElement(a[d] || "div");
                d = "on" + d;
                var m = d in g;
                return m || (g.setAttribute || (g = c.createElement("div")), g.setAttribute && g.removeAttribute && (g.setAttribute(d, ""), m = e(g[d], "function"), e(g[d], "undefined") || (g[d] = b), g.removeAttribute(d))), m
            }
        }(),
        J = {}.hasOwnProperty;
    p = e(J, "undefined") ||
        e(J.call, "undefined") ? function(a, b) {
            return b in a && e(a.constructor.prototype[b], "undefined")
        } : function(a, b) {
            return J.call(a, b)
        };
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = aa.call(arguments, 1),
            d = function() {
                if (this instanceof d) {
                    var e = function() {};
                    e.prototype = b.prototype;
                    var e = new e,
                        g = b.apply(e, c.concat(aa.call(arguments)));
                    return Object(g) === g ? g : e
                }
                return b.apply(a, c.concat(aa.call(arguments)))
            };
        return d
    });
    u.flexbox = function() {
        return g("flexWrap")
    };
    u.flexboxlegacy = function() {
        return g("boxDirection")
    };
    u.canvas = function() {
        var a = c.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    };
    u.canvastext = function() {
        return !(!r.canvas || !e(c.createElement("canvas").getContext("2d").fillText, "function"))
    };
    u.webgl = function() {
        return !!a.WebGLRenderingContext
    };
    u.touch = function() {
        var b;
        return "ontouchstart" in a || a.DocumentTouch && c instanceof DocumentTouch ? b = !0 : Q(["@media (", w.join("touch-enabled),("), "modernizr){#modernizr{top:9px;position:absolute}}"].join(""),
            function(a) {
                b = 9 === a.offsetTop
            }), b
    };
    u.geolocation = function() {
        return "geolocation" in navigator
    };
    u.postmessage = function() {
        return !!a.postMessage
    };
    u.websqldatabase = function() {
        return !!a.openDatabase
    };
    u.indexedDB = function() {
        return !!g("indexedDB", a)
    };
    u.hashchange = function() {
        return U("hashchange", a) && (c.documentMode === b || 7 < c.documentMode)
    };
    u.history = function() {
        return !(!a.history || !history.pushState)
    };
    u.draganddrop = function() {
        var a = c.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    };
    u.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a
    };
    u.rgba = function() {
        B.cssText = "background-color:rgba(150,255,150,.5)";
        return !!~("" + B.backgroundColor).indexOf("rgba")
    };
    u.hsla = function() {
        B.cssText = "background-color:hsla(120,40%,100%,.5)";
        return !!~("" + B.backgroundColor).indexOf("rgba") || !!~("" + B.backgroundColor).indexOf("hsla")
    };
    u.multiplebgs = function() {
        B.cssText = "background:url(https://),url(https://),red url(https://)";
        return /(url\s*\(.*?){3}/.test(B.background)
    };
    u.backgroundsize =
        function() {
            return g("backgroundSize")
        };
    u.borderimage = function() {
        return g("borderImage")
    };
    u.borderradius = function() {
        return g("borderRadius")
    };
    u.boxshadow = function() {
        return g("boxShadow")
    };
    u.textshadow = function() {
        return "" === c.createElement("div").style.textShadow
    };
    u.opacity = function() {
        var a = w.join("opacity:.55;") + "";
        B.cssText = a;
        return /^0.55$/.test(B.opacity)
    };
    u.cssanimations = function() {
        return g("animationName")
    };
    u.csscolumns = function() {
        return g("columnCount")
    };
    u.cssgradients = function() {
        var a = ("background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:" +
            w.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0, -17);
        B.cssText = a;
        return !!~("" + B.backgroundImage).indexOf("gradient")
    };
    u.cssreflections = function() {
        return g("boxReflect")
    };
    u.csstransforms = function() {
        return !!g("transform")
    };
    u.csstransforms3d = function() {
        var a = !!g("perspective");
        return a && "webkitPerspective" in v.style && Q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    };
    u.csstransitions =
        function() {
            return g("transition")
        };
    u.fontface = function() {
        var a;
        return Q('@font-face {font-family:"font";src:url("https://")}', function(b, d) {
            var e = c.getElementById("smodernizr"),
                e = (e = e.sheet || e.styleSheet) ? e.cssRules && e.cssRules[0] ? e.cssRules[0].cssText : e.cssText || "" : "";
            a = /src/i.test(e) && 0 === e.indexOf(d.split(" ")[0])
        }), a
    };
    u.generatedcontent = function() {
        var a;
        return Q(['#modernizr{font:0/0 a}#modernizr:after{content:"', C, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
                a = 3 <= b.offsetHeight
            }),
            a
    };
    u.video = function() {
        var a = c.createElement("video"),
            b = !1;
        try {
            (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), b.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), b.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (d) {}
        return b
    };
    u.audio = function() {
        var a = c.createElement("audio"),
            b = !1;
        try {
            (b = !!a.canPlayType) && (b = new Boolean(b), b.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,
                ""), b.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), b.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), b.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (d) {}
        return b
    };
    u.localstorage = function() {
        try {
            return localStorage.setItem("modernizr", "modernizr"), localStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    u.sessionstorage = function() {
        try {
            return sessionStorage.setItem("modernizr", "modernizr"), sessionStorage.removeItem("modernizr"), !0
        } catch (a) {
            return !1
        }
    };
    u.webworkers = function() {
        return !!a.Worker
    };
    u.applicationcache = function() {
        return !!a.applicationCache
    };
    u.svg = function() {
        return !!c.createElementNS && !!c.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    };
    u.inlinesvg = function() {
        var a = c.createElement("div");
        return a.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == (a.firstChild && a.firstChild.namespaceURI)
    };
    u.smil = function() {
        return !!c.createElementNS && /SVGAnimate/.test(O.call(c.createElementNS("http://www.w3.org/2000/svg", "animate")))
    };
    u.svgclippaths =
        function() {
            return !!c.createElementNS && /SVGClipPath/.test(O.call(c.createElementNS("http://www.w3.org/2000/svg", "clipPath")))
        };
    for (var ba in u) p(u, ba) && (n = ba.toLowerCase(), r[n] = u[ba](), ca.push((r[n] ? "" : "no-") + n));
    r.input || m();
    r.addTest = function(a, c) {
        if ("object" == typeof a)
            for (var d in a) p(a, d) && r.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), r[a] !== b) return r;
            c = "function" == typeof c ? c() : c;
            v.className += " " + (c ? "" : "no-") + a;
            r[a] = c
        }
        return r
    };
    B.cssText = "";
    return u = y = null,
        function(a, b) {
            function c() {
                var a = u.elements;
                return "string" == typeof a ? a.split(" ") : a
            }

            function d(a) {
                var b = x[a[k]];
                return b || (b = {}, s++, a[k] = s, x[s] = b), b
            }

            function e(a, c, k) {
                if (c || (c = b), r) return c.createElement(a);
                k || (k = d(c));
                var g;
                return g = k.cache[a] ? k.cache[a].cloneNode() : f.test(a) ? (k.cache[a] = k.createElem(a)).cloneNode() : k.createElem(a), !g.canHaveChildren || p.test(a) || g.tagUrn ? g : k.frag.appendChild(g)
            }

            function g(a, b) {
                b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag());
                a.createElement = function(c) {
                    return u.shivMethods ?
                        e(c, a, b) : b.createElem(c)
                };
                a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(u, b.frag)
            }

            function m(a) {
                a || (a = b);
                var c = d(a);
                if (u.shivCSS && !l && !c.hasCSS) {
                    var f, e = a;
                    f = e.createElement("p");
                    e = e.getElementsByTagName("head")[0] || e.documentElement;
                    f = (f.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>",
                        e.insertBefore(f.lastChild, e.firstChild));
                    c.hasCSS = !!f
                }
                return r || g(a, c), a
            }
            var l, r, n = a.html5 || {},
                p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                k = "_html5shiv",
                s = 0,
                x = {};
            ! function() {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>";
                    l = "hidden" in a;
                    var c;
                    if (!(c = 1 == a.childNodes.length)) {
                        b.createElement("a");
                        var f = b.createDocumentFragment();
                        c = "undefined" == typeof f.cloneNode ||
                            "undefined" == typeof f.createDocumentFragment || "undefined" == typeof f.createElement
                    }
                    r = c
                } catch (d) {
                    r = l = !0
                }
            }();
            var u = {
                elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: "3.7.0",
                shivCSS: !1 !== n.shivCSS,
                supportsUnknownElements: r,
                shivMethods: !1 !== n.shivMethods,
                type: "default",
                shivDocument: m,
                createElement: e,
                createDocumentFragment: function(a, f) {
                    if (a || (a = b),
                        r) return a.createDocumentFragment();
                    f = f || d(a);
                    for (var e = f.frag.cloneNode(), k = 0, g = c(), h = g.length; h > k; k++) e.createElement(g[k]);
                    return e
                }
            };
            a.html5 = u;
            m(b)
        }(this, c), r._version = "2.7.2", r._prefixes = w, r._domPrefixes = L, r._cssomPrefixes = l, r.mq = function(b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b).matches;
            var d;
            return Q("@media " + b + " { #modernizr { position: absolute; } }", function(b) {
                d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
            }), d
        }, r.hasEvent = U, r.testProp =
        function(a) {
            return d([a])
        }, r.testAllProps = g, r.testStyles = Q, r.prefixed = function(a, b, c) {
            return b ? g(a, b, c) : g(a, "pfx")
        }, v.className = v.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + ca.join(" ")), r
}(this, this.document);
(function(a, c, b, e) {
    (function(b) {
        for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
    })("foundation-mq-small foundation-mq-small-only foundation-mq-medium foundation-mq-medium-only foundation-mq-large foundation-mq-large-only foundation-mq-xlarge foundation-mq-xlarge-only foundation-mq-xxlarge foundation-data-attribute-namespace".split(" "));
    a(function() {
        "undefined" !== typeof FastClick && "undefined" !== typeof b.body && FastClick.attach(b.body)
    });
    var d = function(c,
            d) {
            if ("string" === typeof c) {
                if (d) {
                    var e;
                    if (d.jquery) {
                        if (e = d[0], !e) return d
                    } else e = d;
                    return a(e.querySelectorAll(c))
                }
                return a(b.querySelectorAll(c))
            }
            return a(c, d)
        },
        g = function(a) {
            var b = [];
            a || b.push("data");
            0 < this.namespace.length && b.push(this.namespace);
            b.push(this.name);
            return b.join("-")
        },
        m = function(a) {
            a = a.split("-");
            for (var b = a.length, c = []; b--;) 0 !== b ? c.push(a[b]) : 0 < this.namespace.length ? c.push(this.namespace, a[b]) : c.push(a[b]);
            return c.reverse().join("-")
        },
        n = function(b, c) {
            var e = this,
                g = !d(this).data(this.attr_name(!0));
            d(this.scope).is("[" + this.attr_name() + "]") ? (d(this.scope).data(this.attr_name(!0) + "-init", a.extend({}, this.settings, c || b, this.data_options(d(this.scope)))), g && this.events(this.scope)) : d("[" + this.attr_name() + "]", this.scope).each(function() {
                var g = !d(this).data(e.attr_name(!0) + "-init");
                d(this).data(e.attr_name(!0) + "-init", a.extend({}, e.settings, c || b, e.data_options(d(this))));
                g && e.events(this)
            });
            if ("string" === typeof b) return this[b].call(this, c)
        },
        p = function(a, b) {
            function c() {
                b(a[0])
            }

            function d() {
                this.one("load",
                    c);
                if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var a = this.attr("src"),
                        b = a.match(/\?/) ? "&" : "?",
                        b = b + ("random=" + (new Date).getTime());
                    this.attr("src", a + b)
                }
            }
            a.attr("src") ? a[0].complete || 4 === a[0].readyState ? c() : d.call(a) : c()
        };
    c.matchMedia = c.matchMedia || function(a) {
        var b, c = a.documentElement,
            d = c.firstElementChild || c.firstChild,
            e = a.createElement("body"),
            g = a.createElement("div");
        g.id = "mq-test-1";
        g.style.cssText = "position:absolute;top:-100em";
        e.style.background = "none";
        e.appendChild(g);
        return function(a) {
            g.innerHTML =
                '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>';
            c.insertBefore(e, d);
            b = 42 === g.offsetWidth;
            c.removeChild(e);
            return {
                matches: b,
                media: a
            }
        }
    }(b);
    (function(a) {
        function b() {
            d && (g(b), n && jQuery.fx.tick())
        }
        var d, e = 0;
        a = ["webkit", "moz"];
        for (var g = c.requestAnimationFrame, m = c.cancelAnimationFrame, n = "undefined" !== typeof jQuery.fx; e < a.length && !g; e++) g = c[a[e] + "RequestAnimationFrame"], m = m || c[a[e] + "CancelAnimationFrame"] || c[a[e] + "CancelRequestAnimationFrame"];
        g ? (c.requestAnimationFrame = g, c.cancelAnimationFrame =
            m, n && (jQuery.fx.timer = function(a) {
                a() && jQuery.timers.push(a) && !d && (d = !0, b())
            }, jQuery.fx.stop = function() {
                d = !1
            })) : (c.requestAnimationFrame = function(a) {
            var b = (new Date).getTime(),
                d = Math.max(0, 16 - (b - e)),
                g = c.setTimeout(function() {
                    a(b + d)
                }, d);
            e = b + d;
            return g
        }, c.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    })(jQuery);
    c.Foundation = {
        name: "Foundation",
        version: "{{VERSION}}",
        media_queries: {
            small: d(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "small-only": d(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
                ""),
            medium: d(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "medium-only": d(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            large: d(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            "large-only": d(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xlarge: d(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,
                ""),
            "xlarge-only": d(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
            xxlarge: d(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: {
            namespace: e
        },
        init: function(a, b, e, g, m) {
            e = [a, e, g, m];
            g = [];
            this.rtl = /rtl/i.test(d("html").attr("dir"));
            this.scope = a || this.scope;
            this.set_namespace();
            if (b && "string" === typeof b && !/reflow/i.test(b)) this.libs.hasOwnProperty(b) &&
                g.push(this.init_lib(b, e));
            else
                for (var n in this.libs) g.push(this.init_lib(n, b));
            d(c).load(function() {
                d(c).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
            });
            return a
        },
        init_lib: function(b, c) {
            if (this.libs.hasOwnProperty(b)) {
                this.patch(this.libs[b]);
                if (c && c.hasOwnProperty(b)) return "undefined" !==
                    typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" !== typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]]);
                c = c instanceof Array ? c : Array(c);
                return this.libs[b].init.apply(this.libs[b], c)
            }
            return function() {}
        },
        patch: function(a) {
            a.scope = this.scope;
            a.namespace = this.global.namespace;
            a.rtl = this.rtl;
            a.data_options = this.utils.data_options;
            a.attr_name = g;
            a.add_namespace = m;
            a.bindings = n;
            a.S = this.utils.S
        },
        inherit: function(a,
            b) {
            for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
        },
        set_namespace: function() {
            var b = this.global.namespace === e ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
            this.global.namespace = b === e || /false/i.test(b) ? "" : b
        },
        libs: {},
        utils: {
            S: d,
            throttle: function(a, b) {
                var c = null;
                return function() {
                    var d = this,
                        e = arguments;
                    null == c && (c = setTimeout(function() {
                        a.apply(d, e);
                        c = null
                    }, b))
                }
            },
            debounce: function(a, b, c) {
                var d, e;
                return function() {
                    var g =
                        this,
                        m = arguments,
                        n = c && !d;
                    clearTimeout(d);
                    d = setTimeout(function() {
                        d = null;
                        c || (e = a.apply(g, m))
                    }, b);
                    n && (e = a.apply(g, m));
                    return e
                }
            },
            data_options: function(b, c) {
                function d(a) {
                    return !isNaN(a - 0) && null !== a && "" !== a && !1 !== a && !0 !== a
                }

                function e(b) {
                    return "string" === typeof b ? a.trim(b) : b
                }
                c = c || "options";
                var g = {},
                    m, n, p;
                m = function(a) {
                    var b = Foundation.global.namespace;
                    return 0 < b.length ? a.data(b + "-" + c) : a.data(c)
                }(b);
                if ("object" === typeof m) return m;
                p = (m || ":").split(";");
                for (m = p.length; m--;) n = p[m].split(":"), n = [n[0], n.slice(1).join(":")],
                    /true/i.test(n[1]) && (n[1] = !0), /false/i.test(n[1]) && (n[1] = !1), d(n[1]) && (-1 === n[1].indexOf(".") ? n[1] = parseInt(n[1], 10) : n[1] = parseFloat(n[1])), 2 === n.length && 0 < n[0].length && (g[e(n[0])] = e(n[1]));
                return g
            },
            register_media: function(b, c) {
                if (Foundation.media_queries[b] === e) {
                    a("head").append('<meta class="' + c + '"/>');
                    var d = Foundation.media_queries,
                        g = a("." + c).css("font-family");
                    if ("string" === typeof g || g instanceof String) g = g.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "");
                    d[b] = g
                }
            },
            add_custom_rule: function(a, b) {
                b ===
                    e && Foundation.stylesheet ? Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length) : Foundation.media_queries[b] !== e && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
            },
            image_loaded: function(a, b) {
                var c = this,
                    d = a.length;
                0 === d && b(a);
                a.each(function() {
                    p(c.S(this), function() {
                        --d;
                        0 === d && b(a)
                    })
                })
            },
            random_str: function() {
                this.fidx || (this.fidx = 0);
                this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-");
                return this.prefix + (this.fidx++).toString(36)
            },
            match: function(a) {
                return c.matchMedia(a).matches
            },
            is_small_up: function() {
                return this.match(Foundation.media_queries.small)
            },
            is_medium_up: function() {
                return this.match(Foundation.media_queries.medium)
            },
            is_large_up: function() {
                return this.match(Foundation.media_queries.large)
            },
            is_xlarge_up: function() {
                return this.match(Foundation.media_queries.xlarge)
            },
            is_xxlarge_up: function() {
                return this.match(Foundation.media_queries.xxlarge)
            },
            is_small_only: function() {
                return !this.is_medium_up() && !this.is_large_up() &&
                    !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_medium_only: function() {
                return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_large_only: function() {
                return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
            },
            is_xxlarge_only: function() {
                return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
            }
        }
    };
    a.fn.foundation = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            Foundation.init.apply(Foundation, [this].concat(a));
            return this
        })
    }
})(jQuery, window, window.document);
(function(a, c, b, e) {
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "{{VERSION}}",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = b.S,
                e = "",
                n = "",
                p = "";
            "move" === this.settings.open_method ? (e = "move-", n = "right", p = "left") : "overlap_single" === this.settings.open_method ? (e = "offcanvas-overlap-", n = "right", p = "left") : "overlap" === this.settings.open_method && (e = "offcanvas-overlap");
            c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",
                ".left-off-canvas-toggle",
                function(r) {
                    b.click_toggle_class(r, e + n);
                    "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(e + n);
                    a(".left-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(r) {
                var p = b.get_settings(r),
                    u = c(this).parent();
                !p.close_on_click || u.hasClass("has-submenu") || u.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (r.preventDefault(), c(this).siblings(".left-submenu").toggleClass(e + n)) : u.hasClass("back") &&
                    (r.preventDefault(), u.parent().removeClass(e + n)) : (b.hide.call(b, e + n, b.get_wrapper(r)), u.parent().removeClass(e + n));
                a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(n) {
                b.click_toggle_class(n, e + p);
                "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(e + p);
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(n) {
                var v = b.get_settings(n),
                    u = c(this).parent();
                !v.close_on_click || u.hasClass("has-submenu") || u.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (n.preventDefault(), c(this).siblings(".right-submenu").toggleClass(e + p)) : u.hasClass("back") && (n.preventDefault(), u.parent().removeClass(e + p)) : (b.hide.call(b, e + p, b.get_wrapper(n)), u.parent().removeClass(e + p));
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(r) {
                b.click_remove_class(r, e + p);
                c(".right-submenu").removeClass(e + p);
                n &&
                    (b.click_remove_class(r, e + n), c(".left-submenu").removeClass(e + p));
                a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, e + p);
                a(".left-off-canvas-toggle").attr("aria-expanded", "false");
                n && (b.click_remove_class(c, e + n), a(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper();
            b.is("." + a) ? this.hide(a, b) : this.show(a, b)
        },
        show: function(a, b) {
            b = b || this.get_wrapper();
            b.trigger("open").trigger("open.fndtn.offcanvas");
            b.addClass(a)
        },
        hide: function(a, b) {
            b = b || this.get_wrapper();
            b.trigger("close").trigger("close.fndtn.offcanvas");
            b.removeClass(a)
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c)
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c)
        },
        get_settings: function(a) {
            return this.S(a.target).closest("[" + this.attr_name() + "]").data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(a) {
            a = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            0 === a.length && (a = this.S(".off-canvas-wrap"));
            return a
        },
        reflow: function() {}
    }
})(jQuery, window, window.document);
(function(a, c, b, e) {
    function d(a) {
        var b = /fade/i.test(a);
        a = /pop/i.test(a);
        return {
            animate: b || a,
            pop: a,
            fade: b
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "{{VERSION}}",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            bg_root_element: "body",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d);
            this.bindings(c, d)
        },
        events: function(a) {
            var c = this,
                d = c.S;
            d(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(a) {
                a.preventDefault();
                if (!c.locked) {
                    a = d(this);
                    var b = a.data(c.data_attr("reveal-ajax"));
                    c.locked = !0;
                    "undefined" === typeof b ? c.open.call(c, a) : (b = !0 === b ? a.attr("href") : b, c.open.call(c,
                        a, {
                            url: b
                        }))
                }
            });
            d(b).on("click.fndtn.reveal", this.close_targets(), function(a) {
                a.preventDefault();
                if (!c.locked) {
                    var b = d("[" + c.attr_name() + "].open").data(c.attr_name(!0) + "-init") || c.settings,
                        e = d(a.target)[0] === d("." + b.bg_class)[0];
                    if (e)
                        if (b.close_on_background_click) a.stopPropagation();
                        else return;
                    c.locked = !0;
                    c.close.call(c, e ? d("[" + c.attr_name() + "].open") : d(this).closest("[" + c.attr_name() + "]"))
                }
            });
            if (0 < d("[" + c.attr_name() + "]", this.scope).length) d(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal",
                this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video);
            else d(this.scope).on("open.fndtn.reveal", "[" + c.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + c.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + c.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + c.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal",
                "[" + c.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + c.attr_name() + "]", this.close_video);
            return !0
        },
        key_up_on: function(a) {
            var b = this;
            b.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(a) {
                var c = b.S("[" + b.attr_name() + "].open"),
                    d = c.data(b.attr_name(!0) + "-init") || b.settings;
                d && 27 === a.which && d.close_on_esc && !b.locked && b.close.call(b, c)
            });
            return !0
        },
        key_up_off: function(a) {
            this.S("body").off("keyup.fndtn.reveal");
            return !0
        },
        open: function(b, d) {
            var e = this,
                p;
            b ? "undefined" !==
                typeof b.selector ? p = e.S("#" + b.data(e.data_attr("reveal-id"))).first() : (p = e.S(this.scope), d = b) : p = e.S(this.scope);
            var r = p.data(e.attr_name(!0) + "-init"),
                r = r || this.settings;
            if (p.hasClass("open") && b.attr("data-reveal-id") == p.attr("id")) return e.close(p);
            if (!p.hasClass("open")) {
                var v = e.S("[" + e.attr_name() + "].open");
                "undefined" === typeof p.data("css-top") && p.data("css-top", parseInt(p.css("top"), 10)).data("offset", this.cache_offset(p));
                this.key_up_on(p);
                p.trigger("open").trigger("open.fndtn.reveal");
                1 > v.length &&
                    this.toggle_bg(p, !0);
                "string" === typeof d && (d = {
                    url: d
                });
                if ("undefined" !== typeof d && d.url) {
                    var u = "undefined" !== typeof d.success ? d.success : null;
                    a.extend(d, {
                        success: function(b, c, d) {
                            a.isFunction(u) && (c = u(b, c, d), "string" == typeof c && (b = c));
                            p.html(b);
                            e.S(p).foundation("section", "reflow");
                            e.S(p).children().foundation();
                            0 < v.length && e.hide(v, r.css.close);
                            e.show(p, r.css.open)
                        }
                    });
                    a.ajax(d)
                } else 0 < v.length && this.hide(v, r.css.close), this.show(p, r.css.open)
            }
            e.S(c).trigger("resize")
        },
        close: function(a) {
            a = a && a.length ?
                a : this.S(this.scope);
            var b = this.S("[" + this.attr_name() + "].open"),
                c = a.data(this.attr_name(!0) + "-init") || this.settings;
            0 < b.length && (this.locked = !0, this.key_up_off(a), a.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(a, !1), this.hide(b, c.css.close, c))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(b, c, d) {
            b = (b.data(this.attr_name(!0) + "-init") || this.settings).bg_root_element;
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo(b).hide());
            b = 0 < this.settings.bg.filter(":visible").length;
            d != b && ((d == e ? b : !d) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(b, c) {
            if (c) {
                var e = b.data(this.attr_name(!0) + "-init") || this.settings,
                    p = e.root_element;
                if (0 === b.parent(p).length) {
                    var r = b.wrap('<div style="display: none;" />').parent();
                    b.on("closed.fndtn.reveal.wrapped", function() {
                        b.detach().appendTo(r);
                        b.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    });
                    b.detach().appendTo(p)
                }
                var v = d(e.animation);
                v.animate || (this.locked = !1);
                if (v.pop) {
                    c.top = a(p).scrollTop() - b.data("offset") + "px";
                    var u = {
                        top: a(p).scrollTop() + b.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return b.css(c).animate(u, e.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), e.animation_speed / 2)
                }
                return v.fade ? (c.top = a(p).scrollTop() + b.data("css-top") +
                    "px", u = {
                        opacity: 1
                    }, setTimeout(function() {
                        return b.css(c).animate(u, e.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), e.animation_speed / 2)) : b.css(c).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            e = this.settings;
            if (d(e.animation).fade) return b.fadeIn(e.animation_speed / 2);
            this.locked = !1;
            return b.show()
        },
        hide: function(b, c) {
            if (c) {
                var e = b.data(this.attr_name(!0) + "-init") ||
                    this.settings,
                    p = e.root_element,
                    r = d(e.animation);
                r.animate || (this.locked = !1);
                if (r.pop) {
                    var v = {
                        top: -a(p).scrollTop() - b.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return b.animate(v, e.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.css(c).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), e.animation_speed / 2)
                }
                return r.fade ? (v = {
                    opacity: 0
                }, setTimeout(function() {
                        return b.animate(v, e.animation_speed, "linear", function() {
                            this.locked = !1;
                            b.css(c).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this),
                    e.animation_speed / 2)) : b.hide().css(c).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            e = this.settings;
            return d(e.animation).fade ? b.fadeOut(e.animation_speed / 2) : b.hide()
        },
        close_video: function(b) {
            b = a(".flex-video", b.target);
            var c = a("iframe", b);
            0 < c.length && (c.attr("data-src", c[0].src), c.attr("src", c.attr("src")), b.hide())
        },
        open_video: function(b) {
            b = a(".flex-video", b.target);
            var c = b.find("iframe");
            if (0 < c.length) {
                if ("string" === typeof c.attr("data-src")) c[0].src = c.attr("data-src");
                else {
                    var d =
                        c[0].src;
                    c[0].src = e;
                    c[0].src = d
                }
                b.show()
            }
        },
        data_attr: function(a) {
            return 0 < this.namespace.length ? this.namespace + "-" + a : a
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            a.hide();
            return b
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
})(jQuery, window, window.document);
(function(a, c, b, e) {
    Foundation.libs.abide = {
        name: "abide",
        version: "{{VERSION}}",
        settings: {
            live_validate: !0,
            validate_on_blur: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1E3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(a, c, e) {
                    return b.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value === a.value
                }
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(b) {
            var c = this;
            b = c.S(b).attr("novalidate", "novalidate");
            var e = b.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid");
            b.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",
                function(a) {
                    var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
                    return c.validate(c.S(this).find("input, textarea, select").get(), a, b)
                }).on("reset", function() {
                return c.reset(a(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                !0 === e.validate_on_blur && c.validate([this], a)
            }).on("keydown.fndtn.abide", function(a) {
                !0 === e.live_validate && 9 != a.which && (clearTimeout(c.timer), c.timer = setTimeout(function() {
                    c.validate([this], a)
                }.bind(this), e.timeout))
            })
        },
        reset: function(b) {
            b.removeAttr(this.invalid_attr);
            a(this.invalid_attr, b).removeAttr(this.invalid_attr);
            a("." + this.settings.error_class, b).not("small").removeClass(this.settings.error_class)
        },
        validate: function(a, b, c) {
            var e = this.parse_patterns(a),
                p = e.length,
                r = this.S(a[0]).closest("form");
            b = /submit/.test(b.type);
            for (var v = 0; v < p; v++)
                if (!e[v] && (b || c)) return this.settings.focus_on_invalid && a[v].focus(), r.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(a[v]).closest("form").attr(this.invalid_attr,
                    ""), !1;
                (b || c) && r.trigger("valid").trigger("valid.fndtn.abide");
            r.removeAttr(this.invalid_attr);
            return c ? !1 : !0
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = []; b--;) c.push(this.pattern(a[b]));
            return this.check_validation_and_apply_styles(c)
        },
        pattern: function(a) {
            var b = a.getAttribute("type"),
                c = "string" === typeof a.getAttribute("required"),
                e = a.getAttribute("pattern") || "";
            if (this.settings.patterns.hasOwnProperty(e) && 0 < e.length) return [a, this.settings.patterns[e], c];
            if (0 < e.length) return [a, new RegExp(e),
                c
            ];
            if (this.settings.patterns.hasOwnProperty(b)) return [a, this.settings.patterns[b], c];
            e = /.*/;
            return [a, e, c]
        },
        check_validation_and_apply_styles: function(b) {
            var c = b.length,
                e = [];
            for (this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]").data(this.attr_name(!0) + "-init"); c--;) {
                var n = b[c][0],
                    p = b[c][2],
                    r = n.value.trim(),
                    v = this.S(n).parent(),
                    u = n.getAttribute(this.add_namespace("data-abide-validator")),
                    B = "radio" === n.type,
                    y = "checkbox" === n.type,
                    C = this.S('label[for="' + n.getAttribute("id") + '"]'),
                    O = p ? 0 < n.value.length :
                    !0,
                    w = [];
                n.getAttribute(this.add_namespace("data-equalto")) && (u = "equalTo");
                v = v.is("label") ? v.parent() : v;
                u && (u = this.settings.validators[u].apply(this, [n, p, v]), w.push(u));
                B && p ? w.push(this.valid_radio(n, p)) : y && p ? w.push(this.valid_checkbox(n, p)) : (b[c][1].test(r) && O || !p && 1 > n.value.length || a(n).attr("disabled") ? w.push(!0) : w.push(!1), w = [w.every(function(a) {
                    return a
                })], w[0] ? (this.S(n).removeAttr(this.invalid_attr), n.setAttribute("aria-invalid", "false"), n.removeAttribute("aria-describedby"), v.removeClass(this.settings.error_class),
                    0 < C.length && this.settings.error_labels && C.removeClass(this.settings.error_class).removeAttr("role"), a(n).triggerHandler("valid")) : (this.S(n).attr(this.invalid_attr, ""), n.setAttribute("aria-invalid", "true"), p = v.find("small." + this.settings.error_class, "span." + this.settings.error_class), p = 0 < p.length ? p[0].id : "", 0 < p.length && n.setAttribute("aria-describedby", p), v.addClass(this.settings.error_class), 0 < C.length && this.settings.error_labels && C.addClass(this.settings.error_class).attr("role", "alert"), a(n).triggerHandler("invalid")));
                e.push(w[0])
            }
            return e = [e.every(function(a) {
                return a
            })]
        },
        valid_checkbox: function(a, b) {
            a = this.S(a);
            var c = a.is(":checked") || !b;
            c ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return c
        },
        valid_radio: function(a, b) {
            for (var c = a.getAttribute("name"), c = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + c + "']"), e = c.length, p = !1, r = 0; r < e; r++) c[r].checked && (p = !0);
            for (r = 0; r < e; r++) p ? this.S(c[r]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) :
                this.S(c[r]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return p
        },
        valid_equal: function(a, c, e) {
            (c = b.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value === a.value) ? (this.S(a).removeAttr(this.invalid_attr), e.removeClass(this.settings.error_class), 0 < label.length && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), e.addClass(this.settings.error_class), 0 < label.length && settings.error_labels && label.addClass(this.settings.error_class));
            return c
        },
        valid_oneof: function(a, b, c, e) {
            a = this.S(a);
            b = this.S("[" + this.add_namespace("data-oneof") + "]");
            (c = 0 < b.filter(":checked").length) ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class): a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            if (!e) {
                var p = this;
                b.each(function() {
                    p.valid_oneof.call(p, this, null, null, !0)
                })
            }
            return c
        }
    }
})(jQuery, window, window.document);
var JSON;
JSON || (JSON = {});
(function() {
    function a(b, d) {
        var e, n, y, C, O = g,
            w, l = d[b];
        l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(b));
        "function" == typeof p && (l = p.call(d, b, l));
        switch (typeof l) {
            case "string":
                return c(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l) return "null";
                g += m;
                w = [];
                if ("[object Array]" === Object.prototype.toString.apply(l)) {
                    C = l.length;
                    for (e = 0; e < C; e += 1) w[e] = a(e, l) || "null";
                    y = 0 === w.length ? "[]" : g ? "[\n" + g + w.join(",\n" + g) + "\n" + O + "]" :
                        "[" + w.join(",") + "]";
                    g = O;
                    return y
                }
                if (p && "object" == typeof p)
                    for (C = p.length, e = 0; e < C; e += 1) "string" == typeof p[e] && (n = p[e], y = a(n, l), y && w.push(c(n) + (g ? ": " : ":") + y));
                else
                    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (y = a(n, l), y && w.push(c(n) + (g ? ": " : ":") + y));
                y = 0 === w.length ? "{}" : g ? "{\n" + g + w.join(",\n" + g) + "\n" + O + "}" : "{" + w.join(",") + "}";
                g = O;
                return y
        }
    }

    function c(a) {
        d.lastIndex = 0;
        return d.test(a) ? '"' + a.replace(d, function(a) {
                var b = n[a];
                return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) +
            '"' : '"' + a + '"'
    }

    function b(a) {
        return 10 > a ? "0" + a : a
    }
    "use strict";
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
        return this.valueOf()
    });
    var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        g, m, n = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        p;
    "function" != typeof JSON.stringify && (JSON.stringify = function(b, c, d) {
        var e;
        m = g = "";
        if ("number" == typeof d)
            for (e = 0; e < d; e += 1) m += " ";
        else "string" == typeof d && (m = d);
        p = c;
        if (!c || "function" == typeof c || "object" == typeof c && "number" == typeof c.length) return a("", {
            "": b
        });
        throw Error("JSON.stringify");
    });
    "function" !=
    typeof JSON.parse && (JSON.parse = function(a, b) {
        function c(a, d) {
            var e, g, l = a[d];
            if (l && "object" == typeof l)
                for (e in l) Object.prototype.hasOwnProperty.call(l, e) && (g = c(l, e), void 0 !== g ? l[e] = g : delete l[e]);
            return b.call(a, d, l)
        }
        var d;
        a = String(a);
        e.lastIndex = 0;
        e.test(a) && (a = a.replace(e, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return d = eval("(" + a + ")"), "function" == typeof b ? c({
            "": d
        }, "") : d;
        throw new SyntaxError("JSON.parse");
    })
})();
SockJS = function() {
    var a = document,
        c = window,
        b = {},
        e = function() {};
    e.prototype.addEventListener = function(a, c) {
        this._listeners || (this._listeners = {});
        a in this._listeners || (this._listeners[a] = []);
        var d = this._listeners[a]; - 1 === b.arrIndexOf(d, c) && d.push(c)
    };
    e.prototype.removeEventListener = function(a, c) {
        if (this._listeners && a in this._listeners) {
            var d = this._listeners[a],
                e = b.arrIndexOf(d, c); - 1 !== e && (1 < d.length ? this._listeners[a] = d.slice(0, e).concat(d.slice(e + 1)) : delete this._listeners[a])
        }
    };
    e.prototype.dispatchEvent =
        function(a) {
            var b = a.type,
                c = Array.prototype.slice.call(arguments, 0);
            this["on" + b] && this["on" + b].apply(this, c);
            if (this._listeners && b in this._listeners)
                for (var d = 0; d < this._listeners[b].length; d++) this._listeners[b][d].apply(this, c)
        };
    var d = function(a, b) {
        this.type = a;
        if ("undefined" != typeof b)
            for (var c in b) b.hasOwnProperty(c) && (this[c] = b[c])
    };
    d.prototype.toString = function() {
        var a = [],
            b;
        for (b in this)
            if (this.hasOwnProperty(b)) {
                var c = this[b];
                "function" == typeof c && (c = "[function]");
                a.push(b + "=" + c)
            }
        return "SimpleEvent(" +
            a.join(", ") + ")"
    };
    var g = function(a) {
        this._events = a || [];
        this._listeners = {}
    };
    g.prototype.emit = function(a) {
        this._verifyType(a);
        if (!this._nuked) {
            var b = Array.prototype.slice.call(arguments, 1);
            this["on" + a] && this["on" + a].apply(this, b);
            if (a in this._listeners)
                for (var c = 0; c < this._listeners[a].length; c++) this._listeners[a][c].apply(this, b)
        }
    };
    g.prototype.on = function(a, b) {
        this._verifyType(a);
        this._nuked || (a in this._listeners || (this._listeners[a] = []), this._listeners[a].push(b))
    };
    g.prototype._verifyType = function(a) {
        -1 ===
            b.arrIndexOf(this._events, a) && b.log("Event " + JSON.stringify(a) + " not listed " + JSON.stringify(this._events) + " in " + this)
    };
    g.prototype.nuke = function() {
        this._nuked = !0;
        for (var a = 0; a < this._events.length; a++) delete this[this._events[a]];
        this._listeners = {}
    };
    b.random_string = function(a, b) {
        b = b || 37;
        var c, d = [];
        for (c = 0; c < a; c++) d.push("abcdefghijklmnopqrstuvwxyz0123456789_".substr(Math.floor(Math.random() * b), 1));
        return d.join("")
    };
    b.random_number = function(a) {
        return Math.floor(Math.random() * a)
    };
    b.random_number_string =
        function(a) {
            var c = ("" + (a - 1)).length;
            return (Array(c + 1).join("0") + b.random_number(a)).slice(-c)
        };
    b.getOrigin = function(a) {
        return (a + "/").split("/").slice(0, 3).join("/")
    };
    b.isSameOriginUrl = function(a, b) {
        return b || (b = c.location.href), a.split("/").slice(0, 3).join("/") === b.split("/").slice(0, 3).join("/")
    };
    b.getParentDomain = function(a) {
        return /^[0-9.]*$/.test(a) || /^\[/.test(a) || !/[.]/.test(a) ? a : a.split(".").slice(1).join(".")
    };
    b.objectExtend = function(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    b.polluteGlobalNamespace = function() {
        "_jp" in c || (c._jp = {})
    };
    b.closeFrame = function(a, b) {
        return "c" + JSON.stringify([a, b])
    };
    b.userSetCode = function(a) {
        return 1E3 === a || 3E3 <= a && 4999 >= a
    };
    b.countRTO = function(a) {
        var b;
        return 100 < a ? b = 3 * a : b = a + 200, b
    };
    b.log = function() {
        c.console && console.log && console.log.apply && console.log.apply(console, arguments)
    };
    b.bind = function(a, b) {
        return a.bind ? a.bind(b) : function() {
            return a.apply(b, arguments)
        }
    };
    b.flatUrl = function(a) {
        return -1 === a.indexOf("?") && -1 === a.indexOf("#")
    };
    b.amendUrl =
        function(c) {
            var d = a.location;
            if (!c) throw Error("Wrong url for SockJS");
            if (!b.flatUrl(c)) throw Error("Only basic urls are supported in SockJS");
            return 0 === c.indexOf("//") && (c = d.protocol + c), 0 === c.indexOf("/") && (c = d.protocol + "//" + d.host + c), c = c.replace(/[/]+$/, ""), c
        };
    b.arrIndexOf = function(a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] === b) return c;
        return -1
    };
    b.arrSkip = function(a, c) {
        var d = b.arrIndexOf(a, c);
        return -1 === d ? a.slice() : a.slice(0, d).concat(a.slice(d + 1))
    };
    b.isArray = Array.isArray || function(a) {
        return 0 <= {}.toString.call(a).indexOf("Array")
    };
    b.delay = function(a, b) {
        return "function" == typeof a && (b = a, a = 0), setTimeout(b, a)
    };
    var m = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n = {
            "\x00": "\\u0000",
            "\u0001": "\\u0001",
            "\u0002": "\\u0002",
            "\u0003": "\\u0003",
            "\u0004": "\\u0004",
            "\u0005": "\\u0005",
            "\u0006": "\\u0006",
            "\u0007": "\\u0007",
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\x0B": "\\u000b",
            "\f": "\\f",
            "\r": "\\r",
            "\u000e": "\\u000e",
            "\u000f": "\\u000f",
            "\u0010": "\\u0010",
            "\u0011": "\\u0011",
            "\u0012": "\\u0012",
            "\u0013": "\\u0013",
            "\u0014": "\\u0014",
            "\u0015": "\\u0015",
            "\u0016": "\\u0016",
            "\u0017": "\\u0017",
            "\u0018": "\\u0018",
            "\u0019": "\\u0019",
            "\u001a": "\\u001a",
            "\u001b": "\\u001b",
            "\u001c": "\\u001c",
            "\u001d": "\\u001d",
            "\u001e": "\\u001e",
            "\u001f": "\\u001f",
            '"': '\\"',
            "\\": "\\\\",
            "\u007f": "\\u007f",
            "\u0080": "\\u0080",
            "\u0081": "\\u0081",
            "\u0082": "\\u0082",
            "\u0083": "\\u0083",
            "\u0084": "\\u0084",
            "\u0085": "\\u0085",
            "\u0086": "\\u0086",
            "\u0087": "\\u0087",
            "\u0088": "\\u0088",
            "\u0089": "\\u0089",
            "\u008a": "\\u008a",
            "\u008b": "\\u008b",
            "\u008c": "\\u008c",
            "\u008d": "\\u008d",
            "\u008e": "\\u008e",
            "\u008f": "\\u008f",
            "\u0090": "\\u0090",
            "\u0091": "\\u0091",
            "\u0092": "\\u0092",
            "\u0093": "\\u0093",
            "\u0094": "\\u0094",
            "\u0095": "\\u0095",
            "\u0096": "\\u0096",
            "\u0097": "\\u0097",
            "\u0098": "\\u0098",
            "\u0099": "\\u0099",
            "\u009a": "\\u009a",
            "\u009b": "\\u009b",
            "\u009c": "\\u009c",
            "\u009d": "\\u009d",
            "\u009e": "\\u009e",
            "\u009f": "\\u009f",
            "\u00ad": "\\u00ad",
            "\u0600": "\\u0600",
            "\u0601": "\\u0601",
            "\u0602": "\\u0602",
            "\u0603": "\\u0603",
            "\u0604": "\\u0604",
            "\u070f": "\\u070f",
            "\u17b4": "\\u17b4",
            "\u17b5": "\\u17b5",
            "\u200c": "\\u200c",
            "\u200d": "\\u200d",
            "\u200e": "\\u200e",
            "\u200f": "\\u200f",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            "\u202a": "\\u202a",
            "\u202b": "\\u202b",
            "\u202c": "\\u202c",
            "\u202d": "\\u202d",
            "\u202e": "\\u202e",
            "\u202f": "\\u202f",
            "\u2060": "\\u2060",
            "\u2061": "\\u2061",
            "\u2062": "\\u2062",
            "\u2063": "\\u2063",
            "\u2064": "\\u2064",
            "\u2065": "\\u2065",
            "\u2066": "\\u2066",
            "\u2067": "\\u2067",
            "\u2068": "\\u2068",
            "\u2069": "\\u2069",
            "\u206a": "\\u206a",
            "\u206b": "\\u206b",
            "\u206c": "\\u206c",
            "\u206d": "\\u206d",
            "\u206e": "\\u206e",
            "\u206f": "\\u206f",
            "\ufeff": "\\ufeff",
            "\ufff0": "\\ufff0",
            "\ufff1": "\\ufff1",
            "\ufff2": "\\ufff2",
            "\ufff3": "\\ufff3",
            "\ufff4": "\\ufff4",
            "\ufff5": "\\ufff5",
            "\ufff6": "\\ufff6",
            "\ufff7": "\\ufff7",
            "\ufff8": "\\ufff8",
            "\ufff9": "\\ufff9",
            "\ufffa": "\\ufffa",
            "\ufffb": "\\ufffb",
            "\ufffc": "\\ufffc",
            "\ufffd": "\\ufffd",
            "\ufffe": "\\ufffe",
            "\uffff": "\\uffff"
        },
        p = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
        r, v = JSON && JSON.stringify || function(a) {
            return m.lastIndex = 0, m.test(a) && (a = a.replace(m, function(a) {
                return n[a]
            })), '"' + a + '"'
        },
        u = function(a) {
            var b, c = {},
                d = [];
            for (b = 0; 65536 > b; b++) d.push(String.fromCharCode(b));
            return a.lastIndex = 0, d.join("").replace(a, function(a) {
                return c[a] = "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4), ""
            }), a.lastIndex = 0, c
        };
    b.quote = function(a) {
        a = v(a);
        return p.lastIndex = 0, p.test(a) ? (r || (r = u(p)), a.replace(p, function(a) {
            return r[a]
        })) : a
    };
    var B = "websocket xdr-streaming xhr-streaming iframe-eventsource iframe-htmlfile xdr-polling xhr-polling iframe-xhr-polling jsonp-polling".split(" ");
    b.probeProtocols = function() {
        for (var a = {}, b = 0; b < B.length; b++) {
            var c = B[b];
            a[c] = l[c] && l[c].enabled()
        }
        return a
    };
    b.detectProtocols = function(a, b, c) {
        var d = {},
            e = [];
        b || (b = B);
        for (var g = 0; g < b.length; g++) {
            var l = b[g];
            d[l] = a[l]
        }
        var m = function(a) {
            var b = a.shift();
            d[b] ? e.push(b) : 0 < a.length && m(a)
        };
        return !1 !== c.websocket && m(["websocket"]), d["xhr-streaming"] && !c.null_origin ? e.push("xhr-streaming") : !d["xdr-streaming"] || c.cookie_needed || c.null_origin ? m(["iframe-eventsource", "iframe-htmlfile"]) : e.push("xdr-streaming"),
            d["xhr-polling"] && !c.null_origin ? e.push("xhr-polling") : !d["xdr-polling"] || c.cookie_needed || c.null_origin ? m(["iframe-xhr-polling", "jsonp-polling"]) : e.push("xdr-polling"), e
    };
    b.createHook = function() {
        var a = "a" + b.random_string(8);
        if (!("_sockjs_global" in c)) {
            var d = {};
            c._sockjs_global = function(a) {
                return a in d || (d[a] = {
                    id: a,
                    del: function() {
                        delete d[a]
                    }
                }), d[a]
            }
        }
        return c._sockjs_global(a)
    };
    b.attachMessage = function(a) {
        b.attachEvent("message", a)
    };
    b.attachEvent = function(b, d) {
        "undefined" != typeof c.addEventListener ?
            c.addEventListener(b, d, !1) : (a.attachEvent("on" + b, d), c.attachEvent("on" + b, d))
    };
    b.detachMessage = function(a) {
        b.detachEvent("message", a)
    };
    b.detachEvent = function(b, d) {
        "undefined" != typeof c.addEventListener ? c.removeEventListener(b, d, !1) : (a.detachEvent("on" + b, d), c.detachEvent("on" + b, d))
    };
    var y = {},
        C = !1,
        O = function() {
            for (var a in y) y[a](), delete y[a]
        };
    b.attachEvent("unload", function() {
        C || (C = !0, O())
    });
    b.unload_add = function(a) {
        var c = b.random_string(8);
        return y[c] = a, C && b.delay(O), c
    };
    b.unload_del = function(a) {
        a in
            y && delete y[a]
    };
    b.createIframe = function(c, d) {
        var e = a.createElement("iframe"),
            g, l, m = function() {
                clearTimeout(g);
                try {
                    e.onload = null
                } catch (a) {}
                e.onerror = null
            },
            n = function() {
                e && (m(), setTimeout(function() {
                    e && e.parentNode.removeChild(e);
                    e = null
                }, 0), b.unload_del(l))
            };
        return e.src = c, e.style.display = "none", e.style.position = "absolute", e.onerror = function() {
            e && (n(), d("onerror"))
        }, e.onload = function() {
            clearTimeout(g);
            g = setTimeout(function() {
                e && (n(), d("onload timeout"))
            }, 2E3)
        }, a.body.appendChild(e), g = setTimeout(function() {
            e &&
                (n(), d("timeout"))
        }, 15E3), l = b.unload_add(n), {
            post: function(a, b) {
                try {
                    e && e.contentWindow && e.contentWindow.postMessage(a, b)
                } catch (c) {}
            },
            cleanup: n,
            loaded: m
        }
    };
    b.createHtmlfile = function(a, d) {
        var e = new ActiveXObject("htmlfile"),
            g, l, m, n = function() {
                clearTimeout(g)
            },
            p = function() {
                e && (n(), b.unload_del(l), m.parentNode.removeChild(m), m = e = null, CollectGarbage())
            };
        e.open();
        e.write('<html><script>document.domain="' + document.domain + '";\x3c/script></html>');
        e.close();
        e.parentWindow._jp = c._jp;
        var r = e.createElement("div");
        return e.body.appendChild(r), m = e.createElement("iframe"), r.appendChild(m), m.src = a, g = setTimeout(function() {
            e && (p(), d("timeout"))
        }, 15E3), l = b.unload_add(p), {
            post: function(a, b) {
                try {
                    m && m.contentWindow && m.contentWindow.postMessage(a, b)
                } catch (c) {}
            },
            cleanup: p,
            loaded: n
        }
    };
    var w = function() {};
    w.prototype = new g(["chunk", "finish"]);
    w.prototype._start = function(a, d, e, g) {
        var l = this;
        try {
            l.xhr = new XMLHttpRequest
        } catch (m) {}
        if (!l.xhr) try {
            l.xhr = new c.ActiveXObject("Microsoft.XMLHTTP")
        } catch (n) {}
        if (c.ActiveXObject || c.XDomainRequest) d +=
            (-1 === d.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        l.unload_ref = b.unload_add(function() {
            l._cleanup(!0)
        });
        try {
            l.xhr.open(a, d, !0)
        } catch (p) {
            l.emit("finish", 0, "");
            l._cleanup();
            return
        }
        g && g.no_credentials || (l.xhr.withCredentials = "true");
        if (g && g.headers)
            for (var r in g.headers) l.xhr.setRequestHeader(r, g.headers[r]);
        l.xhr.onreadystatechange = function() {
            if (l.xhr) {
                var a = l.xhr;
                switch (a.readyState) {
                    case 3:
                        try {
                            var b = a.status,
                                c = a.responseText
                        } catch (d) {}
                        1223 === b && (b = 204);
                        c && 0 < c.length && l.emit("chunk", b, c);
                        break;
                    case 4:
                        b =
                            a.status, 1223 === b && (b = 204), l.emit("finish", b, a.responseText), l._cleanup(!1)
                }
            }
        };
        l.xhr.send(e)
    };
    w.prototype._cleanup = function(a) {
        if (this.xhr) {
            b.unload_del(this.unload_ref);
            this.xhr.onreadystatechange = function() {};
            if (a) try {
                this.xhr.abort()
            } catch (c) {}
            this.unload_ref = this.xhr = null
        }
    };
    w.prototype.close = function() {
        this.nuke();
        this._cleanup(!0)
    };
    (b.XHRCorsObject = function() {
        var a = this,
            c = arguments;
        b.delay(function() {
            a._start.apply(a, c)
        })
    }).prototype = new w;
    (b.XHRLocalObject = function(a, c, d) {
        var e = this;
        b.delay(function() {
            e._start(a,
                c, d, {
                    no_credentials: !0
                })
        })
    }).prototype = new w;
    w = b.XDRObject = function(a, c, d) {
        var e = this;
        b.delay(function() {
            e._start(a, c, d)
        })
    };
    w.prototype = new g(["chunk", "finish"]);
    w.prototype._start = function(a, c, d) {
        var e = this,
            g = new XDomainRequest;
        c += (-1 === c.indexOf("?") ? "?" : "&") + "t=" + +new Date;
        var l = g.ontimeout = g.onerror = function() {
            e.emit("finish", 0, "");
            e._cleanup(!1)
        };
        g.onprogress = function() {
            e.emit("chunk", 200, g.responseText)
        };
        g.onload = function() {
            e.emit("finish", 200, g.responseText);
            e._cleanup(!1)
        };
        e.xdr = g;
        e.unload_ref =
            b.unload_add(function() {
                e._cleanup(!0)
            });
        try {
            e.xdr.open(a, c), e.xdr.send(d)
        } catch (m) {
            l()
        }
    };
    w.prototype._cleanup = function(a) {
        if (this.xdr) {
            b.unload_del(this.unload_ref);
            this.xdr.ontimeout = this.xdr.onerror = this.xdr.onprogress = this.xdr.onload = null;
            if (a) try {
                this.xdr.abort()
            } catch (c) {}
            this.unload_ref = this.xdr = null
        }
    };
    w.prototype.close = function() {
        this.nuke();
        this._cleanup(!0)
    };
    b.isXHRCorsCapable = function() {
        return c.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : c.XDomainRequest && a.domain ? 2 : J.enabled() ?
            3 : 4
    };
    var l = function(a, d, e) {
        if (this === c) return new l(a, d, e);
        var g = this,
            m;
        g._options = {
            devel: !1,
            debug: !1,
            protocols_whitelist: [],
            info: void 0,
            rtt: void 0
        };
        e && b.objectExtend(g._options, e);
        g._base_url = b.amendUrl(a);
        g._server = g._options.server || b.random_number_string(1E3);
        g._options.protocols_whitelist && g._options.protocols_whitelist.length ? m = g._options.protocols_whitelist : ("string" == typeof d && 0 < d.length ? m = [d] : b.isArray(d) ? m = d : m = null, m && g._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.'));
        g._protocols = [];
        g.protocol = null;
        g.readyState = l.CONNECTING;
        g._ir = M(g._base_url);
        g._ir.onfinish = function(a, c) {
            g._ir = null;
            a ? (g._options.info && (a = b.objectExtend(a, g._options.info)), g._options.rtt && (c = g._options.rtt), g._applyInfo(a, c, m), g._didClose()) : g._didClose(1002, "Can't connect to server", !0)
        }
    };
    l.prototype = new e;
    l.version = "0.3.4";
    l.CONNECTING = 0;
    l.OPEN = 1;
    l.CLOSING = 2;
    l.CLOSED = 3;
    l.prototype._debug = function() {
        this._options.debug && b.log.apply(b, arguments)
    };
    l.prototype._dispatchOpen = function() {
        this.readyState ===
            l.CONNECTING ? (this._transport_tref && (clearTimeout(this._transport_tref), this._transport_tref = null), this.readyState = l.OPEN, this.dispatchEvent(new d("open"))) : this._didClose(1006, "Server lost session")
    };
    l.prototype._dispatchMessage = function(a) {
        this.readyState === l.OPEN && this.dispatchEvent(new d("message", {
            data: a
        }))
    };
    l.prototype._dispatchHeartbeat = function(a) {
        this.readyState === l.OPEN && this.dispatchEvent(new d("heartbeat", {}))
    };
    l.prototype._didClose = function(a, c, e) {
        var g = this;
        if (g.readyState !== l.CONNECTING &&
            g.readyState !== l.OPEN && g.readyState !== l.CLOSING) throw Error("INVALID_STATE_ERR");
        g._ir && (g._ir.nuke(), g._ir = null);
        g._transport && (g._transport.doCleanup(), g._transport = null);
        var m = new d("close", {
            code: a,
            reason: c,
            wasClean: b.userSetCode(a)
        });
        if (!b.userSetCode(a) && g.readyState === l.CONNECTING && !e) {
            if (g._try_next_protocol(m)) return;
            m = new d("close", {
                code: 2E3,
                reason: "All transports failed",
                wasClean: !1,
                last_event: m
            })
        }
        g.readyState = l.CLOSED;
        b.delay(function() {
            g.dispatchEvent(m)
        })
    };
    l.prototype._didMessage = function(a) {
        switch (a.slice(0,
            1)) {
            case "o":
                this._dispatchOpen();
                break;
            case "a":
                a = JSON.parse(a.slice(1) || "[]");
                for (var b = 0; b < a.length; b++) this._dispatchMessage(a[b]);
                break;
            case "m":
                a = JSON.parse(a.slice(1) || "null");
                this._dispatchMessage(a);
                break;
            case "c":
                a = JSON.parse(a.slice(1) || "[]");
                this._didClose(a[0], a[1]);
                break;
            case "h":
                this._dispatchHeartbeat()
        }
    };
    l.prototype._try_next_protocol = function(c) {
        var d = this;
        d.protocol && (d._debug("Closed transport:", d.protocol, "" + c), d.protocol = null);
        for (d._transport_tref && (clearTimeout(d._transport_tref),
                d._transport_tref = null);;) {
            c = d.protocol = d._protocols.shift();
            if (!c) return !1;
            if (l[c] && !0 === l[c].need_body && (!a.body || "undefined" != typeof a.readyState && "complete" !== a.readyState)) return d._protocols.unshift(c), d.protocol = "waiting-for-load", b.attachEvent("load", function() {
                d._try_next_protocol()
            }), !0;
            if (l[c] && l[c].enabled(d._options)) {
                d._transport_tref = b.delay((d._options.rto || 0) * (l[c].roundTrips || 1) || 5E3, function() {
                    d.readyState === l.CONNECTING && d._didClose(2007, "Transport timeouted")
                });
                var e = b.random_string(8),
                    e = d._base_url + "/" + d._server + "/" + e;
                return d._debug("Opening transport:", c, " url:" + e, " RTO:" + d._options.rto), d._transport = new l[c](d, e, d._base_url), !0
            }
            d._debug("Skipping transport:", c)
        }
    };
    l.prototype.close = function(a, c) {
        if (a && !b.userSetCode(a)) throw Error("INVALID_ACCESS_ERR");
        return this.readyState !== l.CONNECTING && this.readyState !== l.OPEN ? !1 : (this.readyState = l.CLOSING, this._didClose(a || 1E3, c || "Normal closure"), !0)
    };
    l.prototype.send = function(a) {
        if (this.readyState === l.CONNECTING) throw Error("INVALID_STATE_ERR");
        return this.readyState === l.OPEN && this._transport.doSend(b.quote("" + a)), !0
    };
    l.prototype._applyInfo = function(c, d, e) {
        this._options.info = c;
        this._options.rtt = d;
        this._options.rto = b.countRTO(d);
        this._options.info.null_origin = !a.domain;
        d = b.probeProtocols();
        this._protocols = b.detectProtocols(d, e, c)
    };
    w = l.websocket = function(a, d) {
        var e = this,
            g = d + "/websocket";
        "https" === g.slice(0, 5) ? g = "wss" + g.slice(5) : g = "ws" + g.slice(4);
        e.ri = a;
        e.url = g;
        e.ws = new(c.WebSocket || c.MozWebSocket)(e.url);
        e.ws.onmessage = function(a) {
            e.ri._didMessage(a.data)
        };
        e.unload_ref = b.unload_add(function() {
            e.ws.close()
        });
        e.ws.onclose = function() {
            e.ri._didMessage(b.closeFrame(1006, "WebSocket connection broken"))
        }
    };
    w.prototype.doSend = function(a) {
        this.ws.send("[" + a + "]")
    };
    w.prototype.doCleanup = function() {
        var a = this.ws;
        a && (a.onmessage = a.onclose = null, a.close(), b.unload_del(this.unload_ref), this.unload_ref = this.ri = this.ws = null)
    };
    w.enabled = function() {
        return !!c.WebSocket || !!c.MozWebSocket
    };
    w.roundTrips = 2;
    var L = function() {};
    L.prototype.send_constructor = function(a) {
        this.send_buffer = [];
        this.sender = a
    };
    L.prototype.doSend = function(a) {
        this.send_buffer.push(a);
        this.send_stop || this.send_schedule()
    };
    L.prototype.send_schedule_wait = function() {
        var a = this,
            c;
        a.send_stop = function() {
            a.send_stop = null;
            clearTimeout(c)
        };
        c = b.delay(25, function() {
            a.send_stop = null;
            a.send_schedule()
        })
    };
    L.prototype.send_schedule = function() {
        var a = this;
        if (0 < a.send_buffer.length) {
            var b = "[" + a.send_buffer.join(",") + "]";
            a.send_stop = a.sender(a.trans_url, b, function(b, c) {
                a.send_stop = null;
                !1 === b ? a.ri._didClose(1006, "Sending error " +
                    c) : a.send_schedule_wait()
            });
            a.send_buffer = []
        }
    };
    L.prototype.send_destructor = function() {
        this._send_stop && this._send_stop();
        this._send_stop = null
    };
    var R = function(c, d, e) {
            if (!("_send_form" in this)) {
                var g = this._send_form = a.createElement("form"),
                    l = this._send_area = a.createElement("textarea");
                l.name = "d";
                g.style.display = "none";
                g.style.position = "absolute";
                g.method = "POST";
                g.enctype = "application/x-www-form-urlencoded";
                g.acceptCharset = "UTF-8";
                g.appendChild(l);
                a.body.appendChild(g)
            }
            var g = this._send_form,
                l = this._send_area,
                m = "a" + b.random_string(8);
            g.target = m;
            g.action = c + "/jsonp_send?i=" + m;
            var n;
            try {
                n = a.createElement('<iframe name="' + m + '">')
            } catch (p) {
                n = a.createElement("iframe"), n.name = m
            }
            n.id = m;
            g.appendChild(n);
            n.style.display = "none";
            try {
                l.value = d
            } catch (r) {
                b.log("Your browser is seriously broken. Go home! " + r.message)
            }
            g.submit();
            var q = function(a) {
                n.onerror && (n.onreadystatechange = n.onerror = n.onload = null, b.delay(500, function() {
                    n.parentNode.removeChild(n);
                    n = null
                }), l.value = "", e(!0))
            };
            return n.onerror = n.onload = q, n.onreadystatechange =
                function(a) {
                    "complete" == n.readyState && q()
                }, q
        },
        Y = function(a) {
            return function(b, c, d) {
                return (new a("POST", b + "/xhr_send", c)).onfinish = function(a, b) {
                        d(200 === a || 204 === a, "http status " + a)
                    },
                    function(a) {
                        d(!1, a)
                    }
            }
        },
        ca = function(c, d) {
            var e, g = a.createElement("script"),
                l, m = function(a) {
                    l && (l.parentNode.removeChild(l), l = null);
                    g && (clearTimeout(e), g.parentNode.removeChild(g), g.onreadystatechange = g.onerror = g.onload = g.onclick = null, g = null, d(a), d = null)
                },
                n = !1,
                p = null;
            g.id = "a" + b.random_string(8);
            g.src = c;
            g.type = "text/javascript";
            g.charset = "UTF-8";
            g.onerror = function(a) {
                p || (p = setTimeout(function() {
                    n || m(b.closeFrame(1006, "JSONP script loaded abnormally (onerror)"))
                }, 1E3))
            };
            g.onload = function(a) {
                m(b.closeFrame(1006, "JSONP script loaded abnormally (onload)"))
            };
            g.onreadystatechange = function(a) {
                if (/loaded|closed/.test(g.readyState)) {
                    if (g && g.htmlFor && g.onclick) {
                        n = !0;
                        try {
                            g.onclick()
                        } catch (c) {}
                    }
                    g && m(b.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                }
            };
            if ("undefined" == typeof g.async && a.attachEvent)
                if (/opera/i.test(navigator.userAgent)) l =
                    a.createElement("script"), l.text = "try{var a = document.getElementById('" + g.id + "'); if(a)a.onerror();}catch(x){};", g.async = l.async = !1;
                else {
                    try {
                        g.htmlFor = g.id, g.event = "onclick"
                    } catch (r) {}
                    g.async = !0
                }
                "undefined" != typeof g.async && (g.async = !0);
            e = setTimeout(function() {
                m(b.closeFrame(1006, "JSONP script loaded abnormally (timeout)"))
            }, 35E3);
            var q = a.getElementsByTagName("head")[0];
            return q.insertBefore(g, q.firstChild), l && q.insertBefore(l, q.firstChild), m
        },
        w = l["jsonp-polling"] = function(a, c) {
            b.polluteGlobalNamespace();
            this.ri = a;
            this.trans_url = c;
            this.send_constructor(R);
            this._schedule_recv()
        };
    w.prototype = new L;
    w.prototype._schedule_recv = function() {
        var a = this;
        a._recv_stop = aa(a.trans_url + "/jsonp", ca, function(b) {
            a._recv_stop = null;
            b && (a._is_closing || a.ri._didMessage(b));
            a._is_closing || a._schedule_recv()
        })
    };
    w.enabled = function() {
        return !0
    };
    w.need_body = !0;
    w.prototype.doCleanup = function() {
        this._is_closing = !0;
        this._recv_stop && this._recv_stop();
        this.ri = this._recv_stop = null;
        this.send_destructor()
    };
    var aa = function(a, d, e) {
            var g =
                "a" + b.random_string(6);
            a = a + "?c=" + escape("_jp." + g);
            var l = 0;
            d = d(a, function(a) {
                switch (l) {
                    case 0:
                        delete c._jp[g];
                        e(a);
                        break;
                    case 1:
                        e(a);
                        l = 2;
                        break;
                    case 2:
                        delete c._jp[g]
                }
            });
            c._jp[g] = d;
            return function() {
                c._jp[g] && (l = 1, c._jp[g](b.closeFrame(1E3, "JSONP user aborted read")))
            }
        },
        w = function() {};
    w.prototype = new L;
    w.prototype.run = function(a, b, c, d, e) {
        this.ri = a;
        this.trans_url = b;
        this.send_constructor(Y(e));
        this.poll = new D(a, d, b + c, e)
    };
    w.prototype.doCleanup = function() {
        this.poll && (this.poll.abort(), this.poll = null)
    };
    var Q = l["xhr-streaming"] = function(a, c) {
        this.run(a, c, "/xhr_streaming", Z, b.XHRCorsObject)
    };
    Q.prototype = new w;
    Q.enabled = function() {
        return c.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent)
    };
    Q.roundTrips = 2;
    Q.need_body = !0;
    L = l["xdr-streaming"] = function(a, c) {
        this.run(a, c, "/xhr_streaming", Z, b.XDRObject)
    };
    L.prototype = new w;
    L.enabled = function() {
        return !!c.XDomainRequest
    };
    L.roundTrips = 2;
    var U = l["xhr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", Z, b.XHRCorsObject)
    };
    U.prototype =
        new w;
    U.enabled = Q.enabled;
    U.roundTrips = 2;
    Q = l["xdr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", Z, b.XDRObject)
    };
    Q.prototype = new w;
    Q.enabled = L.enabled;
    Q.roundTrips = 2;
    var J = function() {};
    J.prototype.i_constructor = function(a, c, d) {
        var e = this;
        e.ri = a;
        e.origin = b.getOrigin(d);
        e.base_url = d;
        e.trans_url = c;
        a = d + "/iframe.html";
        e.ri._options.devel && (a += "?t=" + +new Date);
        e.window_id = b.random_string(8);
        a += "#" + e.window_id;
        e.iframeObj = b.createIframe(a, function(a) {
            e.ri._didClose(1006, "Unable to load an iframe (" + a + ")")
        });
        e.onmessage_cb = b.bind(e.onmessage, e);
        b.attachMessage(e.onmessage_cb)
    };
    J.prototype.doCleanup = function() {
        if (this.iframeObj) {
            b.detachMessage(this.onmessage_cb);
            try {
                this.iframeObj.iframe.contentWindow && this.postMessage("c")
            } catch (a) {}
            this.iframeObj.cleanup();
            this.onmessage_cb = this.iframeObj = this.iframeObj = null
        }
    };
    J.prototype.onmessage = function(a) {
        if (a.origin === this.origin) {
            var b = a.data.slice(0, 8),
                c = a.data.slice(8, 9);
            a = a.data.slice(9);
            if (b === this.window_id) switch (c) {
                case "s":
                    this.iframeObj.loaded();
                    this.postMessage("s",
                        JSON.stringify([l.version, this.protocol, this.trans_url, this.base_url]));
                    break;
                case "t":
                    this.ri._didMessage(a)
            }
        }
    };
    J.prototype.postMessage = function(a, b) {
        this.iframeObj.post(this.window_id + a + (b || ""), this.origin)
    };
    J.prototype.doSend = function(a) {
        this.postMessage("m", a)
    };
    J.enabled = function() {
        var a = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror");
        return ("function" == typeof c.postMessage || "object" == typeof c.postMessage) && !a
    };
    var ba, G = function(a, d) {
            parent !== c ? parent.postMessage(ba +
                a + (d || ""), "*") : b.log("Can't postMessage, no parent window.", a, d)
        },
        H = function() {};
    H.prototype._didClose = function(a, c) {
        G("t", b.closeFrame(a, c))
    };
    H.prototype._didMessage = function(a) {
        G("t", a)
    };
    H.prototype._doSend = function(a) {
        this._transport.doSend(a)
    };
    H.prototype._doCleanup = function() {
        this._transport.doCleanup()
    };
    b.parent_origin = void 0;
    l.bootstrap_iframe = function() {
        var d;
        ba = a.location.hash.slice(1);
        b.attachMessage(function(a) {
            if (a.source === parent && ("undefined" == typeof b.parent_origin && (b.parent_origin =
                    a.origin), a.origin === b.parent_origin)) {
                var e = a.data.slice(0, 8),
                    g = a.data.slice(8, 9);
                a = a.data.slice(9);
                if (e === ba) switch (g) {
                    case "s":
                        var m = JSON.parse(a),
                            e = m[0],
                            g = m[1];
                        a = m[2];
                        m = m[3];
                        e !== l.version && b.log('Incompatibile SockJS! Main site uses: "' + e + '", the iframe: "' + l.version + '".');
                        if (!b.flatUrl(a) || !b.flatUrl(m)) {
                            b.log("Only basic urls are supported in SockJS");
                            break
                        }
                        if (!b.isSameOriginUrl(a) || !b.isSameOriginUrl(m)) {
                            b.log("Can't connect to different domain from within an iframe. (" + JSON.stringify([c.location.href,
                                a, m
                            ]) + ")");
                            break
                        }
                        d = new H;
                        d._transport = new H[g](d, a, m);
                        break;
                    case "m":
                        d._doSend(a);
                        break;
                    case "c":
                        d && d._doCleanup(), d = null
                }
            }
        });
        G("s")
    };
    var X = function(a, c) {
        var d = this;
        b.delay(function() {
            d.doXhr(a, c)
        })
    };
    X.prototype = new g(["finish"]);
    X.prototype.doXhr = function(a, c) {
        var d = this,
            e = (new Date).getTime(),
            g = new c("GET", a + "/info"),
            l = b.delay(8E3, function() {
                g.ontimeout()
            });
        g.onfinish = function(a, b) {
            clearTimeout(l);
            l = null;
            if (200 === a) {
                var c = (new Date).getTime() - e,
                    f = JSON.parse(b);
                "object" != typeof f && (f = {});
                d.emit("finish",
                    f, c)
            } else d.emit("finish")
        };
        g.ontimeout = function() {
            g.close();
            d.emit("finish")
        }
    };
    var W = function(c) {
        var d = this,
            e = function() {
                var a = new J;
                a.protocol = "w-iframe-info-receiver";
                var b = function(b) {
                    "string" == typeof b && "m" === b.substr(0, 1) ? (b = JSON.parse(b.substr(1)), d.emit("finish", b[0], b[1])) : d.emit("finish");
                    a.doCleanup();
                    a = null
                };
                a.i_constructor({
                    _options: {},
                    _didClose: b,
                    _didMessage: b
                }, c, c)
            };
        a.body ? e() : b.attachEvent("load", e)
    };
    W.prototype = new g(["finish"]);
    var q = function() {
        var a = this;
        b.delay(function() {
            a.emit("finish", {}, 2E3)
        })
    };
    q.prototype = new g(["finish"]);
    var M = function(a) {
        if (b.isSameOriginUrl(a)) return new X(a, b.XHRLocalObject);
        switch (b.isXHRCorsCapable()) {
            case 1:
                return new X(a, b.XHRLocalObject);
            case 2:
                return new X(a, b.XDRObject);
            case 3:
                return new W(a);
            default:
                return new q
        }
    };
    (H["w-iframe-info-receiver"] = function(a, c, d) {
        (new X(d, b.XHRLocalObject)).onfinish = function(b, c) {
            a._didMessage("m" + JSON.stringify([b, c]));
            a._didClose()
        }
    }).prototype.doCleanup = function() {};
    g = l["iframe-eventsource"] = function() {
        this.protocol =
            "w-iframe-eventsource";
        this.i_constructor.apply(this, arguments)
    };
    g.prototype = new J;
    g.enabled = function() {
        return "EventSource" in c && J.enabled()
    };
    g.need_body = !0;
    g.roundTrips = 3;
    (H["w-iframe-eventsource"] = function(a, c) {
        this.run(a, c, "/eventsource", T, b.XHRLocalObject)
    }).prototype = new w;
    g = l["iframe-xhr-polling"] = function() {
        this.protocol = "w-iframe-xhr-polling";
        this.i_constructor.apply(this, arguments)
    };
    g.prototype = new J;
    g.enabled = function() {
        return c.XMLHttpRequest && J.enabled()
    };
    g.need_body = !0;
    g.roundTrips = 3;
    (H["w-iframe-xhr-polling"] = function(a, c) {
        this.run(a, c, "/xhr", Z, b.XHRLocalObject)
    }).prototype = new w;
    g = l["iframe-htmlfile"] = function() {
        this.protocol = "w-iframe-htmlfile";
        this.i_constructor.apply(this, arguments)
    };
    g.prototype = new J;
    g.enabled = function() {
        return J.enabled()
    };
    g.need_body = !0;
    g.roundTrips = 3;
    (H["w-iframe-htmlfile"] = function(a, c) {
        this.run(a, c, "/htmlfile", P, b.XHRLocalObject)
    }).prototype = new w;
    var D = function(a, b, c, d) {
        this.ri = a;
        this.Receiver = b;
        this.recv_url = c;
        this.AjaxObject = d;
        this._scheduleRecv()
    };
    D.prototype._scheduleRecv = function() {
        var a = this,
            b = a.poll = new a.Receiver(a.recv_url, a.AjaxObject);
        b.onmessage = function(b) {
            a.ri._didMessage(b.data)
        };
        b.onclose = function(c) {
            a.poll = b = b.onmessage = b.onclose = null;
            a.poll_is_closing || ("permanent" === c.reason ? a.ri._didClose(1006, "Polling error (" + c.reason + ")") : a._scheduleRecv())
        }
    };
    D.prototype.abort = function() {
        this.poll_is_closing = !0;
        this.poll && this.poll.abort()
    };
    var T = function(a) {
        var c = this,
            e = new EventSource(a);
        e.onmessage = function(a) {
            c.dispatchEvent(new d("message", {
                data: unescape(a.data)
            }))
        };
        c.es_close = e.onerror = function(a, f) {
            var g = f ? "user" : 2 !== e.readyState ? "network" : "permanent";
            c.es_close = e.onmessage = e.onerror = null;
            e.close();
            e = null;
            b.delay(200, function() {
                c.dispatchEvent(new d("close", {
                    reason: g
                }))
            })
        }
    };
    T.prototype = new e;
    T.prototype.abort = function() {
        this.es_close && this.es_close({}, !0)
    };
    var N, P = function(a) {
        var e = this;
        b.polluteGlobalNamespace();
        e.id = "a" + b.random_string(6, 26);
        a += (-1 === a.indexOf("?") ? "?" : "&") + "c=" + escape("_jp." + e.id);
        if (void 0 === N)
            if ("ActiveXObject" in
                c) try {
                N = !!new ActiveXObject("htmlfile")
            } catch (g) {} else N = !1;
        var l = N ? b.createHtmlfile : b.createIframe,
            m;
        c._jp[e.id] = {
            start: function() {
                m.loaded()
            },
            message: function(a) {
                e.dispatchEvent(new d("message", {
                    data: a
                }))
            },
            stop: function() {
                e.iframe_close({}, "network")
            }
        };
        e.iframe_close = function(a, b) {
            m.cleanup();
            e.iframe_close = m = null;
            delete c._jp[e.id];
            e.dispatchEvent(new d("close", {
                reason: b
            }))
        };
        m = l(a, function(a) {
            e.iframe_close({}, "permanent")
        })
    };
    P.prototype = new e;
    P.prototype.abort = function() {
        this.iframe_close && this.iframe_close({},
            "user")
    };
    var Z = function(a, b) {
        var c = this,
            e = 0;
        c.xo = new b("POST", a, null);
        c.xo.onchunk = function(a, b) {
            if (200 === a)
                for (;;) {
                    var f = b.slice(e),
                        g = f.indexOf("\n");
                    if (-1 === g) break;
                    e += g + 1;
                    f = f.slice(0, g);
                    c.dispatchEvent(new d("message", {
                        data: f
                    }))
                }
        };
        c.xo.onfinish = function(a, b) {
            c.xo.onchunk(a, b);
            c.xo = null;
            c.dispatchEvent(new d("close", {
                reason: 200 === a ? "network" : "permanent"
            }))
        }
    };
    return Z.prototype = new e, Z.prototype.abort = function() {
        this.xo && (this.xo.close(), this.dispatchEvent(new d("close", {
                reason: "user"
            })), this.xo =
            null)
    }, l.getUtils = function() {
        return b
    }, l.getIframeTransport = function() {
        return J
    }, l
}();
"_sockjs_onload" in window && setTimeout(_sockjs_onload, 1);
"function" == typeof define && define.amd && define("sockjs", [], function() {
    return SockJS
});
/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.

 @version 1.0.3
 @codingstandard ftlabs-jsv2
 @copyright The Financial Times Limited [All Rights Reserved]
 @license MIT License (see LICENSE.txt)
*/
function FastClick(a, c) {
    function b(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    var e;
    c = c || {};
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    this.targetElement = null;
    this.lastTouchIdentifier = this.touchStartY = this.touchStartX = 0;
    this.touchBoundary = c.touchBoundary || 10;
    this.layer = a;
    this.tapDelay = c.tapDelay || 200;
    if (!FastClick.notNeeded(a)) {
        for (var d = "onMouse onClick onTouchStart onTouchMove onTouchEnd onTouchCancel".split(" "), g = 0, m = d.length; g < m; g++) this[d[g]] = b(this[d[g]], this);
        deviceIsAndroid &&
            (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0));
        a.addEventListener("click", this.onClick, !0);
        a.addEventListener("touchstart", this.onTouchStart, !1);
        a.addEventListener("touchmove", this.onTouchMove, !1);
        a.addEventListener("touchend", this.onTouchEnd, !1);
        a.addEventListener("touchcancel", this.onTouchCancel, !1);
        Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
            var e = Node.prototype.removeEventListener;
            "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
        }, a.addEventListener = function(b, c, d) {
            var e = Node.prototype.addEventListener;
            "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
                a.propagationStopped || c(a)
            }), d) : e.call(a, b, c, d)
        });
        "function" === typeof a.onclick && (e = a.onclick, a.addEventListener("click", function(a) {
            e(a)
        }, !1), a.onclick = null)
    }
}
var deviceIsAndroid = 0 < navigator.userAgent.indexOf("Android"),
    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
    deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
    deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),
    deviceIsBlackBerry10 = 0 < navigator.userAgent.indexOf("BB10");
FastClick.prototype.needsClick = function(a) {
    switch (a.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (a.disabled) return !0;
            break;
        case "input":
            if (deviceIsIOS && "file" === a.type || a.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(a.className)
};
FastClick.prototype.needsFocus = function(a) {
    switch (a.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !deviceIsAndroid;
        case "input":
            switch (a.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !a.disabled && !a.readOnly;
        default:
            return /\bneedsfocus\b/.test(a.className)
    }
};
FastClick.prototype.sendClick = function(a, c) {
    var b, e;
    document.activeElement && document.activeElement !== a && document.activeElement.blur();
    e = c.changedTouches[0];
    b = document.createEvent("MouseEvents");
    b.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null);
    b.forwardedTouchEvent = !0;
    a.dispatchEvent(b)
};
FastClick.prototype.determineEventType = function(a) {
    return deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
};
FastClick.prototype.focus = function(a) {
    var c;
    deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (c = a.value.length, a.setSelectionRange(c, c)) : a.focus()
};
FastClick.prototype.updateScrollParent = function(a) {
    var c, b;
    c = a.fastClickScrollParent;
    if (!c || !c.contains(a)) {
        b = a;
        do {
            if (b.scrollHeight > b.offsetHeight) {
                c = b;
                a.fastClickScrollParent = b;
                break
            }
            b = b.parentElement
        } while (b)
    }
    c && (c.fastClickLastScrollTop = c.scrollTop)
};
FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
};
FastClick.prototype.onTouchStart = function(a) {
    var c, b, e;
    if (1 < a.targetTouches.length) return !0;
    c = this.getTargetElementFromEventTarget(a.target);
    b = a.targetTouches[0];
    if (deviceIsIOS) {
        e = window.getSelection();
        if (e.rangeCount && !e.isCollapsed) return !0;
        if (!deviceIsIOS4) {
            if (b.identifier && b.identifier === this.lastTouchIdentifier) return a.preventDefault(), !1;
            this.lastTouchIdentifier = b.identifier;
            this.updateScrollParent(c)
        }
    }
    this.trackingClick = !0;
    this.trackingClickStart = a.timeStamp;
    this.targetElement = c;
    this.touchStartX =
        b.pageX;
    this.touchStartY = b.pageY;
    a.timeStamp - this.lastClickTime < this.tapDelay && a.preventDefault();
    return !0
};
FastClick.prototype.touchHasMoved = function(a) {
    a = a.changedTouches[0];
    var c = this.touchBoundary;
    return Math.abs(a.pageX - this.touchStartX) > c || Math.abs(a.pageY - this.touchStartY) > c ? !0 : !1
};
FastClick.prototype.onTouchMove = function(a) {
    if (!this.trackingClick) return !0;
    if (this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) this.trackingClick = !1, this.targetElement = null;
    return !0
};
FastClick.prototype.findControl = function(a) {
    return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
};
FastClick.prototype.onTouchEnd = function(a) {
    var c, b, e = this.targetElement;
    if (!this.trackingClick) return !0;
    if (a.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0;
    this.cancelNextClick = !1;
    this.lastClickTime = a.timeStamp;
    c = this.trackingClickStart;
    this.trackingClick = !1;
    this.trackingClickStart = 0;
    deviceIsIOSWithBadTarget && (b = a.changedTouches[0], e = document.elementFromPoint(b.pageX - window.pageXOffset, b.pageY - window.pageYOffset) || e, e.fastClickScrollParent = this.targetElement.fastClickScrollParent);
    b = e.tagName.toLowerCase();
    if ("label" === b) {
        if (c = this.findControl(e)) {
            this.focus(e);
            if (deviceIsAndroid) return !1;
            e = c
        }
    } else if (this.needsFocus(e)) {
        if (100 < a.timeStamp - c || deviceIsIOS && window.top !== window && "input" === b) return this.targetElement = null, !1;
        this.focus(e);
        this.sendClick(e, a);
        deviceIsIOS && "select" === b || (this.targetElement = null, a.preventDefault());
        return !1
    }
    if (deviceIsIOS && !deviceIsIOS4 && (c = e.fastClickScrollParent) && c.fastClickLastScrollTop !== c.scrollTop) return !0;
    this.needsClick(e) || (a.preventDefault(),
        this.sendClick(e, a));
    return !1
};
FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = !1;
    this.targetElement = null
};
FastClick.prototype.onMouse = function(a) {
    return this.targetElement && !a.forwardedTouchEvent && a.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped = !0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0
};
FastClick.prototype.onClick = function(a) {
    if (this.trackingClick) return this.targetElement = null, this.trackingClick = !1, !0;
    if ("submit" === a.target.type && 0 === a.detail) return !0;
    a = this.onMouse(a);
    a || (this.targetElement = null);
    return a
};
FastClick.prototype.destroy = function() {
    var a = this.layer;
    deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0));
    a.removeEventListener("click", this.onClick, !0);
    a.removeEventListener("touchstart", this.onTouchStart, !1);
    a.removeEventListener("touchmove", this.onTouchMove, !1);
    a.removeEventListener("touchend", this.onTouchEnd, !1);
    a.removeEventListener("touchcancel", this.onTouchCancel, !1)
};
FastClick.notNeeded = function(a) {
    var c, b;
    if ("undefined" === typeof window.ontouchstart) return !0;
    if (b = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
        if (deviceIsAndroid) {
            if ((c = document.querySelector("meta[name=viewport]")) && (-1 !== c.content.indexOf("user-scalable=no") || 31 < b && document.documentElement.scrollWidth <= window.outerWidth)) return !0
        } else return !0;
    return deviceIsBlackBerry10 && (c = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), 10 <= c[1] && 3 <= c[2] && (c = document.querySelector("meta[name=viewport]")) &&
        (-1 !== c.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === a.style.msTouchAction ? !0 : !1
};
FastClick.attach = function(a, c) {
    return new FastClick(a, c)
};
"function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    return FastClick
}) : "undefined" !== typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
(function(a) {
    "function" === typeof define && define.amd ? define(["jquery", "jquery.ui.widget"], a) : a(window.jQuery)
})(function(a) {
    function c(b) {
        var c = "dragover" === b;
        return function(d) {
            d.dataTransfer = d.originalEvent && d.originalEvent.dataTransfer;
            var g = d.dataTransfer;
            g && -1 !== a.inArray("Files", g.types) && !1 !== this._trigger(b, a.Event(b, {
                delegatedEvent: d
            })) && (d.preventDefault(), c && (g.dropEffect = "copy"))
        }
    }
    a.support.fileInput = !(/(Android (1\.[0156]|2\.[01]))|(Windows Phone (OS 7|8\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1\.0|2\.[05]|3\.0))/.test(window.navigator.userAgent) ||
        a('<input type="file">').prop("disabled"));
    a.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader);
    a.support.xhrFormDataFileUpload = !!window.FormData;
    a.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice);
    a.widget("blueimp.fileupload", {
        options: {
            dropZone: a(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(b, c) {
                b = this.messages[b] || b.toString();
                c && a.each(c, function(a, c) {
                    b = b.replace("{" + a + "}", c)
                });
                return b
            },
            formData: function(a) {
                return a.serializeArray()
            },
            add: function(b,
                c) {
                if (b.isDefaultPrevented()) return !1;
                (c.autoUpload || !1 !== c.autoUpload && a(this).fileupload("option", "autoUpload")) && c.process().done(function() {
                    c.submit()
                })
            },
            processData: !1,
            contentType: !1,
            cache: !1
        },
        _specialOptions: ["fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport"],
        _blobSlice: a.support.blobSlice && function() {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments)
        },
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : (new Date).getTime();
            this.bitrate = this.loaded =
                0;
            this.getBitrate = function(a, c, d) {
                var g = a - this.timestamp;
                if (!this.bitrate || !d || g > d) this.bitrate = 1E3 / g * (c - this.loaded) * 8, this.loaded = c, this.timestamp = a;
                return this.bitrate
            }
        },
        _isXHRUpload: function(b) {
            return !b.forceIframeTransport && (!b.multipart && a.support.xhrFileUpload || a.support.xhrFormDataFileUpload)
        },
        _getFormData: function(b) {
            var c;
            return "function" === a.type(b.formData) ? b.formData(b.form) : a.isArray(b.formData) ? b.formData : "object" === a.type(b.formData) ? (c = [], a.each(b.formData, function(a, b) {
                c.push({
                    name: a,
                    value: b
                })
            }), c) : []
        },
        _getTotal: function(b) {
            var c = 0;
            a.each(b, function(a, b) {
                c += b.size || 1
            });
            return c
        },
        _initProgressObject: function(b) {
            var c = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            b._progress ? a.extend(b._progress, c) : b._progress = c
        },
        _initResponseObject: function(a) {
            var c;
            if (a._response)
                for (c in a._response) a._response.hasOwnProperty(c) && delete a._response[c];
            else a._response = {}
        },
        _onProgress: function(b, c) {
            if (b.lengthComputable) {
                var d = Date.now ? Date.now() : (new Date).getTime(),
                    g;
                c._time && c.progressInterval && d - c._time < c.progressInterval &&
                    b.loaded !== b.total || (c._time = d, g = Math.floor(b.loaded / b.total * (c.chunkSize || c._progress.total)) + (c.uploadedBytes || 0), this._progress.loaded += g - c._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(d, this._progress.loaded, c.bitrateInterval), c._progress.loaded = c.loaded = g, c._progress.bitrate = c.bitrate = c._bitrateTimer.getBitrate(d, g, c.bitrateInterval), this._trigger("progress", a.Event("progress", {
                        delegatedEvent: b
                    }), c), this._trigger("progressall", a.Event("progressall", {
                            delegatedEvent: b
                        }),
                        this._progress))
            }
        },
        _initProgressListener: function(b) {
            var c = this,
                d = b.xhr ? b.xhr() : a.ajaxSettings.xhr();
            d.upload && (a(d.upload).bind("progress", function(a) {
                var d = a.originalEvent;
                a.lengthComputable = d.lengthComputable;
                a.loaded = d.loaded;
                a.total = d.total;
                c._onProgress(a, b)
            }), b.xhr = function() {
                return d
            })
        },
        _isInstanceOf: function(a, c) {
            return Object.prototype.toString.call(c) === "[object " + a + "]"
        },
        _initXHRData: function(b) {
            var c = this,
                d, g = b.files[0],
                m = b.multipart || !a.support.xhrFileUpload,
                n = "array" === a.type(b.paramName) ?
                b.paramName[0] : b.paramName;
            b.headers = a.extend({}, b.headers);
            b.contentRange && (b.headers["Content-Range"] = b.contentRange);
            m && !b.blob && this._isInstanceOf("File", g) || (b.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(g.name) + '"');
            m ? a.support.xhrFormDataFileUpload && (b.postMessage ? (d = this._getFormData(b), b.blob ? d.push({
                name: n,
                value: b.blob
            }) : a.each(b.files, function(c, e) {
                d.push({
                    name: "array" === a.type(b.paramName) && b.paramName[c] || n,
                    value: e
                })
            })) : (c._isInstanceOf("FormData", b.formData) ? d =
                b.formData : (d = new FormData, a.each(this._getFormData(b), function(a, b) {
                    d.append(b.name, b.value)
                })), b.blob ? d.append(n, b.blob, g.name) : a.each(b.files, function(g, m) {
                    (c._isInstanceOf("File", m) || c._isInstanceOf("Blob", m)) && d.append("array" === a.type(b.paramName) && b.paramName[g] || n, m, m.uploadName || m.name)
                })), b.data = d) : (b.contentType = g.type || "application/octet-stream", b.data = b.blob || g);
            b.blob = null
        },
        _initIframeSettings: function(b) {
            var c = a("<a></a>").prop("href", b.url).prop("host");
            b.dataType = "iframe " + (b.dataType ||
                "");
            b.formData = this._getFormData(b);
            b.redirect && c && c !== location.host && b.formData.push({
                name: b.redirectParamName || "redirect",
                value: b.redirect
            })
        },
        _initDataSettings: function(a) {
            this._isXHRUpload(a) ? (this._chunkedUpload(a, !0) || (a.data || this._initXHRData(a), this._initProgressListener(a)), a.postMessage && (a.dataType = "postmessage " + (a.dataType || ""))) : this._initIframeSettings(a)
        },
        _getParamName: function(b) {
            var c = a(b.fileInput),
                d = b.paramName;
            d ? a.isArray(d) || (d = [d]) : (d = [], c.each(function() {
                for (var b = a(this),
                        c = b.prop("name") || "files[]", b = (b.prop("files") || [1]).length; b;) d.push(c), --b
            }), d.length || (d = [c.prop("name") || "files[]"]));
            return d
        },
        _initFormSettings: function(b) {
            b.form && b.form.length || (b.form = a(b.fileInput.prop("form")), b.form.length || (b.form = a(this.options.fileInput.prop("form"))));
            b.paramName = this._getParamName(b);
            b.url || (b.url = b.form.prop("action") || location.href);
            b.type = (b.type || "string" === a.type(b.form.prop("method")) && b.form.prop("method") || "").toUpperCase();
            "POST" !== b.type && "PUT" !== b.type &&
                "PATCH" !== b.type && (b.type = "POST");
            b.formAcceptCharset || (b.formAcceptCharset = b.form.attr("accept-charset"))
        },
        _getAJAXSettings: function(b) {
            b = a.extend({}, this.options, b);
            this._initFormSettings(b);
            this._initDataSettings(b);
            return b
        },
        _getDeferredState: function(a) {
            return a.state ? a.state() : a.isResolved() ? "resolved" : a.isRejected() ? "rejected" : "pending"
        },
        _enhancePromise: function(a) {
            a.success = a.done;
            a.error = a.fail;
            a.complete = a.always;
            return a
        },
        _getXHRPromise: function(b, c, d) {
            var g = a.Deferred(),
                m = g.promise();
            c = c || this.options.context || m;
            !0 === b ? g.resolveWith(c, d) : !1 === b && g.rejectWith(c, d);
            m.abort = g.promise;
            return this._enhancePromise(m)
        },
        _addConvenienceMethods: function(b, c) {
            var d = this,
                g = function(b) {
                    return a.Deferred().resolveWith(d, b).promise()
                };
            c.process = function(b, n) {
                if (b || n) c._processQueue = this._processQueue = (this._processQueue || g([this])).pipe(function() {
                    return c.errorThrown ? a.Deferred().rejectWith(d, [c]).promise() : g(arguments)
                }).pipe(b, n);
                return this._processQueue || g([this])
            };
            c.submit = function() {
                "pending" !==
                this.state() && (c.jqXHR = this.jqXHR = !1 !== d._trigger("submit", a.Event("submit", {
                    delegatedEvent: b
                }), this) && d._onSend(b, this));
                return this.jqXHR || d._getXHRPromise()
            };
            c.abort = function() {
                if (this.jqXHR) return this.jqXHR.abort();
                this.errorThrown = "abort";
                d._trigger("fail", null, this);
                return d._getXHRPromise(!1)
            };
            c.state = function() {
                if (this.jqXHR) return d._getDeferredState(this.jqXHR);
                if (this._processQueue) return d._getDeferredState(this._processQueue)
            };
            c.processing = function() {
                return !this.jqXHR && this._processQueue &&
                    "pending" === d._getDeferredState(this._processQueue)
            };
            c.progress = function() {
                return this._progress
            };
            c.response = function() {
                return this._response
            }
        },
        _getUploadedBytes: function(a) {
            return (a = (a = (a = a.getResponseHeader("Range")) && a.split("-")) && 1 < a.length && parseInt(a[1], 10)) && a + 1
        },
        _chunkedUpload: function(b, c) {
            b.uploadedBytes = b.uploadedBytes || 0;
            var d = this,
                g = b.files[0],
                m = g.size,
                n = b.uploadedBytes,
                p = b.maxChunkSize || m,
                r = this._blobSlice,
                v = a.Deferred(),
                u = v.promise(),
                B, y;
            if (!(this._isXHRUpload(b) && r && (n || p < m)) || b.data) return !1;
            if (c) return !0;
            if (n >= m) return g.error = b.i18n("uploadedBytes"), this._getXHRPromise(!1, b.context, [null, "error", g.error]);
            y = function() {
                var c = a.extend({}, b),
                    e = c._progress.loaded;
                c.blob = r.call(g, n, n + p, g.type);
                c.chunkSize = c.blob.size;
                c.contentRange = "bytes " + n + "-" + (n + c.chunkSize - 1) + "/" + m;
                d._initXHRData(c);
                d._initProgressListener(c);
                B = (!1 !== d._trigger("chunksend", null, c) && a.ajax(c) || d._getXHRPromise(!1, c.context)).done(function(g, l, p) {
                    n = d._getUploadedBytes(p) || n + c.chunkSize;
                    e + c.chunkSize - c._progress.loaded &&
                        d._onProgress(a.Event("progress", {
                            lengthComputable: !0,
                            loaded: n - c.uploadedBytes,
                            total: n - c.uploadedBytes
                        }), c);
                    b.uploadedBytes = c.uploadedBytes = n;
                    c.result = g;
                    c.textStatus = l;
                    c.jqXHR = p;
                    d._trigger("chunkdone", null, c);
                    d._trigger("chunkalways", null, c);
                    n < m ? y() : v.resolveWith(c.context, [g, l, p])
                }).fail(function(a, b, e) {
                    c.jqXHR = a;
                    c.textStatus = b;
                    c.errorThrown = e;
                    d._trigger("chunkfail", null, c);
                    d._trigger("chunkalways", null, c);
                    v.rejectWith(c.context, [a, b, e])
                })
            };
            this._enhancePromise(u);
            u.abort = function() {
                return B.abort()
            };
            y();
            return u
        },
        _beforeSend: function(a, c) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer, this._progress.loaded = this._progress.total = 0, this._progress.bitrate = 0);
            this._initResponseObject(c);
            this._initProgressObject(c);
            c._progress.loaded = c.loaded = c.uploadedBytes || 0;
            c._progress.total = c.total = this._getTotal(c.files) || 1;
            c._progress.bitrate = c.bitrate = 0;
            this._active += 1;
            this._progress.loaded += c.loaded;
            this._progress.total += c.total
        },
        _onDone: function(b, c, d, g) {
            var m = g._progress.total,
                n = g._response;
            g._progress.loaded < m && this._onProgress(a.Event("progress", {
                lengthComputable: !0,
                loaded: m,
                total: m
            }), g);
            n.result = g.result = b;
            n.textStatus = g.textStatus = c;
            n.jqXHR = g.jqXHR = d;
            this._trigger("done", null, g)
        },
        _onFail: function(a, c, d, g) {
            var m = g._response;
            g.recalculateProgress && (this._progress.loaded -= g._progress.loaded, this._progress.total -= g._progress.total);
            m.jqXHR = g.jqXHR = a;
            m.textStatus = g.textStatus = c;
            m.errorThrown = g.errorThrown = d;
            this._trigger("fail", null, g)
        },
        _onAlways: function(a, c, d, g) {
            this._trigger("always",
                null, g)
        },
        _onSend: function(b, c) {
            c.submit || this._addConvenienceMethods(b, c);
            var d = this,
                g, m, n, p, r = d._getAJAXSettings(c),
                v = function() {
                    d._sending += 1;
                    r._bitrateTimer = new d._BitrateTimer;
                    return g = g || ((m || !1 === d._trigger("send", a.Event("send", {
                        delegatedEvent: b
                    }), r)) && d._getXHRPromise(!1, r.context, m) || d._chunkedUpload(r) || a.ajax(r)).done(function(a, b, c) {
                        d._onDone(a, b, c, r)
                    }).fail(function(a, b, c) {
                        d._onFail(a, b, c, r)
                    }).always(function(a, b, c) {
                        d._onAlways(a, b, c, r);
                        --d._sending;
                        --d._active;
                        if (r.limitConcurrentUploads &&
                            r.limitConcurrentUploads > d._sending)
                            for (a = d._slots.shift(); a;) {
                                if ("pending" === d._getDeferredState(a)) {
                                    a.resolve();
                                    break
                                }
                                a = d._slots.shift()
                            }
                        0 === d._active && d._trigger("stop")
                    })
                };
            this._beforeSend(b, r);
            return this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (1 < this.options.limitConcurrentUploads ? (n = a.Deferred(), this._slots.push(n), p = n.pipe(v)) : p = this._sequence = this._sequence.pipe(v, v), p.abort = function() {
                m = [void 0, "abort", "abort"];
                return g ? g.abort() : (n && n.rejectWith(r.context, m), v())
            }, this._enhancePromise(p)) : v()
        },
        _onAdd: function(b, c) {
            var d = this,
                g = !0,
                m = a.extend({}, this.options, c),
                n = c.files,
                p = n.length,
                r = m.limitMultiFileUploads,
                v = m.limitMultiFileUploadSize,
                u = m.limitMultiFileUploadSizeOverhead,
                B = 0,
                y = this._getParamName(m),
                C, O, w = 0;
            !v || p && void 0 !== n[0].size || (v = void 0);
            if ((m.singleFileUploads || r || v) && this._isXHRUpload(m))
                if (m.singleFileUploads || v || !r)
                    if (!m.singleFileUploads && v)
                        for (O = [], C = [], m = 0; m < p; m += 1) {
                            if (B += n[m].size + u, m + 1 ===
                                p || B + n[m + 1].size + u > v || r && m + 1 - w >= r) O.push(n.slice(w, m + 1)), B = y.slice(w, m + 1), B.length || (B = y), C.push(B), w = m + 1, B = 0
                        } else C = y;
                    else
                        for (O = [], C = [], m = 0; m < p; m += r) O.push(n.slice(m, m + r)), B = y.slice(m, m + r), B.length || (B = y), C.push(B);
            else O = [n], C = [y];
            c.originalFiles = n;
            a.each(O || n, function(l, m) {
                var n = a.extend({}, c);
                n.files = O ? m : [m];
                n.paramName = C[l];
                d._initResponseObject(n);
                d._initProgressObject(n);
                d._addConvenienceMethods(b, n);
                return g = d._trigger("add", a.Event("add", {
                    delegatedEvent: b
                }), n)
            });
            return g
        },
        _replaceFileInput: function(b) {
            var c =
                b.fileInput,
                d = c.clone(!0);
            b.fileInputClone = d;
            a("<form></form>").append(d)[0].reset();
            c.after(d).detach();
            a.cleanData(c.unbind("remove"));
            this.options.fileInput = this.options.fileInput.map(function(a, b) {
                return b === c[0] ? d[0] : b
            });
            c[0] === this.element[0] && (this.element = d)
        },
        _handleFileTreeEntry: function(b, c) {
            var d = this,
                g = a.Deferred(),
                m = function(a) {
                    a && !a.entry && (a.entry = b);
                    g.resolve([a])
                },
                n = function(a) {
                    d._handleFileTreeEntries(a, c + b.name + "/").done(function(a) {
                        g.resolve(a)
                    }).fail(m)
                },
                p = function() {
                    r.readEntries(function(a) {
                        a.length ?
                            (v = v.concat(a), p()) : n(v)
                    }, m)
                },
                r, v = [];
            c = c || "";
            b.isFile ? b._file ? (b._file.relativePath = c, g.resolve(b._file)) : b.file(function(a) {
                a.relativePath = c;
                g.resolve(a)
            }, m) : b.isDirectory ? (r = b.createReader(), p()) : g.resolve([]);
            return g.promise()
        },
        _handleFileTreeEntries: function(b, c) {
            var d = this;
            return a.when.apply(a, a.map(b, function(a) {
                return d._handleFileTreeEntry(a, c)
            })).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            })
        },
        _getDroppedFiles: function(b) {
            b = b || {};
            var c = b.items;
            return c && c.length && (c[0].webkitGetAsEntry ||
                c[0].getAsEntry) ? this._handleFileTreeEntries(a.map(c, function(a) {
                var b;
                if (a.webkitGetAsEntry) {
                    if (b = a.webkitGetAsEntry()) b._file = a.getAsFile();
                    return b
                }
                return a.getAsEntry()
            })) : a.Deferred().resolve(a.makeArray(b.files)).promise()
        },
        _getSingleFileInputFiles: function(b) {
            b = a(b);
            var c = b.prop("webkitEntries") || b.prop("entries");
            if (c && c.length) return this._handleFileTreeEntries(c);
            c = a.makeArray(b.prop("files"));
            if (c.length) void 0 === c[0].name && c[0].fileName && a.each(c, function(a, b) {
                b.name = b.fileName;
                b.size =
                    b.fileSize
            });
            else {
                b = b.prop("value");
                if (!b) return a.Deferred().resolve([]).promise();
                c = [{
                    name: b.replace(/^.*\\/, "")
                }]
            }
            return a.Deferred().resolve(c).promise()
        },
        _getFileInputFiles: function(b) {
            return b instanceof a && 1 !== b.length ? a.when.apply(a, a.map(b, this._getSingleFileInputFiles)).pipe(function() {
                return Array.prototype.concat.apply([], arguments)
            }) : this._getSingleFileInputFiles(b)
        },
        _onChange: function(b) {
            var c = this,
                d = {
                    fileInput: a(b.target),
                    form: a(b.target.form)
                };
            this._getFileInputFiles(d.fileInput).always(function(g) {
                d.files =
                    g;
                c.options.replaceFileInput && c._replaceFileInput(d);
                !1 !== c._trigger("change", a.Event("change", {
                    delegatedEvent: b
                }), d) && c._onAdd(b, d)
            })
        },
        _onPaste: function(b) {
            var c = b.originalEvent && b.originalEvent.clipboardData && b.originalEvent.clipboardData.items,
                d = {
                    files: []
                };
            c && c.length && (a.each(c, function(a, b) {
                var c = b.getAsFile && b.getAsFile();
                c && d.files.push(c)
            }), !1 !== this._trigger("paste", a.Event("paste", {
                delegatedEvent: b
            }), d) && this._onAdd(b, d))
        },
        _onDrop: function(b) {
            b.dataTransfer = b.originalEvent && b.originalEvent.dataTransfer;
            var c = this,
                d = b.dataTransfer,
                g = {};
            d && d.files && d.files.length && (b.preventDefault(), this._getDroppedFiles(d).always(function(d) {
                g.files = d;
                !1 !== c._trigger("drop", a.Event("drop", {
                    delegatedEvent: b
                }), g) && c._onAdd(b, g)
            }))
        },
        _onDragOver: c("dragover"),
        _onDragEnter: c("dragenter"),
        _onDragLeave: c("dragleave"),
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            }));
            a.support.fileInput && this._on(this.options.fileInput, {
                change: this._onChange
            })
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop");
            this._off(this.options.pasteZone, "paste");
            this._off(this.options.fileInput, "change")
        },
        _setOption: function(b, c) {
            var d = -1 !== a.inArray(b, this._specialOptions);
            d && this._destroyEventHandlers();
            this._super(b, c);
            d && (this._initSpecialOptions(), this._initEventHandlers())
        },
        _initSpecialOptions: function() {
            var b =
                this.options;
            void 0 === b.fileInput ? b.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : b.fileInput instanceof a || (b.fileInput = a(b.fileInput));
            b.dropZone instanceof a || (b.dropZone = a(b.dropZone));
            b.pasteZone instanceof a || (b.pasteZone = a(b.pasteZone))
        },
        _getRegExp: function(a) {
            a = a.split("/");
            var c = a.pop();
            a.shift();
            return new RegExp(a.join("/"), c)
        },
        _isRegExpOption: function(b, c) {
            return "url" !== b && "string" === a.type(c) && /^\/.*\/[igm]{0,3}$/.test(c)
        },
        _initDataAttributes: function() {
            var b =
                this,
                c = this.options,
                d = a(this.element[0].cloneNode(!1)),
                g = d.data();
            d.remove();
            a.each(g, function(a, g) {
                var p = "data-" + a.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                d.attr(p) && (b._isRegExpOption(a, g) && (g = b._getRegExp(g)), c[a] = g)
            })
        },
        _create: function() {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(!0);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers()
        },
        active: function() {
            return this._active
        },
        progress: function() {
            return this._progress
        },
        add: function(b) {
            var c = this;
            b && !this.options.disabled && (b.fileInput && !b.files ? this._getFileInputFiles(b.fileInput).always(function(a) {
                b.files = a;
                c._onAdd(null, b)
            }) : (b.files = a.makeArray(b.files), this._onAdd(null, b)))
        },
        send: function(b) {
            if (b && !this.options.disabled) {
                if (b.fileInput && !b.files) {
                    var c = this,
                        d = a.Deferred(),
                        g = d.promise(),
                        m, n;
                    g.abort = function() {
                        n = !0;
                        if (m) return m.abort();
                        d.reject(null, "abort", "abort");
                        return g
                    };
                    this._getFileInputFiles(b.fileInput).always(function(a) {
                        n || (a.length ? (b.files = a, m =
                            c._onSend(null, b), m.then(function(a, b, c) {
                                d.resolve(a, b, c)
                            }, function(a, b, c) {
                                d.reject(a, b, c)
                            })) : d.reject())
                    });
                    return this._enhancePromise(g)
                }
                b.files = a.makeArray(b.files);
                if (b.files.length) return this._onSend(null, b)
            }
            return this._getXHRPromise(!1, b && b.context)
        }
    })
});
"function" !== typeof Object.create && (Object.create = function(a) {
    function c() {}
    c.prototype = a;
    return new c
});
var NotyObject = {
    init: function(a) {
        this.options = $.extend({}, $.noty.defaults, a);
        this.options.layout = this.options.custom ? $.noty.layouts.inline : $.noty.layouts[this.options.layout];
        $.noty.themes[this.options.theme] ? this.options.theme = $.noty.themes[this.options.theme] : a.themeClassName = this.options.theme;
        delete a.layout;
        delete a.theme;
        this.options = $.extend({}, this.options, this.options.layout.options);
        this.options.id = "noty_" + (new Date).getTime() * Math.floor(1E6 * Math.random());
        this.options = $.extend({}, this.options,
            a);
        this._build();
        return this
    },
    _build: function() {
        var a = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
        a.append(this.options.template).find(".noty_text").html(this.options.text);
        this.$bar = null !== this.options.layout.parent.object ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append(a) : a;
        this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type);
        if (this.options.buttons) {
            this.options.closeWith = [];
            this.options.timeout = !1;
            a = $("<div/>").addClass("noty_buttons");
            null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(a) : this.$bar.append(a);
            var c = this;
            $.each(this.options.buttons, function(a, e) {
                var d = $("<button/>").addClass(e.addClass ? e.addClass : "gray").html(e.text).attr("id", e.id ? e.id : "button-" + a).appendTo(c.$bar.find(".noty_buttons")).on("click", function() {
                    $.isFunction(e.onClick) && e.onClick.call(d, c)
                })
            })
        }
        this.$message = this.$bar.find(".noty_message");
        this.$closeButton = this.$bar.find(".noty_close");
        this.$buttons = this.$bar.find(".noty_buttons");
        $.noty.store[this.options.id] = this
    },
    show: function() {
        var a = this;
        a.options.custom ? a.options.custom.find(a.options.layout.container.selector).append(a.$bar) : $(a.options.layout.container.selector).append(a.$bar);
        a.options.theme && a.options.theme.style && a.options.theme.style.apply(a);
        "function" === $.type(a.options.layout.css) ? this.options.layout.css.apply(a.$bar) : a.$bar.css(this.options.layout.css || {});
        a.$bar.addClass(a.options.layout.addClass);
        a.options.layout.container.style.apply($(a.options.layout.container.selector));
        a.showing = !0;
        a.options.theme && a.options.theme.style && a.options.theme.callback.onShow.apply(this);
        if (-1 < $.inArray("click", a.options.closeWith)) a.$bar.css("cursor", "pointer").one("click", function(c) {
            a.stopPropagation(c);
            a.options.callback.onCloseClick && a.options.callback.onCloseClick.apply(a);
            a.close()
        });
        if (-1 < $.inArray("hover", a.options.closeWith)) a.$bar.one("mouseenter", function() {
            a.close()
        });
        if (-1 < $.inArray("button", a.options.closeWith)) a.$closeButton.one("click", function(c) {
            a.stopPropagation(c);
            a.close()
        }); - 1 == $.inArray("button", a.options.closeWith) && a.$closeButton.remove();
        a.options.callback.onShow && a.options.callback.onShow.apply(a);
        "string" == typeof a.options.animation.open ? (a.$bar.css("height", a.$bar.innerHeight()), a.$bar.show().addClass(a.options.animation.open).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            a.options.callback.afterShow && a.options.callback.afterShow.apply(a);
            a.showing = !1;
            a.shown = !0
        })) : a.$bar.animate(a.options.animation.open,
            a.options.animation.speed, a.options.animation.easing,
            function() {
                a.options.callback.afterShow && a.options.callback.afterShow.apply(a);
                a.showing = !1;
                a.shown = !0
            });
        a.options.timeout && a.$bar.delay(a.options.timeout).promise().done(function() {
            a.close()
        });
        return this
    },
    close: function() {
        if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
            var a = this;
            if (this.showing) a.$bar.queue(function() {
                a.close.apply(a)
            });
            else if (this.$bar.dequeue(), this.shown || this.showing)
                if (a.$bar.addClass("i-am-closing-now"),
                    a.options.callback.onClose && a.options.callback.onClose.apply(a), "string" == typeof a.options.animation.close) a.$bar.addClass(a.options.animation.close).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    a.options.callback.afterClose && a.options.callback.afterClose.apply(a);
                    a.closeCleanUp()
                });
                else a.$bar.clearQueue().stop().animate(a.options.animation.close, a.options.animation.speed, a.options.animation.easing, function() {
                    a.options.callback.afterClose && a.options.callback.afterClose.apply(a)
                }).promise().done(function() {
                    a.closeCleanUp()
                });
            else {
                var c = [];
                $.each($.noty.queue, function(b, e) {
                    e.options.id != a.options.id && c.push(e)
                });
                $.noty.queue = c
            }
        }
    },
    closeCleanUp: function() {
        var a = this;
        a.options.modal && ($.notyRenderer.setModalCount(-1), 0 == $.notyRenderer.getModalCount() && $(".noty_modal").fadeOut("fast", function() {
            $(this).remove()
        }));
        $.notyRenderer.setLayoutCountFor(a, -1);
        0 == $.notyRenderer.getLayoutCountFor(a) && $(a.options.layout.container.selector).remove();
        "undefined" !== typeof a.$bar && null !== a.$bar && ("string" == typeof a.options.animation.close ?
            (a.$bar.css("transition", "all 100ms ease").css("border", 0).css("margin", 0).height(0), a.$bar.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                a.$bar.remove();
                a.$bar = null;
                a.closed = !0;
                a.options.theme.callback && a.options.theme.callback.onClose && a.options.theme.callback.onClose.apply(a)
            })) : (a.$bar.remove(), a.$bar = null, a.closed = !0));
        delete $.noty.store[a.options.id];
        a.options.theme.callback && a.options.theme.callback.onClose && a.options.theme.callback.onClose.apply(a);
        a.options.dismissQueue ||
            ($.noty.ontap = !0, $.notyRenderer.render());
        0 < a.options.maxVisible && a.options.dismissQueue && $.notyRenderer.render()
    },
    setText: function(a) {
        this.closed || (this.options.text = a, this.$bar.find(".noty_text").html(a));
        return this
    },
    setType: function(a) {
        this.closed || (this.options.type = a, this.options.theme.style.apply(this), this.options.theme.callback.onShow.apply(this));
        return this
    },
    setTimeout: function(a) {
        if (!this.closed) {
            var c = this;
            this.options.timeout = a;
            c.$bar.delay(c.options.timeout).promise().done(function() {
                c.close()
            })
        }
        return this
    },
    stopPropagation: function(a) {
        a = a || window.event;
        "undefined" !== typeof a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
    },
    closed: !1,
    showing: !1,
    shown: !1
};
$.notyRenderer = {};
$.notyRenderer.init = function(a) {
    a = Object.create(NotyObject).init(a);
    a.options.killer && $.noty.closeAll();
    a.options.force ? $.noty.queue.unshift(a) : $.noty.queue.push(a);
    $.notyRenderer.render();
    return "object" == $.noty.returns ? a : a.options.id
};
$.notyRenderer.render = function() {
    var a = $.noty.queue[0];
    "object" === $.type(a) ? a.options.dismissQueue ? 0 < a.options.maxVisible ? $(a.options.layout.container.selector + " li").length < a.options.maxVisible && $.notyRenderer.show($.noty.queue.shift()) : $.notyRenderer.show($.noty.queue.shift()) : $.noty.ontap && ($.notyRenderer.show($.noty.queue.shift()), $.noty.ontap = !1) : $.noty.ontap = !0
};
$.notyRenderer.show = function(a) {
    a.options.modal && ($.notyRenderer.createModalFor(a), $.notyRenderer.setModalCount(1));
    a.options.custom ? 0 == a.options.custom.find(a.options.layout.container.selector).length ? a.options.custom.append($(a.options.layout.container.object).addClass("i-am-new")) : a.options.custom.find(a.options.layout.container.selector).removeClass("i-am-new") : 0 == $(a.options.layout.container.selector).length ? $("body").append($(a.options.layout.container.object).addClass("i-am-new")) : $(a.options.layout.container.selector).removeClass("i-am-new");
    $.notyRenderer.setLayoutCountFor(a, 1);
    a.show()
};
$.notyRenderer.createModalFor = function(a) {
    if (0 == $(".noty_modal").length) {
        var c = $("<div/>").addClass("noty_modal").addClass(a.options.theme).data("noty_modal_count", 0);
        a.options.theme.modal && a.options.theme.modal.css && c.css(a.options.theme.modal.css);
        c.prependTo($("body")).fadeIn("fast");
        if (-1 < $.inArray("backdrop", a.options.closeWith)) c.on("click", function(a) {
            $.noty.closeAll()
        })
    }
};
$.notyRenderer.getLayoutCountFor = function(a) {
    return $(a.options.layout.container.selector).data("noty_layout_count") || 0
};
$.notyRenderer.setLayoutCountFor = function(a, c) {
    return $(a.options.layout.container.selector).data("noty_layout_count", $.notyRenderer.getLayoutCountFor(a) + c)
};
$.notyRenderer.getModalCount = function() {
    return $(".noty_modal").data("noty_modal_count") || 0
};
$.notyRenderer.setModalCount = function(a) {
    return $(".noty_modal").data("noty_modal_count", $.notyRenderer.getModalCount() + a)
};
$.fn.noty = function(a) {
    a.custom = $(this);
    return $.notyRenderer.init(a)
};
$.noty = {};
$.noty.queue = [];
$.noty.ontap = !0;
$.noty.layouts = {};
$.noty.themes = {};
$.noty.returns = "object";
$.noty.store = {};
$.noty.get = function(a) {
    return $.noty.store.hasOwnProperty(a) ? $.noty.store[a] : !1
};
$.noty.close = function(a) {
    return $.noty.get(a) ? $.noty.get(a).close() : !1
};
$.noty.setText = function(a, c) {
    return $.noty.get(a) ? $.noty.get(a).setText(c) : !1
};
$.noty.setType = function(a, c) {
    return $.noty.get(a) ? $.noty.get(a).setType(c) : !1
};
$.noty.clearQueue = function() {
    $.noty.queue = []
};
$.noty.closeAll = function() {
    $.noty.clearQueue();
    $.each($.noty.store, function(a, c) {
        c.close()
    })
};
var windowAlert = window.alert;
$.noty.consumeAlert = function(a) {
    window.alert = function(c) {
        a ? a.text = c : a = {
            text: c
        };
        $.notyRenderer.init(a)
    }
};
$.noty.stopConsumeAlert = function() {
    window.alert = windowAlert
};
$.noty.defaults = {
    layout: "top",
    theme: "defaultTheme",
    type: "alert",
    text: "",
    dismissQueue: !0,
    template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
    animation: {
        open: {
            height: "toggle"
        },
        close: {
            height: "toggle"
        },
        easing: "swing",
        speed: 500
    },
    timeout: !1,
    force: !1,
    modal: !1,
    maxVisible: 5,
    killer: !1,
    closeWith: ["click"],
    callback: {
        onShow: function() {},
        afterShow: function() {},
        onClose: function() {},
        afterClose: function() {},
        onCloseClick: function() {}
    },
    buttons: !1
};
$(window).on("resize", function() {
    $.each($.noty.layouts, function(a, c) {
        c.container.style.apply($(c.container.selector))
    })
});
window.noty = function(a) {
    return jQuery.notyRenderer.init(a)
};
$.noty.layouts.top = {
    name: "top",
    options: {},
    container: {
        object: '<ul id="noty_top_layout_container" />',
        selector: "ul#noty_top_layout_container",
        style: function() {
            $(this).css({
                top: 0,
                left: "5%",
                position: "fixed",
                width: "90%",
                height: "auto",
                margin: 0,
                padding: 0,
                listStyleType: "none",
                zIndex: 9999999
            })
        }
    },
    parent: {
        object: "<li />",
        selector: "li",
        css: {}
    },
    css: {
        display: "none"
    },
    addClass: ""
};
(function(a) {
    function c(a) {
        this.init(a)
    }
    c.prototype = {
        value: 0,
        size: 100,
        startAngle: -Math.PI,
        thickness: "auto",
        fill: {
            gradient: ["#3aeabb", "#fdd250"]
        },
        emptyFill: "rgba(0, 0, 0, .1)",
        animation: {
            duration: 1200,
            easing: "circleProgressEasing"
        },
        animationStartValue: 0,
        reverse: !1,
        lineCap: "butt",
        constructor: c,
        el: null,
        canvas: null,
        ctx: null,
        radius: 0,
        arcFill: null,
        lastFrameValue: 0,
        init: function(b) {
            a.extend(this, b);
            this.radius = this.size / 2;
            this.initWidget();
            this.initFill();
            this.draw()
        },
        initWidget: function() {
            var b = this.canvas =
                this.canvas || a("<canvas>").prependTo(this.el)[0];
            b.width = this.size;
            b.height = this.size;
            this.ctx = b.getContext("2d")
        },
        initFill: function() {
            function b() {
                var b = a("<canvas>")[0];
                b.width = c.size;
                b.height = c.size;
                b.getContext("2d").drawImage(u, 0, 0, m, m);
                c.arcFill = c.ctx.createPattern(b, "no-repeat");
                c.drawFrame(c.lastFrameValue)
            }
            var c = this,
                d = this.fill,
                g = this.ctx,
                m = this.size;
            if (!d) throw Error("The fill is not specified!");
            d.color && (this.arcFill = d.color);
            if (d.gradient) {
                var n = d.gradient;
                if (1 == n.length) this.arcFill =
                    n[0];
                else if (1 < n.length) {
                    for (var p = d.gradientAngle || 0, p = d.gradientDirection || [m / 2 * (1 - Math.cos(p)), m / 2 * (1 + Math.sin(p)), m / 2 * (1 + Math.cos(p)), m / 2 * (1 - Math.sin(p))], g = g.createLinearGradient.apply(g, p), p = 0; p < n.length; p++) {
                        var r = n[p],
                            v = p / (n.length - 1);
                        a.isArray(r) && (v = r[1], r = r[0]);
                        g.addColorStop(v, r)
                    }
                    this.arcFill = g
                }
            }
            if (d.image) {
                var u;
                d.image instanceof Image ? u = d.image : (u = new Image, u.src = d.image);
                u.complete ? b() : u.onload = b
            }
        },
        draw: function() {
            this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value)
        },
        drawFrame: function(a) {
            this.lastFrameValue = a;
            this.ctx.clearRect(0, 0, this.size, this.size);
            this.drawEmptyArc(a);
            this.drawArc(a)
        },
        drawArc: function(a) {
            var c = this.ctx,
                d = this.radius,
                g = this.getThickness(),
                m = this.startAngle;
            c.save();
            c.beginPath();
            this.reverse ? c.arc(d, d, d - g / 2, m - 2 * Math.PI * a, m) : c.arc(d, d, d - g / 2, m, m + 2 * Math.PI * a);
            c.lineWidth = g;
            c.lineCap = this.lineCap;
            c.strokeStyle = this.arcFill;
            c.stroke();
            c.restore()
        },
        drawEmptyArc: function(a) {
            var c = this.ctx,
                d = this.radius,
                g = this.getThickness(),
                m = this.startAngle;
            1 >
                a && (c.save(), c.beginPath(), 0 >= a ? c.arc(d, d, d - g / 2, 0, 2 * Math.PI) : this.reverse ? c.arc(d, d, d - g / 2, m, m - 2 * Math.PI * a) : c.arc(d, d, d - g / 2, m + 2 * Math.PI * a, m), c.lineWidth = g, c.strokeStyle = this.emptyFill, c.stroke(), c.restore())
        },
        drawAnimated: function(b) {
            var c = this,
                d = this.el;
            d.trigger("circle-animation-start");
            a(this.canvas).stop(!0, !0).css({
                animationProgress: 0
            }).animate({
                animationProgress: 1
            }, a.extend({}, this.animation, {
                step: function(a) {
                    var m = c.animationStartValue * (1 - a) + b * a;
                    c.drawFrame(m);
                    d.trigger("circle-animation-progress", [a, m])
                },
                complete: function() {
                    d.trigger("circle-animation-end")
                }
            }))
        },
        getThickness: function() {
            return a.isNumeric(this.thickness) ? this.thickness : this.size / 14
        }
    };
    a.circleProgress = {
        defaults: c.prototype
    };
    a.easing.circleProgressEasing = function(a, c, d, g, m) {
        return 1 > (c /= m / 2) ? g / 2 * c * c * c + d : g / 2 * ((c -= 2) * c * c + 2) + d
    };
    a.fn.circleProgress = function(b) {
        if ("widget" == b) {
            var e = this.data("circle-progress");
            return e && e.canvas
        }
        return this.each(function() {
            var d = a(this),
                e = d.data("circle-progress"),
                m = a.isPlainObject(b) ? b : {};
            e ? e.init(m) :
                (m.el = d, e = new c(m), d.data("circle-progress", e))
        })
    }
})(jQuery);
var SocketData = Backbone.Model.extend({
    connectionView: null,
    _socket: null,
    _autoReconnectTrial: 0,
    _nextReconnectAttempt: null,
    _autoReconnectTimeouts: [1, 1, 2, 3, 5, 8, 13, 20, 40, 100],
    currentState: 0,
    loggedUser: LOGGED_USER,
    defaults: {
        online: !1,
        printing: !1,
        paused: !1,
        camera: !1,
        printing_progress: {
            percent: 0,
            time_left: 0
        },
        temps: {
            bed: {
                actual: 0,
                target: 0
            },
            extruder: {
                actual: 0,
                target: 0
            }
        },
        astroprint: {
            status: null
        },
        printer: {
            status: null
        },
        print_capture: null
    },
    initialize: function() {
        this.set("printing", initial_states.printing);
        this.set("paused",
            initial_states.paused);
        this.set("online", initial_states.online);
        this.set("print_capture", initial_states.print_capture)
    },
    connect: function() {
        this.connectionView.setServerConnection("blink-animation");
        var a = {};
        SOCKJS_DEBUG && (a.debug = !0);
        this._socket = new SockJS(SOCKJS_URI, void 0, a);
        this._socket.onopen = _.bind(this._onConnect, this);
        this._socket.onclose = _.bind(this._onClose, this);
        this._socket.onmessage = _.bind(this._onMessage, this)
    },
    reconnect: function() {
        this._socket.close();
        delete this._socket;
        this.connect()
    },
    _onConnect: function() {
        this._nextReconnectAttempt && (clearTimeout(this._nextReconnectAttempt), this._nextReconnectAttempt = null);
        this._autoReconnectTrial = 0;
        this.connectionView.setServerConnection("connected")
    },
    _onClose: function(a) {
        1E3 != a.code && (this.connectionView.setServerConnection("failed"), this.connectionView.setPrinterConnection("failed"), this.connectionView.setAstroprintConnection("failed"), this._currentState = 0, this._autoReconnectTrial < this._autoReconnectTimeouts.length ? (a = this._autoReconnectTimeouts[this._autoReconnectTrial],
            console.log("Reconnect trial #" + this._autoReconnectTrial + ", waiting " + a + "s"), this._nextReconnectAttempt = setTimeout(_.bind(this.reconnect, this), 1E3 * a), this._autoReconnectTrial++) : this._onReconnectFailed())
    },
    _onReconnectFailed: function() {
        console.error("reconnect failed")
    },
    _onMessage: function(a) {
        for (var c in a.data) {
            var b = a.data[c];
            switch (c) {
                case "connected":
                    UI_API_KEY = b.apikey;
                    $.ajaxSetup({
                        headers: {
                            "X-Api-Key": UI_API_KEY
                        }
                    });
                    this.connectionView.connect();
                    break;
                case "current":
                    var e = b.state.flags;
                    if (b.temps.length) {
                        var d =
                            b.temps[b.temps.length - 1];
                        this.set("temps", {
                            bed: d.bed,
                            extruder: d.tool0
                        })
                    }
                    if (b.state && b.state.text != this.currentState) {
                        this.currentState = b.state.text;
                        var d = "blink-animation",
                            g = "connecting";
                        e.error ? g = d = "failed" : e.operational && (g = d = "connected");
                        this.connectionView.setPrinterConnection(d);
                        this.set("printer", {
                            status: g
                        })
                    }
                    e.paused || this.set("printing", e.printing);
                    this.set("paused", e.paused);
                    this.set("camera", e.camera);
                    e.printing && (d = b.progress, this.set("printing_progress", {
                        filename: b.job.file.name,
                        rendered_image: b.job.file.rendered_image,
                        layer_count: b.job.layerCount,
                        current_layer: d.currentLayer,
                        percent: d.completion ? d.completion.toFixed(1) : 0,
                        time_left: b.progress.printTimeLeft,
                        time_elapsed: d.printTime ? d.printTime : 0,
                        heating_up: e.heatingUp
                    }));
                    break;
                case "event":
                    e = b.type;
                    b = b.payload;
                    switch (e) {
                        case "MetadataAnalysisFinished":
                            app.eventManager.trigger("astrobox:MetadataAnalysisFinished", b);
                            break;
                        case "CloudDownloadEvent":
                            app.eventManager.trigger("astrobox:cloudDownloadEvent", b);
                            break;
                        case "AstroPrintStatus":
                            switch (b) {
                                case "connecting":
                                    this.connectionView.setAstroprintConnection("blink-animation");
                                    break;
                                case "connected":
                                    this.connectionView.setAstroprintConnection("connected");
                                    break;
                                case "disconnected":
                                case "error":
                                    this.connectionView.setAstroprintConnection("failed");
                                    break;
                                default:
                                    console.log("astroprintStatus unkonwn event: " + b)
                            }
                            this.set("astroprint", {
                                status: b
                            });
                            break;
                        case "LockStatusChanged":
                            b != this.loggedUser && location.reload();
                            break;
                        case "PrintCaptureInfoChanged":
                            this.set("print_capture", b);
                            break;
                        case "NetworkStatus":
                            this.set("online", "online" == b);
                            break;
                        case "InternetConnectingStatus":
                            app.eventManager.trigger("astrobox:InternetConnectingStatus",
                                b);
                            break;
                        default:
                            console.warn("Unkonwn event received: " + e)
                    }
                    break;
                case "commsData":
                    app.eventManager.trigger("astrobox:commsData", {
                        direction: b.direction,
                        data: b.data
                    })
            }
        }
    }
});
var PrintFile = Backbone.Model.extend({
        defaults: {
            name: "",
            images: []
        }
    }),
    PrintFileCollection = Backbone.Collection.extend({
        model: PrintFile,
        url: API_BASEURL + "astroprint/print-files",
        syncCloud: function(a) {
            a || (a = {});
            a.data = {
                forceSyncCloud: !0
            };
            this.fetch(a)
        }
    });
var PrinterProfile = Backbone.Model.extend({
    url: API_BASEURL + "printer-profile",
    defaults: {
        id: "profile",
        extruder_count: 1,
        max_nozzle_temp: 280,
        max_bed_temp: 140,
        heated_bed: !0
    }
});
var Utils = function() {
    var a = "Jan Feb Mar Apr May Jun Jul Aug Sep Nov Oct Dec".split(" ");
    return {
        timeFormat: function(a) {
            if (isNaN(a)) return "-- : -- : --";
            a = parseInt(a, 10);
            var b = Math.floor(a / 3600),
                e = Math.floor((a - 3600 * b) / 60);
            a = a - 3600 * b - 60 * e;
            10 > b && (b = "0" + b);
            10 > e && (e = "0" + e);
            10 > a && (a = "0" + a);
            return b + ":" + e + ":" + a
        },
        dateFormat: function(c) {
            return a[c.getMonth()] + " " + c.getDate() + ", " + c.getFullYear()
        },
        sizeFormat: function(a) {
            var b = -1;
            do a /= 1024, b++; while (1024 < a);
            return Math.max(a, .1).toFixed(1) + " kB; MB; GB; TB;PB;EB;ZB;YB".split(";")[b]
        }
    }
};
var TempBarView = Backbone.View.extend({
    containerDimensions: null,
    scale: null,
    type: null,
    dragging: !1,
    lastSent: null,
    lastSentTimestamp: null,
    waitAfterSent: 2E3,
    events: {
        "touchstart .temp-target span.label": "onTouchStart",
        "mousedown .temp-target span.label": "onTouchStart",
        touchmove: "onTouchMove",
        mousemove: "onTouchMove",
        "touchend .temp-target": "onTouchEnd",
        "mouseup .temp-target": "onTouchEnd",
        "mouseout .temp-target": "onTouchEnd",
        "click .temp-target a.temp-edit": "onEditClicked",
        "change .temp-target input": "onTempFieldChanged",
        "blur .temp-target input": "onTempFieldBlur"
    },
    initialize: function(a) {
        this.scale = a.scale;
        this.type = a.type;
        $(window).bind("resize.app", _.bind(this.onResize, this))
    },
    remove: function() {
        $(window).unbind("resize.app");
        Backbone.View.prototype.remove.call(this)
    },
    turnOff: function(a) {
        this._sendToolCommand("target", this.type, 0);
        this.setHandle(0)
    },
    setMax: function(a) {
        if (this.scale[1] != a) {
            this.scale[1] = a;
            this.onResize();
            var c = parseInt(this.$el.find(".temp-target span.label").text());
            isNaN(c) || this.setHandle(Math.min(c,
                a))
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        a.stopPropagation();
        this.dragging = !0;
        $(a.currentTarget).closest(".temp-target").addClass("moving")
    },
    onTouchEnd: function(a) {
        a.preventDefault();
        $(a.currentTarget).removeClass("moving");
        this._sendToolCommand("target", this.type, this.$el.find(".temp-target span.label").text());
        this.dragging = !1
    },
    onEditClicked: function(a) {
        a.preventDefault();
        a.stopPropagation();
        a = $(a.target).closest(".temp-target");
        var c = a.find("span.label");
        c.addClass("hide");
        a.find("input").removeClass("hide").val(c.text()).focus()
    },
    onTempFieldChanged: function(a) {
        a = $(a.target);
        var c = a.val();
        c == this.lastSent || isNaN(c) || (c = Math.min(Math.max(c, this.scale[0]), this.scale[1]), this._sendToolCommand("target", this.type, c), a.blur(), this.setHandle(c))
    },
    onTempFieldBlur: function(a) {
        a = $(a.target);
        a.addClass("hide");
        a.closest(".temp-target").find("span.label").removeClass("hide")
    },
    _sendToolCommand: function(a, c, b, e, d) {
        if (b != this.lastSent) {
            var g = {
                command: a
            };
            if ("bed" == c) {
                if ("target" == a) g.target = parseInt(b);
                else if ("offset" == a) g.offset = parseInt(b);
                else return;
                c = "bed"
            } else {
                if ("target" == a) a = "targets";
                else if ("offset" == a) a = "offsets";
                else return;
                g[a] = {};
                g[a][c] = parseInt(b);
                c = "tool"
            }
            $.ajax({
                url: API_BASEURL + "printer/" + c,
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(g),
                success: function() {
                    void 0 !== e && e()
                },
                error: function() {
                    void 0 !== d && d()
                }
            });
            this.lastSentTimestamp = (new Date).getTime();
            this.lastSent = b
        }
    },
    setTemps: function(a, c) {
        var b = (new Date).getTime();
        null !== this.lastSent && this.lastSentTimestamp > b - this.waitAfterSent &&
            (c = this.lastSent);
        isNaN(a) && (a = null);
        isNaN(c) && (c = null);
        this.renderTemps(a, c)
    },
    setHandle: function(a) {},
    onTouchMove: function(a) {},
    onClicked: function(a) {},
    onResize: function() {},
    renderTemps: function(a, c) {},
    _temp2px: function(a) {},
    _px2temp: function(a) {}
});
var FileUploadBase = Backbone.View.extend({
        events: {
            fileuploadadd: "onFileAdded",
            fileuploadsubmit: "onFileSubmit",
            fileuploadprogress: "onUploadProgress",
            fileuploadfail: "onUploadFail",
            fileuploadalways: "onUploadAlways",
            fileuploaddone: "onUploadDone"
        },
        acceptFileTypes: null,
        signatureUrl: null,
        signatureData: {},
        uploadUrl: null,
        uploadData: {},
        initialize: function(a) {
            this.$el.fileupload()
        },
        beforeSubmit: function(a, c) {
            if (this.signatureUrl) {
                this.progress(1);
                var b = this.signatureData;
                _.extend(b, {
                    file: c.files[0].name
                });
                var e = [];
                _.each(b, function(a, b) {
                    e.push(b + "=" + encodeURIComponent(a))
                });
                $.getJSON(this.signatureUrl + "?" + e.join("&"), _.bind(function(b) {
                    b.url && b.params ? (c.formData = b.params, c.url = b.url, c.redirect = b.redirect, this.progress(2), $(a.currentTarget).fileupload("send", c)) : (this.failed("There was an error getting upload parameters (1)."), this.always())
                }, this)).fail(_.bind(function(a) {
                    this.failed("There was an error getting upload parameters (2).");
                    this.always()
                }, this))
            } else this.progress(1), $(a.currentTarget).fileupload("send",
                c);
            return !1
        },
        onFileAdded: function(a, c) {
            if (this.acceptFileTypes) {
                var b = [],
                    e = this.acceptFileTypes;
                c.originalFiles[0].name.length && !e.test(c.originalFiles[0].name) && b.push("Not a valid file");
                return 0 < b.length ? (this.failed("There was an error uploading: " + b.join("<br/>")), this.always(), !1) : !0
            }
            console.error("acceptFileTypes not set")
        },
        onFileSubmit: function(a, c) {
            c.files.length && (this.started(c), this.progress(0), this.signatureUrl || (c.url = this.uploadUrl, c.formData = this.uploadData), this.beforeSubmit(a, c) &&
                $(a.currentTarget).fileupload("send", c));
            return !1
        },
        onUploadProgress: function(a, c) {
            this.progress(Math.max(c.loaded / c.total * 95, 2))
        },
        onUploadFail: function(a, c) {
            this.failed("There was an error uploading your file: " + c.errorThrown)
        },
        onUploadAlways: function(a, c) {
            this.always()
        },
        onUploadDone: function(a, c) {
            this.success(c)
        },
        started: function(a) {},
        progress: function(a) {},
        failed: function(a) {},
        success: function(a) {},
        always: function() {}
    }),
    FileUploadCombined = FileUploadBase.extend({
        fileTypes: {
            design: ["stl"],
            print: ["x3g",
                "gcode", "gco"
            ]
        },
        currentFileType: null,
        initialize: function(a) {
            FileUploadBase.prototype.initialize.call(this, a);
            this.refreshAccept()
        },
        refreshAccept: function() {
            "s3g" == app.printerProfile.get("driver") ? (this.$el.attr("accept", ".stl, .x3g"), this.acceptFileTypes = /(\.|\/)(stl|x3g)$/i) : (this.$el.attr("accept", ".stl, .gcode, .gco"), this.acceptFileTypes = /(\.|\/)(stl|gcode|gco)$/i)
        },
        started: function(a) {
            if (a.files && 0 < a.files.length) {
                a = a.files[0].name;
                var c = a.substr(a.lastIndexOf(".") + 1).toLowerCase();
                this.currentFileType =
                    _.findKey(this.fileTypes, function(a, e) {
                        return void 0 != _.find(a, function(a) {
                            return a == c
                        })
                    });
                if (void 0 == this.currentFileType) this.currentFileType = null, this.failed("File Type [" + c + "] not supported");
                else switch (this.currentFileType) {
                    case "design":
                        this.uploadUrl = null;
                        this.signatureUrl = "/api/astroprint/upload-data";
                        this.signatureData = {
                            file: a
                        };
                        break;
                    case "print":
                        this.signatureUrl = null, this.signatureData = {}, this.uploadUrl = "/api/files/local"
                }
            }
        },
        success: function(a) {
            switch (this.currentFileType) {
                case "design":
                    this.progress(98);
                    a.redirect ? window.location.href = a.redirect : this.failed("Missing redirect url");
                    break;
                case "print":
                    this.progress(100), noty({
                        text: "File uploaded succesfully :)",
                        type: "success",
                        timeout: 3E3
                    }), app.router.navigate("files", {
                        trigger: !0,
                        replace: !0
                    }), app.router.filesView.refreshPrintFiles(!0), app.router.filesView.printFilesListView.storage_control_view.selectStorage("local")
            }
        }
    });
var FileUploadDashboard = FileUploadCombined.extend({
        container: null,
        circleProgress: null,
        initialize: function(a) {
            FileUploadCombined.prototype.initialize.call(this, a);
            this.container = this.$el.closest(".upload-btn")
        },
        render: function() {
            this.refreshAccept()
        },
        started: function(a) {
            if (a.files && 0 < a.files.length && (this.container.addClass("uploading"), FileUploadCombined.prototype.started.call(this, a), null === this.circleProgress)) {
                var c = this.container.find(".app-image");
                this.circleProgress = this.container.find(".progress").circleProgress({
                    value: 0,
                    animation: !1,
                    size: c.innerWidth() - 12,
                    fill: {
                        color: "white"
                    }
                });
                $(window).bind("resize", _.bind(function() {
                    this.container.hasClass("uploading") && this.circleProgress.circleProgress({
                        size: c.innerWidth() - 12
                    })
                }, this))
            }
        },
        progress: function(a) {
            this.container.find(".progress span").html(Math.round(a) + "<i>%</i>");
            this.circleProgress.circleProgress({
                value: a / 100
            })
        },
        failed: function(a) {
            this.container.addClass("failed").removeClass("uploading");
            setTimeout(_.bind(function() {
                    this.container.removeClass("failed")
                }, this),
                3E3);
            console.error(a)
        },
        success: function(a) {
            FileUploadCombined.prototype.success.call(this, a);
            "design" != this.currentFileType && this.container.removeClass("uploading")
        }
    }),
    HomeView = Backbone.View.extend({
        el: "#home-view",
        uploadBtn: null,
        events: {
            show: "onShow"
        },
        initialize: function() {
            this.uploadBtn = new FileUploadDashboard({
                el: "#home-view #app-container .upload-btn .file-upload"
            });
            this.listenTo(app.printerProfile, "change:driver", this.onDriverChanged);
            this.onDriverChanged(app.printerProfile, app.printerProfile.get("driver"))
        },
        onShow: function() {
            this.uploadBtn.refreshAccept()
        },
        onDriverChanged: function(a, c) {
            "marlin" == c ? this.$("#app-container ul li.gcode-terminal-app-icon").removeClass("hide") : this.$("#app-container ul li.gcode-terminal-app-icon").addClass("hide")
        }
    });
var PrintFileInfoDialog = Backbone.View.extend({
        el: "#print-file-info",
        file_list_view: null,
        template: _.template($("#printfile-info-template").html()),
        print_file_view: null,
        events: {
            "click .actions a.remove": "onDeleteClicked",
            "click .actions a.print": "onPrintClicked",
            "click .actions a.download": "onDownloadClicked"
        },
        initialize: function(a) {
            this.file_list_view = a.file_list_view
        },
        render: function() {
            this.$el.find(".dlg-content").html(this.template({
                p: this.print_file_view.print_file.toJSON(),
                time_format: app.utils.timeFormat
            }))
        },
        open: function(a) {
            this.print_file_view = a;
            this.render();
            this.$el.foundation("reveal", "open")
        },
        onDeleteClicked: function(a) {
            a.preventDefault();
            var c = this.print_file_view.print_file;
            if (c) {
                var b = c.get("local_filename");
                c.get("id");
                var e = $(a.currentTarget).closest(".loading-button");
                e.addClass("loading");
                $.ajax({
                    url: "/api/files/local/" + b,
                    type: "DELETE",
                    success: _.bind(function() {
                        c.get("local_only") ? this.file_list_view.file_list.remove(c) : c.set("local_filename", !1);
                        noty({
                            text: b + " deleted from your " + PRODUCT_NAME,
                            type: "success",
                            timeout: 3E3
                        });
                        this.print_file_view.render();
                        this.$el.foundation("reveal", "close")
                    }, this),
                    error: function() {
                        noty({
                            text: "Error deleting " + b,
                            timeout: 3E3
                        })
                    },
                    always: function() {
                        e.removeClass("loading")
                    }
                })
            }
        },
        onPrintClicked: function(a) {
            this.print_file_view.printClicked(a);
            this.$el.foundation("reveal", "close")
        },
        onDownloadClicked: function(a) {
            this.print_file_view.downloadClicked(a);
            this.$el.foundation("reveal", "close")
        }
    }),
    FileUploadFiles = FileUploadCombined.extend({
        progressBar: null,
        buttonContainer: null,
        initialize: function(a) {
            this.progressBar = a.progressBar;
            this.buttonContainer = a.buttonContainer;
            FileUploadCombined.prototype.initialize.call(this, a)
        },
        started: function(a) {
            a.files && 0 < a.files.length && (this.buttonContainer.hide(), this.progressBar.show(), FileUploadCombined.prototype.started.call(this, a))
        },
        progress: function(a, c) {
            var b = Math.round(a);
            this.progressBar.find(".meter").css("width", b + "%");
            c || (c = "Uploading (" + b + "%)");
            this.progressBar.find(".progress-message span").text(c)
        },
        failed: function(a) {
            noty({
                text: a,
                timeout: 3E3
            })
        },
        success: function(a) {
            FileUploadCombined.prototype.success.call(this, a)
        },
        always: function() {
            "print" == this.currentFileType && (this.progressBar.hide(), this.buttonContainer.show(), this.progress(0))
        }
    }),
    UploadView = Backbone.View.extend({
        uploadBtn: null,
        progressBar: null,
        buttonContainer: null,
        initialize: function() {
            this.progressBar = this.$(".upload-progress");
            this.buttonContainer = this.$(".upload-buttons");
            this.uploadBtn = new FileUploadFiles({
                el: "#files-view .file-upload-view .file-upload",
                progressBar: this.$(".upload-progress"),
                buttonContainer: this.$(".file-upload-button")
            });
            this.render()
        },
        render: function() {
            var a = this.$(".file-upload-button");
            "s3g" == app.printerProfile.get("driver") ? (a.find(".extensions").text("stl, x3g"), a.find("input").attr("accept", ".stl, .x3g")) : (a.find(".extensions").text("stl, gcode"), a.find("input").attr("accept", ".stl, .gcode, .gco"));
            this.uploadBtn.refreshAccept()
        }
    }),
    PrintFileView = Backbone.View.extend({
        template: _.template($("#print-file-template").html()),
        print_file: null,
        list: null,
        printWhenDownloaded: !1,
        downloadProgress: null,
        initialize: function(a) {
            this.list = a.list;
            this.print_file = a.print_file
        },
        render: function() {
            var a = this.print_file.toJSON();
            a.local_filename ? this.$el.removeClass("remote") : this.$el.addClass("remote");
            this.$el.empty();
            this.downloadProgress = null;
            this.$el.html(this.template({
                p: a,
                time_format: app.utils.timeFormat,
                size_format: app.utils.sizeFormat
            }));
            this.delegateEvents({
                "click .left-section, .middle-section": "infoClicked",
                "click a.print": "printClicked",
                "click a.download": "downloadClicked",
                "click a.dw-cancel": "cancelDownloadClicked"
            })
        },
        infoClicked: function(a) {
            a && a.preventDefault();
            this.list.info_dialog.open(this)
        },
        downloadClicked: function(a) {
            a && a.preventDefault();
            $.getJSON("/api/astroprint/print-files/" + this.print_file.get("id") + "/download").fail(function() {
                noty({
                    text: "Couldn't download the print file.",
                    timeout: 3E3
                })
            })
        },
        cancelDownloadClicked: function(a) {
            a.preventDefault();
            $.ajax({
                url: "/api/astroprint/print-files/" + this.print_file.get("id") + "/download",
                method: "DELETE"
            }).fail(function() {
                noty({
                    text: "Unable to cancel download.",
                    timeout: 3E3
                })
            })
        },
        printClicked: function(a) {
            a && a.preventDefault();
            if (a = this.print_file.get("local_filename")) {
                var c = this.$(".loading-button.print");
                c.addClass("loading");
                $.ajax({
                    url: "/api/files/local/" + a,
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify({
                        command: "select",
                        print: !0
                    })
                }).done(_.bind(function() {
                    setTimeout(function() {
                        c.removeClass("loading")
                    }, 2E3)
                }, this)).fail(function(a) {
                    var e = null;
                    409 == a.status && (e = a.responseText);
                    noty({
                        text: e ? e : "There was an error starting the print",
                        timeout: 3E3
                    });
                    c.removeClass("loading")
                })
            } else this.printWhenDownloaded = !0, this.downloadClicked()
        }
    }),
    StorageControlView = Backbone.View.extend({
        print_file_view: null,
        events: {
            "click a.local": "localClicked",
            "click a.cloud": "cloudClicked"
        },
        selected: null,
        initialize: function(a) {
            this.print_file_view = a.print_file_view
        },
        selectStorage: function(a) {
            this.$("a.active").removeClass("active");
            this.$("a." + a).addClass("active");
            this.selected = a;
            this.print_file_view.render()
        },
        localClicked: function(a) {
            a.preventDefault();
            this.selectStorage("local")
        },
        cloudClicked: function(a) {
            a.preventDefault();
            LOGGED_USER ? this.selectStorage("cloud") : $("#login-modal").foundation("reveal", "open")
        }
    }),
    PrintFilesListView = Backbone.View.extend({
        info_dialog: null,
        print_file_views: [],
        storage_control_view: null,
        file_list: null,
        refresh_threshold: 1E3,
        last_refresh: 0,
        events: {
            "click .list-header button.sync": "forceSync"
        },
        initialize: function(a) {
            this.file_list = new PrintFileCollection;
            this.info_dialog = new PrintFileInfoDialog({
                file_list_view: this
            });
            this.storage_control_view =
                new StorageControlView({
                    el: this.$(".list-header ul.storage"),
                    print_file_view: this
                });
            app.eventManager.on("astrobox:cloudDownloadEvent", this.downloadProgress, this);
            app.eventManager.on("astrobox:MetadataAnalysisFinished", _.bind(this.onMetadataAnalysisFinished, this));
            this.listenTo(this.file_list, "remove", this.onFileRemoved);
            this.refresh(a.forceSync, a.syncCompleted)
        },
        render: function() {
            var a = this.$(".design-list-container"),
                c = this.storage_control_view.selected;
            a.children().detach();
            var b = c ? _.filter(this.print_file_views,
                function(a) {
                    if ("local" == c) {
                        if (a.print_file.get("local_filename")) return !0
                    } else if (!a.print_file.get("local_only")) return !0;
                    return !1
                }) : this.print_file_views;
            b.length ? _.each(b, function(b) {
                a.append(b.$el)
            }) : a.html('<div class="empty panel radius" align="center">\t<i class="icon-inbox empty-icon"></i>\t<h3>Nothing here yet.</h3></div>')
        },
        refresh: function(a, c) {
            var b = (new Date).getTime();
            if (this.last_refresh < b - this.refresh_threshold) {
                this.last_refresh = b;
                var e = this.$(".loading-button.sync");
                if (!e.hasClass("loading")) {
                    e.addClass("loading");
                    var b = _.bind(function() {
                            this.print_file_views = [];
                            this.file_list.each(_.bind(function(a, b) {
                                var c = new PrintFileView({
                                    list: this,
                                    print_file: a,
                                    attributes: {
                                        "class": "row" + (b % 2 ? " dark" : "")
                                    }
                                });
                                c.render();
                                this.print_file_views.push(c)
                            }, this));
                            this.$(".design-list-container").empty();
                            this.render();
                            e.removeClass("loading");
                            _.isFunction(c) && c(!0)
                        }, this),
                        d = function() {
                            noty({
                                text: "There was an error retrieving design list",
                                timeout: 3E3
                            });
                            e.removeClass("loading");
                            _.isFunction(c) && c(!1)
                        };
                    a ? this.file_list.syncCloud({
                        success: b,
                        error: d
                    }) : this.file_list.fetch({
                        success: b,
                        error: d
                    })
                }
            }
        },
        downloadProgress: function(a) {
            var c = _.find(this.print_file_views, function(b) {
                return b.print_file.get("id") == a.id
            });
            if (c) {
                var b = c.$(".print-file-options");
                switch (a.type) {
                    case "progress":
                        b.hasClass("downloading") || b.addClass("downloading");
                        if (c.downloadProgress) c.downloadProgress.circleProgress({
                            value: a.progress / 100
                        });
                        else {
                            var e = b.find(".download-progress");
                            c.downloadProgress = e.circleProgress({
                                value: 0,
                                animation: !1,
                                size: b.innerWidth() - 25,
                                fill: {
                                    color: "black"
                                }
                            })
                        }
                        c.$(".download-progress span").html(Math.floor(a.progress) +
                            "<i>%</i>");
                        break;
                    case "success":
                        if (b = c.print_file) b.set("local_filename", a.filename), b.set("print_time", a.print_time), b.set("layer_count", a.layer_count), c.render(), c.printWhenDownloaded && (c.printWhenDownloaded = !1, c.printClicked());
                        break;
                    case "error":
                        b.removeClass("downloading");
                        noty({
                            text: "Couldn't download the print file.",
                            timeout: 3E3
                        });
                        console.error("Error downloading file: " + a.reason);
                        break;
                    case "cancelled":
                        b.removeClass("downloading")
                }
            }
        },
        forceSync: function() {
            this.refresh(!0)
        },
        onFileRemoved: function(a) {
            var c =
                _.find(this.print_file_views, function(b) {
                    return b.print_file == a
                });
            c && (c.remove(), this.print_file_views.splice(this.print_file_views.indexOf(c), 1))
        },
        onMetadataAnalysisFinished: function(a) {
            var c = _.find(this.print_file_views, function(b) {
                return b.print_file.get("name") == a.file
            });
            c && (c.print_file.set("info", a.result), c.render())
        }
    }),
    FilesView = Backbone.View.extend({
        el: "#files-view",
        uploadView: null,
        printFilesListView: null,
        events: {
            show: "onShow"
        },
        initialize: function(a) {
            this.uploadView = new UploadView({
                el: this.$el.find(".file-upload-view")
            });
            this.printFilesListView = new PrintFilesListView({
                el: this.$el.find(".design-list"),
                forceSync: a.forceSync,
                syncCompleted: a.syncCompleted
            });
            this.listenTo(app.printerProfile, "change:driver", this.onDriverChanged)
        },
        refreshPrintFiles: function() {
            this.printFilesListView.refresh(!0)
        },
        fileInfo: function(a) {
            var c = _.find(this.printFilesListView.print_file_views, function(b) {
                return b.print_file.get("id") == a
            });
            c && (this.printFilesListView.storage_control_view.selectStorage("cloud"), c.infoClicked())
        },
        onShow: function() {
            this.printFilesListView.refresh(!1)
        },
        onDriverChanged: function() {
            this.uploadView.render();
            this.printFilesListView.refresh(!0)
        }
    });
var TempBarVerticalView = TempBarView.extend({
        containerDimensions: null,
        scale: null,
        type: null,
        dragging: !1,
        events: _.extend(TempBarView.prototype.events, {
            "click .temp-bar": "onClicked",
            "click button.temp-off": "turnOff"
        }),
        setHandle: function(a) {
            if (!this.dragging) {
                var c = this._temp2px(a),
                    b = this.$el.find(".temp-target");
                b.css({
                    transition: "top 0.5s"
                });
                b.css({
                    top: c + "px"
                });
                b.find("span.label").text(a);
                setTimeout(function() {
                    b.css({
                        transition: ""
                    })
                }, 800)
            }
        },
        onTouchMove: function(a) {
            if (this.dragging) {
                a.preventDefault();
                a.stopPropagation();
                var c = this.$(".temp-target");
                a = ("mousemove" == a.type ? a.originalEvent.pageY : a.originalEvent.changedTouches[0].clientY + $(document).scrollTop()) - this.containerDimensions.top - c.innerHeight() / 2;
                a = Math.min(Math.max(a, 0), this.containerDimensions.maxTop);
                c.css({
                    top: a + "px"
                });
                c.find("span.label").text(this._px2temp(a))
            }
        },
        onClicked: function(a) {
            a.preventDefault();
            var c = this.$el.find(".temp-target");
            a = a.pageY - this.containerDimensions.top - c.innerHeight() / 2;
            a = Math.min(Math.max(a, 0), this.containerDimensions.maxTop);
            a = this._px2temp(a);
            this.setHandle(a);
            this._sendToolCommand("target", this.type, a)
        },
        onResize: function() {
            var a = this.$el.find(".temp-bar"),
                c = a.find(".temp-target"),
                b = a.find("label"),
                e = a.height(),
                c = e - c.innerHeight() - b.innerHeight();
            this.containerDimensions = {
                top: a.offset().top,
                height: e,
                maxTop: c,
                px4degree: c / (this.scale[1] - this.scale[0])
            }
        },
        renderTemps: function(a, c) {
            var b = this.$el.find(".temp-target").innerHeight();
            null !== a && (this.$el.find(".current-temp-top").html(Math.round(a) + "&deg;"), this.$el.find(".current-temp").css({
                top: this._temp2px(a) +
                    b / 2 + "px"
            }));
            null !== c && this.setHandle(Math.min(Math.round(c), this.scale[1]))
        },
        _temp2px: function(a) {
            return this.containerDimensions.maxTop - a * this.containerDimensions.px4degree
        },
        _px2temp: function(a) {
            return Math.round((this.containerDimensions.maxTop - a) / this.containerDimensions.px4degree)
        }
    }),
    TempView = Backbone.View.extend({
        el: "#temp-control",
        nozzleTempBar: null,
        bedTempBar: null,
        initialize: function() {
            this.nozzleTempBar = new TempBarVerticalView({
                scale: [0, app.printerProfile.get("max_nozzle_temp")],
                el: this.$el.find(".temp-control-cont.nozzle"),
                type: "tool0"
            });
            this.bedTempBar = new TempBarVerticalView({
                scale: [0, app.printerProfile.get("max_bed_temp")],
                el: this.$el.find(".temp-control-cont.bed"),
                type: "bed"
            })
        },
        render: function() {
            var a = app.printerProfile.toJSON();
            this.nozzleTempBar.setMax(a.max_nozzle_temp);
            a.heated_bed ? (this.bedTempBar.setMax(a.max_bed_temp), this.bedTempBar.$el.removeClass("disabled")) : this.bedTempBar.$el.addClass("disabled")
        },
        resetBars: function() {
            this.nozzleTempBar.onResize();
            this.bedTempBar.onResize()
        },
        updateBars: function(a) {
            this.nozzleTempBar.setTemps(a.extruder.actual,
                a.extruder.target);
            this.bedTempBar.setTemps(a.bed.actual, a.bed.target)
        }
    }),
    DistanceControl = Backbone.View.extend({
        el: "#distance-control",
        selected: 10,
        events: {
            "click button": "selectDistance"
        },
        selectDistance: function(a) {
            a = $(a.currentTarget);
            this.$el.find(".success").removeClass("success").addClass("secondary");
            a.addClass("success").removeClass("secondary");
            this.selected = a.attr("data-value")
        }
    }),
    MovementControlView = Backbone.View.extend({
        distanceControl: null,
        initialize: function(a) {
            this.distanceControl = a.distanceControl
        },
        sendJogCommand: function(a, c, b) {
            "undefined" === typeof b && (b = 10);
            var e = {
                command: "jog"
            };
            e[a] = b * c;
            $.ajax({
                url: API_BASEURL + "printer/printhead",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(e)
            })
        },
        sendHomeCommand: function(a) {
            $.ajax({
                url: API_BASEURL + "printer/printhead",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: "home",
                    axes: a
                })
            })
        }
    }),
    XYControlView = MovementControlView.extend({
        el: "#xy-controls",
        events: {
            "click .control_btn_x_plus": "xPlusTapped",
            "click .control_btn_x_minus": "xMinusTapped",
            "click .control_btn_y_plus": "yPlusTapped",
            "click .control_btn_y_minus": "yMinusTapped",
            "click .home_z": "homeTapped"
        },
        xPlusTapped: function() {
            this.sendJogCommand("x", 1, this.distanceControl.selected)
        },
        xMinusTapped: function() {
            this.sendJogCommand("x", -1, this.distanceControl.selected)
        },
        yPlusTapped: function() {
            this.sendJogCommand("y", 1, this.distanceControl.selected)
        },
        yMinusTapped: function() {
            this.sendJogCommand("y", -1, this.distanceControl.selected)
        },
        homeTapped: function() {
            app.socketData.get("paused") ||
                this.sendHomeCommand(["x", "y"])
        }
    }),
    ZControlView = MovementControlView.extend({
        el: "#z-controls",
        events: {
            "click .control_btn_z_plus": "zPlusTapped",
            "click .control_btn_z_minus": "zMinusTapped",
            "click .home_z": "homeTapped"
        },
        zPlusTapped: function() {
            this.sendJogCommand("z", 1, this.distanceControl.selected)
        },
        zMinusTapped: function() {
            this.sendJogCommand("z", -1, this.distanceControl.selected)
        },
        homeTapped: function() {
            app.socketData.get("paused") || this.sendHomeCommand("z")
        }
    }),
    ExtrusionControlView = Backbone.View.extend({
        el: "#extrusion-control",
        template: null,
        initialize: function() {
            this.template = _.template(this.$("#extruder-switch-template").html())
        },
        render: function() {
            var a = app.printerProfile.toJSON();
            this.$(".row.extruder-switch").html(this.template({
                profile: a
            }));
            var c = {
                "click .extrude": "extrudeTapped",
                "click .retract": "retractTapped",
                "change .extrusion-length": "lengthChanged"
            };
            1 < a.extruder_count && (c["change .extruder-number"] = "extruderChanged");
            this.delegateEvents(c)
        },
        extrudeTapped: function() {
            this._checkAmount() && this._sendExtrusionCommand(1)
        },
        retractTapped: function() {
            this._checkAmount() && this._sendExtrusionCommand(-1)
        },
        lengthChanged: function(a) {
            a = $(a.target);
            "other" == a.val() ? (a.addClass("hide"), this.$(".other").removeClass("hide").focus(), this.$(".other").focus()) : this.$('input[name="extrusion-length"]').val(a.val())
        },
        extruderChanged: function(a) {
            this._sendChangeToolCommand($(a.target).val())
        },
        _sendChangeToolCommand: function(a) {
            $.ajax({
                url: API_BASEURL + "printer/tool",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: "select",
                    tool: "tool" + a
                })
            })
        },
        _checkAmount: function() {
            return !isNaN(this.$el.find('input[name="extrusion-length"]').val())
        },
        _sendExtrusionCommand: function(a) {
            a = {
                command: "extrude",
                amount: this.$el.find('input[name="extrusion-length"]').val() * a
            };
            $.ajax({
                url: API_BASEURL + "printer/tool",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify(a)
            })
        }
    }),
    FanControlView = Backbone.View.extend({
        el: "#temp-control .fan-control",
        events: {
            "click button.fan-on": "fanOn",
            "click button.fan-off": "fanOff"
        },
        fanOn: function() {
            this._setFanSpeed(255);
            this.$(".fan_icon").addClass("animate-spin")
        },
        fanOff: function() {
            this._setFanSpeed(0);
            this.$(".fan_icon").removeClass("animate-spin")
        },
        _setFanSpeed: function(a) {
            $.ajax({
                url: API_BASEURL + "printer/fan",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: "set",
                    tool: 0,
                    speed: a
                })
            })
        }
    }),
    ControlView = Backbone.View.extend({
        el: "#control-view",
        events: {
            "click .back-to-print button": "resumePrinting",
            show: "render"
        },
        tempView: null,
        distanceControl: null,
        xyControlView: null,
        zControlView: null,
        extrusionView: null,
        fanView: null,
        initialize: function() {
            this.tempView = new TempView;
            this.distanceControl = new DistanceControl;
            this.xyControlView = new XYControlView({
                distanceControl: this.distanceControl
            });
            this.zControlView = new ZControlView({
                distanceControl: this.distanceControl
            });
            this.extrusionView = new ExtrusionControlView;
            this.fanView = new FanControlView;
            this.listenTo(app.socketData, "change:temps", this.updateTemps)
        },
        updateTemps: function(a,
            c) {
            this.$el.hasClass("hide") || this.tempView.updateBars(c)
        },
        render: function() {
            app.socketData.get("paused") ? this.$el.addClass("print-paused") : this.$el.removeClass("print-paused");
            this.extrusionView.render();
            this.tempView.render()
        },
        resumePrinting: function(a) {
            app.router.printingView.togglePausePrint(a);
            app.showPrinting();
            this.$el.addClass("hide")
        }
    });
var SettingsPage = Backbone.View.extend({
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        show: function() {
            this.parent.$el.find(".settings-page").addClass("hide");
            this.$el.removeClass("hide")
        }
    }),
    PrinterConnectionView = SettingsPage.extend({
        el: "#printer-connection",
        template: _.template($("#printer-connection-settings-page-template").html()),
        settings: null,
        initialize: function(a) {
            this.listenTo(app.socketData, "change:printer", this.printerStatusChanged);
            SettingsPage.prototype.initialize.call(this, a)
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.settings ? this.render() : this.getInfo()
        },
        getInfo: function() {
            this.$("a.retry-ports i").addClass("animate-spin");
            $.getJSON(API_BASEURL + "settings/printer", null, _.bind(function(a) {
                a.serial ? (this.settings = a, this.render()) : noty({
                    text: "No serial settings found.",
                    timeout: 3E3
                })
            }, this)).fail(function() {
                noty({
                    text: "There was an error getting serial settings.",
                    timeout: 3E3
                });
                this.$("a.retry-ports i").removeClass("animate-spin")
            })
        },
        render: function() {
            this.$("form").html(this.template({
                settings: this.settings
            }));
            this.printerStatusChanged(app.socketData, app.socketData.get("printer"));
            this.delegateEvents({
                "change #settings-baudrate": "saveConnectionSettings",
                "change #settings-serial-port": "saveConnectionSettings",
                "click a.retry-ports": "retryPortsClicked",
                "click .loading-button.test-connection button": "testConnection"
            })
        },
        retryPortsClicked: function(a) {
            a.preventDefault();
            this.getInfo()
        },
        saveConnectionSettings: function(a) {
            var c = {};
            _.each(this.$("form").serializeArray(), function(a) {
                c[a.name] = a.value
            });
            c.port && (this.$(".loading-button.test-connection").addClass("loading"),
                this.$(".connection-status").removeClass("failed connected").addClass("connecting"), $.ajax({
                    url: API_BASEURL + "connection",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json; charset=UTF-8",
                    data: JSON.stringify({
                        command: "connect",
                        driver: c.driver,
                        port: c.port,
                        baudrate: c.baudrate ? parseInt(c.baudrate) : null,
                        autoconnect: !0,
                        save: !0
                    })
                }).fail(function() {
                    noty({
                        text: "There was an error testing connection settings.",
                        timeout: 3E3
                    })
                }))
        },
        printerStatusChanged: function(a, c) {
            this.$(".connection-status").removeClass("connecting failed connected").addClass(c.status);
            "connecting" != c.status && this.$(".loading-button.test-connection").removeClass("loading")
        },
        testConnection: function(a) {
            a.preventDefault();
            this.saveConnectionSettings()
        }
    }),
    PrinterProfileView = SettingsPage.extend({
        el: "#printer-profile",
        template: _.template($("#printer-profile-settings-page-template").html()),
        settings: null,
        initialize: function(a) {
            SettingsPage.prototype.initialize.call(this, a);
            this.settings = app.printerProfile
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.render()
        },
        render: function() {
            this.$el.html(this.template({
                settings: this.settings.toJSON()
            }));
            this.$el.foundation();
            this.$("#extruder-count").val(this.settings.get("extruder_count"));
            this.delegateEvents({
                "invalid.fndtn.abide form": "invalidForm",
                "valid.fndtn.abide form": "validForm",
                "change input[name='heated_bed']": "heatedBedChanged"
            })
        },
        heatedBedChanged: function(a) {
            a = $(a.currentTarget);
            var c = this.$(".input-wrapper.max_bed_temp");
            a.is(":checked") ? c.removeClass("hide") : c.addClass("hide")
        },
        invalidForm: function(a) {
            "abide.fndtn" === a.namespace && noty({
                text: "Please check your errors",
                timeout: 3E3
            })
        },
        validForm: function(a) {
            if ("abide.fndtn" === a.namespace) {
                a = this.$("form");
                var c = a.find(".loading-button"),
                    b = {};
                c.addClass("loading");
                a.find("input, select").each(function(a, c) {
                    var g = null;
                    c = $(c);
                    g = c.is('input[type="radio"], input[type="checkbox"]') ? c.is(":checked") : c.val();
                    b[c.attr("name")] = g
                });
                this.settings.save(b, {
                    patch: !0,
                    success: _.bind(function() {
                        noty({
                            text: "Profile changes saved",
                            timeout: 3E3,
                            type: "success"
                        });
                        c.removeClass("loading");
                        this.parent.subviews["printer-connection"].settings = null
                    }, this),
                    error: function() {
                        noty({
                            text: "Failed to save printer profile change",
                            timeout: 3E3
                        });
                        c.removeClass("loading")
                    }
                })
            }
        }
    }),
    InternetConnectionView = SettingsPage.extend({
        el: "#internet-connection",
        template: _.template($("#internet-connection-settings-page-template").html()),
        networksDlg: null,
        settings: null,
        events: {
            "click .loading-button.start-hotspot button": "startHotspotClicked",
            "click .loading-button.stop-hotspot button": "stopHotspotClicked",
            "click .loading-button.list-networks button": "listNetworksClicked",
            "change .hotspot-off input": "hotspotOffChanged"
        },
        initialize: function(a) {
            SettingsPage.prototype.initialize.apply(this, arguments);
            this.networksDlg = new WiFiNetworksDialog({
                parent: this
            })
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.settings || $.getJSON(API_BASEURL + "settings/internet", null, _.bind(function(a) {
                this.settings = a;
                this.render()
            }, this)).fail(function() {
                noty({
                    text: "There was an error getting WiFi settings.",
                    timeout: 3E3
                })
            })
        },
        render: function() {
            this.$el.html(this.template({
                settings: this.settings
            }))
        },
        connect: function(a, c) {
            var b = $.Deferred();
            $.ajax({
                url: API_BASEURL + "settings/internet/active",
                type: "POST",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({
                    id: a,
                    password: c
                })
            }).done(_.bind(function(a) {
                if (a.name) {
                    var c = null,
                        g = setTimeout(function() {
                            c.call(this, {
                                status: "failed",
                                reason: "timeout"
                            })
                        }, 7E4),
                        c = function(m) {
                            switch (m.status) {
                                case "disconnected":
                                case "connecting":
                                    break;
                                case "connected":
                                    app.eventManager.off("astrobox:InternetConnectingStatus", c, this);
                                    noty({
                                        text: "Your " + PRODUCT_NAME + " is now connected to " + m.info.name + ".",
                                        type: "success",
                                        timeout: 3E3
                                    });
                                    this.settings.networks.wireless = m.info;
                                    this.render();
                                    b.resolve();
                                    clearTimeout(g);
                                    break;
                                case "failed":
                                    app.eventManager.off("astrobox:InternetConnectingStatus", c, this);
                                    message = "no_secrets" == m.reason ? "Invalid password for " + a.name + "." : "Unable to connect to " + a.name + ".";
                                    b.reject(message);
                                    clearTimeout(g);
                                    break;
                                default:
                                    app.eventManager.off("astrobox:InternetConnectingStatus", c, this), b.reject("Unable to connect to " + a.name + "."), clearTimeout(g)
                            }
                        };
                    app.eventManager.on("astrobox:InternetConnectingStatus",
                        c, this)
                } else a.message && (noty({
                    text: a.message,
                    timeout: 3E3
                }), b.reject())
            }, this)).fail(_.bind(function() {
                noty({
                    text: "There was an error saving setting.",
                    timeout: 3E3
                });
                b.reject()
            }, this));
            return b
        },
        startHotspotClicked: function(a) {
            var c = $(a.target).closest(".loading-button");
            c.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/internet/hotspot",
                type: "POST",
                success: _.bind(function(a, c, d) {
                    noty({
                        text: "Your " + PRODUCT_NAME + " has created a hotspot. Connect to <b>" + this.settings.hotspot.name + "</b>.",
                        type: "success",
                        timeout: 3E3
                    });
                    this.settings.hotspot.active = !0;
                    this.render()
                }, this),
                error: function(a) {
                    noty({
                        text: a.responseText,
                        timeout: 3E3
                    })
                },
                complete: function() {
                    c.removeClass("loading")
                }
            })
        },
        stopHotspotClicked: function(a) {
            var c = $(a.target).closest(".loading-button");
            c.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/internet/hotspot",
                type: "DELETE",
                success: _.bind(function(a, c, d) {
                    noty({
                        text: "The hotspot has been stopped",
                        type: "success",
                        timeout: 3E3
                    });
                    this.settings.hotspot.active = !1;
                    this.render()
                }, this),
                error: function(a) {
                    noty({
                        text: a.responseText,
                        timeout: 3E3
                    })
                },
                complete: function() {
                    c.removeClass("loading")
                }
            })
        },
        listNetworksClicked: function(a) {
            var c = $(a.target).closest(".loading-button");
            c.addClass("loading");
            $.getJSON(API_BASEURL + "settings/internet/wifi-networks", _.bind(function(a) {
                if (a.message) noty({
                    text: a.message
                });
                else if (a.networks) {
                    var c = this;
                    this.networksDlg.open(_.sortBy(_.uniq(_.sortBy(a.networks, function(a) {
                        return a.name
                    }), !0, function(a) {
                        return a.name
                    }), function(a) {
                        a.active = c.settings.networks.wireless && c.settings.networks.wireless.name ==
                            a.name;
                        return -a.signal
                    }))
                }
            }, this)).fail(function() {
                noty({
                    text: "There was an error retrieving networks.",
                    timeout: 3E3
                })
            }).complete(function() {
                c.removeClass("loading")
            })
        },
        hotspotOffChanged: function(a) {
            a = $(a.currentTarget);
            $.ajax({
                url: "/api/settings/internet/hotspot",
                method: "PUT",
                data: JSON.stringify({
                    hotspotOnlyOffline: a.is(":checked")
                }),
                contentType: "application/json",
                dataType: "json"
            }).fail(function() {
                noty({
                    text: "There was an error saving hotspot option.",
                    timeout: 3E3
                })
            })
        }
    }),
    WiFiNetworkPasswordDialog =
    Backbone.View.extend({
        el: "#wifi-network-password-modal",
        events: {
            "click button.connect": "connectClicked",
            "submit form": "connect"
        },
        template: _.template($("#wifi-network-password-modal-template").html()),
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        render: function(a) {
            this.$el.html(this.template({
                wifi: a
            }))
        },
        open: function(a) {
            this.render(a);
            this.$el.foundation("reveal", "open", {
                close_on_background_click: !1,
                close_on_esc: !1
            });
            this.$el.one("opened", _.bind(function() {
                    this.$el.find(".network-password-field").focus()
                },
                this))
        },
        connectClicked: function(a) {
            a.preventDefault();
            this.$("form").submit()
        },
        connect: function(a) {
            a.preventDefault();
            var c = $(a.currentTarget);
            a = c.find(".network-id-field").val();
            var b = c.find(".network-password-field").val(),
                e = this.$("button.connect").closest(".loading-button"),
                d = this.$("button.cancel");
            e.addClass("loading");
            d.hide();
            this.parent.connect(a, b).done(_.bind(function() {
                c.find(".network-password-field").val("");
                this.$el.foundation("reveal", "close");
                e.removeClass("loading");
                d.show()
            }, this)).fail(_.bind(function(a) {
                e.removeClass("loading");
                d.show();
                noty({
                    text: a,
                    timeout: 3E3
                });
                this.$el.foundation("reveal", "close")
            }, this));
            return !1
        }
    }),
    WiFiNetworksDialog = Backbone.View.extend({
        el: "#wifi-network-list-modal",
        networksTemplate: _.template($("#wifi-network-modal-row").html()),
        passwordDlg: null,
        parent: null,
        networks: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        open: function(a) {
            var c = this.$el.find(".modal-content");
            c.empty();
            this.networks = a;
            c.html(this.networksTemplate({
                networks: this.networks
            }));
            c.find("button").bind("click", _.bind(this.networkSelected,
                this));
            this.$el.foundation("reveal", "open")
        },
        networkSelected: function(a) {
            a.preventDefault();
            a = $(a.target);
            this.passwordDlg || (this.passwordDlg = new WiFiNetworkPasswordDialog({
                parent: this.parent
            }));
            var c = this.networks[a.data("id")];
            if (c.secured) this.passwordDlg.open(c);
            else {
                var b = a.closest(".loading-button");
                b.addClass("loading");
                this.parent.connect(c.id, null).done(_.bind(function() {
                    this.$el.foundation("reveal", "close");
                    b.removeClass("loading")
                }, this)).fail(function(a) {
                    noty({
                        text: a,
                        timeout: 3E3
                    });
                    b.removeClass("loading")
                })
            }
        }
    }),
    SoftwareUpdateView = SettingsPage.extend({
        el: "#software-update",
        events: {
            "click .loading-button.check button": "onCheckClicked"
        },
        updateDialog: null,
        onCheckClicked: function(a) {
            var c = this.$el.find(".loading-button.check");
            c.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/software/check",
                type: "GET",
                dataType: "json",
                success: _.bind(function(a) {
                    this.updateDialog || (this.updateDialog = new SoftwareUpdateDialog);
                    this.updateDialog.open(a)
                }, this),
                error: function(a) {
                    400 == a.status ? noty({
                            text: a.responseText,
                            timeout: 3E3
                        }) :
                        noty({
                            text: "There was a problem checking for new software.",
                            timeout: 3E3
                        })
                },
                complete: function() {
                    c.removeClass("loading")
                }
            })
        }
    }),
    SoftwareUpdateDialog = Backbone.View.extend({
        el: "#software-update-modal",
        data: null,
        contentTemplate: null,
        open: function(a) {
            this.contentTemplate || (this.contentTemplate = _.template($("#software-update-modal-content").html()));
            this.data = a;
            var c = this.$el.find(".content");
            c.empty();
            c.html(this.contentTemplate({
                data: a,
                date_format: app.utils.dateFormat
            }));
            c.find("button.cancel").bind("click",
                _.bind(this.close, this));
            c.find("button.go").bind("click", _.bind(this.doUpdate, this));
            this.$el.foundation("reveal", "open")
        },
        close: function() {
            this.$el.foundation("reveal", "close")
        },
        doUpdate: function() {
            var a = this.$el.find(".loading-button");
            a.addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/software/update",
                type: "POST",
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify({
                    release_id: this.data.release.id
                }),
                success: function() {
                    location.reload()
                },
                error: function(c) {
                    400 == c.status ? noty({
                        text: c.responseText,
                        timeout: 3E3
                    }) : noty({
                        text: "There was a problem updating to the new version.",
                        timeout: 3E3
                    });
                    a.removeClass("loading")
                }
            })
        }
    }),
    SoftwareAdvancedView = SettingsPage.extend({
        el: "#software-advanced",
        template: _.template($("#software-advanced-content-template").html()),
        resetConfirmDialog: null,
        sendLogDialog: null,
        clearLogDialog: null,
        settings: null,
        events: {
            "change #serial-logs": "serialLogChanged"
        },
        initialize: function(a) {
            SettingsPage.prototype.initialize.apply(this, arguments);
            this.resetConfirmDialog = new ResetConfirmDialog;
            this.sendLogDialog = new SendLogDialog;
            this.clearLogDialog = new ClearLogsDialog({
                parent: this
            })
        },
        show: function() {
            SettingsPage.prototype.show.apply(this);
            this.settings || $.getJSON(API_BASEURL + "settings/software/advanced", null, _.bind(function(a) {
                this.settings = a;
                this.render()
            }, this)).fail(function() {
                noty({
                    text: "There was an error getting software advanced settings.",
                    timeout: 3E3
                })
            })
        },
        render: function() {
            this.$el.html(this.template({
                data: this.settings,
                size_format: app.utils.sizeFormat
            }))
        },
        serialLogChanged: function(a) {
            var c =
                $(a.currentTarget).is(":checked");
            $.ajax({
                url: "/api/settings/software/logs/serial",
                method: "PUT",
                data: JSON.stringify({
                    active: c
                }),
                contentType: "application/json",
                dataType: "json"
            }).done(function() {
                c ? $("#app").addClass("serial-log") : $("#app").removeClass("serial-log")
            }).fail(function() {
                noty({
                    text: "There was an error changing serial logs.",
                    timeout: 3E3
                })
            })
        }
    }),
    SendLogDialog = Backbone.View.extend({
        el: "#send-logs-modal",
        events: {
            "click button.secondary": "doClose",
            "click button.success": "doSend",
            "open.fndtn.reveal": "onOpen"
        },
        onOpen: function() {
            this.$("input[name=ticket]").val("");
            this.$("textarea[name=message]").val("")
        },
        doClose: function() {
            this.$el.foundation("reveal", "close");
            this.$("input[name=ticket]").val("");
            this.$("textarea[name=message]").val("")
        },
        doSend: function() {
            var a = this.$(".loading-button"),
                c = {
                    ticket: this.$("input[name=ticket]").val(),
                    message: this.$("textarea[name=message]").val()
                };
            a.addClass("loading");
            $.post(API_BASEURL + "settings/software/logs", c).done(_.bind(function() {
                noty({
                    text: "Logs sent to AstroPrint!",
                    type: "success",
                    timeout: 3E3
                });
                this.$el.foundation("reveal", "close");
                this.$("input[name=ticket]").val("");
                this.$("textarea[name=message]").val("")
            }, this)).fail(function() {
                noty({
                    text: "There was a problem sending your logs.",
                    timeout: 3E3
                })
            }).always(function() {
                a.removeClass("loading")
            })
        }
    }),
    ClearLogsDialog = Backbone.View.extend({
        el: "#delete-logs-modal",
        events: {
            "click button.secondary": "doClose",
            "click button.alert": "doDelete",
            "open.fndtn.reveal": "onOpen"
        },
        parent: null,
        initialize: function(a) {
            this.parent = a.parent
        },
        doClose: function() {
            this.$el.foundation("reveal", "close")
        },
        doDelete: function() {
            this.$(".loading-button").addClass("loading");
            $.ajax({
                url: API_BASEURL + "settings/software/logs",
                type: "DELETE",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({}),
                success: _.bind(function() {
                    this.parent.$(".size").text("0 kB");
                    this.doClose()
                }, this),
                error: function() {
                    noty({
                        text: "There was a problem clearing your logs.",
                        timeout: 3E3
                    })
                },
                complete: _.bind(function() {
                        this.$(".loading-button").removeClass("loading")
                    },
                    this)
            })
        }
    }),
    ResetConfirmDialog = Backbone.View.extend({
        el: "#restore-confirm-modal",
        events: {
            "click button.secondary": "doClose",
            "click button.alert": "doReset",
            "open.fndtn.reveal": "onOpen"
        },
        onOpen: function() {
            this.$("input").val("")
        },
        doClose: function() {
            this.$el.foundation("reveal", "close")
        },
        doReset: function() {
            "RESET" == this.$("input").val() && (this.$(".loading-button").addClass("loading"), $.ajax({
                url: API_BASEURL + "settings/software/settings",
                type: "DELETE",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({}),
                success: function() {
                    location.href = ""
                },
                complete: _.bind(function() {
                    this.$(".loading-button").removeClass("loading")
                }, this)
            }))
        }
    }),
    SettingsMenu = Backbone.View.extend({
        el: "#settings-side-bar",
        subviews: null,
        initialize: function(a) {
            a.subviews && (this.subviews = a.subviews)
        },
        changeActive: function(a) {
            var c = this.$el.find("li." + a);
            this.$el.find("li.active").removeClass("active");
            c.closest("li").addClass("active");
            this.subviews[a].show()
        }
    }),
    SettingsView = Backbone.View.extend({
        el: "#settings-view",
        menu: null,
        subviews: null,
        initialize: function() {
            this.subviews = {
                "printer-connection": new PrinterConnectionView({
                    parent: this
                }),
                "printer-profile": new PrinterProfileView({
                    parent: this
                }),
                "internet-connection": new InternetConnectionView({
                    parent: this
                }),
                "software-update": new SoftwareUpdateView({
                    parent: this
                }),
                "software-advanced": new SoftwareAdvancedView({
                    parent: this
                })
            };
            this.menu = new SettingsMenu({
                subviews: this.subviews
            })
        },
        onShow: function() {
            this.subviews["printer-connection"].show()
        }
    });
var ConnectionView = Backbone.View.extend({
    el: "#connection-view",
    events: {
        "click i.printer": "printerTapped",
        "click i.server": "serverTapped",
        "click i.astroprint": "astroprintTapped",
        "mouseover i": "onMouseOver",
        "mouseout i": "onMouseOut",
        "mouseover a.offline": "onMouseOver",
        "mouseout a.offline": "onMouseOut"
    },
    socketData: null,
    tooltip: null,
    connect: function(a) {
        var c = this;
        $.ajax({
            url: API_BASEURL + "connection",
            method: "GET",
            dataType: "json",
            success: function(b) {
                if ("Error" == b.current.state.substr(0, 5) || "Closed" == b.current.state ||
                    "Offline" == b.current.state) {
                    "Error" == b.current.state.substr(0, 5) && console.error("Printer connection had error: " + b.current.state);
                    var e = b.options.portPreference;
                    b.options.ports && !_.has(b.options.ports, e) && (e = _.keys(b.options.ports)[0]);
                    e ? (b = {
                        command: "connect",
                        port: e,
                        baudrate: b.options.baudratePreference,
                        autoconnect: !0
                    }, c.setPrinterConnection("blink-animation"), $.ajax({
                        url: API_BASEURL + "connection",
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json; charset=UTF-8",
                        data: JSON.stringify(b),
                        error: function() {
                            c.setPrinterConnection("failed");
                            a && (app.router.navigate("settings/printer-connection", {
                                trigger: !0,
                                replace: !0
                            }), noty({
                                text: "Check Connection Settings.",
                                type: "information",
                                timeout: 3E3
                            }))
                        }
                    })) : a && (app.router.navigate("settings/printer-connection", {
                        trigger: !0,
                        replace: !0
                    }), noty({
                        text: "Check Connection Settings.",
                        type: "information",
                        timeout: 3E3
                    }))
                } else "Connecting" != b.current.state ? ("Printing" != b.current.state && "Paused" != b.current.state || app.showPrinting(), c.setPrinterConnection("connected")) : c.setPrinterConnection("blink-animation")
            }
        })
    },
    disconnect: function() {
        $.ajax({
            url: API_BASEURL + "connection",
            type: "POST",
            dataType: "json",
            contentType: "application/json; charset=UTF-8",
            data: JSON.stringify({
                command: "disconnect"
            }),
            success: function(a) {
                self.$el.removeClass("connected")
            }
        })
    },
    setServerConnection: function(a) {
        var c = this.$el.find("i.server"),
            b = "";
        c.removeClass("blink-animation connected failed").addClass(a);
        switch (a) {
            case "blink-animation":
                b = "Connecting to <b>" + ASTROBOX_NAME + "</b>...";
                break;
            case "connected":
                b = "Connected to <b>" + ASTROBOX_NAME +
                    "</b>";
                break;
            case "failed":
                b = "<b>" + ASTROBOX_NAME + "</b> is unreachable"
        }
        c.data("title", b)
    },
    setPrinterConnection: function(a) {
        var c = this.$el.find("i.printer"),
            b = "";
        c.removeClass("blink-animation connected failed").addClass(a);
        switch (a) {
            case "blink-animation":
                b = "Connecting to printer...";
                break;
            case "connected":
                b = "Connected to printer";
                break;
            case "failed":
                b = "The printer is not connected"
        }
        c.data("title", b)
    },
    setAstroprintConnection: function(a) {
        var c = this.$el.find("i.astroprint"),
            b = "";
        c.removeClass("blink-animation connected failed").addClass(a);
        switch (a) {
            case "blink-animation":
                b = "Connecting to the astroprint.com...";
                break;
            case "connected":
                b = "Connected to astroprint.com";
                break;
            case "failed":
                b = "Not connected to astroprint.com"
        }
        c.data("title", b)
    },
    printerTapped: function(a) {
        a.stopPropagation();
        $(a.target).hasClass("failed") && this.connect(!0)
    },
    serverTapped: function(a) {
        a.stopPropagation();
        $(a.target).hasClass("failed") && (this.socketData.reconnect(), this.connect())
    },
    astroprintTapped: function(a) {
        a.stopPropagation();
        var c = $(a.target);
        c.hasClass("failed") &&
            (LOGGED_USER ? (c.addClass("blink-animation"), $.ajax({
                url: API_BASEURL + "boxrouter",
                method: "POST",
                dataType: "json",
                complete: function(a) {
                    c.removeClass("blink-animation")
                }
            })) : $("#login-modal").foundation("reveal", "open"))
    },
    onMouseOver: function(a) {
        if (!$("html").hasClass("touch")) {
            a = $(a.currentTarget);
            this.tooltip || (this.tooltip = $('<div class="tooltip radius"><span class="pip"></span><div class="text"></div></div>'), $("body").append(this.tooltip));
            var c = a.offset(),
                b = $(document).width(),
                e = c.top + a.height() -
                5,
                c = b - (c.left + a.outerWidth() / 2 + 10);
            this.tooltip.css("top", e).css("right", c).css("background", a.css("color")).removeClass("hide").find(".text").html(a.data("title"));
            this.tooltip.find(".pip").css("border-color", "transparent transparent " + a.css("color") + " transparent")
        }
    },
    onMouseOut: function(a) {
        this.tooltip.addClass("hide");
        this.tooltip.find(".text").html("")
    }
});
var TurnoffConfirmationModal = Backbone.View.extend({
        el: "#turnoff-modal",
        turnoffView: null,
        events: {
            "click button.alert": "onConfirm",
            "click button.secondary": "close"
        },
        onConfirm: function() {
            this.$el.foundation("reveal", "close");
            this.turnoffView || (this.turnoffView = new TurnoffView);
            app.router.selectView(this.turnoffView);
            this.turnoffView.doTurnoff()
        },
        open: function() {
            this.$el.foundation("reveal", "open")
        },
        close: function() {
            this.$el.foundation("reveal", "close")
        }
    }),
    TurnoffView = Backbone.View.extend({
        el: "#turnoff-view",
        doTurnoff: function() {
            $.ajax({
                url: API_BASEURL + "system",
                type: "POST",
                data: {
                    action: "shutdown"
                },
                success: _.bind(function() {
                    setTimeout(_.bind(function() {
                        this.$el.addClass("done");
                        this.$el.find(".icon-off").removeClass("blink-animation")
                    }, this), 6E3)
                }, this),
                error: _.bind(function() {
                    this.$el.find(".icon-off").removeClass("blink-animation");
                    noty({
                        text: "There was an error starting turn off sequence.",
                        timeout: 5E3
                    })
                }, this)
            })
        }
    });
var TempBarHorizontalView = TempBarView.extend({
        containerDimensions: null,
        scale: null,
        type: null,
        dragging: !1,
        lastSent: null,
        events: _.extend(TempBarView.prototype.events, {
            click: "onClicked"
        }),
        setHandle: function(a) {
            if (!this.dragging) {
                var c = this._temp2px(a),
                    b = this.$el.find(".temp-target");
                b.find("span.label").text(a);
                b.css({
                    transition: "left 0.5s"
                });
                b.css({
                    left: c + "px"
                });
                setTimeout(function() {
                    b.css({
                        transition: ""
                    })
                }, 800)
            }
        },
        onTouchMove: function(a) {
            if (this.dragging) {
                a.preventDefault();
                a.stopPropagation();
                var c =
                    this.$(".temp-target");
                a = ("mousemove" == a.type ? a.originalEvent.pageX : a.originalEvent.changedTouches[0].clientX) - this.containerDimensions.left - c.innerWidth() / 2;
                a = Math.min(Math.max(a, this.containerDimensions.minLeft), this.containerDimensions.maxLeft);
                c.find("span.label").text(this._px2temp(a));
                c.css({
                    left: a + "px"
                })
            }
        },
        onClicked: function(a) {
            a.preventDefault();
            var c = this.$el.find(".temp-target");
            a = a.pageX - this.containerDimensions.left - c.innerWidth() / 2;
            a = Math.min(Math.max(a, this.containerDimensions.minLeft),
                this.containerDimensions.maxLeft);
            a = this._px2temp(a);
            this.setHandle(a);
            this._sendToolCommand("target", this.type, a)
        },
        onResize: function() {
            var a = this.$el,
                c = a.find(".temp-target"),
                b = a.find(".temp-current"),
                e = a.find("label"),
                d = a.width(),
                c = b.position().left - c.innerWidth(),
                e = e.innerWidth();
            this.containerDimensions = {
                left: a.offset().left,
                width: d,
                maxLeft: c,
                minLeft: e,
                px4degree: (c - e) / (this.scale[1] - this.scale[0])
            }
        },
        renderTemps: function(a, c) {
            var b = this.$el.find(".temp-target"),
                e = b.innerWidth();
            null !== c && c != b.find("span.label").text() &&
                this.setHandle(Math.min(Math.round(c), this.scale[1]));
            null !== a && (this.$el.find(".temp-current").html(Math.round(a) + "&deg;"), this.$el.find(".temp-curret-line").css({
                left: this._temp2px(a) + e / 2 + "px"
            }))
        },
        _temp2px: function(a) {
            return this.containerDimensions.minLeft + a * this.containerDimensions.px4degree
        },
        _px2temp: function(a) {
            return Math.round((a - this.containerDimensions.minLeft) / this.containerDimensions.px4degree)
        }
    }),
    PhotoView = Backbone.View.extend({
        el: "#printing-view .camera-view",
        events: {
            "click button.take-pic": "refreshPhoto",
            "change .timelapse select": "timelapseFreqChanged"
        },
        parent: null,
        print_capture: null,
        photoSeq: 0,
        initialize: function(a) {
            this.parent = a.parent;
            this.listenTo(app.socketData, "change:print_capture", this.onPrintCaptureChanged);
            this.listenTo(app.socketData, "change:printing_progress", this.onPrintingProgressChanged);
            this.listenTo(app.socketData, "change:camera", this.onCameraChanged);
            this.onCameraChanged(app.socketData, app.socketData.get("camera"))
        },
        render: function() {
            var a = this.$(".camera-image"),
                c = null;
            this.print_capture &&
                this.print_capture.last_photo ? c = this.print_capture.last_photo : this.parent.printing_progress && this.parent.printing_progress.rendered_image && (c = this.parent.printing_progress.rendered_image);
            a.attr("src") != c && a.attr("src", c);
            !this.print_capture || this.print_capture.paused && "layer" != this.print_capture.freq ? this.$(".timelapse .dot").removeClass("blink-animation") : this.$(".timelapse .dot").addClass("blink-animation");
            this.parent.paused ? this.$(".timelapse .overlay").show() : this.$(".timelapse .overlay").hide();
            a = 0;
            this.print_capture && (a = this.print_capture.freq);
            this.$(".timelapse select").val(a)
        },
        onCameraChanged: function(a, c) {
            var b = this.$(".camera-controls");
            c ? b.hasClass("hide") && b.removeClass("hide") : b.hasClass("hide") || b.addClass("hide")
        },
        onPrintCaptureChanged: function(a, c) {
            this.print_capture = c;
            this.render()
        },
        onPrintingProgressChanged: function(a, c) {
            !this.$(".camera-image").attr("src") && c && c.rendered_image && setTimeout(_.bind(function() {
                this.render()
            }, this), 1)
        },
        refreshPhoto: function(a) {
            var c = $(a.target).closest(".loading-button");
            a = this.parent.printing_progress;
            c.addClass("loading");
            a = Math.floor(a.percent) + "% - Layer " + (a.current_layer ? a.current_layer : "1") + (a.layer_count ? "/" + a.layer_count : "");
            var b = this.$(".camera-image");
            b.one("load", function() {
                c.removeClass("loading")
            });
            b.one("error", function() {
                c.removeClass("loading");
                $(this).attr("src", null)
            });
            b.attr("src", "/camera/snapshot?text=" + encodeURIComponent(a) + "&seq=" + this.photoSeq++)
        },
        timelapseFreqChanged: function(a) {
            a = $(a.target).val();
            this.print_capture && a == this.print_capture.freq ||
                $.ajax({
                    url: API_BASEURL + "camera/timelapse",
                    type: "POST",
                    dataType: "json",
                    data: {
                        freq: a
                    }
                }).fail(function() {
                    noty({
                        text: "There was an error adjusting your print capture.",
                        timeout: 3E3
                    })
                })
        }
    }),
    PrintingView = Backbone.View.extend({
        el: "#printing-view",
        events: {
            "click button.stop-print": "stopPrint",
            "click button.pause-print": "togglePausePrint",
            "click button.controls": "showControlPage",
            show: "show"
        },
        nozzleBar: null,
        bedBar: null,
        photoView: null,
        printing_progress: null,
        paused: null,
        initialize: function() {
            this.nozzleBar = new TempBarHorizontalView({
                scale: [0,
                    app.printerProfile.get("max_nozzle_temp")
                ],
                el: this.$el.find(".temp-bar.nozzle"),
                type: "tool0"
            });
            this.bedBar = new TempBarHorizontalView({
                scale: [0, app.printerProfile.get("max_bed_temp")],
                el: this.$el.find(".temp-bar.bed"),
                type: "bed"
            });
            this.photoView = new PhotoView({
                parent: this
            });
            this.listenTo(app.socketData, "change:temps", this.onTempsChanged);
            this.listenTo(app.socketData, "change:paused", this.onPausedChanged);
            this.listenTo(app.socketData, "change:printing_progress", this.onProgressChanged)
        },
        render: function() {
            var a =
                this.$(".progress .filename");
            this.printing_progress && (a.text() != this.printing_progress.filename && a.text(this.printing_progress.filename), this.$el.find(".progress .meter").css("width", this.printing_progress.percent + "%"), this.$el.find(".progress .progress-label").text(this.printing_progress.percent + "%"), a = this._formatTime(this.printing_progress.time_left), this.$el.find(".estimated-hours").text(a[0]), this.$el.find(".estimated-minutes").text(a[1]), this.$el.find(".estimated-seconds").text(a[2]), this.$el.find(".current-layer").text(this.printing_progress.current_layer),
                this.printing_progress.layer_count && this.$el.find(".layer-count").text(this.printing_progress.layer_count), this.printing_progress.heating_up ? this.$el.addClass("heating-up") : this.$el.removeClass("heating-up"));
            var a = this.$el.find("button.pause-print"),
                c = this.$el.find("button.controls");
            this.paused ? (a.html('<i class="icon-play"></i> Resume Print'), c.show()) : (a.html('<i class="icon-pause"></i> Pause Print'), c.hide());
            a = app.printerProfile.toJSON();
            this.nozzleBar.setMax(a.max_nozzle_temp);
            a.heated_bed ?
                (this.bedBar.setMax(a.max_bed_temp), this.bedBar.$el.removeClass("hide")) : this.bedBar.$el.addClass("hide")
        },
        onTempsChanged: function(a, c) {
            this.$el.hasClass("hide") || (this.nozzleBar.setTemps(c.extruder.actual, c.extruder.target), this.bedBar.setTemps(c.bed.actual, c.bed.target))
        },
        onProgressChanged: function(a, c) {
            this.printing_progress = c;
            this.render()
        },
        onPausedChanged: function(a, c) {
            this.paused = c;
            this.render();
            this.photoView.render()
        },
        _formatTime: function(a) {
            if (null == a || isNaN(a)) return ["--", "--", "--"];
            a = parseInt(a,
                10);
            var c = Math.floor(a / 3600),
                b = Math.floor((a - 3600 * c) / 60);
            a = a - 3600 * c - 60 * b;
            10 > c && (c = "0" + c);
            10 > b && (b = "0" + b);
            10 > a && (a = "0" + a);
            return [c, b, a]
        },
        show: function() {
            this.nozzleBar.onResize();
            this.bedBar.onResize();
            this.printing_progress = app.socketData.get("printing_progress");
            this.paused = app.socketData.get("paused");
            this.render();
            this.photoView.print_capture = app.socketData.get("print_capture");
            this.photoView.render()
        },
        stopPrint: function(a) {
            var c = $(a.target).closest(".loading-button");
            c.addClass("loading");
            this._jobCommand("cancel",
                _.bind(function(a) {
                    a && _.has(a, "error") ? console.error(a.error) : app.socketData.set({
                        printing: !1,
                        paused: !1
                    });
                    setTimeout(function() {
                        c.removeClass("loading")
                    }, 2E3)
                }, this))
        },
        togglePausePrint: function(a) {
            var c = $(a.target).closest(".loading-button"),
                b = app.socketData.get("paused");
            c.addClass("loading");
            this._jobCommand("pause", _.bind(function(a) {
                a && _.has(a, "error") ? console.error(a.error) : app.socketData.set("paused", !b);
                c.removeClass("loading")
            }, this))
        },
        showControlPage: function() {
            app.router.navigate("control", {
                trigger: !0,
                replace: !0
            });
            this.$el.addClass("hide")
        },
        _jobCommand: function(a, c) {
            $.ajax({
                url: API_BASEURL + "job",
                type: "POST",
                dataType: "json",
                contentType: "application/json; charset=UTF-8",
                data: JSON.stringify({
                    command: a
                })
            }).done(function(a) {
                c && c(a)
            }).fail(function(a) {
                c && c({
                    error: a.responseText
                })
            })
        }
    });
var TerminalView = Backbone.View.extend({
        el: "#terminal-view",
        outputView: null,
        events: {
            "submit form": "onSend",
            show: "onShow",
            hide: "onHide",
            "click button.clear": "onClear",
            "click .alert-box.warning a": "onDismissAlert"
        },
        initialize: function() {
            this.outputView = new OutputView;
            app.eventManager.on("astrobox:commsData", _.bind(function(a) {
                this.outputView.add(a.direction, a.data)
            }, this))
        },
        onClear: function(a) {
            a.preventDefault();
            this.outputView.clear()
        },
        onSend: function(a) {
            a.preventDefault();
            var c = this.$("input"),
                b = c.val();
            if (b) {
                var e = this.$("button.send").closest(".loading-button");
                e.addClass("loading");
                $.ajax({
                    url: API_BASEURL + "printer/comm/send",
                    method: "POST",
                    data: {
                        command: b
                    }
                }).fail(_.bind(function() {
                    e.addClass("error");
                    this.outputView.add("s", b, !0);
                    setTimeout(function() {
                        e.removeClass("error")
                    }, 3E3)
                }, this)).always(function() {
                    e.removeClass("loading");
                    c.val("")
                })
            }
            return !1
        },
        onShow: function() {
            this.$("input").focus();
            $.ajax({
                url: API_BASEURL + "printer/comm/listen",
                method: "POST"
            })
        },
        onHide: function() {
            $.ajax({
                url: API_BASEURL +
                    "printer/comm/listen",
                method: "DELETE"
            })
        },
        onDismissAlert: function(a) {
            a.preventDefault();
            this.$(".alert-box.warning").remove()
        }
    }),
    OutputView = Backbone.View.extend({
        el: "#terminal-view .output-container",
        add: function(a, c, b) {
            switch (a) {
                case "s":
                    c = '<div class="sent bold' + (b ? " failed" : "") + '"><i class="icon-' + (b ? "attention" : "angle-right") + '""></i>' + c + (b ? " <small>(failed to sent)</small>" : "") + "</div>";
                    break;
                case "r":
                    c = '<div class="received"><i class="icon-angle-left"></i>' + c + "</div>"
            }
            this.$el.append(c);
            this.$el.scrollTop(this.$el[0].scrollHeight)
        },
        clear: function() {
            this.$el.html("")
        }
    });
var converterView = Backbone.View.extend({
        el: "#converter-view",
        outputView: null,
        events: {
            "submit form": "onSend",
            show: "onShow",
            hide: "onHide",
            "click button.clear": "onClear",
            "click .alert-box.warning a": "onDismissAlert"
        },
        initialize: function() {
            this.outputView = new OutputView;
            app.eventManager.on("astrobox:commsData", _.bind(function(a) {
                this.outputView.add(a.direction, a.data)
            }, this))
        },
        onClear: function(a) {
            a.preventDefault();
            this.outputView.clear()
        },
        onSend: function(a) {
            a.preventDefault();
            var c = this.$("input"),
                b = c.val();
            if (b) {
                var e = this.$("button.send").closest(".loading-button");
                e.addClass("loading");
                $.ajax({
                    url: API_BASEURL + "printer/comm/send",
                    method: "POST",
                    data: {
                        command: b
                    }
                }).fail(_.bind(function() {
                    e.addClass("error");
                    this.outputView.add("s", b, !0);
                    setTimeout(function() {
                        e.removeClass("error")
                    }, 3E3)
                }, this)).always(function() {
                    e.removeClass("loading");
                    c.val("")
                })
            }
            return !1
        },
        onShow: function() {
            this.$("input").focus();
            $.ajax({
                url: API_BASEURL + "printer/comm/listen",
                method: "POST"
            })
        },
        onHide: function() {
            $.ajax({
                url: API_BASEURL +
                    "printer/comm/listen",
                method: "DELETE"
            })
        },
        onDismissAlert: function(a) {
            a.preventDefault();
            this.$(".alert-box.warning").remove()
        }
    }),
    OutputView = Backbone.View.extend({
        el: "#converter-view .output-container",
        add: function(a, c, b) {
            switch (a) {
                case "s":
                    c = '<div class="sent bold' + (b ? " failed" : "") + '"><i class="icon-' + (b ? "attention" : "angle-right") + '""></i>' + c + (b ? " <small>(failed to sent)</small>" : "") + "</div>";
                    break;
                case "r":
                    c = '<div class="received"><i class="icon-angle-left"></i>' + c + "</div>"
            }
            this.$el.append(c);
            this.$el.scrollTop(this.$el[0].scrollHeight)
        },
        clear: function() {
            this.$el.html("")
        }
    });
var browserView = Backbone.View.extend({
        el: "#browser-view",
        outputView: null,
        events: {
            "submit form": "onSend",
            show: "onShow",
            hide: "onHide",
            "click button.clear": "onClear",
            "click .alert-box.warning a": "onDismissAlert"
        },
        initialize: function() {
            this.outputView = new OutputView;
            app.eventManager.on("astrobox:commsData", _.bind(function(a) {
                this.outputView.add(a.direction, a.data)
            }, this))
        },
        onClear: function(a) {
            a.preventDefault();
            this.outputView.clear()
        },
        onSend: function(a) {
            a.preventDefault();
            var c = this.$("input"),
                b = c.val();
            if (b) {
                var e = this.$("button.send").closest(".loading-button");
                e.addClass("loading");
                $.ajax({
                    url: API_BASEURL + "printer/comm/send",
                    method: "POST",
                    data: {
                        command: b
                    }
                }).fail(_.bind(function() {
                    e.addClass("error");
                    this.outputView.add("s", b, !0);
                    setTimeout(function() {
                        e.removeClass("error")
                    }, 3E3)
                }, this)).always(function() {
                    e.removeClass("loading");
                    c.val("")
                })
            }
            return !1
        },
        onShow: function() {
            this.$("input").focus();
            $.ajax({
                url: API_BASEURL + "printer/comm/listen",
                method: "POST"
            })
        },
        onHide: function() {
            $.ajax({
                url: API_BASEURL +
                    "printer/comm/listen",
                method: "DELETE"
            })
        },
        onDismissAlert: function(a) {
            a.preventDefault();
            this.$(".alert-box.warning").remove()
        }
    }),
    OutputView = Backbone.View.extend({
        el: "#browser-view .output-container",
        add: function(a, c, b) {
            switch (a) {
                case "s":
                    c = '<div class="sent bold' + (b ? " failed" : "") + '"><i class="icon-' + (b ? "attention" : "angle-right") + '""></i>' + c + (b ? " <small>(failed to sent)</small>" : "") + "</div>";
                    break;
                case "r":
                    c = '<div class="received"><i class="icon-angle-left"></i>' + c + "</div>"
            }
            this.$el.append(c);
            this.$el.scrollTop(this.$el[0].scrollHeight)
        },
        clear: function() {
            this.$el.html("")
        }
    });
var AppRouter = Backbone.Router.extend({
    homeView: null,
    filesView: null,
    controlView: null,
    settingsView: null,
    printingView: null,
    terminalView: null,
    converterView: null,
    browserView: null,
    routes: {
        "": "home",
        files: "files",
        "file-info/:fileId": "fileInfo",
        control: "control",
        printing: "printing",
        settings: "settings",
        "settings/:page": "settings",
        "gcode-terminal": "terminal",
        "converter": "converter",
        "browser": "browser",
        "*notFound": "notFound"
    },
    turningOff: !1,
    execute: function(a, c) {
        if (a) {
            is_paused = app.socketData.get("paused");
            if (app.socketData.get("printing") || is_paused) {
                if (a != this.printing && (a != this.control ||
                        !is_paused)) {
                    this.navigate("printing", {
                        trigger: !0,
                        replace: !0
                    });
                    return
                }
            } else if (a == this.printing) {
                this.navigate("", {
                    trigger: !0,
                    replace: !0
                });
                return
            }
            a.apply(this, c)
        }
    },
    home: function() {
        this.homeView || (this.homeView = new HomeView({
            forceSync: !1
        }));
        this.selectView(this.homeView);
        app.selectQuickNav("dash")
    },
    files: function() {
        this.filesView || (this.filesView = new FilesView({
            forceSync: !1
        }));
        this.selectView(this.filesView);
        app.selectQuickNav("files")
    },
    fileInfo: function(a) {
        var c = _.bind(function(b) {
                b && this.filesView.fileInfo(a)
            },
            this);
        this.filesView ? this.filesView.printFilesListView.refresh(!0, c) : this.filesView = new FilesView({
            forceSync: !0,
            syncCompleted: c
        });
        this.navigate("files", {
            trigger: !0,
            replace: !0
        })
    },
    control: function() {
        this.controlView || (this.controlView = new ControlView);
        this.selectView(this.controlView);
        app.selectQuickNav("control")
    },
    printing: function() {
        this.printingView || (this.printingView = new PrintingView);
        this.selectView(this.printingView);
        app.$(".quick-nav").hide()
    },
    settings: function(a) {
        this.settingsView || (this.settingsView =
            new SettingsView);
        this.selectView(this.settingsView);
        this.settingsView.menu.changeActive(a || "printer-connection");
        app.selectQuickNav("settings")
    },
    terminal: function() {
        this.terminalView || (this.terminalView = new TerminalView);
        this.selectView(this.terminalView)
    },
    converter: function() {
        this.converterView || (this.converterView = new converterView);
        this.selectView(this.converterView)
    },
    browser: function() {
        this.browserView || (this.browserView = new browserView);
        this.selectView(this.browserView)
    },
    selectView: function(a) {
        var c = app.$el.find(".app-view.active"),
            b = a.$el;
        b.data("fullscreen") && $("#app").addClass("hide");
        c.addClass("hide").removeClass("active");
        b.removeClass("hide").addClass("active");
        c.trigger("hide");
        b.trigger("show");
        "control-view" ==
        a.$el.attr("id") && this.controlView.tempView.resetBars();
        app.selectQuickNav()
    },
    notFound: function() {
        this.navigate("", {
            trigger: !0,
            replace: !0
        })
    }
});
$.ajaxSetup({
    type: "POST",
    cache: !1,
    headers: {
        "X-Api-Key": UI_API_KEY
    }
});
var AppMenu = Backbone.View.extend({
        el: "#main-menu",
        turnOffModal: null,
        events: {
            "click li.logout": "logoutClicked"
        },
        logoutClicked: function(a) {
            a.preventDefault();
            var c = $(a.currentTarget).find(".icon-rocket-spinner");
            c.removeClass("hide");
            $.ajax({
                url: API_BASEURL + "astroprint",
                type: "DELETE",
                success: function() {
                    location.reload()
                },
                complete: function() {
                    c.addClass("hide")
                }
            })
        }
    }),
    AstroBoxApp = Backbone.View.extend({
        el: "body",
        eventManager: null,
        appMenu: null,
        socketData: null,
        utils: null,
        router: null,
        connectionView: null,
        turnOffModal: null,
        printerProfile: null,
        events: {
            "click button.turn-off": "turnOffClicked"
        },
        initialize: function() {
            this.socketData = new SocketData;
            this.appMenu = new AppMenu;
            this.utils = new Utils;
            this.router = new AppRouter;
            this.connectionView = new ConnectionView;
            this.turnOffModal = new TurnoffConfirmationModal;
            this.printerProfile = new PrinterProfile(initial_printer_profile);
            this.eventManager = Backbone.Events;
            this.socketData.connectionView = this.connectionView;
            this.connectionView.socketData = this.socketData;
            this.socketData.connect();
            this.listenTo(this.socketData, "change:printing", this.reportPrintingChange);
            this.listenTo(this.socketData, "change:online", this.onlineStatusChange)
        },
        turnOffClicked: function() {
            this.turnOffModal.open()
        },
        reportPrintingChange: function(a, c) {
            c ? (this.$(".quick-nav").hide(), this.showPrinting()) : (this.socketData.set({
                printing_progress: null,
                print_capture: null
            }, {
                silent: !0
            }), this.$(".tab-bar .left-small").show(), this.$(".quick-nav").show(), this.router.navigate("control", {
                replace: !0,
                trigger: !0
            }))
        },
        selectQuickNav: function(a) {
            var c =
                this.$(".quick-nav");
            c.find("li.active").removeClass("active");
            a && c.find("li." + a).addClass("active")
        },
        onlineStatusChange: function(a, c) {
            c ? this.$("#app").addClass("online").removeClass("offline") : this.$("#app").addClass("offline").removeClass("online")
        },
        showPrinting: function() {
            this.$el.find(".tab-bar .left-small").hide();
            this.router.navigate("printing", {
                replace: !0,
                trigger: !0
            })
        }
    });
app = new AstroBoxApp;
Backbone.history.start();
