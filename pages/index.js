import React from 'react';
import { Icon, Row, Col, Layout, Carousel } from 'antd';
import Link from 'next/link';
import SPHeader from '../components/Header';
import RightContactUs from '../components/RightContactUs';
import RightArticleList from '../components/RightArticleList';
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
                      <Link
                        href={`./detail/circle-friends?id=${item.id}`}
                      >
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
                              <a href=''>{item.cardTitle}</a>
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
                                  2019-10-03
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </Link>
                    </Col>
                  </Row>
                );
              })}
            </Content>
          </Col>
          <Col span={8} className='sp_main-col-top right-hide'>
            <RightContactUs />
            <RightArticleList />
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
