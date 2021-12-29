import Image from 'next/image';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

export default function Card({ head, price, cardImage }) {
  return (
    <div className="card card-bordered bg-secondary-lighter text-primary w-52">
      <figure>
        <Image src={cardImage} height="820"></Image>
      </figure>
      <div className="m-4">
        <span className="font-semibold">{head}</span>
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
