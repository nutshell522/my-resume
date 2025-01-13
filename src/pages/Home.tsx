import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactTyped } from 'react-typed';
import sharedInfo from '../../public/datas/sharedInfo.json';

const Home: React.FC = () => {
  const { t } = useTranslation('home');
  const avatar = sharedInfo.avatar;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* 大頭貼 */}
      <img
        src={`/assets/images/personal/${avatar}`}
        alt="avatar"
        className="w-32 h-32 rounded-full mb-4"
      />
      {/* 姓名 */}
      <h1 className="text-4xl font-bold mb-4">{t('name')}</h1>
      {/* 職業 */}
      <h2 className="text-2xl font-semibold mb-6">{t('title')}</h2>
      {/* 介紹 */}
      <p className="text-lg mb-6">{t('description')}</p>
      {/* 打字動畫 */}
      <div className="text-xl font-semibold">
        <span>{t('typeAnimation.sentenceHead')} </span>
        <ReactTyped
          strings={
            t('typeAnimation.sentences', { returnObjects: true }) as string[]
          }
          typeSpeed={100}
          backSpeed={50}
          backDelay={1300}
          loop
        />
      </div>
    </div>
  );
};

export default Home;