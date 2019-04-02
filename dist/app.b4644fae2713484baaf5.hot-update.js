webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BookCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BookCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\");\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ \"./node_modules/core-js/modules/es7.array.includes.js\");\n/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ \"./node_modules/core-js/modules/es6.string.includes.js\");\n/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      data: \"\",\n      selected: '',\n      isTrade: false\n    };\n  },\n  props: {\n    name: String,\n    id: String,\n    book: String,\n    user: String,\n    books: Array,\n    tradingBooks: Array\n  },\n  mounted: function mounted() {\n    this.isTrade = this.tradingBooks.includes(this.book);\n  },\n  methods: {\n    getTrade: function getTrade() {\n      var _this = this;\n\n      if (this.selected === '') {\n        alert('please select one of your books to trade');\n      } else {\n        var newTrade = {\n          userOffer: this.user,\n          userWish: this.id,\n          bookOffer: this.selected,\n          bookWish: this.book,\n          deal: {\n            offer: true,\n            wish: false\n          }\n        };\n        fetch('/api/trade', {\n          method: 'POST',\n          headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n          },\n          body: _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({\n            trade: newTrade\n          })\n        }).then(function (data) {\n          alert('your trade request has been sended');\n          _this.isTrade = true;\n        });\n      }\n    },\n    cancelTrade: function cancelTrade() {\n      var _this2 = this;\n\n      var bookTradeName = this.book;\n      fetch('/api/canceltrade', {\n        method: 'POST',\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({\n          bookTrade: bookTradeName\n        })\n      }).then(function (data) {\n        alert('trade request has been deleted');\n        _this2.isTrade = false;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQm9va0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Cb29rQ2FyZC52dWU/MGE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMiBtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJsdWUtZ3JleSBkYXJrZW4tMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IHdoaXRlLXRleHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBib29rIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3tuYW1lfX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VyICE9PSBpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdHJhZGVCb3hcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzVHJhZGUgPT09IGZhbHNlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNvbCBzMTIgbThcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJzZWxlY3RlZFwiIDprZXk9XCJpbmRleFwiIHYtZm9yPVwiKHVzZXJib29rLCBpbmRleCkgaW4gYm9va3NcIj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCJcIj5QbGVhc2Ugc2VsZWN0IG9uZSBvZiB5b3VyIGJvb2tzIHRvIHRyYWRlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPnt7dXNlcmJvb2t9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczEyIG00XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYmx1ZSBsaWdodGVuLTEgdHJhZGVcIiB2LW9uOmNsaWNrPVwiZ2V0VHJhZGVcIj50cmFkZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjb2wgczEyIG04XCI+XG4gICAgICAgICAgICAgICAgICAgPHNlbGVjdCBkaXNhYmxlZCB2LW1vZGVsPVwic2VsZWN0ZWRcIiA6a2V5PVwiaW5kZXhcIiB2LWZvcj1cIih1c2VyYm9vaywgaW5kZXgpIGluIGJvb2tzXCI+XG4gICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHZhbHVlPVwiXCI+e3tib29rfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgczEyIG00XCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYmx1ZSBsaWdodGVuLTEgdHJhZGVcIiB2LW9uOmNsaWNrPVwiY2FuY2VsVHJhZGVcIj5jYW5jZWwgdHJhZGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogXCJcIixcbiAgICAgIHNlbGVjdGVkOiAnJyxcbiAgICAgIGlzVHJhZGU6IGZhbHNlXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBib29rOiBTdHJpbmcsXG4gICAgdXNlcjogU3RyaW5nLFxuICAgIGJvb2tzOiBBcnJheSxcbiAgICB0cmFkaW5nQm9va3M6IEFycmF5XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5pc1RyYWRlID10aGlzLnRyYWRpbmdCb29rcy5pbmNsdWRlcyh0aGlzLmJvb2spXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRUcmFkZSgpIHtcbiAgICAgIGlmKHRoaXMuc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdwbGVhc2Ugc2VsZWN0IG9uZSBvZiB5b3VyIGJvb2tzIHRvIHRyYWRlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VHJhZGUgPSB7XG4gICAgICAgIHVzZXJPZmZlcjogdGhpcy51c2VyLFxuICAgICAgICB1c2VyV2lzaDogdGhpcy5pZCxcbiAgICAgICAgYm9va09mZmVyOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICBib29rV2lzaDogdGhpcy5ib29rLFxuICAgICAgICBkZWFsOiB7XG4gICAgICAgICAgb2ZmZXI6IHRydWUsXG4gICAgICAgICAgd2lzaDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmV0Y2goJy9hcGkvdHJhZGUnLCB7XG4gICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0cmFkZTogbmV3VHJhZGV9KVxuICAgICAgfSkudGhlbiggKGRhdGEpID0+IHsgXG4gICAgICAgIGFsZXJ0KCd5b3VyIHRyYWRlIHJlcXVlc3QgaGFzIGJlZW4gc2VuZGVkJylcbiAgICAgICAgIHRoaXMuaXNUcmFkZSA9IHRydWVcbiAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjYW5jZWxUcmFkZSgpIHtcbiAgICAgIGxldCBib29rVHJhZGVOYW1lID0gdGhpcy5ib29rXG4gICAgICBmZXRjaCgnL2FwaS9jYW5jZWx0cmFkZScsIHtcbiAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGJvb2tUcmFkZTogYm9va1RyYWRlTmFtZX0pXG4gICAgICB9KS50aGVuKCAoZGF0YSkgPT4geyBcbiAgICAgICAgYWxlcnQoJ3RyYWRlIHJlcXVlc3QgaGFzIGJlZW4gZGVsZXRlZCcpXG4gICAgICAgIHRoaXMuaXNUcmFkZSA9IGZhbHNlXG4gICAgICB9IClcblxuICAgIH1cbiAgfVxufTtcblxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5yb3cge1xuICB6LWluZGV4OiAtMztcbn1cblxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGhlaWdodDogMzVweDtcbn1cblxuLnRyYWRlIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnRyYWRlQm94IHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBMUNBO0FBbkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BookCard.vue?vue&type=script&lang=js&\n");

/***/ })

})