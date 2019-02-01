(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/Test.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/Test.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_Course__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/Course */ "./src/modules/Test/partials/Course.vue");
/* harmony import */ var _partials_MetaCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/MetaCard */ "./src/modules/Test/partials/MetaCard.vue");
/* harmony import */ var _partials_Playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/Playlist */ "./src/modules/Test/partials/Playlist.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Test',
  components: {
    Course: _partials_Course__WEBPACK_IMPORTED_MODULE_0__["default"],
    MetaCard: _partials_MetaCard__WEBPACK_IMPORTED_MODULE_1__["default"],
    Playlist: _partials_Playlist__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tab: null
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Course.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/partials/Course.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var pause = function pause(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Course',
  data: function data() {
    return {
      active: [],
      open: [],
      users: []
    };
  },
  computed: {
    items: function items() {
      return [{
        name: 'Chapter 1',
        children: this.users
      }];
    },
    selected: function selected() {
      if (!this.active.length) return undefined;
      var id = this.active[0];
      return this.users.find(function (user) {
        return user.id === id;
      });
    }
  },
  methods: {
    fetchUsers: function () {
      var _fetchUsers = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(item) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return pause(400);

              case 2:
                return _context.abrupt("return", fetch('https://jsonplaceholder.typicode.com/users').then(function (response) {
                  return response.json();
                }).then(function (json) {
                  var _item$children;

                  return (_item$children = item.children).push.apply(_item$children, _toConsumableArray(json));
                }).catch(function (err) {
                  return console.warn(err);
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchUsers(_x) {
        return _fetchUsers.apply(this, arguments);
      }

      return fetchUsers;
    }()
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/MetaCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/partials/MetaCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MetaCard',
  data: function data() {
    return {
      category: 1
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Playlist.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/partials/Playlist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Playlist',
  data: function data() {
    return {
      active: [],
      avatar: null,
      users: [],
      courses: [{
        done: false,
        title: 'Foobar',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro totam nisi nostrum ipsam? Inventore provident at accusamus aut, optio cum reprehenderit explicabo sed in. Odio rem enim asperiores voluptatem adipisci.'
      }],
      title: null,
      body: null
    };
  },
  computed: {
    items: function items() {
      return [{
        name: 'Chapter 1',
        children: this.users
      }];
    },
    selected: function selected() {
      if (!this.active.length) return undefined;
      var id = this.active[0];
      return this.users.find(function (user) {
        return user.id === id;
      });
    }
  },
  methods: {
    create: function create() {
      this.courses.push({
        done: false,
        title: this.title,
        body: this.body
      });
      this.title = null;
      this.body = null;
    },
    save: function save() {
      this.snack = true;
      this.snackColor = 'success';
      this.snackText = 'Data saved';
    },
    cancel: function cancel() {
      this.snack = true;
      this.snackColor = 'error';
      this.snackText = 'Canceled';
    },
    open: function open() {
      this.snack = true;
      this.snackColor = 'info';
      this.snackText = 'Dialog opened';
    },
    close: function close() {
      console.log('Dialog closed');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/Test.vue?vue&type=template&id=05630d44&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/Test.vue?vue&type=template&id=05630d44& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "v-toolbar",
        { staticClass: "sticky emphasis--medium", attrs: { flat: "" } },
        [
          _c("v-toolbar-title", [
            _vm._v("\n      " + _vm._s(_vm.__("Create Course")) + "\n    ")
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-btn", { attrs: { depressed: "", color: "secondary" } }, [
            _vm._v("Save")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            {
              attrs: {
                row: "",
                wrap: "",
                "justify-center": "",
                "align-center": ""
              }
            },
            [
              _c(
                "v-flex",
                { attrs: { md10: "", xs12: "" } },
                [
                  _c(
                    "v-tabs",
                    { attrs: { color: "transparent" } },
                    [
                      _c("v-tabs-slider", { attrs: { color: "secondary" } }),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { key: "course", attrs: { ripple: "", id: "course" } },
                        [_c("strong", [_vm._v(_vm._s(_vm.trans("Course")))])]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        { key: "meta", attrs: { ripple: "", id: "meta" } },
                        [_c("strong", [_vm._v(_vm._s(_vm.trans("Meta")))])]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab",
                        {
                          key: "playlist",
                          attrs: { ripple: "", id: "playlist" }
                        },
                        [_c("strong", [_vm._v(_vm._s(_vm.trans("Playlist")))])]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { attrs: { href: "#course" } },
                        [_c("course")],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-tab-item", { ref: "#meta" }, [_c("meta-card")], 1),
                      _vm._v(" "),
                      _c(
                        "v-tab-item",
                        { ref: "#playlist" },
                        [_c("playlist")],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Course.vue?vue&type=template&id=768f2e48&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/partials/Course.vue?vue&type=template&id=768f2e48& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "v-card",
        { staticClass: "mt-3 mb-3", attrs: { flat: "" } },
        [
          _c(
            "v-card-text",
            [
              _c(
                "v-layout",
                { attrs: { "justify-space-between": "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs5: "" } },
                    [
                      _c("v-treeview", {
                        attrs: {
                          active: _vm.active,
                          items: _vm.items,
                          "load-children": _vm.fetchUsers,
                          open: _vm.open,
                          activatable: "",
                          "active-class": "primary--text text--lighten-2",
                          "open-on-click": "",
                          transition: "",
                          "expand-icon": "mdi-chevron-down"
                        },
                        on: {
                          "update:active": function($event) {
                            _vm.active = $event
                          },
                          "update:open": function($event) {
                            _vm.open = $event
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prepend",
                            fn: function(ref) {
                              var item = ref.item
                              var active = ref.active
                              return !item.children
                                ? _c(
                                    "v-icon",
                                    {
                                      attrs: { color: active ? "primary" : "" }
                                    },
                                    [_vm._v("mdi-play-box-outline")]
                                  )
                                : _vm._e()
                            }
                          }
                        ])
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    { attrs: { "d-flex": "", "text-xs-center": "" } },
                    [
                      _c(
                        "v-scroll-y-transition",
                        { attrs: { mode: "out-in" } },
                        [
                          !_vm.selected
                            ? _c(
                                "div",
                                {
                                  staticClass: "grey--text",
                                  staticStyle: { "align-self": "center" }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(_vm.__("Select an item to Edit")) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _c(
                                "v-card",
                                {
                                  key: _vm.selected.id,
                                  staticClass: "pt-4 mx-auto",
                                  attrs: { flat: "", "max-width": "400" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          box: "",
                                          id: "name",
                                          label: "Part Title",
                                          name: "name"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          box: "",
                                          id: "icon",
                                          label: "Icon",
                                          name: "icon"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-textarea", {
                                        attrs: {
                                          box: "",
                                          id: "body",
                                          label: "Part Description",
                                          name: "body"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            depressed: "",
                                            color: "primary"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(_vm.__("Save")) +
                                              "\n                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/MetaCard.vue?vue&type=template&id=4c88e036&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/partials/MetaCard.vue?vue&type=template&id=4c88e036& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "v-layout",
        { attrs: { row: "" } },
        [
          _c(
            "v-flex",
            { attrs: { md8: "", xs12: "" } },
            [
              _c(
                "v-card",
                { staticClass: "mt-3" },
                [
                  _c(
                    "v-card-text",
                    [
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          small: "",
                          "append-icon": "search",
                          "hide-details": "",
                          label: "Search Category",
                          outline: ""
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-radio-group",
                        {
                          model: {
                            value: _vm.category,
                            callback: function($$v) {
                              _vm.category = $$v
                            },
                            expression: "category"
                          }
                        },
                        _vm._l(10, function(n) {
                          return _c("v-radio", {
                            key: n,
                            attrs: { label: "Category " + n, value: n }
                          })
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { md4: "", xs12: "" } },
            [
              _c(
                "v-card",
                {
                  staticClass: "mb-3 pa-4 transparent featured-image__card",
                  attrs: { hover: "", flat: "", height: "160" }
                },
                [
                  _c(
                    "v-layout",
                    {
                      attrs: {
                        column: "",
                        "fill-height": "",
                        "justify-center": "",
                        "align-center": ""
                      }
                    },
                    [
                      _c("student-icon", {
                        attrs: { width: "80", height: "80" }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "grey--text text--darken-1" }, [
                        _vm._v(_vm._s(_vm.__("Click to add cover photo")))
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Playlist.vue?vue&type=template&id=f0a3de5a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Test/partials/Playlist.vue?vue&type=template&id=f0a3de5a& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    [
      _c(
        "v-card",
        { staticClass: "mt-3" },
        [
          _c("v-card-title", [
            _vm._v("\n      " + _vm._s(_vm.__("Chapter")) + "\n    ")
          ]),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-text-field", {
                attrs: {
                  label: "Chapter Number",
                  value: "Chapter 1",
                  outline: ""
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Chapter Title", outline: "" }
              }),
              _vm._v(" "),
              _c("v-textarea", {
                attrs: { label: "Chapter Description", outline: "" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _vm._v("\n        " + _vm._s(_vm.__("Part")) + "\n      ")
              ]),
              _vm._v(" "),
              _c(
                "v-card",
                { attrs: { flat: "", color: "emphasis--medium" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-card",
                        { attrs: { flat: "" } },
                        [
                          _c(
                            "v-card-text",
                            [
                              _vm.courses.length > 0
                                ? [
                                    _c(
                                      "v-slide-y-transition",
                                      {
                                        staticClass: "py-0",
                                        attrs: { group: "" }
                                      },
                                      [
                                        _vm._l(_vm.courses, function(item, i) {
                                          return [
                                            _c(
                                              "v-card-text",
                                              { key: i + "-" + item.text },
                                              [
                                                _c(
                                                  "v-layout",
                                                  {
                                                    attrs: {
                                                      row: "",
                                                      "align-center": ""
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-avatar",
                                                      {
                                                        staticClass: "mr-3",
                                                        attrs: { size: "60" }
                                                      },
                                                      [
                                                        _c("img", {
                                                          attrs: {
                                                            src:
                                                              "https://images.unsplash.com/photo-1541603617355-5f53b42522f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b7f9c25a0cce01cea8650d30a588629&auto=format&fit=crop&w=375&q=80",
                                                            alt: ""
                                                          }
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c("div", [
                                                      _c(
                                                        "p",
                                                        {
                                                          staticClass:
                                                            "pb-0 mb-0"
                                                        },
                                                        [
                                                          _c("strong", {
                                                            domProps: {
                                                              innerHTML: _vm._s(
                                                                item.title
                                                              )
                                                            }
                                                          })
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c("p", {
                                                        staticClass:
                                                          "pb-0 mb-0",
                                                        domProps: {
                                                          innerHTML: _vm._s(
                                                            item.body
                                                          )
                                                        }
                                                      })
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("v-spacer"),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-tooltip",
                                                      { attrs: { bottom: "" } },
                                                      [
                                                        _c(
                                                          "v-btn",
                                                          {
                                                            attrs: {
                                                              slot: "activator",
                                                              icon: ""
                                                            },
                                                            slot: "activator"
                                                          },
                                                          [
                                                            _c(
                                                              "v-icon",
                                                              {
                                                                attrs: {
                                                                  small: "",
                                                                  color:
                                                                    "secondary"
                                                                }
                                                              },
                                                              [_vm._v("edit")]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm.__("Edit")
                                                            )
                                                          )
                                                        ])
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-edit-dialog",
                                              {
                                                key: i,
                                                attrs: {
                                                  "return-value": item.name,
                                                  large: "",
                                                  lazy: "",
                                                  persistent: ""
                                                },
                                                on: {
                                                  "update:returnValue": function(
                                                    $event
                                                  ) {
                                                    _vm.$set(
                                                      item,
                                                      "name",
                                                      $event
                                                    )
                                                  },
                                                  cancel: _vm.cancel,
                                                  close: _vm.close,
                                                  open: _vm.open,
                                                  save: _vm.save
                                                }
                                              },
                                              [
                                                _c("div", [
                                                  _vm._v(_vm._s(item.name))
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "mt-3 title",
                                                    attrs: { slot: "input" },
                                                    slot: "input"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.__("Update"))
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    slot: "input",
                                                    label: "Edit",
                                                    "single-line": "",
                                                    counter: "",
                                                    autofocus: ""
                                                  },
                                                  slot: "input",
                                                  model: {
                                                    value: item.name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.name"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        })
                                      ],
                                      2
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("v-divider", { key: _vm.title }),
                          _vm._v(" "),
                          _c("v-card-text", [
                            _c(
                              "form",
                              {
                                attrs: { action: "" },
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.create($event)
                                  }
                                }
                              },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      { attrs: { md4: "", xs12: "" } },
                                      [
                                        _c(
                                          "v-card",
                                          {
                                            staticClass:
                                              "mb-3 pa-4 transparent featured-image__card",
                                            attrs: {
                                              hover: "",
                                              flat: "",
                                              height: "100%"
                                            }
                                          },
                                          [
                                            _c(
                                              "v-layout",
                                              {
                                                attrs: {
                                                  column: "",
                                                  "fill-height": "",
                                                  "justify-center": "",
                                                  "align-center": ""
                                                }
                                              },
                                              [
                                                _c("student-icon", {
                                                  attrs: {
                                                    width: "60",
                                                    height: "60"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "grey--text text--darken-1"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.__(
                                                          "Add interactive content"
                                                        )
                                                      )
                                                    )
                                                  ]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      { attrs: { md8: "", xs12: "" } },
                                      [
                                        _c(
                                          "v-card",
                                          { attrs: { flat: "" } },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                required: "",
                                                label: "Part Title",
                                                value: "Part 1",
                                                outline: ""
                                              },
                                              model: {
                                                value: _vm.title,
                                                callback: function($$v) {
                                                  _vm.title = $$v
                                                },
                                                expression: "title"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-textarea", {
                                              attrs: {
                                                label: "Part Description",
                                                outline: "",
                                                "hide-details": ""
                                              },
                                              model: {
                                                value: _vm.body,
                                                callback: function($$v) {
                                                  _vm.body = $$v
                                                },
                                                expression: "body"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "mt-3" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "ma-0",
                                        attrs: {
                                          type: "submit",
                                          color: "secondary",
                                          outline: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(_vm.trans("Add Part")) +
                                            "\n                  "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c("v-btn", { attrs: { outline: "", color: "secondary" } }, [
                    _vm._v(_vm._s(_vm.__("Add Chapter")))
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/modules/Test/Test.vue":
/*!***********************************!*\
  !*** ./src/modules/Test/Test.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Test_vue_vue_type_template_id_05630d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Test.vue?vue&type=template&id=05630d44& */ "./src/modules/Test/Test.vue?vue&type=template&id=05630d44&");
/* harmony import */ var _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Test.vue?vue&type=script&lang=js& */ "./src/modules/Test/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Test_vue_vue_type_template_id_05630d44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Test_vue_vue_type_template_id_05630d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/Test/Test.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/Test/Test.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/modules/Test/Test.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/Test.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/Test/Test.vue?vue&type=template&id=05630d44&":
/*!******************************************************************!*\
  !*** ./src/modules/Test/Test.vue?vue&type=template&id=05630d44& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_05630d44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Test.vue?vue&type=template&id=05630d44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/Test.vue?vue&type=template&id=05630d44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_05630d44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Test_vue_vue_type_template_id_05630d44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/modules/Test/partials/Course.vue":
/*!**********************************************!*\
  !*** ./src/modules/Test/partials/Course.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Course_vue_vue_type_template_id_768f2e48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Course.vue?vue&type=template&id=768f2e48& */ "./src/modules/Test/partials/Course.vue?vue&type=template&id=768f2e48&");
/* harmony import */ var _Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Course.vue?vue&type=script&lang=js& */ "./src/modules/Test/partials/Course.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Course_vue_vue_type_template_id_768f2e48___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Course_vue_vue_type_template_id_768f2e48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/Test/partials/Course.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/Test/partials/Course.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/modules/Test/partials/Course.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Course.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Course.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/Test/partials/Course.vue?vue&type=template&id=768f2e48&":
/*!*****************************************************************************!*\
  !*** ./src/modules/Test/partials/Course.vue?vue&type=template&id=768f2e48& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_template_id_768f2e48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Course.vue?vue&type=template&id=768f2e48& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Course.vue?vue&type=template&id=768f2e48&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_template_id_768f2e48___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Course_vue_vue_type_template_id_768f2e48___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/modules/Test/partials/MetaCard.vue":
/*!************************************************!*\
  !*** ./src/modules/Test/partials/MetaCard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MetaCard_vue_vue_type_template_id_4c88e036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MetaCard.vue?vue&type=template&id=4c88e036& */ "./src/modules/Test/partials/MetaCard.vue?vue&type=template&id=4c88e036&");
/* harmony import */ var _MetaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MetaCard.vue?vue&type=script&lang=js& */ "./src/modules/Test/partials/MetaCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MetaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MetaCard_vue_vue_type_template_id_4c88e036___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MetaCard_vue_vue_type_template_id_4c88e036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/Test/partials/MetaCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/Test/partials/MetaCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/modules/Test/partials/MetaCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MetaCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/MetaCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/Test/partials/MetaCard.vue?vue&type=template&id=4c88e036&":
/*!*******************************************************************************!*\
  !*** ./src/modules/Test/partials/MetaCard.vue?vue&type=template&id=4c88e036& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaCard_vue_vue_type_template_id_4c88e036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MetaCard.vue?vue&type=template&id=4c88e036& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/MetaCard.vue?vue&type=template&id=4c88e036&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaCard_vue_vue_type_template_id_4c88e036___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MetaCard_vue_vue_type_template_id_4c88e036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/modules/Test/partials/Playlist.vue":
/*!************************************************!*\
  !*** ./src/modules/Test/partials/Playlist.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playlist_vue_vue_type_template_id_f0a3de5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playlist.vue?vue&type=template&id=f0a3de5a& */ "./src/modules/Test/partials/Playlist.vue?vue&type=template&id=f0a3de5a&");
/* harmony import */ var _Playlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playlist.vue?vue&type=script&lang=js& */ "./src/modules/Test/partials/Playlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Playlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Playlist_vue_vue_type_template_id_f0a3de5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Playlist_vue_vue_type_template_id_f0a3de5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/Test/partials/Playlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/Test/partials/Playlist.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/modules/Test/partials/Playlist.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Playlist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Playlist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/Test/partials/Playlist.vue?vue&type=template&id=f0a3de5a&":
/*!*******************************************************************************!*\
  !*** ./src/modules/Test/partials/Playlist.vue?vue&type=template&id=f0a3de5a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playlist_vue_vue_type_template_id_f0a3de5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Playlist.vue?vue&type=template&id=f0a3de5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Test/partials/Playlist.vue?vue&type=template&id=f0a3de5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playlist_vue_vue_type_template_id_f0a3de5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playlist_vue_vue_type_template_id_f0a3de5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);