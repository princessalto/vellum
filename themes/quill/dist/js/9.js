(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Page/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Page/Create.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  store: _store__WEBPACK_IMPORTED_MODULE_0__["default"],
  name: 'Create',
  $_veeValidate: {
    validator: 'new'
  },
  computed: {
    slug: function slug() {
      var slug = this.sanitizeTitle(this.title);
      return slug;
    }
  },
  data: function data() {
    return {
      resource: {
        lockSlug: false,
        viewSlug: false,
        title: '',
        slug: ''
      }
    };
  },
  mounted: function mounted() {
    this.ckEditor();
  },
  methods: {
    sanitizeTitle: function sanitizeTitle(title) {
      var slug = ""; // Change to lower case

      var titleLower = title.toLowerCase(); // Letter "e"

      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e'); // Letter "a"

      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a'); // Letter "o"

      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o'); // Letter "u"

      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u'); // Letter "d"

      slug = slug.replace(/đ/gi, 'd'); // Trim the last whitespace

      slug = slug.replace(/\s*$/g, ''); // Change whitespace to "-"

      slug = slug.replace(/\s+/g, '-');
      return slug;
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

      axios.post('/api/v1/pages/store', this.resource).then(function (response) {
        // console.log(this.resource, 'data')
        _this2.$router.go({
          name: 'pages.create'
        }); // push to Create.vue view

      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Page/Create.vue?vue&type=template&id=7cb9c5ab&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/modules/Page/Create.vue?vue&type=template&id=7cb9c5ab& ***!
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
          attrs: { method: "POST" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.storeData($event)
            }
          }
        },
        [
          _c(
            "v-card",
            {
              staticClass: "sticky emphasis--bg toolbar-mobile",
              attrs: { flat: "" }
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
                        "v-btn",
                        {
                          staticClass: "transparent",
                          attrs: {
                            flat: "",
                            exact: "",
                            to: { name: "pages.index" }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "subheading primary--text" },
                            [
                              _c(
                                "v-icon",
                                {
                                  staticClass: "primary--text",
                                  attrs: { size: "16" }
                                },
                                [_vm._v("mdi-arrow-left")]
                              ),
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.__("All Pages")) +
                                  "\n            "
                              )
                            ],
                            1
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-layout",
                    {
                      attrs: { row: "", wrap: "", "justify-space-between": "" }
                    },
                    [
                      _c("h1", { staticClass: "display-1" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.__("Create Page")) +
                            "\n          "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-0",
                          attrs: { color: "secondary", type: "submit" }
                        },
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
              )
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
                { attrs: { row: "", wrap: "" } },
                [
                  _c(
                    "v-flex",
                    { attrs: { md9: "", xs12: "" } },
                    [
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "h1",
                                { staticClass: "body-2 font-weight-bold mb-2" },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.__("Page Title")) +
                                      "\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { attrs: { id: "post" } }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.title,
                                      expression: "title"
                                    }
                                  ],
                                  attrs: {
                                    type: "text",
                                    id: "title",
                                    name: "title",
                                    placeholder: "Enter post title"
                                  },
                                  domProps: { value: _vm.title },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.title = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("p", { attrs: { id: "slug" } }, [
                                  _vm._v("http://tatthien.com/"),
                                  _c("span", [_vm._v(_vm._s(_vm.slug))])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "h1",
                                { staticClass: "body-2 font-weight-bold mb-2" },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.__("Page Content")) +
                                      "\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  "data-vv-as": _vm.trans("Page Content"),
                                  box: "",
                                  autofocus: "",
                                  "single-line": "",
                                  name: "body",
                                  row: "9"
                                },
                                model: {
                                  value: _vm.resource.body,
                                  callback: function($$v) {
                                    _vm.$set(_vm.resource, "body", $$v)
                                  },
                                  expression: "resource.body"
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
                    "v-flex",
                    { attrs: { md3: "", xs12: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass:
                            "transparent upload-image emphasis--border",
                          attrs: { height: "200" }
                        },
                        [
                          _c("v-card-text", [
                            _c(
                              "h1",
                              { staticClass: "body-2 font-weight-bold mb-2" },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.__("Site Logo")) +
                                    "\n              "
                                )
                              ]
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

/***/ "./src/modules/Page/Create.vue":
/*!*************************************!*\
  !*** ./src/modules/Page/Create.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_7cb9c5ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=7cb9c5ab& */ "./src/modules/Page/Create.vue?vue&type=template&id=7cb9c5ab&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./src/modules/Page/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_7cb9c5ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_7cb9c5ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/modules/Page/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/modules/Page/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/modules/Page/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Page/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/modules/Page/Create.vue?vue&type=template&id=7cb9c5ab&":
/*!********************************************************************!*\
  !*** ./src/modules/Page/Create.vue?vue&type=template&id=7cb9c5ab& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7cb9c5ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=7cb9c5ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/modules/Page/Create.vue?vue&type=template&id=7cb9c5ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7cb9c5ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_7cb9c5ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);