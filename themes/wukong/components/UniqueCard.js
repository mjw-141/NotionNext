import Card from './Card'

const UniqueCard = ({ leftSlot, rightSlot, className }) => {
  return (
    
    <div className={`${className} grid grid-cols-4 gap-4 h-[480px]`}>
      {/* 左侧 1/4 栏，用于 leftSlot */}
      <div className="col-span-2 ">
        {leftSlot}
      </div>
      
      {/* 右侧 3/4 栏，用于 rightSlot */}
      <div className="col-span-2">
        {rightSlot}
      </div>
    </div>
  )
}

export default UniqueCard
