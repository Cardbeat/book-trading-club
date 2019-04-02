webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BookCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BookCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\");\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      data: \"\",\n      selected: ''\n    };\n  },\n  props: {\n    name: String,\n    id: String,\n    book: String,\n    user: String,\n    books: Array,\n    tradingBooks: Array\n  },\n  methods: {\n    getTrade: function getTrade() {\n      if (this.selected === '') {\n        alert('please select one of your books to trade');\n      } else {\n        var newTrade = {\n          userOffer: this.user,\n          userWish: this.id,\n          bookOffer: this.selected,\n          bookWish: this.book,\n          deal: {\n            offer: true,\n            wish: false\n          }\n        };\n        fetch('/api/trade', {\n          method: 'POST',\n          headers: {\n            'Accept': 'application/json',\n            'Content-Type': 'application/json'\n          },\n          body: _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({\n            trade: newTrade\n          })\n        }).then(function () {\n          alert('your trade request has been sended');\n        });\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQm9va0NhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Cb29rQ2FyZC52dWU/MGE4NSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMiBtMTJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGJsdWUtZ3JleSBkYXJrZW4tMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IHdoaXRlLXRleHRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj57eyBib29rIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+e3tuYW1lfX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VyICE9PSBpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdHJhZGVCb3hcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInRyYWRpbmdCb29rcy5pbmNsdWRlcyhuYW1lKSA9PT0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY29sIHMxMiBtOFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInNlbGVjdGVkXCIgOmtleT1cImluZGV4XCIgdi1mb3I9XCIodXNlcmJvb2ssIGluZGV4KSBpbiBib29rc1wiPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCB2YWx1ZT1cIlwiPlBsZWFzZSBzZWxlY3Qgb25lIG9mIHlvdXIgYm9va3MgdG8gdHJhZGU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+e3t1c2VyYm9va319PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzMTIgbTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBibHVlIGxpZ2h0ZW4tMSB0cmFkZVwiIHYtb246Y2xpY2s9XCJnZXRUcmFkZVwiPnRyYWRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNvbCBzMTIgbThcIj5cbiAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGRpc2FibGVkIHYtbW9kZWw9XCJzZWxlY3RlZFwiIDprZXk9XCJpbmRleFwiIHYtZm9yPVwiKHVzZXJib29rLCBpbmRleCkgaW4gYm9va3NcIj5cbiAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgdmFsdWU9XCJcIj57e25hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzMTIgbTRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBibHVlIGxpZ2h0ZW4tMSB0cmFkZVwiIHYtb246Y2xpY2s9XCJjYW5jZWxUcmFkZVwiPmNhbmNlbCB0cmFkZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBcIlwiLFxuICAgICAgc2VsZWN0ZWQ6ICcnXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgaWQ6IFN0cmluZyxcbiAgICBib29rOiBTdHJpbmcsXG4gICAgdXNlcjogU3RyaW5nLFxuICAgIGJvb2tzOiBBcnJheSxcbiAgICB0cmFkaW5nQm9va3M6IEFycmF5XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRUcmFkZSgpIHtcbiAgICAgIGlmKHRoaXMuc2VsZWN0ZWQgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KCdwbGVhc2Ugc2VsZWN0IG9uZSBvZiB5b3VyIGJvb2tzIHRvIHRyYWRlJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VHJhZGUgPSB7XG4gICAgICAgIHVzZXJPZmZlcjogdGhpcy51c2VyLFxuICAgICAgICB1c2VyV2lzaDogdGhpcy5pZCxcbiAgICAgICAgYm9va09mZmVyOiB0aGlzLnNlbGVjdGVkLFxuICAgICAgICBib29rV2lzaDogdGhpcy5ib29rLFxuICAgICAgICBkZWFsOiB7XG4gICAgICAgICAgb2ZmZXI6IHRydWUsXG4gICAgICAgICAgd2lzaDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmV0Y2goJy9hcGkvdHJhZGUnLCB7XG4gICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0cmFkZTogbmV3VHJhZGV9KVxuICAgICAgfSkudGhlbiggKCkgPT4geyBcbiAgICAgICAgYWxlcnQoJ3lvdXIgdHJhZGUgcmVxdWVzdCBoYXMgYmVlbiBzZW5kZWQnKVxuXG4gICAgICB9IClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ucm93IHtcbiAgei1pbmRleDogLTM7XG59XG5cbnNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi50cmFkZSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi50cmFkZUJveCB7XG4gIGhlaWdodDogNDVweDtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQU5BO0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUEzQkE7QUFmQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/BookCard.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
false,

/***/ "./node_modules/core-js/modules/_is-regexp.js":
false,

/***/ "./node_modules/core-js/modules/_string-context.js":
false,

/***/ "./node_modules/core-js/modules/es6.function.name.js":
false,

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
false,

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
false

})