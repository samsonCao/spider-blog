module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);



var linkList = [{
  href: "/index",
  title: "首页"
}, {
  href: "xxx",
  title: "seo文案"
}, {
  href: "xxx",
  title: "信息流文案"
}, {
  href: "xxx",
  title: "sem文案"
}, {
  href: "xxx",
  title: "落地页文案"
}, {
  href: "xxx",
  title: "子弹头"
}];

var SPHeader = function SPHeader() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "sp_header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "sp_content"
  }, linkList.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "sp_content-item",
      key: item.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.href
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.title)));
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (SPHeader);

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row/style");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col/style");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout/style");

/***/ }),
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7);
/* harmony import */ var _global_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);
/* harmony import */ var _global_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_global_less__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_15__);
















var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a.Content;
var bannerList = [{
  imgSrc: "/static/images/big-images.jpg",
  alt: "xxx"
}, {
  imgSrc: "/static/images/big-images-2.jpg",
  alt: "xxx"
}, {
  imgSrc: "/static/images/big-images-3.jpg",
  alt: "xxx"
}];
var cardList = [{
  imgAlt: "image1",
  imgSrc: "/static/images/burger1.jpg",
  cardTitle: "四两拨千斤",
  cardDesc: "你知道哪些投资少回报高，见效快的赚钱项目？",
  tag: ["seo", "网红"],
  cardLike: "点赞90",
  cardDiscuss: "评论77",
  id: "1"
}];

for (var i = 0; i < 20; i++) {
  cardList.push({
    imgAlt: "image1",
    imgSrc: "/static/images/burger1.jpg",
    cardTitle: "四两拨千斤",
    cardDesc: "你知道哪些投资少回报高，见效快的赚钱项目你知道哪些投资少回报高，见效快的赚钱项目你知道哪些投资少回报,而且...",
    tag: ["seo", "网红"],
    cardLike: "点赞90",
    cardDiscuss: "评论77",
    id: i + 2
  });
}

var articleList = [];
var topicList = [];

for (var _i = 0; _i < 15; _i++) {
  topicList.push({
    articleName: "年薪百万的成功秘笈年薪百万的成功秘笈",
    articleLink: "xxx"
  });
}

for (var _i2 = 0; _i2 < 8; _i2++) {
  articleList.push({
    title: "72小时热门文章",
    topicList: topicList
  });
} // 新建./pages/_app.js文件，重写 App 模块如下所示
// https://github.com/unicodeveloper/awesome-nextjs
// seo相关的知识点】
// https://gitee.com/mirrors/next-js 中文说明
// https://www.jianshu.com/p/d9e5ce4f6404?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "sp_layout"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Content, {
    className: "sp_main"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 16,
    className: "sp_main-col-top"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "sp_carousel_main"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    autoplay: true
  }, bannerList.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      key: item.imgSrc
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
      src: item.imgSrc,
      alt: item.alt
    }));
  }))), cardList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
      gutter: 16,
      key: item.cardDesc + index
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
      span: 6,
      md: 24,
      sm: 24,
      xs: 24
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "sp_card"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "sp_card-img"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
      alt: item.imgAlt,
      style: {
        width: "100%"
      },
      src: item.imgSrc
    })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "sp_card-meta"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "sp_card-title"
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
      href: "./detail?id=".concat(item.id),
      as: process.env.BACKEND_URL + './detail?id=${item.id}`'
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
      href: ""
    }, item.cardTitle))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "sp_card_item-desc"
    }, item.cardDesc), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "sp_card_item-tips"
    }, item.tag && item.tag.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "sp_card_item-tag",
        key: index + item
      }, item);
    }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "sp_card_item-tips-time"
    }, "2019-12-11")))))));
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 8,
    className: "sp_main-col-top right-hide"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "sp_main_right_contactUs"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h4", {
    className: "contact_title"
  }, "\u4EA4\u6D41\u5408\u4F5C"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "contactUs-content"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "contactUs-content-tips"
  }, "\u8054\u7CFB\u6211\u4EEC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "contactUs-content-tips"
  }, "QQ: 1213123"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "contactUs-content-tips"
  }, "weixin:12312"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "contactUs-content-qrCode"
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
    src: "../static/images/WechatIMG1872.jpeg",
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "contactUs-content-tips"
  }, "\u626B\u63CF\u4E8C\u7EF4\u7801\u5173\u6CE8\u6211\u4EEC")))), articleList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "article-hot",
      key: item.title + index
    }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
      className: "article-hot-title"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
      className: "article-hot-list"
    }, item.topicList.map(function (itemTopic, index) {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "article-hot-item ellipse",
        key: itemTopic.articleName + index
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "",
        className: "article-hot-item-link"
      }, itemTopic.articleName, "12312312312312312222222222222222"));
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    justify: "space-around",
    type: "flex",
    style: {
      background: "#f9f9f9"
    }
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    md: 8,
    xs: 20,
    style: {
      height: "40px",
      display: "flex"
    }
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    style: {
      margin: "auto 0px"
    }
  }, "\xA9 2019 \u8718\u86DB\u8BFE\u5802")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    md: 8,
    xs: 20
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    style: {
      margin: "auto",
      height: "40px",
      display: "flex",
      justifyContent: "flex-end"
    }
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "auto 10px",
      fontSize: 20,
      color: '#52c41a'
    },
    type: "wechat"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "auto 10px",
      fontSize: 20,
      color: '#52c41a'
    },
    type: "qq"
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "auto 10px",
      fontSize: 20,
      color: '#52c41a'
    },
    type: "google"
  })))))));
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel/style");

/***/ })
/******/ ]);