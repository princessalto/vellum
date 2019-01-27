(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Settings/Branding.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Settings/Branding.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Branding',
  data: function data() {
    return {
      resource: {}
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/v1/settings/branding').then(function (response) {
      _this.resource = response.data;
      console.log(_this.resource);
    });
  },
  methods: {
    saveBranding: function saveBranding() {
      var _this2 = this;

      axios.post('/api/v1/settings/store', this.resource).then(function (response) {
        console.log(_this2.resource, 'data');

        _this2.$router.push({
          name: 'settings.branding'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Settings/Branding.vue?vue&type=template&id=627ed1d6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Settings/Branding.vue?vue&type=template&id=627ed1d6& ***!
  \********************************************************************************************************************************************************************************************************/
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
        "v-container",
        { attrs: { "grid-list-lg": "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("div", { staticClass: "mb-4" }, [
                    _c("h1", { staticClass: "headline font-weight-bold" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.__("Branding")) +
                          "\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-form",
                    {
                      attrs: { method: "POST" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.saveBranding($event)
                        }
                      }
                    },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  box: "",
                                  label: "Site Name",
                                  name: "site_title"
                                },
                                model: {
                                  value: _vm.resource.site_title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.resource, "site_title", $$v)
                                  },
                                  expression: "resource.site_title"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  box: "",
                                  label: "Site Tagline",
                                  name: "site_tagline"
                                },
                                model: {
                                  value: _vm.resource.site_tagline,
                                  callback: function($$v) {
                                    _vm.$set(_vm.resource, "site_tagline", $$v)
                                  },
                                  expression: "resource.site_tagline"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  box: "",
                                  label: "Site Author",
                                  name: "site_author"
                                },
                                model: {
                                  value: _vm.resource.site_author,
                                  callback: function($$v) {
                                    _vm.$set(_vm.resource, "site_author", $$v)
                                  },
                                  expression: "resource.site_author"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  box: "",
                                  label: "Site Email",
                                  name: "site_email"
                                },
                                model: {
                                  value: _vm.resource.site_email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.resource, "site_email", $$v)
                                  },
                                  expression: "resource.site_email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  box: "",
                                  label: "Year Established",
                                  name: "site_year"
                                },
                                model: {
                                  value: _vm.resource.site_year,
                                  callback: function($$v) {
                                    _vm.$set(_vm.resource, "site_year", $$v)
                                  },
                                  expression: "resource.site_year"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "secondary",
                                    depressed: "",
                                    type: "submit"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.__("Save")) +
                                      "\n              "
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/modules/Settings/Branding.vue":
/*!*******************************************!*\
  !*** ./src/modules/Settings/Branding.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Branding_vue_vue_type_template_id_627ed1d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Branding.vue?vue&type=template&id=627ed1d6& */ "./src/modules/Settings/Branding.vue?vue&type=template&id=627ed1d6&");
/* harmony import */ var _Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Branding.vue?vue&type=script&lang=js& */ "./src/modules/Settings/Branding.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Branding_vue_vue_type_template_id_627ed1d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Branding_vue_vue_type_template_id_627ed1d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/Settings/Branding.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/Settings/Branding.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/modules/Settings/Branding.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Branding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Settings/Branding.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/Settings/Branding.vue?vue&type=template&id=627ed1d6&":
/*!**************************************************************************!*\
  !*** ./src/modules/Settings/Branding.vue?vue&type=template&id=627ed1d6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_template_id_627ed1d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Branding.vue?vue&type=template&id=627ed1d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Settings/Branding.vue?vue&type=template&id=627ed1d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_template_id_627ed1d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_template_id_627ed1d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);