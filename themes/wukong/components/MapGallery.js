import ShanxiMap from "./ShanxiMap"

// const Card = ({ children, headerSlot, className }) => {
//   return <div className={className}>
//     <>{headerSlot}</>
//     <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-[320px] p-[320px] bg-white dark:bg-hexo-black-gray lg:duration-100">
//         {children}
//     </section>
//   </div>
// }


const MapGallery=()=>{
    return (
        <div>
          {/* <div className="dark:text-gray-200 text-center text-2xl m-4 w-full hover:scale-110 transition-all duration-150">这是地图</div> */}
          <div className="dark:text-gray-200 text-left text-2xl ml-12 m-4 w-full  duration-150">这个是最后的组件</div>
          <ShanxiMap />
        </div>
      )
}

export default MapGallery
