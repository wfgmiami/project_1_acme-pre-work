/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _AcmeDB = __webpack_require__(1);

	var _AcmeDB2 = _interopRequireDefault(_AcmeDB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var users = [{ name: "Moe" }];

	var db = new _AcmeDB2.default({ users: users });

	console.log(db.users.length);
	console.log(db.users[0].id);

	db.addUser({ name: "Larry" });

	console.log(db.showUsers());
	console.log(db.findById(2).name);

	add.addUser({ name: "Curly" });
	db.removeUserById(1);

	console.log(db.users[0].name);

	db.editUser({ id: 2, name: "Laary" });

	console.log(db.showUsers());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AcmeDB = function () {
	  function AcmeDB(_ref) {
	    var users = _ref.users;

	    _classCallCheck(this, AcmeDB);

	    this.users = [{ name: users[0].name }];
	    this.users[0]["id"] = this.users.length;
	  }

	  _createClass(AcmeDB, [{
	    key: "addUser",
	    value: function addUser(user) {
	      user.id = this.users.length + 1;
	      this.users.push(user);
	    }
	  }, {
	    key: "showUsers",
	    value: function showUsers() {
	      var str = "";
	      this.users.forEach(function (item) {
	        str += item.name + " ";
	      });
	      return str.substring(0, str.length - 1);
	    }
	  }, {
	    key: "findById",
	    value: function findById(id) {
	      return this.users[id - 1];
	    }
	  }, {
	    key: "removeUserById",
	    value: function removeUserById(id) {}
	  }, {
	    key: "editUser",
	    value: function editUser() {}
	  }]);

	  return AcmeDB;
	}();

	exports.default = AcmeDB;

/***/ }
/******/ ]);