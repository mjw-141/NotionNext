import OverlappingImages from './PictureShadow'
import Card from './Card'

const PictureShow= () =>{
    const images = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/4.jpg",
        "/5.jpg",
      ];
   return ( 
    <div>
        <OverlappingImages images={images} />
    </div>)
}

export default PictureShow
