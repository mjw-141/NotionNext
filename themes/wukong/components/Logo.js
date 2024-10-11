import Link from 'next/link'
import Image from 'next/image' // 确保导入 Image 组件

/**
 * Logo
 * 显示图片Logo
 * @param {*} props
 * @returns
 */
const Logo = (props) => {
  return (
    <Link href='/' passHref legacyBehavior>
      <div className='flex flex-col justify-center items-center cursor-pointer space-y-3'>
        <Image
          src='/WukongIcon.svg' // 确保图片存放在 public 文件夹下
          alt='Site Logo'
          width={160} // 设置图片宽度
          height={100}// 设置图片高度
          priority={true} // 优先加载该图片
        />
      </div>
    </Link>
  )
}

export default Logo
