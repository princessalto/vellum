(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./src/store/index.js");
/* harmony import */ var vue_nestable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-nestable */ "./node_modules/vue-nestable/dist/vue-nestable.js");
/* harmony import */ var vue_nestable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_nestable__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Edit',
  components: {
    VueNestable: vue_nestable__WEBPACK_IMPORTED_MODULE_1__["VueNestable"],
    VueNestableHandle: vue_nestable__WEBPACK_IMPORTED_MODULE_1__["VueNestableHandle"]
  },
  data: function data() {
    return {
      resource: {},
      nestableItems: [{
        id: 0,
        text: 'Chapter 1'
      }, {
        id: 1,
        text: 'Chapter 2',
        children: [{
          id: 2,
          text: 'Part 1'
        }]
      }, {
        id: 3,
        text: 'Chapter 3'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=template&id=2fbcf468&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=template&id=2fbcf468& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "", "grid-list-lg": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { sm4: "", xs12: "" } },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    { staticClass: "title font-weight-bold" },
                    [
                      _vm._v(
                        "\n          " + _vm._s(_vm.__("Site")) + "\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-expansion-panel",
                        {
                          staticClass: "transparent",
                          attrs: { flat: "", focusable: "", dense: "" }
                        },
                        [
                          _c(
                            "v-expansion-panel-content",
                            { staticClass: "transparent" },
                            [
                              _c(
                                "div",
                                { attrs: { slot: "header" }, slot: "header" },
                                [_vm._v("Item")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    [
                                      _c("vue-nestable", {
                                        scopedSlots: _vm._u([
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var item = ref.item
                                              return _c(
                                                "vue-nestable-handle",
                                                { attrs: { item: item } },
                                                [
                                                  _c(
                                                    "v-card",
                                                    {
                                                      staticClass: "mb-3",
                                                      attrs: { hover: "" }
                                                    },
                                                    [
                                                      _c(
                                                        "v-list",
                                                        {
                                                          attrs: { dense: "" }
                                                        },
                                                        [
                                                          _c(
                                                            "v-list-tile",
                                                            [
                                                              _c(
                                                                "v-list-tile-title",
                                                                [
                                                                  _vm._v(
                                                                    "\n                              " +
                                                                      _vm._s(
                                                                        item.text
                                                                      ) +
                                                                      "\n                            "
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
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.nestableItems,
                                          callback: function($$v) {
                                            _vm.nestableItems = $$v
                                          },
                                          expression: "nestableItems"
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
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { sm8: "", xs12: "" } },
            [
              _c(
                "v-card",
                [
                  _c("v-card-text", [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.__("Menu Structure")) +
                        "\n        "
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/modules/Appearance/submodules/Menu/Edit.vue":
/*!*********************************************************!*\
  !*** ./src/modules/Appearance/submodules/Menu/Edit.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_2fbcf468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2fbcf468& */ "./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=template&id=2fbcf468&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_2fbcf468___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_2fbcf468___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/Appearance/submodules/Menu/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=template&id=2fbcf468&":
/*!****************************************************************************************!*\
  !*** ./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=template&id=2fbcf468& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2fbcf468___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2fbcf468& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Appearance/submodules/Menu/Edit.vue?vue&type=template&id=2fbcf468&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2fbcf468___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2fbcf468___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);