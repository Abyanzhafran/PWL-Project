import Image from 'next/image';
import img1 from '../public/images/hero/1.jpg';
import img2 from '../public/images/hero/2.jpg';
import img3 from '../public/images/hero/3.jpg';
export default function Carousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="w-full pt-20 carousel-item">
          <Image src={img1}></Image>
        </div>
        <div id="item2" className="w-full pt-20 carousel-item">
          <Image src={img2}></Image>
        </div>
        <div id="item3" className="w-full pt-20 carousel-item">
          <Image src={img3}></Image>
        </div>
      </div>
      <div className="flex justify-center w-full py-5 btn-group">
        <a href="#item1" className="btn btn-sm">
          1
        </a>
        <a href="#item2" className="btn btn-sm">
          2
        </a>
        <a href="#item3" className="btn btn-sm">
          3
        </a>
      </div>
    </>
  );
}
