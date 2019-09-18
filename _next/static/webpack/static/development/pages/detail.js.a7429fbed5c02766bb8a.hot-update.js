webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row/style */ "./node_modules/antd/lib/row/style/index.js");
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/col/style */ "./node_modules/antd/lib/col/style/index.js");
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _global_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./global.less */ "./pages/global.less");
/* harmony import */ var _global_less__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_global_less__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.less */ "./pages/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _detail_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detail.less */ "./pages/detail.less");
/* harmony import */ var _detail_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_detail_less__WEBPACK_IMPORTED_MODULE_14__);








var _jsxFileName = "/Users/samcao/myWebFIle/spider-blog/pages/detail.js";







var Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a.Content;
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
  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Content, {
    className: "sp_main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 16,
    className: "sp_main-col-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
    className: "sp_detail_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u516C\u53F8\u4E1A\u52A1\u4E3B\u8981\u7ECF\u8425\u5C0F\u7EA2\u4E66  \u6296\u97F3  \u65B0\u95FB\u8425\u9500  \u767E\u5EA6\u5FEB\u6392 \u5FAE\u535A \u5FAE\u4FE1\u516C\u4F17\u8D26\u53F7\u8425\u9500"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_time",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u53D1\u5E03\u65F6\u95F4: 2018\u5E7407\u670819\u65E5 \u4FE1\u606F\u6765\u6E90\uFF1A\u4E92\u8054\u7F51"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "/static/detail/money.jpeg",
    alt: "\u8D5A\u94B1\u5F15\u6D41",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u6296\u97F3\u63A8\u5E7F\uFF1A"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "\u6296\u97F3\u63A8\u5E7F\u76EE\u524D\u662F\u975E\u5E38\u706B\u7206\u7684\u8425\u9500\u65B9\u5F0F\u4E4B\u4E00\uFF0C\u65E5\u6D3B\u91CF\u9AD8\u8FBE1.5\u4EBF\u4EBA\u6B21\uFF0C\u5F88\u591A\u4F01\u4E1A\u90FD\u4F1A\u9009\u62E9\u6296\u97F3\u63A8\u5E7F\uFF0C\u800C\u4E14\u8F6F\u6587\u8BFE\u5802\u7684\u6296\u97F3\u63A8\u5E7F\u4EF7\u683C\u6027\u4EF7\u6BD4\u7279\u522B\u7684\u9AD8.\u76EE\u524D\u6211\u4EEC\u7684\u7EA2\u4EBA\u4E5F\u7279\u522B\u7684\u591A\uFF0C\u800C\u4E14\u8FD8\u542B\u6709\u6296\u97F3\u7684CPC\u63A8\u5E7F\u65B9\u5F0F")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u5C0F\u7EA2\u4E66\u63A8\u5E7F\uFF1A"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\u5E73\u53F0\u90FD\u88AB\u5C01\u4E86\uFF0C\u4E0D\u8BF4\u4E86")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u5FAE\u4FE1\u5FAE\u535A\uFF1A"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\u4EF7\u683C\u6BD4\u8F83\u516C\u9053\u53EF\u4EE5\u8BF4\u5168\u7F51\u4EF7\u683C\u6700\u4E3A\u4F18\u52BF.\u53EF\u4EE5\u5E2E\u5BA2\u6237\u4EE3\u505A\u65B9\u6848.")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\u767E\u5EA6\u5FEB\u6392\uFF1A"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u53EA\u8981\u4F60\u6709\u7F51\u7AD9\uFF0C\u60F3\u8BA9\u7F51\u7AD9\u6709\u4E00\u4E2A\u975E\u5E38\u4E0D\u9519\u7684\u6392\u540D\u6211\u4EEC\u8FD9\u8FB9\u90FD\u53EF\u4EE5\u505A.\u8BA9\u7F51\u7AD9\u7684\u6743\u91CD\u6307\u6570\u4E0D\u65AD\u7684\u63D0\u5347\uFF0C\u4ECE\u800C\u4FC3\u4F7F\u6D41\u91CF\u4E0D\u65AD\u4E0A\u5347\uFF0C\u8BA9\u54C1\u724C\u548C\u4EA7\u54C1\u9500\u552E\u4E0D\u518D\u56F0\u96BE")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\u4FE1\u606F\u6D41\u5E7F\u544A\uFF1A"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u76EE\u524D\u4E3B\u8981\u8FD0\u4F5C\u817E\u8BAF\u670B\u53CB\u5708\u4FE1\u606F\u6D41\u5E7F\u544A")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_detail_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "\u65B0\u95FB\u901A\u7A3F\u8425\u9500\u53D1\u5E03\uFF1A"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "\u4E2D\u56FD\u7F51\uFF0C\u4E2D\u534E\u7F51\uFF0C\u7B49\u56FD\u5BB6\u77E5\u540D\u65B0\u95FB\u5A92\u4F53\u4E00\u7A3F\u901A\u53D1\uFF0C\u8BA9\u4F01\u4E1A\u54C1\u724C\u6D3B\u8DC3\u5728\u5404\u5927\u641C\u7D22\u5F15\u64CE\u4E4B\u4E0A\uFF0C\u8BA9\u8D1F\u9762\u5185\u5BB9\u65E0\u6CD5\u5360\u636E\u767E\u5EA6\u641C\u7D22\u5F15\u64CE\u9875\u9762")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "sp_detail_text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u8718\u86DB\u8BFE\u5802 \u662F\u4E00\u5BB6\u4E13\u4E1A\u7684\u7F51\u7EDC\u8425\u9500\u5E73\u53F0\uFF0C\u5173\u6CE8\u4E8E\u641C\u7D22\u8425\u9500\uFF08SEO\u5FEB\u6392\uFF0C\u767E\u5EA6\u65B0\u95FB\u7A3F\u4EF6\u53D1\u5E03\uFF0C\uFF09\u79FB\u52A8\u8425\u9500\uFF08\u5C0F\u7EA2\u4E66\u63A8\u5E7F\uFF0C\u6296\u97F3\u8425\u9500\uFF09\u5728\u4E1A\u754C\u6709\u5DE8\u5927\u7684\u5F71\u54CD\u529B.")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    span: 8,
    className: "sp_main-col-top right-hide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "sp_main_right_contactUs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
    className: "contact_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\u4EA4\u6D41\u5408\u4F5C"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "contactUs-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "contactUs-content-tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "\u8054\u7CFB\u6211\u4EEC"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "contactUs-content-tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "QQ: 1213123"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "contactUs-content-tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "weixin:12312"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "contactUs-content-qrCode",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
    src: "../static/images/WechatIMG1872.jpeg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "contactUs-content-tips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "\u626B\u63CF\u4E8C\u7EF4\u7801\u5173\u6CE8\u6211\u4EEC")))), articleList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "article-hot",
      key: item.title + index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
      className: "article-hot-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, item.title), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "article-hot-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, item.topicList.map(function (itemTopic, index) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "article-hot-item ellipse",
        key: itemTopic.articleName + index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "",
        className: "article-hot-item-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, itemTopic.articleName, "12312312312312312222222222222222"));
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_3___default.a, {
    justify: "space-around",
    type: "flex",
    style: {
      background: "#f9f9f9"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    md: 8,
    xs: 20,
    style: {
      height: "40px",
      display: "flex"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      margin: "auto 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "\xA9 2019 \u8718\u86DB\u8BFE\u5802")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_5___default.a, {
    md: 8,
    xs: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    style: {
      margin: "auto",
      height: "40px",
      display: "flex",
      justifyContent: "flex-end"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "auto 10px",
      fontSize: 20,
      color: '#52c41a'
    },
    type: "wechat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "auto 10px",
      fontSize: 20,
      color: '#52c41a'
    },
    type: "qq",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "auto 10px",
      fontSize: 20,
      color: '#52c41a'
    },
    type: "google",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })))))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/detail")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=detail.js.a7429fbed5c02766bb8a.hot-update.js.map