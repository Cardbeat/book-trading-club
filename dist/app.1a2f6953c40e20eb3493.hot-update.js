webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      data: '',\n      name: ''\n    };\n  },\n  beforeMount: function beforeMount() {\n    this.getBooks();\n  },\n  sockets: {\n    connect: function connect() {\n      console.log('socket client connected');\n    }\n  },\n  methods: {\n    getBooks: function getBooks() {\n      var _this = this;\n\n      fetch('/api/books', {\n        headers: {\n          'Accept': 'application/json',\n          'Content-Type': 'application/json'\n        },\n        method: 'get'\n      }).then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        _this.data = data;\n        _this.name = data[0].user;\n        console.log(data);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0Rhc2hib2FyZC52dWU/OThmYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAge3tuYW1lfX1cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6ICcnLFxuICAgICAgbmFtZTogJydcbiAgICB9XG4gIH0sXG4gIGJlZm9yZU1vdW50KCkge1xuICB0aGlzLmdldEJvb2tzKClcbiAgfSxcbiAgc29ja2V0czoge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc29ja2V0IGNsaWVudCBjb25uZWN0ZWQnKVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldEJvb2tzKCkge1xuICAgICAgZmV0Y2goJy9hcGkvYm9va3MnLHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5uYW1lID0gZGF0YVswXS51c2VyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICB9KVxuICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Dashboard.vue?vue&type=script&lang=js&\n");

/***/ })

})