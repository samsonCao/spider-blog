import React from 'react';
import './index.less';

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

const RightArticleList = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default RightArticleList;
