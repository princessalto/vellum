(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/User/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/User/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  store: _store__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Create',
  $_veeValidate: {
    validator: 'new'
  },
  data: function data() {
    return {
      resource: {
        lockSlug: false,
        viewSlug: false
      }
    };
  },
  mounted: function mounted() {
    this.ckEditor();
  },
  methods: {
    slugify: function slugify($value) {
      if (!this.resource.lockSlug) {
        if (typeof $value === 'undefined') {
          this.resource.item.slug = this.$options.filters.slugify(this.resource.item.title);
        } else {
          this.resource.item.slug = this.$options.filters.slugify($value);
        }
      }
    },
    ckEditor: function ckEditor() {
      ClassicEditor.create(document.querySelector('#editor')).catch(function (error) {
        console.error(error);
      });
    },
    beforeFormSubmit: function beforeFormSubmit() {
      var _this = this;

      this.$validator.reset();
      this.$validator.validateAll().then(function (ok) {
        if (ok) {
          _this.storeData();
        }
      });
    },
    storeData: function storeData() {
      var _this2 = this;

      axios.post('/api/v1/users/store', this.resource).then(function (response) {
        _this2.$router.push({
          name: 'pages.create'
        }); //push to Create.vue view

      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/User/Create.vue?vue&type=template&id=b2cb4222&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/User/Create.vue?vue&type=template&id=b2cb4222& ***!
  \**************************************************************************************************************************************************************************************************/
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
        "v-form",
        {
          attrs: { action: "/api/v1/users/store", method: "POST" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.storeData($event)
            }
          }
        },
        [
          _c(
            "v-container",
            { attrs: { "grid-list-lg": "" } },
            [
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  _c(
                    "v-toolbar",
                    {
                      staticClass: "transparent sticky px-0",
                      attrs: { flat: "" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "headline font-weight-bold px-0" },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.__("Add User")) +
                              "\n          "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { color: "secondary", type: "submit" } },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.__("Save")) +
                              "\n          "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                { attrs: { row: "", wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { xs12: "" } },
                    [
                      _c(
                        "v-layout",
                        { attrs: { row: "", wrap: "" } },
                        [
                          _c(
                            "v-flex",
                            { attrs: { md9: "", xs12: "" } },
                            [
                              _c(
                                "v-card",
                                { attrs: { flat: "" } },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "h4",
                                        {
                                          staticClass:
                                            "mb-3 grey--text text-uppercase"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.__("Account Details")
                                              ) +
                                              "\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-layout",
                                        { attrs: { row: "", wrap: "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            {
                                              attrs: {
                                                md4: "",
                                                sm4: "",
                                                xs12: ""
                                              }
                                            },
                                            [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  "data-vv-as": _vm.trans(
                                                    "First Name"
                                                  ),
                                                  "error-messages": _vm.errors.collect(
                                                    "firstname"
                                                  ),
                                                  autofocus: "",
                                                  box: "",
                                                  label: "First Name",
                                                  name: "firstname"
                                                },
                                                model: {
                                                  value: _vm.resource.firstname,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.resource,
                                                      "firstname",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "resource.firstname"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            {
                                              attrs: {
                                                md4: "",
                                                sm4: "",
                                                xs12: ""
                                              }
                                            },
                                            [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  "data-vv-as": _vm.trans(
                                                    "Middle Name"
                                                  ),
                                                  "error-messages": _vm.errors.collect(
                                                    "middlename"
                                                  ),
                                                  autofocus: "",
                                                  box: "",
                                                  label: "Middle Name",
                                                  name: "middlename"
                                                },
                                                model: {
                                                  value:
                                                    _vm.resource.middlename,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.resource,
                                                      "middlename",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "resource.middlename"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            {
                                              attrs: {
                                                md4: "",
                                                sm4: "",
                                                xs12: ""
                                              }
                                            },
                                            [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  "data-vv-as": _vm.trans(
                                                    "Last Name"
                                                  ),
                                                  "error-messages": _vm.errors.collect(
                                                    "lastname"
                                                  ),
                                                  autofocus: "",
                                                  box: "",
                                                  label: "Last Name",
                                                  name: "lastname"
                                                },
                                                model: {
                                                  value: _vm.resource.lastname,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.resource,
                                                      "lastname",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "resource.lastname"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-layout",
                                        { attrs: { row: "", wrap: "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { sm6: "", xs12: "" } },
                                            [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  "data-vv-as": _vm.trans(
                                                    "Email Address"
                                                  ),
                                                  "error-messages": _vm.errors.collect(
                                                    "email"
                                                  ),
                                                  autofocus: "",
                                                  box: "",
                                                  label: "Email Address",
                                                  name: "email"
                                                },
                                                model: {
                                                  value: _vm.resource.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.resource,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "resource.email"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { sm6: "", xs12: "" } },
                                            [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  "data-vv-as": _vm.trans(
                                                    "Username"
                                                  ),
                                                  "error-messages": _vm.errors.collect(
                                                    "username"
                                                  ),
                                                  autofocus: "",
                                                  box: "",
                                                  label: "Username",
                                                  name: "username"
                                                },
                                                model: {
                                                  value: _vm.resource.username,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.resource,
                                                      "username",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "resource.username"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-layout",
                                        { attrs: { row: "", wrap: "" } },
                                        [
                                          _c(
                                            "v-flex",
                                            { attrs: { sm6: "", xs12: "" } },
                                            [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  "data-vv-as": _vm.trans(
                                                    "Password"
                                                  ),
                                                  "error-messages": _vm.errors.collect(
                                                    "password"
                                                  ),
                                                  autofocus: "",
                                                  box: "",
                                                  label: "Password",
                                                  name: "password",
                                                  type: "password"
                                                },
                                                model: {
                                                  value: _vm.resource.password,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.resource,
                                                      "password",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "resource.password"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-flex",
                                            { attrs: { sm6: "", xs12: "" } },
                                            [
                                              _c("v-text-field", {
                                                directives: [
                                                  {
                                                    name: "validate",
                                                    rawName: "v-validate",
                                                    value: "required",
                                                    expression: "'required'"
                                                  }
                                                ],
                                                attrs: {
                                                  "data-vv-as": _vm.trans(
                                                    "Retype Password"
                                                  ),
                                                  "error-messages": _vm.errors.collect(
                                                    "password"
                                                  ),
                                                  autofocus: "",
                                                  box: "",
                                                  label: "Retype Password",
                                                  type: "password",
                                                  name: "password_confirmation"
                                                },
                                                model: {
                                                  value: _vm.resource.password,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.resource,
                                                      "password",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "resource.password"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "h4",
                                        {
                                          staticClass:
                                            "mb-3 grey--text text-uppercase"
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(
                                                _vm.__(
                                                  "Other Background Details"
                                                )
                                              ) +
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
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { md3: "", xs12: "" } },
                            [
                              _c(
                                "v-card",
                                {
                                  staticClass: "text-xs-center",
                                  attrs: { flat: "" }
                                },
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-avatar",
                                        { attrs: { size: "180" } },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src:
                                                "https://vuetifyjs.com/apple-touch-icon-180x180.png",
                                              alt: ""
                                            }
                                          })
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/modules/User/Create.vue":
/*!*************************************!*\
  !*** ./src/modules/User/Create.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_b2cb4222___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=b2cb4222& */ "./src/modules/User/Create.vue?vue&type=template&id=b2cb4222&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./src/modules/User/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_b2cb4222___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_b2cb4222___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/User/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/User/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/modules/User/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/User/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/User/Create.vue?vue&type=template&id=b2cb4222&":
/*!********************************************************************!*\
  !*** ./src/modules/User/Create.vue?vue&type=template&id=b2cb4222& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_b2cb4222___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=b2cb4222& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/User/Create.vue?vue&type=template&id=b2cb4222&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_b2cb4222___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_b2cb4222___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);