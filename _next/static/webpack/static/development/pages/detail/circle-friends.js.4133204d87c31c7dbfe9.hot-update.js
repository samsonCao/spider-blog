webpackHotUpdate("static/development/pages/detail/circle-friends.js",{

/***/ "./components/RightArticleList/index.js":
/*!**********************************************!*\
  !*** ./components/RightArticleList/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./components/RightArticleList/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/samcao/myWebFIle/spider-blog/components/RightArticleList/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var articleList = [];
var topicList = [];

for (var i = 0; i < 8; i++) {
  topicList.push({
    articleName: '888年薪百万的成功秘笈年薪百万的成功秘笈',
    articleLink: 'xxx'
  });
}

for (var _i = 0; _i < 4; _i++) {
  articleList.push({
    title: '72小时热门文章',
    topicList: topicList
  });
}

var RightArticleList = function RightArticleList() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, articleList.map(function (item, index) {
    return __jsx("div", {
      className: "article-hot",
      key: item.title + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("h3", {
      className: "article-hot-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, item.title), __jsx("div", {
      className: "article-hot-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, item.topicList.map(function (itemTopic, index) {
      return __jsx("p", {
        className: "article-hot-item ellipse",
        key: itemTopic.articleName + index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("a", {
        href: "",
        className: "article-hot-item-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, itemTopic.articleName, "12312312312312312222222222222222"));
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RightArticleList);

/***/ })

})
//# sourceMappingURL=circle-friends.js.4133204d87c31c7dbfe9.hot-update.js.map