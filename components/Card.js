import Image from 'next/image';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Card({ head, price, cardImage }) {
  return (
    <div className="card card-bordered bg-secondary-lighter text-primary w-52">
      <figure>
        <Image src={cardImage} width={500} height={500}></Image>
      </figure>
      <div className="m-4">
        <span className="font-semibold line-clamp-2">{head}</span>
        <div className="flex justify-center items-end">
          <p>{'Rp.' + price}</p>
          <span className="hidden lg:block">
            <ShoppingBagIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
