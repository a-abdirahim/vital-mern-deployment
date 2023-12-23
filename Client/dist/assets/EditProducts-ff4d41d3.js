import {
  v as ke,
  j as b,
  m as He,
  w as Ie,
  H as Me,
  N as qe,
  Q as oe,
} from "./index-4662ad96.js";
function ye(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ze } = Object.prototype,
  { getPrototypeOf: Y } = Object,
  M = ((e) => (t) => {
    const n = ze.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  A = (e) => ((e = e.toLowerCase()), (t) => M(t) === e),
  q = (e) => (t) => typeof t === e,
  { isArray: C } = Array,
  j = q("undefined");
function Je(e) {
  return (
    e !== null &&
    !j(e) &&
    e.constructor !== null &&
    !j(e.constructor) &&
    S(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Ee = A("ArrayBuffer");
function $e(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Ee(e.buffer)),
    t
  );
}
const Ve = q("string"),
  S = q("function"),
  we = q("number"),
  z = (e) => e !== null && typeof e == "object",
  We = (e) => e === !0 || e === !1,
  L = (e) => {
    if (M(e) !== "object") return !1;
    const t = Y(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Ke = A("Date"),
  ve = A("File"),
  Ge = A("Blob"),
  Xe = A("FileList"),
  Qe = (e) => z(e) && S(e.pipe),
  Ze = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (S(e.append) &&
          ((t = M(e)) === "formdata" ||
            (t === "object" &&
              S(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  Ye = A("URLSearchParams"),
  et = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), C(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let u;
    for (r = 0; r < i; r++) (u = o[r]), t.call(null, e[u], u, e);
  }
}
function be(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const Se = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Re = (e) => !j(e) && e !== Se;
function G() {
  const { caseless: e } = (Re(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && be(t, s)) || s;
      L(t[o]) && L(r)
        ? (t[o] = G(t[o], r))
        : L(r)
        ? (t[o] = G({}, r))
        : C(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && _(arguments[r], n);
  return t;
}
const tt = (e, t, n, { allOwnKeys: r } = {}) => (
    _(
      t,
      (s, o) => {
        n && S(s) ? (e[o] = ye(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  nt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  rt = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  st = (e, t, n, r) => {
    let s, o, i;
    const u = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0));
      e = n !== !1 && Y(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  ot = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  it = (e) => {
    if (!e) return null;
    if (C(e)) return e;
    let t = e.length;
    if (!we(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  at = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Y(Uint8Array)),
  ct = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  ut = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  lt = A("HTMLFormElement"),
  ft = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  ie = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  dt = A("RegExp"),
  Oe = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    _(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  pt = (e) => {
    Oe(e, (t, n) => {
      if (S(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (S(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  ht = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return C(e) ? r(e) : r(String(e).split(t)), n;
  },
  mt = () => {},
  yt = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  V = "abcdefghijklmnopqrstuvwxyz",
  ae = "0123456789",
  Ae = { DIGIT: ae, ALPHA: V, ALPHA_DIGIT: V + V.toUpperCase() + ae },
  Et = (e = 16, t = Ae.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function wt(e) {
  return !!(
    e &&
    S(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const bt = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (z(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = C(r) ? [] : {};
            return (
              _(r, (i, u) => {
                const d = n(i, s + 1);
                !j(d) && (o[u] = d);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  St = A("AsyncFunction"),
  Rt = (e) => e && (z(e) || S(e)) && S(e.then) && S(e.catch),
  a = {
    isArray: C,
    isArrayBuffer: Ee,
    isBuffer: Je,
    isFormData: Ze,
    isArrayBufferView: $e,
    isString: Ve,
    isNumber: we,
    isBoolean: We,
    isObject: z,
    isPlainObject: L,
    isUndefined: j,
    isDate: Ke,
    isFile: ve,
    isBlob: Ge,
    isRegExp: dt,
    isFunction: S,
    isStream: Qe,
    isURLSearchParams: Ye,
    isTypedArray: at,
    isFileList: Xe,
    forEach: _,
    merge: G,
    extend: tt,
    trim: et,
    stripBOM: nt,
    inherits: rt,
    toFlatObject: st,
    kindOf: M,
    kindOfTest: A,
    endsWith: ot,
    toArray: it,
    forEachEntry: ct,
    matchAll: ut,
    isHTMLForm: lt,
    hasOwnProperty: ie,
    hasOwnProp: ie,
    reduceDescriptors: Oe,
    freezeMethods: pt,
    toObjectSet: ht,
    toCamelCase: ft,
    noop: mt,
    toFiniteNumber: yt,
    findKey: be,
    global: Se,
    isContextDefined: Re,
    ALPHABET: Ae,
    generateString: Et,
    isSpecCompliantForm: wt,
    toJSONObject: bt,
    isAsyncFn: St,
    isThenable: Rt,
  };
function m(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const xe = m.prototype,
  Te = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Te[e] = { value: e };
});
Object.defineProperties(m, Te);
Object.defineProperty(xe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(xe);
  return (
    a.toFlatObject(
      e,
      i,
      function (d) {
        return d !== Error.prototype;
      },
      (u) => u !== "isAxiosError"
    ),
    m.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const Ot = null;
function X(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Ne(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ce(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = Ne(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function At(e) {
  return a.isArray(e) && !e.some(X);
}
const xt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function J(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (h, x) {
        return !a.isUndefined(x[h]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || l,
    o = n.dots,
    i = n.indexes,
    d = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(f) {
    if (f === null) return "";
    if (a.isDate(f)) return f.toISOString();
    if (!d && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f)
      ? d && typeof Blob == "function"
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function l(f, h, x) {
    let R = f;
    if (f && !x && typeof f == "object") {
      if (a.endsWith(h, "{}"))
        (h = r ? h : h.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (a.isArray(f) && At(f)) ||
        ((a.isFileList(f) || a.endsWith(h, "[]")) && (R = a.toArray(f)))
      )
        return (
          (h = Ne(h)),
          R.forEach(function (D, Ue) {
            !(a.isUndefined(D) || D === null) &&
              t.append(
                i === !0 ? ce([h], Ue, o) : i === null ? h : h + "[]",
                c(D)
              );
          }),
          !1
        );
    }
    return X(f) ? !0 : (t.append(ce(x, h, o), c(f)), !1);
  }
  const p = [],
    w = Object.assign(xt, {
      defaultVisitor: l,
      convertValue: c,
      isVisitable: X,
    });
  function y(f, h) {
    if (!a.isUndefined(f)) {
      if (p.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      p.push(f),
        a.forEach(f, function (R, g) {
          (!(a.isUndefined(R) || R === null) &&
            s.call(t, R, a.isString(g) ? g.trim() : g, h, w)) === !0 &&
            y(R, h ? h.concat(g) : [g]);
        }),
        p.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function ue(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function ee(e, t) {
  (this._pairs = []), e && J(e, this, t);
}
const ge = ee.prototype;
ge.append = function (t, n) {
  this._pairs.push([t, n]);
};
ge.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, ue);
      }
    : ue;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Tt(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Pe(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Tt,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new ee(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Nt {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const le = Nt,
  Ce = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  gt = typeof URLSearchParams < "u" ? URLSearchParams : ee,
  Pt = typeof FormData < "u" ? FormData : null,
  Ct = typeof Blob < "u" ? Blob : null,
  Ft = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  jt = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  O = {
    isBrowser: !0,
    classes: { URLSearchParams: gt, FormData: Pt, Blob: Ct },
    isStandardBrowserEnv: Ft,
    isStandardBrowserWebWorkerEnv: jt,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function _t(e, t) {
  return J(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return O.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function Bt(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function Dt(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Fe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const u = Number.isFinite(+i),
      d = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      d
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !u)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Dt(s[i])),
          !u)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(Bt(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function Lt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const te = {
  transitional: Ce,
  adapter: O.isNode ? "http" : "xhr",
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s && s ? JSON.stringify(Fe(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let u;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return _t(t, this.formSerializer).toString();
        if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const d = this.env && this.env.FormData;
          return J(u ? { "files[]": t } : t, d && new d(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType("application/json", !1), Lt(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || te.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (u) {
          if (i)
            throw u.name === "SyntaxError"
              ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response)
              : u;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  te.headers[e] = {};
});
const ne = te,
  Ut = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  kt = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && Ut[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  fe = Symbol("internals");
function F(e) {
  return e && String(e).trim().toLowerCase();
}
function U(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(U) : String(e);
}
function Ht(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const It = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function W(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function Mt(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function qt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class $ {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(u, d, c) {
      const l = F(d);
      if (!l) throw new Error("header name must be a non-empty string");
      const p = a.findKey(s, l);
      (!p || s[p] === void 0 || c === !0 || (c === void 0 && s[p] !== !1)) &&
        (s[p || d] = U(u));
    }
    const i = (u, d) => a.forEach(u, (c, l) => o(c, l, d));
    return (
      a.isPlainObject(t) || t instanceof this.constructor
        ? i(t, n)
        : a.isString(t) && (t = t.trim()) && !It(t)
        ? i(kt(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = F(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return Ht(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = F(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || W(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = F(i)), i)) {
        const u = a.findKey(r, i);
        u && (!n || W(r, r[u], u, n)) && (delete r[u], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || W(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = U(s)), delete n[o];
          return;
        }
        const u = t ? Mt(o) : String(o).trim();
        u !== o && delete n[o], (n[u] = U(s)), (r[u] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[fe] = this[fe] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const u = F(i);
      r[u] || (qt(s, i), (r[u] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
$.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
a.reduceDescriptors($.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods($);
const T = $;
function K(e, t) {
  const n = this || ne,
    r = t || n,
    s = T.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (u) {
      o = u.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function je(e) {
  return !!(e && e.__CANCEL__);
}
function B(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
a.inherits(B, m, { __CANCEL__: !0 });
function zt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new m(
          "Request failed with status code " + n.status,
          [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const Jt = O.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, s, o, i, u) {
          const d = [];
          d.push(n + "=" + encodeURIComponent(r)),
            a.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()),
            a.isString(o) && d.push("path=" + o),
            a.isString(i) && d.push("domain=" + i),
            u === !0 && d.push("secure"),
            (document.cookie = d.join("; "));
        },
        read: function (n) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5);
        },
      };
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
    })();
function $t(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Vt(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _e(e, t) {
  return e && !$t(t) ? Vt(e, t) : t;
}
const Wt = O.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function s(o) {
        let i = o;
        return (
          t && (n.setAttribute("href", i), (i = n.href)),
          n.setAttribute("href", i),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = s(window.location.href)),
        function (i) {
          const u = a.isString(i) ? s(i) : i;
          return u.protocol === r.protocol && u.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Kt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function vt(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (d) {
      const c = Date.now(),
        l = r[o];
      i || (i = c), (n[s] = d), (r[s] = c);
      let p = o,
        w = 0;
      for (; p !== s; ) (w += n[p++]), (p = p % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), c - i < t)) return;
      const y = l && c - l;
      return y ? Math.round((w * 1e3) / y) : void 0;
    }
  );
}
function de(e, t) {
  let n = 0;
  const r = vt(50, 250);
  return (s) => {
    const o = s.loaded,
      i = s.lengthComputable ? s.total : void 0,
      u = o - n,
      d = r(u),
      c = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: d || void 0,
      estimated: d && i && c ? (i - o) / d : void 0,
      event: s,
    };
    (l[t ? "download" : "upload"] = !0), e(l);
  };
}
const Gt = typeof XMLHttpRequest < "u",
  Xt =
    Gt &&
    function (e) {
      return new Promise(function (n, r) {
        let s = e.data;
        const o = T.from(e.headers).normalize(),
          i = e.responseType;
        let u;
        function d() {
          e.cancelToken && e.cancelToken.unsubscribe(u),
            e.signal && e.signal.removeEventListener("abort", u);
        }
        a.isFormData(s) &&
          (O.isStandardBrowserEnv || O.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.setContentType("multipart/form-data;", !1));
        let c = new XMLHttpRequest();
        if (e.auth) {
          const y = e.auth.username || "",
            f = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(y + ":" + f));
        }
        const l = _e(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Pe(l, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function p() {
          if (!c) return;
          const y = T.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            h = {
              data:
                !i || i === "text" || i === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: y,
              config: e,
              request: c,
            };
          zt(
            function (R) {
              n(R), d();
            },
            function (R) {
              r(R), d();
            },
            h
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = p)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(p);
              }),
          (c.onabort = function () {
            c &&
              (r(new m("Request aborted", m.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new m("Network Error", m.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let f = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const h = e.transitional || Ce;
            e.timeoutErrorMessage && (f = e.timeoutErrorMessage),
              r(
                new m(
                  f,
                  h.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          O.isStandardBrowserEnv)
        ) {
          const y =
            (e.withCredentials || Wt(l)) &&
            e.xsrfCookieName &&
            Jt.read(e.xsrfCookieName);
          y && o.set(e.xsrfHeaderName, y);
        }
        s === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            a.forEach(o.toJSON(), function (f, h) {
              c.setRequestHeader(h, f);
            }),
          a.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          i && i !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", de(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", de(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (y) => {
              c &&
                (r(!y || y.type ? new B(null, e, c) : y),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal &&
              (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
        const w = Kt(l);
        if (w && O.protocols.indexOf(w) === -1) {
          r(new m("Unsupported protocol " + w + ":", m.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(s || null);
      });
    },
  k = { http: Ot, xhr: Xt };
a.forEach(k, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Be = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let s = 0;
      s < t && ((n = e[s]), !(r = a.isString(n) ? k[n.toLowerCase()] : n));
      s++
    );
    if (!r)
      throw r === !1
        ? new m(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            a.hasOwnProp(k, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!a.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: k,
};
function v(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new B(null, e);
}
function pe(e) {
  return (
    v(e),
    (e.headers = T.from(e.headers)),
    (e.data = K.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Be.getAdapter(e.adapter || ne.adapter)(e).then(
      function (r) {
        return (
          v(e),
          (r.data = K.call(e, e.transformResponse, r)),
          (r.headers = T.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          je(r) ||
            (v(e),
            r &&
              r.response &&
              ((r.response.data = K.call(e, e.transformResponse, r.response)),
              (r.response.headers = T.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const he = (e) => (e instanceof T ? e.toJSON() : e);
function P(e, t) {
  t = t || {};
  const n = {};
  function r(c, l, p) {
    return a.isPlainObject(c) && a.isPlainObject(l)
      ? a.merge.call({ caseless: p }, c, l)
      : a.isPlainObject(l)
      ? a.merge({}, l)
      : a.isArray(l)
      ? l.slice()
      : l;
  }
  function s(c, l, p) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c)) return r(void 0, c, p);
    } else return r(c, l, p);
  }
  function o(c, l) {
    if (!a.isUndefined(l)) return r(void 0, l);
  }
  function i(c, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, l);
  }
  function u(c, l, p) {
    if (p in t) return r(c, l);
    if (p in e) return r(void 0, c);
  }
  const d = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (c, l) => s(he(c), he(l), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      const p = d[l] || s,
        w = p(e[l], t[l], l);
      (a.isUndefined(w) && p !== u) || (n[l] = w);
    }),
    n
  );
}
const De = "1.5.0",
  re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    re[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const me = {};
re.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      De +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, u) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return (
      n &&
        !me[i] &&
        ((me[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, u) : !0
    );
  };
};
function Qt(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const u = e[o],
        d = u === void 0 || i(u, o, e);
      if (d !== !0)
        throw new m("option " + o + " must be " + d, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const Q = { assertOptions: Qt, validators: re },
  N = Q.validators;
class I {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new le(), response: new le() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = P(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      Q.assertOptions(
        r,
        {
          silentJSONParsing: N.transitional(N.boolean),
          forcedJSONParsing: N.transitional(N.boolean),
          clarifyTimeoutError: N.transitional(N.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Q.assertOptions(
              s,
              { encode: N.function, serialize: N.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (f) => {
          delete o[f];
        }
      ),
      (n.headers = T.concat(i, o));
    const u = [];
    let d = !0;
    this.interceptors.request.forEach(function (h) {
      (typeof h.runWhen == "function" && h.runWhen(n) === !1) ||
        ((d = d && h.synchronous), u.unshift(h.fulfilled, h.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (h) {
      c.push(h.fulfilled, h.rejected);
    });
    let l,
      p = 0,
      w;
    if (!d) {
      const f = [pe.bind(this), void 0];
      for (
        f.unshift.apply(f, u),
          f.push.apply(f, c),
          w = f.length,
          l = Promise.resolve(n);
        p < w;

      )
        l = l.then(f[p++], f[p++]);
      return l;
    }
    w = u.length;
    let y = n;
    for (p = 0; p < w; ) {
      const f = u[p++],
        h = u[p++];
      try {
        y = f(y);
      } catch (x) {
        h.call(this, x);
        break;
      }
    }
    try {
      l = pe.call(this, y);
    } catch (f) {
      return Promise.reject(f);
    }
    for (p = 0, w = c.length; p < w; ) l = l.then(c[p++], c[p++]);
    return l;
  }
  getUri(t) {
    t = P(this.defaults, t);
    const n = _e(t.baseURL, t.url);
    return Pe(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  I.prototype[t] = function (n, r) {
    return this.request(
      P(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, u) {
      return this.request(
        P(u || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (I.prototype[t] = n()), (I.prototype[t + "Form"] = n(!0));
});
const H = I;
class se {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((u) => {
          r.subscribe(u), (o = u);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, u) {
        r.reason || ((r.reason = new B(o, i, u)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new se(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
const Zt = se;
function Yt(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function en(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Z = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Z).forEach(([e, t]) => {
  Z[t] = e;
});
const tn = Z;
function Le(e) {
  const t = new H(e),
    n = ye(H.prototype.request, t);
  return (
    a.extend(n, H.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Le(P(e, s));
    }),
    n
  );
}
const E = Le(ne);
E.Axios = H;
E.CanceledError = B;
E.CancelToken = Zt;
E.isCancel = je;
E.VERSION = De;
E.toFormData = J;
E.AxiosError = m;
E.Cancel = E.CanceledError;
E.all = function (t) {
  return Promise.all(t);
};
E.spread = Yt;
E.isAxiosError = en;
E.mergeConfig = P;
E.AxiosHeaders = T;
E.formToJSON = (e) => Fe(a.isHTMLForm(e) ? new FormData(e) : e);
E.getAdapter = Be.getAdapter;
E.HttpStatusCode = tn;
E.default = E;
const nn = E;
const sn = () => {
  const { data: e } = ke("product-loader"),
    { products: t } = e,
    n = t,
    r = (s) => {
      nn.delete("https://rich-tan-barnacle-tam.cyclic.app/oducts/" + s)
        .then(() => {
          oe.success("product deleted succesfully"),
            setTimeout(() => {
              window.location.reload();
            }, 3e3);
        })
        .catch((o) => {
          console.log(o), oe.error("an error eccoured");
        });
    };
  return b.jsxs("div", {
    className: "edit-container",
    children: [
      b.jsx(He, {}),
      b.jsxs("div", {
        className: "search-container",
        children: [
          b.jsx("input", { type: "text", className: "search-bar" }),
          b.jsx(Ie, { className: "search-icon" }),
        ],
      }),
      n.length < 1 &&
        b.jsx("p", {
          style: { textAlign: "center" },
          children: "No Products Available 😥",
        }),
      n.map((s) =>
        b.jsxs(
          "div",
          {
            className: "product-container",
            children: [
              b.jsxs("div", {
                className: "product-details",
                children: [
                  b.jsx("img", {
                    src: `http://127.0.0.1:3000//public/uploads/products/${s.productImage}`,
                    alt: "product image",
                  }),
                  b.jsxs("div", {
                    className: "product-info",
                    children: [
                      b.jsx("p", { children: s.name }),
                      b.jsx("p", { children: Me(s.description) }),
                    ],
                  }),
                ],
              }),
              b.jsxs("div", {
                className: "btn-container",
                children: [
                  b.jsx(qe, {
                    to: `/admin/edit/${s._id}`,
                    state: { product: s },
                    children: b.jsx("button", { children: "Edit" }),
                  }),
                  b.jsx("button", {
                    onClick: () => r(s._id),
                    children: "delete",
                  }),
                ],
              }),
            ],
          },
          s._id
        )
      ),
    ],
  });
};
export { sn as default };
