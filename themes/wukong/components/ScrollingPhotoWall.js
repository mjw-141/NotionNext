import { useRef } from "react";
import Link from "next/link";

const ScrollingPhotoWall = ({ props = [] }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="margin-0 padding-0">
      {/* 图片墙 */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide ml-4 h-[450px]"
        style={{ scrollSnapType: "x mandatory"}}
      >
        {props.map((post, index) => (
          <div key={index} className="relative flex-none w-[180px] h-[350px] group mt-[40px]">
            <Link href={post?.href}>
            <div className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-10">
              <img
                src={post.pageCoverThumbnail}
                alt={`image-${index}`}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* 显示标题 */}
              <div className="absolute bottom-0 left-0 right-0 text-white text-center p-2 rounded-b-xl">
                {post.title}
              </div>
            </div>
            </Link>
            {/* 简介文本 */}
            <div className="absolute bottom-0 left-0 right-0 text-dark font-bold text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {post.summary}
            </div>
          </div>
        ))}
      </div>

      {/* 按钮放置在图片墙下面 */}
      <div className="flex justify-end mr-4 mt-3 space-x-3">
        <button
          onClick={scrollLeft}
          className="bg-gray-800 text-white w-6 h-6 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        >
          <img src="/svg/left.svg" alt="scroll left" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-800 text-white w-6 h-6 rounded-full opacity-70 hover:opacity-100 transition-opacity"
        >
          <img src="/svg/right.svg" alt="scroll right" />
        </button>
      </div>
    </div>
  );
};

export default ScrollingPhotoWall;
