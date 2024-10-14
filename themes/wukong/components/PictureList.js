import OverlappingImages from './PictureShadow'

const PictureList= () =>{
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

export default PictureList
