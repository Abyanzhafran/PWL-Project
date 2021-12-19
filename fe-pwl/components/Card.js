import Image from 'next/image';
import cardImage1 from '../public/images/cards/1.jpg';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export default function Card() {
  return (
    <div className="card bordered bg-secondary-lighter text-primary max-w-min ">
      <figure>
        <Image src={cardImage1}></Image>
      </figure>
      <div className="card-body">
        <div className="card-title">
          Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK
        </div>
        <div className="flex">
          <p>Rp.32.000.000,00</p>
          <span>
            <ShoppingBagIcon></ShoppingBagIcon>
          </span>
        </div>
      </div>
    </div>
    // <div class="card bordered">
    //   <div class="card-body">
    //     <h2 class="card-title">
    //       Top image
    //       <div class="badge mx-2 badge-secondary">NEW</div>
    //     </h2>
    //     <p>
    //       Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
    //       sit necessitatibus veritatis sed molestiae voluptates incidunt iure
    //       sapiente.
    //     </p>
    //     <div class="justify-end card-actions">
    //       <button class="btn btn-secondary">More info</button>
    //     </div>
    //   </div>
    // </div>
  );
}
