import React, { useEffect, useRef, useState } from 'react';

const ImageGrid = () => {
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const imgWidth = 250;
  const imageCount = 34;
  const handleClick = () => {
    window.location.href = '/article/guide'; // 跳转到指定的页面
  };

  useEffect(() => {
    createImages(1); // 重复生成图像三次
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setPositions();
      }
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  const createImages = (repeatCount) => {
    const newImages = [];
    for (let j = 0; j < repeatCount; j++) {
      for (let i = 1; i <= imageCount; i++) {
        const src = `/${i+8}.jpg`;
        newImages.push({ src, loaded: false });
      }
    }
    setImages(newImages);
  };

  const cal = () => {
    const containerWidth = containerRef.current.clientWidth;
    const columns = Math.floor(containerWidth / imgWidth);
    const spaceNumber = columns + 1;
    const leftSpace = containerWidth - columns * imgWidth;
    const space = leftSpace / spaceNumber;

    return {
      space,
      columns,
    };
  };

  const setPositions = () => {
    const info = cal();
    let nextTops = new Array(info.columns).fill(0);
    

    const updatedImages = [...images];
    updatedImages.forEach((img, index) => {
      const imgElement = containerRef.current.children[index];
      imgElement.style.position = 'absolute';

      const minTop = Math.min(...nextTops);
      const columnIndex = nextTops.indexOf(minTop);
      nextTops[columnIndex] += imgElement.height + info.space;

      const left = (columnIndex + 1) * info.space + columnIndex * imgWidth;
      imgElement.style.top = `${minTop}px`;
      imgElement.style.left = `${left}px`;
    });

    const maxTop = Math.max(...nextTops);
    containerRef.current.style.height = `${maxTop}px`;
  };

  const handleImageLoad = (index) => {
    const updatedImages = [...images];
    updatedImages[index].loaded = true;
    setImages(updatedImages);
    

    // 检查是否所有图片都加载完
    if (updatedImages.every(img => img.loaded)) {
      setPositions();
    }
  };

  return (
    <div 
      className="container relative"  // Tailwind 的 relative 类设置容器相对定位
      ref={containerRef}
    >
      {images.map((img, index) => (
        
        <img
          key={index}
          src={img.src}
          width={imgWidth}
          className="absolute transition-all duration-500 rounded-md hover:scale-110 transition-all"  // 使用 Tailwind 的绝对定位和过渡效果
          onLoad={() => handleImageLoad(index)}
          alt={`Image ${index + 1}`}
          onClick={handleClick}
        />
        
      ))}
    </div>
  );
};

export default ImageGrid;
