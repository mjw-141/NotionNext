import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import the video component for lazy loading
const VideoPlayer = dynamic(() => import('./VideoPlayer'), { ssr: false });

const SplitLayout = ({ videoUrl, text }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Left side: Text */}
      <div className="w-full md:w-1/2 p-4 dark:text-white">
        <p style={{ textIndent: '2rem' }}>
          山西，华夏文明的摇篮，拥有丰富的历史和文化遗产，等待着您来探索。这里是五台山的圣洁，是平遥古城的千年风韵，是大同云冈石窟的壮丽。走在古城的街巷，您可以感受到岁月的洗礼与历史的深邃。山西的美食同样让人垂涎欲滴，刀削面、莜面、山西醋……每一口都是对味蕾的奢宠。
        </p>
        <p style={{ textIndent: '2rem' }}>
          无论是漫步在历史悠久的寺庙中，还是徜徉在自然风光的山水之间，山西都能带给您身心的放松与愉悦。这里的每一座山、每一条河、每一处遗迹都讲述着动人的故事。让我们一起踏上这段旅程，感受山西的独特魅力，留下难忘的回忆！欢迎您来山西，体验这片土地的厚重与美丽！
        </p>
      </div>

      {/* Right side: Video */}
      <div className="w-full md:w-1/2 p-4">
        <iframe
          src={videoUrl}
          width={500} height={250} 
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SplitLayout;
