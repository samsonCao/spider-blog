import React from 'react';
import { Icon, Row, Col, Layout, Carousel } from 'antd';
import Link from 'next/link';
import SPHeader from '../components/Header';
import './global.less';
import './index.less';

const { Content } = Layout;

const bannerList = [
  {
    imgSrc: '../../spider-blog/static/images/big-images.jpg',
    alt: 'xxx',
  },
  {
    imgSrc: '../../spider-blog/static/images/big-images-2.jpeg',
    alt: 'xxx',
  },
  {
    imgSrc: '../../spider-blog/static/images/big-images-3.jpeg',
    alt: 'xxx',
  },
];

const cardList = [
  {
    imgAlt: 'image1',
    imgSrc: '../../spider-blog/static/images/burger1.jpg',
    cardTitle: '朋友圈营销文案',
    cardDesc: '学会写朋友圈营销文案，让你的产品多卖100万的转化秘籍',
    tag: ['微信营销', '社群营销'],
    cardLike: '点赞90',
    cardDiscuss: '评论77',
    id: '1',
  },
];

for (let i = 0; i < 20; i++) {
  cardList.push({
    imgAlt: 'image1',
    imgSrc: '/spider-blog/static/images/burger1.jpg',
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
for (let i = 0; i < 15; i++) {
  topicList.push({
    articleName: '年薪百万的成功秘笈年薪百万的成功秘笈',
    articleLink: 'xxx',
  });
}
for (let i = 0; i < 8; i++) {
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
              <div className='sp_carousel_main'>
                <Carousel autoplay>
                  {bannerList.map(item => {
                    return (
                      <div key={item.imgSrc}>
                        <img src={item.imgSrc} alt={item.alt} />
                      </div>
                    );
                  })}
                </Carousel>
              </div>
              {cardList.map((item, index) => {
                return (
                  <Row gutter={16} key={item.cardDesc + index}>
                    <Col span={6} md={24} sm={24} xs={24}>
                      <div className='sp_card'>
                        <div className='sp_card-img'>
                          <img
                            alt={item.imgAlt}
                            style={{ width: '100%' }}
                            src={item.imgSrc}
                          />
                        </div>
                        <div className='sp_card-meta'>
                          <div className='sp_card-title'>
                            <Link href={`./detail/circle-friends?id=${item.id}`}>
                              <a href=''>{item.cardTitle}</a>
                            </Link>
                          </div>
                          <div>
                            <div className='sp_card_item-desc'>
                              {item.cardDesc}
                            </div>
                            <div className='sp_card_item-tips'>
                              {item.tag &&
                                item.tag.map((item, index) => {
                                  return (
                                    <span
                                      className='sp_card_item-tag'
                                      key={index + item}
                                    >
                                      {item}
                                    </span>
                                  );
                                })}
                              <div className='sp_card_item-tips-time'>
                                2019-12-11
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                );
              })}
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
                  <img
                    src='../../spider-blog/static/images/WechatIMG1872.jpeg'
                    alt=''
                  />
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
