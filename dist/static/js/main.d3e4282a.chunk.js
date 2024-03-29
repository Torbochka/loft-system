(window["webpackJsonploftschool-nodejs-project"] =
  window["webpackJsonploftschool-nodejs-project"] || []).push([
  [0],
  {
    195: function(e, t, a) {
      e.exports = a(331);
    },
    249: function(e, t) {},
    331: function(e, t, a) {
      "use strict";
      a.r(t);
      var n,
        r,
        c,
        i,
        o = a(0),
        s = a.n(o),
        l = a(11),
        u = a.n(l),
        m = a(17),
        d = a(14),
        p = a(18),
        f = a(19),
        h = a(20),
        b = a(55),
        g = a(8),
        E = a(167),
        O = a.n(E),
        v = a(6),
        j = a(118),
        w = a(397),
        y = a(25),
        N = a(168),
        x = a.n(N),
        S = a(21),
        C = a(396),
        k = Object(C.a)(
          {
            OPEN_NOTIFICATION: function(e) {
              return e;
            },
            CLOSE_NOTIFICATION: function(e) {
              return e;
            }
          },
          { prefix: "notifications" }
        ),
        P = k.openNotification,
        T = k.closeNotification,
        A = function(e) {
          return e.notifications;
        },
        D = Object(w.a)(
          ((n = {}),
          Object(v.a)(n, P, function(e, t) {
            var a = t.payload,
              n = a.text,
              r = a.variant;
            return [].concat(Object(S.a)(e), [
              { text: n, variant: r, id: e.length + 1, isActive: !e.length }
            ]);
          }),
          Object(v.a)(n, T, function(e, t) {
            var a = e.filter(function(e) {
              return e.id !== t.payload;
            });
            return a.length
              ? a.map(function(e, t) {
                  return t === a.length - 1 && (e.isActive = !0), e;
                })
              : a;
          }),
          n),
          []
        ),
        _ = x.a.create({
          baseURL: "https://loft-system-api.herokuapp.com/api/"
        }),
        R = [],
        L = !1,
        I = function(e) {
          var t = e.url,
            a = e.method,
            n = e.data,
            r = e.headers,
            c = void 0 === r ? {} : r,
            i = e.isRefresh,
            o = e.isWithoutToken,
            s = e.getState,
            l =
              void 0 === s
                ? function() {
                    return {};
                  }
                : s,
            u = e.dispatch,
            m = void 0 === u ? function() {} : u;
          return new Promise(function(e, r) {
            var s = H(l()),
              u = s.accessToken,
              d = s.accessTokenExpiredAt,
              p = (s.refreshToken, s.refreshTokenExpiredAt),
              f = function(e) {
                var t = e.url,
                  a = e.method,
                  n = e.headers,
                  r = e.data,
                  c = e.resolve,
                  s = e.reject;
                if (!o) {
                  var u = H(l()),
                    d = u.accessToken,
                    p = u.refreshToken;
                  n.Authorization = i ? p : d;
                }
                return _({ url: t, method: a, headers: n, data: r })
                  .then(function(e) {
                    c(e.data);
                  })
                  .catch(function(e) {
                    if (!e.response)
                      return (
                        m(
                          P({
                            variant: "error",
                            text: "Error!!\n".concat(e.message)
                          })
                        ),
                        s(e.message)
                      );
                    var a = e.response.status || 404,
                      n = e.response.data;
                    switch (
                      (console.group("Error from: " + t),
                      console.info("Status: " + a),
                      console.dir(n),
                      console.groupEnd(),
                      a)
                    ) {
                      case 401:
                      case 403:
                        return m(ee()), s(n);
                      case 500:
                      case 502:
                      case 503:
                        return (
                          m(
                            P({
                              variant: "error",
                              text: "".concat(a, "!\nSomething is wrong))")
                            })
                          ),
                          s({ detail: "Unknown error" })
                        );
                      default:
                        return s(n);
                    }
                  });
              },
              h = d <= Date.now(),
              b = p <= Date.now();
            u && h && !b && !o
              ? (!i &&
                  R.push({
                    url: t,
                    method: a,
                    data: n,
                    headers: c,
                    isRefresh: i,
                    resolve: e,
                    reject: r
                  }),
                i || L
                  ? i &&
                    f({
                      url: t,
                      method: a,
                      data: n,
                      headers: c,
                      resolve: e,
                      reject: r
                    })
                  : ((L = !0),
                    m($())
                      .then(function() {
                        (L = !1),
                          R.forEach(function(e) {
                            return f(e);
                          });
                      })
                      .catch(function() {
                        m(ee()), r({ detail: "Refresh token error" });
                      })))
              : b && !o
              ? (m(ee()), r({ detail: "Refresh token is expired" }))
              : f({
                  url: t,
                  method: a,
                  data: n,
                  headers: c,
                  resolve: e,
                  reject: r
                });
          });
        },
        U = function(e) {
          return e.auth.userProfile;
        },
        F = function(e) {
          return e.auth.permissions;
        },
        H = function(e) {
          return e.auth.tokens;
        },
        W = function(e) {
          return !!e.auth.tokens.accessToken;
        },
        M = function(e) {
          return e.auth.isLoadingUserProfile;
        },
        B =
          (Object(j.a)("".concat("AUTH", "/LOGIN_USER_REQUEST")),
          Object(j.a)("".concat("AUTH", "/REGISTRATION_USER_REQUEST")),
          Object(j.a)("".concat("AUTH", "/SET_PROFILE_DATA"))),
        G = Object(j.a)("".concat("AUTH", "/SET_TOKEN_DATA")),
        z = Object(j.a)("".concat("AUTH", "/LOGOUT_USER")),
        q = Object(j.a)("".concat("AUTH", "/SET_IS_LOADING_USER_PROFILE")),
        V = Object(w.a)(
          Object(v.a)({}, q, function(e, t) {
            return t.payload;
          }),
          !1
        ),
        X = Object(w.a)(
          ((r = {}),
          Object(v.a)(r, B, function(e, t) {
            var a = t.payload,
              n = a.id,
              r = a.image,
              c = a.middleName,
              i = a.surName,
              o = a.username;
            return {
              id: n,
              image: r,
              firstName: a.firstName,
              middleName: c,
              surName: i,
              username: o
            };
          }),
          Object(v.a)(r, z, function() {
            return null;
          }),
          r),
          null
        ),
        J = {
          chat: { C: !1, D: !1, R: !1, U: !1 },
          news: { C: !1, D: !1, R: !1, U: !1 },
          settings: { C: !1, D: !1, R: !1, U: !1 }
        },
        Z = Object(w.a)(
          ((c = {}),
          Object(v.a)(c, B, function(e, t) {
            return t.payload.permission;
          }),
          Object(v.a)(c, z, function() {
            return J;
          }),
          c),
          J
        ),
        Q = Object(w.a)(
          ((i = {}),
          Object(v.a)(i, G, function(e, t) {
            var a = t.payload;
            return {
              accessToken: a.accessToken,
              accessTokenExpiredAt: a.accessTokenExpiredAt,
              refreshToken: a.refreshToken,
              refreshTokenExpiredAt: a.refreshTokenExpiredAt
            };
          }),
          Object(v.a)(i, z, function() {
            return {
              accessToken: null,
              accessTokenExpiredAt: null,
              refreshToken: null,
              refreshTokenExpiredAt: null
            };
          }),
          i),
          {
            accessToken: null,
            accessTokenExpiredAt: null,
            refreshToken: null,
            refreshTokenExpiredAt: null
          }
        ),
        K = Object(y.c)({
          userProfile: X,
          permissions: Z,
          tokens: Q,
          isLoadingUserProfile: V
        }),
        Y = function() {
          return function(e, t) {
            var a = localStorage.getItem("token-data");
            a &&
              (e(G(JSON.parse(a))),
              I({ url: "/profile", method: "GET", dispatch: e, getState: t })
                .then(function(t) {
                  e(B(t));
                })
                .catch(function(e) {}));
          };
        },
        $ = function() {
          return function(e, t) {
            return new Promise(function(a, n) {
              I({
                url: "/refresh-token",
                method: "POST",
                isRefresh: !0,
                dispatch: e,
                getState: t
              })
                .then(function(t) {
                  e(G(t)), a(a);
                })
                .catch(function(e) {
                  return n(e);
                });
            });
          };
        },
        ee = function() {
          return function(e) {
            localStorage.removeItem("token-data"),
              e(z()),
              P({
                text:
                  "\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",
                variant: "info"
              });
          };
        },
        te = function(e) {
          var t = e.firstName,
            a = e.surName,
            n = e.middleName,
            r = e.oldPassword,
            c = e.newPassword,
            i = e.avatar;
          return function(e, o) {
            return new Promise(function(s) {
              var l = new FormData();
              l.append("firstName", t),
                l.append("surName", a),
                l.append("middleName", n),
                l.append("oldPassword", r),
                l.append("newPassword", c),
                l.append("avatar", i),
                e(q(!0)),
                I({
                  url: "/profile",
                  method: "PATCH",
                  data: l,
                  getState: o,
                  dispatch: e
                })
                  .then(function(t) {
                    e(B(t)),
                      e(
                        P({
                          text:
                            "\u041f\u0440\u043e\u0444\u0438\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d!",
                          variant: "success"
                        })
                      ),
                      s(!0);
                  })
                  .catch(function(t) {
                    return e(P({ text: t.message, variant: "error" }));
                  })
                  .finally(function() {
                    return e(q(!1));
                  });
            });
          };
        },
        ae = {
          home: "/",
          registration: "/registration",
          news: "/news",
          chat: "/chat",
          profile: "/profile",
          adminPanel: "/admin-panel"
        },
        ne = Object(g.b)(function(e) {
          return { permissions: F(e), isAuthorized: W(e) };
        })(function(e) {
          var t = e.permissionPath,
            a = e.path,
            n = e.component,
            r = e.permissions;
          return !e.isAuthorized || (t && !O.a.get(r, [t, "R"], !1))
            ? s.a.createElement(b.a, { from: a, to: ae.home })
            : s.a.createElement(b.b, { path: a, component: n });
        }),
        re = a(13),
        ce = a(4),
        ie = a(394),
        oe = a(365),
        se = a(366),
        le = a(367),
        ue = a(27),
        me = a(363),
        de = s.a.forwardRef(function(e, t) {
          return s.a.createElement(ue.b, Object.assign({ innerRef: t }, e));
        }),
        pe = Object(b.g)(function(e) {
          var t = e.path,
            a = e.location,
            n = e.children,
            r = e.isRouterLink,
            c = e.color,
            i = void 0 === c ? "primary" : c;
          return s.a.createElement(
            me.a,
            {
              color: r ? (a.pathname === t ? i : "default") : i,
              component: de,
              to: t
            },
            n
          );
        }),
        fe = a(31),
        he = a.n(fe),
        be = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(p.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "renderAuthorizedNav",
                value: function() {
                  var e = this.props.permissions;
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    he()(e, "news.R", !1) &&
                      s.a.createElement(
                        pe,
                        { path: ae.news, isRouterLink: !0 },
                        "\u041d\u043e\u0432\u043e\u0441\u0442\u0438"
                      ),
                    he()(e, "chat.R", !1) &&
                      s.a.createElement(
                        pe,
                        { path: ae.chat, isRouterLink: !0 },
                        "\u0427\u0430\u0442"
                      ),
                    he()(e, "settings.R", !1) &&
                      s.a.createElement(
                        pe,
                        { path: ae.adminPanel, isRouterLink: !0 },
                        "\u0410\u0434\u043c\u0438\u043d\u043a\u0430"
                      ),
                    s.a.createElement(
                      pe,
                      { path: ae.profile, isRouterLink: !0 },
                      "\u041f\u0440\u043e\u0444\u0438\u043b\u044c"
                    )
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.isAuthorized;
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(
                      oe.a,
                      {
                        position: "static",
                        color: "default",
                        className: t.appBar
                      },
                      s.a.createElement(
                        se.a,
                        null,
                        s.a.createElement(
                          le.a,
                          null,
                          s.a.createElement(
                            "div",
                            { className: t.logo },
                            s.a.createElement("img", {
                              src: "../../assets/img/logo.png",
                              alt: "logo"
                            })
                          ),
                          s.a.createElement(
                            pe,
                            { path: ae.home, isRouterLink: !0 },
                            "\u0413\u043b\u0430\u0432\u043d\u0430\u044f"
                          ),
                          a ? this.renderAuthorizedNav() : null
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        ge = Object(re.a)(
          Object(ce.a)(function() {
            return { logo: { flexGrow: 1 } };
          }),
          Object(g.b)(function(e) {
            return { isAuthorized: W(e), permissions: F(e) };
          })
        )(be),
        Ee = a(38),
        Oe = a(53),
        ve = a(119),
        je = a(368),
        we = a(402),
        ye = a(369),
        Ne = a(370),
        xe = a(371),
        Se = Object(ce.a)(function(e) {
          return { textField: { display: 200, marginBottom: e.spacing(3) } };
        })(function(e) {
          var t = e.id,
            a = e.classes,
            n = e.handleChange,
            r = e.value,
            c = e.label,
            i = e.required;
          return s.a.createElement(
            je.a,
            { className: a.textField, required: i },
            s.a.createElement(we.a, { htmlFor: "input-" + t }, c),
            s.a.createElement(ye.a, {
              id: "input-" + t,
              type: "text",
              value: r,
              autoComplete: t,
              onChange: n,
              startAdornment: s.a.createElement(
                Ne.a,
                { position: "start" },
                s.a.createElement(xe.a, null)
              )
            })
          );
        }),
        Ce = a(373),
        ke = a(372),
        Pe = a(374),
        Te = a(375),
        Ae = a(47),
        De = a.n(Ae),
        _e = Object(ce.a)(function(e) {
          return { textField: { display: 200, marginBottom: e.spacing(3) } };
        })(function(e) {
          var t = e.id,
            a = e.classes,
            n = e.handleChange,
            r = e.value,
            c = e.label,
            i = e.className,
            o = e.name,
            l = s.a.useState({ showPassword: !1 }),
            u = Object(Oe.a)(l, 2),
            m = u[0],
            d = u[1];
          return s.a.createElement(
            je.a,
            { className: De()(a.textField, i), required: !0 },
            s.a.createElement(we.a, { htmlFor: t }, c),
            s.a.createElement(ye.a, {
              id: t,
              autoComplete: t,
              type: m.showPassword ? "text" : "password",
              name: o,
              value: r,
              onChange: n,
              startAdornment: s.a.createElement(
                Ne.a,
                { position: "start" },
                s.a.createElement(ke.a, null)
              ),
              endAdornment: s.a.createElement(
                Ne.a,
                { position: "end" },
                s.a.createElement(
                  Ce.a,
                  {
                    "aria-label": "toggle password visibility",
                    onClick: function() {
                      d({ showPassword: !m.showPassword });
                    },
                    onMouseDown: function(e) {
                      e.preventDefault();
                    }
                  },
                  m.showPassword
                    ? s.a.createElement(Pe.a, null)
                    : s.a.createElement(Te.a, null)
                )
              )
            })
          );
        });
      function Re(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      var Le = Object(re.a)(
        Object(ce.a)(function() {
          return {
            form: {
              display: "flex",
              flexDirection: "column",
              padding: "20px 40px",
              maxWidth: "300px"
            },
            textCenter: { textAlign: "center" }
          };
        }),
        Object(g.b)()
      )(function(e) {
        var t = e.classes,
          a = e.dispatch,
          n = Object(o.useState)({ username: "", password: "" }),
          r = Object(Oe.a)(n, 2),
          c = r[0],
          i = r[1],
          l = function(e) {
            return function(t) {
              i(
                (function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? Re(a, !0).forEach(function(t) {
                          Object(v.a)(e, t, a[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(a)
                        )
                      : Re(a).forEach(function(t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(a, t)
                          );
                        });
                  }
                  return e;
                })({}, c, Object(v.a)({}, e, t.target.value))
              );
            };
          };
        return s.a.createElement(
          s.a.Fragment,
          null,
          s.a.createElement(
            ve.a,
            {
              className: t.form,
              component: "form",
              onSubmit: function(e) {
                e.preventDefault();
                var t = c.username,
                  n = c.password;
                a(
                  (function(e) {
                    var t = e.username,
                      a = e.password;
                    return function(e, n) {
                      return new Promise(function(r, c) {
                        I({
                          url: "/login",
                          method: "POST",
                          data: { username: t, password: a },
                          isWithoutToken: !0,
                          dispatch: e,
                          getState: n
                        })
                          .then(function(t) {
                            e(
                              P({
                                text:
                                  "\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438!",
                                variant: "success"
                              })
                            );
                            var a = t.accessToken,
                              n = t.accessTokenExpiredAt,
                              c = t.refreshToken,
                              i = t.refreshTokenExpiredAt;
                            localStorage.setItem(
                              "token-data",
                              JSON.stringify({
                                accessToken: a,
                                accessTokenExpiredAt: n,
                                refreshToken: c,
                                refreshTokenExpiredAt: i
                              })
                            ),
                              e(B(t)),
                              e(G(t)),
                              r(t);
                          })
                          .catch(function(t) {
                            e(P({ text: t.message, variant: "error" })), c(t);
                          });
                      });
                    };
                  })({ username: t, password: n })
                );
              }
            },
            s.a.createElement(Se, {
              handleChange: l("username"),
              value: c.username,
              id: "username",
              label:
                "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
              required: !0
            }),
            s.a.createElement(_e, {
              handleChange: l("password"),
              value: c.password,
              id: "password",
              label: "\u041f\u0430\u0440\u043e\u043b\u044c"
            }),
            s.a.createElement(
              me.a,
              { color: "primary", variant: "contained", type: "submit" },
              "\u0412\u043e\u0439\u0442\u0438"
            )
          ),
          s.a.createElement(
            Ee.a,
            { className: De()(t.textCenter, t.form) },
            "\u0412\u043f\u0435\u0440\u0432\u044b\u0435 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435? ",
            s.a.createElement(
              ue.b,
              { to: ae.registration },
              "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"
            )
          )
        );
      });
      function Ie(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      var Ue,
        Fe,
        He,
        We,
        Me,
        Be = Object(re.a)(
          Object(ce.a)(function() {
            return {
              form: {
                display: "flex",
                flexDirection: "column",
                padding: "20px 40px",
                maxWidth: "300px"
              },
              textCenter: { textAlign: "center" }
            };
          }),
          Object(g.b)(),
          b.g
        )(function(e) {
          var t = e.classes,
            a = e.dispatch,
            n = e.history,
            r = Object(o.useState)({
              username: "",
              password: "",
              repeatPassword: "",
              firstname: "",
              lastname: "",
              patronicname: ""
            }),
            c = Object(Oe.a)(r, 2),
            i = c[0],
            l = c[1],
            u = function(e) {
              return function(t) {
                l(
                  (function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var a = null != arguments[t] ? arguments[t] : {};
                      t % 2
                        ? Ie(a, !0).forEach(function(t) {
                            Object(v.a)(e, t, a[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(a)
                          )
                        : Ie(a).forEach(function(t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(a, t)
                            );
                          });
                    }
                    return e;
                  })({}, i, Object(v.a)({}, e, t.target.value))
                );
              };
            };
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              ve.a,
              {
                className: t.form,
                component: "form",
                onSubmit: function(e) {
                  e.preventDefault();
                  var t = i.username,
                    r = i.password,
                    c = i.firstname,
                    o = i.lastname,
                    s = i.patronicname;
                  a(
                    (function(e) {
                      var t = e.username,
                        a = e.password,
                        n = e.firstname,
                        r = e.lastname,
                        c = e.patronicname;
                      return function(e, i) {
                        return new Promise(function(o, s) {
                          var l = {
                            username: t,
                            surName: r,
                            firstName: n,
                            middleName: c,
                            password: a
                          };
                          I({
                            url: "/registration",
                            data: l,
                            method: "POST",
                            isWithoutToken: !0,
                            dispatch: e,
                            getState: i
                          })
                            .then(function() {
                              e(
                                P({
                                  text:
                                    "\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b!",
                                  variant: "success"
                                })
                              ),
                                o(l);
                            })
                            .catch(function(t) {
                              e(P({ text: t.message, variant: "error" })), s(t);
                            });
                        });
                      };
                    })({
                      username: t,
                      password: r,
                      firstname: c,
                      lastname: o,
                      patronicname: s
                    })
                  )
                    .then(function() {
                      return n.push(ae.home);
                    })
                    .catch(console.error);
                }
              },
              s.a.createElement(Se, {
                id: "username",
                handleChange: u("username"),
                value: i.username,
                label:
                  "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
                required: !0
              }),
              s.a.createElement(Se, {
                id: "lastname",
                handleChange: u("lastname"),
                value: i.lastname,
                label: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f"
              }),
              s.a.createElement(Se, {
                id: "firstname",
                handleChange: u("firstname"),
                value: i.firstname,
                label: "\u0418\u043c\u044f"
              }),
              s.a.createElement(Se, {
                id: "patronicname",
                handleChange: u("patronicname"),
                value: i.patronicname,
                label: "\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"
              }),
              s.a.createElement(_e, {
                id: "password",
                handleChange: u("password"),
                value: i.password,
                label: "\u041f\u0430\u0440\u043e\u043b\u044c"
              }),
              s.a.createElement(_e, {
                id: "repeatPassword",
                handleChange: u("repeatPassword"),
                value: i.repeatPassword,
                label:
                  "\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"
              }),
              s.a.createElement(
                me.a,
                { color: "primary", variant: "contained", type: "submit" },
                "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"
              )
            ),
            s.a.createElement(
              Ee.a,
              { className: De()(t.textCenter, t.form) },
              "\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",
              s.a.createElement(
                ue.b,
                { to: ae.home },
                "\u0412\u043e\u0439\u0442\u0438"
              )
            )
          );
        }),
        Ge = Object(re.a)(
          Object(ce.a)(function() {
            return {
              form: {
                display: "flex",
                flexDirection: "column",
                padding: "20px 40px",
                maxWidth: "300px"
              }
            };
          }),
          Object(g.b)()
        )(function(e) {
          var t = e.classes,
            a = e.dispatch;
          return s.a.createElement(
            ve.a,
            {
              className: t.form,
              component: "form",
              onSubmit: function(e) {
                e.preventDefault(), a(ee());
              }
            },
            s.a.createElement(
              me.a,
              { color: "primary", variant: "contained", type: "submit" },
              "\u0412\u044b\u0439\u0442\u0438"
            )
          );
        }),
        ze = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(p.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.isAuthorized;
                  return s.a.createElement(
                    "div",
                    { className: t.wrapper },
                    s.a.createElement(
                      se.a,
                      null,
                      s.a.createElement(
                        Ee.a,
                        { variant: "h4", component: "h2", gutterBottom: !0 },
                        "\u0412\u0430\u0448\u0435 \u0443\u044e\u0442\u043d\u043e\u0435",
                        s.a.createElement("br", null),
                        "\u0440\u0430\u0431\u043e\u0447\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e"
                      ),
                      a
                        ? s.a.createElement(Ge, null)
                        : s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(b.b, {
                              path: "/",
                              exact: !0,
                              component: Le
                            }),
                            s.a.createElement(b.b, {
                              path: "/registration",
                              component: Be
                            })
                          )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        qe = Object(re.a)(
          Object(ce.a)(function() {
            return {
              wrapper: {
                background: 'url("/assets/img/background.png") no-repeat',
                backgroundPosition: "center center",
                backgroundSize: "cover",
                width: "100%",
                flex: "1 1 100%",
                paddingTop: "40px"
              }
            };
          }),
          Object(g.b)(function(e) {
            return { isAuthorized: W(e) };
          }),
          b.g
        )(ze),
        Ve = a(334),
        Xe = function(e) {
          return e.news.isLoadingNewsList;
        },
        Je = function(e) {
          return e.news.isLoadingNewsForm;
        },
        Ze = function(e) {
          return e.news.isLoaded;
        },
        Qe = function(e) {
          return e.news.news;
        },
        Ke = Object(j.a)("".concat("NEWS", "/SET_IS_LOADING_NEWS_LIST")),
        Ye = Object(j.a)("".concat("NEWS", "/SET_IS_LOADING_NEWS_FORM")),
        $e = Object(j.a)("".concat("NEWS", "/SET_NEWS_LIST")),
        et = Object(j.a)("".concat("NEWS", "/APPEND_NEWS")),
        tt = Object(j.a)("".concat("NEWS", "/SET_TO_ZERO_NEWS_LIST")),
        at =
          (Object(j.a)("".concat("NEWS", "/SET_IS_LOADED")),
          Object(w.a)(
            Object(v.a)({}, Ke, function(e, t) {
              return t.payload;
            }),
            !1
          )),
        nt = Object(w.a)(
          Object(v.a)({}, Ye, function(e, t) {
            return t.payload;
          }),
          !1
        ),
        rt = Object(w.a)(
          Object(v.a)({}, $e, function(e, t) {
            return !0;
          }),
          !1
        ),
        ct = Object(w.a)(
          ((Ue = {}),
          Object(v.a)(Ue, $e, function(e, t) {
            return t.payload;
          }),
          Object(v.a)(Ue, et, function(e, t) {
            return [t.payload].concat(Object(S.a)(e));
          }),
          Object(v.a)(Ue, tt, function() {
            return [];
          }),
          Ue),
          []
        ),
        it = Object(y.c)({
          isLoadingNewsList: at,
          isLoadingNewsForm: nt,
          isLoaded: rt,
          news: ct
        }),
        ot = function(e) {
          var t = e.title,
            a = e.text;
          return function(e, n) {
            return new Promise(function(r, c) {
              var i = { title: t, text: a };
              e(Ye(!0)),
                I({
                  url: "/news",
                  method: "POST",
                  data: i,
                  getState: n,
                  dispatch: e
                })
                  .then(function(t) {
                    e($e(t)), r(t);
                  })
                  .catch(function(e) {
                    c(e);
                  })
                  .finally(function() {
                    return e(Ye(!1));
                  });
            });
          };
        },
        st = function(e) {
          var t = e.id,
            a = e.title,
            n = e.text;
          return function(e, r) {
            return new Promise(function(c, i) {
              var o = { title: a, text: n };
              e(Ye(!0)),
                I({
                  url: "/news/".concat(t),
                  method: "PATCH",
                  data: o,
                  getState: r,
                  dispatch: e
                })
                  .then(function(t) {
                    e($e(t)), c(t);
                  })
                  .catch(function(e) {
                    i(e);
                  })
                  .finally(function() {
                    return e(Ye(!1));
                  });
            });
          };
        },
        lt = a(376),
        ut = a(377),
        mt = a(378),
        dt = a(379),
        pt = a(380),
        ft = function(e) {
          return {
            wrapper: { width: "100%", flex: "1 1 100%", paddingTop: "40px" },
            card: { marginBottom: e.spacing(2) }
          };
        },
        ht = Object(Ve.a)(ft)(function(e) {
          var t = e.classes,
            a = e.post,
            n = e.dispatch,
            r = e.permission,
            c = !!he()(r, "news.U", !1),
            i = !!he()(r, "news.D", !1);
          return s.a.createElement(
            lt.a,
            { className: t.card },
            s.a.createElement(ut.a, {
              avatar: s.a.createElement(mt.a, {
                "aria-label": "recipe",
                src: a.user.image || "/assets/img/no-user-image.png",
                alt: a.user.username
              }),
              title: a.title,
              subheader: a.created_at
            }),
            s.a.createElement(
              dt.a,
              null,
              s.a.createElement(
                Ee.a,
                { variant: "body2", color: "textSecondary", component: "p" },
                a.text
              )
            ),
            s.a.createElement(
              pt.a,
              null,
              c &&
                s.a.createElement(
                  pe,
                  { path: "/news/".concat(a.id, "/edit") },
                  "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"
                ),
              i &&
                s.a.createElement(
                  me.a,
                  {
                    onClick: function() {
                      n(
                        (function(e) {
                          var t = e.id;
                          return function(e, a) {
                            return new Promise(function(n, r) {
                              e(Ke(!0)),
                                I({
                                  url: "/news/".concat(t),
                                  method: "DELETE",
                                  getState: a,
                                  dispatch: e
                                })
                                  .then(function(t) {
                                    e($e(t)), n(t);
                                  })
                                  .catch(function(e) {
                                    r(e);
                                  })
                                  .finally(function() {
                                    return e(Ke(!1));
                                  });
                            });
                          };
                        })({ id: a.id })
                      );
                    }
                  },
                  "\u0423\u0434\u0430\u043b\u0438\u0442\u044c"
                )
            )
          );
        }),
        bt = Object(re.a)(
          Object(Ve.a)(ft),
          Object(g.b)(function(e) {
            return { permission: F(e) };
          })
        )(ht),
        gt = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(p.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  (0, this.props.dispatch)(function(e, t) {
                    Ze(t()) ||
                      (e(Ke(!0)),
                      I({
                        url: "/news",
                        method: "GET",
                        getState: t,
                        dispatch: e
                      })
                        .then(function(t) {
                          return e($e(t));
                        })
                        .catch(function(e) {
                          return console.log(e);
                        })
                        .finally(function() {
                          return e(Ke(!1));
                        }));
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.isLoading,
                    a = e.isLoaded,
                    n = e.news,
                    r = e.permission,
                    c = !!he()(r, "news.C", !1);
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    c &&
                      s.a.createElement(
                        pe,
                        { color: "primary", path: "".concat(ae.news, "/add") },
                        "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"
                      ),
                    s.a.createElement(
                      "div",
                      null,
                      t ? s.a.createElement("div", null, "Loading...") : null,
                      a
                        ? n.length
                          ? n.map(function(e) {
                              return s.a.createElement(bt, {
                                post: e,
                                key: e.id
                              });
                            })
                          : s.a.createElement(
                              "div",
                              null,
                              "\u041d\u0435\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439"
                            )
                        : null
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        Et = Object(g.b)(function(e) {
          return {
            isLoading: Xe(e),
            isLoaded: Ze(e),
            news: Qe(e),
            permission: F(e)
          };
        }, null)(gt),
        Ot = a(381),
        vt = a(399),
        jt = a(383),
        wt = (function(e) {
          function t() {
            var e, a;
            Object(m.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                title: "",
                text: "",
                createdAt: new Date(),
                user: ""
              }),
              (a.handleChange = function(e) {
                var t = e.target,
                  n = t.name,
                  r = t.value;
                a.setState(Object(v.a)({}, n, r));
              }),
              (a.handleSubmit = function(e) {
                e.preventDefault();
                var t = a.state,
                  n = t.title,
                  r = t.text,
                  c = a.props,
                  i = c.history,
                  o = c.dispatch,
                  s = c.match;
                o(
                  s.params.id
                    ? st({ title: n, text: r, id: s.params.id })
                    : ot({ title: n, text: r })
                ).then(function() {
                  return i.push(ae.news);
                });
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props,
                    t = e.match,
                    a = e.newsList;
                  if (t.params.id) {
                    var n = a.find(function(e) {
                        return e.id === t.params.id;
                      }),
                      r = n.title,
                      c = n.text,
                      i = n.created_at,
                      o = n.user;
                    this.setState({
                      title: r,
                      text: c,
                      createdAt: i,
                      user: o.username
                    });
                  }
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.classes,
                    t = this.state,
                    a = t.title,
                    n = t.text,
                    r = t.createdAt,
                    c = t.user;
                  return s.a.createElement(
                    ve.a,
                    {
                      className: e.formCard,
                      component: "form",
                      onSubmit: this.handleSubmit
                    },
                    s.a.createElement(
                      Ot.a,
                      { container: !0, spacing: 2 },
                      s.a.createElement(
                        Ot.a,
                        { item: !0, xs: 4 },
                        s.a.createElement(vt.a, {
                          label: "\u0410\u0432\u0442\u043e\u0440",
                          value: c,
                          onChange: this.handleChange,
                          className: e.textField,
                          margin: "normal",
                          disabled: !0,
                          fullWidth: !0
                        }),
                        s.a.createElement(vt.a, {
                          label: "\u0414\u0430\u0442\u0430",
                          value: r,
                          onChange: this.handleChange,
                          className: e.textField,
                          margin: "normal",
                          disabled: !0,
                          fullWidth: !0
                        }),
                        s.a.createElement(vt.a, {
                          label:
                            "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
                          name: "title",
                          value: a,
                          onChange: this.handleChange,
                          className: e.textField,
                          margin: "normal",
                          fullWidth: !0
                        })
                      ),
                      s.a.createElement(
                        Ot.a,
                        { item: !0, xs: 8 },
                        s.a.createElement(vt.a, {
                          label: "\u0422\u0435\u043a\u0441\u0442",
                          name: "text",
                          value: n,
                          onChange: this.handleChange,
                          className: e.textField,
                          margin: "normal",
                          multiline: !0,
                          fullWidth: !0,
                          rows: 5
                        }),
                        s.a.createElement(
                          jt.a,
                          null,
                          s.a.createElement(
                            me.a,
                            {
                              variant: "contained",
                              color: "secondary",
                              type: "submit"
                            },
                            "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
                          ),
                          s.a.createElement(
                            pe,
                            { path: "/news", variant: "contained" },
                            "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        yt = Object(re.a)(
          Object(Ve.a)(function(e) {
            return {
              formCard: { padding: e.spacing(2) },
              textField: { display: "block", width: "100%" }
            };
          }),
          b.g,
          Object(g.b)(function(e) {
            return { isLoading: Je(e), newsList: Qe(e) };
          }, null)
        )(wt),
        Nt = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(p.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props.classes;
                  return s.a.createElement(
                    "div",
                    { className: e.wrapper },
                    s.a.createElement(
                      se.a,
                      null,
                      s.a.createElement(
                        Ee.a,
                        { variant: "h4", component: "h2", gutterBottom: !0 },
                        "\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"
                      ),
                      s.a.createElement(b.b, {
                        path: "/news",
                        exact: !0,
                        component: Et
                      }),
                      s.a.createElement(b.b, {
                        path: "/news/add",
                        component: yt
                      }),
                      s.a.createElement(b.b, {
                        path: "/news/:id/edit",
                        component: yt
                      })
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        xt = Object(Ve.a)(function(e) {
          return {
            wrapper: { width: "100%", flex: "1 1 100%", paddingTop: "40px" }
          };
        })(Nt),
        St = a(174),
        Ct = a.n(St),
        kt = null,
        Pt = function(e) {
          return e.chat.users;
        },
        Tt = function(e) {
          return e.chat.messages;
        },
        At = function(e) {
          return e.chat.selectedRoom;
        },
        Dt = function(e) {
          return e.chat.messageText;
        },
        _t = Object(j.a)("".concat("CHAT", "/SET_USERS")),
        Rt = Object(j.a)("".concat("CHAT", "/ADD_USER")),
        Lt = Object(j.a)("".concat("CHAT", "/REMOVE_USER")),
        It = Object(j.a)("".concat("CHAT", "/ADD_MESSAGE")),
        Ut = Object(j.a)("".concat("CHAT", "/SET_TO_ZERO_MESSAGES")),
        Ft = Object(j.a)("".concat("CHAT", "/SET_SELECTED_ROOM")),
        Ht = Object(j.a)("".concat("CHAT", "/SET_MESSAGE_TEXT")),
        Wt = Object(j.a)("".concat("CHAT", "/RESET_MESSAGE")),
        Mt = Object(w.a)(
          ((Fe = {}),
          Object(v.a)(Fe, _t, function(e, t) {
            return t.payload;
          }),
          Object(v.a)(Fe, Rt, function(e, t) {
            return [t.payload].concat(Object(S.a)(e));
          }),
          Object(v.a)(Fe, Lt, function(e, t) {
            return e.filter(function(e) {
              return e.id !== t.payload;
            });
          }),
          Fe),
          []
        ),
        Bt = Object(w.a)(
          ((He = {}),
          Object(v.a)(He, It, function(e, t) {
            return [].concat(Object(S.a)(e), [t.payload]);
          }),
          Object(v.a)(He, Ut, function() {
            return [];
          }),
          He),
          []
        ),
        Gt = Object(w.a)(
          Object(v.a)({}, Ft, function(e, t) {
            return t.payload;
          }),
          null
        ),
        zt = Object(w.a)(
          ((We = {}),
          Object(v.a)(We, Ht, function(e, t) {
            return t.payload;
          }),
          Object(v.a)(We, Wt, function() {
            return "";
          }),
          We),
          ""
        ),
        qt = Object(y.c)({
          users: Mt,
          messages: Bt,
          selectedRoom: Gt,
          messageText: zt
        }),
        Vt = function() {
          return function(e, t) {
            var a = t(),
              n = U(a),
              r = At(a),
              c = Dt(a);
            kt.emit("message:add", { senderId: n.id, roomId: r, text: c }),
              e(Wt());
          };
        },
        Xt = a(384),
        Jt = a(382),
        Zt = a(332),
        Qt = a(385),
        Kt = Object(re.a)(
          Object(Ve.a)(function(e) {
            return {
              column: {
                height: "calc(100vh - 80px)",
                display: "flex",
                flexDirection: "column"
              }
            };
          }),
          Object(g.b)(function(e) {
            return { users: Pt(e), selectedRoom: At(e) };
          })
        )(function(e) {
          var t = e.classes,
            a = e.users,
            n = e.selectedRoom,
            r = e.dispatch;
          return s.a.createElement(
            ve.a,
            { className: t.column, square: !0 },
            s.a.createElement(ut.a, {
              title: s.a.createElement(
                Ee.a,
                { variant: "h5" },
                "\u041b\u0438\u0447\u043d\u044b\u0435 \u0447\u0430\u0442\u044b"
              )
            }),
            s.a.createElement(Xt.a, null),
            s.a.createElement(
              Jt.a,
              null,
              a.map(function(e, t) {
                return s.a.createElement(
                  Zt.a,
                  {
                    button: !0,
                    key: e.id,
                    selected: e.id === n,
                    onClick: function() {
                      return (t = e.id), void r(Ft(t));
                      var t;
                    }
                  },
                  s.a.createElement(Qt.a, { primary: e.username })
                );
              })
            )
          );
        }),
        Yt = (function(e) {
          function t() {
            var e, a;
            Object(m.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).handleChange = function(e) {
                (0, a.props.dispatch)(Ht(e.target.value));
              }),
              (a.handleSubmit = function(e) {
                e.preventDefault(), (0, a.props.dispatch)(Vt());
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.messages,
                    n = e.messageText,
                    r = e.userId,
                    c = e.permission,
                    i = !!he()(c, "chat.C", !1);
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      dt.a,
                      { className: t.chatArea },
                      s.a.createElement(
                        Ot.a,
                        { container: !0, direction: "column", wrap: "nowrap" },
                        a.map(function(e, a) {
                          return s.a.createElement(
                            Ot.a,
                            {
                              item: !0,
                              key: a,
                              className: De()(
                                t.messageContainer,
                                e.senderId === r
                                  ? t.isMyMessage
                                  : t.isAnotherMessage
                              )
                            },
                            s.a.createElement(
                              lt.a,
                              {
                                className: De()(
                                  t.message,
                                  e.senderId === r
                                    ? t.messagePrimary
                                    : t.messageSecondary
                                )
                              },
                              e.text
                            )
                          );
                        })
                      )
                    ),
                    i &&
                      s.a.createElement(
                        pt.a,
                        null,
                        s.a.createElement(
                          "form",
                          { onSubmit: this.handleSubmit, className: t.form },
                          s.a.createElement(vt.a, {
                            label: "Label",
                            style: { margin: 8 },
                            fullWidth: !0,
                            margin: "normal",
                            variant: "filled",
                            InputLabelProps: { shrink: !0 },
                            value: n,
                            onChange: this.handleChange
                          }),
                          s.a.createElement(
                            me.a,
                            {
                              variant: "contained",
                              color: "primary",
                              type: "submit"
                            },
                            "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"
                          )
                        )
                      )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        $t = Object(re.a)(
          Object(Ve.a)(function(e) {
            return {
              messageContainer: { marginBottom: e.spacing(2) },
              message: { padding: e.spacing(1) },
              messagePrimary: { backgroundColor: e.palette.grey.A700 },
              messageSecondary: { backgroundColor: e.palette.secondary.main },
              isMyMessage: { alignSelf: "end" },
              isAnotherMessage: { alignSelf: "flex-end" },
              chatArea: { height: "100%", overflowY: "scroll" },
              form: { display: "flex", alignItems: "center", width: "100%" }
            };
          }),
          Object(g.b)(function(e) {
            return { messageText: Dt(e), userId: U(e).id, permission: F(e) };
          })
        )(Yt),
        ea = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(p.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  (0, this.props.dispatch)(function(e, t) {
                    var a = U(t());
                    (kt = Ct()("https://loft-system-api.herokuapp.com")).emit(
                      "users:connect",
                      { id: a.id, username: a.username }
                    ),
                      kt
                        .on("users:list", function(t) {
                          return e(_t(t));
                        })
                        .on("users:add", function(t) {
                          return e(Rt(t));
                        })
                        .on("users:leave", function(t) {
                          return e(Lt(t));
                        })
                        .on("message:add", function(t) {
                          return e(It(t));
                        });
                  });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  (0, this.props.dispatch)(function(e, t) {
                    kt && kt.disconnect(),
                      e(_t([])),
                      e(Ut()),
                      e(Ft(null)),
                      e(Wt());
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.users,
                    n = e.messages,
                    r = e.selectedRoom;
                  return s.a.createElement(
                    "div",
                    { className: t.wrapper },
                    s.a.createElement(
                      se.a,
                      null,
                      s.a.createElement(
                        Ot.a,
                        { container: !0, spacing: 1 },
                        s.a.createElement(
                          Ot.a,
                          { item: !0, xs: 4 },
                          s.a.createElement(Kt, { users: a, selected: r })
                        ),
                        s.a.createElement(
                          Ot.a,
                          { item: !0, xs: 8 },
                          s.a.createElement(
                            lt.a,
                            { className: t.column, square: !0 },
                            r
                              ? s.a.createElement($t, { messages: n })
                              : s.a.createElement(
                                  "div",
                                  { className: t.empty },
                                  "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442"
                                )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        ta = Object(re.a)(
          Object(Ve.a)(function(e) {
            return {
              toolbar: e.mixins.toolbar,
              column: {
                height: "calc(100vh - 80px)",
                display: "flex",
                flexDirection: "column"
              },
              wrapper: {
                width: "100%",
                flex: "1 1 100%",
                paddingTop: e.spacing(1)
              },
              empty: { padding: e.spacing(3) }
            };
          }),
          Object(g.b)(function(e) {
            return { users: Pt(e), selectedRoom: At(e), messages: Tt(e) };
          })
        )(ea),
        aa = a(175),
        na = a.n(aa),
        ra = (function(e) {
          function t() {
            var e, a;
            Object(m.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                firstName: "",
                middleName: "",
                surName: "",
                oldPassword: "",
                newPassword: "",
                confirmPassword: "",
                image: "",
                fileRef: s.a.createRef()
              }),
              (a.cancelHandler = function() {
                var e = a.props.userProfile;
                a.setState({
                  firstName: e.firstName,
                  middleName: e.middleName,
                  surName: e.surName,
                  oldPassword: "",
                  newPassword: "",
                  confirmPassword: "",
                  image: e.image
                });
              }),
              (a.handleChange = function(e) {
                var t = e.target,
                  n = t.name,
                  r = t.value;
                a.setState(Object(v.a)({}, n, r));
              }),
              (a.handleChangeFile = function() {
                var e = a.state.fileRef,
                  t = new FileReader();
                (t.onload = function(e) {
                  a.setState({ image: e.target.result });
                }),
                  e.current.files[0] && t.readAsDataURL(e.current.files[0]);
              }),
              (a.submitHandler = function() {
                var e = a.props.dispatch,
                  t = a.state,
                  n = t.firstName,
                  r = t.surName,
                  c = t.middleName,
                  i = t.oldPassword,
                  o = t.newPassword,
                  s = t.fileRef;
                e(
                  te({
                    firstName: n,
                    surName: r,
                    middleName: c,
                    oldPassword: i,
                    newPassword: o,
                    avatar: s.current.files[0] || null
                  })
                ).then(function() {
                  a.cancelHandler();
                });
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.userProfile;
                  this.setState({
                    firstName: e.firstName,
                    middleName: e.middleName,
                    surName: e.surName,
                    image: e.image
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.isLoading,
                    n = this.state,
                    r = n.firstName,
                    c = n.surName,
                    i = n.middleName,
                    o = n.oldPassword,
                    l = n.newPassword,
                    u = n.confirmPassword,
                    m = n.image,
                    d = n.fileRef;
                  return s.a.createElement(
                    "div",
                    { className: t.wrapper },
                    s.a.createElement(
                      se.a,
                      null,
                      s.a.createElement(
                        ve.a,
                        { className: t.formCard },
                        s.a.createElement(
                          Ot.a,
                          { container: !0, spacing: 2 },
                          s.a.createElement(
                            Ot.a,
                            { item: !0, xs: 4 },
                            s.a.createElement(
                              na.a,
                              { className: t.avatarPreviewWrapper },
                              s.a.createElement(mt.a, {
                                className: t.avatarPreview,
                                src: m || "/assets/img/no-user-image-big.png"
                              })
                            ),
                            s.a.createElement(
                              me.a,
                              {
                                className: t.uploadButton,
                                variant: "contained",
                                component: "label",
                                color: "primary"
                              },
                              "\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0444\u0430\u0439\u043b",
                              s.a.createElement("input", {
                                type: "file",
                                style: { display: "none" },
                                ref: d,
                                onChange: this.handleChangeFile
                              })
                            )
                          ),
                          s.a.createElement(
                            Ot.a,
                            { item: !0, xs: 8 },
                            s.a.createElement(
                              Ot.a,
                              {
                                container: !0,
                                direction: "column",
                                style: { height: "100%" }
                              },
                              s.a.createElement(
                                Ee.a,
                                {
                                  variant: "h4",
                                  component: "h2",
                                  gutterBottom: !0
                                },
                                "\u041e\u0431\u0449\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"
                              ),
                              s.a.createElement(
                                "div",
                                { className: t.form },
                                s.a.createElement(vt.a, {
                                  label:
                                    "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                                  className: t.textField,
                                  margin: "normal",
                                  name: "surName",
                                  value: c,
                                  onChange: this.handleChange
                                }),
                                s.a.createElement(vt.a, {
                                  label: "\u0418\u043c\u044f",
                                  className: t.textField,
                                  margin: "normal",
                                  name: "firstName",
                                  value: r,
                                  onChange: this.handleChange
                                }),
                                s.a.createElement(vt.a, {
                                  label:
                                    "\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",
                                  className: t.textField,
                                  margin: "normal",
                                  name: "middleName",
                                  value: i,
                                  onChange: this.handleChange
                                })
                              ),
                              s.a.createElement(
                                Ee.a,
                                {
                                  variant: "h4",
                                  component: "h2",
                                  gutterBottom: !0
                                },
                                "\u041f\u0430\u0440\u043e\u043b\u044c"
                              ),
                              s.a.createElement(
                                "div",
                                { className: t.form },
                                s.a.createElement(_e, {
                                  label:
                                    "\u0421\u0442\u0430\u0440\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                                  className: t.textField,
                                  name: "oldPassword",
                                  value: o,
                                  handleChange: this.handleChange
                                }),
                                s.a.createElement(_e, {
                                  label:
                                    "\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",
                                  className: t.textField,
                                  name: "newPassword",
                                  value: l,
                                  handleChange: this.handleChange
                                }),
                                s.a.createElement(_e, {
                                  label:
                                    "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",
                                  className: t.textField,
                                  name: "confirmPassword",
                                  value: u,
                                  handleChange: this.handleChange
                                })
                              ),
                              s.a.createElement(
                                pt.a,
                                { className: t.formActions },
                                s.a.createElement(
                                  me.a,
                                  {
                                    color: "primary",
                                    variant: "contained",
                                    disabled: a,
                                    onClick: this.submitHandler
                                  },
                                  "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
                                ),
                                s.a.createElement(
                                  me.a,
                                  {
                                    variant: "outlined",
                                    onClick: this.cancelHandler,
                                    disabled: a
                                  },
                                  "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        ca = Object(re.a)(
          Object(Ve.a)(function(e) {
            return {
              wrapper: { width: "100%", flex: "1 1 100%", paddingTop: "40px" },
              formCard: { padding: e.spacing(2) },
              avatarPreview: {
                width: "100%",
                height: "100%",
                borderRadius: "8px"
              },
              avatarPreviewWrapper: {
                marginBottom: e.spacing(2),
                width: "100%"
              },
              uploadButton: { display: "block", textAlign: "center" },
              form: {
                display: "flex",
                flexWrap: "wrap",
                marginBottom: e.spacing(3)
              },
              textField: {
                marginLeft: e.spacing(1),
                marginRight: e.spacing(1),
                width: 200
              },
              formActions: { marginTop: "auto", padding: 0 }
            };
          }),
          Object(g.b)(function(e) {
            return { userProfile: U(e), isLoading: M(e) };
          })
        )(ra),
        ia = a(117),
        oa = a.n(ia),
        sa = function(e) {
          return e.adminPanel.isLoadingUsers;
        },
        la = function(e) {
          return e.adminPanel.users;
        },
        ua = Object(j.a)("".concat("ADMIN_PANEL", "/SET_IS_LOADING_USERS")),
        ma = Object(j.a)("".concat("ADMIN_PANEL", "/SET_IS_LOADING_FORM")),
        da = Object(j.a)("".concat("ADMIN_PANEL", "/SET_USERS")),
        pa = Object(j.a)("".concat("ADMIN_PANEL", "/SET_TO_ZERO_USERS")),
        fa = Object(w.a)(
          Object(v.a)({}, ua, function(e, t) {
            return t.payload;
          }),
          !1
        ),
        ha = Object(w.a)(
          Object(v.a)({}, ma, function(e, t) {
            return t.payload;
          }),
          !1
        ),
        ba = Object(w.a)(
          ((Me = {}),
          Object(v.a)(Me, da, function(e, t) {
            return t.payload;
          }),
          Object(v.a)(Me, pa, function() {
            return [];
          }),
          Me),
          []
        ),
        ga = Object(y.c)({ isLoadingUsers: fa, isLoadingForm: ha, users: ba }),
        Ea = function() {
          return function(e, t) {
            e(ua(!0)),
              I({ url: "/users", getState: t, dispatch: e })
                .then(function(t) {
                  e(da(t));
                })
                .catch(function(e) {
                  return P({ text: e.message, variant: "error" });
                })
                .finally(function() {
                  return e(ua(!1));
                });
          };
        },
        Oa = function(e, t) {
          return function(a, n) {
            return new Promise(function(r) {
              a(ma(!0)),
                I({
                  url: "/users/".concat(e, "/permission"),
                  method: "PATCH",
                  data: { permission: t },
                  getState: n,
                  dispatch: a
                })
                  .then(function() {
                    P({
                      text: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e!",
                      variant: "success"
                    }),
                      a(Ea()),
                      he()(U(n()), "id", null) === e && a(Y()),
                      r(!0);
                  })
                  .catch(function(e) {
                    P({ text: e.message, variant: "error" });
                  })
                  .finally(function() {
                    return a(ma(!1));
                  });
            });
          };
        },
        va = function(e) {
          return function(t, a) {
            return new Promise(function(n) {
              t(ma(!0)),
                I({
                  url: "/users/".concat(e),
                  method: "DELETE",
                  getState: a,
                  dispatch: t
                })
                  .then(function(e) {
                    t(Ea()), n(!0);
                  })
                  .catch(function(e) {
                    P({ text: e.message, variant: "error" });
                  })
                  .finally(function() {
                    return t(ma(!1));
                  });
            });
          };
        },
        ja = a(395),
        wa = a(388),
        ya = a(386),
        Na = a(387),
        xa = a(398),
        Sa = function(e) {
          var t = e.handleChange,
            a = e.values,
            n = e.label;
          return s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              Ee.a,
              { variant: "h5", component: "h3", gutterBottom: !0 },
              n
            ),
            s.a.createElement(
              ya.a,
              null,
              s.a.createElement(Na.a, {
                control: s.a.createElement(xa.a, {
                  checked: a.C,
                  value: "create",
                  onChange: t("C")
                }),
                label: "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435"
              }),
              s.a.createElement(Na.a, {
                control: s.a.createElement(xa.a, {
                  checked: a.R,
                  value: "read",
                  onChange: t("R")
                }),
                label: "\u0427\u0442\u0435\u043d\u0438\u0435"
              }),
              s.a.createElement(Na.a, {
                control: s.a.createElement(xa.a, {
                  checked: a.U,
                  value: "update",
                  onChange: t("U")
                }),
                label:
                  "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"
              }),
              s.a.createElement(Na.a, {
                control: s.a.createElement(xa.a, {
                  checked: a.D,
                  value: "delete",
                  onChange: t("D")
                }),
                label: "\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435"
              })
            )
          );
        };
      function Ca(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function ka(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ca(a, !0).forEach(function(t) {
                Object(v.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : Ca(a).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var Pa = {
          selectedUserId: "",
          selectedUser: null,
          permission: {
            chat: { C: !0, R: !0, U: !1, D: !1 },
            news: { C: !0, R: !0, U: !1, D: !1 },
            settings: { C: !0, R: !0, U: !1, D: !1 }
          }
        },
        Ta = (function(e) {
          function t() {
            var e, a;
            Object(m.a)(this, t);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c];
            return (
              ((a = Object(p.a)(
                this,
                (e = Object(f.a)(t)).call.apply(e, [this].concat(r))
              )).state = Pa),
              (a.handleChange = function(e) {
                return function(t) {
                  return function(n) {
                    var r = n.target.checked,
                      c = a.state.permission;
                    a.setState({
                      permission: ka(
                        {},
                        c,
                        Object(v.a)({}, e, ka({}, c[e], Object(v.a)({}, t, r)))
                      )
                    });
                  };
                };
              }),
              (a.handleChangeUser = function(e) {
                var t = a.props.users,
                  n = e.target.value,
                  r = n
                    ? oa()(
                        t.find(function(e) {
                          return e.id === n;
                        })
                      )
                    : null;
                a.setState({
                  selectedUserId: n,
                  selectedUser: r,
                  permission: r.permission
                });
              }),
              (a.submitHandler = function() {
                var e = a.state,
                  t = e.permission,
                  n = e.selectedUserId;
                (0, a.props.dispatch)(Oa(n, t));
              }),
              (a.cancelHandler = function() {
                var e = a.props.users,
                  t = a.state.selectedUserId,
                  n = oa()(
                    e.find(function(e) {
                      return e.id === t;
                    })
                  );
                t && a.setState({ selectedUser: n, permission: n.permission });
              }),
              (a.deleteHandler = function() {
                var e = a.state.selectedUserId,
                  t = a.props.dispatch;
                e &&
                  t(va(e)).then(function() {
                    return a.setState(Pa);
                  });
              }),
              a
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  (0, this.props.dispatch)(Ea());
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    t = e.classes,
                    a = e.users,
                    n = (e.isLoading, this.state),
                    r = n.selectedUserId,
                    c = n.selectedUser;
                  return s.a.createElement(
                    "div",
                    { className: t.wrapper },
                    s.a.createElement(
                      se.a,
                      null,
                      s.a.createElement(
                        ve.a,
                        { className: t.formCard },
                        s.a.createElement(
                          Ot.a,
                          {
                            container: !0,
                            wrap: "nowrap",
                            alignItems: "center",
                            className: t.mb3
                          },
                          s.a.createElement(mt.a, {
                            src:
                              (c && c.image) || "/assets/img/no-user-image.png",
                            className: t.userAvatar
                          }),
                          s.a.createElement(
                            je.a,
                            { className: t.userSelect },
                            s.a.createElement(
                              we.a,
                              { htmlFor: "age-simple" },
                              "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"
                            ),
                            s.a.createElement(
                              ja.a,
                              { value: r, onChange: this.handleChangeUser },
                              s.a.createElement(
                                wa.a,
                                { value: null },
                                "\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"
                              ),
                              a.map(function(e) {
                                return s.a.createElement(
                                  wa.a,
                                  { value: e.id, key: e.id },
                                  e.username
                                );
                              })
                            )
                          )
                        ),
                        c && this.renderForms()
                      )
                    )
                  );
                }
              },
              {
                key: "renderForms",
                value: function() {
                  var e = this.props.classes,
                    t = this.state.permission;
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      Ot.a,
                      { container: !0, spacing: 2, className: e.mb3 },
                      s.a.createElement(
                        Ot.a,
                        { item: !0, xs: 4 },
                        s.a.createElement(Sa, {
                          label:
                            "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",
                          values: t.settings,
                          handleChange: this.handleChange("settings")
                        })
                      ),
                      s.a.createElement(
                        Ot.a,
                        { item: !0, xs: 4 },
                        s.a.createElement(Sa, {
                          label: "\u041d\u043e\u0432\u043e\u0441\u0442\u0438",
                          values: t.news,
                          handleChange: this.handleChange("news")
                        })
                      ),
                      s.a.createElement(
                        Ot.a,
                        { item: !0, xs: 4 },
                        s.a.createElement(Sa, {
                          label: "\u0427\u0430\u0442",
                          values: t.chat,
                          handleChange: this.handleChange("chat")
                        })
                      )
                    ),
                    s.a.createElement(
                      Ot.a,
                      {
                        container: !0,
                        spacing: 2,
                        justify: "center",
                        alignItems: "center"
                      },
                      s.a.createElement(
                        jt.a,
                        null,
                        s.a.createElement(
                          me.a,
                          {
                            variant: "contained",
                            color: "secondary",
                            onClick: this.submitHandler
                          },
                          "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"
                        ),
                        s.a.createElement(
                          me.a,
                          { variant: "contained", onClick: this.cancelHandler },
                          "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"
                        ),
                        s.a.createElement(
                          me.a,
                          { variant: "contained", onClick: this.deleteHandler },
                          "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        Aa = Object(re.a)(
          Object(Ve.a)(function(e) {
            return {
              wrapper: { width: "100%", flex: "1 1 100%", paddingTop: "40px" },
              formCard: { padding: e.spacing(2) },
              userSelect: { width: "100%" },
              userAvatar: { marginRight: e.spacing(2) },
              mb3: { marginBottom: e.spacing(3) }
            };
          }),
          Object(g.b)(function(e) {
            return { isLoading: sa(e), users: la(e) };
          })
        )(Ta),
        Da = a(2),
        _a = a(3),
        Ra = a(176),
        La = a.n(Ra),
        Ia = a(178),
        Ua = a.n(Ia),
        Fa = a(179),
        Ha = a.n(Fa),
        Wa = a(181),
        Ma = a.n(Wa),
        Ba = a(389),
        Ga = a(390),
        za = a(401),
        qa = a(391),
        Va = a(177),
        Xa = a.n(Va),
        Ja = a(180),
        Za = { success: La.a, warning: Xa.a, error: Ua.a, info: Ha.a },
        Qa = Object(Ja.a)(function(e) {
          return {
            success: { backgroundColor: Ba.a[600] },
            error: { backgroundColor: e.palette.error.dark },
            info: { backgroundColor: e.palette.primary.main },
            warning: { backgroundColor: Ga.a[700] },
            icon: { fontSize: 20 },
            iconVariant: { opacity: 0.9, marginRight: e.spacing(1) },
            message: { display: "flex", alignItems: "center" }
          };
        });
      function Ka(e) {
        var t = Qa(),
          a = e.className,
          n = e.message,
          r = e.onClose,
          c = e.variant,
          i = Object(Da.a)(e, ["className", "message", "onClose", "variant"]),
          o = Za[c];
        return s.a.createElement(
          qa.a,
          Object.assign(
            {
              className: Object(_a.a)(t[c], a),
              "aria-describedby": "client-snackbar",
              message: s.a.createElement(
                "span",
                { id: "client-snackbar", className: t.message },
                s.a.createElement(o, {
                  className: Object(_a.a)(t.icon, t.iconVariant)
                }),
                n
              ),
              action: [
                s.a.createElement(
                  Ce.a,
                  {
                    key: "close",
                    "aria-label": "close",
                    color: "inherit",
                    onClick: r
                  },
                  s.a.createElement(Ma.a, { className: t.icon })
                )
              ]
            },
            i
          )
        );
      }
      var Ya = function(e) {
          var t = { openNotification: P, closeNotification: T };
          return Object(g.b)(function(e) {
            return { notifications: A(e) };
          }, t)(function(t) {
            var a = t.openNotification,
              n = t.closeNotification,
              r = t.notifications,
              c = Object(Da.a)(t, [
                "openNotification",
                "closeNotification",
                "notifications"
              ]),
              i = function(e) {
                return function(t, a) {
                  "clickaway" !== a && n(e);
                };
              },
              o = r.find(function(e) {
                return !!e.isActive;
              });
            return s.a.createElement(
              s.a.Fragment,
              null,
              s.a.createElement(
                e,
                Object.assign({}, c, { openNotification: a })
              ),
              o &&
                s.a.createElement(
                  za.a,
                  {
                    anchorOrigin: { vertical: "bottom", horizontal: "right" },
                    open: !0,
                    autoHideDuration: 2500,
                    onClose: i(o.id)
                  },
                  s.a.createElement(Ka, {
                    onClose: i(o.id),
                    variant: o.variant,
                    message: o.text
                  })
                )
            );
          });
        },
        $a = function() {
          return {
            root: {
              display: "flex",
              flexDirection: "column",
              height: "100%",
              minHeight: "100vh",
              backgroundColor: "#f5f5f5"
            },
            container: {
              flex: "1 1 100%",
              display: "flex",
              flexDirection: "column"
            },
            mainLayoutWrapper: {
              background: 'url("/assets/img/another-background.png") no-repeat',
              backgroundPosition: "center center",
              backgroundSize: "cover",
              width: "100%",
              flex: "1 1 100%",
              display: "flex",
              alignItems: "stretch"
            }
          };
        },
        en = Object(ce.a)($a)(function(e) {
          var t = e.children,
            a = e.classes;
          return s.a.createElement(
            "div",
            { className: a.mainLayoutWrapper },
            t
          );
        }),
        tn = function(e) {
          return Ya(
            (function(e) {
              return function(t) {
                return s.a.createElement(en, null, s.a.createElement(e, t));
              };
            })(e)
          );
        },
        an = (function(e) {
          function t() {
            return (
              Object(m.a)(this, t),
              Object(p.a)(this, Object(f.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(h.a)(t, e),
            Object(d.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.dispatch(Y());
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.classes;
                  return s.a.createElement(
                    "div",
                    { className: e.root },
                    s.a.createElement(ge, null),
                    s.a.createElement(
                      ie.a,
                      { className: e.container },
                      s.a.createElement(
                        b.d,
                        null,
                        s.a.createElement(b.b, {
                          path: ae.home,
                          exact: !0,
                          component: Ya(qe)
                        }),
                        s.a.createElement(b.b, {
                          path: ae.registration,
                          component: Ya(qe)
                        }),
                        s.a.createElement(ne, {
                          permissionPath: "news",
                          path: ae.news,
                          component: tn(xt)
                        }),
                        s.a.createElement(ne, {
                          permissionPath: "chat",
                          path: ae.chat,
                          component: tn(ta)
                        }),
                        s.a.createElement(ne, {
                          path: ae.profile,
                          component: tn(ca)
                        }),
                        s.a.createElement(ne, {
                          permissionPath: "settings",
                          path: ae.adminPanel,
                          component: tn(Aa)
                        })
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(o.PureComponent),
        nn = Object(re.a)(Object(ce.a)($a), Object(g.b)())(an),
        rn = a(393),
        cn = a(392),
        on = a(94),
        sn = a(183),
        ln = Object(sn.a)({
          palette: {
            primary: { main: "#63c1a0" },
            secondary: { main: "#19857b" },
            error: { main: on.a.A400 },
            background: { default: "rgba(255, 255, 255, .87)" }
          }
        }),
        un = a(182),
        mn = Object(y.c)({
          auth: K,
          notifications: D,
          news: it,
          adminPanel: ga,
          chat: qt
        }),
        dn = function() {
          return Object(y.e)(
            mn,
            Object(y.d)(
              Object(y.a)(un.a),
              window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : function(e) {
                    return e;
                  }
            )
          );
        };
      u.a.render(
        s.a.createElement(
          cn.a,
          { theme: ln },
          s.a.createElement(rn.a, null),
          s.a.createElement(
            g.a,
            { store: dn() },
            s.a.createElement(ue.a, null, s.a.createElement(nn, null))
          )
        ),
        document.getElementById("root")
      );
    }
  },
  [[195, 1, 2]]
]);
//# sourceMappingURL=main.d3e4282a.chunk.js.map
