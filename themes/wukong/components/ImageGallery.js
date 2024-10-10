import ImageCard from './ImageCard'
import Link from 'next/link'; // 引入 Link 组件


const ImageGallery=()=>{
    return (
        <div>
          <div className="dark:text-gray-200 text-left text-2xl ml-12 m-4 w-full  duration-150">这个是最后的组件</div>
          <div className="flex flex-wrap justify-center gap-4">
          {/* <div className="grid grid-cols-2 gap-2"> */}
          <Link href="/article/example-1">
          <ImageCard
            imageSrc="/1.jpg"  // 替换为背景图片路径
            overlaySrc="/HeaderGame.png"   // 替换为覆盖层图片路径
            title="云冈石窟"
          /></Link>

          <Link href="/article/example-2">
          <ImageCard
            imageSrc="/2.jpg"  // 替换为背景图片路径
            overlaySrc="/HeaderGame.png"    // 替换为覆盖层图片路径
            title="云冈石窟"
          /></Link>

          <Link href="/article/example-3">
          <ImageCard
            imageSrc="/7.jpg"  // 替换为背景图片路径
            overlaySrc="/HeaderGame.png"    // 替换为覆盖层图片路径
            title="云冈石窟"
          /></Link>

          <Link href="/article/example-4">
          <ImageCard
            imageSrc="/4.jpg"  // 替换为背景图片路径
            overlaySrc="/HeaderGame.png"    // 替换为覆盖层图片路径
            title="云冈石窟"
          /></Link>

          <Link href="/article/example-5">
          <ImageCard
            imageSrc="/5.jpg"  // 替换为背景图片路径
            overlaySrc="/HeaderGame.png"    // 替换为覆盖层图片路径
            title="云冈石窟"
          /></Link>

          <Link href="/article/example-6">
          <ImageCard
            imageSrc="/6.jpg"  // 替换为背景图片路径
            overlaySrc="/HeaderGame.png"    // 替换为覆盖层图片路径
            title="云冈石窟"
          /></Link>
        </div>
      </div>
      )
}

export default ImageGallery
