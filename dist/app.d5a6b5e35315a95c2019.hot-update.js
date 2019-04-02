webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ \"./node_modules/core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ \"./node_modules/core-js/modules/es7.promise.finally.js\");\n/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_BookCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BookCard.vue */ \"./src/components/BookCard.vue\");\n\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"dashboard\",\n  components: {\n    BookCard: _components_BookCard_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      data: \"\",\n      books: [],\n      tradingBooks: []\n    };\n  },\n  mounted: function mounted() {\n    this.getBooks();\n    this.$parent.isLogged();\n  },\n  sockets: {\n    connect: function connect() {\n      console.log(\"connected via dashboard\");\n    }\n  },\n  methods: {\n    getBooks: function getBooks() {\n      var _this = this;\n\n      fetch(\"/api/books\", {\n        headers: {\n          \"Accept\": \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        method: \"get\"\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        _this.data = data.allBooks;\n        data.allBooks.map(function (item) {\n          if (item.id === item.user) {\n            _this.books = [].concat(Object(_home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_this.books), [item.book]);\n          }\n        });\n        _this.tradingBooks = data.tradingBooks;\n        console.log(data.tradingBooks);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZC52dWU/OThmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx1bCBjbGFzcz1cImJvb2tzXCI+XG4gICAgPGxpIDprZXk9XCJpbmRleFwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhXCI+XG4gICAgPEJvb2tDYXJkIDp1c2VyPVwiaXRlbS51c2VyXCIgOmJvb2tzPVwiYm9va3NcIiA6dHJhZGluZ0Jvb2tzPVwidHJhZGluZ0Jvb2tzXCIgOmJvb2s9XCJpdGVtLmJvb2tcIiA6bmFtZT1cIml0ZW0ubmFtZVwiIDppZD1cIml0ZW0uaWRcIi8+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQm9va0NhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9va0NhcmQudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJkYXNoYm9hcmRcIixcbiAgY29tcG9uZW50czoge1xuICAgIEJvb2tDYXJkLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBcIlwiLFxuICAgICAgYm9va3M6IFtdLFxuICAgICAgdHJhZGluZ0Jvb2tzOiBbXVxuICAgIH07XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5nZXRCb29rcygpO1xuICAgIHRoaXMuJHBhcmVudC5pc0xvZ2dlZCgpXG4gIH0sXG4gIHNvY2tldHM6IHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0ZWQgdmlhIGRhc2hib2FyZFwiKTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRCb29rcygpIHtcbiAgICAgIGZldGNoKFwiL2FwaS9ib29rc1wiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6IFwiZ2V0XCJcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhID0gZGF0YS5hbGxCb29rcztcbiAgICAgICAgICBkYXRhLmFsbEJvb2tzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0uaWQgPT09IGl0ZW0udXNlcikge1xuICAgICAgICAgICAgICB0aGlzLmJvb2tzID0gWy4uLnRoaXMuYm9va3MsIGl0ZW0uYm9va11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMudHJhZGluZ0Jvb2tzID0gZGF0YS50cmFkaW5nQm9va3NcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnRyYWRpbmdCb29rcylcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbnVsID4gbGkge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5ib29rcyB7XG4gIHotaW5kZXg6IC0yO1xufVxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBT0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBckJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ })

})