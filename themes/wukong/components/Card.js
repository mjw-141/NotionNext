// const Card = ({ children, headerSlot, className }) => {
//   return <div className={className}>
//     <>{headerSlot}</>
//     <section className="card shadow-md hover:shadow-md dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray lg:duration-100 ">
//         {children}
//     </section>
//   </div>
// }
// export default Card
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

export default Card;

