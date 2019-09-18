import React from "react";
import App, { Container } from "next/app";
import { Icon, Row, Col, Layout, Carousel } from "antd";
import Link from "next/link";
import SPHeader from "../components/Header";
import "./global.less";
import "./index.less";
import "./detail.less";

const { Content } = Layout;


const cardList = [
  {
    imgAlt: "image1",
    imgSrc: "../static/images/burger1.jpg",
    cardTitle: "四两拨千斤",
    cardDesc: "你知道哪些投资少回报高，见效快的赚钱项目？",
    tag: ["seo", "网红"],
    cardLike: "点赞90",
    cardDiscuss: "评论77",
    id: "1"
  }
];

for (let i = 0; i < 20; i++) {
  cardList.push({
    imgAlt: "image1",
    imgSrc: "../static/images/burger1.jpg",
    cardTitle: "四两拨千斤",
    cardDesc:
      "你知道哪些投资少回报高，见效快的赚钱项目你知道哪些投资少回报高，见效快的赚钱项目你知道哪些投资少回报,而且...",
    tag: ["seo", "网红"],
    cardLike: "点赞90",
    cardDiscuss: "评论77",
    id: i + 2
  });
}

const articleList = [];
const topicList = [];
for (let i = 0; i < 15; i++) {
  topicList.push({
    articleName: "年薪百万的成功秘笈年薪百万的成功秘笈",
    articleLink: "xxx"
  });
}
for (let i = 0; i < 8; i++) {
  articleList.push({
    title: "72小时热门文章",
    topicList: topicList
  });
}
// 新建./pages/_app.js文件，重写 App 模块如下所示
// https://github.com/unicodeveloper/awesome-nextjs
// seo相关的知识点】
// https://gitee.com/mirrors/next-js 中文说明
// https://www.jianshu.com/p/d9e5ce4f6404?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation

export default () => (
  <div className="sp_layout">
    <Layout>
      <SPHeader />

      <Content className="sp_main">
        <Row>
          <Col span={16} className="sp_main-col-top">
            <Content>
              <h1 className='sp_detail_title'>公司业务主要经营小红书  抖音  新闻营销  百度快排 微博 微信公众账号营销</h1>
              <div className="sp_detail_time">发布时间: 2018年07月19日 信息来源：互联网</div>
              <div className="sp_detail_img"><img src='../static/detail/money.jpeg' alt="赚钱引流"/></div>
              <div>
                <div className='sp_detail_text'>
                  <b>抖音推广：</b>
                  <p>抖音推广目前是非常火爆的营销方式之一，日活量高达1.5亿人次，很多企业都会选择抖音推广，而且软文课堂的抖音推广价格性价比特别的高.目前我们的红人也特别的多，而且还含有抖音的CPC推广方式</p>
                </div>
                <div className='sp_detail_text'>
                  <b>小红书推广：</b>
                  <p>平台都被封了，不说了</p>
                </div>
                <div className='sp_detail_text'>
                  <b>微信微博：</b>
                  <p>价格比较公道可以说全网价格最为优势.可以帮客户代做方案.</p>
                </div>
                <div className='sp_detail_text'>
                  <b>百度快排：</b>
                  <p>只要你有网站，想让网站有一个非常不错的排名我们这边都可以做.让网站的权重指数不断的提升，从而促使流量不断上升，让品牌和产品销售不再困难</p>
                </div>
                <div className='sp_detail_text'>
                  <b>信息流广告：</b>
                  <p>目前主要运作腾讯朋友圈信息流广告</p>
                </div>
                <div className='sp_detail_text'>
                  <b>新闻通稿营销发布：</b>
                  <p>中国网，中华网，等国家知名新闻媒体一稿通发，让企业品牌活跃在各大搜索引擎之上，让负面内容无法占据百度搜索引擎页面</p>
                </div>
                <p className='sp_detail_text'>蜘蛛课堂 是一家专业的网络营销平台，关注于搜索营销（SEO快排，百度新闻稿件发布，）移动营销（小红书推广，抖音营销）在业界有巨大的影响力.</p>
              </div>
            </Content>
          </Col>
          <Col span={8} className="sp_main-col-top right-hide">
            <div className="sp_main_right_contactUs">
              <h4 className="contact_title">交流合作</h4>
              <div className="contactUs-content">
                <p className="contactUs-content-tips">联系我们</p>
                <p className="contactUs-content-tips">QQ: 1213123</p>
                <p className="contactUs-content-tips">weixin:12312</p>
                <div className="contactUs-content-qrCode">
                  <img src="../static/images/WechatIMG1872.jpeg" alt="" />
                  <p className="contactUs-content-tips">扫描二维码关注我们</p>
                </div>
              </div>
            </div>
            {articleList.map((item, index) => {
              return (
                <div className="article-hot" key={item.title + index}>
                  <h3 className="article-hot-title">{item.title}</h3>
                  <div className="article-hot-list">
                    {item.topicList.map((itemTopic, index) => {
                      return (
                        <p
                          className="article-hot-item ellipse"
                          key={itemTopic.articleName + index}
                        >
                          <a href="" className="article-hot-item-link">
                            {itemTopic.articleName}
                            12312312312312312222222222222222
                          </a>
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>

        <Row
          justify="space-around"
          type="flex"
          style={{ background: "#f9f9f9" }}
        >
          <Col md={8} xs={20} style={{ height: "40px", display: "flex" }}>
            <div style={{ margin: "auto 0px" }}>
              &copy; 2019 蜘蛛课堂
            </div>
          </Col>
          <Col md={8} xs={20}>
            <div
              style={{
                margin: "auto",
                height: "40px",
                display: "flex",
                justifyContent: "flex-end"
              }}
            >
              <Icon
                style={{ margin: "auto 10px", fontSize: 20, color: '#52c41a' }}
                type="wechat"
              />
              <Icon
                style={{ margin: "auto 10px", fontSize: 20, color: '#52c41a' }}
                type="qq"
              />
              <Icon
                style={{ margin: "auto 10px", fontSize: 20, color: '#52c41a' }}
                type="google"
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  </div>
);
