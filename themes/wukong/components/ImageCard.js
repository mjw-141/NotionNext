import React from 'react';


const ImageCard = ({ imageSrc, overlaySrc, title }) => {
  return (
    <div className="relative w-40 h-26 overflow-hidden rounded-lg group">
      {/* 背景图片 */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      />
      {/* 覆盖层图片 */}
      <div className="absolute bottom-[-8px] left-[-9px] right-[-9px] flex items-end transition-opacity duration-300 ease-in-out">
        <img
          src={overlaySrc}
          alt="Overlay"
          className="w-full h-full object-cover opacity-50"
        />
        <span className="absolute bottom-[11px] left-1/2 transform -translate-x-1/2 text-black text-xs font-bold">{title}</span>
      </div>
    </div>
  );
};

export default ImageCard;
