webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BookCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BookCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\");\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      data: \"\",\n      selected: '',\n      isTrade: false,\n      bookOffer: ''\n    };\n  },\n  props: {\n    name: String,\n    id: String,\n    book: String,\n    user: String,\n    books: Array,\n    tradingBooks: Array\n  },\n  mounted: function mounted() {\n    if (this.tradingBooks.bookWish.includes(this.book)) {\n      this.isTrade = true;\n    }\n\n    console.log(this.bookOffer);\n  },\n  methods: {\n    getTrade: function getTrade() {\n      var _this = this;\n\n      if (this.selected === '') {\n        alert('please select one of your books to trade');\n      } else {\n        var newTrade = {\n          userOffer: this.user,\n          userWish: this.id,\n          bookOffer: this.selected,\n          bookWish: this.book,\n          deal: {\n            offer: true,\n            wish: false\n          }\n        };\n        fetch('/api/trade', {\n          method: 'POST',\n          headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n          },\n          body: _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({\n            trade: newTrade\n          })\n        }).then(function (data) {\n          alert('your trade request has been sended');\n          _this.isTrade = true;\n        });\n      }\n    },\n    cancelTrade: function cancelTrade() {\n      var _this2 = this;\n\n      var bookTradeName = this.book;\n      fetch('/api/canceltrade', {\n        method: 'POST',\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({\n          bookTrade: bookTradeName\n        })\n      }).then(function (data) {\n        alert('trade request has been deleted');\n        _this2.isTrade = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQm9va0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Cb29rQ2FyZC52dWU/MGE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMiBtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJsdWUtZ3JleSBkYXJrZW4tMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IHdoaXRlLXRleHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBib29rIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3tuYW1lfX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VyICE9PSBpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdHJhZGVCb3hcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzVHJhZGUgPT09IGZhbHNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNvbCBzMTIgbThcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzZWxlY3RlZFwiIDprZXk9XCJpbmRleFwiIHYtZm9yPVwiKHVzZXJib29rLCBpbmRleCkgaW4gYm9va3NcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCJcIj5QbGVhc2Ugc2VsZWN0IG9uZSBvZiB5b3VyIGJvb2tzIHRvIHRyYWRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPnt7dXNlcmJvb2t9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczEyIG00XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYmx1ZSBsaWdodGVuLTEgdHJhZGVcIiB2LW9uOmNsaWNrPVwiZ2V0VHJhZGVcIj50cmFkZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjb2wgczEyIG04XCI+XG4gICAgICAgICAgICAgICAgICAgPHNlbGVjdCBkaXNhYmxlZCB2LW1vZGVsPVwic2VsZWN0ZWRcIiA6a2V5PVwiaW5kZXhcIiB2LWZvcj1cIih1c2VyYm9vaywgaW5kZXgpIGluIGJvb2tzXCI+XG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHZhbHVlPVwiXCI+e3tib29rT2ZmZXJ9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzMTIgbTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBibHVlIGxpZ2h0ZW4tMSB0cmFkZVwiIHYtb246Y2xpY2s9XCJjYW5jZWxUcmFkZVwiPmNhbmNlbCB0cmFkZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBcIlwiLFxuICAgICAgc2VsZWN0ZWQ6ICcnLFxuICAgICAgaXNUcmFkZTogZmFsc2UsXG4gICAgICBib29rT2ZmZXI6ICcnXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBib29rOiBTdHJpbmcsXG4gICAgdXNlcjogU3RyaW5nLFxuICAgIGJvb2tzOiBBcnJheSxcbiAgICB0cmFkaW5nQm9va3M6IEFycmF5XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgaWYodGhpcy50cmFkaW5nQm9va3MuYm9va1dpc2guaW5jbHVkZXModGhpcy5ib29rKSkge1xuICAgICAgdGhpcy5pc1RyYWRlID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvb2tPZmZlcilcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldFRyYWRlKCkge1xuICAgICAgaWYodGhpcy5zZWxlY3RlZCA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoJ3BsZWFzZSBzZWxlY3Qgb25lIG9mIHlvdXIgYm9va3MgdG8gdHJhZGUnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgIGxldCBuZXdUcmFkZSA9IHtcbiAgICAgICAgdXNlck9mZmVyOiB0aGlzLnVzZXIsXG4gICAgICAgIHVzZXJXaXNoOiB0aGlzLmlkLFxuICAgICAgICBib29rT2ZmZXI6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIGJvb2tXaXNoOiB0aGlzLmJvb2ssXG4gICAgICAgIGRlYWw6IHtcbiAgICAgICAgICBvZmZlcjogdHJ1ZSxcbiAgICAgICAgICB3aXNoOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmZXRjaCgnL2FwaS90cmFkZScsIHtcbiAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRyYWRlOiBuZXdUcmFkZX0pXG4gICAgICB9KS50aGVuKCAoZGF0YSkgPT4geyBcbiAgICAgICAgYWxlcnQoJ3lvdXIgdHJhZGUgcmVxdWVzdCBoYXMgYmVlbiBzZW5kZWQnKVxuICAgICAgICAgdGhpcy5pc1RyYWRlID0gdHJ1ZVxuICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuICAgIGNhbmNlbFRyYWRlKCkge1xuICAgICAgbGV0IGJvb2tUcmFkZU5hbWUgPSB0aGlzLmJvb2tcbiAgICAgIGZldGNoKCcvYXBpL2NhbmNlbHRyYWRlJywge1xuICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYm9va1RyYWRlOiBib29rVHJhZGVOYW1lfSlcbiAgICAgIH0pLnRoZW4oIChkYXRhKSA9PiB7IFxuICAgICAgICBhbGVydCgndHJhZGUgcmVxdWVzdCBoYXMgYmVlbiBkZWxldGVkJylcbiAgICAgICAgdGhpcy5pc1RyYWRlID0gZmFsc2VcbiAgICAgIH0gKVxuXG4gICAgfVxuICB9XG59O1xuXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLnJvdyB7XG4gIHotaW5kZXg6IC0zO1xufVxuXG5zZWxlY3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4udHJhZGUge1xuICB3aWR0aDogODAlO1xufVxuXG4udHJhZGVCb3gge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBMUNBO0FBdkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BookCard.vue?vue&type=script&lang=js&\n");

/***/ })

})