import Image from 'next/image';
import cardImage1 from '../public/images/cards/1.jpg';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export default function Card({ head, price }) {
  return (
    <div className="card bordered bg-secondary-lighter text-primary max-w-min m-3">
      <figure>
        <Image layout="responsive" src={cardImage1}></Image>
      </figure>
      <div className="card-body">
        <div className="card-title">{head}</div>
        <div className="flex justify-between items-end">
          <p>{'Rp.' + price}</p>
          <span>
            <ShoppingBagIcon></ShoppingBagIcon>
          </span>
        </div>
      </div>
    </div>
  );
}
