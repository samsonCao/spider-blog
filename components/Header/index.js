import Link from 'next/link';
import './index.less';

const linkList = [
  {
    href: '/index',
    title: '首页',
  },
  {
    href: '/index',
    title: 'seo文案',
  },
  {
    href: '/index',
    title: '信息流文案',
  },
  {
    href: '/index',
    title: 'sem文案',
  },
  {
    href: '/index',
    title: '落地页文案',
  },
  {
    href: '/index',
    title: '子弹头',
  },
];

const SPHeader = () => (
  <header className='sp_header'>
    <nav>
      <ul className='sp_content'>
        {linkList.map(item => {
          return (
            <li className='sp_content-item' key={item.title}>
              <Link href={item.href}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

export default SPHeader;
