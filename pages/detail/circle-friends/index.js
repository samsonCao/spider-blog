import React from 'react';
import { Icon, Row, Col, Layout } from 'antd';
import SPHeader from '../../../components/Header';
import '../../global.less';
import '../../index.less';
import './detail.less';

const { Content } = Layout;

const cardList = [
  {
    imgAlt: 'image1',
    imgSrc: '../static/images/burger1.jpg',
    cardTitle: '四两拨千斤',
    cardDesc: '你知道哪些投资少回报高，见效快的赚钱项目？',
    tag: ['seo', '网红'],
    cardLike: '点赞90',
    cardDiscuss: '评论77',
    id: '1',
  },
];

for (let i = 0; i < 10; i++) {
  cardList.push({
    imgAlt: 'image1',
    imgSrc: '../static/images/burger1.jpg',
    cardTitle: '四两拨千斤',
    cardDesc:
      '你知道哪些投资少回报高，见效快的赚钱项目你知道哪些投资少回报高，见效快的赚钱项目你知道哪些投资少回报,而且...',
    tag: ['seo', '网红'],
    cardLike: '点赞90',
    cardDiscuss: '评论77',
    id: i + 2,
  });
}

const articleList = [];
const topicList = [];
for (let i = 0; i < 8; i++) {
  topicList.push({
    articleName: '年薪百万的成功秘笈年薪百万的成功秘笈',
    articleLink: 'xxx',
  });
}
for (let i = 0; i < 4; i++) {
  articleList.push({
    title: '72小时热门文章',
    topicList: topicList,
  });
}
// 新建./pages/_app.js文件，重写 App 模块如下所示
// https://github.com/unicodeveloper/awesome-nextjs
// seo相关的知识点】
// https://gitee.com/mirrors/next-js 中文说明
// https://www.jianshu.com/p/d9e5ce4f6404?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation

export default () => (
  <div className='sp_layout'>
    <Layout>
      <SPHeader />

      <Content className='sp_main'>
        <Row>
          <Col span={16} className='sp_main-col-top'>
            <Content>
              <h1 className='sp_detail_title'>
                学会写朋友圈营销文案，让你的产品多卖100万的转化秘籍
              </h1>
              <div className='sp_detail_tips'>
                发布时间: 2019年10月03日 信息来源：互联网
              </div>
              <h3 className='sp_detail_title-little'>直接上干货</h3>
              {/*<div className='sp_detail_img'>*/}
              {/*  <img src='../static/detail/money.jpeg' alt='赚钱引流' />*/}
              {/*</div>*/}
              <div>
                <div className='sp_detail_text'>
                  <p className='sp_detail_text-title'>1. 朋友圈基本设置原则</p>
                  <p>打造朋友圈的基础营销内容。</p>
                </div>
                <div className="sp_detail_text">
                  <p className='sp_detail_text-title'>名字：</p>
                  <p>1.	与产品相关。比如：尿布大王、设计师小草、杭州新房咨询等等</p>
                  <p>2.	使用“真实名字”。 比如：尿布大王-袁远</p>
                </div>
                <div className='sp_detail_text'>
                  <p className='sp_detail_text-title'>头像：</p>
                  <p>使用个人生活照即可，切忌不要使用明星照片，艺术照。</p>
                </div>
                <div className='sp_detail_text'>
                  <p className='sp_detail_text-title'>封面：</p>
                  <p>要放客户见证类的图片，增加信任度，展现专业度等，比如：客户送锦旗的合集照片；在正规厂家提货的合照；自己公司的门店前台……</p>
                </div>

                <div className='sp_detail_text'>
                  <p className='sp_detail_text-title'>2. 发布具有营销性质的朋友圈</p>
                  <p>1.	发布个人生活类内容，占比30% 可以展现你的兴趣，你的自拍，你烧的菜，你和你的家人等等生活性的东西。</p>
                  <p className='sp_detail_tips'>原因：人和人之间感情的建立是从『袒露秘密』开始的，把自己私人的一面展现出来，平常人不愿意被别人看到的一面展示到朋友圈，可以快速建立信任，有了信任转化起来就会轻松很多，至少会减少对你推销行为的抵触感。</p>
                </div>
                <div className='sp_detail_text'>
                  <p>2.	有技巧的发布产品相关朋友圈 </p>
                  <p>牢记这三点：</p>
                  <p>硬广，已经是过去式了</p>
                  <p>不要发硬广</p>
                  <p>如果非要发，偶尔发一次。</p>
                </div>
                <div className='sp_detail_text'>
                  <b>举个例子：假如你是卖房的，你的朋友圈该怎么发</b>
                </div>
                <div className='sp_detail_text'>
                  问题1：他是买房的，还是在买其他东西？
                  <p>他的确是要购买一个房子。但更看重买了房子后对他生活的改变或者说，能给他带来什么？</p>
                  <p>1.	中年人，更看重教育。（小学，中学，高中）</p>
                  <p>2.	青年人，更注重环境。（地铁，高架，噪音，水景）</p>
                  <p>3.	老年人，更注重养生。（医疗，安静，气候合适，物业服务周到等）</p>
                </div>
                <div className='sp_detail_text'>
                  问题2：他担心什么？
                  <p>1.	房子烂尾</p>
                  <p>2.	物业垃圾</p>
                  <p>3.	绿化太差</p>
                  <p>4.	价格太贵（如何让他觉得值，而不是单纯的告诉他不买就卖不起了？）</p>
                </div>
                <div className='sp_detail_text'>
                  问题3：如何才能让他放心？
                  <p>1.	客户见证，xxx喜提一套，房源充足。</p>
                  <p>2.	客户见证，xxx喜提一套xx平，中间楼层不多了。</p>
                  <p>3. Xxx号楼，已经盖到xx层。</p>
                  <p>3.	老年人，更注重养生。（医疗，安静，气候合适，物业服务周到等）</p>
                </div>
                <div className='sp_detail_text'>
                  这些问题，才是你发朋友圈的重点！
                  当然，特价房的硬广还是要有的，毕竟促销还是很有效的。
                </div>
                <div className='sp_detail_text'>
                  每个行业，文案的内容肯定重点都是不同的。
                  买纸尿布的要解决的问题，是孩子用了会不会屁股红，
                  健康不健康等。
                </div>
                <div className='sp_detail_text'>
                  <p>装修的要解决的问题是建材，施工质量，售后等。</p>
                </div>
                <h4 className='sp_detail_text'>看过以后，还是不会？</h4>
                <p className="sp_detail_text"><a className="sp_detail_link-line" href="">定制我的朋友圈文案，299元/个</a></p>
                <p className='sp_detail_text'>
                  蜘蛛课堂
                  是一家专业的网络营销平台，关注于搜索营销（SEO快排，百度新闻稿件发布，）移动营销（小红书推广，抖音营销）在业界有巨大的影响力.
                </p>
              </div>
            </Content>
          </Col>
          <Col span={8} className='sp_main-col-top right-hide'>
            <div className='sp_main_right_contactUs'>
              <h4 className='contact_title'>交流合作</h4>
              <div className='contactUs-content'>
                <p className='contactUs-content-tips'>联系我们</p>
                <p className='contactUs-content-tips'>QQ: 1213123</p>
                <p className='contactUs-content-tips'>weixin:12312</p>
                <div className='contactUs-content-qrCode'>
                  <img src='../static/images/WechatIMG1872.jpeg' alt='' />
                  <p className='contactUs-content-tips'>扫描二维码关注我们</p>
                </div>
              </div>
            </div>
            {articleList.map((item, index) => {
              return (
                <div className='article-hot' key={item.title + index}>
                  <h3 className='article-hot-title'>{item.title}</h3>
                  <div className='article-hot-list'>
                    {item.topicList.map((itemTopic, index) => {
                      return (
                        <p
                          className='article-hot-item ellipse'
                          key={itemTopic.articleName + index}
                        >
                          <a href='' className='article-hot-item-link'>
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
          justify='space-around'
          type='flex'
          style={{ background: '#f9f9f9' }}
        >
          <Col md={8} xs={20} style={{ height: '40px', display: 'flex' }}>
            <div style={{ margin: 'auto 0px' }}>&copy; 2019 蜘蛛课堂</div>
          </Col>
          <Col md={8} xs={20}>
            <div
              style={{
                margin: 'auto',
                height: '40px',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Icon
                style={{ margin: 'auto 10px', fontSize: 20, color: '#52c41a' }}
                type='wechat'
              />
              <Icon
                style={{ margin: 'auto 10px', fontSize: 20, color: '#52c41a' }}
                type='qq'
              />
              <Icon
                style={{ margin: 'auto 10px', fontSize: 20, color: '#52c41a' }}
                type='google'
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  </div>
);
