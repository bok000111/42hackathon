function jy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function jh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ni = {},
  Vy = {
    get exports() {
      return ni;
    },
    set exports(e) {
      ni = e;
    },
  },
  Rl = {},
  U = {},
  Wy = {
    get exports() {
      return U;
    },
    set exports(e) {
      U = e;
    },
  },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ai = Symbol.for("react.element"),
  Hy = Symbol.for("react.portal"),
  Gy = Symbol.for("react.fragment"),
  Ky = Symbol.for("react.strict_mode"),
  Qy = Symbol.for("react.profiler"),
  Yy = Symbol.for("react.provider"),
  Zy = Symbol.for("react.context"),
  qy = Symbol.for("react.forward_ref"),
  Xy = Symbol.for("react.suspense"),
  Jy = Symbol.for("react.memo"),
  e1 = Symbol.for("react.lazy"),
  _f = Symbol.iterator;
function t1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_f && e[_f]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Vh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wh = Object.assign,
  Hh = {};
function uo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hh),
    (this.updater = n || Vh);
}
uo.prototype.isReactComponent = {};
uo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
uo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gh() {}
Gh.prototype = uo.prototype;
function zc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hh),
    (this.updater = n || Vh);
}
var Uc = (zc.prototype = new Gh());
Uc.constructor = zc;
Wh(Uc, uo.prototype);
Uc.isPureReactComponent = !0;
var xf = Array.isArray,
  Kh = Object.prototype.hasOwnProperty,
  Bc = { current: null },
  Qh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yh(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Kh.call(t, r) && !Qh.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Ai,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Bc.current,
  };
}
function n1(e, t) {
  return {
    $$typeof: Ai,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Fc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ai;
}
function r1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var kf = /\/+/g;
function As(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? r1("" + e.key)
    : t.toString(36);
}
function ka(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ai:
          case Hy:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + As(a, 0) : r),
      xf(o)
        ? ((n = ""),
          e != null && (n = e.replace(kf, "$&/") + "/"),
          ka(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Fc(o) &&
            (o = n1(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(kf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), xf(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + As(i, l);
      a += ka(i, t, n, s, o);
    }
  else if (((s = t1(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + As(i, l++)), (a += ka(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Yi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    ka(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function o1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ht = { current: null },
  Ea = { transition: null },
  i1 = {
    ReactCurrentDispatcher: ht,
    ReactCurrentBatchConfig: Ea,
    ReactCurrentOwner: Bc,
  };
de.Children = {
  map: Yi,
  forEach: function (e, t, n) {
    Yi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Yi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Fc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
de.Component = uo;
de.Fragment = Gy;
de.Profiler = Qy;
de.PureComponent = zc;
de.StrictMode = Ky;
de.Suspense = Xy;
de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i1;
de.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Wh({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Bc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      Kh.call(t, s) &&
        !Qh.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ai, type: e.type, key: o, ref: i, props: r, _owner: a };
};
de.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yy, _context: e }),
    (e.Consumer = e)
  );
};
de.createElement = Yh;
de.createFactory = function (e) {
  var t = Yh.bind(null, e);
  return (t.type = e), t;
};
de.createRef = function () {
  return { current: null };
};
de.forwardRef = function (e) {
  return { $$typeof: qy, render: e };
};
de.isValidElement = Fc;
de.lazy = function (e) {
  return { $$typeof: e1, _payload: { _status: -1, _result: e }, _init: o1 };
};
de.memo = function (e, t) {
  return { $$typeof: Jy, type: e, compare: t === void 0 ? null : t };
};
de.startTransition = function (e) {
  var t = Ea.transition;
  Ea.transition = {};
  try {
    e();
  } finally {
    Ea.transition = t;
  }
};
de.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
de.useCallback = function (e, t) {
  return ht.current.useCallback(e, t);
};
de.useContext = function (e) {
  return ht.current.useContext(e);
};
de.useDebugValue = function () {};
de.useDeferredValue = function (e) {
  return ht.current.useDeferredValue(e);
};
de.useEffect = function (e, t) {
  return ht.current.useEffect(e, t);
};
de.useId = function () {
  return ht.current.useId();
};
de.useImperativeHandle = function (e, t, n) {
  return ht.current.useImperativeHandle(e, t, n);
};
de.useInsertionEffect = function (e, t) {
  return ht.current.useInsertionEffect(e, t);
};
de.useLayoutEffect = function (e, t) {
  return ht.current.useLayoutEffect(e, t);
};
de.useMemo = function (e, t) {
  return ht.current.useMemo(e, t);
};
de.useReducer = function (e, t, n) {
  return ht.current.useReducer(e, t, n);
};
de.useRef = function (e) {
  return ht.current.useRef(e);
};
de.useState = function (e) {
  return ht.current.useState(e);
};
de.useSyncExternalStore = function (e, t, n) {
  return ht.current.useSyncExternalStore(e, t, n);
};
de.useTransition = function () {
  return ht.current.useTransition();
};
de.version = "18.2.0";
(function (e) {
  e.exports = de;
})(Wy);
const Se = jh(U),
  ri = jy({ __proto__: null, default: Se }, [U]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var a1 = U,
  l1 = Symbol.for("react.element"),
  s1 = Symbol.for("react.fragment"),
  u1 = Object.prototype.hasOwnProperty,
  c1 = a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  d1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zh(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) u1.call(t, r) && !d1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: l1,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: c1.current,
  };
}
Rl.Fragment = s1;
Rl.jsx = Zh;
Rl.jsxs = Zh;
(function (e) {
  e.exports = Rl;
})(Vy);
const jc = ni.Fragment,
  C = ni.jsx,
  Q = ni.jsxs;
var yu = {},
  Wa = {},
  f1 = {
    get exports() {
      return Wa;
    },
    set exports(e) {
      Wa = e;
    },
  },
  Lt = {},
  Su = {},
  p1 = {
    get exports() {
      return Su;
    },
    set exports(e) {
      Su = e;
    },
  },
  qh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, Z) {
    var X = z.length;
    z.push(Z);
    e: for (; 0 < X; ) {
      var fe = (X - 1) >>> 1,
        y = z[fe];
      if (0 < o(y, Z)) (z[fe] = Z), (z[X] = y), (X = fe);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var Z = z[0],
      X = z.pop();
    if (X !== Z) {
      z[0] = X;
      e: for (var fe = 0, y = z.length, k = y >>> 1; fe < k; ) {
        var E = 2 * (fe + 1) - 1,
          M = z[E],
          S = E + 1,
          F = z[S];
        if (0 > o(M, X))
          S < y && 0 > o(F, M)
            ? ((z[fe] = F), (z[S] = X), (fe = S))
            : ((z[fe] = M), (z[E] = X), (fe = E));
        else if (S < y && 0 > o(F, X)) (z[fe] = F), (z[S] = X), (fe = S);
        else break e;
      }
    }
    return Z;
  }
  function o(z, Z) {
    var X = z.sortIndex - Z.sortIndex;
    return X !== 0 ? X : z.id - Z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    d = null,
    g = 3,
    w = !1,
    p = !1,
    m = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(z) {
    for (var Z = n(u); Z !== null; ) {
      if (Z.callback === null) r(u);
      else if (Z.startTime <= z)
        r(u), (Z.sortIndex = Z.expirationTime), t(s, Z);
      else break;
      Z = n(u);
    }
  }
  function _(z) {
    if (((m = !1), v(z), !p))
      if (n(s) !== null) (p = !0), Ue(T);
      else {
        var Z = n(u);
        Z !== null && xe(_, Z.startTime - z);
      }
  }
  function T(z, Z) {
    (p = !1), m && ((m = !1), h(O), (O = -1)), (w = !0);
    var X = g;
    try {
      for (
        v(Z), d = n(s);
        d !== null && (!(d.expirationTime > Z) || (z && !Me()));

      ) {
        var fe = d.callback;
        if (typeof fe == "function") {
          (d.callback = null), (g = d.priorityLevel);
          var y = fe(d.expirationTime <= Z);
          (Z = e.unstable_now()),
            typeof y == "function" ? (d.callback = y) : d === n(s) && r(s),
            v(Z);
        } else r(s);
        d = n(s);
      }
      if (d !== null) var k = !0;
      else {
        var E = n(u);
        E !== null && xe(_, E.startTime - Z), (k = !1);
      }
      return k;
    } finally {
      (d = null), (g = X), (w = !1);
    }
  }
  var L = !1,
    N = null,
    O = -1,
    Y = 5,
    H = -1;
  function Me() {
    return !(e.unstable_now() - H < Y);
  }
  function Ie() {
    if (N !== null) {
      var z = e.unstable_now();
      H = z;
      var Z = !0;
      try {
        Z = N(!0, z);
      } finally {
        Z ? ie() : ((L = !1), (N = null));
      }
    } else L = !1;
  }
  var ie;
  if (typeof f == "function")
    ie = function () {
      f(Ie);
    };
  else if (typeof MessageChannel < "u") {
    var pe = new MessageChannel(),
      Ce = pe.port2;
    (pe.port1.onmessage = Ie),
      (ie = function () {
        Ce.postMessage(null);
      });
  } else
    ie = function () {
      b(Ie, 0);
    };
  function Ue(z) {
    (N = z), L || ((L = !0), ie());
  }
  function xe(z, Z) {
    O = b(function () {
      z(e.unstable_now());
    }, Z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      p || w || ((p = !0), Ue(T));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Y = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (z) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = g;
      }
      var X = g;
      g = Z;
      try {
        return z();
      } finally {
        g = X;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (z, Z) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var X = g;
      g = z;
      try {
        return Z();
      } finally {
        g = X;
      }
    }),
    (e.unstable_scheduleCallback = function (z, Z, X) {
      var fe = e.unstable_now();
      switch (
        (typeof X == "object" && X !== null
          ? ((X = X.delay), (X = typeof X == "number" && 0 < X ? fe + X : fe))
          : (X = fe),
        z)
      ) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return (
        (y = X + y),
        (z = {
          id: c++,
          callback: Z,
          priorityLevel: z,
          startTime: X,
          expirationTime: y,
          sortIndex: -1,
        }),
        X > fe
          ? ((z.sortIndex = X),
            t(u, z),
            n(s) === null &&
              z === n(u) &&
              (m ? (h(O), (O = -1)) : (m = !0), xe(_, X - fe)))
          : ((z.sortIndex = y), t(s, z), p || w || ((p = !0), Ue(T))),
        z
      );
    }),
    (e.unstable_shouldYield = Me),
    (e.unstable_wrapCallback = function (z) {
      var Z = g;
      return function () {
        var X = g;
        g = Z;
        try {
          return z.apply(this, arguments);
        } finally {
          g = X;
        }
      };
    });
})(qh);
(function (e) {
  e.exports = qh;
})(p1);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xh = U,
  Nt = Su;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Jh = new Set(),
  oi = {};
function vr(e, t) {
  Gr(e, t), Gr(e + "Capture", t);
}
function Gr(e, t) {
  for (oi[e] = t, e = 0; e < t.length; e++) Jh.add(t[e]);
}
var yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wu = Object.prototype.hasOwnProperty,
  h1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ef = {},
  Rf = {};
function m1(e) {
  return wu.call(Rf, e)
    ? !0
    : wu.call(Ef, e)
    ? !1
    : h1.test(e)
    ? (Rf[e] = !0)
    : ((Ef[e] = !0), !1);
}
function g1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function v1(e, t, n, r) {
  if (t === null || typeof t > "u" || g1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function mt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var at = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    at[e] = new mt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  at[t] = new mt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  at[e] = new mt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  at[e] = new mt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    at[e] = new mt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  at[e] = new mt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  at[e] = new mt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  at[e] = new mt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  at[e] = new mt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vc = /[\-:]([a-z])/g;
function Wc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vc, Wc);
    at[t] = new mt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vc, Wc);
    at[t] = new mt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Vc, Wc);
  at[t] = new mt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  at[e] = new mt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
at.xlinkHref = new mt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  at[e] = new mt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Hc(e, t, n, r) {
  var o = at.hasOwnProperty(t) ? at[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (v1(t, n, o, r) && (n = null),
    r || o === null
      ? m1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xn = Xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Zi = Symbol.for("react.element"),
  Rr = Symbol.for("react.portal"),
  Cr = Symbol.for("react.fragment"),
  Gc = Symbol.for("react.strict_mode"),
  _u = Symbol.for("react.profiler"),
  em = Symbol.for("react.provider"),
  tm = Symbol.for("react.context"),
  Kc = Symbol.for("react.forward_ref"),
  xu = Symbol.for("react.suspense"),
  ku = Symbol.for("react.suspense_list"),
  Qc = Symbol.for("react.memo"),
  Tn = Symbol.for("react.lazy"),
  nm = Symbol.for("react.offscreen"),
  Cf = Symbol.iterator;
function ko(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cf && e[Cf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ze = Object.assign,
  Ns;
function zo(e) {
  if (Ns === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ns = (t && t[1]) || "";
    }
  return (
    `
` +
    Ns +
    e
  );
}
var Ls = !1;
function Ps(e, t) {
  if (!e || Ls) return "";
  Ls = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var s =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    (Ls = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zo(e) : "";
}
function y1(e) {
  switch (e.tag) {
    case 5:
      return zo(e.type);
    case 16:
      return zo("Lazy");
    case 13:
      return zo("Suspense");
    case 19:
      return zo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ps(e.type, !1)), e;
    case 11:
      return (e = Ps(e.type.render, !1)), e;
    case 1:
      return (e = Ps(e.type, !0)), e;
    default:
      return "";
  }
}
function Eu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Cr:
      return "Fragment";
    case Rr:
      return "Portal";
    case _u:
      return "Profiler";
    case Gc:
      return "StrictMode";
    case xu:
      return "Suspense";
    case ku:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case tm:
        return (e.displayName || "Context") + ".Consumer";
      case em:
        return (e._context.displayName || "Context") + ".Provider";
      case Kc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Qc:
        return (
          (t = e.displayName || null), t !== null ? t : Eu(e.type) || "Memo"
        );
      case Tn:
        (t = e._payload), (e = e._init);
        try {
          return Eu(e(t));
        } catch {}
    }
  return null;
}
function S1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Eu(t);
    case 8:
      return t === Gc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Hn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function rm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function w1(e) {
  var t = rm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function qi(e) {
  e._valueTracker || (e._valueTracker = w1(e));
}
function om(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = rm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ha(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ru(e, t) {
  var n = t.checked;
  return ze({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function bf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function im(e, t) {
  (t = t.checked), t != null && Hc(e, "checked", t, !1);
}
function Cu(e, t) {
  im(e, t);
  var n = Hn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? bu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && bu(e, t.type, Hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Tf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function bu(e, t, n) {
  (t !== "number" || Ha(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Uo = Array.isArray;
function zr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Hn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Tu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return ze({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Af(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (Uo(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Hn(n) };
}
function am(e, t) {
  var n = Hn(t.value),
    r = Hn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Nf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function lm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Au(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? lm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Xi,
  sm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Xi = Xi || document.createElement("div"),
          Xi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Xi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ii(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vo).forEach(function (e) {
  _1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vo[t] = Vo[e]);
  });
});
function um(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vo.hasOwnProperty(e) && Vo[e])
    ? ("" + t).trim()
    : t + "px";
}
function cm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = um(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var x1 = ze(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Nu(e, t) {
  if (t) {
    if (x1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function Lu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Pu = null;
function Yc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var $u = null,
  Ur = null,
  Br = null;
function Lf(e) {
  if ((e = Pi(e))) {
    if (typeof $u != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), $u(e.stateNode, e.type, t));
  }
}
function dm(e) {
  Ur ? (Br ? Br.push(e) : (Br = [e])) : (Ur = e);
}
function fm() {
  if (Ur) {
    var e = Ur,
      t = Br;
    if (((Br = Ur = null), Lf(e), t)) for (e = 0; e < t.length; e++) Lf(t[e]);
  }
}
function pm(e, t) {
  return e(t);
}
function hm() {}
var $s = !1;
function mm(e, t, n) {
  if ($s) return e(t, n);
  $s = !0;
  try {
    return pm(e, t, n);
  } finally {
    ($s = !1), (Ur !== null || Br !== null) && (hm(), fm());
  }
}
function ai(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Mu = !1;
if (yn)
  try {
    var Eo = {};
    Object.defineProperty(Eo, "passive", {
      get: function () {
        Mu = !0;
      },
    }),
      window.addEventListener("test", Eo, Eo),
      window.removeEventListener("test", Eo, Eo);
  } catch {
    Mu = !1;
  }
function k1(e, t, n, r, o, i, a, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Wo = !1,
  Ga = null,
  Ka = !1,
  Iu = null,
  E1 = {
    onError: function (e) {
      (Wo = !0), (Ga = e);
    },
  };
function R1(e, t, n, r, o, i, a, l, s) {
  (Wo = !1), (Ga = null), k1.apply(E1, arguments);
}
function C1(e, t, n, r, o, i, a, l, s) {
  if ((R1.apply(this, arguments), Wo)) {
    if (Wo) {
      var u = Ga;
      (Wo = !1), (Ga = null);
    } else throw Error(D(198));
    Ka || ((Ka = !0), (Iu = u));
  }
}
function yr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Pf(e) {
  if (yr(e) !== e) throw Error(D(188));
}
function b1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yr(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Pf(o), e;
        if (i === r) return Pf(o), t;
        i = i.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function vm(e) {
  return (e = b1(e)), e !== null ? ym(e) : null;
}
function ym(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ym(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sm = Nt.unstable_scheduleCallback,
  $f = Nt.unstable_cancelCallback,
  T1 = Nt.unstable_shouldYield,
  A1 = Nt.unstable_requestPaint,
  He = Nt.unstable_now,
  N1 = Nt.unstable_getCurrentPriorityLevel,
  Zc = Nt.unstable_ImmediatePriority,
  wm = Nt.unstable_UserBlockingPriority,
  Qa = Nt.unstable_NormalPriority,
  L1 = Nt.unstable_LowPriority,
  _m = Nt.unstable_IdlePriority,
  Cl = null,
  an = null;
function P1(e) {
  if (an && typeof an.onCommitFiberRoot == "function")
    try {
      an.onCommitFiberRoot(Cl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Qt = Math.clz32 ? Math.clz32 : I1,
  $1 = Math.log,
  M1 = Math.LN2;
function I1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($1(e) / M1) | 0)) | 0;
}
var Ji = 64,
  ea = 4194304;
function Bo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ya(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = Bo(l)) : ((i &= a), i !== 0 && (r = Bo(i)));
  } else (a = n & ~o), a !== 0 ? (r = Bo(a)) : i !== 0 && (r = Bo(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Qt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function O1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function D1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - Qt(i),
      l = 1 << a,
      s = o[a];
    s === -1
      ? (!(l & n) || l & r) && (o[a] = O1(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Ou(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xm() {
  var e = Ji;
  return (Ji <<= 1), !(Ji & 4194240) && (Ji = 64), e;
}
function Ms(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ni(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Qt(t)),
    (e[t] = n);
}
function z1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Qt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function qc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Qt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var we = 0;
function km(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Em,
  Xc,
  Rm,
  Cm,
  bm,
  Du = !1,
  ta = [],
  On = null,
  Dn = null,
  zn = null,
  li = new Map(),
  si = new Map(),
  Ln = [],
  U1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Mf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      On = null;
      break;
    case "dragenter":
    case "dragleave":
      Dn = null;
      break;
    case "mouseover":
    case "mouseout":
      zn = null;
      break;
    case "pointerover":
    case "pointerout":
      li.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      si.delete(t.pointerId);
  }
}
function Ro(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Pi(t)), t !== null && Xc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function B1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (On = Ro(On, e, t, n, r, o)), !0;
    case "dragenter":
      return (Dn = Ro(Dn, e, t, n, r, o)), !0;
    case "mouseover":
      return (zn = Ro(zn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return li.set(i, Ro(li.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), si.set(i, Ro(si.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Tm(e) {
  var t = or(e.target);
  if (t !== null) {
    var n = yr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gm(n)), t !== null)) {
          (e.blockedOn = t),
            bm(e.priority, function () {
              Rm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ra(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Pu = r), n.target.dispatchEvent(r), (Pu = null);
    } else return (t = Pi(n)), t !== null && Xc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function If(e, t, n) {
  Ra(e) && n.delete(t);
}
function F1() {
  (Du = !1),
    On !== null && Ra(On) && (On = null),
    Dn !== null && Ra(Dn) && (Dn = null),
    zn !== null && Ra(zn) && (zn = null),
    li.forEach(If),
    si.forEach(If);
}
function Co(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Du ||
      ((Du = !0),
      Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority, F1)));
}
function ui(e) {
  function t(o) {
    return Co(o, e);
  }
  if (0 < ta.length) {
    Co(ta[0], e);
    for (var n = 1; n < ta.length; n++) {
      var r = ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    On !== null && Co(On, e),
      Dn !== null && Co(Dn, e),
      zn !== null && Co(zn, e),
      li.forEach(t),
      si.forEach(t),
      n = 0;
    n < Ln.length;
    n++
  )
    (r = Ln[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ln.length && ((n = Ln[0]), n.blockedOn === null); )
    Tm(n), n.blockedOn === null && Ln.shift();
}
var Fr = xn.ReactCurrentBatchConfig,
  Za = !0;
function j1(e, t, n, r) {
  var o = we,
    i = Fr.transition;
  Fr.transition = null;
  try {
    (we = 1), Jc(e, t, n, r);
  } finally {
    (we = o), (Fr.transition = i);
  }
}
function V1(e, t, n, r) {
  var o = we,
    i = Fr.transition;
  Fr.transition = null;
  try {
    (we = 4), Jc(e, t, n, r);
  } finally {
    (we = o), (Fr.transition = i);
  }
}
function Jc(e, t, n, r) {
  if (Za) {
    var o = zu(e, t, n, r);
    if (o === null) Ws(e, t, r, qa, n), Mf(e, r);
    else if (B1(o, e, t, n, r)) r.stopPropagation();
    else if ((Mf(e, r), t & 4 && -1 < U1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Pi(o);
        if (
          (i !== null && Em(i),
          (i = zu(e, t, n, r)),
          i === null && Ws(e, t, r, qa, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ws(e, t, r, null, n);
  }
}
var qa = null;
function zu(e, t, n, r) {
  if (((qa = null), (e = Yc(r)), (e = or(e)), e !== null))
    if (((t = yr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (qa = e), null;
}
function Am(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (N1()) {
        case Zc:
          return 1;
        case wm:
          return 4;
        case Qa:
        case L1:
          return 16;
        case _m:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null,
  ed = null,
  Ca = null;
function Nm() {
  if (Ca) return Ca;
  var e,
    t = ed,
    n = t.length,
    r,
    o = "value" in $n ? $n.value : $n.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (Ca = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ba(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function na() {
  return !0;
}
function Of() {
  return !1;
}
function Pt(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? na
        : Of),
      (this.isPropagationStopped = Of),
      this
    );
  }
  return (
    ze(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = na));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = na));
      },
      persist: function () {},
      isPersistent: na,
    }),
    t
  );
}
var co = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = Pt(co),
  Li = ze({}, co, { view: 0, detail: 0 }),
  W1 = Pt(Li),
  Is,
  Os,
  bo,
  bl = ze({}, Li, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== bo &&
            (bo && e.type === "mousemove"
              ? ((Is = e.screenX - bo.screenX), (Os = e.screenY - bo.screenY))
              : (Os = Is = 0),
            (bo = e)),
          Is);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Os;
    },
  }),
  Df = Pt(bl),
  H1 = ze({}, bl, { dataTransfer: 0 }),
  G1 = Pt(H1),
  K1 = ze({}, Li, { relatedTarget: 0 }),
  Ds = Pt(K1),
  Q1 = ze({}, co, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Y1 = Pt(Q1),
  Z1 = ze({}, co, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  q1 = Pt(Z1),
  X1 = ze({}, co, { data: 0 }),
  zf = Pt(X1),
  J1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  eS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  tS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = tS[e]) ? !!t[e] : !1;
}
function nd() {
  return nS;
}
var rS = ze({}, Li, {
    key: function (e) {
      if (e.key) {
        var t = J1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ba(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? eS[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nd,
    charCode: function (e) {
      return e.type === "keypress" ? ba(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ba(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  oS = Pt(rS),
  iS = ze({}, bl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Uf = Pt(iS),
  aS = ze({}, Li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nd,
  }),
  lS = Pt(aS),
  sS = ze({}, co, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uS = Pt(sS),
  cS = ze({}, bl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  dS = Pt(cS),
  fS = [9, 13, 27, 32],
  rd = yn && "CompositionEvent" in window,
  Ho = null;
yn && "documentMode" in document && (Ho = document.documentMode);
var pS = yn && "TextEvent" in window && !Ho,
  Lm = yn && (!rd || (Ho && 8 < Ho && 11 >= Ho)),
  Bf = String.fromCharCode(32),
  Ff = !1;
function Pm(e, t) {
  switch (e) {
    case "keyup":
      return fS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $m(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var br = !1;
function hS(e, t) {
  switch (e) {
    case "compositionend":
      return $m(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ff = !0), Bf);
    case "textInput":
      return (e = t.data), e === Bf && Ff ? null : e;
    default:
      return null;
  }
}
function mS(e, t) {
  if (br)
    return e === "compositionend" || (!rd && Pm(e, t))
      ? ((e = Nm()), (Ca = ed = $n = null), (br = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var gS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!gS[e.type] : t === "textarea";
}
function Mm(e, t, n, r) {
  dm(r),
    (t = Xa(t, "onChange")),
    0 < t.length &&
      ((n = new td("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Go = null,
  ci = null;
function vS(e) {
  Hm(e, 0);
}
function Tl(e) {
  var t = Nr(e);
  if (om(t)) return e;
}
function yS(e, t) {
  if (e === "change") return t;
}
var Im = !1;
if (yn) {
  var zs;
  if (yn) {
    var Us = "oninput" in document;
    if (!Us) {
      var Vf = document.createElement("div");
      Vf.setAttribute("oninput", "return;"),
        (Us = typeof Vf.oninput == "function");
    }
    zs = Us;
  } else zs = !1;
  Im = zs && (!document.documentMode || 9 < document.documentMode);
}
function Wf() {
  Go && (Go.detachEvent("onpropertychange", Om), (ci = Go = null));
}
function Om(e) {
  if (e.propertyName === "value" && Tl(ci)) {
    var t = [];
    Mm(t, ci, e, Yc(e)), mm(vS, t);
  }
}
function SS(e, t, n) {
  e === "focusin"
    ? (Wf(), (Go = t), (ci = n), Go.attachEvent("onpropertychange", Om))
    : e === "focusout" && Wf();
}
function wS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Tl(ci);
}
function _S(e, t) {
  if (e === "click") return Tl(t);
}
function xS(e, t) {
  if (e === "input" || e === "change") return Tl(t);
}
function kS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Zt = typeof Object.is == "function" ? Object.is : kS;
function di(e, t) {
  if (Zt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!wu.call(t, o) || !Zt(e[o], t[o])) return !1;
  }
  return !0;
}
function Hf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Gf(e, t) {
  var n = Hf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Hf(n);
  }
}
function Dm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Dm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function zm() {
  for (var e = window, t = Ha(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ha(e.document);
  }
  return t;
}
function od(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function ES(e) {
  var t = zm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Dm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && od(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Gf(n, i));
        var a = Gf(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var RS = yn && "documentMode" in document && 11 >= document.documentMode,
  Tr = null,
  Uu = null,
  Ko = null,
  Bu = !1;
function Kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bu ||
    Tr == null ||
    Tr !== Ha(r) ||
    ((r = Tr),
    "selectionStart" in r && od(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ko && di(Ko, r)) ||
      ((Ko = r),
      (r = Xa(Uu, "onSelect")),
      0 < r.length &&
        ((t = new td("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tr))));
}
function ra(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ar = {
    animationend: ra("Animation", "AnimationEnd"),
    animationiteration: ra("Animation", "AnimationIteration"),
    animationstart: ra("Animation", "AnimationStart"),
    transitionend: ra("Transition", "TransitionEnd"),
  },
  Bs = {},
  Um = {};
yn &&
  ((Um = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window || delete Ar.transitionend.transition);
function Al(e) {
  if (Bs[e]) return Bs[e];
  if (!Ar[e]) return e;
  var t = Ar[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Um) return (Bs[e] = t[n]);
  return e;
}
var Bm = Al("animationend"),
  Fm = Al("animationiteration"),
  jm = Al("animationstart"),
  Vm = Al("transitionend"),
  Wm = new Map(),
  Qf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qn(e, t) {
  Wm.set(e, t), vr(t, [e]);
}
for (var Fs = 0; Fs < Qf.length; Fs++) {
  var js = Qf[Fs],
    CS = js.toLowerCase(),
    bS = js[0].toUpperCase() + js.slice(1);
  Qn(CS, "on" + bS);
}
Qn(Bm, "onAnimationEnd");
Qn(Fm, "onAnimationIteration");
Qn(jm, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(Vm, "onTransitionEnd");
Gr("onMouseEnter", ["mouseout", "mouseover"]);
Gr("onMouseLeave", ["mouseout", "mouseover"]);
Gr("onPointerEnter", ["pointerout", "pointerover"]);
Gr("onPointerLeave", ["pointerout", "pointerover"]);
vr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  TS = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));
function Yf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), C1(r, t, void 0, e), (e.currentTarget = null);
}
function Hm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && o.isPropagationStopped())) break e;
          Yf(o, l, u), (i = s);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Yf(o, l, u), (i = s);
        }
    }
  }
  if (Ka) throw ((e = Iu), (Ka = !1), (Iu = null), e);
}
function Te(e, t) {
  var n = t[Hu];
  n === void 0 && (n = t[Hu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gm(t, e, 2, !1), n.add(r));
}
function Vs(e, t, n) {
  var r = 0;
  t && (r |= 4), Gm(n, e, r, t);
}
var oa = "_reactListening" + Math.random().toString(36).slice(2);
function fi(e) {
  if (!e[oa]) {
    (e[oa] = !0),
      Jh.forEach(function (n) {
        n !== "selectionchange" && (TS.has(n) || Vs(n, !1, e), Vs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[oa] || ((t[oa] = !0), Vs("selectionchange", !1, t));
  }
}
function Gm(e, t, n, r) {
  switch (Am(t)) {
    case 1:
      var o = j1;
      break;
    case 4:
      o = V1;
      break;
    default:
      o = Jc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Mu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ws(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var s = a.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = a.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = or(l)), a === null)) return;
          if (((s = a.tag), s === 5 || s === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  mm(function () {
    var u = i,
      c = Yc(n),
      d = [];
    e: {
      var g = Wm.get(e);
      if (g !== void 0) {
        var w = td,
          p = e;
        switch (e) {
          case "keypress":
            if (ba(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = oS;
            break;
          case "focusin":
            (p = "focus"), (w = Ds);
            break;
          case "focusout":
            (p = "blur"), (w = Ds);
            break;
          case "beforeblur":
          case "afterblur":
            w = Ds;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Df;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = G1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = lS;
            break;
          case Bm:
          case Fm:
          case jm:
            w = Y1;
            break;
          case Vm:
            w = uS;
            break;
          case "scroll":
            w = W1;
            break;
          case "wheel":
            w = dS;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = q1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Uf;
        }
        var m = (t & 4) !== 0,
          b = !m && e === "scroll",
          h = m ? (g !== null ? g + "Capture" : null) : g;
        m = [];
        for (var f = u, v; f !== null; ) {
          v = f;
          var _ = v.stateNode;
          if (
            (v.tag === 5 &&
              _ !== null &&
              ((v = _),
              h !== null && ((_ = ai(f, h)), _ != null && m.push(pi(f, _, v)))),
            b)
          )
            break;
          f = f.return;
        }
        0 < m.length &&
          ((g = new w(g, p, null, n, c)), d.push({ event: g, listeners: m }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Pu &&
            (p = n.relatedTarget || n.fromElement) &&
            (or(p) || p[Sn]))
        )
          break e;
        if (
          (w || g) &&
          ((g =
            c.window === c
              ? c
              : (g = c.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          w
            ? ((p = n.relatedTarget || n.toElement),
              (w = u),
              (p = p ? or(p) : null),
              p !== null &&
                ((b = yr(p)), p !== b || (p.tag !== 5 && p.tag !== 6)) &&
                (p = null))
            : ((w = null), (p = u)),
          w !== p)
        ) {
          if (
            ((m = Df),
            (_ = "onMouseLeave"),
            (h = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((m = Uf),
              (_ = "onPointerLeave"),
              (h = "onPointerEnter"),
              (f = "pointer")),
            (b = w == null ? g : Nr(w)),
            (v = p == null ? g : Nr(p)),
            (g = new m(_, f + "leave", w, n, c)),
            (g.target = b),
            (g.relatedTarget = v),
            (_ = null),
            or(c) === u &&
              ((m = new m(h, f + "enter", p, n, c)),
              (m.target = v),
              (m.relatedTarget = b),
              (_ = m)),
            (b = _),
            w && p)
          )
            t: {
              for (m = w, h = p, f = 0, v = m; v; v = kr(v)) f++;
              for (v = 0, _ = h; _; _ = kr(_)) v++;
              for (; 0 < f - v; ) (m = kr(m)), f--;
              for (; 0 < v - f; ) (h = kr(h)), v--;
              for (; f--; ) {
                if (m === h || (h !== null && m === h.alternate)) break t;
                (m = kr(m)), (h = kr(h));
              }
              m = null;
            }
          else m = null;
          w !== null && Zf(d, g, w, m, !1),
            p !== null && b !== null && Zf(d, b, p, m, !0);
        }
      }
      e: {
        if (
          ((g = u ? Nr(u) : window),
          (w = g.nodeName && g.nodeName.toLowerCase()),
          w === "select" || (w === "input" && g.type === "file"))
        )
          var T = yS;
        else if (jf(g))
          if (Im) T = xS;
          else {
            T = wS;
            var L = SS;
          }
        else
          (w = g.nodeName) &&
            w.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (T = _S);
        if (T && (T = T(e, u))) {
          Mm(d, T, n, c);
          break e;
        }
        L && L(e, g, u),
          e === "focusout" &&
            (L = g._wrapperState) &&
            L.controlled &&
            g.type === "number" &&
            bu(g, "number", g.value);
      }
      switch (((L = u ? Nr(u) : window), e)) {
        case "focusin":
          (jf(L) || L.contentEditable === "true") &&
            ((Tr = L), (Uu = u), (Ko = null));
          break;
        case "focusout":
          Ko = Uu = Tr = null;
          break;
        case "mousedown":
          Bu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bu = !1), Kf(d, n, c);
          break;
        case "selectionchange":
          if (RS) break;
        case "keydown":
        case "keyup":
          Kf(d, n, c);
      }
      var N;
      if (rd)
        e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
      else
        br
          ? Pm(e, n) && (O = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
      O &&
        (Lm &&
          n.locale !== "ko" &&
          (br || O !== "onCompositionStart"
            ? O === "onCompositionEnd" && br && (N = Nm())
            : (($n = c),
              (ed = "value" in $n ? $n.value : $n.textContent),
              (br = !0))),
        (L = Xa(u, O)),
        0 < L.length &&
          ((O = new zf(O, e, null, n, c)),
          d.push({ event: O, listeners: L }),
          N ? (O.data = N) : ((N = $m(n)), N !== null && (O.data = N)))),
        (N = pS ? hS(e, n) : mS(e, n)) &&
          ((u = Xa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new zf("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = N)));
    }
    Hm(d, t);
  });
}
function pi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ai(e, n)),
      i != null && r.unshift(pi(e, i, o)),
      (i = ai(e, t)),
      i != null && r.push(pi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function kr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zf(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((s = ai(n, i)), s != null && a.unshift(pi(n, s, l)))
        : o || ((s = ai(n, i)), s != null && a.push(pi(n, s, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var AS = /\r\n?/g,
  NS = /\u0000|\uFFFD/g;
function qf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      AS,
      `
`
    )
    .replace(NS, "");
}
function ia(e, t, n) {
  if (((t = qf(t)), qf(e) !== t && n)) throw Error(D(425));
}
function Ja() {}
var Fu = null,
  ju = null;
function Vu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wu = typeof setTimeout == "function" ? setTimeout : void 0,
  LS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Xf = typeof Promise == "function" ? Promise : void 0,
  PS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Xf < "u"
      ? function (e) {
          return Xf.resolve(null).then(e).catch($S);
        }
      : Wu;
function $S(e) {
  setTimeout(function () {
    throw e;
  });
}
function Hs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ui(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ui(t);
}
function Un(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Jf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fo = Math.random().toString(36).slice(2),
  rn = "__reactFiber$" + fo,
  hi = "__reactProps$" + fo,
  Sn = "__reactContainer$" + fo,
  Hu = "__reactEvents$" + fo,
  MS = "__reactListeners$" + fo,
  IS = "__reactHandles$" + fo;
function or(e) {
  var t = e[rn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Sn] || n[rn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Jf(e); e !== null; ) {
          if ((n = e[rn])) return n;
          e = Jf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Pi(e) {
  return (
    (e = e[rn] || e[Sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function Nl(e) {
  return e[hi] || null;
}
var Gu = [],
  Lr = -1;
function Yn(e) {
  return { current: e };
}
function Ne(e) {
  0 > Lr || ((e.current = Gu[Lr]), (Gu[Lr] = null), Lr--);
}
function Re(e, t) {
  Lr++, (Gu[Lr] = e.current), (e.current = t);
}
var Gn = {},
  dt = Yn(Gn),
  St = Yn(!1),
  cr = Gn;
function Kr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function wt(e) {
  return (e = e.childContextTypes), e != null;
}
function el() {
  Ne(St), Ne(dt);
}
function ep(e, t, n) {
  if (dt.current !== Gn) throw Error(D(168));
  Re(dt, t), Re(St, n);
}
function Km(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(D(108, S1(e) || "Unknown", o));
  return ze({}, n, r);
}
function tl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Gn),
    (cr = dt.current),
    Re(dt, e),
    Re(St, St.current),
    !0
  );
}
function tp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = Km(e, t, cr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ne(St),
      Ne(dt),
      Re(dt, e))
    : Ne(St),
    Re(St, n);
}
var fn = null,
  Ll = !1,
  Gs = !1;
function Qm(e) {
  fn === null ? (fn = [e]) : fn.push(e);
}
function OS(e) {
  (Ll = !0), Qm(e);
}
function Zn() {
  if (!Gs && fn !== null) {
    Gs = !0;
    var e = 0,
      t = we;
    try {
      var n = fn;
      for (we = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (fn = null), (Ll = !1);
    } catch (o) {
      throw (fn !== null && (fn = fn.slice(e + 1)), Sm(Zc, Zn), o);
    } finally {
      (we = t), (Gs = !1);
    }
  }
  return null;
}
var Pr = [],
  $r = 0,
  nl = null,
  rl = 0,
  It = [],
  Ot = 0,
  dr = null,
  pn = 1,
  hn = "";
function tr(e, t) {
  (Pr[$r++] = rl), (Pr[$r++] = nl), (nl = e), (rl = t);
}
function Ym(e, t, n) {
  (It[Ot++] = pn), (It[Ot++] = hn), (It[Ot++] = dr), (dr = e);
  var r = pn;
  e = hn;
  var o = 32 - Qt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - Qt(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (pn = (1 << (32 - Qt(t) + o)) | (n << o) | r),
      (hn = i + e);
  } else (pn = (1 << i) | (n << o) | r), (hn = e);
}
function id(e) {
  e.return !== null && (tr(e, 1), Ym(e, 1, 0));
}
function ad(e) {
  for (; e === nl; )
    (nl = Pr[--$r]), (Pr[$r] = null), (rl = Pr[--$r]), (Pr[$r] = null);
  for (; e === dr; )
    (dr = It[--Ot]),
      (It[Ot] = null),
      (hn = It[--Ot]),
      (It[Ot] = null),
      (pn = It[--Ot]),
      (It[Ot] = null);
}
var Tt = null,
  bt = null,
  Pe = !1,
  Kt = null;
function Zm(e, t) {
  var n = zt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function np(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Tt = e), (bt = Un(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Tt = e), (bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dr !== null ? { id: pn, overflow: hn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = zt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Tt = e),
            (bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ku(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qu(e) {
  if (Pe) {
    var t = bt;
    if (t) {
      var n = t;
      if (!np(e, t)) {
        if (Ku(e)) throw Error(D(418));
        t = Un(n.nextSibling);
        var r = Tt;
        t && np(e, t)
          ? Zm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (Tt = e));
      }
    } else {
      if (Ku(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (Pe = !1), (Tt = e);
    }
  }
}
function rp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Tt = e;
}
function aa(e) {
  if (e !== Tt) return !1;
  if (!Pe) return rp(e), (Pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vu(e.type, e.memoizedProps))),
    t && (t = bt))
  ) {
    if (Ku(e)) throw (qm(), Error(D(418)));
    for (; t; ) Zm(e, t), (t = Un(t.nextSibling));
  }
  if ((rp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              bt = Un(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      bt = null;
    }
  } else bt = Tt ? Un(e.stateNode.nextSibling) : null;
  return !0;
}
function qm() {
  for (var e = bt; e; ) e = Un(e.nextSibling);
}
function Qr() {
  (bt = Tt = null), (Pe = !1);
}
function ld(e) {
  Kt === null ? (Kt = [e]) : Kt.push(e);
}
var DS = xn.ReactCurrentBatchConfig;
function Ht(e, t) {
  if (e && e.defaultProps) {
    (t = ze({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ol = Yn(null),
  il = null,
  Mr = null,
  sd = null;
function ud() {
  sd = Mr = il = null;
}
function cd(e) {
  var t = ol.current;
  Ne(ol), (e._currentValue = t);
}
function Yu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function jr(e, t) {
  (il = e),
    (sd = Mr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (yt = !0), (e.firstContext = null));
}
function Bt(e) {
  var t = e._currentValue;
  if (sd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mr === null)) {
      if (il === null) throw Error(D(308));
      (Mr = e), (il.dependencies = { lanes: 0, firstContext: e });
    } else Mr = Mr.next = e;
  return t;
}
var ir = null;
function dd(e) {
  ir === null ? (ir = [e]) : ir.push(e);
}
function Xm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), dd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    wn(e, r)
  );
}
function wn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var An = !1;
function fd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function gn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Bn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), me & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      wn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), dd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    wn(e, n)
  );
}
function Ta(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qc(e, n);
  }
}
function op(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function al(e, t, n, r) {
  var o = e.updateQueue;
  An = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), a === null ? (i = u) : (a.next = u), (a = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== a &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var d = o.baseState;
    (a = 0), (c = u = s = null), (l = i);
    do {
      var g = l.lane,
        w = l.eventTime;
      if ((r & g) === g) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var p = e,
            m = l;
          switch (((g = t), (w = n), m.tag)) {
            case 1:
              if (((p = m.payload), typeof p == "function")) {
                d = p.call(w, d, g);
                break e;
              }
              d = p;
              break e;
            case 3:
              p.flags = (p.flags & -65537) | 128;
            case 0:
              if (
                ((p = m.payload),
                (g = typeof p == "function" ? p.call(w, d, g) : p),
                g == null)
              )
                break e;
              d = ze({}, d, g);
              break e;
            case 2:
              An = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [l]) : g.push(l));
      } else
        (w = {
          eventTime: w,
          lane: g,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = w), (s = d)) : (c = c.next = w),
          (a |= g);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (g = l),
          (l = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = d),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (pr |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function ip(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(D(191, o));
        o.call(r);
      }
    }
}
var eg = new Xh.Component().refs;
function Zu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ze({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = pt(),
      o = jn(e),
      i = gn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Bn(e, i, o)),
      t !== null && (Yt(t, e, o, r), Ta(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = pt(),
      o = jn(e),
      i = gn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Bn(e, i, o)),
      t !== null && (Yt(t, e, o, r), Ta(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = pt(),
      r = jn(e),
      o = gn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Bn(e, o, r)),
      t !== null && (Yt(t, e, r, n), Ta(t, e, r));
  },
};
function ap(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !di(n, r) || !di(o, i)
      : !0
  );
}
function tg(e, t, n) {
  var r = !1,
    o = Gn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Bt(i))
      : ((o = wt(t) ? cr : dt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Kr(e, o) : Gn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Pl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function lp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function qu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = eg), fd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Bt(i))
    : ((i = wt(t) ? cr : dt.current), (o.context = Kr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Zu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Pl.enqueueReplaceState(o, o.state, null),
      al(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function To(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            l === eg && (l = o.refs = {}),
              a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function la(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sp(e) {
  var t = e._init;
  return t(e._payload);
}
function ng(e) {
  function t(h, f) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [f]), (h.flags |= 16)) : v.push(f);
    }
  }
  function n(h, f) {
    if (!e) return null;
    for (; f !== null; ) t(h, f), (f = f.sibling);
    return null;
  }
  function r(h, f) {
    for (h = new Map(); f !== null; )
      f.key !== null ? h.set(f.key, f) : h.set(f.index, f), (f = f.sibling);
    return h;
  }
  function o(h, f) {
    return (h = Vn(h, f)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, f, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < f ? ((h.flags |= 2), f) : v)
            : ((h.flags |= 2), f))
        : ((h.flags |= 1048576), f)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, f, v, _) {
    return f === null || f.tag !== 6
      ? ((f = Js(v, h.mode, _)), (f.return = h), f)
      : ((f = o(f, v)), (f.return = h), f);
  }
  function s(h, f, v, _) {
    var T = v.type;
    return T === Cr
      ? c(h, f, v.props.children, _, v.key)
      : f !== null &&
        (f.elementType === T ||
          (typeof T == "object" &&
            T !== null &&
            T.$$typeof === Tn &&
            sp(T) === f.type))
      ? ((_ = o(f, v.props)), (_.ref = To(h, f, v)), (_.return = h), _)
      : ((_ = Ma(v.type, v.key, v.props, null, h.mode, _)),
        (_.ref = To(h, f, v)),
        (_.return = h),
        _);
  }
  function u(h, f, v, _) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== v.containerInfo ||
      f.stateNode.implementation !== v.implementation
      ? ((f = eu(v, h.mode, _)), (f.return = h), f)
      : ((f = o(f, v.children || [])), (f.return = h), f);
  }
  function c(h, f, v, _, T) {
    return f === null || f.tag !== 7
      ? ((f = sr(v, h.mode, _, T)), (f.return = h), f)
      : ((f = o(f, v)), (f.return = h), f);
  }
  function d(h, f, v) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Js("" + f, h.mode, v)), (f.return = h), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Zi:
          return (
            (v = Ma(f.type, f.key, f.props, null, h.mode, v)),
            (v.ref = To(h, null, f)),
            (v.return = h),
            v
          );
        case Rr:
          return (f = eu(f, h.mode, v)), (f.return = h), f;
        case Tn:
          var _ = f._init;
          return d(h, _(f._payload), v);
      }
      if (Uo(f) || ko(f))
        return (f = sr(f, h.mode, v, null)), (f.return = h), f;
      la(h, f);
    }
    return null;
  }
  function g(h, f, v, _) {
    var T = f !== null ? f.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return T !== null ? null : l(h, f, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Zi:
          return v.key === T ? s(h, f, v, _) : null;
        case Rr:
          return v.key === T ? u(h, f, v, _) : null;
        case Tn:
          return (T = v._init), g(h, f, T(v._payload), _);
      }
      if (Uo(v) || ko(v)) return T !== null ? null : c(h, f, v, _, null);
      la(h, v);
    }
    return null;
  }
  function w(h, f, v, _, T) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (h = h.get(v) || null), l(f, h, "" + _, T);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Zi:
          return (h = h.get(_.key === null ? v : _.key) || null), s(f, h, _, T);
        case Rr:
          return (h = h.get(_.key === null ? v : _.key) || null), u(f, h, _, T);
        case Tn:
          var L = _._init;
          return w(h, f, v, L(_._payload), T);
      }
      if (Uo(_) || ko(_)) return (h = h.get(v) || null), c(f, h, _, T, null);
      la(f, _);
    }
    return null;
  }
  function p(h, f, v, _) {
    for (
      var T = null, L = null, N = f, O = (f = 0), Y = null;
      N !== null && O < v.length;
      O++
    ) {
      N.index > O ? ((Y = N), (N = null)) : (Y = N.sibling);
      var H = g(h, N, v[O], _);
      if (H === null) {
        N === null && (N = Y);
        break;
      }
      e && N && H.alternate === null && t(h, N),
        (f = i(H, f, O)),
        L === null ? (T = H) : (L.sibling = H),
        (L = H),
        (N = Y);
    }
    if (O === v.length) return n(h, N), Pe && tr(h, O), T;
    if (N === null) {
      for (; O < v.length; O++)
        (N = d(h, v[O], _)),
          N !== null &&
            ((f = i(N, f, O)), L === null ? (T = N) : (L.sibling = N), (L = N));
      return Pe && tr(h, O), T;
    }
    for (N = r(h, N); O < v.length; O++)
      (Y = w(N, h, O, v[O], _)),
        Y !== null &&
          (e && Y.alternate !== null && N.delete(Y.key === null ? O : Y.key),
          (f = i(Y, f, O)),
          L === null ? (T = Y) : (L.sibling = Y),
          (L = Y));
    return (
      e &&
        N.forEach(function (Me) {
          return t(h, Me);
        }),
      Pe && tr(h, O),
      T
    );
  }
  function m(h, f, v, _) {
    var T = ko(v);
    if (typeof T != "function") throw Error(D(150));
    if (((v = T.call(v)), v == null)) throw Error(D(151));
    for (
      var L = (T = null), N = f, O = (f = 0), Y = null, H = v.next();
      N !== null && !H.done;
      O++, H = v.next()
    ) {
      N.index > O ? ((Y = N), (N = null)) : (Y = N.sibling);
      var Me = g(h, N, H.value, _);
      if (Me === null) {
        N === null && (N = Y);
        break;
      }
      e && N && Me.alternate === null && t(h, N),
        (f = i(Me, f, O)),
        L === null ? (T = Me) : (L.sibling = Me),
        (L = Me),
        (N = Y);
    }
    if (H.done) return n(h, N), Pe && tr(h, O), T;
    if (N === null) {
      for (; !H.done; O++, H = v.next())
        (H = d(h, H.value, _)),
          H !== null &&
            ((f = i(H, f, O)), L === null ? (T = H) : (L.sibling = H), (L = H));
      return Pe && tr(h, O), T;
    }
    for (N = r(h, N); !H.done; O++, H = v.next())
      (H = w(N, h, O, H.value, _)),
        H !== null &&
          (e && H.alternate !== null && N.delete(H.key === null ? O : H.key),
          (f = i(H, f, O)),
          L === null ? (T = H) : (L.sibling = H),
          (L = H));
    return (
      e &&
        N.forEach(function (Ie) {
          return t(h, Ie);
        }),
      Pe && tr(h, O),
      T
    );
  }
  function b(h, f, v, _) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Cr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Zi:
          e: {
            for (var T = v.key, L = f; L !== null; ) {
              if (L.key === T) {
                if (((T = v.type), T === Cr)) {
                  if (L.tag === 7) {
                    n(h, L.sibling),
                      (f = o(L, v.props.children)),
                      (f.return = h),
                      (h = f);
                    break e;
                  }
                } else if (
                  L.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === Tn &&
                    sp(T) === L.type)
                ) {
                  n(h, L.sibling),
                    (f = o(L, v.props)),
                    (f.ref = To(h, L, v)),
                    (f.return = h),
                    (h = f);
                  break e;
                }
                n(h, L);
                break;
              } else t(h, L);
              L = L.sibling;
            }
            v.type === Cr
              ? ((f = sr(v.props.children, h.mode, _, v.key)),
                (f.return = h),
                (h = f))
              : ((_ = Ma(v.type, v.key, v.props, null, h.mode, _)),
                (_.ref = To(h, f, v)),
                (_.return = h),
                (h = _));
          }
          return a(h);
        case Rr:
          e: {
            for (L = v.key; f !== null; ) {
              if (f.key === L)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === v.containerInfo &&
                  f.stateNode.implementation === v.implementation
                ) {
                  n(h, f.sibling),
                    (f = o(f, v.children || [])),
                    (f.return = h),
                    (h = f);
                  break e;
                } else {
                  n(h, f);
                  break;
                }
              else t(h, f);
              f = f.sibling;
            }
            (f = eu(v, h.mode, _)), (f.return = h), (h = f);
          }
          return a(h);
        case Tn:
          return (L = v._init), b(h, f, L(v._payload), _);
      }
      if (Uo(v)) return p(h, f, v, _);
      if (ko(v)) return m(h, f, v, _);
      la(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        f !== null && f.tag === 6
          ? (n(h, f.sibling), (f = o(f, v)), (f.return = h), (h = f))
          : (n(h, f), (f = Js(v, h.mode, _)), (f.return = h), (h = f)),
        a(h))
      : n(h, f);
  }
  return b;
}
var Yr = ng(!0),
  rg = ng(!1),
  $i = {},
  ln = Yn($i),
  mi = Yn($i),
  gi = Yn($i);
function ar(e) {
  if (e === $i) throw Error(D(174));
  return e;
}
function pd(e, t) {
  switch ((Re(gi, t), Re(mi, e), Re(ln, $i), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Au(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Au(t, e));
  }
  Ne(ln), Re(ln, t);
}
function Zr() {
  Ne(ln), Ne(mi), Ne(gi);
}
function og(e) {
  ar(gi.current);
  var t = ar(ln.current),
    n = Au(t, e.type);
  t !== n && (Re(mi, e), Re(ln, n));
}
function hd(e) {
  mi.current === e && (Ne(ln), Ne(mi));
}
var Oe = Yn(0);
function ll(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ks = [];
function md() {
  for (var e = 0; e < Ks.length; e++)
    Ks[e]._workInProgressVersionPrimary = null;
  Ks.length = 0;
}
var Aa = xn.ReactCurrentDispatcher,
  Qs = xn.ReactCurrentBatchConfig,
  fr = 0,
  De = null,
  Ye = null,
  Je = null,
  sl = !1,
  Qo = !1,
  vi = 0,
  zS = 0;
function lt() {
  throw Error(D(321));
}
function gd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Zt(e[n], t[n])) return !1;
  return !0;
}
function vd(e, t, n, r, o, i) {
  if (
    ((fr = i),
    (De = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Aa.current = e === null || e.memoizedState === null ? jS : VS),
    (e = n(r, o)),
    Qo)
  ) {
    i = 0;
    do {
      if (((Qo = !1), (vi = 0), 25 <= i)) throw Error(D(301));
      (i += 1),
        (Je = Ye = null),
        (t.updateQueue = null),
        (Aa.current = WS),
        (e = n(r, o));
    } while (Qo);
  }
  if (
    ((Aa.current = ul),
    (t = Ye !== null && Ye.next !== null),
    (fr = 0),
    (Je = Ye = De = null),
    (sl = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function yd() {
  var e = vi !== 0;
  return (vi = 0), e;
}
function en() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Je === null ? (De.memoizedState = Je = e) : (Je = Je.next = e), Je;
}
function Ft() {
  if (Ye === null) {
    var e = De.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ye.next;
  var t = Je === null ? De.memoizedState : Je.next;
  if (t !== null) (Je = t), (Ye = e);
  else {
    if (e === null) throw Error(D(310));
    (Ye = e),
      (e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
        next: null,
      }),
      Je === null ? (De.memoizedState = Je = e) : (Je = Je.next = e);
  }
  return Je;
}
function yi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ys(e) {
  var t = Ft(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Ye,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((fr & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = d), (a = r)) : (s = s.next = d),
          (De.lanes |= c),
          (pr |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (a = r) : (s.next = l),
      Zt(r, t.memoizedState) || (yt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (De.lanes |= i), (pr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zs(e) {
  var t = Ft(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    Zt(i, t.memoizedState) || (yt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ig() {}
function ag(e, t) {
  var n = De,
    r = Ft(),
    o = t(),
    i = !Zt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (yt = !0)),
    (r = r.queue),
    Sd(ug.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Je !== null && Je.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Si(9, sg.bind(null, n, r, o, t), void 0, null),
      et === null)
    )
      throw Error(D(349));
    fr & 30 || lg(n, t, o);
  }
  return o;
}
function lg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function sg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), cg(t) && dg(e);
}
function ug(e, t, n) {
  return n(function () {
    cg(t) && dg(e);
  });
}
function cg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zt(e, n);
  } catch {
    return !0;
  }
}
function dg(e) {
  var t = wn(e, 1);
  t !== null && Yt(t, e, 1, -1);
}
function up(e) {
  var t = en();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = FS.bind(null, De, e)),
    [t.memoizedState, e]
  );
}
function Si(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = De.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (De.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fg() {
  return Ft().memoizedState;
}
function Na(e, t, n, r) {
  var o = en();
  (De.flags |= e),
    (o.memoizedState = Si(1 | t, n, void 0, r === void 0 ? null : r));
}
function $l(e, t, n, r) {
  var o = Ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ye !== null) {
    var a = Ye.memoizedState;
    if (((i = a.destroy), r !== null && gd(r, a.deps))) {
      o.memoizedState = Si(t, n, i, r);
      return;
    }
  }
  (De.flags |= e), (o.memoizedState = Si(1 | t, n, i, r));
}
function cp(e, t) {
  return Na(8390656, 8, e, t);
}
function Sd(e, t) {
  return $l(2048, 8, e, t);
}
function pg(e, t) {
  return $l(4, 2, e, t);
}
function hg(e, t) {
  return $l(4, 4, e, t);
}
function mg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function gg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $l(4, 4, mg.bind(null, t, e), n)
  );
}
function wd() {}
function vg(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function yg(e, t) {
  var n = Ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && gd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Sg(e, t, n) {
  return fr & 21
    ? (Zt(n, t) || ((n = xm()), (De.lanes |= n), (pr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (yt = !0)), (e.memoizedState = n));
}
function US(e, t) {
  var n = we;
  (we = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qs.transition;
  Qs.transition = {};
  try {
    e(!1), t();
  } finally {
    (we = n), (Qs.transition = r);
  }
}
function wg() {
  return Ft().memoizedState;
}
function BS(e, t, n) {
  var r = jn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _g(e))
  )
    xg(t, n);
  else if (((n = Xm(e, t, n, r)), n !== null)) {
    var o = pt();
    Yt(n, e, r, o), kg(n, t, r);
  }
}
function FS(e, t, n) {
  var r = jn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_g(e)) xg(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), Zt(l, a))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), dd(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xm(e, t, o, r)),
      n !== null && ((o = pt()), Yt(n, e, r, o), kg(n, t, r));
  }
}
function _g(e) {
  var t = e.alternate;
  return e === De || (t !== null && t === De);
}
function xg(e, t) {
  Qo = sl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function kg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qc(e, n);
  }
}
var ul = {
    readContext: Bt,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useInsertionEffect: lt,
    useLayoutEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useMutableSource: lt,
    useSyncExternalStore: lt,
    useId: lt,
    unstable_isNewReconciler: !1,
  },
  jS = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (en().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: cp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Na(4194308, 4, mg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Na(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Na(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = en();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = en();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = BS.bind(null, De, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = en();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: up,
    useDebugValue: wd,
    useDeferredValue: function (e) {
      return (en().memoizedState = e);
    },
    useTransition: function () {
      var e = up(!1),
        t = e[0];
      return (e = US.bind(null, e[1])), (en().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = De,
        o = en();
      if (Pe) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(D(349));
        fr & 30 || lg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        cp(ug.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Si(9, sg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = en(),
        t = et.identifierPrefix;
      if (Pe) {
        var n = hn,
          r = pn;
        (n = (r & ~(1 << (32 - Qt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  VS = {
    readContext: Bt,
    useCallback: vg,
    useContext: Bt,
    useEffect: Sd,
    useImperativeHandle: gg,
    useInsertionEffect: pg,
    useLayoutEffect: hg,
    useMemo: yg,
    useReducer: Ys,
    useRef: fg,
    useState: function () {
      return Ys(yi);
    },
    useDebugValue: wd,
    useDeferredValue: function (e) {
      var t = Ft();
      return Sg(t, Ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Ys(yi)[0],
        t = Ft().memoizedState;
      return [e, t];
    },
    useMutableSource: ig,
    useSyncExternalStore: ag,
    useId: wg,
    unstable_isNewReconciler: !1,
  },
  WS = {
    readContext: Bt,
    useCallback: vg,
    useContext: Bt,
    useEffect: Sd,
    useImperativeHandle: gg,
    useInsertionEffect: pg,
    useLayoutEffect: hg,
    useMemo: yg,
    useReducer: Zs,
    useRef: fg,
    useState: function () {
      return Zs(yi);
    },
    useDebugValue: wd,
    useDeferredValue: function (e) {
      var t = Ft();
      return Ye === null ? (t.memoizedState = e) : Sg(t, Ye.memoizedState, e);
    },
    useTransition: function () {
      var e = Zs(yi)[0],
        t = Ft().memoizedState;
      return [e, t];
    },
    useMutableSource: ig,
    useSyncExternalStore: ag,
    useId: wg,
    unstable_isNewReconciler: !1,
  };
function qr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += y1(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function qs(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var HS = typeof WeakMap == "function" ? WeakMap : Map;
function Eg(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      dl || ((dl = !0), (sc = r)), Xu(e, t);
    }),
    n
  );
}
function Rg(e, t, n) {
  (n = gn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Xu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Xu(e, t),
          typeof r != "function" &&
            (Fn === null ? (Fn = new Set([this])) : Fn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function dp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new HS();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = iw.bind(null, e, t, n)), t.then(e, e));
}
function fp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = gn(-1, 1)), (t.tag = 2), Bn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var GS = xn.ReactCurrentOwner,
  yt = !1;
function ft(e, t, n, r) {
  t.child = e === null ? rg(t, null, n, r) : Yr(t, e.child, n, r);
}
function hp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    jr(t, o),
    (r = vd(e, t, n, r, i, o)),
    (n = yd()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _n(e, t, o))
      : (Pe && n && id(t), (t.flags |= 1), ft(e, t, r, o), t.child)
  );
}
function mp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Td(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Cg(e, t, i, r, o))
      : ((e = Ma(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : di), n(a, r) && e.ref === t.ref)
    )
      return _n(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Vn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (di(i, r) && e.ref === t.ref)
      if (((yt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (yt = !0);
      else return (t.lanes = e.lanes), _n(e, t, o);
  }
  return Ju(e, t, n, r, o);
}
function bg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Re(Or, Ct),
        (Ct |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Re(Or, Ct),
          (Ct |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Re(Or, Ct),
        (Ct |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Re(Or, Ct),
      (Ct |= r);
  return ft(e, t, o, n), t.child;
}
function Tg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ju(e, t, n, r, o) {
  var i = wt(n) ? cr : dt.current;
  return (
    (i = Kr(t, i)),
    jr(t, o),
    (n = vd(e, t, n, r, i, o)),
    (r = yd()),
    e !== null && !yt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        _n(e, t, o))
      : (Pe && r && id(t), (t.flags |= 1), ft(e, t, n, o), t.child)
  );
}
function gp(e, t, n, r, o) {
  if (wt(n)) {
    var i = !0;
    tl(t);
  } else i = !1;
  if ((jr(t, o), t.stateNode === null))
    La(e, t), tg(t, n, r), qu(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var s = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Bt(u))
      : ((u = wt(n) ? cr : dt.current), (u = Kr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && lp(t, a, r, u)),
      (An = !1);
    var g = t.memoizedState;
    (a.state = g),
      al(t, r, a, o),
      (s = t.memoizedState),
      l !== r || g !== s || St.current || An
        ? (typeof c == "function" && (Zu(t, n, c, r), (s = t.memoizedState)),
          (l = An || ap(t, n, l, r, g, s, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (a.props = r),
          (a.state = s),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Jm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ht(t.type, l)),
      (a.props = u),
      (d = t.pendingProps),
      (g = a.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Bt(s))
        : ((s = wt(n) ? cr : dt.current), (s = Kr(t, s)));
    var w = n.getDerivedStateFromProps;
    (c =
      typeof w == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== d || g !== s) && lp(t, a, r, s)),
      (An = !1),
      (g = t.memoizedState),
      (a.state = g),
      al(t, r, a, o);
    var p = t.memoizedState;
    l !== d || g !== p || St.current || An
      ? (typeof w == "function" && (Zu(t, n, w, r), (p = t.memoizedState)),
        (u = An || ap(t, n, u, r, g, p, s) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, p, s),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, p, s)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = p)),
        (a.props = r),
        (a.state = p),
        (a.context = s),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ec(e, t, n, r, i, o);
}
function ec(e, t, n, r, o, i) {
  Tg(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && tp(t, n, !1), _n(e, t, i);
  (r = t.stateNode), (GS.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Yr(t, e.child, null, i)), (t.child = Yr(t, null, l, i)))
      : ft(e, t, l, i),
    (t.memoizedState = r.state),
    o && tp(t, n, !0),
    t.child
  );
}
function Ag(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ep(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ep(e, t.context, !1),
    pd(e, t.containerInfo);
}
function vp(e, t, n, r, o) {
  return Qr(), ld(o), (t.flags |= 256), ft(e, t, n, r), t.child;
}
var tc = { dehydrated: null, treeContext: null, retryLane: 0 };
function nc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ng(e, t, n) {
  var r = t.pendingProps,
    o = Oe.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Re(Oe, o & 1),
    e === null)
  )
    return (
      Qu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = Ol(a, r, 0, null)),
              (e = sr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = nc(n)),
              (t.memoizedState = tc),
              e)
            : _d(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return KS(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Vn(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Vn(l, i)) : ((i = sr(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? nc(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = tc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _d(e, t) {
  return (
    (t = Ol({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function sa(e, t, n, r) {
  return (
    r !== null && ld(r),
    Yr(t, e.child, null, n),
    (e = _d(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function KS(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = qs(Error(D(422)))), sa(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ol({ mode: "visible", children: r.children }, o, 0, null)),
        (i = sr(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Yr(t, e.child, null, a),
        (t.child.memoizedState = nc(a)),
        (t.memoizedState = tc),
        i);
  if (!(t.mode & 1)) return sa(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(D(419))), (r = qs(i, r, void 0)), sa(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), yt || l)) {
    if (((r = et), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), wn(e, o), Yt(r, e, o, -1));
    }
    return bd(), (r = qs(Error(D(421)))), sa(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = aw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (bt = Un(o.nextSibling)),
      (Tt = t),
      (Pe = !0),
      (Kt = null),
      e !== null &&
        ((It[Ot++] = pn),
        (It[Ot++] = hn),
        (It[Ot++] = dr),
        (pn = e.id),
        (hn = e.overflow),
        (dr = t)),
      (t = _d(t, r.children)),
      (t.flags |= 4096),
      t);
}
function yp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yu(e.return, t, n);
}
function Xs(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Lg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ft(e, t, r.children, n), (r = Oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && yp(e, n, t);
        else if (e.tag === 19) yp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Re(Oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && ll(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Xs(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ll(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Xs(t, !0, n, null, i);
        break;
      case "together":
        Xs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function La(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _n(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function QS(e, t, n) {
  switch (t.tag) {
    case 3:
      Ag(t), Qr();
      break;
    case 5:
      og(t);
      break;
    case 1:
      wt(t.type) && tl(t);
      break;
    case 4:
      pd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Re(ol, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Re(Oe, Oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ng(e, t, n)
          : (Re(Oe, Oe.current & 1),
            (e = _n(e, t, n)),
            e !== null ? e.sibling : null);
      Re(Oe, Oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Lg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Re(Oe, Oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bg(e, t, n);
  }
  return _n(e, t, n);
}
var Pg, rc, $g, Mg;
Pg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
rc = function () {};
$g = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ar(ln.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ru(e, o)), (r = Ru(e, r)), (i = []);
        break;
      case "select":
        (o = ze({}, o, { value: void 0 })),
          (r = ze({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Tu(e, o)), (r = Tu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ja);
    }
    Nu(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (oi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (s && s.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in s)
              s.hasOwnProperty(a) &&
                l[a] !== s[a] &&
                (n || (n = {}), (n[a] = s[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (oi.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && Te("scroll", e),
                  i || l === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Mg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ao(e, t) {
  if (!Pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function st(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function YS(e, t, n) {
  var r = t.pendingProps;
  switch ((ad(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return st(t), null;
    case 1:
      return wt(t.type) && el(), st(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zr(),
        Ne(St),
        Ne(dt),
        md(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (aa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Kt !== null && (dc(Kt), (Kt = null)))),
        rc(e, t),
        st(t),
        null
      );
    case 5:
      hd(t);
      var o = ar(gi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        $g(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return st(t), null;
        }
        if (((e = ar(ln.current)), aa(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[rn] = t), (r[hi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Te("cancel", r), Te("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Te("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Fo.length; o++) Te(Fo[o], r);
              break;
            case "source":
              Te("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Te("error", r), Te("load", r);
              break;
            case "details":
              Te("toggle", r);
              break;
            case "input":
              bf(r, i), Te("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Te("invalid", r);
              break;
            case "textarea":
              Af(r, i), Te("invalid", r);
          }
          Nu(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ia(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ia(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : oi.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  Te("scroll", r);
            }
          switch (n) {
            case "input":
              qi(r), Tf(r, i, !0);
              break;
            case "textarea":
              qi(r), Nf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ja);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = lm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[rn] = t),
            (e[hi] = r),
            Pg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Lu(n, r)), n)) {
              case "dialog":
                Te("cancel", e), Te("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Fo.length; o++) Te(Fo[o], e);
                o = r;
                break;
              case "source":
                Te("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Te("error", e), Te("load", e), (o = r);
                break;
              case "details":
                Te("toggle", e), (o = r);
                break;
              case "input":
                bf(e, r), (o = Ru(e, r)), Te("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ze({}, r, { value: void 0 })),
                  Te("invalid", e);
                break;
              case "textarea":
                Af(e, r), (o = Tu(e, r)), Te("invalid", e);
                break;
              default:
                o = r;
            }
            Nu(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? cm(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && sm(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && ii(e, s)
                    : typeof s == "number" && ii(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (oi.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && Te("scroll", e)
                      : s != null && Hc(e, i, s, a));
              }
            switch (n) {
              case "input":
                qi(e), Tf(e, r, !1);
                break;
              case "textarea":
                qi(e), Nf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Hn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? zr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      zr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ja);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return st(t), null;
    case 6:
      if (e && t.stateNode != null) Mg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = ar(gi.current)), ar(ln.current), aa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rn] = t),
            (i = r.nodeValue !== n) && ((e = Tt), e !== null))
          )
            switch (e.tag) {
              case 3:
                ia(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ia(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rn] = t),
            (t.stateNode = r);
      }
      return st(t), null;
    case 13:
      if (
        (Ne(Oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Pe && bt !== null && t.mode & 1 && !(t.flags & 128))
          qm(), Qr(), (t.flags |= 98560), (i = !1);
        else if (((i = aa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(D(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(D(317));
            i[rn] = t;
          } else
            Qr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          st(t), (i = !1);
        } else Kt !== null && (dc(Kt), (Kt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Oe.current & 1 ? Ze === 0 && (Ze = 3) : bd())),
          t.updateQueue !== null && (t.flags |= 4),
          st(t),
          null);
    case 4:
      return (
        Zr(), rc(e, t), e === null && fi(t.stateNode.containerInfo), st(t), null
      );
    case 10:
      return cd(t.type._context), st(t), null;
    case 17:
      return wt(t.type) && el(), st(t), null;
    case 19:
      if ((Ne(Oe), (i = t.memoizedState), i === null)) return st(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Ao(i, !1);
        else {
          if (Ze !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = ll(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ao(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Re(Oe, (Oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            He() > Xr &&
            ((t.flags |= 128), (r = !0), Ao(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ll(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ao(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Pe)
            )
              return st(t), null;
          } else
            2 * He() - i.renderingStartTime > Xr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ao(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = He()),
          (t.sibling = null),
          (n = Oe.current),
          Re(Oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (st(t), null);
    case 22:
    case 23:
      return (
        Cd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ct & 1073741824 && (st(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : st(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function ZS(e, t) {
  switch ((ad(t), t.tag)) {
    case 1:
      return (
        wt(t.type) && el(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zr(),
        Ne(St),
        Ne(dt),
        md(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return hd(t), null;
    case 13:
      if (
        (Ne(Oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Qr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Ne(Oe), null;
    case 4:
      return Zr(), null;
    case 10:
      return cd(t.type._context), null;
    case 22:
    case 23:
      return Cd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ua = !1,
  ct = !1,
  qS = typeof WeakSet == "function" ? WeakSet : Set,
  G = null;
function Ir(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Fe(e, t, r);
      }
    else n.current = null;
}
function oc(e, t, n) {
  try {
    n();
  } catch (r) {
    Fe(e, t, r);
  }
}
var Sp = !1;
function XS(e, t) {
  if (((Fu = Za), (e = zm()), od(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            d = e,
            g = null;
          t: for (;;) {
            for (
              var w;
              d !== n || (o !== 0 && d.nodeType !== 3) || (l = a + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (s = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (w = d.firstChild) !== null;

            )
              (g = d), (d = w);
            for (;;) {
              if (d === e) break t;
              if (
                (g === n && ++u === o && (l = a),
                g === i && ++c === r && (s = a),
                (w = d.nextSibling) !== null)
              )
                break;
              (d = g), (g = d.parentNode);
            }
            d = w;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ju = { focusedElem: e, selectionRange: n }, Za = !1, G = t; G !== null; )
    if (((t = G), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (G = e);
    else
      for (; G !== null; ) {
        t = G;
        try {
          var p = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (p !== null) {
                  var m = p.memoizedProps,
                    b = p.memoizedState,
                    h = t.stateNode,
                    f = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? m : Ht(t.type, m),
                      b
                    );
                  h.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (_) {
          Fe(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (G = e);
          break;
        }
        G = t.return;
      }
  return (p = Sp), (Sp = !1), p;
}
function Yo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && oc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ml(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ic(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ig(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ig(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rn], delete t[hi], delete t[Hu], delete t[MS], delete t[IS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Og(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function wp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Og(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ac(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ja));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ac(e, t, n), e = e.sibling; e !== null; ) ac(e, t, n), (e = e.sibling);
}
function lc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (lc(e, t, n), e = e.sibling; e !== null; ) lc(e, t, n), (e = e.sibling);
}
var rt = null,
  Gt = !1;
function Cn(e, t, n) {
  for (n = n.child; n !== null; ) Dg(e, t, n), (n = n.sibling);
}
function Dg(e, t, n) {
  if (an && typeof an.onCommitFiberUnmount == "function")
    try {
      an.onCommitFiberUnmount(Cl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ct || Ir(n, t);
    case 6:
      var r = rt,
        o = Gt;
      (rt = null),
        Cn(e, t, n),
        (rt = r),
        (Gt = o),
        rt !== null &&
          (Gt
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : rt.removeChild(n.stateNode));
      break;
    case 18:
      rt !== null &&
        (Gt
          ? ((e = rt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Hs(e.parentNode, n)
              : e.nodeType === 1 && Hs(e, n),
            ui(e))
          : Hs(rt, n.stateNode));
      break;
    case 4:
      (r = rt),
        (o = Gt),
        (rt = n.stateNode.containerInfo),
        (Gt = !0),
        Cn(e, t, n),
        (rt = r),
        (Gt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ct &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && oc(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      Cn(e, t, n);
      break;
    case 1:
      if (
        !ct &&
        (Ir(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Fe(n, t, l);
        }
      Cn(e, t, n);
      break;
    case 21:
      Cn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ct = (r = ct) || n.memoizedState !== null), Cn(e, t, n), (ct = r))
        : Cn(e, t, n);
      break;
    default:
      Cn(e, t, n);
  }
}
function _p(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qS()),
      t.forEach(function (r) {
        var o = lw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Vt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (rt = l.stateNode), (Gt = !1);
              break e;
            case 3:
              (rt = l.stateNode.containerInfo), (Gt = !0);
              break e;
            case 4:
              (rt = l.stateNode.containerInfo), (Gt = !0);
              break e;
          }
          l = l.return;
        }
        if (rt === null) throw Error(D(160));
        Dg(i, a, o), (rt = null), (Gt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Fe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zg(t, e), (t = t.sibling);
}
function zg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Vt(t, e), Xt(e), r & 4)) {
        try {
          Yo(3, e, e.return), Ml(3, e);
        } catch (m) {
          Fe(e, e.return, m);
        }
        try {
          Yo(5, e, e.return);
        } catch (m) {
          Fe(e, e.return, m);
        }
      }
      break;
    case 1:
      Vt(t, e), Xt(e), r & 512 && n !== null && Ir(n, n.return);
      break;
    case 5:
      if (
        (Vt(t, e),
        Xt(e),
        r & 512 && n !== null && Ir(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ii(o, "");
        } catch (m) {
          Fe(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && im(o, i),
              Lu(l, a);
            var u = Lu(l, i);
            for (a = 0; a < s.length; a += 2) {
              var c = s[a],
                d = s[a + 1];
              c === "style"
                ? cm(o, d)
                : c === "dangerouslySetInnerHTML"
                ? sm(o, d)
                : c === "children"
                ? ii(o, d)
                : Hc(o, c, d, u);
            }
            switch (l) {
              case "input":
                Cu(o, i);
                break;
              case "textarea":
                am(o, i);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? zr(o, !!i.multiple, w, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? zr(o, !!i.multiple, i.defaultValue, !0)
                      : zr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[hi] = i;
          } catch (m) {
            Fe(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Vt(t, e), Xt(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (m) {
          Fe(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Vt(t, e), Xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ui(t.containerInfo);
        } catch (m) {
          Fe(e, e.return, m);
        }
      break;
    case 4:
      Vt(t, e), Xt(e);
      break;
    case 13:
      Vt(t, e),
        Xt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ed = He())),
        r & 4 && _p(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ct = (u = ct) || c), Vt(t, e), (ct = u)) : Vt(t, e),
        Xt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (G = e, c = e.child; c !== null; ) {
            for (d = G = c; G !== null; ) {
              switch (((g = G), (w = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yo(4, g, g.return);
                  break;
                case 1:
                  Ir(g, g.return);
                  var p = g.stateNode;
                  if (typeof p.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (p.props = t.memoizedProps),
                        (p.state = t.memoizedState),
                        p.componentWillUnmount();
                    } catch (m) {
                      Fe(r, n, m);
                    }
                  }
                  break;
                case 5:
                  Ir(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    kp(d);
                    continue;
                  }
              }
              w !== null ? ((w.return = g), (G = w)) : kp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = d.stateNode),
                      (s = d.memoizedProps.style),
                      (a =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = um("display", a)));
              } catch (m) {
                Fe(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (m) {
                Fe(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Vt(t, e), Xt(e), r & 4 && _p(e);
      break;
    case 21:
      break;
    default:
      Vt(t, e), Xt(e);
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Og(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ii(o, ""), (r.flags &= -33));
          var i = wp(e);
          lc(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = wp(e);
          ac(e, l, a);
          break;
        default:
          throw Error(D(161));
      }
    } catch (s) {
      Fe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function JS(e, t, n) {
  (G = e), Ug(e);
}
function Ug(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null; ) {
    var o = G,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ua;
      if (!a) {
        var l = o.alternate,
          s = (l !== null && l.memoizedState !== null) || ct;
        l = ua;
        var u = ct;
        if (((ua = a), (ct = s) && !u))
          for (G = o; G !== null; )
            (a = G),
              (s = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Ep(o)
                : s !== null
                ? ((s.return = a), (G = s))
                : Ep(o);
        for (; i !== null; ) (G = i), Ug(i), (i = i.sibling);
        (G = o), (ua = l), (ct = u);
      }
      xp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (G = i)) : xp(e);
  }
}
function xp(e) {
  for (; G !== null; ) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ct || Ml(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ct)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ip(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ip(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && ui(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        ct || (t.flags & 512 && ic(t));
      } catch (g) {
        Fe(t, t.return, g);
      }
    }
    if (t === e) {
      G = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function kp(e) {
  for (; G !== null; ) {
    var t = G;
    if (t === e) {
      G = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (G = n);
      break;
    }
    G = t.return;
  }
}
function Ep(e) {
  for (; G !== null; ) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ml(4, t);
          } catch (s) {
            Fe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Fe(t, o, s);
            }
          }
          var i = t.return;
          try {
            ic(t);
          } catch (s) {
            Fe(t, i, s);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ic(t);
          } catch (s) {
            Fe(t, a, s);
          }
      }
    } catch (s) {
      Fe(t, t.return, s);
    }
    if (t === e) {
      G = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (G = l);
      break;
    }
    G = t.return;
  }
}
var ew = Math.ceil,
  cl = xn.ReactCurrentDispatcher,
  xd = xn.ReactCurrentOwner,
  Ut = xn.ReactCurrentBatchConfig,
  me = 0,
  et = null,
  Ke = null,
  it = 0,
  Ct = 0,
  Or = Yn(0),
  Ze = 0,
  wi = null,
  pr = 0,
  Il = 0,
  kd = 0,
  Zo = null,
  vt = null,
  Ed = 0,
  Xr = 1 / 0,
  dn = null,
  dl = !1,
  sc = null,
  Fn = null,
  ca = !1,
  Mn = null,
  fl = 0,
  qo = 0,
  uc = null,
  Pa = -1,
  $a = 0;
function pt() {
  return me & 6 ? He() : Pa !== -1 ? Pa : (Pa = He());
}
function jn(e) {
  return e.mode & 1
    ? me & 2 && it !== 0
      ? it & -it
      : DS.transition !== null
      ? ($a === 0 && ($a = xm()), $a)
      : ((e = we),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Am(e.type))),
        e)
    : 1;
}
function Yt(e, t, n, r) {
  if (50 < qo) throw ((qo = 0), (uc = null), Error(D(185)));
  Ni(e, n, r),
    (!(me & 2) || e !== et) &&
      (e === et && (!(me & 2) && (Il |= n), Ze === 4 && Pn(e, it)),
      _t(e, r),
      n === 1 && me === 0 && !(t.mode & 1) && ((Xr = He() + 500), Ll && Zn()));
}
function _t(e, t) {
  var n = e.callbackNode;
  D1(e, t);
  var r = Ya(e, e === et ? it : 0);
  if (r === 0)
    n !== null && $f(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $f(n), t === 1))
      e.tag === 0 ? OS(Rp.bind(null, e)) : Qm(Rp.bind(null, e)),
        PS(function () {
          !(me & 6) && Zn();
        }),
        (n = null);
    else {
      switch (km(r)) {
        case 1:
          n = Zc;
          break;
        case 4:
          n = wm;
          break;
        case 16:
          n = Qa;
          break;
        case 536870912:
          n = _m;
          break;
        default:
          n = Qa;
      }
      n = Kg(n, Bg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bg(e, t) {
  if (((Pa = -1), ($a = 0), me & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (Vr() && e.callbackNode !== n) return null;
  var r = Ya(e, e === et ? it : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var o = me;
    me |= 2;
    var i = jg();
    (et !== e || it !== t) && ((dn = null), (Xr = He() + 500), lr(e, t));
    do
      try {
        rw();
        break;
      } catch (l) {
        Fg(e, l);
      }
    while (1);
    ud(),
      (cl.current = i),
      (me = o),
      Ke !== null ? (t = 0) : ((et = null), (it = 0), (t = Ze));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Ou(e)), o !== 0 && ((r = o), (t = cc(e, o)))), t === 1)
    )
      throw ((n = wi), lr(e, 0), Pn(e, r), _t(e, He()), n);
    if (t === 6) Pn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !tw(o) &&
          ((t = pl(e, r)),
          t === 2 && ((i = Ou(e)), i !== 0 && ((r = i), (t = cc(e, i)))),
          t === 1))
      )
        throw ((n = wi), lr(e, 0), Pn(e, r), _t(e, He()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          nr(e, vt, dn);
          break;
        case 3:
          if (
            (Pn(e, r), (r & 130023424) === r && ((t = Ed + 500 - He()), 10 < t))
          ) {
            if (Ya(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              pt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Wu(nr.bind(null, e, vt, dn), t);
            break;
          }
          nr(e, vt, dn);
          break;
        case 4:
          if ((Pn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - Qt(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = He() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * ew(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wu(nr.bind(null, e, vt, dn), r);
            break;
          }
          nr(e, vt, dn);
          break;
        case 5:
          nr(e, vt, dn);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return _t(e, He()), e.callbackNode === n ? Bg.bind(null, e) : null;
}
function cc(e, t) {
  var n = Zo;
  return (
    e.current.memoizedState.isDehydrated && (lr(e, t).flags |= 256),
    (e = pl(e, t)),
    e !== 2 && ((t = vt), (vt = n), t !== null && dc(t)),
    e
  );
}
function dc(e) {
  vt === null ? (vt = e) : vt.push.apply(vt, e);
}
function tw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Zt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pn(e, t) {
  for (
    t &= ~kd,
      t &= ~Il,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Qt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Rp(e) {
  if (me & 6) throw Error(D(327));
  Vr();
  var t = Ya(e, 0);
  if (!(t & 1)) return _t(e, He()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ou(e);
    r !== 0 && ((t = r), (n = cc(e, r)));
  }
  if (n === 1) throw ((n = wi), lr(e, 0), Pn(e, t), _t(e, He()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nr(e, vt, dn),
    _t(e, He()),
    null
  );
}
function Rd(e, t) {
  var n = me;
  me |= 1;
  try {
    return e(t);
  } finally {
    (me = n), me === 0 && ((Xr = He() + 500), Ll && Zn());
  }
}
function hr(e) {
  Mn !== null && Mn.tag === 0 && !(me & 6) && Vr();
  var t = me;
  me |= 1;
  var n = Ut.transition,
    r = we;
  try {
    if (((Ut.transition = null), (we = 1), e)) return e();
  } finally {
    (we = r), (Ut.transition = n), (me = t), !(me & 6) && Zn();
  }
}
function Cd() {
  (Ct = Or.current), Ne(Or);
}
function lr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), LS(n)), Ke !== null))
    for (n = Ke.return; n !== null; ) {
      var r = n;
      switch ((ad(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && el();
          break;
        case 3:
          Zr(), Ne(St), Ne(dt), md();
          break;
        case 5:
          hd(r);
          break;
        case 4:
          Zr();
          break;
        case 13:
          Ne(Oe);
          break;
        case 19:
          Ne(Oe);
          break;
        case 10:
          cd(r.type._context);
          break;
        case 22:
        case 23:
          Cd();
      }
      n = n.return;
    }
  if (
    ((et = e),
    (Ke = e = Vn(e.current, null)),
    (it = Ct = t),
    (Ze = 0),
    (wi = null),
    (kd = Il = pr = 0),
    (vt = Zo = null),
    ir !== null)
  ) {
    for (t = 0; t < ir.length; t++)
      if (((n = ir[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    ir = null;
  }
  return e;
}
function Fg(e, t) {
  do {
    var n = Ke;
    try {
      if ((ud(), (Aa.current = ul), sl)) {
        for (var r = De.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        sl = !1;
      }
      if (
        ((fr = 0),
        (Je = Ye = De = null),
        (Qo = !1),
        (vi = 0),
        (xd.current = null),
        n === null || n.return === null)
      ) {
        (Ze = 1), (wi = t), (Ke = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          s = t;
        if (
          ((t = it),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var g = c.alternate;
            g
              ? ((c.updateQueue = g.updateQueue),
                (c.memoizedState = g.memoizedState),
                (c.lanes = g.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var w = fp(a);
          if (w !== null) {
            (w.flags &= -257),
              pp(w, a, l, i, t),
              w.mode & 1 && dp(i, u, t),
              (t = w),
              (s = u);
            var p = t.updateQueue;
            if (p === null) {
              var m = new Set();
              m.add(s), (t.updateQueue = m);
            } else p.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              dp(i, u, t), bd();
              break e;
            }
            s = Error(D(426));
          }
        } else if (Pe && l.mode & 1) {
          var b = fp(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              pp(b, a, l, i, t),
              ld(qr(s, l));
            break e;
          }
        }
        (i = s = qr(s, l)),
          Ze !== 4 && (Ze = 2),
          Zo === null ? (Zo = [i]) : Zo.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Eg(i, s, t);
              op(i, h);
              break e;
            case 1:
              l = s;
              var f = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (Fn === null || !Fn.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = Rg(i, l, t);
                op(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Wg(n);
    } catch (T) {
      (t = T), Ke === n && n !== null && (Ke = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function jg() {
  var e = cl.current;
  return (cl.current = ul), e === null ? ul : e;
}
function bd() {
  (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4),
    et === null || (!(pr & 268435455) && !(Il & 268435455)) || Pn(et, it);
}
function pl(e, t) {
  var n = me;
  me |= 2;
  var r = jg();
  (et !== e || it !== t) && ((dn = null), lr(e, t));
  do
    try {
      nw();
      break;
    } catch (o) {
      Fg(e, o);
    }
  while (1);
  if ((ud(), (me = n), (cl.current = r), Ke !== null)) throw Error(D(261));
  return (et = null), (it = 0), Ze;
}
function nw() {
  for (; Ke !== null; ) Vg(Ke);
}
function rw() {
  for (; Ke !== null && !T1(); ) Vg(Ke);
}
function Vg(e) {
  var t = Gg(e.alternate, e, Ct);
  (e.memoizedProps = e.pendingProps),
    t === null ? Wg(e) : (Ke = t),
    (xd.current = null);
}
function Wg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ZS(n, t)), n !== null)) {
        (n.flags &= 32767), (Ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Ze = 6), (Ke = null);
        return;
      }
    } else if (((n = YS(n, t, Ct)), n !== null)) {
      Ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t;
      return;
    }
    Ke = t = e;
  } while (t !== null);
  Ze === 0 && (Ze = 5);
}
function nr(e, t, n) {
  var r = we,
    o = Ut.transition;
  try {
    (Ut.transition = null), (we = 1), ow(e, t, n, r);
  } finally {
    (Ut.transition = o), (we = r);
  }
  return null;
}
function ow(e, t, n, r) {
  do Vr();
  while (Mn !== null);
  if (me & 6) throw Error(D(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (z1(e, i),
    e === et && ((Ke = et = null), (it = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ca ||
      ((ca = !0),
      Kg(Qa, function () {
        return Vr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ut.transition), (Ut.transition = null);
    var a = we;
    we = 1;
    var l = me;
    (me |= 4),
      (xd.current = null),
      XS(e, n),
      zg(n, e),
      ES(ju),
      (Za = !!Fu),
      (ju = Fu = null),
      (e.current = n),
      JS(n),
      A1(),
      (me = l),
      (we = a),
      (Ut.transition = i);
  } else e.current = n;
  if (
    (ca && ((ca = !1), (Mn = e), (fl = o)),
    (i = e.pendingLanes),
    i === 0 && (Fn = null),
    P1(n.stateNode),
    _t(e, He()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (dl) throw ((dl = !1), (e = sc), (sc = null), e);
  return (
    fl & 1 && e.tag !== 0 && Vr(),
    (i = e.pendingLanes),
    i & 1 ? (e === uc ? qo++ : ((qo = 0), (uc = e))) : (qo = 0),
    Zn(),
    null
  );
}
function Vr() {
  if (Mn !== null) {
    var e = km(fl),
      t = Ut.transition,
      n = we;
    try {
      if (((Ut.transition = null), (we = 16 > e ? 16 : e), Mn === null))
        var r = !1;
      else {
        if (((e = Mn), (Mn = null), (fl = 0), me & 6)) throw Error(D(331));
        var o = me;
        for (me |= 4, G = e.current; G !== null; ) {
          var i = G,
            a = i.child;
          if (G.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (G = u; G !== null; ) {
                  var c = G;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(8, c, i);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (G = d);
                  else
                    for (; G !== null; ) {
                      c = G;
                      var g = c.sibling,
                        w = c.return;
                      if ((Ig(c), c === u)) {
                        G = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = w), (G = g);
                        break;
                      }
                      G = w;
                    }
                }
              }
              var p = i.alternate;
              if (p !== null) {
                var m = p.child;
                if (m !== null) {
                  p.child = null;
                  do {
                    var b = m.sibling;
                    (m.sibling = null), (m = b);
                  } while (m !== null);
                }
              }
              G = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (G = a);
          else
            e: for (; G !== null; ) {
              if (((i = G), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yo(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (G = h);
                break e;
              }
              G = i.return;
            }
        }
        var f = e.current;
        for (G = f; G !== null; ) {
          a = G;
          var v = a.child;
          if (a.subtreeFlags & 2064 && v !== null) (v.return = a), (G = v);
          else
            e: for (a = f; G !== null; ) {
              if (((l = G), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ml(9, l);
                  }
                } catch (T) {
                  Fe(l, l.return, T);
                }
              if (l === a) {
                G = null;
                break e;
              }
              var _ = l.sibling;
              if (_ !== null) {
                (_.return = l.return), (G = _);
                break e;
              }
              G = l.return;
            }
        }
        if (
          ((me = o), Zn(), an && typeof an.onPostCommitFiberRoot == "function")
        )
          try {
            an.onPostCommitFiberRoot(Cl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (we = n), (Ut.transition = t);
    }
  }
  return !1;
}
function Cp(e, t, n) {
  (t = qr(n, t)),
    (t = Eg(e, t, 1)),
    (e = Bn(e, t, 1)),
    (t = pt()),
    e !== null && (Ni(e, 1, t), _t(e, t));
}
function Fe(e, t, n) {
  if (e.tag === 3) Cp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Cp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Fn === null || !Fn.has(r)))
        ) {
          (e = qr(n, e)),
            (e = Rg(t, e, 1)),
            (t = Bn(t, e, 1)),
            (e = pt()),
            t !== null && (Ni(t, 1, e), _t(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function iw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (it & n) === n &&
      (Ze === 4 || (Ze === 3 && (it & 130023424) === it && 500 > He() - Ed)
        ? lr(e, 0)
        : (kd |= n)),
    _t(e, t);
}
function Hg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ea), (ea <<= 1), !(ea & 130023424) && (ea = 4194304))
      : (t = 1));
  var n = pt();
  (e = wn(e, t)), e !== null && (Ni(e, t, n), _t(e, n));
}
function aw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Hg(e, n);
}
function lw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(t), Hg(e, n);
}
var Gg;
Gg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || St.current) yt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (yt = !1), QS(e, t, n);
      yt = !!(e.flags & 131072);
    }
  else (yt = !1), Pe && t.flags & 1048576 && Ym(t, rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      La(e, t), (e = t.pendingProps);
      var o = Kr(t, dt.current);
      jr(t, n), (o = vd(null, t, r, e, o, n));
      var i = yd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            wt(r) ? ((i = !0), tl(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            fd(t),
            (o.updater = Pl),
            (t.stateNode = o),
            (o._reactInternals = t),
            qu(t, r, e, n),
            (t = ec(null, t, r, !0, i, n)))
          : ((t.tag = 0), Pe && i && id(t), ft(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (La(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = uw(r)),
          (e = Ht(r, e)),
          o)
        ) {
          case 0:
            t = Ju(null, t, r, e, n);
            break e;
          case 1:
            t = gp(null, t, r, e, n);
            break e;
          case 11:
            t = hp(null, t, r, e, n);
            break e;
          case 14:
            t = mp(null, t, r, Ht(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        Ju(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        gp(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Ag(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Jm(e, t),
          al(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = qr(Error(D(423)), t)), (t = vp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = qr(Error(D(424)), t)), (t = vp(e, t, r, n, o));
            break e;
          } else
            for (
              bt = Un(t.stateNode.containerInfo.firstChild),
                Tt = t,
                Pe = !0,
                Kt = null,
                n = rg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qr(), r === o)) {
            t = _n(e, t, n);
            break e;
          }
          ft(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        og(t),
        e === null && Qu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Vu(r, o) ? (a = null) : i !== null && Vu(r, i) && (t.flags |= 32),
        Tg(e, t),
        ft(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Qu(t), null;
    case 13:
      return Ng(e, t, n);
    case 4:
      return (
        pd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yr(t, null, r, n)) : ft(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        hp(e, t, r, o, n)
      );
    case 7:
      return ft(e, t, t.pendingProps, n), t.child;
    case 8:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ft(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Re(ol, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (Zt(i.value, a)) {
            if (i.children === o.children && !St.current) {
              t = _n(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = gn(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Yu(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error(D(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Yu(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        ft(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        jr(t, n),
        (o = Bt(o)),
        (r = r(o)),
        (t.flags |= 1),
        ft(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ht(r, t.pendingProps)),
        (o = Ht(r.type, o)),
        mp(e, t, r, o, n)
      );
    case 15:
      return Cg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ht(r, o)),
        La(e, t),
        (t.tag = 1),
        wt(r) ? ((e = !0), tl(t)) : (e = !1),
        jr(t, n),
        tg(t, r, o),
        qu(t, r, o, n),
        ec(null, t, r, !0, e, n)
      );
    case 19:
      return Lg(e, t, n);
    case 22:
      return bg(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Kg(e, t) {
  return Sm(e, t);
}
function sw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function zt(e, t, n, r) {
  return new sw(e, t, n, r);
}
function Td(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function uw(e) {
  if (typeof e == "function") return Td(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kc)) return 11;
    if (e === Qc) return 14;
  }
  return 2;
}
function Vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = zt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ma(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) Td(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Cr:
        return sr(n.children, o, i, t);
      case Gc:
        (a = 8), (o |= 8);
        break;
      case _u:
        return (
          (e = zt(12, n, t, o | 2)), (e.elementType = _u), (e.lanes = i), e
        );
      case xu:
        return (e = zt(13, n, t, o)), (e.elementType = xu), (e.lanes = i), e;
      case ku:
        return (e = zt(19, n, t, o)), (e.elementType = ku), (e.lanes = i), e;
      case nm:
        return Ol(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case em:
              a = 10;
              break e;
            case tm:
              a = 9;
              break e;
            case Kc:
              a = 11;
              break e;
            case Qc:
              a = 14;
              break e;
            case Tn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = zt(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function sr(e, t, n, r) {
  return (e = zt(7, e, r, t)), (e.lanes = n), e;
}
function Ol(e, t, n, r) {
  return (
    (e = zt(22, e, r, t)),
    (e.elementType = nm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Js(e, t, n) {
  return (e = zt(6, e, null, t)), (e.lanes = n), e;
}
function eu(e, t, n) {
  return (
    (t = zt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ms(0)),
    (this.expirationTimes = Ms(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ms(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Ad(e, t, n, r, o, i, a, l, s) {
  return (
    (e = new cw(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = zt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fd(i),
    e
  );
}
function dw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qg(e) {
  if (!e) return Gn;
  e = e._reactInternals;
  e: {
    if (yr(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (wt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (wt(n)) return Km(e, n, t);
  }
  return t;
}
function Yg(e, t, n, r, o, i, a, l, s) {
  return (
    (e = Ad(n, r, !0, e, o, i, a, l, s)),
    (e.context = Qg(null)),
    (n = e.current),
    (r = pt()),
    (o = jn(n)),
    (i = gn(r, o)),
    (i.callback = t ?? null),
    Bn(n, i, o),
    (e.current.lanes = o),
    Ni(e, o, r),
    _t(e, r),
    e
  );
}
function Dl(e, t, n, r) {
  var o = t.current,
    i = pt(),
    a = jn(o);
  return (
    (n = Qg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = gn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bn(o, t, a)),
    e !== null && (Yt(e, o, a, i), Ta(e, o, a)),
    a
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Nd(e, t) {
  bp(e, t), (e = e.alternate) && bp(e, t);
}
function fw() {
  return null;
}
var Zg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ld(e) {
  this._internalRoot = e;
}
zl.prototype.render = Ld.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Dl(e, t, null, null);
};
zl.prototype.unmount = Ld.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    hr(function () {
      Dl(null, e, null, null);
    }),
      (t[Sn] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ln.length && t !== 0 && t < Ln[n].priority; n++);
    Ln.splice(n, 0, e), n === 0 && Tm(e);
  }
};
function Pd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ul(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tp() {}
function pw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = hl(a);
        i.call(u);
      };
    }
    var a = Yg(t, r, e, 0, null, !1, !1, "", Tp);
    return (
      (e._reactRootContainer = a),
      (e[Sn] = a.current),
      fi(e.nodeType === 8 ? e.parentNode : e),
      hr(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = hl(s);
      l.call(u);
    };
  }
  var s = Ad(e, 0, !1, null, null, !1, !1, "", Tp);
  return (
    (e._reactRootContainer = s),
    (e[Sn] = s.current),
    fi(e.nodeType === 8 ? e.parentNode : e),
    hr(function () {
      Dl(t, s, n, r);
    }),
    s
  );
}
function Bl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var s = hl(a);
        l.call(s);
      };
    }
    Dl(t, a, e, o);
  } else a = pw(n, t, e, o, r);
  return hl(a);
}
Em = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bo(t.pendingLanes);
        n !== 0 &&
          (qc(t, n | 1), _t(t, He()), !(me & 6) && ((Xr = He() + 500), Zn()));
      }
      break;
    case 13:
      hr(function () {
        var r = wn(e, 1);
        if (r !== null) {
          var o = pt();
          Yt(r, e, 1, o);
        }
      }),
        Nd(e, 1);
  }
};
Xc = function (e) {
  if (e.tag === 13) {
    var t = wn(e, 134217728);
    if (t !== null) {
      var n = pt();
      Yt(t, e, 134217728, n);
    }
    Nd(e, 134217728);
  }
};
Rm = function (e) {
  if (e.tag === 13) {
    var t = jn(e),
      n = wn(e, t);
    if (n !== null) {
      var r = pt();
      Yt(n, e, t, r);
    }
    Nd(e, t);
  }
};
Cm = function () {
  return we;
};
bm = function (e, t) {
  var n = we;
  try {
    return (we = e), t();
  } finally {
    we = n;
  }
};
$u = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Cu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Nl(r);
            if (!o) throw Error(D(90));
            om(r), Cu(r, o);
          }
        }
      }
      break;
    case "textarea":
      am(e, n);
      break;
    case "select":
      (t = n.value), t != null && zr(e, !!n.multiple, t, !1);
  }
};
pm = Rd;
hm = hr;
var hw = { usingClientEntryPoint: !1, Events: [Pi, Nr, Nl, dm, fm, Rd] },
  No = {
    findFiberByHostInstance: or,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  mw = {
    bundleType: No.bundleType,
    version: No.version,
    rendererPackageName: No.rendererPackageName,
    rendererConfig: No.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = vm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: No.findFiberByHostInstance || fw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var da = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!da.isDisabled && da.supportsFiber)
    try {
      (Cl = da.inject(mw)), (an = da);
    } catch {}
}
Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hw;
Lt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pd(t)) throw Error(D(200));
  return dw(e, t, null, n);
};
Lt.createRoot = function (e, t) {
  if (!Pd(e)) throw Error(D(299));
  var n = !1,
    r = "",
    o = Zg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Ad(e, 1, !1, null, null, n, !1, r, o)),
    (e[Sn] = t.current),
    fi(e.nodeType === 8 ? e.parentNode : e),
    new Ld(t)
  );
};
Lt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = vm(t)), (e = e === null ? null : e.stateNode), e;
};
Lt.flushSync = function (e) {
  return hr(e);
};
Lt.hydrate = function (e, t, n) {
  if (!Ul(t)) throw Error(D(200));
  return Bl(null, e, t, !0, n);
};
Lt.hydrateRoot = function (e, t, n) {
  if (!Pd(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = Zg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Yg(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Sn] = t.current),
    fi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new zl(t);
};
Lt.render = function (e, t, n) {
  if (!Ul(t)) throw Error(D(200));
  return Bl(null, e, t, !1, n);
};
Lt.unmountComponentAtNode = function (e) {
  if (!Ul(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (hr(function () {
        Bl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Sn] = null);
        });
      }),
      !0)
    : !1;
};
Lt.unstable_batchedUpdates = Rd;
Lt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ul(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Bl(e, t, n, !1, r);
};
Lt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Lt);
})(f1);
const gw = jh(Wa);
var Ap = Wa;
(yu.createRoot = Ap.createRoot), (yu.hydrateRoot = Ap.hydrateRoot);
/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _i() {
  return (
    (_i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _i.apply(this, arguments)
  );
}
var In;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(In || (In = {}));
const Np = "popstate";
function vw(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return fc(
      "",
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : qg(o);
  }
  return Sw(t, n, null, e);
}
function tt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function $d(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function yw() {
  return Math.random().toString(36).substr(2, 8);
}
function Lp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function fc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    _i(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? po(t) : t,
      { state: n, key: (t && t.key) || r || yw() }
    )
  );
}
function qg(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function po(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Sw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = In.Pop,
    s = null,
    u = c();
  u == null && ((u = 0), a.replaceState(_i({}, a.state, { idx: u }), ""));
  function c() {
    return (a.state || { idx: null }).idx;
  }
  function d() {
    l = In.Pop;
    let b = c(),
      h = b == null ? null : b - u;
    (u = b), s && s({ action: l, location: m.location, delta: h });
  }
  function g(b, h) {
    l = In.Push;
    let f = fc(m.location, b, h);
    n && n(f, b), (u = c() + 1);
    let v = Lp(f, u),
      _ = m.createHref(f);
    try {
      a.pushState(v, "", _);
    } catch {
      o.location.assign(_);
    }
    i && s && s({ action: l, location: m.location, delta: 1 });
  }
  function w(b, h) {
    l = In.Replace;
    let f = fc(m.location, b, h);
    n && n(f, b), (u = c());
    let v = Lp(f, u),
      _ = m.createHref(f);
    a.replaceState(v, "", _),
      i && s && s({ action: l, location: m.location, delta: 0 });
  }
  function p(b) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      f = typeof b == "string" ? b : qg(b);
    return (
      tt(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, h)
    );
  }
  let m = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(b) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Np, d),
        (s = b),
        () => {
          o.removeEventListener(Np, d), (s = null);
        }
      );
    },
    createHref(b) {
      return t(o, b);
    },
    createURL: p,
    encodeLocation(b) {
      let h = p(b);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: g,
    replace: w,
    go(b) {
      return a.go(b);
    },
  };
  return m;
}
var Pp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Pp || (Pp = {}));
function ww(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? po(t) : t,
    o = e0(r.pathname || "/", n);
  if (o == null) return null;
  let i = Xg(e);
  _w(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) a = Nw(i[l], $w(o));
  return a;
}
function Xg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, l) => {
    let s = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (tt(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = ur([r, s.relativePath]),
      c = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (tt(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      Xg(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Tw(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, a);
      else for (let s of Jg(i.path)) o(i, a, s);
    }),
    t
  );
}
function Jg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = Jg(r.join("/")),
    l = [];
  return (
    l.push(...a.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && l.push(...a),
    l.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function _w(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Aw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const xw = /^:\w+$/,
  kw = 3,
  Ew = 2,
  Rw = 1,
  Cw = 10,
  bw = -2,
  $p = (e) => e === "*";
function Tw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some($p) && (r += bw),
    t && (r += Ew),
    n
      .filter((o) => !$p(o))
      .reduce((o, i) => o + (xw.test(i) ? kw : i === "" ? Rw : Cw), r)
  );
}
function Aw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Nw(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      s = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      c = Lw(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
        u
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let d = l.route;
    i.push({
      params: r,
      pathname: ur([o, c.pathname]),
      pathnameBase: Uw(ur([o, c.pathnameBase])),
      route: d,
    }),
      c.pathnameBase !== "/" && (o = ur([o, c.pathnameBase]));
  }
  return i;
}
function Lw(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Pw(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      if (c === "*") {
        let g = l[d] || "";
        a = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = Mw(l[d] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function Pw(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    $d(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (a, l) => (r.push(l), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function $w(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      $d(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Mw(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      $d(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function e0(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Iw(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? po(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Ow(n, t)) : t,
    search: Bw(r),
    hash: Fw(o),
  };
}
function Ow(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function tu(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Dw(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function zw(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = po(e))
    : ((o = _i({}, e)),
      tt(
        !o.pathname || !o.pathname.includes("?"),
        tu("?", "pathname", "search", o)
      ),
      tt(
        !o.pathname || !o.pathname.includes("#"),
        tu("#", "pathname", "hash", o)
      ),
      tt(!o.search || !o.search.includes("#"), tu("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    l;
  if (r || a == null) l = n;
  else {
    let d = t.length - 1;
    if (a.startsWith("..")) {
      let g = a.split("/");
      for (; g[0] === ".."; ) g.shift(), (d -= 1);
      o.pathname = g.join("/");
    }
    l = d >= 0 ? t[d] : "/";
  }
  let s = Iw(o, l),
    u = a && a !== "/" && a.endsWith("/"),
    c = (i || a === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || c) && (s.pathname += "/"), s;
}
const ur = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Uw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Bw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Fw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function jw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Ww = typeof Object.is == "function" ? Object.is : Vw,
  { useState: Hw, useEffect: Gw, useLayoutEffect: Kw, useDebugValue: Qw } = ri;
function Yw(e, t, n) {
  const r = t(),
    [{ inst: o }, i] = Hw({ inst: { value: r, getSnapshot: t } });
  return (
    Kw(() => {
      (o.value = r), (o.getSnapshot = t), nu(o) && i({ inst: o });
    }, [e, r, t]),
    Gw(
      () => (
        nu(o) && i({ inst: o }),
        e(() => {
          nu(o) && i({ inst: o });
        })
      ),
      [e]
    ),
    Qw(r),
    r
  );
}
function nu(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Ww(n, r);
  } catch {
    return !0;
  }
}
function Zw(e, t, n) {
  return t();
}
const qw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Xw = !qw,
  Jw = Xw ? Zw : Yw;
"useSyncExternalStore" in ri && ((e) => e.useSyncExternalStore)(ri);
const t0 = U.createContext(null),
  n0 = U.createContext(null),
  Md = U.createContext(null),
  Fl = U.createContext(null),
  Mi = U.createContext({ outlet: null, matches: [] }),
  r0 = U.createContext(null);
function pc() {
  return (
    (pc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pc.apply(this, arguments)
  );
}
function jl() {
  return U.useContext(Fl) != null;
}
function o0() {
  return jl() || tt(!1), U.useContext(Fl).location;
}
function e_() {
  jl() || tt(!1);
  let { basename: e, navigator: t } = U.useContext(Md),
    { matches: n } = U.useContext(Mi),
    { pathname: r } = o0(),
    o = JSON.stringify(Dw(n).map((l) => l.pathnameBase)),
    i = U.useRef(!1);
  return (
    U.useEffect(() => {
      i.current = !0;
    }),
    U.useCallback(
      function (l, s) {
        if ((s === void 0 && (s = {}), !i.current)) return;
        if (typeof l == "number") {
          t.go(l);
          return;
        }
        let u = zw(l, JSON.parse(o), r, s.relative === "path");
        e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : ur([e, u.pathname])),
          (s.replace ? t.replace : t.push)(u, s.state, s);
      },
      [e, t, o, r]
    )
  );
}
function t_(e, t) {
  jl() || tt(!1);
  let { navigator: n } = U.useContext(Md),
    r = U.useContext(n0),
    { matches: o } = U.useContext(Mi),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let l = i ? i.pathnameBase : "/";
  i && i.route;
  let s = o0(),
    u;
  if (t) {
    var c;
    let m = typeof t == "string" ? po(t) : t;
    l === "/" || ((c = m.pathname) != null && c.startsWith(l)) || tt(!1),
      (u = m);
  } else u = s;
  let d = u.pathname || "/",
    g = l === "/" ? d : d.slice(l.length) || "/",
    w = ww(e, { pathname: g }),
    p = i_(
      w &&
        w.map((m) =>
          Object.assign({}, m, {
            params: Object.assign({}, a, m.params),
            pathname: ur([
              l,
              n.encodeLocation
                ? n.encodeLocation(m.pathname).pathname
                : m.pathname,
            ]),
            pathnameBase:
              m.pathnameBase === "/"
                ? l
                : ur([
                    l,
                    n.encodeLocation
                      ? n.encodeLocation(m.pathnameBase).pathname
                      : m.pathnameBase,
                  ]),
          })
        ),
      o,
      r || void 0
    );
  return t && p
    ? U.createElement(
        Fl.Provider,
        {
          value: {
            location: pc(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              u
            ),
            navigationType: In.Pop,
          },
        },
        p
      )
    : p;
}
function n_() {
  let e = u_(),
    t = jw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return U.createElement(
    U.Fragment,
    null,
    U.createElement("h2", null, "Unexpected Application Error!"),
    U.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? U.createElement("pre", { style: o }, n) : null,
    i
  );
}
class r_ extends U.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? U.createElement(
          Mi.Provider,
          { value: this.props.routeContext },
          U.createElement(r0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function o_(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = U.useContext(t0);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    U.createElement(Mi.Provider, { value: t }, r)
  );
}
function i_(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    i >= 0 || tt(!1), (r = r.slice(0, Math.min(r.length, i + 1)));
  }
  return r.reduceRight((i, a, l) => {
    let s = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      u = null;
    n &&
      (a.route.ErrorBoundary
        ? (u = U.createElement(a.route.ErrorBoundary, null))
        : a.route.errorElement
        ? (u = a.route.errorElement)
        : (u = U.createElement(n_, null)));
    let c = t.concat(r.slice(0, l + 1)),
      d = () => {
        let g = i;
        return (
          s
            ? (g = u)
            : a.route.Component
            ? (g = U.createElement(a.route.Component, null))
            : a.route.element && (g = a.route.element),
          U.createElement(o_, {
            match: a,
            routeContext: { outlet: i, matches: c },
            children: g,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || l === 0)
      ? U.createElement(r_, {
          location: n.location,
          component: u,
          error: s,
          children: d(),
          routeContext: { outlet: null, matches: c },
        })
      : d();
  }, null);
}
var Mp;
(function (e) {
  (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
})(Mp || (Mp = {}));
var ml;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(ml || (ml = {}));
function a_(e) {
  let t = U.useContext(n0);
  return t || tt(!1), t;
}
function l_(e) {
  let t = U.useContext(Mi);
  return t || tt(!1), t;
}
function s_(e) {
  let t = l_(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || tt(!1), n.route.id;
}
function u_() {
  var e;
  let t = U.useContext(r0),
    n = a_(ml.UseRouteError),
    r = s_(ml.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function hc(e) {
  tt(!1);
}
function c_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = In.Pop,
    navigator: i,
    static: a = !1,
  } = e;
  jl() && tt(!1);
  let l = t.replace(/^\/*/, "/"),
    s = U.useMemo(() => ({ basename: l, navigator: i, static: a }), [l, i, a]);
  typeof r == "string" && (r = po(r));
  let {
      pathname: u = "/",
      search: c = "",
      hash: d = "",
      state: g = null,
      key: w = "default",
    } = r,
    p = U.useMemo(() => {
      let m = e0(u, l);
      return m == null
        ? null
        : {
            location: { pathname: m, search: c, hash: d, state: g, key: w },
            navigationType: o,
          };
    }, [l, u, c, d, g, w, o]);
  return p == null
    ? null
    : U.createElement(
        Md.Provider,
        { value: s },
        U.createElement(Fl.Provider, { children: n, value: p })
      );
}
function d_(e) {
  let { children: t, location: n } = e,
    r = U.useContext(t0),
    o = r && !t ? r.router.routes : mc(t);
  return t_(o, n);
}
var Ip;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Ip || (Ip = {}));
new Promise(() => {});
function mc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    U.Children.forEach(e, (r, o) => {
      if (!U.isValidElement(r)) return;
      if (r.type === U.Fragment) {
        n.push.apply(n, mc(r.props.children, t));
        return;
      }
      r.type !== hc && tt(!1), !r.props.index || !r.props.children || tt(!1);
      let i = [...t, o],
        a = {
          id: r.props.id || i.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          Component: r.props.Component,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          ErrorBoundary: r.props.ErrorBoundary,
          hasErrorBoundary:
            r.props.ErrorBoundary != null || r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
          lazy: r.props.lazy,
        };
      r.props.children && (a.children = mc(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function f_(e) {
  let { basename: t, children: n, window: r } = e,
    o = U.useRef();
  o.current == null && (o.current = vw({ window: r, v5Compat: !0 }));
  let i = o.current,
    [a, l] = U.useState({ action: i.action, location: i.location });
  return (
    U.useLayoutEffect(() => i.listen(l), [i]),
    U.createElement(c_, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: i,
    })
  );
}
var Op;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Op || (Op = {}));
var Dp;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Dp || (Dp = {}));
function p_(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var h_ = p_,
  ue = h_;
function m_(e) {
  return !!e && typeof e.then == "function";
}
var Ae = m_;
function g_(e, t) {
  if (e != null) return e;
  throw ue(t ?? "Got unexpected null or undefined");
}
var $e = g_;
function se(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
class Vl {
  getValue() {
    throw ue("BaseLoadable");
  }
  toPromise() {
    throw ue("BaseLoadable");
  }
  valueMaybe() {
    throw ue("BaseLoadable");
  }
  valueOrThrow() {
    throw ue(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw ue("BaseLoadable");
  }
  promiseOrThrow() {
    throw ue(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw ue("BaseLoadable");
  }
  errorOrThrow() {
    throw ue(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw ue("BaseLoadable");
  }
}
class v_ extends Vl {
  constructor(t) {
    super(),
      se(this, "state", "hasValue"),
      se(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return Ae(n) ? mr(n) : Jr(n) ? n : Ii(n);
    } catch (n) {
      return Ae(n) ? mr(n.next(() => this.map(t))) : Wl(n);
    }
  }
}
class y_ extends Vl {
  constructor(t) {
    super(),
      se(this, "state", "hasError"),
      se(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class i0 extends Vl {
  constructor(t) {
    super(),
      se(this, "state", "loading"),
      se(this, "contents", void 0),
      (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return mr(
      this.contents
        .then((n) => {
          const r = t(n);
          if (Jr(r)) {
            const o = r;
            switch (o.state) {
              case "hasValue":
                return o.contents;
              case "hasError":
                throw o.contents;
              case "loading":
                return o.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (Ae(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function Ii(e) {
  return Object.freeze(new v_(e));
}
function Wl(e) {
  return Object.freeze(new y_(e));
}
function mr(e) {
  return Object.freeze(new i0(e));
}
function a0() {
  return Object.freeze(new i0(new Promise(() => {})));
}
function S_(e) {
  return e.every((t) => t.state === "hasValue")
    ? Ii(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
    ? Wl(
        $e(
          e.find((t) => t.state === "hasError"),
          "Invalid loadable passed to loadableAll"
        ).contents
      )
    : mr(Promise.all(e.map((t) => t.contents)));
}
function l0(e) {
  const n = (
      Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])
    ).map((o) => (Jr(o) ? o : Ae(o) ? mr(o) : Ii(o))),
    r = S_(n);
  return Array.isArray(e)
    ? r
    : r.map((o) =>
        Object.getOwnPropertyNames(e).reduce(
          (i, a, l) => ({ ...i, [a]: o[l] }),
          {}
        )
      );
}
function Jr(e) {
  return e instanceof Vl;
}
const w_ = {
  of: (e) => (Ae(e) ? mr(e) : Jr(e) ? e : Ii(e)),
  error: (e) => Wl(e),
  loading: () => a0(),
  all: l0,
  isLoadable: Jr,
};
var Sr = {
    loadableWithValue: Ii,
    loadableWithError: Wl,
    loadableWithPromise: mr,
    loadableLoading: a0,
    loadableAll: l0,
    isLoadable: Jr,
    RecoilLoadable: w_,
  },
  __ = Sr.loadableWithValue,
  x_ = Sr.loadableWithError,
  k_ = Sr.loadableWithPromise,
  E_ = Sr.loadableLoading,
  R_ = Sr.loadableAll,
  C_ = Sr.isLoadable,
  b_ = Sr.RecoilLoadable,
  Oi = Object.freeze({
    __proto__: null,
    loadableWithValue: __,
    loadableWithError: x_,
    loadableWithPromise: k_,
    loadableLoading: E_,
    loadableAll: R_,
    isLoadable: C_,
    RecoilLoadable: b_,
  });
const gc = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function T_(e, t) {
  var n, r;
  const o =
    (n = process.env[e]) === null ||
    n === void 0 ||
    (r = n.toLowerCase()) === null ||
    r === void 0
      ? void 0
      : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o))
    throw ue(`({}).${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function A_(e, t) {
  var n;
  const r = (n = process.env[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function N_() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (T_("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        gc.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      A_("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          gc.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
N_();
var ho = gc;
function Hl(e) {
  return ho.RECOIL_GKS_ENABLED.has(e);
}
Hl.setPass = (e) => {
  ho.RECOIL_GKS_ENABLED.add(e);
};
Hl.setFail = (e) => {
  ho.RECOIL_GKS_ENABLED.delete(e);
};
Hl.clear = () => {
  ho.RECOIL_GKS_ENABLED.clear();
};
var Ee = Hl;
function L_(e, t, { error: n } = {}) {
  return null;
}
var P_ = L_,
  Id = P_,
  ru,
  ou,
  iu;
const $_ =
    (ru = Se.createMutableSource) !== null && ru !== void 0
      ? ru
      : Se.unstable_createMutableSource,
  s0 =
    (ou = Se.useMutableSource) !== null && ou !== void 0
      ? ou
      : Se.unstable_useMutableSource,
  u0 =
    (iu = Se.useSyncExternalStore) !== null && iu !== void 0
      ? iu
      : Se.unstable_useSyncExternalStore;
function M_() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } =
    Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0
      ? e
      : n.currentDispatcher
    ).useSyncExternalStore != null
  );
}
function I_() {
  return Ee("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : Ee("recoil_sync_external_store") && u0 != null
    ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
    : Ee("recoil_mutable_source") &&
      s0 != null &&
      typeof window < "u" &&
      !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
    ? Ee("recoil_suppress_rerender_in_callback")
      ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
      : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
    : Ee("recoil_suppress_rerender_in_callback")
    ? { mode: "LEGACY", early: !0, concurrent: !1 }
    : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function O_() {
  return !1;
}
var Di = {
  createMutableSource: $_,
  useMutableSource: s0,
  useSyncExternalStore: u0,
  currentRendererSupportsUseSyncExternalStore: M_,
  reactMode: I_,
  isFastRefreshEnabled: O_,
};
class Od {
  constructor(t) {
    se(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class c0 extends Od {}
class d0 extends Od {}
function D_(e) {
  return e instanceof c0 || e instanceof d0;
}
var Gl = {
    AbstractRecoilValue: Od,
    RecoilState: c0,
    RecoilValueReadOnly: d0,
    isRecoilValue: D_,
  },
  z_ = Gl.AbstractRecoilValue,
  U_ = Gl.RecoilState,
  B_ = Gl.RecoilValueReadOnly,
  F_ = Gl.isRecoilValue,
  eo = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: z_,
    RecoilState: U_,
    RecoilValueReadOnly: B_,
    isRecoilValue: F_,
  });
function j_(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var Kl = j_;
class f0 {}
const V_ = new f0(),
  gr = new Map(),
  Dd = new Map();
function W_(e) {
  return Kl(e, (t) => $e(Dd.get(t)));
}
function H_(e) {
  if (gr.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function G_(e) {
  ho.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && H_(e.key), gr.set(e.key, e);
  const t =
    e.set == null
      ? new eo.RecoilValueReadOnly(e.key)
      : new eo.RecoilState(e.key);
  return Dd.set(e.key, t), t;
}
class p0 extends Error {}
function K_(e) {
  const t = gr.get(e);
  if (t == null) throw new p0(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function Q_(e) {
  return gr.get(e);
}
const gl = new Map();
function Y_(e) {
  var t;
  if (!Ee("recoil_memory_managament_2020")) return;
  const n = gr.get(e);
  if (
    n != null &&
    (t = n.shouldDeleteConfigOnRelease) !== null &&
    t !== void 0 &&
    t.call(n)
  ) {
    var r;
    gr.delete(e), (r = h0(e)) === null || r === void 0 || r(), gl.delete(e);
  }
}
function Z_(e, t) {
  Ee("recoil_memory_managament_2020") &&
    (t === void 0 ? gl.delete(e) : gl.set(e, t));
}
function h0(e) {
  return gl.get(e);
}
var Et = {
  nodes: gr,
  recoilValues: Dd,
  registerNode: G_,
  getNode: K_,
  getNodeMaybe: Q_,
  deleteNodeConfigIfPossible: Y_,
  setConfigDeletionHandler: Z_,
  getConfigDeletionHandler: h0,
  recoilValuesForKeys: W_,
  NodeMissingError: p0,
  DefaultValue: f0,
  DEFAULT_VALUE: V_,
};
function q_(e, t) {
  t();
}
var X_ = { enqueueExecution: q_ };
function J_(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var ex = J_(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (R) {
            return typeof R;
          }
        : function (R) {
            return R &&
              typeof Symbol == "function" &&
              R.constructor === Symbol &&
              R !== Symbol.prototype
              ? "symbol"
              : typeof R;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    a = o / 2,
    l = o / 4,
    s = {},
    u = function (x) {
      return function () {
        return x;
      };
    },
    c = (n.hash = function (R) {
      var x = typeof R > "u" ? "undefined" : t(R);
      if (x === "number") return R;
      x !== "string" && (R += "");
      for (var I = 0, j = 0, V = R.length; j < V; ++j) {
        var K = R.charCodeAt(j);
        I = ((I << 5) - I + K) | 0;
      }
      return I;
    }),
    d = function (x) {
      return (
        (x -= (x >> 1) & 1431655765),
        (x = (x & 858993459) + ((x >> 2) & 858993459)),
        (x = (x + (x >> 4)) & 252645135),
        (x += x >> 8),
        (x += x >> 16),
        x & 127
      );
    },
    g = function (x, I) {
      return (I >>> x) & i;
    },
    w = function (x) {
      return 1 << x;
    },
    p = function (x, I) {
      return d(x & (I - 1));
    },
    m = function (x, I, j, V) {
      var K = V;
      if (!x) {
        var oe = V.length;
        K = new Array(oe);
        for (var te = 0; te < oe; ++te) K[te] = V[te];
      }
      return (K[I] = j), K;
    },
    b = function (x, I, j) {
      var V = j.length - 1,
        K = 0,
        oe = 0,
        te = j;
      if (x) K = oe = I;
      else for (te = new Array(V); K < I; ) te[oe++] = j[K++];
      for (++K; K <= V; ) te[oe++] = j[K++];
      return x && (te.length = V), te;
    },
    h = function (x, I, j, V) {
      var K = V.length;
      if (x) {
        for (var oe = K; oe >= I; ) V[oe--] = V[oe];
        return (V[I] = j), V;
      }
      for (var te = 0, ne = 0, ce = new Array(K + 1); te < I; )
        ce[ne++] = V[te++];
      for (ce[I] = j; te < K; ) ce[++ne] = V[te++];
      return ce;
    },
    f = 1,
    v = 2,
    _ = 3,
    T = 4,
    L = { __hamt_isEmpty: !0 },
    N = function (x) {
      return x === L || (x && x.__hamt_isEmpty);
    },
    O = function (x, I, j, V) {
      return { type: f, edit: x, hash: I, key: j, value: V, _modify: z };
    },
    Y = function (x, I, j) {
      return { type: v, edit: x, hash: I, children: j, _modify: Z };
    },
    H = function (x, I, j) {
      return { type: _, edit: x, mask: I, children: j, _modify: X };
    },
    Me = function (x, I, j) {
      return { type: T, edit: x, size: I, children: j, _modify: fe };
    },
    Ie = function (x) {
      return x === L || x.type === f || x.type === v;
    },
    ie = function (x, I, j, V, K) {
      for (var oe = [], te = V, ne = 0, ce = 0; te; ++ce)
        te & 1 && (oe[ce] = K[ne++]), (te >>>= 1);
      return (oe[I] = j), Me(x, ne + 1, oe);
    },
    pe = function (x, I, j, V) {
      for (
        var K = new Array(I - 1), oe = 0, te = 0, ne = 0, ce = V.length;
        ne < ce;
        ++ne
      )
        if (ne !== j) {
          var Le = V[ne];
          Le && !N(Le) && ((K[oe++] = Le), (te |= 1 << ne));
        }
      return H(x, te, K);
    },
    Ce = function R(x, I, j, V, K, oe) {
      if (j === K) return Y(x, j, [oe, V]);
      var te = g(I, j),
        ne = g(I, K);
      return H(
        x,
        w(te) | w(ne),
        te === ne ? [R(x, I + r, j, V, K, oe)] : te < ne ? [V, oe] : [oe, V]
      );
    },
    Ue = function (x, I, j, V, K, oe, te, ne) {
      for (var ce = K.length, Le = 0; Le < ce; ++Le) {
        var gt = K[Le];
        if (j(te, gt.key)) {
          var Xe = gt.value,
            Mt = oe(Xe);
          return Mt === Xe
            ? K
            : Mt === s
            ? (--ne.value, b(x, Le, K))
            : m(x, Le, O(I, V, te, Mt), K);
        }
      }
      var jt = oe();
      return jt === s ? K : (++ne.value, m(x, ce, O(I, V, te, jt), K));
    },
    xe = function (x, I) {
      return x === I.edit;
    },
    z = function (x, I, j, V, K, oe, te) {
      if (I(oe, this.key)) {
        var ne = V(this.value);
        return ne === this.value
          ? this
          : ne === s
          ? (--te.value, L)
          : xe(x, this)
          ? ((this.value = ne), this)
          : O(x, K, oe, ne);
      }
      var ce = V();
      return ce === s
        ? this
        : (++te.value, Ce(x, j, this.hash, this, K, O(x, K, oe, ce)));
    },
    Z = function (x, I, j, V, K, oe, te) {
      if (K === this.hash) {
        var ne = xe(x, this),
          ce = Ue(ne, x, I, this.hash, this.children, V, oe, te);
        return ce === this.children
          ? this
          : ce.length > 1
          ? Y(x, this.hash, ce)
          : ce[0];
      }
      var Le = V();
      return Le === s
        ? this
        : (++te.value, Ce(x, j, this.hash, this, K, O(x, K, oe, Le)));
    },
    X = function (x, I, j, V, K, oe, te) {
      var ne = this.mask,
        ce = this.children,
        Le = g(j, K),
        gt = w(Le),
        Xe = p(ne, gt),
        Mt = ne & gt,
        jt = Mt ? ce[Xe] : L,
        xr = jt._modify(x, I, j + r, V, K, oe, te);
      if (jt === xr) return this;
      var Qi = xe(x, this),
        _o = ne,
        xo = void 0;
      if (Mt && N(xr)) {
        if (((_o &= ~gt), !_o)) return L;
        if (ce.length <= 2 && Ie(ce[Xe ^ 1])) return ce[Xe ^ 1];
        xo = b(Qi, Xe, ce);
      } else if (!Mt && !N(xr)) {
        if (ce.length >= a) return ie(x, Le, xr, ne, ce);
        (_o |= gt), (xo = h(Qi, Xe, xr, ce));
      } else xo = m(Qi, Xe, xr, ce);
      return Qi ? ((this.mask = _o), (this.children = xo), this) : H(x, _o, xo);
    },
    fe = function (x, I, j, V, K, oe, te) {
      var ne = this.size,
        ce = this.children,
        Le = g(j, K),
        gt = ce[Le],
        Xe = (gt || L)._modify(x, I, j + r, V, K, oe, te);
      if (gt === Xe) return this;
      var Mt = xe(x, this),
        jt = void 0;
      if (N(gt) && !N(Xe)) ++ne, (jt = m(Mt, Le, Xe, ce));
      else if (!N(gt) && N(Xe)) {
        if ((--ne, ne <= l)) return pe(x, ne, Le, ce);
        jt = m(Mt, Le, L, ce);
      } else jt = m(Mt, Le, Xe, ce);
      return Mt
        ? ((this.size = ne), (this.children = jt), this)
        : Me(x, ne, jt);
    };
  L._modify = function (R, x, I, j, V, K, oe) {
    var te = j();
    return te === s ? L : (++oe.value, O(R, V, K, te));
  };
  function y(R, x, I, j, V) {
    (this._editable = R),
      (this._edit = x),
      (this._config = I),
      (this._root = j),
      (this._size = V);
  }
  y.prototype.setTree = function (R, x) {
    return this._editable
      ? ((this._root = R), (this._size = x), this)
      : R === this._root
      ? this
      : new y(this._editable, this._edit, this._config, R, x);
  };
  var k = (n.tryGetHash = function (R, x, I, j) {
    for (var V = j._root, K = 0, oe = j._config.keyEq; ; )
      switch (V.type) {
        case f:
          return oe(I, V.key) ? V.value : R;
        case v: {
          if (x === V.hash)
            for (var te = V.children, ne = 0, ce = te.length; ne < ce; ++ne) {
              var Le = te[ne];
              if (oe(I, Le.key)) return Le.value;
            }
          return R;
        }
        case _: {
          var gt = g(K, x),
            Xe = w(gt);
          if (V.mask & Xe) {
            (V = V.children[p(V.mask, Xe)]), (K += r);
            break;
          }
          return R;
        }
        case T: {
          if (((V = V.children[g(K, x)]), V)) {
            K += r;
            break;
          }
          return R;
        }
        default:
          return R;
      }
  });
  y.prototype.tryGetHash = function (R, x, I) {
    return k(R, x, I, this);
  };
  var E = (n.tryGet = function (R, x, I) {
    return k(R, I._config.hash(x), x, I);
  });
  y.prototype.tryGet = function (R, x) {
    return E(R, x, this);
  };
  var M = (n.getHash = function (R, x, I) {
    return k(void 0, R, x, I);
  });
  (y.prototype.getHash = function (R, x) {
    return M(R, x, this);
  }),
    (n.get = function (R, x) {
      return k(void 0, x._config.hash(R), R, x);
    }),
    (y.prototype.get = function (R, x) {
      return E(x, R, this);
    });
  var S = (n.has = function (R, x, I) {
    return k(s, R, x, I) !== s;
  });
  y.prototype.hasHash = function (R, x) {
    return S(R, x, this);
  };
  var F = (n.has = function (R, x) {
    return S(x._config.hash(R), R, x);
  });
  y.prototype.has = function (R) {
    return F(R, this);
  };
  var $ = function (x, I) {
    return x === I;
  };
  (n.make = function (R) {
    return new y(
      0,
      0,
      { keyEq: (R && R.keyEq) || $, hash: (R && R.hash) || c },
      L,
      0
    );
  }),
    (n.empty = n.make());
  var B = (n.isEmpty = function (R) {
    return R && !!N(R._root);
  });
  y.prototype.isEmpty = function () {
    return B(this);
  };
  var q = (n.modifyHash = function (R, x, I, j) {
    var V = { value: j._size },
      K = j._root._modify(
        j._editable ? j._edit : NaN,
        j._config.keyEq,
        0,
        R,
        x,
        I,
        V
      );
    return j.setTree(K, V.value);
  });
  y.prototype.modifyHash = function (R, x, I) {
    return q(I, R, x, this);
  };
  var J = (n.modify = function (R, x, I) {
    return q(R, I._config.hash(x), x, I);
  });
  y.prototype.modify = function (R, x) {
    return J(x, R, this);
  };
  var W = (n.setHash = function (R, x, I, j) {
    return q(u(I), R, x, j);
  });
  y.prototype.setHash = function (R, x, I) {
    return W(R, x, I, this);
  };
  var ae = (n.set = function (R, x, I) {
    return W(I._config.hash(R), R, x, I);
  });
  y.prototype.set = function (R, x) {
    return ae(R, x, this);
  };
  var ke = u(s),
    le = (n.removeHash = function (R, x, I) {
      return q(ke, R, x, I);
    });
  y.prototype.removeHash = y.prototype.deleteHash = function (R, x) {
    return le(R, x, this);
  };
  var ge = (n.remove = function (R, x) {
    return le(x._config.hash(R), R, x);
  });
  y.prototype.remove = y.prototype.delete = function (R) {
    return ge(R, this);
  };
  var re = (n.beginMutation = function (R) {
    return new y(R._editable + 1, R._edit + 1, R._config, R._root, R._size);
  });
  y.prototype.beginMutation = function () {
    return re(this);
  };
  var Be = (n.endMutation = function (R) {
    return (R._editable = R._editable && R._editable - 1), R;
  });
  y.prototype.endMutation = function () {
    return Be(this);
  };
  var Jn = (n.mutate = function (R, x) {
    var I = re(x);
    return R(I), Be(I);
  });
  y.prototype.mutate = function (R) {
    return Jn(R, this);
  };
  var Ve = function (x) {
      return x && er(x[0], x[1], x[2], x[3], x[4]);
    },
    er = function (x, I, j, V, K) {
      for (; j < x; ) {
        var oe = I[j++];
        if (oe && !N(oe)) return Rn(oe, V, [x, I, j, V, K]);
      }
      return Ve(K);
    },
    Rn = function (x, I, j) {
      switch (x.type) {
        case f:
          return { value: I(x), rest: j };
        case v:
        case T:
        case _:
          var V = x.children;
          return er(V.length, V, 0, I, j);
        default:
          return Ve(j);
      }
    },
    Rt = { done: !0 };
  function ee(R) {
    this.v = R;
  }
  (ee.prototype.next = function () {
    if (!this.v) return Rt;
    var R = this.v;
    return (this.v = Ve(R.rest)), R;
  }),
    (ee.prototype[Symbol.iterator] = function () {
      return this;
    });
  var be = function (x, I) {
      return new ee(Rn(x._root, I));
    },
    So = function (x) {
      return [x.key, x.value];
    },
    wo = (n.entries = function (R) {
      return be(R, So);
    });
  y.prototype.entries = y.prototype[Symbol.iterator] = function () {
    return wo(this);
  };
  var qt = function (x) {
      return x.key;
    },
    Dy = (n.keys = function (R) {
      return be(R, qt);
    });
  y.prototype.keys = function () {
    return Dy(this);
  };
  var zy = function (x) {
      return x.value;
    },
    Uy =
      (n.values =
      y.prototype.values =
        function (R) {
          return be(R, zy);
        });
  y.prototype.values = function () {
    return Uy(this);
  };
  var wf = (n.fold = function (R, x, I) {
    var j = I._root;
    if (j.type === f) return R(x, j.value, j.key);
    for (var V = [j.children], K = void 0; (K = V.pop()); )
      for (var oe = 0, te = K.length; oe < te; ) {
        var ne = K[oe++];
        ne &&
          ne.type &&
          (ne.type === f ? (x = R(x, ne.value, ne.key)) : V.push(ne.children));
      }
    return x;
  });
  y.prototype.fold = function (R, x) {
    return wf(R, x, this);
  };
  var By = (n.forEach = function (R, x) {
    return wf(
      function (I, j, V) {
        return R(j, V, x);
      },
      null,
      x
    );
  });
  y.prototype.forEach = function (R) {
    return By(R, this);
  };
  var Fy = (n.count = function (R) {
    return R._size;
  });
  (y.prototype.count = function () {
    return Fy(this);
  }),
    Object.defineProperty(y.prototype, "size", { get: y.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class tx {
  constructor(t) {
    se(this, "_map", void 0),
      (this._map = new Map(t == null ? void 0 : t.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return Ud(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class zd {
  constructor(t) {
    if ((se(this, "_hamt", ex.empty.beginMutation()), t instanceof zd)) {
      const n = t._hamt.endMutation();
      (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return Ud(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function Ud(e) {
  return Ee("recoil_hamt_2020") ? new zd(e) : new tx(e);
}
var nx = { persistentMap: Ud },
  rx = nx.persistentMap,
  ox = Object.freeze({ __proto__: null, persistentMap: rx });
function ix(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var Xo = ix;
function ax(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var vl = ax;
function lx() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function sx(e) {
  return {
    nodeDeps: vl(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: vl(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function au(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    a = o.get(e);
  if (a && r && a !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const l = a == null ? t : Xo(t, a);
  for (const s of l) i.has(s) || i.set(s, new Set()), $e(i.get(s)).add(e);
  if (a) {
    const s = Xo(a, t);
    for (const u of s) {
      if (!i.has(u)) return;
      const c = $e(i.get(u));
      c.delete(e), c.size === 0 && i.delete(u);
    }
  }
}
function ux(e, t, n, r) {
  var o, i, a, l;
  const s = n.getState();
  r === s.currentTree.version ||
    r === ((o = s.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = s.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if (
    (au(e, t, u),
    r === ((a = s.previousTree) === null || a === void 0 ? void 0 : a.version))
  ) {
    const d = n.getGraph(s.currentTree.version);
    au(e, t, d, u);
  }
  if (
    r ===
      ((l = s.previousTree) === null || l === void 0 ? void 0 : l.version) ||
    r === s.currentTree.version
  ) {
    var c;
    const d = (c = s.nextTree) === null || c === void 0 ? void 0 : c.version;
    if (d !== void 0) {
      const g = n.getGraph(d);
      au(e, t, g, u);
    }
  }
}
var zi = { cloneGraph: sx, graph: lx, saveDepsToStore: ux };
let cx = 0;
const dx = () => cx++;
let fx = 0;
const px = () => fx++;
let hx = 0;
const mx = () => hx++;
var Ql = {
  getNextTreeStateVersion: dx,
  getNextStoreID: px,
  getNextComponentID: mx,
};
const { persistentMap: zp } = ox,
  { graph: gx } = zi,
  { getNextTreeStateVersion: m0 } = Ql;
function g0() {
  const e = m0();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: zp(),
    nonvalidatedAtoms: zp(),
  };
}
function vx() {
  const e = g0();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, gx()),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(),
  };
}
var v0 = {
  makeEmptyTreeState: g0,
  makeEmptyStoreState: vx,
  getNextTreeStateVersion: m0,
};
class y0 {}
function yx() {
  return new y0();
}
var Yl = { RetentionZone: y0, retentionZone: yx };
function Sx(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function wx(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function _x(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function xx(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function kx(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function Ex(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var S0 = {
  setByAddingToSet: Sx,
  setByDeletingFromSet: wx,
  mapBySettingInMap: _x,
  mapByUpdatingInMap: xx,
  mapByDeletingFromMap: kx,
  mapByDeletingMultipleFromMap: Ex,
};
function* Rx(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var Bd = Rx;
function Cx(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var w0 = Cx;
const { getNode: Ui, getNodeMaybe: bx, recoilValuesForKeys: Up } = Et,
  { RetentionZone: Bp } = Yl,
  { setByAddingToSet: Tx } = S0,
  Ax = Object.freeze(new Set());
class Nx extends Error {}
function Lx(e, t, n) {
  if (!Ee("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let a = r.get(i);
    a || r.set(i, (a = new Set())), a.add(t);
  }
  if (n instanceof Bp) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!Ee("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function a(l) {
      const s = i.nodesRetainedByZone.get(l);
      s == null || s.delete(t),
        s && s.size === 0 && i.nodesRetainedByZone.delete(l);
    }
    if (n instanceof Bp) a(n);
    else if (Array.isArray(n)) for (const l of n) a(l);
  };
}
function Fd(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = Ui(n),
    a = Lx(e, n, i.retainedBy),
    l = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    l(), a();
  });
}
function Px(e, t, n) {
  Fd(e, e.getState().currentTree, t, n);
}
function $x(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(),
    r.nodeCleanupFunctions.delete(t);
}
function Mx(e, t, n) {
  return Fd(e, t, n, "get"), Ui(n).get(e, t);
}
function _0(e, t, n) {
  return Ui(n).peek(e, t);
}
function Ix(e, t, n) {
  var r;
  const o = bx(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: Tx(e.dirtyAtoms, t),
    }
  );
}
function Ox(e, t, n, r) {
  const o = Ui(n);
  if (o.set == null) throw new Nx(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return Fd(e, t, n, "set"), i(e, t, r);
}
function Dx(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = Ui(n).nodeType;
  return w0(
    { type: i },
    {
      loadable: () => _0(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var a;
        return Up((a = o.nodeDeps.get(n)) !== null && a !== void 0 ? a : []);
      },
      subscribers: () => {
        var a, l;
        return {
          nodes: Up(Bd(x0(e, t, new Set([n])), (s) => s !== n)),
          components: Kl(
            (a =
              (l = r.nodeToComponentSubscriptions.get(n)) === null ||
              l === void 0
                ? void 0
                : l.values()) !== null && a !== void 0
              ? a
              : [],
            ([s]) => ({ name: s })
          ),
        };
      },
    }
  );
}
function x0(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let l = o.pop(); l; l = o.pop()) {
    var a;
    r.add(l);
    const s =
      (a = i.nodeToNodeSubscriptions.get(l)) !== null && a !== void 0 ? a : Ax;
    for (const u of s) r.has(u) || o.push(u);
  }
  return r;
}
var qn = {
  getNodeLoadable: Mx,
  peekNodeLoadable: _0,
  setNodeValue: Ox,
  initializeNode: Px,
  cleanUpNode: $x,
  setUnvalidatedAtomValue_DEPRECATED: Ix,
  peekNodeInfo: Dx,
  getDownstreamNodes: x0,
};
let k0 = null;
function zx(e) {
  k0 = e;
}
function Ux() {
  var e;
  (e = k0) === null || e === void 0 || e();
}
var E0 = { setInvalidateMemoizedSnapshot: zx, invalidateMemoizedSnapshot: Ux };
const { getDownstreamNodes: Bx, getNodeLoadable: R0, setNodeValue: Fx } = qn,
  { getNextComponentID: jx } = Ql,
  { getNode: Vx, getNodeMaybe: C0 } = Et,
  { DefaultValue: jd } = Et,
  { reactMode: Wx } = Di,
  {
    AbstractRecoilValue: Hx,
    RecoilState: Gx,
    RecoilValueReadOnly: Kx,
    isRecoilValue: Qx,
  } = eo,
  { invalidateMemoizedSnapshot: Yx } = E0;
function Zx(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version ===
      ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const a = R0(e, n, t);
  return a.state === "loading" && a.contents.catch(() => {}), a;
}
function qx(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof jd
        ? n.delete(o)
        : n.set(o, r);
    }),
    n
  );
}
function Xx(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = R0(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw ue(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function Jx(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      a = Xx(e, t, o, i),
      l = Fx(e, t, o.key, a);
    for (const [s, u] of l.entries()) vc(t, s, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    vc(t, o, i);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: o },
    } = n;
    t.dirtyAtoms.add(o);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: o },
        unvalidatedValue: i,
      } = n,
      a = C0(o);
    a == null || (r = a.invalidate) === null || r === void 0 || r.call(a, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else Id(`Unknown action ${n.type}`);
}
function vc(e, t, n) {
  n.state === "hasValue" && n.contents instanceof jd
    ? e.atomValues.delete(t)
    : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function b0(e, t) {
  e.replaceState((n) => {
    const r = T0(n);
    for (const o of t) Jx(e, r, o);
    return A0(e, r), Yx(), r;
  });
}
function Zl(e, t) {
  if (Jo.length) {
    const n = Jo[Jo.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else b0(e, [t]);
}
const Jo = [];
function ek() {
  const e = new Map();
  return (
    Jo.push(e),
    () => {
      for (const [t, n] of e) b0(t, n);
      Jo.pop();
    }
  );
}
function T0(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function A0(e, t) {
  const n = Bx(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = C0(i)) === null ||
      r === void 0 ||
      (o = r.invalidate) === null ||
      o === void 0 ||
      o.call(r, t);
  }
}
function N0(e, t, n) {
  Zl(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function tk(e, t, n) {
  if (n instanceof jd) return N0(e, t, n);
  Zl(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function nk(e, t) {
  Zl(e, { type: "markModified", recoilValue: t });
}
function rk(e, t, n) {
  Zl(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function ok(e, { key: t }, n, r = null) {
  const o = jx(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) ||
    i.nodeToComponentSubscriptions.set(t, new Map()),
    $e(i.nodeToComponentSubscriptions.get(t)).set(o, [
      r ?? "<not captured>",
      n,
    ]);
  const a = Wx();
  if (a.early && (a.mode === "LEGACY" || a.mode === "MUTABLE_SOURCE")) {
    const l = e.getState().nextTree;
    l && l.dirtyAtoms.has(t) && n(l);
  }
  return {
    release: () => {
      const l = e.getState(),
        s = l.nodeToComponentSubscriptions.get(t);
      s === void 0 ||
        !s.has(o) ||
        (s.delete(o), s.size === 0 && l.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function ik(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = Vx(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var un = {
  RecoilValueReadOnly: Kx,
  AbstractRecoilValue: Hx,
  RecoilState: Gx,
  getRecoilValueAsLoadable: Zx,
  setRecoilValue: N0,
  setRecoilValueLoadable: tk,
  markRecoilValueModified: nk,
  setUnvalidatedRecoilValue: rk,
  subscribeToRecoilValue: ok,
  isRecoilValue: Qx,
  applyAtomValueWrites: qx,
  batchStart: ek,
  writeLoadableToTreeState: vc,
  invalidateDownstreams: A0,
  copyTreeState: T0,
  refreshRecoilValue: ik,
};
function ak(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var lk = ak;
const { cleanUpNode: sk } = qn,
  { deleteNodeConfigIfPossible: uk, getNode: L0 } = Et,
  { RetentionZone: P0 } = Yl,
  ck = 12e4,
  $0 = new Set();
function M0(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const a of t)
    if (a instanceof P0) for (const l of hk(n, a)) o.add(l);
    else o.add(a);
  const i = dk(e, o);
  for (const a of i) pk(e, r, a);
}
function dk(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    a = new Set();
  return l(t), i;
  function l(s) {
    const u = new Set(),
      c = fk(e, r, s, i, a);
    for (const p of c) {
      var d;
      if (L0(p).retainedBy === "recoilRoot") {
        a.add(p);
        continue;
      }
      if (
        ((d = n.retention.referenceCounts.get(p)) !== null && d !== void 0
          ? d
          : 0) > 0
      ) {
        a.add(p);
        continue;
      }
      if (I0(p).some((b) => n.retention.referenceCounts.get(b))) {
        a.add(p);
        continue;
      }
      const m = o.nodeToNodeSubscriptions.get(p);
      if (m && lk(m, (b) => a.has(b))) {
        a.add(p);
        continue;
      }
      i.add(p), u.add(p);
    }
    const g = new Set();
    for (const p of u)
      for (const m of (w = o.nodeDeps.get(p)) !== null && w !== void 0
        ? w
        : $0) {
        var w;
        i.has(m) || g.add(m);
      }
    g.size && l(g);
  }
}
function fk(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    a = [],
    l = new Set();
  for (; n.size > 0; ) s($e(n.values().next().value));
  return a;
  function s(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (l.has(u)) return;
    const c = i.nodeToNodeSubscriptions.get(u);
    if (c) for (const d of c) s(d);
    l.add(u), n.delete(u), a.push(u);
  }
}
function pk(e, t, n) {
  if (!Ee("recoil_memory_managament_2020")) return;
  sk(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = I0(n);
  for (const s of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(s)) === null ||
      i === void 0 ||
      i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const a = r.graphsByVersion.get(t.version);
  if (a) {
    const s = a.nodeDeps.get(n);
    if (s !== void 0) {
      a.nodeDeps.delete(n);
      for (const u of s) {
        var l;
        (l = a.nodeToNodeSubscriptions.get(u)) === null ||
          l === void 0 ||
          l.delete(n);
      }
    }
    a.nodeToNodeSubscriptions.delete(n);
  }
  uk(n);
}
function hk(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0
    ? n
    : $0;
}
function I0(e) {
  const t = L0(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot"
    ? []
    : t instanceof P0
    ? [t]
    : t;
}
function mk(e, t) {
  const n = e.getState();
  n.nextTree
    ? n.retention.retainablesToCheckForRelease.add(t)
    : M0(e, new Set([t]));
}
function gk(e, t, n) {
  var r;
  if (!Ee("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? O0(e, t) : o.set(t, i);
}
function O0(e, t) {
  if (!Ee("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), mk(e, t);
}
function vk(e) {
  if (!Ee("recoil_memory_managament_2020")) return;
  const t = e.getState();
  M0(e, t.retention.retainablesToCheckForRelease),
    t.retention.retainablesToCheckForRelease.clear();
}
function yk(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var wr = {
  SUSPENSE_TIMEOUT_MS: ck,
  updateRetainCount: gk,
  updateRetainCountToZero: O0,
  releaseScheduledRetainablesNow: vk,
  retainedByOptionWithDefault: yk,
};
const { unstable_batchedUpdates: Sk } = gw;
var wk = { unstable_batchedUpdates: Sk };
const { unstable_batchedUpdates: _k } = wk;
var xk = { unstable_batchedUpdates: _k };
const { batchStart: kk } = un,
  { unstable_batchedUpdates: Ek } = xk;
let Vd = Ek || ((e) => e());
const Rk = (e) => {
    Vd = e;
  },
  Ck = () => Vd,
  bk = (e) => {
    Vd(() => {
      let t = () => {};
      try {
        (t = kk()), e();
      } finally {
        t();
      }
    });
  };
var ql = { getBatcher: Ck, setBatcher: Rk, batchUpdates: bk };
function* Tk(e) {
  for (const t of e) for (const n of t) yield n;
}
var D0 = Tk;
const z0 = typeof Window > "u" || typeof window > "u",
  Ak = (e) => !z0 && (e === window || e instanceof Window),
  Nk = typeof navigator < "u" && navigator.product === "ReactNative";
var Xl = { isSSR: z0, isReactNative: Nk, isWindow: Ak };
function Lk(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function Pk(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function $k(e, t) {
  let n, r;
  return [
    (...a) => {
      const l = t(...a);
      return n === l || ((n = l), (r = e(...a))), r;
    },
    () => {
      n = null;
    },
  ];
}
var Mk = {
  memoizeWithArgsHash: Lk,
  memoizeOneWithArgsHash: Pk,
  memoizeOneWithArgsHashAndInvalidation: $k,
};
const { batchUpdates: yc } = ql,
  { initializeNode: Ik, peekNodeInfo: Ok } = qn,
  { graph: Dk } = zi,
  { getNextStoreID: zk } = Ql,
  { DEFAULT_VALUE: Uk, recoilValues: Fp, recoilValuesForKeys: jp } = Et,
  {
    AbstractRecoilValue: Bk,
    getRecoilValueAsLoadable: Fk,
    setRecoilValue: Vp,
    setUnvalidatedRecoilValue: jk,
  } = un,
  { updateRetainCount: Ia } = wr,
  { setInvalidateMemoizedSnapshot: Vk } = E0,
  { getNextTreeStateVersion: Wk, makeEmptyStoreState: Hk } = v0,
  { isSSR: Gk } = Xl,
  { memoizeOneWithArgsHashAndInvalidation: Kk } = Mk;
class Jl {
  constructor(t, n) {
    se(this, "_store", void 0),
      se(this, "_refCount", 1),
      se(
        this,
        "getLoadable",
        (r) => (this.checkRefCount_INTERNAL(), Fk(this._store, r))
      ),
      se(
        this,
        "getPromise",
        (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())
      ),
      se(this, "getNodes_UNSTABLE", (r) => {
        if (
          (this.checkRefCount_INTERNAL(),
          (r == null ? void 0 : r.isModified) === !0)
        ) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const a = this._store.getState().currentTree;
          return jp(a.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? Fp.values()
          : r.isInitialized === !0
          ? jp(D0([o, i]))
          : Bd(Fp.values(), ({ key: a }) => !o.has(a) && !i.has(a));
      }),
      se(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (
          this.checkRefCount_INTERNAL(),
          Ok(this._store, this._store.getState().currentTree, r)
        )
      ),
      se(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new Sc(this, yc);
        return r(o), o;
      }),
      se(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new Sc(this, yc);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: zk(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return $e(o.get(r));
          const i = Dk();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw ue("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms)
      Ik(this._store, r, "get"), Ia(this._store, r, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    Gk || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !Ee("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    Ee("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return (
      this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
    );
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function U0(e, t, n = !1) {
  const r = e.getState(),
    o = n ? Wk() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(
      Kl(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])
    ),
  };
}
function Qk(e) {
  const t = new Jl(Hk());
  return e != null ? t.map(e) : t;
}
const [Wp, B0] = Kk(
  (e, t) => {
    var n;
    const r = e.getState(),
      o =
        t === "latest"
          ? (n = r.nextTree) !== null && n !== void 0
            ? n
            : r.currentTree
          : $e(r.previousTree);
    return new Jl(U0(e, o), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String(
        (n = e.getState().nextTree) === null || n === void 0
          ? void 0
          : n.version
      ) +
      String(e.getState().currentTree.version) +
      String(
        (r = e.getState().previousTree) === null || r === void 0
          ? void 0
          : r.version
      )
    );
  }
);
Vk(B0);
function Yk(e, t = "latest") {
  const n = Wp(e, t);
  return n.isRetained() ? n : (B0(), Wp(e, t));
}
class Sc extends Jl {
  constructor(t, n) {
    super(
      U0(
        t.getStore_INTERNAL(),
        t.getStore_INTERNAL().getState().currentTree,
        !0
      ),
      t.getStoreID()
    ),
      se(this, "_batch", void 0),
      se(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          Ia(i, r.key, 1), Vp(this.getStore_INTERNAL(), r, o);
        });
      }),
      se(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          Ia(o, r.key, 1), Vp(this.getStore_INTERNAL(), r, Uk);
        });
      }),
      se(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        yc(() => {
          for (const [i, a] of r.entries()) Ia(o, i, 1), jk(o, new Bk(i), a);
        });
      }),
      (this._batch = n);
  }
}
var es = {
    Snapshot: Jl,
    MutableSnapshot: Sc,
    freshSnapshot: Qk,
    cloneSnapshot: Yk,
  },
  Zk = es.Snapshot,
  qk = es.MutableSnapshot,
  Xk = es.freshSnapshot,
  Jk = es.cloneSnapshot,
  ts = Object.freeze({
    __proto__: null,
    Snapshot: Zk,
    MutableSnapshot: qk,
    freshSnapshot: Xk,
    cloneSnapshot: Jk,
  });
function eE(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var tE = eE;
const { useRef: nE } = Se;
function rE(e) {
  const t = nE(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var Hp = rE;
const { getNextTreeStateVersion: oE, makeEmptyStoreState: F0 } = v0,
  {
    cleanUpNode: iE,
    getDownstreamNodes: aE,
    initializeNode: lE,
    setNodeValue: sE,
    setUnvalidatedAtomValue_DEPRECATED: uE,
  } = qn,
  { graph: cE } = zi,
  { cloneGraph: dE } = zi,
  { getNextStoreID: j0 } = Ql,
  { createMutableSource: lu, reactMode: V0 } = Di,
  { applyAtomValueWrites: fE } = un,
  { releaseScheduledRetainablesNow: W0 } = wr,
  { freshSnapshot: pE } = ts,
  {
    useCallback: hE,
    useContext: H0,
    useEffect: wc,
    useMemo: mE,
    useRef: gE,
    useState: vE,
  } = Se;
function Lo() {
  throw ue("This component must be used inside a <RecoilRoot> component.");
}
const G0 = Object.freeze({
  storeID: j0(),
  getState: Lo,
  replaceState: Lo,
  getGraph: Lo,
  subscribeToTransactions: Lo,
  addTransactionMetadata: Lo,
});
let _c = !1;
function Gp(e) {
  if (_c)
    throw ue(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    Ee("recoil_memory_managament_2020") &&
      Ee("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      W0(e);
    const n = t.currentTree.version,
      r = oE();
    (t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set(),
      transactionMetadata: {},
    }),
      t.graphsByVersion.set(r, dE($e(t.graphsByVersion.get(n))));
  }
}
const K0 = Se.createContext({ current: G0 }),
  ns = () => H0(K0),
  Q0 = Se.createContext(null);
function yE() {
  return H0(Q0);
}
function Wd(e, t, n) {
  const r = aE(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [a, [l, s]] of i) s(n);
  }
}
function Y0(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions)
      if (r.has(o)) for (const [a, l] of i) l(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!V0().early || t.suspendedComponentResolvers.size > 0) &&
      (Wd(e, t, n),
      t.suspendedComponentResolvers.forEach((o) => o()),
      t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(
      0,
      t.queuedComponentCallbacks_DEPRECATED.length
    );
}
function SE(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      Y0(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Id(
            "Ended batch with no previous state, which is unexpected",
            "recoil"
          ),
      (t.previousTree = null),
      Ee("recoil_memory_managament_2020") && n == null && W0(e);
  } finally {
    t.commitDepth--;
  }
}
function wE({ setNotifyBatcherOfChange: e }) {
  const t = ns(),
    [, n] = vE([]);
  return (
    e(() => n({})),
    wc(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    wc(() => {
      X_.enqueueExecution("Batcher", () => {
        SE(t.current);
      });
    }),
    null
  );
}
function _E(e, t) {
  const n = F0();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          a = sE(e, i, r.key, o),
          l = new Set(a.keys()),
          s = i.nonvalidatedAtoms.clone();
        for (const u of l) s.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: tE(i.dirtyAtoms, l),
          atomValues: fE(i.atomValues, a),
          nonvalidatedAtoms: s,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = uE(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function xE(e) {
  const t = pE(e),
    n = t.getStore_INTERNAL().getState();
  return (
    t.retain(),
    n.nodeCleanupFunctions.forEach((r) => r()),
    n.nodeCleanupFunctions.clear(),
    n
  );
}
let Kp = 0;
function kE({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: r,
}) {
  let o;
  const i = (w) => {
      const p = o.current.graphsByVersion;
      if (p.has(w)) return $e(p.get(w));
      const m = cE();
      return p.set(w, m), m;
    },
    a = (w, p) => {
      if (p == null) {
        const { transactionSubscriptions: m } = d.current.getState(),
          b = Kp++;
        return (
          m.set(b, w),
          {
            release: () => {
              m.delete(b);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: m } = d.current.getState();
        m.has(p) || m.set(p, new Map());
        const b = Kp++;
        return (
          $e(m.get(p)).set(b, w),
          {
            release: () => {
              const h = m.get(p);
              h && (h.delete(b), h.size === 0 && m.delete(p));
            },
          }
        );
      }
    },
    l = (w) => {
      Gp(d.current);
      for (const p of Object.keys(w))
        $e(d.current.getState().nextTree).transactionMetadata[p] = w[p];
    },
    s = (w) => {
      Gp(d.current);
      const p = $e(o.current.nextTree);
      let m;
      try {
        (_c = !0), (m = w(p));
      } finally {
        _c = !1;
      }
      m !== p &&
        ((o.current.nextTree = m),
        V0().early && Wd(d.current, o.current, m),
        $e(u.current)());
    },
    u = gE(null),
    c = hE(
      (w) => {
        u.current = w;
      },
      [u]
    ),
    d = Hp(
      () =>
        n ?? {
          storeID: j0(),
          getState: () => o.current,
          replaceState: s,
          getGraph: i,
          subscribeToTransactions: a,
          addTransactionMetadata: l,
        }
    );
  n != null && (d.current = n),
    (o = Hp(() => (e != null ? _E(d.current, e) : t != null ? xE(t) : F0())));
  const g = mE(
    () => (lu == null ? void 0 : lu(o, () => o.current.currentTree.version)),
    [o]
  );
  return (
    wc(() => {
      const w = d.current;
      for (const p of new Set(w.getState().knownAtoms)) lE(w, p, "get");
      return () => {
        for (const p of w.getState().knownAtoms) iE(w, p);
      };
    }, [d]),
    Se.createElement(
      K0.Provider,
      { value: d },
      Se.createElement(
        Q0.Provider,
        { value: g },
        Se.createElement(wE, { setNotifyBatcherOfChange: c }),
        r
      )
    )
  );
}
function EE(e) {
  const { override: t, ...n } = e,
    r = ns();
  return t === !1 && r.current !== G0 ? e.children : Se.createElement(kE, n);
}
function RE() {
  return ns().current.storeID;
}
var kn = {
  RecoilRoot: EE,
  useStoreRef: ns,
  useRecoilMutableSource: yE,
  useRecoilStoreID: RE,
  notifyComponents_FOR_TESTING: Wd,
  sendEndOfBatchNotifications_FOR_TESTING: Y0,
};
function CE(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var bE = CE;
const { useEffect: TE, useRef: AE } = Se;
function NE(e) {
  const t = AE();
  return (
    TE(() => {
      t.current = e;
    }),
    t.current
  );
}
var Z0 = NE;
const { useStoreRef: LE } = kn,
  { SUSPENSE_TIMEOUT_MS: PE } = wr,
  { updateRetainCount: Po } = wr,
  { RetentionZone: $E } = Yl,
  { useEffect: ME, useRef: IE } = Se,
  { isSSR: Qp } = Xl;
function OE(e) {
  if (Ee("recoil_memory_managament_2020")) return DE(e);
}
function DE(e) {
  const n = (Array.isArray(e) ? e : [e]).map((a) =>
      a instanceof $E ? a : a.key
    ),
    r = LE();
  ME(() => {
    if (!Ee("recoil_memory_managament_2020")) return;
    const a = r.current;
    if (o.current && !Qp) window.clearTimeout(o.current), (o.current = null);
    else for (const l of n) Po(a, l, 1);
    return () => {
      for (const l of n) Po(a, l, -1);
    };
  }, [r, ...n]);
  const o = IE(),
    i = Z0(n);
  if (!Qp && (i === void 0 || !bE(i, n))) {
    const a = r.current;
    for (const l of n) Po(a, l, 1);
    if (i) for (const l of i) Po(a, l, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const l of n) Po(a, l, -1);
      }, PE));
  }
}
var Hd = OE;
function zE() {
  return "<component name not available>";
}
var Bi = zE;
const { batchUpdates: UE } = ql,
  { DEFAULT_VALUE: q0 } = Et,
  {
    currentRendererSupportsUseSyncExternalStore: BE,
    reactMode: mo,
    useMutableSource: FE,
    useSyncExternalStore: jE,
  } = Di,
  { useRecoilMutableSource: VE, useStoreRef: cn } = kn,
  {
    AbstractRecoilValue: xc,
    getRecoilValueAsLoadable: Fi,
    setRecoilValue: yl,
    setUnvalidatedRecoilValue: WE,
    subscribeToRecoilValue: to,
  } = un,
  {
    useCallback: xt,
    useEffect: no,
    useMemo: X0,
    useRef: ei,
    useState: Gd,
  } = Se,
  { setByAddingToSet: HE } = S0,
  { isSSR: GE } = Xl;
function Kd(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          GE &&
            Ae(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
    ? e.contents
    : ue(`Invalid value of loadable atom "${t.key}"`);
}
function KE() {
  const e = Bi(),
    t = cn(),
    [, n] = Gd([]),
    r = ei(new Set());
  r.current = new Set();
  const o = ei(new Set()),
    i = ei(new Map()),
    a = xt(
      (s) => {
        const u = i.current.get(s);
        u && (u.release(), i.current.delete(s));
      },
      [i]
    ),
    l = xt((s, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    no(() => {
      const s = t.current;
      Xo(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const c = to(s, new xc(u), (g) => l(g, u), e);
        i.current.set(u, c),
          s.getState().nextTree
            ? s.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                l(s.getState(), u);
              })
            : l(s.getState(), u);
      }),
        Xo(o.current, r.current).forEach((u) => {
          a(u);
        }),
        (o.current = r.current);
    }),
    no(() => {
      const s = i.current;
      return (
        Xo(r.current, new Set(s.keys())).forEach((u) => {
          const c = to(t.current, new xc(u), (d) => l(d, u), e);
          s.set(u, c);
        }),
        () => s.forEach((u, c) => a(c))
      );
    }, [e, t, a, l]),
    X0(() => {
      function s(p) {
        return (m) => {
          yl(t.current, p, m);
        };
      }
      function u(p) {
        return () => yl(t.current, p, q0);
      }
      function c(p) {
        var m;
        r.current.has(p.key) || (r.current = HE(r.current, p.key));
        const b = t.current.getState();
        return Fi(
          t.current,
          p,
          mo().early && (m = b.nextTree) !== null && m !== void 0
            ? m
            : b.currentTree
        );
      }
      function d(p) {
        const m = c(p);
        return Kd(m, p, t);
      }
      function g(p) {
        return [d(p), s(p)];
      }
      function w(p) {
        return [c(p), s(p)];
      }
      return {
        getRecoilValue: d,
        getRecoilValueLoadable: c,
        getRecoilState: g,
        getRecoilStateLoadable: w,
        getSetRecoilState: s,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const QE = { current: 0 };
function YE(e) {
  const t = cn(),
    n = Bi(),
    r = xt(() => {
      var l;
      const s = t.current,
        u = s.getState(),
        c =
          mo().early && (l = u.nextTree) !== null && l !== void 0
            ? l
            : u.currentTree;
      return { loadable: Fi(s, e, c), key: e.key };
    }, [t, e]),
    o = xt((l) => {
      let s;
      return () => {
        var u, c;
        const d = l();
        return (u = s) !== null &&
          u !== void 0 &&
          u.loadable.is(d.loadable) &&
          ((c = s) === null || c === void 0 ? void 0 : c.key) === d.key
          ? s
          : ((s = d), d);
      };
    }, []),
    i = X0(() => o(r), [r, o]),
    a = xt(
      (l) => {
        const s = t.current;
        return to(s, e, l, n).release;
      },
      [t, e, n]
    );
  return jE(a, i, i).loadable;
}
function ZE(e) {
  const t = cn(),
    n = xt(() => {
      var u;
      const c = t.current,
        d = c.getState(),
        g =
          mo().early && (u = d.nextTree) !== null && u !== void 0
            ? u
            : d.currentTree;
      return Fi(c, e, g);
    }, [t, e]),
    r = xt(() => n(), [n]),
    o = Bi(),
    i = xt(
      (u, c) => {
        const d = t.current;
        return to(
          d,
          e,
          () => {
            if (!Ee("recoil_suppress_rerender_in_callback")) return c();
            const w = n();
            s.current.is(w) || c(), (s.current = w);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    a = VE();
  if (a == null)
    throw ue(
      "Recoil hooks must be used in components contained within a <RecoilRoot> component."
    );
  const l = FE(a, r, i),
    s = ei(l);
  return (
    no(() => {
      s.current = l;
    }),
    l
  );
}
function kc(e) {
  const t = cn(),
    n = Bi(),
    r = xt(() => {
      var s;
      const u = t.current,
        c = u.getState(),
        d =
          mo().early && (s = c.nextTree) !== null && s !== void 0
            ? s
            : c.currentTree;
      return Fi(u, e, d);
    }, [t, e]),
    o = xt(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = xt(
      (s) => {
        const u = o();
        return s.loadable.is(u.loadable) && s.key === u.key ? s : u;
      },
      [o]
    );
  no(() => {
    const s = to(
      t.current,
      e,
      (u) => {
        l(i);
      },
      n
    );
    return l(i), s.release;
  }, [n, e, t, i]);
  const [a, l] = Gd(o);
  return a.key !== e.key ? o().loadable : a.loadable;
}
function qE(e) {
  const t = cn(),
    [, n] = Gd([]),
    r = Bi(),
    o = xt(() => {
      var l;
      const s = t.current,
        u = s.getState(),
        c =
          mo().early && (l = u.nextTree) !== null && l !== void 0
            ? l
            : u.currentTree;
      return Fi(s, e, c);
    }, [t, e]),
    i = o(),
    a = ei(i);
  return (
    no(() => {
      a.current = i;
    }),
    no(() => {
      const l = t.current,
        s = l.getState(),
        u = to(
          l,
          e,
          (d) => {
            var g;
            if (!Ee("recoil_suppress_rerender_in_callback")) return n([]);
            const w = o();
            ((g = a.current) !== null && g !== void 0 && g.is(w)) || n(w),
              (a.current = w);
          },
          r
        );
      if (s.nextTree)
        l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (a.current = null), n([]);
        });
      else {
        var c;
        if (!Ee("recoil_suppress_rerender_in_callback")) return n([]);
        const d = o();
        ((c = a.current) !== null && c !== void 0 && c.is(d)) || n(d),
          (a.current = d);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function Qd(e) {
  return (
    Ee("recoil_memory_managament_2020") && Hd(e),
    {
      TRANSITION_SUPPORT: kc,
      SYNC_EXTERNAL_STORE: BE() ? YE : kc,
      MUTABLE_SOURCE: ZE,
      LEGACY: qE,
    }[mo().mode](e)
  );
}
function J0(e) {
  const t = cn(),
    n = Qd(e);
  return Kd(n, e, t);
}
function rs(e) {
  const t = cn();
  return xt(
    (n) => {
      yl(t.current, e, n);
    },
    [t, e]
  );
}
function XE(e) {
  const t = cn();
  return xt(() => {
    yl(t.current, e, q0);
  }, [t, e]);
}
function JE(e) {
  return [J0(e), rs(e)];
}
function eR(e) {
  return [Qd(e), rs(e)];
}
function tR() {
  const e = cn();
  return (t, n = {}) => {
    UE(() => {
      e.current.addTransactionMetadata(n),
        t.forEach((r, o) => WE(e.current, new xc(o), r));
    });
  };
}
function ev(e) {
  return Ee("recoil_memory_managament_2020") && Hd(e), kc(e);
}
function tv(e) {
  const t = cn(),
    n = ev(e);
  return Kd(n, e, t);
}
function nR(e) {
  return [tv(e), rs(e)];
}
var rR = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: QE,
  useRecoilInterface: KE,
  useRecoilState: JE,
  useRecoilStateLoadable: eR,
  useRecoilValue: J0,
  useRecoilValueLoadable: Qd,
  useResetRecoilState: XE,
  useSetRecoilState: rs,
  useSetUnvalidatedAtomValues: tR,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: ev,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: tv,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: nR,
};
function oR(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var iR = oR;
function aR(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var lR = aR;
function sR(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var uR = sR;
const { batchUpdates: cR } = ql,
  { DEFAULT_VALUE: dR, getNode: nv, nodes: fR } = Et,
  { useStoreRef: Yd } = kn,
  { AbstractRecoilValue: pR, setRecoilValueLoadable: hR } = un,
  { SUSPENSE_TIMEOUT_MS: mR } = wr,
  { cloneSnapshot: Sl } = ts,
  { useCallback: os, useEffect: rv, useRef: Yp, useState: gR } = Se,
  { isSSR: Zp } = Xl;
function is(e) {
  const t = Yd();
  rv(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function qp(e) {
  const t = e.atomValues.toMap(),
    n = vl(
      iR(t, (r, o) => {
        const a = nv(o).persistence_UNSTABLE;
        return a != null && a.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return uR(e.nonvalidatedAtoms.toMap(), n);
}
function vR(e) {
  is(
    os(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = qp(r),
          i = qp(n),
          a = vl(fR, (s) => {
            var u, c, d, g;
            return {
              persistence_UNSTABLE: {
                type:
                  (u =
                    (c = s.persistence_UNSTABLE) === null || c === void 0
                      ? void 0
                      : c.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (d =
                    (g = s.persistence_UNSTABLE) === null || g === void 0
                      ? void 0
                      : g.backButton) !== null && d !== void 0
                    ? d
                    : !1,
              },
            };
          }),
          l = lR(r.dirtyAtoms, (s) => o.has(s) || i.has(s));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: a,
          modifiedAtoms: l,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function yR(e) {
  is(
    os(
      (t) => {
        const n = Sl(t, "latest"),
          r = Sl(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function SR() {
  const e = Yd(),
    [t, n] = gR(() => Sl(e.current)),
    r = Z0(t),
    o = Yp(),
    i = Yp();
  if (
    (is(os((l) => n(Sl(l)), [])),
    rv(() => {
      const l = t.retain();
      if (o.current && !Zp) {
        var s;
        window.clearTimeout(o.current),
          (o.current = null),
          (s = i.current) === null || s === void 0 || s.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(l, 10);
      };
    }, [t]),
    r !== t && !Zp)
  ) {
    if (o.current) {
      var a;
      window.clearTimeout(o.current),
        (o.current = null),
        (a = i.current) === null || a === void 0 || a.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var l;
        (o.current = null),
          (l = i.current) === null || l === void 0 || l.call(i),
          (i.current = null);
      }, mR));
  }
  return t;
}
function ov(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  cR(() => {
    const a = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const c of u) {
        var l, s;
        ((l = o.atomValues.get(c)) === null || l === void 0
          ? void 0
          : l.contents) !==
          ((s = i.atomValues.get(c)) === null || s === void 0
            ? void 0
            : s.contents) &&
          nv(c).shouldRestoreFromSnapshots &&
          a.add(c);
      }
    a.forEach((u) => {
      hR(e, new pR(u), i.atomValues.has(u) ? $e(i.atomValues.get(u)) : dR);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function wR() {
  const e = Yd();
  return os((t) => ov(e.current, t), [e]);
}
var iv = {
  useRecoilSnapshot: SR,
  gotoSnapshot: ov,
  useGotoRecoilSnapshot: wR,
  useRecoilTransactionObserver: yR,
  useTransactionObservation_DEPRECATED: vR,
  useTransactionSubscription_DEPRECATED: is,
};
const { peekNodeInfo: _R } = qn,
  { useStoreRef: xR } = kn;
function kR() {
  const e = xR();
  return ({ key: t }) => _R(e.current, e.current.getState().currentTree, t);
}
var ER = kR;
const { reactMode: RR } = Di,
  { RecoilRoot: CR, useStoreRef: bR } = kn,
  { useMemo: TR } = Se;
function AR() {
  RR().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = bR().current;
  return TR(() => {
    function t({ children: n }) {
      return Se.createElement(CR, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var NR = AR;
const { loadableWithValue: LR } = Oi,
  { initializeNode: PR } = qn,
  { DEFAULT_VALUE: $R, getNode: MR } = Et,
  {
    copyTreeState: IR,
    getRecoilValueAsLoadable: OR,
    invalidateDownstreams: DR,
    writeLoadableToTreeState: zR,
  } = un;
function Xp(e) {
  return MR(e.key).nodeType === "atom";
}
class UR {
  constructor(t, n) {
    se(this, "_store", void 0),
      se(this, "_treeState", void 0),
      se(this, "_changes", void 0),
      se(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Xp(r))
          throw ue("Reading selectors within atomicUpdate is not supported");
        const o = OR(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : ue(
              `Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`
            );
      }),
      se(this, "set", (r, o) => {
        if (!Xp(r))
          throw ue("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else PR(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      se(this, "reset", (r) => {
        this.set(r, $R);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = IR(this._treeState);
    for (const [n, r] of this._changes) zR(t, n, LR(r));
    return DR(this._store, t), t;
  }
}
function BR(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new UR(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var FR = { atomicUpdater: BR },
  jR = FR.atomicUpdater,
  av = Object.freeze({ __proto__: null, atomicUpdater: jR });
function VR(e, t) {
  if (!e) throw new Error(t);
}
var WR = VR,
  jo = WR;
const { atomicUpdater: HR } = av,
  { batchUpdates: GR } = ql,
  { DEFAULT_VALUE: KR } = Et,
  { useStoreRef: QR } = kn,
  { refreshRecoilValue: YR, setRecoilValue: Jp } = un,
  { cloneSnapshot: ZR } = ts,
  { gotoSnapshot: qR } = iv,
  { useCallback: XR } = Se;
class lv {}
const JR = new lv();
function sv(e, t, n, r) {
  let o = JR,
    i;
  if (
    (GR(() => {
      const l =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw ue(l);
      const s = w0(
          {
            ...(r ?? {}),
            set: (c, d) => Jp(e, c, d),
            reset: (c) => Jp(e, c, KR),
            refresh: (c) => YR(e, c),
            gotoSnapshot: (c) => qR(e, c),
            transact_UNSTABLE: (c) => HR(e)(c),
          },
          {
            snapshot: () => {
              const c = ZR(e);
              return (i = c.retain()), c;
            },
          }
        ),
        u = t(s);
      if (typeof u != "function") throw ue(l);
      o = u(...n);
    }),
    o instanceof lv && jo(!1),
    Ae(o))
  )
    o = o.finally(() => {
      var l;
      (l = i) === null || l === void 0 || l();
    });
  else {
    var a;
    (a = i) === null || a === void 0 || a();
  }
  return o;
}
function eC(e, t) {
  const n = QR();
  return XR((...r) => sv(n.current, e, r), t != null ? [...t, n] : void 0);
}
var uv = { recoilCallback: sv, useRecoilCallback: eC };
const { useStoreRef: tC } = kn,
  { refreshRecoilValue: nC } = un,
  { useCallback: rC } = Se;
function oC(e) {
  const t = tC();
  return rC(() => {
    const n = t.current;
    nC(n, e);
  }, [e, t]);
}
var iC = oC;
const { atomicUpdater: aC } = av,
  { useStoreRef: lC } = kn,
  { useMemo: sC } = Se;
function uC(e, t) {
  const n = lC();
  return sC(
    () =>
      (...r) => {
        aC(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var cC = uC;
class dC {
  constructor(t) {
    se(this, "value", void 0), (this.value = t);
  }
}
var fC = { WrappedValue: dC },
  pC = fC.WrappedValue,
  cv = Object.freeze({ __proto__: null, WrappedValue: pC });
const { isFastRefreshEnabled: hC } = Di;
class eh extends Error {}
class mC {
  constructor(t) {
    var n, r, o;
    se(this, "_name", void 0),
      se(this, "_numLeafs", void 0),
      se(this, "_root", void 0),
      se(this, "_onHit", void 0),
      se(this, "_onSet", void 0),
      se(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit =
        (n = t == null ? void 0 : t.onHit) !== null && n !== void 0
          ? n
          : () => {}),
      (this._onSet =
        (r = t == null ? void 0 : t.onSet) !== null && r !== void 0
          ? r
          : () => {}),
      (this._mapNodeValue =
        (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0
          ? o
          : (i) => i);
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0
      ? void 0
      : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf"))
        return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o);
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, a, l, s;
      let u, c;
      for (const [b, h] of t) {
        var d, g, w;
        const f = this._root;
        if ((f == null ? void 0 : f.type) === "leaf")
          throw this.invalidCacheError();
        const v = u;
        if (
          ((u = v ? v.branches.get(c) : f),
          (u =
            (d = u) !== null && d !== void 0
              ? d
              : {
                  type: "branch",
                  nodeKey: b,
                  parent: v,
                  branches: new Map(),
                  branchKey: c,
                }),
          u.type !== "branch" || u.nodeKey !== b)
        )
          throw this.invalidCacheError();
        v == null || v.branches.set(c, u),
          r == null ||
            (g = r.onNodeVisit) === null ||
            g === void 0 ||
            g.call(r, u),
          (c = this._mapNodeValue(h)),
          (this._root = (w = this._root) !== null && w !== void 0 ? w : u);
      }
      const p = u
        ? (i = u) === null || i === void 0
          ? void 0
          : i.branches.get(c)
        : this._root;
      if (p != null && (p.type !== "leaf" || p.branchKey !== c))
        throw this.invalidCacheError();
      const m = { type: "leaf", value: n, parent: u, branchKey: c };
      (a = u) === null || a === void 0 || a.branches.set(c, m),
        (this._root = (l = this._root) !== null && l !== void 0 ? l : m),
        this._numLeafs++,
        this._onSet(m),
        r == null ||
          (s = r.onNodeVisit) === null ||
          s === void 0 ||
          s.call(r, m);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof eh) this.clear(), o();
      else throw i;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return (this._root = null), (this._numLeafs = 0), !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r; ) {
      var i;
      if ((r.branches.delete(o), r === n))
        return (
          r.branches.size === 0
            ? ((this._root = null), (this._numLeafs = 0))
            : this._numLeafs--,
          !0
        );
      if (r.branches.size > 0) break;
      (o = (i = r) === null || i === void 0 ? void 0 : i.branchKey),
        (r = r.parent);
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    (this._numLeafs = 0), (this._root = null);
  }
  invalidCacheError() {
    const t = hC()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Id(t + (this._name != null ? ` - ${this._name}` : "")), new eh());
  }
}
var gC = { TreeCache: mC },
  vC = gC.TreeCache,
  dv = Object.freeze({ __proto__: null, TreeCache: vC });
class yC {
  constructor(t) {
    var n;
    se(this, "_maxSize", void 0),
      se(this, "_size", void 0),
      se(this, "_head", void 0),
      se(this, "_tail", void 0),
      se(this, "_map", void 0),
      se(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value;
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      a = { key: t, right: i, left: null, value: n };
    i ? (i.left = a) : (this._tail = a),
      this._map.set(r, a),
      (this._head = a),
      this._size++,
      this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = $e(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left),
      i && (i.right = r.right),
      r === this.head() && (this._head = o),
      r === this.tail() && (this._tail = i),
      this._map.delete(n),
      this._size--;
  }
  clear() {
    (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map());
  }
}
var SC = { LRUCache: yC },
  wC = SC.LRUCache,
  fv = Object.freeze({ __proto__: null, LRUCache: wC });
const { LRUCache: _C } = fv,
  { TreeCache: xC } = dv;
function kC({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new _C({ maxSize: t }),
    o = new xC({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const a = r.tail();
        r.set(i, !0), a && o.size() > t && o.delete(a.key);
      },
    });
  return o;
}
var th = kC;
function Wt(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
    return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw ue("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (Ae(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => Wt(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return Wt(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, a] of e) o[typeof i == "string" ? i : Wt(i, t)] = a;
    return Wt(o, t, n);
  }
  return e instanceof Set
    ? Wt(
        Array.from(e).sort((o, i) => Wt(o, t).localeCompare(Wt(i, t))),
        t,
        n
      )
    : Symbol !== void 0 &&
      e[Symbol.iterator] != null &&
      typeof e[Symbol.iterator] == "function"
    ? Wt(Array.from(e), t, n)
    : `{${Object.keys(e)
        .filter((o) => e[o] !== void 0)
        .sort()
        .map((o) => `${Wt(o, t)}:${Wt(e[o], t, o)}`)
        .join(",")}}`;
}
function EC(e, t = { allowFunctions: !1 }) {
  return Wt(e, t);
}
var as = EC;
const { TreeCache: RC } = dv,
  fa = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function CC(
  {
    equality: e = fa.equality,
    eviction: t = fa.eviction,
    maxSize: n = fa.maxSize,
  } = fa,
  r
) {
  const o = bC(e);
  return TC(t, n, o, r);
}
function bC(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => as(t);
  }
  throw ue(`Unrecognized equality policy ${e}`);
}
function TC(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new RC({ name: r, mapNodeValue: n });
    case "lru":
      return th({ name: r, maxSize: $e(t), mapNodeValue: n });
    case "most-recent":
      return th({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw ue(`Unrecognized eviction policy ${e}`);
}
var AC = CC;
function NC(e) {
  return () => null;
}
var LC = { startPerfBlock: NC };
const {
    isLoadable: PC,
    loadableWithError: pa,
    loadableWithPromise: $C,
    loadableWithValue: su,
  } = Oi,
  { WrappedValue: pv } = cv,
  { getNodeLoadable: ha, peekNodeLoadable: MC, setNodeValue: IC } = qn,
  { saveDepsToStore: OC } = zi,
  {
    DEFAULT_VALUE: DC,
    getConfigDeletionHandler: zC,
    getNode: UC,
    registerNode: nh,
  } = Et,
  { isRecoilValue: BC } = eo,
  { markRecoilValueModified: rh } = un,
  { retainedByOptionWithDefault: FC } = wr,
  { recoilCallback: jC } = uv,
  { startPerfBlock: VC } = LC;
class hv {}
const $o = new hv(),
  Mo = [],
  ma = new Map(),
  WC = (() => {
    let e = 0;
    return () => e++;
  })();
function mv(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    a = new Set(),
    l = AC(o ?? { equality: "reference", eviction: "keep-all" }, n),
    s = FC(e.retainedBy_UNSTABLE),
    u = new Map();
  let c = 0;
  function d() {
    return !Ee("recoil_memory_managament_2020") || c > 0;
  }
  function g(y) {
    return (
      y.getState().knownSelectors.add(n),
      c++,
      () => {
        c--;
      }
    );
  }
  function w() {
    return zC(n) !== void 0 && !d();
  }
  function p(y, k, E, M, S) {
    Ue(k, M, S), m(y, E);
  }
  function m(y, k) {
    pe(y, k) && ie(y), h(k, !0);
  }
  function b(y, k) {
    pe(y, k) && ($e(H(y)).stateVersions.clear(), h(k, !1));
  }
  function h(y, k) {
    const E = ma.get(y);
    if (E != null) {
      for (const M of E) rh(M, $e(t));
      k && ma.delete(y);
    }
  }
  function f(y, k) {
    let E = ma.get(k);
    E == null && ma.set(k, (E = new Set())), E.add(y);
  }
  function v(y, k, E, M, S, F) {
    return k
      .then(($) => {
        if (!d()) throw (ie(y), $o);
        const B = su($);
        return p(y, E, S, B, M), $;
      })
      .catch(($) => {
        if (!d()) throw (ie(y), $o);
        if (Ae($)) return _(y, $, E, M, S, F);
        const B = pa($);
        throw (p(y, E, S, B, M), $);
      });
  }
  function _(y, k, E, M, S, F) {
    return k
      .then(($) => {
        if (!d()) throw (ie(y), $o);
        F.loadingDepKey != null && F.loadingDepPromise === k
          ? E.atomValues.set(F.loadingDepKey, su($))
          : y.getState().knownSelectors.forEach((W) => {
              E.atomValues.delete(W);
            });
        const B = N(y, E);
        if (B && B.state !== "loading") {
          if (((pe(y, S) || H(y) == null) && m(y, S), B.state === "hasValue"))
            return B.contents;
          throw B.contents;
        }
        if (!pe(y, S)) {
          const W = Y(y, E);
          if (W != null) return W.loadingLoadable.contents;
        }
        const [q, J] = L(y, E, S);
        if ((q.state !== "loading" && p(y, E, S, q, J), q.state === "hasError"))
          throw q.contents;
        return q.contents;
      })
      .catch(($) => {
        if ($ instanceof hv) throw $o;
        if (!d()) throw (ie(y), $o);
        const B = pa($);
        throw (p(y, E, S, B, M), $);
      });
  }
  function T(y, k, E, M) {
    var S, F, $, B;
    if (
      pe(y, M) ||
      k.version ===
        ((S = y.getState()) === null ||
        S === void 0 ||
        (F = S.currentTree) === null ||
        F === void 0
          ? void 0
          : F.version) ||
      k.version ===
        (($ = y.getState()) === null ||
        $ === void 0 ||
        (B = $.nextTree) === null ||
        B === void 0
          ? void 0
          : B.version)
    ) {
      var q, J, W;
      OC(
        n,
        E,
        y,
        (q =
          (J = y.getState()) === null ||
          J === void 0 ||
          (W = J.nextTree) === null ||
          W === void 0
            ? void 0
            : W.version) !== null && q !== void 0
          ? q
          : y.getState().currentTree.version
      );
    }
    for (const ae of E) a.add(ae);
  }
  function L(y, k, E) {
    const M = VC(n);
    let S = !0,
      F = !0;
    const $ = () => {
      M(), (F = !1);
    };
    let B,
      q = !1,
      J;
    const W = { loadingDepKey: null, loadingDepPromise: null },
      ae = new Map();
    function ke({ key: ge }) {
      const re = ha(y, k, ge);
      switch (
        (ae.set(ge, re),
        S || (T(y, k, new Set(ae.keys()), E), b(y, E)),
        re.state)
      ) {
        case "hasValue":
          return re.contents;
        case "hasError":
          throw re.contents;
        case "loading":
          throw (
            ((W.loadingDepKey = ge),
            (W.loadingDepPromise = re.contents),
            re.contents)
          );
      }
      throw ue("Invalid Loadable state");
    }
    const le =
      (ge) =>
      (...re) => {
        if (F)
          throw ue(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && jo(!1), jC(y, ge, re, { node: t });
      };
    try {
      (B = r({ get: ke, getCallback: le })),
        (B = BC(B) ? ke(B) : B),
        PC(B) && (B.state === "hasError" && (q = !0), (B = B.contents)),
        Ae(B) ? (B = v(y, B, k, ae, E, W).finally($)) : $(),
        (B = B instanceof pv ? B.value : B);
    } catch (ge) {
      (B = ge), Ae(B) ? (B = _(y, B, k, ae, E, W).finally($)) : ((q = !0), $());
    }
    return (
      q ? (J = pa(B)) : Ae(B) ? (J = $C(B)) : (J = su(B)),
      (S = !1),
      Ie(y, E, ae),
      T(y, k, new Set(ae.keys()), E),
      [J, ae]
    );
  }
  function N(y, k) {
    let E = k.atomValues.get(n);
    if (E != null) return E;
    const M = new Set();
    try {
      E = l.get((F) => (typeof F != "string" && jo(!1), ha(y, k, F).contents), {
        onNodeVisit: (F) => {
          F.type === "branch" && F.nodeKey !== n && M.add(F.nodeKey);
        },
      });
    } catch (F) {
      throw ue(`Problem with cache lookup for selector "${n}": ${F.message}`);
    }
    if (E) {
      var S;
      k.atomValues.set(n, E),
        T(
          y,
          k,
          M,
          (S = H(y)) === null || S === void 0 ? void 0 : S.executionID
        );
    }
    return E;
  }
  function O(y, k) {
    const E = N(y, k);
    if (E != null) return ie(y), E;
    const M = Y(y, k);
    if (M != null) {
      var S;
      return (
        ((S = M.loadingLoadable) === null || S === void 0
          ? void 0
          : S.state) === "loading" && f(y, M.executionID),
        M.loadingLoadable
      );
    }
    const F = WC(),
      [$, B] = L(y, k, F);
    return (
      $.state === "loading"
        ? (Me(y, F, $, B, k), f(y, F))
        : (ie(y), Ue(k, $, B)),
      $
    );
  }
  function Y(y, k) {
    const E = D0([
      u.has(y) ? [$e(u.get(y))] : [],
      Kl(
        Bd(u, ([S]) => S !== y),
        ([, S]) => S
      ),
    ]);
    function M(S) {
      for (const [F, $] of S) if (!ha(y, k, F).is($)) return !0;
      return !1;
    }
    for (const S of E) {
      if (
        S.stateVersions.get(k.version) ||
        !M(S.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return S.stateVersions.set(k.version, !0), S;
      S.stateVersions.set(k.version, !1);
    }
  }
  function H(y) {
    return u.get(y);
  }
  function Me(y, k, E, M, S) {
    u.set(y, {
      depValuesDiscoveredSoFarDuringAsyncWork: M,
      executionID: k,
      loadingLoadable: E,
      stateVersions: new Map([[S.version, !0]]),
    });
  }
  function Ie(y, k, E) {
    if (pe(y, k)) {
      const M = H(y);
      M != null && (M.depValuesDiscoveredSoFarDuringAsyncWork = E);
    }
  }
  function ie(y) {
    u.delete(y);
  }
  function pe(y, k) {
    var E;
    return k === ((E = H(y)) === null || E === void 0 ? void 0 : E.executionID);
  }
  function Ce(y) {
    return Array.from(y.entries()).map(([k, E]) => [k, E.contents]);
  }
  function Ue(y, k, E) {
    y.atomValues.set(n, k);
    try {
      l.set(Ce(E), k);
    } catch (M) {
      throw ue(`Problem with setting cache for selector "${n}": ${M.message}`);
    }
  }
  function xe(y) {
    if (Mo.includes(n)) {
      const k = `Recoil selector has circular dependencies: ${Mo.slice(
        Mo.indexOf(n)
      ).join(" → ")}`;
      return pa(ue(k));
    }
    Mo.push(n);
    try {
      return y();
    } finally {
      Mo.pop();
    }
  }
  function z(y, k) {
    const E = k.atomValues.get(n);
    return (
      E ??
      l.get((M) => {
        var S;
        return (
          typeof M != "string" && jo(!1),
          (S = MC(y, k, M)) === null || S === void 0 ? void 0 : S.contents
        );
      })
    );
  }
  function Z(y, k) {
    return xe(() => O(y, k));
  }
  function X(y) {
    y.atomValues.delete(n);
  }
  function fe(y, k) {
    t == null && jo(!1);
    for (const M of a) {
      var E;
      const S = UC(M);
      (E = S.clearCache) === null || E === void 0 || E.call(S, y, k);
    }
    a.clear(), X(k), l.clear(), rh(y, t);
  }
  return i != null
    ? (t = nh({
        key: n,
        nodeType: "selector",
        peek: z,
        get: Z,
        set: (k, E, M) => {
          let S = !1;
          const F = new Map();
          function $({ key: W }) {
            if (S)
              throw ue(
                "Recoil: Async selector sets are not currently supported."
              );
            const ae = ha(k, E, W);
            if (ae.state === "hasValue") return ae.contents;
            if (ae.state === "loading") {
              const ke = `Getting value of asynchronous atom or selector "${W}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw ue(ke);
            } else throw ae.contents;
          }
          function B(W, ae) {
            if (S)
              throw ue(
                "Recoil: Async selector sets are not currently supported."
              );
            const ke = typeof ae == "function" ? ae($(W)) : ae;
            IC(k, E, W.key, ke).forEach((ge, re) => F.set(re, ge));
          }
          function q(W) {
            B(W, DC);
          }
          const J = i({ set: B, get: $, reset: q }, M);
          if (J !== void 0)
            throw Ae(J)
              ? ue("Recoil: Async selector sets are not currently supported.")
              : ue("Recoil: selector set should be a void function.");
          return (S = !0), F;
        },
        init: g,
        invalidate: X,
        clearCache: fe,
        shouldDeleteConfigOnRelease: w,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: s,
      }))
    : (t = nh({
        key: n,
        nodeType: "selector",
        peek: z,
        get: Z,
        init: g,
        invalidate: X,
        clearCache: fe,
        shouldDeleteConfigOnRelease: w,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: s,
      }));
}
mv.value = (e) => new pv(e);
var ro = mv;
const {
    isLoadable: HC,
    loadableWithError: uu,
    loadableWithPromise: cu,
    loadableWithValue: Er,
  } = Oi,
  { WrappedValue: gv } = cv,
  { peekNodeInfo: GC } = qn,
  {
    DEFAULT_VALUE: rr,
    DefaultValue: Nn,
    getConfigDeletionHandler: vv,
    registerNode: KC,
    setConfigDeletionHandler: QC,
  } = Et,
  { isRecoilValue: YC } = eo,
  {
    getRecoilValueAsLoadable: ZC,
    markRecoilValueModified: qC,
    setRecoilValue: oh,
    setRecoilValueLoadable: XC,
  } = un,
  { retainedByOptionWithDefault: JC } = wr,
  Io = (e) => (e instanceof gv ? e.value : e);
function eb(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = JC(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(f) {
    return cu(
      f
        .then((v) => ((a = Er(v)), v))
        .catch((v) => {
          throw ((a = uu(v)), v);
        })
    );
  }
  let a = Ae(e.default)
    ? i(e.default)
    : HC(e.default)
    ? e.default.state === "loading"
      ? i(e.default.contents)
      : e.default
    : Er(Io(e.default));
  a.contents;
  let l;
  const s = new Map();
  function u(f) {
    return f;
  }
  function c(f, v) {
    const _ = v
      .then((T) => {
        var L, N;
        return (
          ((N = (
            (L = f.getState().nextTree) !== null && L !== void 0
              ? L
              : f.getState().currentTree
          ).atomValues.get(t)) === null || N === void 0
            ? void 0
            : N.contents) === _ && oh(f, h, T),
          T
        );
      })
      .catch((T) => {
        var L, N;
        throw (
          (((N = (
            (L = f.getState().nextTree) !== null && L !== void 0
              ? L
              : f.getState().currentTree
          ).atomValues.get(t)) === null || N === void 0
            ? void 0
            : N.contents) === _ && XC(f, h, uu(T)),
          T)
        );
      });
    return _;
  }
  function d(f, v, _) {
    var T;
    o++;
    const L = () => {
      var ie;
      o--,
        (ie = s.get(f)) === null || ie === void 0 || ie.forEach((pe) => pe()),
        s.delete(f);
    };
    if ((f.getState().knownAtoms.add(t), a.state === "loading")) {
      const ie = () => {
        var pe;
        ((pe = f.getState().nextTree) !== null && pe !== void 0
          ? pe
          : f.getState().currentTree
        ).atomValues.has(t) || qC(f, h);
      };
      a.contents.finally(ie);
    }
    const N = (T = e.effects) !== null && T !== void 0 ? T : e.effects_UNSTABLE;
    if (N != null) {
      let xe = function (k) {
          if (pe && k.key === t) {
            const E = ie;
            return E instanceof Nn
              ? g(f, v)
              : Ae(E)
              ? cu(E.then((M) => (M instanceof Nn ? a.toPromise() : M)))
              : Er(E);
          }
          return ZC(f, k);
        },
        z = function (k) {
          return xe(k).toPromise();
        },
        Z = function (k) {
          var E;
          const M = GC(
            f,
            (E = f.getState().nextTree) !== null && E !== void 0
              ? E
              : f.getState().currentTree,
            k.key
          );
          return pe && k.key === t && !(ie instanceof Nn)
            ? { ...M, isSet: !0, loadable: xe(k) }
            : M;
        };
      var H = xe,
        Me = z,
        Ie = Z;
      let ie = rr,
        pe = !0,
        Ce = !1,
        Ue = null;
      const X = (k) => (E) => {
          if (pe) {
            const M = xe(h),
              S = M.state === "hasValue" ? M.contents : rr;
            (ie = typeof E == "function" ? E(S) : E),
              Ae(ie) &&
                (ie = ie.then((F) => ((Ue = { effect: k, value: F }), F)));
          } else {
            if (Ae(E))
              throw ue("Setting atoms to async values is not implemented.");
            typeof E != "function" && (Ue = { effect: k, value: Io(E) }),
              oh(
                f,
                h,
                typeof E == "function"
                  ? (M) => {
                      const S = Io(E(M));
                      return (Ue = { effect: k, value: S }), S;
                    }
                  : Io(E)
              );
          }
        },
        fe = (k) => () => X(k)(rr),
        y = (k) => (E) => {
          var M;
          const { release: S } = f.subscribeToTransactions((F) => {
            var $;
            let { currentTree: B, previousTree: q } = F.getState();
            q || (q = B);
            const J =
              ($ = B.atomValues.get(t)) !== null && $ !== void 0 ? $ : a;
            if (J.state === "hasValue") {
              var W, ae, ke, le;
              const ge = J.contents,
                re = (W = q.atomValues.get(t)) !== null && W !== void 0 ? W : a,
                Be = re.state === "hasValue" ? re.contents : rr;
              ((ae = Ue) === null || ae === void 0 ? void 0 : ae.effect) !==
                k ||
              ((ke = Ue) === null || ke === void 0 ? void 0 : ke.value) !== ge
                ? E(ge, Be, !B.atomValues.has(t))
                : ((le = Ue) === null || le === void 0 ? void 0 : le.effect) ===
                    k && (Ue = null);
            }
          }, t);
          s.set(f, [...((M = s.get(f)) !== null && M !== void 0 ? M : []), S]);
        };
      for (const k of N)
        try {
          const E = k({
            node: h,
            storeID: f.storeID,
            parentStoreID_UNSTABLE: f.parentStoreID,
            trigger: _,
            setSelf: X(k),
            resetSelf: fe(k),
            onSet: y(k),
            getPromise: z,
            getLoadable: xe,
            getInfo_UNSTABLE: Z,
          });
          if (E != null) {
            var O;
            s.set(f, [
              ...((O = s.get(f)) !== null && O !== void 0 ? O : []),
              E,
            ]);
          }
        } catch (E) {
          (ie = E), (Ce = !0);
        }
      if (((pe = !1), !(ie instanceof Nn))) {
        var Y;
        const k = Ce ? uu(ie) : Ae(ie) ? cu(c(f, ie)) : Er(Io(ie));
        k.contents,
          v.atomValues.set(t, k),
          (Y = f.getState().nextTree) === null ||
            Y === void 0 ||
            Y.atomValues.set(t, k);
      }
    }
    return L;
  }
  function g(f, v) {
    var _, T;
    return (_ = (T = v.atomValues.get(t)) !== null && T !== void 0 ? T : l) !==
      null && _ !== void 0
      ? _
      : a;
  }
  function w(f, v) {
    if (v.atomValues.has(t)) return $e(v.atomValues.get(t));
    if (v.nonvalidatedAtoms.has(t)) {
      if (l != null) return l;
      if (n == null) return a;
      const _ = v.nonvalidatedAtoms.get(t),
        T = n.validator(_, rr);
      return (l = T instanceof Nn ? a : Er(T)), l;
    } else return a;
  }
  function p() {
    l = void 0;
  }
  function m(f, v, _) {
    if (v.atomValues.has(t)) {
      const T = $e(v.atomValues.get(t));
      if (T.state === "hasValue" && _ === T.contents) return new Map();
    } else if (!v.nonvalidatedAtoms.has(t) && _ instanceof Nn) return new Map();
    return (l = void 0), new Map().set(t, Er(_));
  }
  function b() {
    return vv(t) !== void 0 && o <= 0;
  }
  const h = KC({
    key: t,
    nodeType: "atom",
    peek: g,
    get: w,
    set: m,
    init: d,
    invalidate: p,
    shouldDeleteConfigOnRelease: b,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? {
          type: e.persistence_UNSTABLE.type,
          backButton: e.persistence_UNSTABLE.backButton,
        }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return h;
}
function Zd(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return YC(n) ? tb({ ...t, default: n }) : eb({ ...t, default: n });
}
function tb(e) {
  const t = Zd({
      ...e,
      default: rr,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) =>
                r instanceof Nn
                  ? r
                  : $e(e.persistence_UNSTABLE).validator(r, rr),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = ro({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof Nn ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return QC(n.key, vv(e.key)), n;
}
Zd.value = (e) => new gv(e);
var yv = Zd;
class nb {
  constructor(t) {
    var n;
    se(this, "_map", void 0),
      se(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0
          ? n
          : (r) => r);
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var rb = { MapCache: nb },
  ob = rb.MapCache,
  ib = Object.freeze({ __proto__: null, MapCache: ob });
const { LRUCache: ih } = fv,
  { MapCache: ab } = ib,
  ga = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function lb({
  equality: e = ga.equality,
  eviction: t = ga.eviction,
  maxSize: n = ga.maxSize,
} = ga) {
  const r = sb(e);
  return ub(t, n, r);
}
function sb(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => as(t);
  }
  throw ue(`Unrecognized equality policy ${e}`);
}
function ub(e, t, n) {
  switch (e) {
    case "keep-all":
      return new ab({ mapKey: n });
    case "lru":
      return new ih({ mapKey: n, maxSize: $e(t) });
    case "most-recent":
      return new ih({ mapKey: n, maxSize: 1 });
  }
  throw ue(`Unrecognized eviction policy ${e}`);
}
var Sv = lb;
const { setConfigDeletionHandler: cb } = Et;
function db(e) {
  var t, n;
  const r = Sv({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, a;
    const l = r.get(o);
    if (l != null) return l;
    const { cachePolicyForParams_UNSTABLE: s, ...u } = e,
      c = "default" in e ? e.default : new Promise(() => {}),
      d = yv({
        ...u,
        key: `${e.key}__${(i = as(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof c == "function" ? c(o) : c,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function"
            ? e.retainedBy_UNSTABLE(o)
            : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
            ? e.effects_UNSTABLE(o)
            : (a = e.effects) !== null && a !== void 0
            ? a
            : e.effects_UNSTABLE,
      });
    return (
      r.set(o, d),
      cb(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var fb = db;
const { setConfigDeletionHandler: pb } = Et;
let hb = 0;
function mb(e) {
  var t, n;
  const r = Sv({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let a;
    try {
      a = r.get(o);
    } catch (g) {
      throw ue(`Problem with cache lookup for selector ${e.key}: ${g.message}`);
    }
    if (a != null) return a;
    const l = `${e.key}__selectorFamily/${
        (i = as(o, { allowFunctions: !0 })) !== null && i !== void 0
          ? i
          : "void"
      }/${hb++}`,
      s = (g) => e.get(o)(g),
      u = e.cachePolicy_UNSTABLE,
      c =
        typeof e.retainedBy_UNSTABLE == "function"
          ? e.retainedBy_UNSTABLE(o)
          : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const g = e.set;
      d = ro({
        key: l,
        get: s,
        set: (p, m) => g(o)(p, m),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    } else
      d = ro({
        key: l,
        get: s,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    return (
      r.set(o, d),
      pb(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var Xn = mb;
const gb = Xn({
  key: "__constant",
  get: (e) => () => e,
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function vb(e) {
  return gb(e);
}
var yb = vb;
const Sb = Xn({
  key: "__error",
  get: (e) => () => {
    throw ue(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function wb(e) {
  return Sb(e);
}
var _b = wb;
function xb(e) {
  return e;
}
var kb = xb;
const {
  loadableWithError: wv,
  loadableWithPromise: _v,
  loadableWithValue: xv,
} = Oi;
function ls(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (a) {
      r[o] = a;
    }
  return [n, r];
}
function Eb(e) {
  return e != null && !Ae(e);
}
function ss(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function Ec(e, t) {
  return Array.isArray(e)
    ? t
    : Object.getOwnPropertyNames(e).reduce(
        (n, r, o) => ({ ...n, [r]: t[o] }),
        {}
      );
}
function Wr(e, t, n) {
  const r = n.map((o, i) => (o == null ? xv(t[i]) : Ae(o) ? _v(o) : wv(o)));
  return Ec(e, r);
}
function Rb(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const Cb = Xn({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ss(e),
          [r, o] = ls(t, n);
        return Wr(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  bb = Xn({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ss(e),
          [r, o] = ls(t, n);
        return o.some((i) => !Ae(i))
          ? Wr(e, r, o)
          : new Promise((i) => {
              for (const [a, l] of o.entries())
                Ae(l) &&
                  l
                    .then((s) => {
                      (r[a] = s), (o[a] = void 0), i(Wr(e, r, o));
                    })
                    .catch((s) => {
                      (o[a] = s), i(Wr(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  Tb = Xn({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ss(e),
          [r, o] = ls(t, n);
        if (o.every((a) => a == null)) return Ec(e, r);
        const i = o.find(Eb);
        if (i != null) throw i;
        return Promise.all(o).then((a) => Ec(e, Rb(r, a)));
      },
    dangerouslyAllowMutability: !0,
  }),
  Ab = Xn({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = ss(e),
          [r, o] = ls(t, n);
        return o.every((i) => !Ae(i))
          ? Wr(e, r, o)
          : Promise.all(
              o.map((i, a) =>
                Ae(i)
                  ? i
                      .then((l) => {
                        (r[a] = l), (o[a] = void 0);
                      })
                      .catch((l) => {
                        (r[a] = void 0), (o[a] = l);
                      })
                  : null
              )
            ).then(() => Wr(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  Nb = Xn({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return ro.value(xv(t(e)));
        } catch (n) {
          return ro.value(Ae(n) ? _v(n) : wv(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var Lb = {
  waitForNone: Cb,
  waitForAny: bb,
  waitForAll: Tb,
  waitForAllSettled: Ab,
  noWait: Nb,
};
const { RecoilLoadable: Pb } = Oi,
  { DefaultValue: $b } = Et,
  { RecoilRoot: Mb, useRecoilStoreID: Ib } = kn,
  { isRecoilValue: Ob } = eo,
  { retentionZone: Db } = Yl,
  { freshSnapshot: zb } = ts,
  {
    useRecoilState: Ub,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Bb,
    useRecoilStateLoadable: Fb,
    useRecoilValue: jb,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Vb,
    useRecoilValueLoadable: Wb,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Hb,
    useResetRecoilState: Gb,
    useSetRecoilState: Kb,
  } = rR,
  {
    useGotoRecoilSnapshot: Qb,
    useRecoilSnapshot: Yb,
    useRecoilTransactionObserver: Zb,
  } = iv,
  { useRecoilCallback: qb } = uv,
  {
    noWait: Xb,
    waitForAll: Jb,
    waitForAllSettled: e2,
    waitForAny: t2,
    waitForNone: n2,
  } = Lb;
var ji = {
    DefaultValue: $b,
    isRecoilValue: Ob,
    RecoilLoadable: Pb,
    RecoilEnv: ho,
    RecoilRoot: Mb,
    useRecoilStoreID: Ib,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: NR,
    atom: yv,
    selector: ro,
    atomFamily: fb,
    selectorFamily: Xn,
    constSelector: yb,
    errorSelector: _b,
    readOnlySelector: kb,
    noWait: Xb,
    waitForNone: n2,
    waitForAny: t2,
    waitForAll: Jb,
    waitForAllSettled: e2,
    useRecoilValue: jb,
    useRecoilValueLoadable: Wb,
    useRecoilState: Ub,
    useRecoilStateLoadable: Fb,
    useSetRecoilState: Kb,
    useResetRecoilState: Gb,
    useGetRecoilValueInfo_UNSTABLE: ER,
    useRecoilRefresher_UNSTABLE: iC,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Hb,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Vb,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Bb,
    useRecoilCallback: qb,
    useRecoilTransaction_UNSTABLE: cC,
    useGotoRecoilSnapshot: Qb,
    useRecoilSnapshot: Yb,
    useRecoilTransactionObserver_UNSTABLE: Zb,
    snapshot_UNSTABLE: zb,
    useRetain: Hd,
    retentionZone: Db,
  },
  r2 = ji.RecoilRoot,
  Qe = ji.atom,
  je = ji.useRecoilValue,
  Dt = ji.useRecoilState,
  We = ji.useSetRecoilState;
function Rc() {
  return (
    (Rc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Rc.apply(this, arguments)
  );
}
function kv(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var o2 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Cc = kv(function (e) {
    return (
      o2.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function i2(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function a2(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var l2 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(a2(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = i2(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  ut = "-ms-",
  wl = "-moz-",
  ve = "-webkit-",
  Ev = "comm",
  qd = "rule",
  Xd = "decl",
  s2 = "@import",
  Rv = "@keyframes",
  u2 = Math.abs,
  us = String.fromCharCode,
  c2 = Object.assign;
function d2(e, t) {
  return ot(e, 0) ^ 45
    ? (((((((t << 2) ^ ot(e, 0)) << 2) ^ ot(e, 1)) << 2) ^ ot(e, 2)) << 2) ^
        ot(e, 3)
    : 0;
}
function Cv(e) {
  return e.trim();
}
function f2(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ye(e, t, n) {
  return e.replace(t, n);
}
function bc(e, t) {
  return e.indexOf(t);
}
function ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function xi(e, t, n) {
  return e.slice(t, n);
}
function tn(e) {
  return e.length;
}
function Jd(e) {
  return e.length;
}
function va(e, t) {
  return t.push(e), e;
}
function p2(e, t) {
  return e.map(t).join("");
}
var cs = 1,
  oo = 1,
  bv = 0,
  kt = 0,
  Ge = 0,
  go = "";
function ds(e, t, n, r, o, i, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: cs,
    column: oo,
    length: a,
    return: "",
  };
}
function Oo(e, t) {
  return c2(ds("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function h2() {
  return Ge;
}
function m2() {
  return (
    (Ge = kt > 0 ? ot(go, --kt) : 0), oo--, Ge === 10 && ((oo = 1), cs--), Ge
  );
}
function At() {
  return (
    (Ge = kt < bv ? ot(go, kt++) : 0), oo++, Ge === 10 && ((oo = 1), cs++), Ge
  );
}
function sn() {
  return ot(go, kt);
}
function Oa() {
  return kt;
}
function Vi(e, t) {
  return xi(go, e, t);
}
function ki(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Tv(e) {
  return (cs = oo = 1), (bv = tn((go = e))), (kt = 0), [];
}
function Av(e) {
  return (go = ""), e;
}
function Da(e) {
  return Cv(Vi(kt - 1, Tc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function g2(e) {
  for (; (Ge = sn()) && Ge < 33; ) At();
  return ki(e) > 2 || ki(Ge) > 3 ? "" : " ";
}
function v2(e, t) {
  for (
    ;
    --t &&
    At() &&
    !(Ge < 48 || Ge > 102 || (Ge > 57 && Ge < 65) || (Ge > 70 && Ge < 97));

  );
  return Vi(e, Oa() + (t < 6 && sn() == 32 && At() == 32));
}
function Tc(e) {
  for (; At(); )
    switch (Ge) {
      case e:
        return kt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Tc(Ge);
        break;
      case 40:
        e === 41 && Tc(e);
        break;
      case 92:
        At();
        break;
    }
  return kt;
}
function y2(e, t) {
  for (; At() && e + Ge !== 47 + 10; )
    if (e + Ge === 42 + 42 && sn() === 47) break;
  return "/*" + Vi(t, kt - 1) + "*" + us(e === 47 ? e : At());
}
function S2(e) {
  for (; !ki(sn()); ) At();
  return Vi(e, kt);
}
function w2(e) {
  return Av(za("", null, null, null, [""], (e = Tv(e)), 0, [0], e));
}
function za(e, t, n, r, o, i, a, l, s) {
  for (
    var u = 0,
      c = 0,
      d = a,
      g = 0,
      w = 0,
      p = 0,
      m = 1,
      b = 1,
      h = 1,
      f = 0,
      v = "",
      _ = o,
      T = i,
      L = r,
      N = v;
    b;

  )
    switch (((p = f), (f = At()))) {
      case 40:
        if (p != 108 && ot(N, d - 1) == 58) {
          bc((N += ye(Da(f), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += Da(f);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += g2(p);
        break;
      case 92:
        N += v2(Oa() - 1, 7);
        continue;
      case 47:
        switch (sn()) {
          case 42:
          case 47:
            va(_2(y2(At(), Oa()), t, n), s);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * m:
        l[u++] = tn(N) * h;
      case 125 * m:
      case 59:
      case 0:
        switch (f) {
          case 0:
          case 125:
            b = 0;
          case 59 + c:
            w > 0 &&
              tn(N) - d &&
              va(
                w > 32
                  ? lh(N + ";", r, n, d - 1)
                  : lh(ye(N, " ", "") + ";", r, n, d - 2),
                s
              );
            break;
          case 59:
            N += ";";
          default:
            if (
              (va((L = ah(N, t, n, u, c, o, l, v, (_ = []), (T = []), d)), i),
              f === 123)
            )
              if (c === 0) za(N, t, L, L, _, i, d, l, T);
              else
                switch (g === 99 && ot(N, 3) === 110 ? 100 : g) {
                  case 100:
                  case 109:
                  case 115:
                    za(
                      e,
                      L,
                      L,
                      r && va(ah(e, L, L, 0, 0, o, l, v, o, (_ = []), d), T),
                      o,
                      T,
                      d,
                      l,
                      r ? _ : T
                    );
                    break;
                  default:
                    za(N, L, L, L, [""], T, 0, l, T);
                }
        }
        (u = c = w = 0), (m = h = 1), (v = N = ""), (d = a);
        break;
      case 58:
        (d = 1 + tn(N)), (w = p);
      default:
        if (m < 1) {
          if (f == 123) --m;
          else if (f == 125 && m++ == 0 && m2() == 125) continue;
        }
        switch (((N += us(f)), f * m)) {
          case 38:
            h = c > 0 ? 1 : ((N += "\f"), -1);
            break;
          case 44:
            (l[u++] = (tn(N) - 1) * h), (h = 1);
            break;
          case 64:
            sn() === 45 && (N += Da(At())),
              (g = sn()),
              (c = d = tn((v = N += S2(Oa())))),
              f++;
            break;
          case 45:
            p === 45 && tn(N) == 2 && (m = 0);
        }
    }
  return i;
}
function ah(e, t, n, r, o, i, a, l, s, u, c) {
  for (
    var d = o - 1, g = o === 0 ? i : [""], w = Jd(g), p = 0, m = 0, b = 0;
    p < r;
    ++p
  )
    for (var h = 0, f = xi(e, d + 1, (d = u2((m = a[p])))), v = e; h < w; ++h)
      (v = Cv(m > 0 ? g[h] + " " + f : ye(f, /&\f/g, g[h]))) && (s[b++] = v);
  return ds(e, t, n, o === 0 ? qd : l, s, u, c);
}
function _2(e, t, n) {
  return ds(e, t, n, Ev, us(h2()), xi(e, 2, -2), 0);
}
function lh(e, t, n, r) {
  return ds(e, t, n, Xd, xi(e, 0, r), xi(e, r + 1, -1), r);
}
function Hr(e, t) {
  for (var n = "", r = Jd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function x2(e, t, n, r) {
  switch (e.type) {
    case s2:
    case Xd:
      return (e.return = e.return || e.value);
    case Ev:
      return "";
    case Rv:
      return (e.return = e.value + "{" + Hr(e.children, r) + "}");
    case qd:
      e.value = e.props.join(",");
  }
  return tn((n = Hr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function k2(e) {
  var t = Jd(e);
  return function (n, r, o, i) {
    for (var a = "", l = 0; l < t; l++) a += e[l](n, r, o, i) || "";
    return a;
  };
}
function E2(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var R2 = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = sn()), o === 38 && i === 12 && (n[r] = 1), !ki(i);

    )
      At();
    return Vi(t, kt);
  },
  C2 = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (ki(o)) {
        case 0:
          o === 38 && sn() === 12 && (n[r] = 1), (t[r] += R2(kt - 1, n, r));
          break;
        case 2:
          t[r] += Da(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = sn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += us(o);
      }
    while ((o = At()));
    return t;
  },
  b2 = function (t, n) {
    return Av(C2(Tv(t), n));
  },
  sh = new WeakMap(),
  T2 = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !sh.get(r)) &&
        !o
      ) {
        sh.set(t, !0);
        for (
          var i = [], a = b2(n, i), l = r.props, s = 0, u = 0;
          s < a.length;
          s++
        )
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = i[s] ? a[s].replace(/&\f/g, l[c]) : l[c] + " " + a[s];
      }
    }
  },
  A2 = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Nv(e, t) {
  switch (d2(e, t)) {
    case 5103:
      return ve + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + e + wl + e + ut + e + e;
    case 6828:
    case 4268:
      return ve + e + ut + e + e;
    case 6165:
      return ve + e + ut + "flex-" + e + e;
    case 5187:
      return (
        ve + e + ye(e, /(\w+).+(:[^]+)/, ve + "box-$1$2" + ut + "flex-$1$2") + e
      );
    case 5443:
      return ve + e + ut + "flex-item-" + ye(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        ve +
        e +
        ut +
        "flex-line-pack" +
        ye(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return ve + e + ut + ye(e, "shrink", "negative") + e;
    case 5292:
      return ve + e + ut + ye(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ve +
        "box-" +
        ye(e, "-grow", "") +
        ve +
        e +
        ut +
        ye(e, "grow", "positive") +
        e
      );
    case 4554:
      return ve + ye(e, /([^-])(transform)/g, "$1" + ve + "$2") + e;
    case 6187:
      return (
        ye(
          ye(ye(e, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return ye(e, /(image-set\([^]*)/, ve + "$1$`$1");
    case 4968:
      return (
        ye(
          ye(e, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + ut + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ve +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(e, /(.+)-inline(.+)/, ve + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (tn(e) - 1 - t > 6)
        switch (ot(e, t + 1)) {
          case 109:
            if (ot(e, t + 4) !== 45) break;
          case 102:
            return (
              ye(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ve +
                  "$2-$3$1" +
                  wl +
                  (ot(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~bc(e, "stretch")
              ? Nv(ye(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115) break;
    case 6444:
      switch (ot(e, tn(e) - 3 - (~bc(e, "!important") && 10))) {
        case 107:
          return ye(e, ":", ":" + ve) + e;
        case 101:
          return (
            ye(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ve +
                (ot(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ve +
                "$2$3$1" +
                ut +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return ve + e + ut + ye(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ve + e + ut + ye(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ve + e + ut + ye(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ve + e + ut + e + e;
  }
  return e;
}
var N2 = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Xd:
          t.return = Nv(t.value, t.length);
          break;
        case Rv:
          return Hr([Oo(t, { value: ye(t.value, "@", "@" + ve) })], o);
        case qd:
          if (t.length)
            return p2(t.props, function (i) {
              switch (f2(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Hr(
                    [Oo(t, { props: [ye(i, /:(read-\w+)/, ":" + wl + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Hr(
                    [
                      Oo(t, {
                        props: [ye(i, /:(plac\w+)/, ":" + ve + "input-$1")],
                      }),
                      Oo(t, { props: [ye(i, /:(plac\w+)/, ":" + wl + "$1")] }),
                      Oo(t, { props: [ye(i, /:(plac\w+)/, ut + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  L2 = [N2],
  P2 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (m) {
        var b = m.getAttribute("data-emotion");
        b.indexOf(" ") !== -1 &&
          (document.head.appendChild(m), m.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || L2,
      i = {},
      a,
      l = [];
    (a = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (m) {
          for (
            var b = m.getAttribute("data-emotion").split(" "), h = 1;
            h < b.length;
            h++
          )
            i[b[h]] = !0;
          l.push(m);
        }
      );
    var s,
      u = [T2, A2];
    {
      var c,
        d = [
          x2,
          E2(function (m) {
            c.insert(m);
          }),
        ],
        g = k2(u.concat(o, d)),
        w = function (b) {
          return Hr(w2(b), g);
        };
      s = function (b, h, f, v) {
        (c = f),
          w(b ? b + "{" + h.styles + "}" : h.styles),
          v && (p.inserted[h.name] = !0);
      };
    }
    var p = {
      key: n,
      sheet: new l2({
        key: n,
        container: a,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return p.sheet.hydrate(l), p;
  },
  Ei = {},
  $2 = {
    get exports() {
      return Ei;
    },
    set exports(e) {
      Ei = e;
    },
  },
  _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nt = typeof Symbol == "function" && Symbol.for,
  ef = nt ? Symbol.for("react.element") : 60103,
  tf = nt ? Symbol.for("react.portal") : 60106,
  fs = nt ? Symbol.for("react.fragment") : 60107,
  ps = nt ? Symbol.for("react.strict_mode") : 60108,
  hs = nt ? Symbol.for("react.profiler") : 60114,
  ms = nt ? Symbol.for("react.provider") : 60109,
  gs = nt ? Symbol.for("react.context") : 60110,
  nf = nt ? Symbol.for("react.async_mode") : 60111,
  vs = nt ? Symbol.for("react.concurrent_mode") : 60111,
  ys = nt ? Symbol.for("react.forward_ref") : 60112,
  Ss = nt ? Symbol.for("react.suspense") : 60113,
  M2 = nt ? Symbol.for("react.suspense_list") : 60120,
  ws = nt ? Symbol.for("react.memo") : 60115,
  _s = nt ? Symbol.for("react.lazy") : 60116,
  I2 = nt ? Symbol.for("react.block") : 60121,
  O2 = nt ? Symbol.for("react.fundamental") : 60117,
  D2 = nt ? Symbol.for("react.responder") : 60118,
  z2 = nt ? Symbol.for("react.scope") : 60119;
function $t(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ef:
        switch (((e = e.type), e)) {
          case nf:
          case vs:
          case fs:
          case hs:
          case ps:
          case Ss:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case gs:
              case ys:
              case _s:
              case ws:
              case ms:
                return e;
              default:
                return t;
            }
        }
      case tf:
        return t;
    }
  }
}
function Lv(e) {
  return $t(e) === vs;
}
_e.AsyncMode = nf;
_e.ConcurrentMode = vs;
_e.ContextConsumer = gs;
_e.ContextProvider = ms;
_e.Element = ef;
_e.ForwardRef = ys;
_e.Fragment = fs;
_e.Lazy = _s;
_e.Memo = ws;
_e.Portal = tf;
_e.Profiler = hs;
_e.StrictMode = ps;
_e.Suspense = Ss;
_e.isAsyncMode = function (e) {
  return Lv(e) || $t(e) === nf;
};
_e.isConcurrentMode = Lv;
_e.isContextConsumer = function (e) {
  return $t(e) === gs;
};
_e.isContextProvider = function (e) {
  return $t(e) === ms;
};
_e.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === ef;
};
_e.isForwardRef = function (e) {
  return $t(e) === ys;
};
_e.isFragment = function (e) {
  return $t(e) === fs;
};
_e.isLazy = function (e) {
  return $t(e) === _s;
};
_e.isMemo = function (e) {
  return $t(e) === ws;
};
_e.isPortal = function (e) {
  return $t(e) === tf;
};
_e.isProfiler = function (e) {
  return $t(e) === hs;
};
_e.isStrictMode = function (e) {
  return $t(e) === ps;
};
_e.isSuspense = function (e) {
  return $t(e) === Ss;
};
_e.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === fs ||
    e === vs ||
    e === hs ||
    e === ps ||
    e === Ss ||
    e === M2 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === _s ||
        e.$$typeof === ws ||
        e.$$typeof === ms ||
        e.$$typeof === gs ||
        e.$$typeof === ys ||
        e.$$typeof === O2 ||
        e.$$typeof === D2 ||
        e.$$typeof === z2 ||
        e.$$typeof === I2))
  );
};
_e.typeOf = $t;
(function (e) {
  e.exports = _e;
})($2);
var rf = Ei,
  U2 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  B2 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  F2 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Pv = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  of = {};
of[rf.ForwardRef] = F2;
of[rf.Memo] = Pv;
function uh(e) {
  return rf.isMemo(e) ? Pv : of[e.$$typeof] || U2;
}
var j2 = Object.defineProperty,
  V2 = Object.getOwnPropertyNames,
  ch = Object.getOwnPropertySymbols,
  W2 = Object.getOwnPropertyDescriptor,
  H2 = Object.getPrototypeOf,
  dh = Object.prototype;
function $v(e, t, n) {
  if (typeof t != "string") {
    if (dh) {
      var r = H2(t);
      r && r !== dh && $v(e, r, n);
    }
    var o = V2(t);
    ch && (o = o.concat(ch(t)));
    for (var i = uh(e), a = uh(t), l = 0; l < o.length; ++l) {
      var s = o[l];
      if (!B2[s] && !(n && n[s]) && !(a && a[s]) && !(i && i[s])) {
        var u = W2(t, s);
        try {
          j2(e, s, u);
        } catch {}
      }
    }
  }
  return e;
}
var G2 = $v,
  K2 = !0;
function Q2(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Mv = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || K2 === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Y2 = function (t, n, r) {
    Mv(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Z2(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var q2 = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  X2 = /[A-Z]|^ms/g,
  J2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Iv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  fh = function (t) {
    return t != null && typeof t != "boolean";
  },
  du = kv(function (e) {
    return Iv(e) ? e : e.replace(X2, "-$&").toLowerCase();
  }),
  ph = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(J2, function (r, o, i) {
            return (nn = { name: o, styles: i, next: nn }), o;
          });
    }
    return q2[t] !== 1 && !Iv(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Ri(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (nn = { name: n.name, styles: n.styles, next: nn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (nn = { name: r.name, styles: r.styles, next: nn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return eT(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = nn,
          a = n(e);
        return (nn = i), Ri(e, t, a);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function eT(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Ri(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var a = n[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0
          ? (r += i + "{" + t[a] + "}")
          : fh(a) && (r += du(i) + ":" + ph(i, a) + ";");
      else if (
        Array.isArray(a) &&
        typeof a[0] == "string" &&
        (t == null || t[a[0]] === void 0)
      )
        for (var l = 0; l < a.length; l++)
          fh(a[l]) && (r += du(i) + ":" + ph(i, a[l]) + ";");
      else {
        var s = Ri(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            r += du(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var hh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  nn,
  tT = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    nn = void 0;
    var a = t[0];
    a == null || a.raw === void 0
      ? ((o = !1), (i += Ri(r, n, a)))
      : (i += a[0]);
    for (var l = 1; l < t.length; l++) (i += Ri(r, n, t[l])), o && (i += a[l]);
    hh.lastIndex = 0;
    for (var s = "", u; (u = hh.exec(i)) !== null; ) s += "-" + u[1];
    var c = Z2(i) + s;
    return { name: c, styles: i, next: nn };
  },
  nT = function (t) {
    return t();
  },
  rT = ri["useInsertionEffect"] ? ri["useInsertionEffect"] : !1,
  oT = rT || nT,
  Ov = U.createContext(typeof HTMLElement < "u" ? P2({ key: "css" }) : null);
Ov.Provider;
var iT = function (t) {
    return U.forwardRef(function (n, r) {
      var o = U.useContext(Ov);
      return t(n, o, r);
    });
  },
  aT = U.createContext({}),
  lT = Cc,
  sT = function (t) {
    return t !== "theme";
  },
  mh = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? lT : sT;
  },
  gh = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (a) {
              return t.__emotion_forwardProp(a) && i(a);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  uT = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Mv(n, r, o),
      oT(function () {
        return Y2(n, r, o);
      }),
      null
    );
  },
  cT = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      a;
    n !== void 0 && ((i = n.label), (a = n.target));
    var l = gh(t, n, r),
      s = l || mh(o),
      u = !s("as");
    return function () {
      var c = arguments,
        d =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && d.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var g = c.length, w = 1; w < g; w++) d.push(c[w], c[0][w]);
      }
      var p = iT(function (m, b, h) {
        var f = (u && m.as) || o,
          v = "",
          _ = [],
          T = m;
        if (m.theme == null) {
          T = {};
          for (var L in m) T[L] = m[L];
          T.theme = U.useContext(aT);
        }
        typeof m.className == "string"
          ? (v = Q2(b.registered, _, m.className))
          : m.className != null && (v = m.className + " ");
        var N = tT(d.concat(_), b.registered, T);
        (v += b.key + "-" + N.name), a !== void 0 && (v += " " + a);
        var O = u && l === void 0 ? mh(f) : s,
          Y = {};
        for (var H in m) (u && H === "as") || (O(H) && (Y[H] = m[H]));
        return (
          (Y.className = v),
          (Y.ref = h),
          U.createElement(
            U.Fragment,
            null,
            U.createElement(uT, {
              cache: b,
              serialized: N,
              isStringTag: typeof f == "string",
            }),
            U.createElement(f, Y)
          )
        );
      });
      return (
        (p.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (p.defaultProps = t.defaultProps),
        (p.__emotion_real = p),
        (p.__emotion_base = o),
        (p.__emotion_styles = d),
        (p.__emotion_forwardProp = l),
        Object.defineProperty(p, "toString", {
          value: function () {
            return "." + a;
          },
        }),
        (p.withComponent = function (m, b) {
          return e(m, Rc({}, n, b, { shouldForwardProp: gh(p, b, !0) })).apply(
            void 0,
            d
          );
        }),
        p
      );
    };
  },
  dT = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  A = cT.bind();
dT.forEach(function (e) {
  A[e] = A(e);
});
const fT = A.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`,
  pT = A.div`
  width: 1000px;
  height: 1000px;
  background-image: url("/assets/backgroundBox.png");
  background-size: 100% 100%;
  position: absolute;
  right: 0;
  top: 0;
`,
  Dv = () => C(fT, { children: C(pT, {}) }),
  zv = A.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  Uv = A.div`
  color: var(--main-color);
  font-size: 2rem;
  font-weight: bold;
  margin-bo
`,
  Bv = A.div`
  ${({ width: e }) => `width : ${e}px`};
  ${({ height: e }) => `height : ${e}px`};
  background-image: url("/assets/42logo.png");
  background-size: 100% 100%;
  position: absolute;
  right: 50px;
  bottom: 50px;
  z-index: -1;
`;
function Fv(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: jv } = Object.prototype,
  { getPrototypeOf: af } = Object,
  lf = ((e) => (t) => {
    const n = jv.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  En = (e) => ((e = e.toLowerCase()), (t) => lf(t) === e),
  xs = (e) => (t) => typeof t === e,
  { isArray: vo } = Array,
  Ci = xs("undefined");
function hT(e) {
  return (
    e !== null &&
    !Ci(e) &&
    e.constructor !== null &&
    !Ci(e.constructor) &&
    Kn(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Vv = En("ArrayBuffer");
function mT(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Vv(e.buffer)),
    t
  );
}
const gT = xs("string"),
  Kn = xs("function"),
  Wv = xs("number"),
  sf = (e) => e !== null && typeof e == "object",
  vT = (e) => e === !0 || e === !1,
  Ua = (e) => {
    if (lf(e) !== "object") return !1;
    const t = af(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  yT = En("Date"),
  ST = En("File"),
  wT = En("Blob"),
  _T = En("FileList"),
  xT = (e) => sf(e) && Kn(e.pipe),
  kT = (e) => {
    const t = "[object FormData]";
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        jv.call(e) === t ||
        (Kn(e.toString) && e.toString() === t))
    );
  },
  ET = En("URLSearchParams"),
  RT = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Wi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), vo(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length;
    let l;
    for (r = 0; r < a; r++) (l = i[r]), t.call(null, e[l], l, e);
  }
}
function Hv(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const Gv = (() =>
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global)(),
  Kv = (e) => !Ci(e) && e !== Gv;
function Ac() {
  const { caseless: e } = (Kv(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && Hv(t, o)) || o;
      Ua(t[i]) && Ua(r)
        ? (t[i] = Ac(t[i], r))
        : Ua(r)
        ? (t[i] = Ac({}, r))
        : vo(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Wi(arguments[r], n);
  return t;
}
const CT = (e, t, n, { allOwnKeys: r } = {}) => (
    Wi(
      t,
      (o, i) => {
        n && Kn(o) ? (e[i] = Fv(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  bT = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  TT = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  AT = (e, t, n, r) => {
    let o, i, a;
    const l = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (a = o[i]), (!r || r(a, e, t)) && !l[a] && ((t[a] = e[a]), (l[a] = !0));
      e = n !== !1 && af(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  NT = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  LT = (e) => {
    if (!e) return null;
    if (vo(e)) return e;
    let t = e.length;
    if (!Wv(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  PT = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && af(Uint8Array)),
  $T = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  MT = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  IT = En("HTMLFormElement"),
  OT = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  vh = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  DT = En("RegExp"),
  Qv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Wi(n, (o, i) => {
      t(o, i, e) !== !1 && (r[i] = o);
    }),
      Object.defineProperties(e, r);
  },
  zT = (e) => {
    Qv(e, (t, n) => {
      if (Kn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Kn(r)) {
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
  UT = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return vo(e) ? r(e) : r(String(e).split(t)), n;
  },
  BT = () => {},
  FT = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  fu = "abcdefghijklmnopqrstuvwxyz",
  yh = "0123456789",
  Yv = { DIGIT: yh, ALPHA: fu, ALPHA_DIGIT: fu + fu.toUpperCase() + yh },
  jT = (e = 16, t = Yv.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function VT(e) {
  return !!(
    e &&
    Kn(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const WT = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (sf(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = vo(r) ? [] : {};
            return (
              Wi(r, (a, l) => {
                const s = n(a, o + 1);
                !Ci(s) && (i[l] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  P = {
    isArray: vo,
    isArrayBuffer: Vv,
    isBuffer: hT,
    isFormData: kT,
    isArrayBufferView: mT,
    isString: gT,
    isNumber: Wv,
    isBoolean: vT,
    isObject: sf,
    isPlainObject: Ua,
    isUndefined: Ci,
    isDate: yT,
    isFile: ST,
    isBlob: wT,
    isRegExp: DT,
    isFunction: Kn,
    isStream: xT,
    isURLSearchParams: ET,
    isTypedArray: PT,
    isFileList: _T,
    forEach: Wi,
    merge: Ac,
    extend: CT,
    trim: RT,
    stripBOM: bT,
    inherits: TT,
    toFlatObject: AT,
    kindOf: lf,
    kindOfTest: En,
    endsWith: NT,
    toArray: LT,
    forEachEntry: $T,
    matchAll: MT,
    isHTMLForm: IT,
    hasOwnProperty: vh,
    hasOwnProp: vh,
    reduceDescriptors: Qv,
    freezeMethods: zT,
    toObjectSet: UT,
    toCamelCase: OT,
    noop: BT,
    toFiniteNumber: FT,
    findKey: Hv,
    global: Gv,
    isContextDefined: Kv,
    ALPHABET: Yv,
    generateString: jT,
    isSpecCompliantForm: VT,
    toJSONObject: WT,
  };
function he(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
P.inherits(he, Error, {
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
      config: P.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Zv = he.prototype,
  qv = {};
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
  qv[e] = { value: e };
});
Object.defineProperties(he, qv);
Object.defineProperty(Zv, "isAxiosError", { value: !0 });
he.from = (e, t, n, r, o, i) => {
  const a = Object.create(Zv);
  return (
    P.toFlatObject(
      e,
      a,
      function (s) {
        return s !== Error.prototype;
      },
      (l) => l !== "isAxiosError"
    ),
    he.call(a, e.message, t, n, r, o),
    (a.cause = e),
    (a.name = e.name),
    i && Object.assign(a, i),
    a
  );
};
const HT = null;
function Nc(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function Xv(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Sh(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = Xv(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function GT(e) {
  return P.isArray(e) && !e.some(Nc);
}
const KT = P.toFlatObject(P, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ks(e, t, n) {
  if (!P.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = P.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (m, b) {
        return !P.isUndefined(b[m]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || c,
    i = n.dots,
    a = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && P.isSpecCompliantForm(t);
  if (!P.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (P.isDate(p)) return p.toISOString();
    if (!s && P.isBlob(p))
      throw new he("Blob is not supported. Use a Buffer instead.");
    return P.isArrayBuffer(p) || P.isTypedArray(p)
      ? s && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function c(p, m, b) {
    let h = p;
    if (p && !b && typeof p == "object") {
      if (P.endsWith(m, "{}"))
        (m = r ? m : m.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (P.isArray(p) && GT(p)) ||
        ((P.isFileList(p) || P.endsWith(m, "[]")) && (h = P.toArray(p)))
      )
        return (
          (m = Xv(m)),
          h.forEach(function (v, _) {
            !(P.isUndefined(v) || v === null) &&
              t.append(
                a === !0 ? Sh([m], _, i) : a === null ? m : m + "[]",
                u(v)
              );
          }),
          !1
        );
    }
    return Nc(p) ? !0 : (t.append(Sh(b, m, i), u(p)), !1);
  }
  const d = [],
    g = Object.assign(KT, {
      defaultVisitor: c,
      convertValue: u,
      isVisitable: Nc,
    });
  function w(p, m) {
    if (!P.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      d.push(p),
        P.forEach(p, function (h, f) {
          (!(P.isUndefined(h) || h === null) &&
            o.call(t, h, P.isString(f) ? f.trim() : f, m, g)) === !0 &&
            w(h, m ? m.concat(f) : [f]);
        }),
        d.pop();
    }
  }
  if (!P.isObject(e)) throw new TypeError("data must be an object");
  return w(e), t;
}
function wh(e) {
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
function uf(e, t) {
  (this._pairs = []), e && ks(e, this, t);
}
const Jv = uf.prototype;
Jv.append = function (t, n) {
  this._pairs.push([t, n]);
};
Jv.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, wh);
      }
    : wh;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function QT(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ey(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || QT,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = P.isURLSearchParams(t) ? t.toString() : new uf(t, n).toString(r)),
    i)
  ) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class YT {
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
    P.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const _h = YT,
  ty = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ZT = typeof URLSearchParams < "u" ? URLSearchParams : uf,
  qT = typeof FormData < "u" ? FormData : null,
  XT = typeof Blob < "u" ? Blob : null,
  JT = (() => {
    let e;
    return typeof navigator < "u" &&
      ((e = navigator.product) === "ReactNative" ||
        e === "NativeScript" ||
        e === "NS")
      ? !1
      : typeof window < "u" && typeof document < "u";
  })(),
  eA = (() =>
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function")(),
  on = {
    isBrowser: !0,
    classes: { URLSearchParams: ZT, FormData: qT, Blob: XT },
    isStandardBrowserEnv: JT,
    isStandardBrowserWebWorkerEnv: eA,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  };
function tA(e, t) {
  return ks(
    e,
    new on.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return on.isNode && P.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function nA(e) {
  return P.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function rA(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function ny(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    const l = Number.isFinite(+a),
      s = i >= n.length;
    return (
      (a = !a && P.isArray(o) ? o.length : a),
      s
        ? (P.hasOwnProp(o, a) ? (o[a] = [o[a], r]) : (o[a] = r), !l)
        : ((!o[a] || !P.isObject(o[a])) && (o[a] = []),
          t(n, r, o[a], i) && P.isArray(o[a]) && (o[a] = rA(o[a])),
          !l)
    );
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return (
      P.forEachEntry(e, (r, o) => {
        t(nA(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
const oA = { "Content-Type": void 0 };
function iA(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Es = {
  transitional: ty,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = P.isObject(t);
      if ((i && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t)))
        return o && o ? JSON.stringify(ny(t)) : t;
      if (
        P.isArrayBuffer(t) ||
        P.isBuffer(t) ||
        P.isStream(t) ||
        P.isFile(t) ||
        P.isBlob(t)
      )
        return t;
      if (P.isArrayBufferView(t)) return t.buffer;
      if (P.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let l;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return tA(t, this.formSerializer).toString();
        if ((l = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return ks(
            l ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), iA(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Es.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && P.isString(t) && ((r && !this.responseType) || o)) {
        const a = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? he.from(l, he.ERR_BAD_RESPONSE, this, null, this.response)
              : l;
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
  env: { FormData: on.classes.FormData, Blob: on.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
};
P.forEach(["delete", "get", "head"], function (t) {
  Es.headers[t] = {};
});
P.forEach(["post", "put", "patch"], function (t) {
  Es.headers[t] = P.merge(oA);
});
const cf = Es,
  aA = P.toObjectSet([
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
  lA = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            (o = a.indexOf(":")),
              (n = a.substring(0, o).trim().toLowerCase()),
              (r = a.substring(o + 1).trim()),
              !(!n || (t[n] && aA[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  xh = Symbol("internals");
function Do(e) {
  return e && String(e).trim().toLowerCase();
}
function Ba(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Ba) : String(e);
}
function sA(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
function uA(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function pu(e, t, n, r, o) {
  if (P.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!P.isString(t))) {
    if (P.isString(r)) return t.indexOf(r) !== -1;
    if (P.isRegExp(r)) return r.test(t);
  }
}
function cA(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function dA(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0,
    });
  });
}
class Rs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(l, s, u) {
      const c = Do(s);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = P.findKey(o, c);
      (!d || o[d] === void 0 || u === !0 || (u === void 0 && o[d] !== !1)) &&
        (o[d || s] = Ba(l));
    }
    const a = (l, s) => P.forEach(l, (u, c) => i(u, c, s));
    return (
      P.isPlainObject(t) || t instanceof this.constructor
        ? a(t, n)
        : P.isString(t) && (t = t.trim()) && !uA(t)
        ? a(lA(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Do(t)), t)) {
      const r = P.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return sA(o);
        if (P.isFunction(n)) return n.call(this, o, r);
        if (P.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Do(t)), t)) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || pu(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (((a = Do(a)), a)) {
        const l = P.findKey(r, a);
        l && (!n || pu(r, r[l], l, n)) && (delete r[l], (o = !0));
      }
    }
    return P.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || pu(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      P.forEach(this, (o, i) => {
        const a = P.findKey(r, i);
        if (a) {
          (n[a] = Ba(o)), delete n[i];
          return;
        }
        const l = t ? cA(i) : String(i).trim();
        l !== i && delete n[i], (n[l] = Ba(o)), (r[l] = !0);
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
      P.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && P.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[xh] = this[xh] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(a) {
      const l = Do(a);
      r[l] || (dA(o, a), (r[l] = !0));
    }
    return P.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Rs.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
P.freezeMethods(Rs.prototype);
P.freezeMethods(Rs);
const vn = Rs;
function hu(e, t) {
  const n = this || cf,
    r = t || n,
    o = vn.from(r.headers);
  let i = r.data;
  return (
    P.forEach(e, function (l) {
      i = l.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function ry(e) {
  return !!(e && e.__CANCEL__);
}
function Hi(e, t, n) {
  he.call(this, e ?? "canceled", he.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
P.inherits(Hi, he, { __CANCEL__: !0 });
function fA(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new he(
          "Request failed with status code " + n.status,
          [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const pA = on.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, o, i, a, l) {
          const s = [];
          s.push(n + "=" + encodeURIComponent(r)),
            P.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()),
            P.isString(i) && s.push("path=" + i),
            P.isString(a) && s.push("domain=" + a),
            l === !0 && s.push("secure"),
            (document.cookie = s.join("; "));
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
function hA(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function mA(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function oy(e, t) {
  return e && !hA(t) ? mA(e, t) : t;
}
const gA = on.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let a = i;
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
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
        (r = o(window.location.href)),
        function (a) {
          const l = P.isString(a) ? o(a) : a;
          return l.protocol === r.protocol && l.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function vA(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function yA(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    a;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        c = r[i];
      a || (a = u), (n[o] = s), (r[o] = u);
      let d = i,
        g = 0;
      for (; d !== o; ) (g += n[d++]), (d = d % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - a < t)) return;
      const w = c && u - c;
      return w ? Math.round((g * 1e3) / w) : void 0;
    }
  );
}
function kh(e, t) {
  let n = 0;
  const r = yA(50, 250);
  return (o) => {
    const i = o.loaded,
      a = o.lengthComputable ? o.total : void 0,
      l = i - n,
      s = r(l),
      u = i <= a;
    n = i;
    const c = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: l,
      rate: s || void 0,
      estimated: s && a && u ? (a - i) / s : void 0,
      event: o,
    };
    (c[t ? "download" : "upload"] = !0), e(c);
  };
}
const SA = typeof XMLHttpRequest < "u",
  wA =
    SA &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = vn.from(e.headers).normalize(),
          a = e.responseType;
        let l;
        function s() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        P.isFormData(o) &&
          (on.isStandardBrowserEnv || on.isStandardBrowserWebWorkerEnv) &&
          i.setContentType(!1);
        let u = new XMLHttpRequest();
        if (e.auth) {
          const w = e.auth.username || "",
            p = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(w + ":" + p));
        }
        const c = oy(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), ey(c, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function d() {
          if (!u) return;
          const w = vn.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            m = {
              data:
                !a || a === "text" || a === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: w,
              config: e,
              request: u,
            };
          fA(
            function (h) {
              n(h), s();
            },
            function (h) {
              r(h), s();
            },
            m
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = d)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(d);
              }),
          (u.onabort = function () {
            u &&
              (r(new he("Request aborted", he.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            r(new he("Network Error", he.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let p = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || ty;
            e.timeoutErrorMessage && (p = e.timeoutErrorMessage),
              r(
                new he(
                  p,
                  m.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          on.isStandardBrowserEnv)
        ) {
          const w =
            (e.withCredentials || gA(c)) &&
            e.xsrfCookieName &&
            pA.read(e.xsrfCookieName);
          w && i.set(e.xsrfHeaderName, w);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            P.forEach(i.toJSON(), function (p, m) {
              u.setRequestHeader(m, p);
            }),
          P.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          a && a !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", kh(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", kh(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (w) => {
              u &&
                (r(!w || w.type ? new Hi(null, e, u) : w),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const g = vA(c);
        if (g && on.protocols.indexOf(g) === -1) {
          r(new he("Unsupported protocol " + g + ":", he.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(o || null);
      });
    },
  Fa = { http: HT, xhr: wA };
P.forEach(Fa, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const _A = {
  getAdapter: (e) => {
    e = P.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    for (
      let o = 0;
      o < t && ((n = e[o]), !(r = P.isString(n) ? Fa[n.toLowerCase()] : n));
      o++
    );
    if (!r)
      throw r === !1
        ? new he(
            `Adapter ${n} is not supported by the environment`,
            "ERR_NOT_SUPPORT"
          )
        : new Error(
            P.hasOwnProp(Fa, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          );
    if (!P.isFunction(r)) throw new TypeError("adapter is not a function");
    return r;
  },
  adapters: Fa,
};
function mu(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Hi(null, e);
}
function Eh(e) {
  return (
    mu(e),
    (e.headers = vn.from(e.headers)),
    (e.data = hu.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    _A
      .getAdapter(e.adapter || cf.adapter)(e)
      .then(
        function (r) {
          return (
            mu(e),
            (r.data = hu.call(e, e.transformResponse, r)),
            (r.headers = vn.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            ry(r) ||
              (mu(e),
              r &&
                r.response &&
                ((r.response.data = hu.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = vn.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Rh = (e) => (e instanceof vn ? e.toJSON() : e);
function io(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, d) {
    return P.isPlainObject(u) && P.isPlainObject(c)
      ? P.merge.call({ caseless: d }, u, c)
      : P.isPlainObject(c)
      ? P.merge({}, c)
      : P.isArray(c)
      ? c.slice()
      : c;
  }
  function o(u, c, d) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, c, d);
  }
  function i(u, c) {
    if (!P.isUndefined(c)) return r(void 0, c);
  }
  function a(u, c) {
    if (P.isUndefined(c)) {
      if (!P.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, c);
  }
  function l(u, c, d) {
    if (d in t) return r(u, c);
    if (d in e) return r(void 0, u);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: l,
    headers: (u, c) => o(Rh(u), Rh(c), !0),
  };
  return (
    P.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
      const d = s[c] || o,
        g = d(e[c], t[c], c);
      (P.isUndefined(g) && d !== l) || (n[c] = g);
    }),
    n
  );
}
const iy = "1.3.4",
  df = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    df[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Ch = {};
df.transitional = function (t, n, r) {
  function o(i, a) {
    return (
      "[Axios v" +
      iy +
      "] Transitional option '" +
      i +
      "'" +
      a +
      (r ? ". " + r : "")
    );
  }
  return (i, a, l) => {
    if (t === !1)
      throw new he(
        o(a, " has been removed" + (n ? " in " + n : "")),
        he.ERR_DEPRECATED
      );
    return (
      n &&
        !Ch[a] &&
        ((Ch[a] = !0),
        console.warn(
          o(
            a,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, a, l) : !0
    );
  };
};
function xA(e, t, n) {
  if (typeof e != "object")
    throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      a = t[i];
    if (a) {
      const l = e[i],
        s = l === void 0 || a(l, i, e);
      if (s !== !0)
        throw new he("option " + i + " must be " + s, he.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new he("Unknown option " + i, he.ERR_BAD_OPTION);
  }
}
const Lc = { assertOptions: xA, validators: df },
  bn = Lc.validators;
class _l {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new _h(), response: new _h() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = io(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      Lc.assertOptions(
        r,
        {
          silentJSONParsing: bn.transitional(bn.boolean),
          forcedJSONParsing: bn.transitional(bn.boolean),
          clarifyTimeoutError: bn.transitional(bn.boolean),
        },
        !1
      ),
      o !== void 0 &&
        Lc.assertOptions(
          o,
          { encode: bn.function, serialize: bn.function },
          !0
        ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let a;
    (a = i && P.merge(i.common, i[n.method])),
      a &&
        P.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          (p) => {
            delete i[p];
          }
        ),
      (n.headers = vn.concat(a, i));
    const l = [];
    let s = !0;
    this.interceptors.request.forEach(function (m) {
      (typeof m.runWhen == "function" && m.runWhen(n) === !1) ||
        ((s = s && m.synchronous), l.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c,
      d = 0,
      g;
    if (!s) {
      const p = [Eh.bind(this), void 0];
      for (
        p.unshift.apply(p, l),
          p.push.apply(p, u),
          g = p.length,
          c = Promise.resolve(n);
        d < g;

      )
        c = c.then(p[d++], p[d++]);
      return c;
    }
    g = l.length;
    let w = n;
    for (d = 0; d < g; ) {
      const p = l[d++],
        m = l[d++];
      try {
        w = p(w);
      } catch (b) {
        m.call(this, b);
        break;
      }
    }
    try {
      c = Eh.call(this, w);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, g = u.length; d < g; ) c = c.then(u[d++], u[d++]);
    return c;
  }
  getUri(t) {
    t = io(this.defaults, t);
    const n = oy(t.baseURL, t.url);
    return ey(n, t.params, t.paramsSerializer);
  }
}
P.forEach(["delete", "get", "head", "options"], function (t) {
  _l.prototype[t] = function (n, r) {
    return this.request(
      io(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
P.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, a, l) {
      return this.request(
        io(l || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: a,
        })
      );
    };
  }
  (_l.prototype[t] = n()), (_l.prototype[t + "Form"] = n(!0));
});
const ja = _l;
class ff {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const a = new Promise((l) => {
          r.subscribe(l), (i = l);
        }).then(o);
        return (
          (a.cancel = function () {
            r.unsubscribe(i);
          }),
          a
        );
      }),
      t(function (i, a, l) {
        r.reason || ((r.reason = new Hi(i, a, l)), n(r.reason));
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
      token: new ff(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const kA = ff;
function EA(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function RA(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Pc = {
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
Object.entries(Pc).forEach(([e, t]) => {
  Pc[t] = e;
});
const CA = Pc;
function ay(e) {
  const t = new ja(e),
    n = Fv(ja.prototype.request, t);
  return (
    P.extend(n, ja.prototype, t, { allOwnKeys: !0 }),
    P.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return ay(io(e, o));
    }),
    n
  );
}
const qe = ay(cf);
qe.Axios = ja;
qe.CanceledError = Hi;
qe.CancelToken = kA;
qe.isCancel = ry;
qe.VERSION = iy;
qe.toFormData = ks;
qe.AxiosError = he;
qe.Cancel = qe.CanceledError;
qe.all = function (t) {
  return Promise.all(t);
};
qe.spread = EA;
qe.isAxiosError = RA;
qe.mergeConfig = io;
qe.AxiosHeaders = vn;
qe.formToJSON = (e) => ny(P.isHTMLForm(e) ? new FormData(e) : e);
qe.HttpStatusCode = CA;
qe.default = qe;
const bA = qe,
  yo = bA.create({
    baseURL: "http://localhost:8000",
    timeout: 18e4,
    withCredentials: !1,
  }),
  TA = async (e) => {
    try {
      const t = await yo.get("/api/slot/me/?token=" + e);
      return console.log(t), t.data;
    } catch (t) {
      console.error(t);
    }
  },
  AA = async (e) => {
    try {
      return (await yo.get("/api/rank/?token=" + e)).data;
    } catch (t) {
      console.error(t);
    }
  },
  NA = async (e) => {
    try {
      return (await yo.get("/api/slot/?token=" + e)).data;
    } catch (t) {
      console.error(t);
    }
  },
  LA = async (e, t, n, r, o, i, a) => {
    try {
      const l = await yo.post("/api/slot/?token=" + a, {
        start: e,
        end: t,
        subject: n,
        login: r,
        max: o,
        description: i,
      });
      return console.log("what~~~!"), l.data;
    } catch (l) {
      console.error(l);
    }
  },
  PA = async (e, t) => {
    try {
      return (await yo.delete("/api/slot/?token=" + e, { data: { id: t } }))
        .data;
    } catch (n) {
      console.error(n);
    }
  },
  $A = async (e) => {
    try {
      const t = await yo.get("/api/login/?code=" + e);
      return console.log("axiosLogin", t), t;
    } catch (t) {
      console.error("hi", t);
    }
  };
function MA(e) {
  function t(y, k, E, M, S) {
    for (
      var F = 0,
        $ = 0,
        B = 0,
        q = 0,
        J,
        W,
        ae = 0,
        ke = 0,
        le,
        ge = (le = J = 0),
        re = 0,
        Be = 0,
        Jn = 0,
        Ve = 0,
        er = E.length,
        Rn = er - 1,
        Rt,
        ee = "",
        be = "",
        So = "",
        wo = "",
        qt;
      re < er;

    ) {
      if (
        ((W = E.charCodeAt(re)),
        re === Rn &&
          $ + q + B + F !== 0 &&
          ($ !== 0 && (W = $ === 47 ? 10 : 47), (q = B = F = 0), er++, Rn++),
        $ + q + B + F === 0)
      ) {
        if (
          re === Rn &&
          (0 < Be && (ee = ee.replace(g, "")), 0 < ee.trim().length)
        ) {
          switch (W) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              ee += E.charAt(re);
          }
          W = 59;
        }
        switch (W) {
          case 123:
            for (
              ee = ee.trim(), J = ee.charCodeAt(0), le = 1, Ve = ++re;
              re < er;

            ) {
              switch ((W = E.charCodeAt(re))) {
                case 123:
                  le++;
                  break;
                case 125:
                  le--;
                  break;
                case 47:
                  switch ((W = E.charCodeAt(re + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < Rn; ++ge)
                          switch (E.charCodeAt(ge)) {
                            case 47:
                              if (
                                W === 42 &&
                                E.charCodeAt(ge - 1) === 42 &&
                                re + 2 !== ge
                              ) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (W === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  W++;
                case 40:
                  W++;
                case 34:
                case 39:
                  for (; re++ < Rn && E.charCodeAt(re) !== W; );
              }
              if (le === 0) break;
              re++;
            }
            switch (
              ((le = E.substring(Ve, re)),
              J === 0 && (J = (ee = ee.replace(d, "").trim()).charCodeAt(0)),
              J)
            ) {
              case 64:
                switch (
                  (0 < Be && (ee = ee.replace(g, "")),
                  (W = ee.charCodeAt(1)),
                  W)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Be = k;
                    break;
                  default:
                    Be = Ue;
                }
                if (
                  ((le = t(k, Be, le, W, S + 1)),
                  (Ve = le.length),
                  0 < z &&
                    ((Be = n(Ue, ee, Jn)),
                    (qt = l(3, le, Be, k, ie, Ie, Ve, W, S, M)),
                    (ee = Be.join("")),
                    qt !== void 0 &&
                      (Ve = (le = qt.trim()).length) === 0 &&
                      ((W = 0), (le = ""))),
                  0 < Ve)
                )
                  switch (W) {
                    case 115:
                      ee = ee.replace(L, a);
                    case 100:
                    case 109:
                    case 45:
                      le = ee + "{" + le + "}";
                      break;
                    case 107:
                      (ee = ee.replace(f, "$1 $2")),
                        (le = ee + "{" + le + "}"),
                        (le =
                          Ce === 1 || (Ce === 2 && i("@" + le, 3))
                            ? "@-webkit-" + le + "@" + le
                            : "@" + le);
                      break;
                    default:
                      (le = ee + le), M === 112 && (le = ((be += le), ""));
                  }
                else le = "";
                break;
              default:
                le = t(k, n(k, ee, Jn), le, M, S + 1);
            }
            (So += le),
              (le = Jn = Be = ge = J = 0),
              (ee = ""),
              (W = E.charCodeAt(++re));
            break;
          case 125:
          case 59:
            if (
              ((ee = (0 < Be ? ee.replace(g, "") : ee).trim()),
              1 < (Ve = ee.length))
            )
              switch (
                (ge === 0 &&
                  ((J = ee.charCodeAt(0)), J === 45 || (96 < J && 123 > J)) &&
                  (Ve = (ee = ee.replace(" ", ":")).length),
                0 < z &&
                  (qt = l(1, ee, k, y, ie, Ie, be.length, M, S, M)) !==
                    void 0 &&
                  (Ve = (ee = qt.trim()).length) === 0 &&
                  (ee = "\0\0"),
                (J = ee.charCodeAt(0)),
                (W = ee.charCodeAt(1)),
                J)
              ) {
                case 0:
                  break;
                case 64:
                  if (W === 105 || W === 99) {
                    wo += ee + E.charAt(re);
                    break;
                  }
                default:
                  ee.charCodeAt(Ve - 1) !== 58 &&
                    (be += o(ee, J, W, ee.charCodeAt(2)));
              }
            (Jn = Be = ge = J = 0), (ee = ""), (W = E.charCodeAt(++re));
        }
      }
      switch (W) {
        case 13:
        case 10:
          $ === 47
            ? ($ = 0)
            : 1 + J === 0 &&
              M !== 107 &&
              0 < ee.length &&
              ((Be = 1), (ee += "\0")),
            0 < z * X && l(0, ee, k, y, ie, Ie, be.length, M, S, M),
            (Ie = 1),
            ie++;
          break;
        case 59:
        case 125:
          if ($ + q + B + F === 0) {
            Ie++;
            break;
          }
        default:
          switch ((Ie++, (Rt = E.charAt(re)), W)) {
            case 9:
            case 32:
              if (q + F + $ === 0)
                switch (ae) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Rt = "";
                    break;
                  default:
                    W !== 32 && (Rt = " ");
                }
              break;
            case 0:
              Rt = "\\0";
              break;
            case 12:
              Rt = "\\f";
              break;
            case 11:
              Rt = "\\v";
              break;
            case 38:
              q + $ + F === 0 && ((Be = Jn = 1), (Rt = "\f" + Rt));
              break;
            case 108:
              if (q + $ + F + pe === 0 && 0 < ge)
                switch (re - ge) {
                  case 2:
                    ae === 112 && E.charCodeAt(re - 3) === 58 && (pe = ae);
                  case 8:
                    ke === 111 && (pe = ke);
                }
              break;
            case 58:
              q + $ + F === 0 && (ge = re);
              break;
            case 44:
              $ + B + q + F === 0 && ((Be = 1), (Rt += "\r"));
              break;
            case 34:
            case 39:
              $ === 0 && (q = q === W ? 0 : q === 0 ? W : q);
              break;
            case 91:
              q + $ + B === 0 && F++;
              break;
            case 93:
              q + $ + B === 0 && F--;
              break;
            case 41:
              q + $ + F === 0 && B--;
              break;
            case 40:
              if (q + $ + F === 0) {
                if (J === 0)
                  switch (2 * ae + 3 * ke) {
                    case 533:
                      break;
                    default:
                      J = 1;
                  }
                B++;
              }
              break;
            case 64:
              $ + B + q + F + ge + le === 0 && (le = 1);
              break;
            case 42:
            case 47:
              if (!(0 < q + F + B))
                switch ($) {
                  case 0:
                    switch (2 * W + 3 * E.charCodeAt(re + 1)) {
                      case 235:
                        $ = 47;
                        break;
                      case 220:
                        (Ve = re), ($ = 42);
                    }
                    break;
                  case 42:
                    W === 47 &&
                      ae === 42 &&
                      Ve + 2 !== re &&
                      (E.charCodeAt(Ve + 2) === 33 &&
                        (be += E.substring(Ve, re + 1)),
                      (Rt = ""),
                      ($ = 0));
                }
          }
          $ === 0 && (ee += Rt);
      }
      (ke = ae), (ae = W), re++;
    }
    if (((Ve = be.length), 0 < Ve)) {
      if (
        ((Be = k),
        0 < z &&
          ((qt = l(2, be, Be, y, ie, Ie, Ve, M, S, M)),
          qt !== void 0 && (be = qt).length === 0))
      )
        return wo + be + So;
      if (((be = Be.join(",") + "{" + be + "}"), Ce * pe !== 0)) {
        switch ((Ce !== 2 || i(be, 2) || (pe = 0), pe)) {
          case 111:
            be = be.replace(_, ":-moz-$1") + be;
            break;
          case 112:
            be =
              be.replace(v, "::-webkit-input-$1") +
              be.replace(v, "::-moz-$1") +
              be.replace(v, ":-ms-input-$1") +
              be;
        }
        pe = 0;
      }
    }
    return wo + be + So;
  }
  function n(y, k, E) {
    var M = k.trim().split(b);
    k = M;
    var S = M.length,
      F = y.length;
    switch (F) {
      case 0:
      case 1:
        var $ = 0;
        for (y = F === 0 ? "" : y[0] + " "; $ < S; ++$)
          k[$] = r(y, k[$], E).trim();
        break;
      default:
        var B = ($ = 0);
        for (k = []; $ < S; ++$)
          for (var q = 0; q < F; ++q) k[B++] = r(y[q] + " ", M[$], E).trim();
    }
    return k;
  }
  function r(y, k, E) {
    var M = k.charCodeAt(0);
    switch ((33 > M && (M = (k = k.trim()).charCodeAt(0)), M)) {
      case 38:
        return k.replace(h, "$1" + y.trim());
      case 58:
        return y.trim() + k.replace(h, "$1" + y.trim());
      default:
        if (0 < 1 * E && 0 < k.indexOf("\f"))
          return k.replace(h, (y.charCodeAt(0) === 58 ? "" : "$1") + y.trim());
    }
    return y + k;
  }
  function o(y, k, E, M) {
    var S = y + ";",
      F = 2 * k + 3 * E + 4 * M;
    if (F === 944) {
      y = S.indexOf(":", 9) + 1;
      var $ = S.substring(y, S.length - 1).trim();
      return (
        ($ = S.substring(0, y).trim() + $ + ";"),
        Ce === 1 || (Ce === 2 && i($, 1)) ? "-webkit-" + $ + $ : $
      );
    }
    if (Ce === 0 || (Ce === 2 && !i(S, 1))) return S;
    switch (F) {
      case 1015:
        return S.charCodeAt(10) === 97 ? "-webkit-" + S + S : S;
      case 951:
        return S.charCodeAt(3) === 116 ? "-webkit-" + S + S : S;
      case 963:
        return S.charCodeAt(5) === 110 ? "-webkit-" + S + S : S;
      case 1009:
        if (S.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + S + S;
      case 978:
        return "-webkit-" + S + "-moz-" + S + S;
      case 1019:
      case 983:
        return "-webkit-" + S + "-moz-" + S + "-ms-" + S + S;
      case 883:
        if (S.charCodeAt(8) === 45) return "-webkit-" + S + S;
        if (0 < S.indexOf("image-set(", 11))
          return S.replace(Me, "$1-webkit-$2") + S;
        break;
      case 932:
        if (S.charCodeAt(4) === 45)
          switch (S.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                S.replace("-grow", "") +
                "-webkit-" +
                S +
                "-ms-" +
                S.replace("grow", "positive") +
                S
              );
            case 115:
              return (
                "-webkit-" + S + "-ms-" + S.replace("shrink", "negative") + S
              );
            case 98:
              return (
                "-webkit-" +
                S +
                "-ms-" +
                S.replace("basis", "preferred-size") +
                S
              );
          }
        return "-webkit-" + S + "-ms-" + S + S;
      case 964:
        return "-webkit-" + S + "-ms-flex-" + S + S;
      case 1023:
        if (S.charCodeAt(8) !== 99) break;
        return (
          ($ = S.substring(S.indexOf(":", 15))
            .replace("flex-", "")
            .replace("space-between", "justify")),
          "-webkit-box-pack" + $ + "-webkit-" + S + "-ms-flex-pack" + $ + S
        );
      case 1005:
        return p.test(S)
          ? S.replace(w, ":-webkit-") + S.replace(w, ":-moz-") + S
          : S;
      case 1e3:
        switch (
          (($ = S.substring(13).trim()),
          (k = $.indexOf("-") + 1),
          $.charCodeAt(0) + $.charCodeAt(k))
        ) {
          case 226:
            $ = S.replace(T, "tb");
            break;
          case 232:
            $ = S.replace(T, "tb-rl");
            break;
          case 220:
            $ = S.replace(T, "lr");
            break;
          default:
            return S;
        }
        return "-webkit-" + S + "-ms-" + $ + S;
      case 1017:
        if (S.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (
          ((k = (S = y).length - 10),
          ($ = (S.charCodeAt(k) === 33 ? S.substring(0, k) : S)
            .substring(y.indexOf(":", 7) + 1)
            .trim()),
          (F = $.charCodeAt(0) + ($.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > $.charCodeAt(8)) break;
          case 115:
            S = S.replace($, "-webkit-" + $) + ";" + S;
            break;
          case 207:
          case 102:
            S =
              S.replace($, "-webkit-" + (102 < F ? "inline-" : "") + "box") +
              ";" +
              S.replace($, "-webkit-" + $) +
              ";" +
              S.replace($, "-ms-" + $ + "box") +
              ";" +
              S;
        }
        return S + ";";
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return (
                ($ = S.replace("-items", "")),
                "-webkit-" + S + "-webkit-box-" + $ + "-ms-flex-" + $ + S
              );
            case 115:
              return "-webkit-" + S + "-ms-flex-item-" + S.replace(O, "") + S;
            default:
              return (
                "-webkit-" +
                S +
                "-ms-flex-line-pack" +
                S.replace("align-content", "").replace(O, "") +
                S
              );
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (H.test(y) === !0)
          return ($ = y.substring(y.indexOf(":") + 1)).charCodeAt(0) === 115
            ? o(y.replace("stretch", "fill-available"), k, E, M).replace(
                ":fill-available",
                ":stretch"
              )
            : S.replace($, "-webkit-" + $) +
                S.replace($, "-moz-" + $.replace("fill-", "")) +
                S;
        break;
      case 962:
        if (
          ((S =
            "-webkit-" + S + (S.charCodeAt(5) === 102 ? "-ms-" + S : "") + S),
          E + M === 211 &&
            S.charCodeAt(13) === 105 &&
            0 < S.indexOf("transform", 10))
        )
          return (
            S.substring(0, S.indexOf(";", 27) + 1).replace(m, "$1-webkit-$2") +
            S
          );
    }
    return S;
  }
  function i(y, k) {
    var E = y.indexOf(k === 1 ? ":" : "{"),
      M = y.substring(0, k !== 3 ? E : 10);
    return (
      (E = y.substring(E + 1, y.length - 1)),
      Z(k !== 2 ? M : M.replace(Y, "$1"), E, k)
    );
  }
  function a(y, k) {
    var E = o(k, k.charCodeAt(0), k.charCodeAt(1), k.charCodeAt(2));
    return E !== k + ";"
      ? E.replace(N, " or ($1)").substring(4)
      : "(" + k + ")";
  }
  function l(y, k, E, M, S, F, $, B, q, J) {
    for (var W = 0, ae = k, ke; W < z; ++W)
      switch ((ke = xe[W].call(c, y, ae, E, M, S, F, $, B, q, J))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ae = ke;
      }
    if (ae !== k) return ae;
  }
  function s(y) {
    switch (y) {
      case void 0:
      case null:
        z = xe.length = 0;
        break;
      default:
        if (typeof y == "function") xe[z++] = y;
        else if (typeof y == "object")
          for (var k = 0, E = y.length; k < E; ++k) s(y[k]);
        else X = !!y | 0;
    }
    return s;
  }
  function u(y) {
    return (
      (y = y.prefix),
      y !== void 0 &&
        ((Z = null),
        y
          ? typeof y != "function"
            ? (Ce = 1)
            : ((Ce = 2), (Z = y))
          : (Ce = 0)),
      u
    );
  }
  function c(y, k) {
    var E = y;
    if ((33 > E.charCodeAt(0) && (E = E.trim()), (fe = E), (E = [fe]), 0 < z)) {
      var M = l(-1, k, E, E, ie, Ie, 0, 0, 0, 0);
      M !== void 0 && typeof M == "string" && (k = M);
    }
    var S = t(Ue, E, k, 0, 0);
    return (
      0 < z &&
        ((M = l(-2, S, E, E, ie, Ie, S.length, 0, 0, 0)),
        M !== void 0 && (S = M)),
      (fe = ""),
      (pe = 0),
      (Ie = ie = 1),
      S
    );
  }
  var d = /^\0+/g,
    g = /[\0\r\f]/g,
    w = /: */g,
    p = /zoo|gra/,
    m = /([,: ])(transform)/g,
    b = /,\r+?/g,
    h = /([\t\r\n ])*\f?&/g,
    f = /@(k\w+)\s*(\S*)\s*/,
    v = /::(place)/g,
    _ = /:(read-only)/g,
    T = /[svh]\w+-[tblr]{2}/,
    L = /\(\s*(.*)\s*\)/g,
    N = /([\s\S]*?);/g,
    O = /-self|flex-/g,
    Y = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    H = /stretch|:\s*\w+\-(?:conte|avail)/,
    Me = /([^-])(image-set\()/,
    Ie = 1,
    ie = 1,
    pe = 0,
    Ce = 1,
    Ue = [],
    xe = [],
    z = 0,
    Z = null,
    X = 0,
    fe = "";
  return (c.use = s), (c.set = u), e !== void 0 && u(e), c;
}
var IA = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function mn() {
  return (mn =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var bh = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  $c = function (e) {
    return (
      e !== null &&
      typeof e == "object" &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        "[object Object]" &&
      !Ei.typeOf(e)
    );
  },
  xl = Object.freeze([]),
  Wn = Object.freeze({});
function bi(e) {
  return typeof e == "function";
}
function Th(e) {
  return e.displayName || e.name || "Component";
}
function pf(e) {
  return e && typeof e.styledComponentId == "string";
}
var ao =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  hf = typeof window < "u" && "HTMLElement" in window,
  OA = Boolean(
    typeof SC_DISABLE_SPEEDY == "boolean"
      ? SC_DISABLE_SPEEDY
      : typeof process < "u" &&
          process.env !== void 0 &&
          ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
          {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
            ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
              {}.REACT_APP_SC_DISABLE_SPEEDY
            : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== ""
            ? {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY
            : !1)
  );
function Gi(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var DA = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var o = this.groupSizes, i = o.length, a = i; n >= a; )
            (a <<= 1) < 0 && Gi(16, "" + n);
          (this.groupSizes = new Uint32Array(a)),
            this.groupSizes.set(o),
            (this.length = a);
          for (var l = i; l < a; l++) this.groupSizes[l] = 0;
        }
        for (var s = this.indexOfGroup(n + 1), u = 0, c = r.length; u < c; u++)
          this.tag.insertRule(s, r[u]) && (this.groupSizes[n]++, s++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + r;
          this.groupSizes[n] = 0;
          for (var a = o; a < i; a++) this.tag.deleteRule(o);
        }
      }),
      (t.getGroup = function (n) {
        var r = "";
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var o = this.groupSizes[n],
            i = this.indexOfGroup(n),
            a = i + o,
            l = i;
          l < a;
          l++
        )
          r +=
            this.tag.getRule(l) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  Va = new Map(),
  kl = new Map(),
  ti = 1,
  ya = function (e) {
    if (Va.has(e)) return Va.get(e);
    for (; kl.has(ti); ) ti++;
    var t = ti++;
    return Va.set(e, t), kl.set(t, e), t;
  },
  zA = function (e) {
    return kl.get(e);
  },
  UA = function (e, t) {
    t >= ti && (ti = t + 1), Va.set(e, t), kl.set(t, e);
  },
  BA = "style[" + ao + '][data-styled-version="5.3.9"]',
  FA = new RegExp("^" + ao + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  jA = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  VA = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        o = 0,
        i = n.length;
      o < i;
      o++
    ) {
      var a = n[o].trim();
      if (a) {
        var l = a.match(FA);
        if (l) {
          var s = 0 | parseInt(l[1], 10),
            u = l[2];
          s !== 0 && (UA(u, s), jA(e, u, l[3]), e.getTag().insertRules(s, r)),
            (r.length = 0);
        } else r.push(a);
      }
    }
  },
  WA = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
  },
  ly = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (l) {
        for (var s = l.childNodes, u = s.length; u >= 0; u--) {
          var c = s[u];
          if (c && c.nodeType === 1 && c.hasAttribute(ao)) return c;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(ao, "active"),
      r.setAttribute("data-styled-version", "5.3.9");
    var a = WA();
    return a && r.setAttribute("nonce", a), n.insertBefore(r, i), r;
  },
  HA = (function () {
    function e(n) {
      var r = (this.element = ly(n));
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, a = 0, l = i.length; a < l; a++) {
            var s = i[a];
            if (s.ownerNode === o) return s;
          }
          Gi(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
      }),
      e
    );
  })(),
  GA = (function () {
    function e(n) {
      var r = (this.element = ly(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var o = document.createTextNode(r),
            i = this.nodes[n];
          return this.element.insertBefore(o, i || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : "";
      }),
      e
    );
  })(),
  KA = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : "";
      }),
      e
    );
  })(),
  Ah = hf,
  QA = { isServer: !hf, useCSSOMInjection: !OA },
  sy = (function () {
    function e(n, r, o) {
      n === void 0 && (n = Wn),
        r === void 0 && (r = {}),
        (this.options = mn({}, QA, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          hf &&
          Ah &&
          ((Ah = !1),
          (function (i) {
            for (
              var a = document.querySelectorAll(BA), l = 0, s = a.length;
              l < s;
              l++
            ) {
              var u = a[l];
              u &&
                u.getAttribute(ao) !== "active" &&
                (VA(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this));
    }
    e.registerId = function (n) {
      return ya(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            mn({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (a = r.target),
            (n = o ? new KA(a) : i ? new HA(a) : new GA(a)),
            new DA(n)))
        );
        var n, r, o, i, a;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((ya(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(ya(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(ya(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = "", a = 0; a < o; a++) {
            var l = zA(a);
            if (l !== void 0) {
              var s = n.names.get(l),
                u = r.getGroup(a);
              if (s && u && s.size) {
                var c = ao + ".g" + a + '[id="' + l + '"]',
                  d = "";
                s !== void 0 &&
                  s.forEach(function (g) {
                    g.length > 0 && (d += g + ",");
                  }),
                  (i +=
                    "" +
                    u +
                    c +
                    '{content:"' +
                    d +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      e
    );
  })(),
  YA = /(a)(d)/gi,
  Nh = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Mc(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Nh(t % 52) + n;
  return (Nh(t % 52) + n).replace(YA, "$1-$2");
}
var Dr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  uy = function (e) {
    return Dr(5381, e);
  };
function ZA(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (bi(n) && !pf(n)) return !1;
  }
  return !0;
}
var qA = uy("5.3.9"),
  XA = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && ZA(t)),
        (this.componentId = n),
        (this.baseHash = Dr(qA, n)),
        (this.baseStyle = r),
        sy.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var a = lo(this.rules, t, n, r).join(""),
              l = Mc(Dr(this.baseHash, a) >>> 0);
            if (!n.hasNameForId(o, l)) {
              var s = r(a, "." + l, void 0, o);
              n.insertRules(o, l, s);
            }
            i.push(l), (this.staticRulesId = l);
          }
        else {
          for (
            var u = this.rules.length,
              c = Dr(this.baseHash, r.hash),
              d = "",
              g = 0;
            g < u;
            g++
          ) {
            var w = this.rules[g];
            if (typeof w == "string") d += w;
            else if (w) {
              var p = lo(w, t, n, r),
                m = Array.isArray(p) ? p.join("") : p;
              (c = Dr(c, m + g)), (d += m);
            }
          }
          if (d) {
            var b = Mc(c >>> 0);
            if (!n.hasNameForId(o, b)) {
              var h = r(d, "." + b, void 0, o);
              n.insertRules(o, b, h);
            }
            i.push(b);
          }
        }
        return i.join(" ");
      }),
      e
    );
  })(),
  JA = /^\s*\/\/.*$/gm,
  eN = [":", "[", ".", "#"];
function tN(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? Wn : e,
    a = i.options,
    l = a === void 0 ? Wn : a,
    s = i.plugins,
    u = s === void 0 ? xl : s,
    c = new MA(l),
    d = [],
    g = (function (m) {
      function b(h) {
        if (h)
          try {
            m(h + "}");
          } catch {}
      }
      return function (h, f, v, _, T, L, N, O, Y, H) {
        switch (h) {
          case 1:
            if (Y === 0 && f.charCodeAt(0) === 64) return m(f + ";"), "";
            break;
          case 2:
            if (O === 0) return f + "/*|*/";
            break;
          case 3:
            switch (O) {
              case 102:
              case 112:
                return m(v[0] + f), "";
              default:
                return f + (H === 0 ? "/*|*/" : "");
            }
          case -2:
            f.split("/*|*/}").forEach(b);
        }
      };
    })(function (m) {
      d.push(m);
    }),
    w = function (m, b, h) {
      return (b === 0 && eN.indexOf(h[n.length]) !== -1) || h.match(o)
        ? m
        : "." + t;
    };
  function p(m, b, h, f) {
    f === void 0 && (f = "&");
    var v = m.replace(JA, ""),
      _ = b && h ? h + " " + b + " { " + v + " }" : v;
    return (
      (t = f),
      (n = b),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (o = new RegExp("(\\" + n + "\\b){2,}")),
      c(h || !b ? "" : b, _)
    );
  }
  return (
    c.use(
      [].concat(u, [
        function (m, b, h) {
          m === 2 &&
            h.length &&
            h[0].lastIndexOf(n) > 0 &&
            (h[0] = h[0].replace(r, w));
        },
        g,
        function (m) {
          if (m === -2) {
            var b = d;
            return (d = []), b;
          }
        },
      ])
    ),
    (p.hash = u.length
      ? u
          .reduce(function (m, b) {
            return b.name || Gi(15), Dr(m, b.name);
          }, 5381)
          .toString()
      : ""),
    p
  );
}
var cy = Se.createContext();
cy.Consumer;
var dy = Se.createContext(),
  nN = (dy.Consumer, new sy()),
  Ic = tN();
function rN() {
  return U.useContext(cy) || nN;
}
function oN() {
  return U.useContext(dy) || Ic;
}
var fy = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Ic);
        var a = r.name + i.hash;
        o.hasNameForId(r.id, a) ||
          o.insertRules(r.id, a, i(r.rules, a, "@keyframes"));
      }),
        (this.toString = function () {
          return Gi(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Ic), this.name + t.hash;
      }),
      e
    );
  })(),
  iN = /([A-Z])/,
  aN = /([A-Z])/g,
  lN = /^ms-/,
  sN = function (e) {
    return "-" + e.toLowerCase();
  };
function Lh(e) {
  return iN.test(e) ? e.replace(aN, sN).replace(lN, "-ms-") : e;
}
var Ph = function (e) {
  return e == null || e === !1 || e === "";
};
function lo(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], a = 0, l = e.length; a < l; a += 1)
      (o = lo(e[a], t, n, r)) !== "" &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Ph(e)) return "";
  if (pf(e)) return "." + e.styledComponentId;
  if (bi(e)) {
    if (
      typeof (u = e) != "function" ||
      (u.prototype && u.prototype.isReactComponent) ||
      !t
    )
      return e;
    var s = e(t);
    return lo(s, t, n, r);
  }
  var u;
  return e instanceof fy
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : $c(e)
    ? (function c(d, g) {
        var w,
          p,
          m = [];
        for (var b in d)
          d.hasOwnProperty(b) &&
            !Ph(d[b]) &&
            ((Array.isArray(d[b]) && d[b].isCss) || bi(d[b])
              ? m.push(Lh(b) + ":", d[b], ";")
              : $c(d[b])
              ? m.push.apply(m, c(d[b], b))
              : m.push(
                  Lh(b) +
                    ": " +
                    ((w = b),
                    (p = d[b]) == null || typeof p == "boolean" || p === ""
                      ? ""
                      : typeof p != "number" || p === 0 || w in IA
                      ? String(p).trim()
                      : p + "px") +
                    ";"
                ));
        return g ? [g + " {"].concat(m, ["}"]) : m;
      })(e)
    : e.toString();
}
var $h = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function py(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return bi(e) || $c(e)
    ? $h(lo(bh(xl, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == "string"
    ? e
    : $h(lo(bh(e, n)));
}
var uN = function (e, t, n) {
    return (
      n === void 0 && (n = Wn), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  cN = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  dN = /(^-|-$)/g;
function gu(e) {
  return e.replace(cN, "-").replace(dN, "");
}
var hy = function (e) {
  return Mc(uy(e) >>> 0);
};
function Sa(e) {
  return typeof e == "string" && !0;
}
var Oc = function (e) {
    return (
      typeof e == "function" ||
      (typeof e == "object" && e !== null && !Array.isArray(e))
    );
  },
  fN = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype";
  };
function pN(e, t, n) {
  var r = e[n];
  Oc(t) && Oc(r) ? my(r, t) : (e[n] = t);
}
function my(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var a = i[o];
    if (Oc(a)) for (var l in a) fN(l) && pN(e, a[l], l);
  }
  return e;
}
var gy = Se.createContext();
gy.Consumer;
var vu = {};
function vy(e, t, n) {
  var r = pf(e),
    o = !Sa(e),
    i = t.attrs,
    a = i === void 0 ? xl : i,
    l = t.componentId,
    s =
      l === void 0
        ? (function (f, v) {
            var _ = typeof f != "string" ? "sc" : gu(f);
            vu[_] = (vu[_] || 0) + 1;
            var T = _ + "-" + hy("5.3.9" + _ + vu[_]);
            return v ? v + "-" + T : T;
          })(t.displayName, t.parentComponentId)
        : l,
    u = t.displayName,
    c =
      u === void 0
        ? (function (f) {
            return Sa(f) ? "styled." + f : "Styled(" + Th(f) + ")";
          })(e)
        : u,
    d =
      t.displayName && t.componentId
        ? gu(t.displayName) + "-" + t.componentId
        : t.componentId || s,
    g = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a,
    w = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (w = t.shouldForwardProp
      ? function (f, v, _) {
          return e.shouldForwardProp(f, v, _) && t.shouldForwardProp(f, v, _);
        }
      : e.shouldForwardProp);
  var p,
    m = new XA(n, d, r ? e.componentStyle : void 0),
    b = m.isStatic && a.length === 0,
    h = function (f, v) {
      return (function (_, T, L, N) {
        var O = _.attrs,
          Y = _.componentStyle,
          H = _.defaultProps,
          Me = _.foldedComponentIds,
          Ie = _.shouldForwardProp,
          ie = _.styledComponentId,
          pe = _.target,
          Ce = (function (M, S, F) {
            M === void 0 && (M = Wn);
            var $ = mn({}, S, { theme: M }),
              B = {};
            return (
              F.forEach(function (q) {
                var J,
                  W,
                  ae,
                  ke = q;
                for (J in (bi(ke) && (ke = ke($)), ke))
                  $[J] = B[J] =
                    J === "className"
                      ? ((W = B[J]),
                        (ae = ke[J]),
                        W && ae ? W + " " + ae : W || ae)
                      : ke[J];
              }),
              [$, B]
            );
          })(uN(T, U.useContext(gy), H) || Wn, T, O),
          Ue = Ce[0],
          xe = Ce[1],
          z = (function (M, S, F, $) {
            var B = rN(),
              q = oN(),
              J = S
                ? M.generateAndInjectStyles(Wn, B, q)
                : M.generateAndInjectStyles(F, B, q);
            return J;
          })(Y, N, Ue),
          Z = L,
          X = xe.$as || T.$as || xe.as || T.as || pe,
          fe = Sa(X),
          y = xe !== T ? mn({}, T, {}, xe) : T,
          k = {};
        for (var E in y)
          E[0] !== "$" &&
            E !== "as" &&
            (E === "forwardedAs"
              ? (k.as = y[E])
              : (Ie ? Ie(E, Cc, X) : !fe || Cc(E)) && (k[E] = y[E]));
        return (
          T.style &&
            xe.style !== T.style &&
            (k.style = mn({}, T.style, {}, xe.style)),
          (k.className = Array.prototype
            .concat(Me, ie, z !== ie ? z : null, T.className, xe.className)
            .filter(Boolean)
            .join(" ")),
          (k.ref = Z),
          U.createElement(X, k)
        );
      })(p, f, v, b);
    };
  return (
    (h.displayName = c),
    ((p = Se.forwardRef(h)).attrs = g),
    (p.componentStyle = m),
    (p.displayName = c),
    (p.shouldForwardProp = w),
    (p.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : xl),
    (p.styledComponentId = d),
    (p.target = r ? e.target : e),
    (p.withComponent = function (f) {
      var v = t.componentId,
        _ = (function (L, N) {
          if (L == null) return {};
          var O,
            Y,
            H = {},
            Me = Object.keys(L);
          for (Y = 0; Y < Me.length; Y++)
            (O = Me[Y]), N.indexOf(O) >= 0 || (H[O] = L[O]);
          return H;
        })(t, ["componentId"]),
        T = v && v + "-" + (Sa(f) ? f : gu(Th(f)));
      return vy(f, mn({}, _, { attrs: g, componentId: T }), n);
    }),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (f) {
        this._foldedDefaultProps = r ? my({}, e.defaultProps, f) : f;
      },
    }),
    Object.defineProperty(p, "toString", {
      value: function () {
        return "." + p.styledComponentId;
      },
    }),
    o &&
      G2(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    p
  );
}
var Dc = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = Wn), !Ei.isValidElementType(r)))
      return Gi(1, String(r));
    var i = function () {
      return n(r, o, py.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (a) {
        return t(n, r, mn({}, o, {}, a));
      }),
      (i.attrs = function (a) {
        return t(
          n,
          r,
          mn({}, o, {
            attrs: Array.prototype.concat(o.attrs, a).filter(Boolean),
          })
        );
      }),
      i
    );
  })(vy, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  Dc[e] = Dc(e);
});
function hN(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = py.apply(void 0, [e].concat(n)).join(""),
    i = hy(o);
  return new fy(i, o);
}
const yy = Dc,
  mN = () => C(gN, { children: C(vN, {}) }),
  gN = yy.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  Mh = hN`
  50% {
    background: var(--white-color);
  }
`,
  vN = yy.div`
  position: relative;
  width: 6px;
  height: 24px;
  background: var(--main-color);
  animation: ${Mh} 1.5s infinite;
  animation-delay: 0.25s;
  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 6px;
    height: 16px;
    background: var(--main-color);
    top: 50%;
    transform: translateY(-50%);
    animation: ${Mh} 1.5s infinite;
  }
  &:before {
    left: -15px;
  }
  &:after {
    left: 15px;
    animation-delay: 0.5s;
  }
`,
  mf = Qe({ key: "mentoToggle", default: !1 }),
  _r = Qe({
    key: "myInfo",
    default: {
      token: "",
      image: "",
      login: "",
      level: "",
      coa: "",
      projects: "",
    },
  }),
  gf = Qe({ key: "backgroundToggle", default: !1 }),
  vf = Qe({ key: "scheduleToggle", default: !1 }),
  Sy = Qe({ key: "menteeScheduleBackToggle", default: !1 }),
  wy = Qe({ key: "menteeScheduleToggle", default: !1 }),
  yf = Qe({ key: "schduleBackToggle", default: !1 }),
  _y = Qe({ key: "startIndex", default: -1 }),
  xy = Qe({ key: "endIndex", default: -1 }),
  Sf = Qe({ key: "menteeNumber", default: 1 }),
  Cs = Qe({ key: "selectedSubject", default: "" }),
  bs = Qe({ key: "subjectDescription", default: "" }),
  ky = Qe({ key: "mentorInfoToggle", default: !1 }),
  Ey = Qe({ key: "mentorInfoBackToggle", default: !1 }),
  Ts = Qe({
    key: "currentMentorInfo",
    default: {
      intra: "inshin",
      level: 999,
      good: 1e4,
      subjects: ["ft_transcendence"],
      image: "",
      coalition: "gon",
    },
  });
Qe({ key: "currentSubjectInfoState", default: { subject: "", info: [] } });
Qe({ key: "selectedSubjectOnMentorInfo", default: { subject: "", info: [] } });
const Ti = Qe({ key: "openedSlots", default: [] }),
  Ry = Qe({ key: "selectedSubjectInfo", default: { subject: "", info: [] } }),
  Cy = Qe({ key: "selectedSubjectIndex", default: 0 }),
  yN = () => {
    const e = e_(),
      [t, n] = U.useState(!1),
      [r, o] = Dt(_r);
    return (
      U.useEffect(() => {
        r.token.length && e("/main");
        const i = window.location.search.slice(1).split("=")[1];
        i && (n(!0), a(i));
        async function a(l) {
          try {
            const { data: s } = await $A(l);
            o({
              token: s.token,
              image: s.image,
              login: s.login,
              level: s.level,
              coa: s.coa,
              projects: JSON.stringify(s.projects),
            }),
              localStorage.setItem("token", s.token),
              e("/main");
          } catch (s) {
            console.log(s);
          }
        }
      }, []),
      Q(zv, {
        children: [
          C(Dv, {}),
          C(Bv, { width: 420, height: 290 }),
          C(SN, {}),
          C(wN, { id: "firstSlogun", children: "혼자하면 42일" }),
          C(_N, { id: "secondSlogun", children: "같이하면 42분" }),
          C(xN, { children: "42 PeerMatching" }),
          !t &&
            C(Ih, {
              onClick: () => {
                n(!0),
                  window.location.replace("http://localhost:8000/api/login/");
              },
              children: "LOG IN",
            }),
          t && C(Ih, { children: C(mN, {}) }),
        ],
      })
    );
  },
  Ih = A.div`
  width: 340px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  font-size: 40px;
  background: var(--main-color);
  border-radius: 20px;
  position: absolute;
  left: 17%;
  top: 600px;
  cursor: pointer;
  & > a {
    color: var(--white-color);
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 100px;
    text-decoration: none;
  }
`,
  SN = A.div`
  width: 700px;
  height: 500px;
  position: absolute;
  left: 43%;
  top: 24%;
  background-repeat: no-repeat;
  background-image: url("/assets/illust.png");
  background-size: 100% 100%;
`,
  wN = A.div`
  font-size: 2rem;
  position: absolute;
  left: 17%;
  top: 330px;
`,
  _N = A.div`
  font-size: 2rem;
  position: absolute;
  left: 17%;
  top: 370px;
`,
  xN = A.div`
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  left: 17%;
  top: 520px;
`,
  kN = ({ name: e, onClick: t }) =>
    Q(RN, { onClick: t, children: [e, C(EN, {})] }),
  EN = A.div`
  background-image: url("/assets/arrow.png");
  width: 30px;
  height: 30px;
  background-size: 100% 100%;
  margin-left: 50px;
`,
  RN = A.div`
  width: 360px;
  height: 65px;
  background: var(--main-color);
  border-radius: 10px;
  margin-top: 45px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;
`,
  CN = [
    "ALL",
    "Circle 0",
    "Circle 1",
    "Circle 2",
    "Circle 3",
    "Circle 4",
    "Circle 5",
    "Circle 6",
  ],
  bN = () =>
    Q(NN, {
      children: [
        CN.map((e) => C(LN, { children: e })),
        C("label", { htmlFor: "search", children: C(AN, {}) }),
        C(TN, { id: "search", type: "text", maxLength: 15 }),
      ],
    }),
  TN = A.input`
  height: 30px;
  margin-left: 5px;
  outline: none;
  border: none;
  outline: none;
  border-radius: 10px;
  background: var(--main-color);
  padding-left: 10px;
  color: white;
`,
  AN = A.div`
  background-image: url("/assets/SearchIcon.png");
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 10px;
`,
  NN = A.div`
  width: 98%;
  border-radius: 10px;
  height: 50px;
  background: var(--lightgray-color);
  margin-top: 15px;
  display: flex;
  align-items: center;
  position: relative;
`,
  LN = A.div`
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 7px;
  background: var(--main-color);
  border: 1px solid var(--main-color);
  height: 40px;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 1rem;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
    background: var(--white-color);
  }
`,
  by = (e) => `https://profile.intra.42.fr/users/${e}`,
  Ty = (e) => {
    let t = Math.floor((e.getTime() - new Date().getTime()) / 1e3 / 60);
    return t < 60
      ? `${t} minutes`
      : ((t = Math.floor(t / 60)),
        t < 24
          ? `${t} hours`
          : ((t = Math.floor(t / 24)), t === 1 ? `${t} day` : `${t} days`));
  },
  PN = ({ info: e, idx: t, total: n }) =>
    Q("div", {
      children: [
        "You will teach ",
        e.subject,
        " to",
        " ",
        e.target.length > 1
          ? Q(IN, {
              children: [
                e.target.length,
                " cadets",
                C(DN, {
                  idx: t,
                  total: n,
                  count: e.target.length,
                  children: e.target.map((r) => C(ON, { children: r }, r)),
                }),
              ],
            })
          : C(Ay, {
              target: "_blank",
              href: by(e.target[0]),
              children: e.target[0],
            }),
        " ",
        "in ",
        Ty(e.time),
        ".",
      ],
    }),
  $N = ({ info: e }) =>
    Q("div", {
      children: [
        "You will learn ",
        e.subject,
        " from",
        " ",
        C(Ay, {
          target: "_blank",
          href: by(e.target[0]),
          children: e.target[0],
        }),
        " ",
        "in ",
        Ty(e.time),
        ".",
      ],
    });
function MN(e, t, n) {
  return e.type === "mentor"
    ? C(PN, { info: e, idx: t, total: n }, e.time.getTime())
    : C($N, { info: e }, e.time.getTime());
}
const IN = A.span`
  color: var(--main-color);
  font-weight: bold;
  cursor: pointer;
  position: relative;
  &:hover {
    & > div {
      visibility: visible;
    }
  }
`,
  ON = A.div`
  color: white;
`,
  DN = A.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  left: 0;
  top: ${({ idx: e, total: t, count: n }) =>
    e > 3 && t - e <= 3 ? `-${n * 15 + 13}px` : "100%"};
  z-index: 2;
  visibility: hidden;
  padding: 5px;
`,
  Ay = A.a`
  color: var(--main-color) !important;
  font-weight: bold;
`,
  zN = () => {
    const { token: e } = je(_r),
      [t, n] = U.useState([]);
    return (
      U.useEffect(() => {
        r();
        async function r() {
          const o = await TA(e || localStorage.getItem("token"));
          console.log("in MatchList", o);
        }
      }, []),
      Q(BN, {
        children: [
          C(Uv, { children: "Mentor" }),
          C(UN, { children: t.map((r, o) => MN(r, o, t.length)) }),
        ],
      })
    );
  },
  UN = A.div`
  margin-top: 15px;
  padding-left: 10px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
  font-size: 1rem;
  & > div {
    margin-top: 5px;
  }

  & > div:last-child {
    margin-bottom: 15px;
  }
`,
  BN = A.div`
  width: 360px;
  height: 270px;
  background: white;
  overflow: hidden;
  margin-top: 30px;
`;
function Ny() {
  const e = new Array(9).fill(""),
    t = new Date(),
    n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - t.getDay() + 1),
    r = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let o = 1; o <= 7; o++)
    e[o] = `${r[o - 1]} ${n.getMonth() + 1}/${n.getDate() + o - 1}`;
  return e;
}
const Ly = (e, t) => {
    const n = new Date(e);
    n.setMinutes(t);
    const r = n.getHours(),
      o = n.getMinutes();
    return o % 60 === 0
      ? `${r % 12 === 0 ? 12 : r % 12} : ${o || "0" + o} ${
          r < 12 ? "AM" : "PM"
        }`
      : "";
  },
  Py = (e) => {
    const t = new Date().getTime();
    return Math.floor((t - e.getTime()) / 1e3 / 60) <= -15;
  },
  $y = (e, t) => {
    const n = new Date(e);
    return n.setMinutes(t * 15), n;
  },
  so = () => {
    const e = new Date();
    return new Date(
      e.getFullYear(),
      e.getMonth(),
      e.getDate() - e.getDay() + 1
    );
  },
  My = (e) => {
    const t = new Date(e);
    t.setDate(t.getDate() + 6);
    const n = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${n[e.getMonth()]} ${e.getDate()} ~ ${
      e.getMonth() !== t.getMonth() ? n[t.getMonth()] : ""
    } ${t.getDate()}, ${e.getFullYear()}`;
  };
function Ki() {
  const e = We(gf),
    t = We(mf),
    n = We(vf),
    r = We(yf),
    o = We(ky),
    i = We(Ey),
    a = We(wy),
    l = We(Sy);
  return {
    closeSetMentoring: () => {
      e(!1), t(!1);
    },
    closeScheduleBack: () => {
      n(!1), r(!1), a(!1);
    },
    closeMentorInfo: () => {
      i(!1), o(!1);
    },
    openMentorInfo: () => {
      i(!0), o(!0);
    },
    openMenteeSchedule: () => {
      a(!0), l(!0);
    },
    closeMenteeSchedule: () => {
      l(!1), a(!1);
    },
  };
}
function El(e, t) {
  const n = so(),
    r = new Date(n),
    o = new Date(n);
  r.setMinutes(e * 15), o.setMinutes((t + 1) * 15);
  const i = r.getMonth() + 1,
    a = r.getDate(),
    l = r.getHours(),
    s = r.getMinutes(),
    u = o.getHours(),
    c = o.getMinutes();
  return `${i < 10 ? "0" + i : i}.${a < 10 ? "0" + a : a} ${
    l < 12 ? "AM" : "PM"
  } ${l % 12 === 0 ? 12 : l % 12 < 10 ? "0" + (l % 12) : l % 12}:${
    s < 10 ? "0" + s : s
  } ~ ${u < 12 ? "AM" : "PM"} ${
    u % 12 === 0 ? 12 : u % 12 < 10 ? "0" + (u % 12) : u % 12
  }:${c < 10 ? "0" + c : c}`;
}
const FN = ({ info: e }) => {
    const { openMentorInfo: t } = Ki(),
      [n, r] = Dt(Ts);
    return Q(YN, {
      onClick: () => {
        t(), r(e);
      },
      url: e.coalition || "gun",
      children: [
        Q(jN, {
          children: [
            C(QN, { src: e.image, coalition: e.coalition }),
            Q(GN, {
              children: [
                C(HN, { children: e.intra }),
                Q("span", { children: ["Level : ", e.level] }),
                Q("span", { children: ["Good : ", e.good] }),
              ],
            }),
          ],
        }),
        C(KN, {
          children: C(WN, {
            children: Array.from(new Set(e.subjects)).map((i, a) =>
              C(VN, { children: i }, a)
            ),
          }),
        }),
      ],
    });
  },
  jN = A.div`
  margin-top: 15px;
  width: 90%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,
  VN = A.div`
  display: inline-block;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  border-radius: 5px;
  padding: 0 5px;
  margin: 5px;
`,
  WN = A.div`
  border: 1px solid var(--white-color);
  width: 95%;
  height: 95%;
  margin-left: 5px;
  border-radius: 10px;
  overflow-y: auto;
  font-size: 1.1rem;
  &::-webkit-scrollbar {
    width: 5px;
  }
`,
  HN = A.div`
  font-size: 1.1rem;
  padding-left: 10px;
  margin-top: 2px;
  font-weight: bold;
`,
  GN = A.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.7);
  color: var(--white-color);
  width: 45%;
  height: 100%;
  border-radius: 10px;
  span {
    margin-left: 10px;
  }
`,
  KN = A.div`
  width: 90%;
  height: 50%;
  background: rgba(0, 0, 0, 0.7);
  margin-bottom: 15px;

  color: var(--white-color);
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  border-radius: 10px;
`,
  QN = A.div`
  width: 45%;
  padding-bottom: 45%;
  border-radius: 100%;
  background-image: url(${({ src: e }) => e || "/assets/defaultImage.png"});
  background-size: 100% 120%;
  background-position-x: 30%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    width: 30px;
    height: 30px;
    display: block;
    position: absolute;
    background-image: ${({ coalition: e }) => `url(/assets/${e}_icon.png)`};
    background-size: 100% 100%;
    right: 0;
    bottom: 0;
    border-radius: 100%;
    background-position: 45% 45%;
  }
`,
  YN = A.div`
  background: lightgray;
  background-size: 100% 100%;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
function Oh(e, t) {
  const n = e.reduce(
    (r, o) => (
      o.mentor.login !== t &&
        (r[o.mentor.login] ||
          ((r[o.mentor.login] = {}),
          (r[o.mentor.login].intra = o.mentor.login),
          (r[o.mentor.login].subjects = []),
          (r[o.mentor.login].image = o.mentor.image),
          (r[o.mentor.login].level = o.mentor.level),
          (r[o.mentor.login].good = o.mentor.total_feedback),
          (r[o.mentor.login].coalition = o.mentor.coa)),
        r[o.mentor.login].subjects.push(o.subject)),
      r
    ),
    {}
  );
  return Object.keys(n).map((r) => ({ intra: r, ...n[r] }));
}
const ZN = ({}) => {
    const [e, t] = Dt(Ti),
      { token: n, login: r } = je(_r);
    return (
      U.useEffect(() => {
        async function o() {
          const i = await NA(n || localStorage.getItem("token"));
          console.log(i.slots), console.log(Oh(i.slots, r)), t(i.slots);
        }
        o();
      }, []),
      C(XN, {
        children:
          e &&
          Oh(e, r).map((o, i) => C(qN, { children: C(FN, { info: o }, i) })),
      })
    );
  },
  qN = A.div`
  width: 100%;
  height: 355px;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  XN = A.div`
  width: 100%;
  height: 710px;
  background: var(--lightgray-color);
  margin-top: 30px;
  border-top-left-radius: 20px;
  box-shadow: 0px 0px 200px 5px rgba(0, 0, 0, 0.33);
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  justify-items: stretch;
`,
  JN = () =>
    Q(tL, {
      children: [
        C("div", {
          children: C(wa, { url: "/assets/mtom.png", width: 50, height: 50 }),
        }),
        Q(eL, {
          children: [
            C(wa, { url: "/assets/info.png", height: 25, width: 25 }),
            C(wa, { url: "/assets/record.png", height: 25, width: 25 }),
            C(wa, { url: "/assets/logout.png", height: 25, width: 25 }),
          ],
        }),
      ],
    }),
  eL = A.div`
  display: flex;
  & > div {
    margin-left: 10px;
  }
`,
  wa = A.div`
  cursor: pointer;
  width: ${({ width: e }) => `${e}px`};
  height: ${({ height: e }) => `${e}px`};
  background-image: ${({ url: e }) => `url(${e})`};
  background-size: 100% 100%;
`,
  tL = A.div`
  width: 360px;
  height: 50px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,
  nL = (e) => `https://profile.intra.42.fr/users/${e}`,
  rL = () => {
    const { token: e } = je(_r),
      [t, n] = U.useState([
        { login: "-", coa: "-", total_time: "-", total_feedback: "-" },
        { login: "-", coa: "-", total_time: "-", total_feedback: "-" },
        { login: "-", coa: "-", total_time: "-", total_feedback: "-" },
      ]);
    return (
      U.useEffect(() => {
        async function r() {
          const o = await AA(e || localStorage.getItem("token"));
          console.log("in Rank", o), n([...o.rank]);
        }
        r();
      }, []),
      Q(aL, {
        children: [
          C(Uv, { children: "Rank" }),
          Q(iL, {
            children: [
              Q("colgroup", {
                children: [
                  C("col", { width: "30px" }),
                  C("col", { width: "100px" }),
                  C("col", { width: "70px" }),
                  C("col", { width: "70px" }),
                ],
              }),
              C("thead", {
                children: Q("tr", {
                  children: [
                    C("th", { children: "No." }),
                    C("th", { children: "Intra" }),
                    C("th", { children: "Time" }),
                    C("th", { children: "Good" }),
                  ],
                }),
              }),
              C("tbody", {
                children: t.map((r, o) =>
                  Q("tr", {
                    children: [
                      C("td", { children: r.login ? o + 1 : "-" }),
                      C("td", {
                        children: Q("a", {
                          target: "_blank",
                          href: nL(r.login),
                          children: [C(oL, { src: r.coa }), r.login],
                        }),
                      }),
                      Q("td", { children: [r.total_time, "H"] }),
                      C("td", { children: r.total_feedback }),
                    ],
                  })
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  oL = A.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: ${({ src: e }) => `url(/assets/${e}_icon.png)`};
  background-size: 100% 100%;
  margin-right: 5px;
`,
  iL = A.table`
  width: 100%;
  margin-top: 20px;
  border-spacing: 0;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  overflow: hidden;
  padding-bottom: 5px;
  & > thead {
    background: var(--main-color);
    color: white;
    text-align: center;
    height: 39px;
  }
  & > tbody {
    td {
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    td a {
      display: b;
    }
  }
`,
  aL = A.div`
  width: 360px;
  background: white;
  margin-top: 35px;
  margin-bottom: 5px;
`,
  lL = () => {
    const e = We(gf),
      t = We(mf);
    return Q(cL, {
      children: [
        Q(sL, {
          children: [
            C(JN, {}),
            C(zN, {}),
            C(rL, {}),
            C(kN, {
              name: "멘토링 하러가기",
              onClick: () => {
                e(!0), t(!0);
              },
            }),
          ],
        }),
        Q(uL, { children: [C(bN, {}), C(ZN, {})] }),
      ],
    });
  },
  sL = A.div`
  width: 400px;
  height: 100%;
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`,
  uL = A.div`
  width: 800px;
  height: 100%;
`,
  cL = A.div`
  width: 1200px;
  height: 800px;
  box-shadow: 0px 10px 40px 5px rgba(0, 0, 0, 0.33);
  border-radius: 20px;
  background: var(--white-color);
  overflow: hidden;
  display: flex;
`;
function dL({ name: e, final_mark: t }) {
  return e.includes("CPP") ? t > 80 : t > 100;
}
const fL = ({ data: e }) => {
    const t = je(_r),
      n = JSON.parse(t.projects) || [],
      r = U.useRef(null),
      [o, i] = Dt(Cs),
      a = We(bs),
      l = (c) => {
        i(c.currentTarget.textContent),
          console.log(c.currentTarget.textContent);
      },
      s = (c) => {
        const d = c.currentTarget.parentElement.children[0].textContent;
        console.log(d), i(d + " Bonus");
      },
      u = (c) => {
        a(c.target.value);
      };
    return Q(jc, {
      children: [
        C(SL, { children: "Mentoring" }),
        C(Dh, { children: "Choose Subject" }),
        C(yL, {
          children: n.map((c) =>
            Q(
              hL,
              {
                className:
                  o === c.name.replace("Module ", "") + " Bonus"
                    ? "parentActive"
                    : "parentNotActive",
                children: [
                  C(mL, {
                    className: `${
                      c.name.replace("Module ", "") === o
                        ? "active"
                        : "notActive"
                    }`,
                    onClick: l,
                    children: c.name.replaceAll(" Module", ""),
                  }),
                  dL(c) &&
                    C(gL, {
                      className: "notActive",
                      onClick: s,
                      children: "Bonus",
                    }),
                ],
              },
              c.name
            )
          ),
        }),
        C(Dh, { children: "Subject Detail" }),
        o.length > 0
          ? C(vL, { ref: r, maxLength: 1024, onChange: u })
          : C(pL, { children: "Choose Subject..." }),
      ],
    });
  },
  pL = A.div`
  margin-top: 15px;
  width: 350px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 1.5rem;
`,
  hL = A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--main-color);
  font-size: 1.3rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 5px 15px 5px 15px;
  color: var(--gray-color);
  &.parentActive {
    background: var(--main-color);
    color: var(--white-color);
  }
  &.parentNotActive {
    color: var(--main-color);
  }
  &.parentNotActive > .notActive:hover {
    color: var(--main-color);
  }
`,
  mL = A.div`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  transition: 0.5s;

  &.active {
    background: var(--main-color);
    color: var(--white-color);
  }
`,
  gL = A.div`
  cursor: pointer;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 0.9rem;
  /*&.notActive:hover {
    color: var(--main-color);
  }*/
  &.active {
    background: var(--main-color);
    color: var(--white-color);
  }
`,
  vL = A.textarea`
  margin-top: 15px;
  width: 350px;
  height: 220px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  outline: none;
  padding: 10px;
  resize: none;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`,
  yL = A.div`
  margin-top: 15px;
  width: 350px;
  height: 220px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`,
  Dh = A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin-top: 35px;
  padding-right: 25px;
`,
  SL = A.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin-top: 10px;
`;
function wL(e) {
  const t = so();
  return (
    t.setMinutes(e * 15),
    `${t.getFullYear() % 100}.${
      t.getMonth() < 9 ? "0" + (t.getMonth() + 1) : t.getMonth()
    }.${t.getDate() < 10 ? "0" + t.getDate() : t.getDate()}`
  );
}
const _L = ({ data: e }) => {
    const t = je(Ti),
      n = je(_r),
      r = t.filter((d) => d.mentor.login === n.login),
      o = We(vf),
      i = We(yf),
      a = je(Cs),
      l = je(bs),
      s = We(Ti),
      u = () => {
        if (a.length === 0) {
          alert("subject 골라주세요");
          return;
        }
        if (l.length === 0) {
          alert("description 작성해주세요");
          return;
        }
        i(!0), o(!0);
      },
      c = (d) => {
        async function g() {
          const { slots: w } = await PA(n.token, d);
          s(w);
        }
        g();
      };
    return Q(jc, {
      children: [
        C(PL, { children: "Schedule" }),
        Q(LL, {
          children: [
            Q(kL, {
              children: [
                C("span", { children: "Choose time" }),
                C(NL, { onClick: u }),
              ],
            }),
            Q(xL, { children: [r.length, "건"] }),
          ],
        }),
        Q(AL, {
          children: [
            Q(CL, {
              children: [
                C(Jt, { val: 10, children: "Date" }),
                C(Jt, { val: 30, children: "Subject" }),
                C(Jt, { val: 10, children: "Cur" }),
                C(Jt, { val: 30, children: "Time" }),
                C(Jt, { val: 5 }),
              ],
            }),
            C(TL, {
              children: r.map((d, g) =>
                Q(
                  bL,
                  {
                    children: [
                      C(Jt, { val: 10, children: wL(d.start) }),
                      C(Jt, { val: 30, children: d.subject }),
                      Q(Jt, {
                        val: 10,
                        children: ["[", d.curr, " / ", d.max, "]"],
                      }),
                      Q(Jt, {
                        val: 30,
                        children: [
                          El(d.start, d.end).split(" ")[0],
                          C("br", {}),
                          El(d.start, d.end).split(" ").slice(1).join(" "),
                        ],
                      }),
                      C(Jt, {
                        val: 5,
                        children: C(RL, { onClick: () => c(d.id) }),
                      }),
                    ],
                  },
                  g
                )
              ),
            }),
          ],
        }),
        C(EL, { children: "Close" }),
      ],
    });
  },
  xL = A.div`
  margin-right: 5px;
`,
  kL = A.div`
  display: flex;
  align-items: center;
`,
  EL = A.div`
  width: 350px;
  height: 70px;
  background: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 45px;
  margin-left: 100px;
  font-size: 2rem;
  font-weight: bold;
  color: var(--white-color);
  cursor: pointer;
`,
  RL = A.div`
  width: 25px;
  height: 25px;
  background-image: url("/assets/remove.png");
  background-size: 100% 100%;
  cursor: pointer;
`,
  Jt = A.div`
  width: ${({ val: e }) => `${e}%`};
  display: flex;
  justify-content: center;
  align-items: center;
`,
  CL = A.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: var(--main-color);
  color: white;
  height: 35px;
`,
  bL = A.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`,
  TL = A.div`
  width: 100%;
  height: 360px;
  overflow: auto;
  font-size: 0.9rem;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`,
  AL = A.div`
  margin-right: 25px;
  border-radius: 10px;
  margin-top: 15px;
  height: 400px;
  width: 550px;
  overflow: hidden;
  border: 1px solid var(--main-color);
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`,
  NL = A.div`
  width: 25px;
  height: 25px;
  background-image: url("/assets/addButton.png");
  background-size: 100% 100%;
  margin-left: 15px;
  cursor: pointer;
`,
  LL = A.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin-top: 35px;
  padding-right: 25px;
`,
  PL = A.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin-top: 10px;
`,
  Iy = [
    {
      name: "Inception",
      final_mark: 100,
      marked_at: "2023-02-18T08:25:04.276Z",
    },
    { name: "ft_irc", final_mark: 98, marked_at: "2023-02-09T06:10:33.924Z" },
    {
      name: "CPP Module 01",
      final_mark: 97,
      marked_at: "2023-01-19T08:55:00.092Z",
    },
    {
      name: "CPP Module 08",
      final_mark: 100,
      marked_at: "2023-01-26T05:23:31.510Z",
    },
    {
      name: "CPP Module 07",
      final_mark: 100,
      marked_at: "2023-01-26T01:50:35.028Z",
    },
    {
      name: "CPP Module 06",
      final_mark: 100,
      marked_at: "2023-01-25T12:17:11.621Z",
    },
    {
      name: "CPP Module 05",
      final_mark: 100,
      marked_at: "2023-01-25T08:47:52.772Z",
    },
    {
      name: "CPP Module 04",
      final_mark: 100,
      marked_at: "2023-01-25T05:30:07.817Z",
    },
    {
      name: "CPP Module 03",
      final_mark: 100,
      marked_at: "2023-01-24T10:54:25.706Z",
    },
    {
      name: "CPP Module 02",
      final_mark: 100,
      marked_at: "2023-01-24T06:58:55.787Z",
    },
    { name: "cub3d", final_mark: 105, marked_at: "2023-01-18T06:03:48.122Z" },
    {
      name: "CPP Module 00",
      final_mark: 100,
      marked_at: "2023-01-18T02:29:10.062Z",
    },
    {
      name: "NetPractice",
      final_mark: 100,
      marked_at: "2023-01-16T08:22:38.069Z",
    },
    {
      name: "minishell",
      final_mark: 101,
      marked_at: "2023-01-15T06:32:25.654Z",
    },
    {
      name: "Philosophers",
      final_mark: 100,
      marked_at: "2023-01-13T04:36:44.052Z",
    },
    {
      name: "push_swap",
      final_mark: 125,
      marked_at: "2022-12-29T05:14:32.907Z",
    },
    { name: "pipex", final_mark: 125, marked_at: "2022-12-14T06:25:36.696Z" },
    { name: "so_long", final_mark: 125, marked_at: "2022-12-07T03:14:34.260Z" },
    {
      name: "Born2beroot",
      final_mark: 125,
      marked_at: "2022-12-01T14:33:01.679Z",
    },
    {
      name: "get_next_line",
      final_mark: 125,
      marked_at: "2022-11-28T02:29:06.451Z",
    },
    {
      name: "ft_printf",
      final_mark: 100,
      marked_at: "2022-11-22T01:54:40.422Z",
    },
    { name: "Libft", final_mark: 125, marked_at: "2022-11-18T05:21:53.003Z" },
  ],
  $L = (e) => {
    const t = new Date(e);
    return `${t.getFullYear() % 100}.${
      t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1
    }.${t.getDate() < 10 ? "0" + t.getDate() : t.getDate()}`;
  },
  ML = Iy.map((e) => ({
    date: $L(e.marked_at),
    subject: e.name,
    max: Math.floor(Math.random() * 4 + 1),
    time: "14:00~16:00",
  })),
  IL = () =>
    Q(DL, {
      children: [
        C(zh, { children: C(fL, { data: Iy }) }),
        C(zh, { children: C(_L, { data: ML }) }),
        C(OL, {}),
      ],
    }),
  OL = A.div`
  position: absolute;
  border-right: 1px solid var(--main-color);
  width: 1px;
  height: 81%;
  left: 40%;
  top: 15%;
`,
  zh = A.div`
  height: 100%;
  padding-left: 25px;
  &:first-of-type {
    width: 40%;
  }
  &:last-of-type {
    width: 60%;
  }
`,
  DL = A.div`
  width: 1000px;
  height: 700px;
  background: var(--white-color);
  border-radius: 20px;
  position: fixed;
  left: calc(50% - 500px);
  top: calc(50% - 350px);
  z-index: 3;
  overflow: hidden;
  display: flex;
`,
  Oy = () => {
    const [e, t] = Dt(Sf),
      n = (r) => {
        if (Number(r.currentTarget.textContent) === e) return;
        r.currentTarget.parentElement.childNodes.forEach((i) => {
          i.classList.remove("numberActive");
        }),
          r.currentTarget.classList.add("numberActive"),
          t(Number(r.currentTarget.textContent));
      };
    return C(jc, {
      children: Q(zL, {
        children: [
          C(_a, { onClick: n, className: "numberActive", children: "1" }),
          C(_a, { onClick: n, children: "2" }),
          C(_a, { onClick: n, children: "3" }),
          C(_a, { onClick: n, children: "4" }),
        ],
      }),
    });
  },
  _a = A.div`
  font-weight: normal;
  color: var(--gray-color);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-right: 1px solid var(--main-color);
  transition: 0.3s;
  &:last-of-type {
    border-right: none;
  }
  &.numberActive {
    background: var(--main-color);
    color: white;
  }
  &:hover {
    background: var(--main-color);
    color: white;
  }
`,
  zL = A.div`
  width: 160px;
  height: 40px;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--main-color);
  margin: 0 10px;
  cursor: pointer;
  overflow: hidden;
`,
  UL = (e) => 96 * (e % 7) + Math.floor(e / 7),
  BL = () => {
    const e = U.useRef(null),
      t = so(),
      [n, r] = Dt(_y),
      [o, i] = Dt(xy),
      [a, l] = Dt(Cs),
      [s, u] = Dt(bs),
      [c, d] = Dt(Sf),
      { token: g, login: w } = je(_r),
      [p, m] = Dt(Ti),
      { closeScheduleBack: b } = Ki(),
      h = p.filter((_) => _.mentor.login === w);
    console.log("in schedule", h);
    const f = () => {
        if (n === -1 || o === -1) {
          alert("select time");
          return;
        }
        async function _() {
          const T = await LA(
            n,
            o,
            a,
            w,
            c,
            s,
            g || localStorage.getItem("token")
          );
          console.log(n, o, a, w, c, s, g),
            l(""),
            u(""),
            d(1),
            r(-1),
            i(-1),
            m(T.slots);
        }
        _(), b();
      },
      v = (_) => {
        if (
          _.currentTarget.classList.contains("disabled") ||
          _.currentTarget.classList.contains("onReserved")
        )
          return;
        if (n === -1) {
          _.currentTarget.classList.add("blockActive"),
            r(Number(_.currentTarget.dataset.idx));
          return;
        }
        if (Number(_.currentTarget.dataset.idx) === n) {
          _.currentTarget.classList.remove("blockActive"),
            r(-1),
            _.currentTarget.parentElement.childNodes.forEach((H) => {
              H.classList.remove("blockActive");
            });
          return;
        }
        const T = Math.min(n, Number(_.currentTarget.dataset.idx)),
          L = Math.max(n, Number(_.currentTarget.dataset.idx)),
          N = _.currentTarget.parentElement;
        let O = 0;
        if (
          (N.childNodes.forEach((Y) => {
            const H = Number(Y.dataset.idx);
            H >= T && H <= L && Y.classList.contains("onReserved") && (O = 1);
          }),
          O)
        ) {
          alert("중간에 뭐 있음");
          return;
        }
        N.childNodes.forEach((Y) => {
          const H = Number(Y.dataset.idx);
          H >= T && H <= L
            ? Y.classList.add("blockActive")
            : Y.classList.remove("blockActive");
        }),
          r(T),
          i(L);
      };
    return (
      U.useEffect(() => {
        const _ = e.current,
          T = h.map((L) => [L.start, L.end]);
        if (
          (_.childNodes.forEach((L) => {
            const N = Number(L.dataset.idx);
            T.forEach(([O, Y]) => {
              N >= O && N <= Y && L.classList.add("onReserved");
            });
          }),
          n !== -1 && o !== -1)
        ) {
          const L = h.map((N) => [N.start, N.end]);
          _.childNodes.forEach((N) => {
            const O = Number(N.dataset.idx);
            L.forEach(([Y, H]) => {
              O >= Y && O <= H && N.classList.add("onReserved");
            }),
              O >= n && O <= o
                ? N.classList.add("blockActive")
                : N.classList.remove("blockActive");
          });
        }
      }, []),
      Q(tP, {
        children: [
          Q(eP, {
            children: [
              C(JL, { children: My(so()) }),
              Q(XL, {
                children: [
                  C(qL, {}),
                  C(Oy, {}),
                  C(ZL, { onClick: f, children: "Confirm" }),
                ],
              }),
            ],
          }),
          Q(YL, {
            children: [
              C(QL, {
                children: Ny().map((_, T) => C(KL, { children: _ }, T)),
              }),
              Q(WL, {
                children: [
                  C(GL, {
                    children: C(VL, {
                      children: new Array(96)
                        .fill(0)
                        .map((_, T) => C(HL, { children: Ly(t, T * 15) })),
                    }),
                  }),
                  C(jL, {
                    ref: e,
                    children: new Array(96 * 7).fill(0).map((_, T) => {
                      const L = UL(T);
                      return C(FL, {
                        onClick: v,
                        className: `${
                          Math.floor(T / 7) % 2 === 0 ? "odd" : "even"
                        } ${Py($y(t, L)) ? "" : "disabled"}`,
                        "data-idx": L,
                      });
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  FL = A.div`
  height: 40px;
  border-right: 1px solid var(--gray-color);
  &.odd {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &.even {
    border-bottom: 1px solid var(--gray-color);
  }
  &.disabled {
    background: var(--lightgray-color) !important;
    cursor: not-allowed;
  }
  &.onReserved {
    background: pink;
    cursor: not-allowed;
  }
  &.active {
    background: var(--sub-color);
  }
  &.blockActive {
    background: var(--sub-color);
  }
  cursor: grab;
`,
  jL = A.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: 87.5%;
`,
  VL = A.div`
  width: 100%;
`,
  WL = A.div`
  width: 100%;
  height: 546px;
  display: flex;
  overflow-y: scroll;
`,
  HL = A.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--gray-color);
  color: var(--main-color);
  cursor: grab;
  &.disabled {
    background: var(--lightgray-color);
    cursor: not-allowed;
  }

  &:nth-of-type(2n) {
    border-bottom: 1px solid var(--gray-color);
  }
  &:nth-of-type(2n + 1) {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &:last-of-type {
    border-bottom: none;
  }
`;
A.div`
  display: flex;
  width: 100%;
  height: 40px;
  &:nth-of-type(2n + 1) {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &:nth-of-type(2n) {
    border-bottom: 1px solid var(--gray-color);
  }
  &:last-of-type {
    border-bottom: none;
  }
`;
const GL = A.div`
  display: flex;
  height: 545px;
  width: 12.5%;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 5px;
  }
`,
  KL = A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 1.2rem;
  font-weight: bold;
  width: 12.5%;
  &:last-of-type {
    width: 2%;
  }
`,
  QL = A.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color);
`,
  YL = A.div`
  width: 900px;
  height: 600px;
  border: 1px solid var(--main-color);
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
`,
  ZL = A.div`
  width: 110px;
  height: 45px;
  background: var(--main-color);
  border-radius: 10px;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
`,
  qL = A.div`
  width: 30px;
  height: 30px;
  background: url("/assets/member.png");
  background-size: 100% 100%;
`,
  XL = A.div`
  display: flex;
  align-items: center;
`,
  JL = A.div`
  color: var(--main-color);
  font-size: 2.5rem;
`,
  eP = A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  align-items: center;
  margin: 50px auto;
`,
  tP = A.div`
  width: 1000px;
  height: 800px;
  position: absolute;
  border-radius: 20px;
  left: calc(50% - 500px);
  top: calc(50% - 400px);
  background: var(--white-color);
  z-index: 4;
`,
  nP = ({ info: e }) =>
    Q(uP, {
      url: e.coalition || "gun",
      children: [
        C(sP, { src: e.image, coalition: e.coalition }),
        Q(lP, {
          children: [
            Q(aP, { children: [e.intra, C(rP, {})] }),
            Q(Uh, {
              children: [
                Q("span", { children: ["Level : ", e.level] }),
                Q("span", { children: ["Good : ", e.good] }),
              ],
            }),
            C(Uh, {}),
            C(iP, { children: e.subjects.map((t) => C(oP, { children: t })) }),
          ],
        }),
      ],
    }),
  rP = A.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url("/assets/gun_icon.png");
  border-radius: 100%;
  background-size: 100% 100%;
  margin-left: 10px;
`,
  oP = A.div`
  display: inline-block;
  border: 1px solid var(--white-color);
  color: var(--white-color);
  border-radius: 5px;
  padding: 0 5px;
  margin: 5px;
`,
  iP = A.div`
  border: 1px solid var(--white-color);
  width: 95%;
  font-size: 1.5rem;
  height: 170px;
  margin-left: 5px;
  border-radius: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--white-color);
    border-radius: 10px;
  }
`,
  Uh = A.div`
  padding: 5px 15px 10px 15px;
  display: flex;
  justify-content: space-between;
`,
  aP = A.div`
  font-size: 1.5rem;
  margin-top: 2px;
  font-weight: bold;
  margin-bottom: 5px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`,
  lP = A.div`
  background: rgba(0, 0, 0, 0.7);
  width: 90%;
  height: 300px;
  margin-bottom: 25px;
  border-radius: 10px;
  color: white;
  padding: 10px 10px;
`,
  sP = A.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin-top: 50px;
  background-image: url(${({ src: e }) => e || "/assets/defaultImage.png"});
  background-size: 100% 120%;
  background-position-x: 30%;
  background-position-y: 50%;
  position: relative;
`,
  uP = A.div`
  background-size: 100% 100%;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
function Bh(e, t) {
  const n = e
    .filter((r) => r.mentor.login === t)
    .reduce((r, o) => {
      r[o.subject] || ((r[o.subject] = {}), (r[o.subject].info = []));
      const i = {
        cur: o.curr,
        max: o.max,
        description: o.description,
        start: o.start,
        end: o.end,
      };
      return r[o.subject].info.push(i), r;
    }, {});
  return Object.keys(n).map((r) => ({ subject: r, info: n[r].info }));
}
const cP = ({ info: e }) => {
    const t = je(Ti),
      n = Bh(t, e.intra),
      [r, o] = U.useState(0),
      [i, a] = Dt(Cy),
      { openMenteeSchedule: l } = Ki(),
      s = We(Ry),
      u = je(Ts);
    console.log(u);
    const c = (w) => {
        o(w);
      },
      d = () => {
        console.log("submit", n[r].info[i]);
      },
      g = () => {
        console.log(n[r]), l(), s(n[r]);
      };
    return Q(LP, {
      children: [
        C(Fh, { children: C(nP, { info: e }) }),
        Q(Fh, {
          children: [
            C(TP, {
              children: Bh(t, e.intra).map((w, p) =>
                Q(
                  bP,
                  {
                    className: p === r ? "active" : "",
                    onClick: () => c(p),
                    children: [
                      C(CP, { children: w.subject }),
                      C(RP, {
                        children: C(EP, {
                          className: "subjectIcon",
                          url: "/assets/calendar.png",
                          onClick: g,
                        }),
                      }),
                    ],
                  },
                  p
                )
              ),
            }),
            Q(kP, {
              children: [
                C(_P, { children: C(xP, { children: "Description" }) }),
                Q(SP, {
                  children: [
                    C(vP, {
                      children: El(n[r].info[i].start, n[r].info[i].end),
                    }),
                    C(yP, {
                      children: n[r].info.map((w, p) =>
                        C(
                          gP,
                          {
                            onClick: () => a(p),
                            className: p === i ? "indexActive" : "",
                            children: p + 1,
                          },
                          p
                        )
                      ),
                    }),
                  ],
                }),
                C(wP, { children: n[r].info[i].description }),
              ],
            }),
            Q(AP, {
              children: [
                Q(fP, {
                  children: [
                    C(mP, { children: n[r].subject }),
                    Q(hP, {
                      children: [
                        C(pP, {}),
                        "[",
                        n[r].info[i].cur,
                        " /",
                        " ",
                        n[r].info[i].max,
                        "]",
                      ],
                    }),
                  ],
                }),
                C(dP, { children: El(n[r].info[i].start, n[r].info[i].end) }),
              ],
            }),
            C(NP, { onClick: d, children: "Select" }),
          ],
        }),
      ],
    });
  },
  dP = A.div`
  font-size: 1.5rem;
  color: var(--main-color);
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 50px;
`,
  fP = A.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`,
  pP = A.div`
  width: 25px;
  height: 25px;
  background-image: url("/assets/member.png");
  background-size: 100% 100%;
`,
  hP = A.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: var(--main-color);
  font-weight: bold;
  & > div:first-of-type {
    margin-right: 10px;
  }
`,
  mP = A.div`
  color: var(--main-color);
  font-size: 2rem;
  font-weight: bold;
  max-width: 50%;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`,
  gP = A.div`
  width: 35px;
  height: 27px;
  border-left: 1px solid var(--main-color);
  border-right: 1px solid var(--main-color);
  border-top: 1px solid var(--main-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main-color);
  margin-left: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  &.indexActive {
    background: var(--main-color);
    color: var(--white-color);
  }
`,
  vP = A.div`
  font-weight: 1.2rem;
  color: var(--main-color);
`,
  yP = A.div`
  display: flex;
`,
  SP = A.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin-top: 10px;
`,
  wP = A.div`
  height: 70%;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  padding: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`,
  _P = A.div``,
  xP = A.div`
  color: var(--main-color);
  font-size: 1.5rem;
  font-weight: bold;
`,
  kP = A.div`
  width: 80%;
  height: 30%;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
`,
  EP = A.div`
  width: 25px;
  height: 25px;
  background-image: url(${({ url: e }) => e});
  background-size: 100% 100%;
  margin-left: 15px;
  cursor: pointer;
  position: relative;
`,
  RP = A.div`
  display: flex;
  align-items: center;
  height: 100%;
`,
  CP = A.div`
  font-size: 1.25rem;
  font-weight: bold;
  border-radius: 10px;
  padding: 8px;
  max-width: 70%;
  word-break: break-all;
  transition: 0.3s;
`,
  bP = A.div`
  width: 90%;
  height: 45px;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  color: var(--main-color);
  padding-right: 10px;
  cursor: pointer;
  & > .subjectIcon {
    background-image: url("/assets/calendar.png");
  }
  &.active {
    background: var(--main-color);
    color: var(--white-color);
    & .subjectIcon {
      background-image: url("/assets/selectedCalendar.png");
    }
  }
`,
  TP = A.div`
  width: 80%;
  height: 20%;
  border: 1px solid var(--main-color);
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 40px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--sub-color);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 2px;
    background: var(--main-color);
    border-radius: 10px;
  }
`,
  AP = A.div`
  width: 80%;
  height: 15%;
  margin: 0 auto;
  margin-bottom: 50px;
`,
  NP = A.div`
  border-radius: 10px;
  background: var(--main-color);
  color: var(--white-color);
  font-size: 2rem;
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 0 auto;
  cursor: pointer;
`,
  Fh = A.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  &:last-of-type {
    display: block;
  }
`,
  LP = A.div`
  width: 800px;
  height: 800px;
  background: var(--white-color);
  position: absolute;
  z-index: 3;
  border-radius: 10px;
  left: calc(50% - 400px);
  top: calc(50% - 400px);
  display: flex;
`,
  PP = (e) => 96 * (e % 7) + Math.floor(e / 7);
function $P(e, t, n) {
  for (let r = 0; r < e.length; r++)
    if (e[r].start <= t && t <= e[r].end) return r;
  return -1;
}
const MP = () => {
    const e = so(),
      t = je(Ts),
      n = je(Ry),
      r = We(Cy),
      { closeMenteeSchedule: o } = Ki();
    console.log(n), console.log("mentorInfo", t);
    const i = (a) => {
      const l = Number(a.currentTarget.dataset.sectionIndex);
      l !== -1 && (r(l), o());
    };
    return Q(YP, {
      children: [
        Q(QP, {
          children: [
            C(KP, { children: My(so()) }),
            C(IP, { children: n.subject }),
            Q(GP, { children: [C(HP, {}), C(Oy, {})] }),
          ],
        }),
        Q(WP, {
          children: [
            C(VP, { children: Ny().map((a, l) => C(jP, { children: a }, l)) }),
            Q(UP, {
              children: [
                C(FP, {
                  children: C(zP, {
                    children: new Array(96)
                      .fill(0)
                      .map((a, l) => C(BP, { children: Ly(e, l * 15) })),
                  }),
                }),
                C(DP, {
                  children: new Array(96 * 7).fill(0).map((a, l) => {
                    const s = PP(l),
                      u = $P(n.info, s);
                    return (
                      console.log(u),
                      C(OP, {
                        className: `${
                          Math.floor(l / 7) % 2 === 0 ? "odd" : "even"
                        } ${Py($y(e, s)) ? "" : "disabled"} ${
                          u !== -1 ? "onReserved" : ""
                        }`,
                        "data-idx": s,
                        "data-section-index": u,
                        onClick: i,
                      })
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  IP = A.div`
  color: var(--main-color);
  font-size: 1.5rem;
  font-weight: bold;
`,
  OP = A.div`
  height: 40px;
  border-right: 1px solid var(--gray-color);
  &.odd {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &.even {
    border-bottom: 1px solid var(--gray-color);
  }
  &.disabled {
    background: var(--lightgray-color) !important;
    cursor: not-allowed;
  }
  &.onReserved {
    background: var(--sub-color);
    cursor: grab;
  }
  &.active {
    background: var(--sub-color);
  }
  &.blockActive {
    background: var(--sub-color);
  }
`,
  DP = A.div`
  display: grid;
  grid-template-columns: repeat(7, auto);
  width: 87.5%;
`,
  zP = A.div`
  width: 100%;
`,
  UP = A.div`
  width: 100%;
  height: 546px;
  display: flex;
  overflow-y: scroll;
`,
  BP = A.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--gray-color);
  color: var(--main-color);
  cursor: grab;
  &.disabled {
    background: var(--lightgray-color);
    cursor: not-allowed;
  }

  &:nth-of-type(2n) {
    border-bottom: 1px solid var(--gray-color);
  }
  &:nth-of-type(2n + 1) {
    border-bottom: 1px solid var(--lightgray-color);
  }
  &:last-of-type {
    border-bottom: none;
  }
`,
  FP = A.div`
  display: flex;
  height: 545px;
  width: 12.5%;
  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 5px;
  }
`,
  jP = A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-color);
  font-size: 1.2rem;
  font-weight: bold;
  width: 12.5%;
  &:last-of-type {
    width: 2%;
  }
`,
  VP = A.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color);
`,
  WP = A.div`
  width: 900px;
  height: 600px;
  border: 1px solid var(--main-color);
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
`;
A.div`
  width: 110px;
  height: 45px;
  background: var(--main-color);
  border-radius: 10px;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 25px;
  cursor: pointer;
`;
const HP = A.div`
  width: 30px;
  height: 30px;
  background: url("/assets/member.png");
  background-size: 100% 100%;
`,
  GP = A.div`
  display: flex;
  align-items: center;
`,
  KP = A.div`
  color: var(--main-color);
  font-size: 2.5rem;
`,
  QP = A.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 900px;
  align-items: center;
  margin: 50px auto;
`,
  YP = A.div`
  width: 1000px;
  height: 800px;
  position: absolute;
  border-radius: 20px;
  left: calc(50% - 500px);
  top: calc(50% - 400px);
  background: var(--white-color);
  z-index: 4;
`,
  ZP = () => {
    const e = je(gf),
      t = je(mf),
      n = je(vf),
      r = je(yf),
      o = je(ky),
      i = je(Ey),
      a = je(Ts),
      l = je(wy),
      s = je(Sy),
      u = We(Cs),
      c = We(bs),
      d = We(Sf),
      g = We(_y),
      w = We(xy),
      {
        closeSetMentoring: p,
        closeScheduleBack: m,
        closeMentorInfo: b,
        closeMenteeSchedule: h,
      } = Ki();
    return Q(zv, {
      children: [
        C(lL, {}),
        C(Dv, {}),
        C(Bv, { width: 190, height: 130 }),
        t && C(IL, {}),
        e && C(xa, { zIndex: 2, onClick: p }),
        s && C(xa, { zIndex: 3, onClick: h }),
        n && C(BL, {}),
        r &&
          C(xa, {
            zIndex: 3,
            onClick: (v) => {
              v.stopPropagation(), m(), u(""), c(""), d(1), g(-1), w(-1);
            },
          }),
        l && C(MP, {}),
        o && C(cP, { info: a }),
        i && C(xa, { zIndex: 2, onClick: b }),
      ],
    });
  },
  xa = A.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  cursor: pointer;
  z-index: ${({ zIndex: e }) => e};
`;
yu.createRoot(document.getElementById("root")).render(
  C(Se.StrictMode, {
    children: C(r2, {
      children: C(f_, {
        children: Q(d_, {
          children: [
            C(hc, { path: "/", element: C(yN, {}) }),
            C(hc, { path: "/main", element: C(ZP, {}) }),
          ],
        }),
      }),
    }),
  })
);
