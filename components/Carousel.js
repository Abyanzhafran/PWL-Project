import Image from 'next/image';
import img1 from '../public/images/hero/1.jpg';
import img2 from '../public/images/hero/2.jpeg';
import img3 from '../public/images/hero/3.jpeg';
export default function Carousel() {
  return (
    <div className="flex-col">
      <div className="carousel w-full rounded-xl">
        <div id="item1" className="w-full carousel-item">
          <Image src={img1}></Image>
        </div>
        <div id="item2" className="w-full carousel-item">
          <Image src={img2}></Image>
        </div>
        <div id="item3" className="w-full carousel-item">
          <Image src={img3}></Image>
        </div>
      </div>
      <div className="hidden lg:flex justify-center w-full py-5 btn-group z-10">
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
    </div>
  );
}
