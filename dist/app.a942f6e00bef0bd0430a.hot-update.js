webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Menu.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Menu.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nul {\\n  margin: 0;\\n  padding: 0;\\n}\\nh1 {\\n  margin: 0;\\n}\\nli {\\n  list-style: none;\\n}\\na {\\n  text-decoration: none;\\n}\\nhr {\\n  border: 0;\\n  height: 0;\\n  margin: 2rem 0;\\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\\n}\\n.header {\\n  padding: 2rem 5rem 2rem 5rem;\\n}\\n.header__nav {\\n  position: relative;\\n}\\n.header__navbar {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end;\\n}\\n.header__item {\\n  padding: 1rem;\\n  position: relative;\\n}\\n.header__link .header--icon {\\n  color: gray;\\n}\\n.header__link .header--btn {\\n  top: 0;\\n  right: 0;\\n  position: absolute;\\n}\\n.header__link .header--btn:focus {\\n  outline: 0;\\n}\\n.header--icon {\\n  fill: currentcolor;\\n  width: 1.65rem;\\n  height: 1.65rem;\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n}\\n.header--btn {\\n  cursor: pointer;\\n  padding: 0;\\n  display: inline-block;\\n  border: 1px solid transparent;\\n  background-color: transparent;\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  appearance: none;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n.header__dropdown-menu {\\n  position: absolute;\\n  top: 100%;\\n  z-index: 4;\\n  right: 0;\\n  min-height: 100%;\\n  min-width: 280px;\\n  overflow-y: auto;\\n  padding: 2rem 2rem 2rem 0;\\n  margin-top: 1rem;\\n  border-radius: 8px;\\n  background-color: white;\\n  border: 1px solid #dadce0;\\n  background-clip: padding-box;\\n}\\n.header__dropdown-menu-link {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: row;\\n          flex-direction: row;\\n  -webkit-box-pack: start;\\n      -ms-flex-pack: start;\\n          justify-content: flex-start;\\n  line-height: 0;\\n  color: #3c4043;\\n  padding: 0.6rem 1.5rem 0.6rem 1.5rem;\\n  margin-bottom: 0.4rem;\\n  border-radius: 0 50px 50px 0;\\n}\\n.header__dropdown-menu-link:hover {\\n  background-color: rgba(0, 0, 0, 0.039);\\n}\\n.header__dropdown-menu-svg {\\n  padding-right: 16px;\\n}\\n.header__dropdown-menu-svg .header--icon {\\n  width: 1.4rem;\\n  height: 1.4rem;\\n}\\n.slide-fade-enter-active,\\n.slide-fade-leave-active {\\n  -webkit-transition: all 0.6s;\\n  transition: all 0.6s;\\n}\\n.slide-fade-enter,\\n.slide-fade-leave-active {\\n  opacity: 0;\\n}\\n.slide-fade-enter {\\n  -webkit-transform: translateX(31px);\\n  transform: translateX(31px);\\n}\\n.slide-fade-leave-active {\\n  -webkit-transform: translateX(-31px);\\n  transform: translateX(-31px);\\n}\\n.dropdown-enter-active,\\n.dropdown-leave-active {\\n  -webkit-transition: all 1s;\\n  transition: all 1s;\\n}\\n.dropdown-enter,\\n.dropdown-leave-to {\\n  opacity: 0;\\n  -webkit-transform: translateY(30px);\\n  transform: translateY(30px);\\n}\\n.wrapper {\\n  height: 70vh;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n      -ms-flex-direction: column;\\n          flex-direction: column;\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center;\\n}\\n.wrapper .social {\\n  margin-top: 1rem;\\n}\\n.wrapper a {\\n  padding: 0.6rem;\\n}\\n.wrapper h1 {\\n  color: #42b983;\\n  font-size: 2rem;\\n  font-weight: 300;\\n}\\n.wrapper p {\\n  color: #7f8c8d;\\n  font-weight: 100;\\n}\\n.wrapper svg {\\n  fill: currentcolor;\\n  color: #b8c2cc;\\n  width: 1.65rem;\\n  height: 1.65rem;\\n  display: -webkit-inline-box;\\n  display: -ms-inline-flexbox;\\n  display: inline-flex;\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL01lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWVudS52dWU/ZDQ0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbmgxIHtcXG4gIG1hcmdpbjogMDtcXG59XFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmhyIHtcXG4gIGJvcmRlcjogMDtcXG4gIGhlaWdodDogMDtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuLmhlYWRlciB7XFxuICBwYWRkaW5nOiAycmVtIDVyZW0gMnJlbSA1cmVtO1xcbn1cXG4uaGVhZGVyX19uYXYge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyX19uYXZiYXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5oZWFkZXJfX2l0ZW0ge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlcl9fbGluayAuaGVhZGVyLS1pY29uIHtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uaGVhZGVyX19saW5rIC5oZWFkZXItLWJ0biB7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmhlYWRlcl9fbGluayAuaGVhZGVyLS1idG46Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmhlYWRlci0taWNvbiB7XFxuICBmaWxsOiBjdXJyZW50Y29sb3I7XFxuICB3aWR0aDogMS42NXJlbTtcXG4gIGhlaWdodDogMS42NXJlbTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG4uaGVhZGVyLS1idG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmhlYWRlcl9fZHJvcGRvd24tbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICB6LWluZGV4OiA0O1xcbiAgcmlnaHQ6IDA7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgbWluLXdpZHRoOiAyODBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwYWRkaW5nOiAycmVtIDJyZW0gMnJlbSAwO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhZGNlMDtcXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxufVxcbi5oZWFkZXJfX2Ryb3Bkb3duLW1lbnUtbGluayB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgY29sb3I6ICMzYzQwNDM7XFxuICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtIDAuNnJlbSAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xcbn1cXG4uaGVhZGVyX19kcm9wZG93bi1tZW51LWxpbms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzOSk7XFxufVxcbi5oZWFkZXJfX2Ryb3Bkb3duLW1lbnUtc3ZnIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcbi5oZWFkZXJfX2Ryb3Bkb3duLW1lbnUtc3ZnIC5oZWFkZXItLWljb24ge1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGhlaWdodDogMS40cmVtO1xcbn1cXG4uc2xpZGUtZmFkZS1lbnRlci1hY3RpdmUsXFxuLnNsaWRlLWZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcXG59XFxuLnNsaWRlLWZhZGUtZW50ZXIsXFxuLnNsaWRlLWZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zbGlkZS1mYWRlLWVudGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMxcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMxcHgpO1xcbn1cXG4uc2xpZGUtZmFkZS1sZWF2ZS1hY3RpdmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMxcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMXB4KTtcXG59XFxuLmRyb3Bkb3duLWVudGVyLWFjdGl2ZSxcXG4uZHJvcGRvd24tbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG4uZHJvcGRvd24tZW50ZXIsXFxuLmRyb3Bkb3duLWxlYXZlLXRvIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcXG59XFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiA3MHZoO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLndyYXBwZXIgLnNvY2lhbCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ud3JhcHBlciBhIHtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG59XFxuLndyYXBwZXIgaDEge1xcbiAgY29sb3I6ICM0MmI5ODM7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG4ud3JhcHBlciBwIHtcXG4gIGNvbG9yOiAjN2Y4YzhkO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuLndyYXBwZXIgc3ZnIHtcXG4gIGZpbGw6IGN1cnJlbnRjb2xvcjtcXG4gIGNvbG9yOiAjYjhjMmNjO1xcbiAgd2lkdGg6IDEuNjVyZW07XFxuICBoZWlnaHQ6IDEuNjVyZW07XFxuICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Menu.vue?vue&type=style&index=0&lang=css&\n");

/***/ })

})