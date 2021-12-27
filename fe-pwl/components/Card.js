import Image from 'next/image';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export default function Card({ head, price, cardImage }) {
  return (
    <div className="card card-bordered bg-secondary-lighter text-primary max-w-min m-3">
      <figure>
        <Image layout="responsive" src={cardImage}></Image>
      </figure>
      <div className="card-body">
        <div className="card-title">{head}</div>
        <div className="flex justify-center items-end">
          <p>{'Rp.' + price}</p>
          <span className="hidden lg:block">
            <ShoppingBagIcon></ShoppingBagIcon>
          </span>
        </div>
      </div>
    </div>
  );
}
