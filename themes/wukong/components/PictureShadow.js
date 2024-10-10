import { useState } from "react";

const Card = ({ children, headerSlot, className }) => {
  return (
    <div className={className}>
      {/* 对 headerSlot 和 Card 外部部分设置透明度为 30% */}
      <div className="opacity-30">
        {headerSlot}
      </div>
      <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100 opacity-30">
        {/* 卡片主体部分透明度为 30% */}
      </section>
      
      {/* children 部分不透明 */}
      <section className="card-content">
        {children}
      </section>
    </div>
  );
};



const OverlappingImages = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (

    <div className="relative grid grid-cols-5 justify-center items-center">
      {images.map((image, index) => {
        // 控制每张图片的初始位置
        let positionStyle = {};
        if (index === 0) {
          positionStyle = { left: "130px", top: "0px" };
        } else if (index === 1) {
          positionStyle = { left: "60px", top: "0px" };
        } else if (index === 2) {
          positionStyle = { left: "0px", top: "0px" }; // 中间图片
        } else if (index === 3) {
          positionStyle = { left: "0px", top: "0px" };
        } else if (index === 4) {
          positionStyle = { left: "-250px", top: "0px" };
        }

        return (
          <div
            key={index}
            className={`relative transition-all duration-500 ease-in-out ${
              index === hoveredIndex
                ? "z-20 scale-110 opacity-100"
                : index === 2
                ? "z-10 opacity-100" // 中间图片不透明
                : "z-0 opacity-70" // 其他图片半透明
            }`}
            style={{
              ...positionStyle,
              transform: index === hoveredIndex ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
              <img
                src={image}
                alt={`img-${index}`}
                className=" object-cover rounded-lg flex-none"
                style={{ width: '500px',height:'200px' }}
              />
          </div>
        );
      })}
    </div>
  );
};

export default OverlappingImages;
