module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/firebase.js":
/*!****************************!*\
  !*** ./config/firebase.js ***!
  \****************************/
/*! exports provided: firebaseConfig, firebase, auth, db */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "firebase", function() { return firebase__WEBPACK_IMPORTED_MODULE_0___default.a; });

const firebaseConfig = {
  apiKey: "AIzaSyD4rizpOOyspWvs212PJQsYw_wkaSczOOM",
  authDomain: "astrojeevans" + ".firebaseapp.com",
  databaseURL: "https://" + "astrojeevans" + ".firebaseio.com",
  projectId: "astrojeevans",
  storageBucket: "astrojeevans" + ".appspot.com",
  messagingSenderId: "327750059870",
  appId: "1:323858709665:web:77cccdaefbc85c219944e0"
};

try {
  firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const app = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.app();
const auth = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.auth();
const db = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.firestore();

console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");

/***/ }),

/***/ "./firebase/context.js":
/*!*****************************!*\
  !*** ./firebase/context.js ***!
  \*****************************/
/*! exports provided: AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/firebase */ "./config/firebase.js");
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\ASTRO\\firebase\\context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const authContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
function AuthProvider({
  children
}) {
  const auth = useProvideAuth();
  return __jsx(authContext.Provider, {
    value: auth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, children);
}
const useAuth = () => {
  console.log("useAuth");
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(authContext);
};

function useProvideAuth() {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const getCurrentUser = () => {
    var _auth$currentUser;

    ((_auth$currentUser = _config_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser) === null || _auth$currentUser === void 0 ? void 0 : _auth$currentUser.uid) ? _config_firebase__WEBPACK_IMPORTED_MODULE_1__["db"].collection("Users").doc(_config_firebase__WEBPACK_IMPORTED_MODULE_1__["auth"].currentUser.uid).get().then(doc => {
      setUser(doc.data());
      setLoading(false);
    }) : setLoading(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const unsubscribe = _config_firebase__WEBPACK_IMPORTED_MODULE_1__["firebase"].auth().onAuthStateChanged(() => getCurrentUser());
    return () => unsubscribe();
  }, []);
  return {
    user,
    loading,
    setUser
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/context */ "./firebase/context.js");
var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\ASTRO\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_firebase_context__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2ZpcmViYXNlLmpzIiwid2VicGFjazovLy8uL2ZpcmViYXNlL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUFBfSUQiLCJmaXJlYmFzZSIsImluaXRpYWxpemVBcHAiLCJlcnIiLCJ0ZXN0IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiYXBwIiwiYXV0aCIsImRiIiwiZmlyZXN0b3JlIiwibG9nIiwibmFtZSIsImF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUHJvdmlkZUF1dGgiLCJ1c2VBdXRoIiwidXNlQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldEN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJjb2xsZWN0aW9uIiwiZG9jIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJ1c2VFZmZlY3QiLCJ1bnN1YnNjcmliZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FB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QUksQ0FBQ2tCLFdBQUwsQ0FBaUJDLEdBRnhCLEVBR0dHLEdBSEgsR0FJR0MsSUFKSCxDQUlTRixHQUFELElBQVM7QUFDYlIsYUFBTyxDQUFDUSxHQUFHLENBQUNHLElBQUosRUFBRCxDQUFQO0FBQ0FSLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsS0FQSCxDQURKLEdBU0lBLFVBQVUsQ0FBQyxLQUFELENBVGQ7QUFVRCxHQVhEOztBQWFBUyx5REFBUyxDQUFDLE1BQU07QUFDZCxVQUFNQyxXQUFXLEdBQUduQyx5REFBUSxDQUN6QlMsSUFEaUIsR0FFakIyQixrQkFGaUIsQ0FFRSxNQUFNVixjQUFjLEVBRnRCLENBQXBCO0FBR0EsV0FBTyxNQUFNUyxXQUFXLEVBQXhCO0FBQ0QsR0FMUSxFQUtOLEVBTE0sQ0FBVDtBQU9BLFNBQU87QUFDTGQsUUFESztBQUVMRyxXQUZLO0FBR0xGO0FBSEssR0FBUDtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUVBOztBQUVBLFNBQVNlLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxTQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0Q7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xuXG5leHBvcnQgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCArIFwiLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDpcbiAgICBcImh0dHBzOi8vXCIgK1xuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQgK1xuICAgIFwiLmZpcmViYXNlaW8uY29tXCIsXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCArIFwiLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjMyNzc1MDA1OTg3MFwiLFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxufTtcblxudHJ5IHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG59IGNhdGNoIChlcnIpIHtcbiAgaWYgKCEvYWxyZWFkeSBleGlzdHMvLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZpcmViYXNlIGluaXRpYWxpemF0aW9uIGVycm9yXCIsIGVyci5zdGFjayk7XG4gIH1cbn1cblxuY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwKCk7XG5jb25zdCBhdXRoID0gZmlyZWJhc2UuYXV0aCgpO1xuY29uc3QgZGIgPSBmaXJlYmFzZS5maXJlc3RvcmUoKTtcblxuZXhwb3J0IHsgZmlyZWJhc2UsIGF1dGgsIGRiIH07XG5jb25zb2xlLmxvZyhhcHAubmFtZSA/IFwiRmlyZWJhc2UgTW9kZSBBY3RpdmF0ZWQhXCIgOiBcIkZpcmViYXNlIG5vdCB3b3JraW5nIDooXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGZpcmViYXNlLCBhdXRoLCBkYiB9IGZyb20gXCIuLi9jb25maWcvZmlyZWJhc2VcIjtcblxuY29uc3QgYXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBhdXRoID0gdXNlUHJvdmlkZUF1dGgoKTtcbiAgcmV0dXJuIDxhdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17YXV0aH0+e2NoaWxkcmVufTwvYXV0aENvbnRleHQuUHJvdmlkZXI+O1xufVxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwidXNlQXV0aFwiKTtcbiAgcmV0dXJuIHVzZUNvbnRleHQoYXV0aENvbnRleHQpO1xufTtcbmZ1bmN0aW9uIHVzZVByb3ZpZGVBdXRoKCkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSAoKSA9PiB7XG4gICAgYXV0aC5jdXJyZW50VXNlcj8udWlkXG4gICAgICA/IGRiXG4gICAgICAgICAgLmNvbGxlY3Rpb24oXCJVc2Vyc1wiKVxuICAgICAgICAgIC5kb2MoYXV0aC5jdXJyZW50VXNlci51aWQpXG4gICAgICAgICAgLmdldCgpXG4gICAgICAgICAgLnRoZW4oKGRvYykgPT4ge1xuICAgICAgICAgICAgc2V0VXNlcihkb2MuZGF0YSgpKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgIH0pXG4gICAgICA6IHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBmaXJlYmFzZVxuICAgICAgLmF1dGgoKVxuICAgICAgLm9uQXV0aFN0YXRlQ2hhbmdlZCgoKSA9PiBnZXRDdXJyZW50VXNlcigpKTtcbiAgICByZXR1cm4gKCkgPT4gdW5zdWJzY3JpYmUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBsb2FkaW5nLFxuICAgIHNldFVzZXIsXG4gIH07XG59XG4iLCJpbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vZmlyZWJhc2UvY29udGV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=