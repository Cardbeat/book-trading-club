webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/SignUp.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/SignUp.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\");\n/* harmony import */ var _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      data: ''\n    };\n  },\n  methods: {\n    checkForm: function checkForm(e) {\n      e.preventDefault();\n      var name = document.getElementById('name').value;\n      var city = document.getElementById('city').value;\n      var state = document.getElementById('state').value;\n      var email = document.getElementById('email').value;\n      var password = document.getElementById('password').value;\n      var data = {\n        name: name,\n        city: city,\n        state: state,\n        email: email,\n        password: password\n      };\n      console.log(data);\n      fetch('/user/register', {\n        method: 'POST',\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        body: _home_jefferson_Documents_projects_book_trading_club_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)\n      }).then(function (response) {\n        // response ? this.$router.push('/login') : alert('account didnt created')\n        response.json().then(function (data) {\n          return console.log(data);\n        });\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL1NpZ25VcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL1NpZ25VcC52dWU/NDQyOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJib3ggY2FyZFwiPlxuICAgIDxmb3JtIGlkPVwiYXBwXCIgQHN1Ym1pdD1cImNoZWNrRm9ybVwiID5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPkZ1bGwgTmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiPlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj5DaXR5OjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCI+XG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGVcIj5TdGF0ZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJzdGF0ZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCI+XG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCI+XG4gICAgICA8L3A+XG5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxuICAgICAgPC9wPlxuXG4gICAgICA8cD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudmlhclwiPlxuICAgICAgPC9wPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiAnJ1xuICAgIH1cblxufSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrRm9ybShlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpLnZhbHVlO1xuICAgICAgbGV0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlO1xuICAgICAgbGV0IHN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlJykudmFsdWU7XG4gICAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwnKS52YWx1ZTtcbiAgICAgIGxldCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpLnZhbHVlO1xuXG4gICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgY2l0eSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIGZldGNoKCcvdXNlci9yZWdpc3RlcicsIFxuICAgICAgICAgICAge21ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC50aGVuKCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgIC8vIHJlc3BvbnNlID8gdGhpcy4kcm91dGVyLnB1c2goJy9sb2dpbicpIDogYWxlcnQoJ2FjY291bnQgZGlkbnQgY3JlYXRlZCcpXG4gICAgICAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkgKVxuICAgICAgICB9KVxuICB9XG59XG5cbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcGFkZGluZzogMzBweDtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUE5QkE7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/SignUp.vue?vue&type=script&lang=js&\n");

/***/ })

})