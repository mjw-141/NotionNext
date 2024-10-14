import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import BlogPostCard from './BlogPostCard'
import BlogPostListEmpty from './BlogPostListEmpty'
import PaginationNumber from './PaginationNumber'
import ScrollingPhotoWall from './ScrollingPhotoWall';
import SplitLayout from './Splitelay'
import Title from './Title'
import ImageGrid from './PictureWall'

/**
 * 文章列表分页表格
 * @param page 当前页
 * @param posts 所有文章
 * @param tags 所有标签
 * @returns {JSX.Element}
 * @constructor
 */
const BlogPostListPage = ({ page = 1, posts = [], postCount, siteInfo }) => {
  const { NOTION_CONFIG } = useGlobal()
  const POSTS_PER_PAGE = siteConfig('POSTS_PER_PAGE', null, NOTION_CONFIG)
  const totalPage = Math.ceil(postCount / POSTS_PER_PAGE)
  const showPagination = postCount >= POSTS_PER_PAGE
  
  if (!posts || posts.length === 0 || page > totalPage) {
    return <BlogPostListEmpty />
  } else {
    return (
      <div id='container' className='w-full '>
        {/* 文章列表 */}
        <div className=' px-2'>
          <div className="flex items-center space-x-4 ">
          {/* 图片 */}
          <img 
            src="/Key_Items.webp" 
            alt="Title Image" 
            className="h-18 w-18 object-cover dark:brightness-75"
          />
          <div>
            {/* 标题文字 */}
            <div className="text-6xl text-center font-medium dark:text-white" style={{color: '#af9b7a'}}>西行景区导览</div>
            {/* 横线 */}
            {/* <hr className="mt-1 border-t border-gray-300" /> */}
          </div>
        </div>
        <ScrollingPhotoWall
            props={posts} // 将封面图像传递给 ScrollingPhotoWall
          />
        </div>
        <hr style={{background:"white"}} className="my-4"/>
        <Title text="山西文旅"/>
        <SplitLayout 
          videoUrl="//player.bilibili.com/player.html?isOutside=true&aid=1702400711&bvid=BV1yK421a7Np&cid=1484955159&p=0&autoplay=0"
        />
        <hr style={{background:"white"}} className="my-4" />
        <ImageGrid />
        <hr style={{background:"white"}} className="my-4" />
        {showPagination && (
          <PaginationNumber page={page} totalPage={totalPage} />
        )}
      </div>
    )
  }
}

export default BlogPostListPage

