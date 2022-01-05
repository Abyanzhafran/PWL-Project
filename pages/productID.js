import Image from 'next/image';
import cardImage1 from '../public/images/cards/1.jpg';
export const getServerSideProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default function () {
  return (
    <>
      <div className="text-md breadcrumbs font-bold">
        <ul>
          <li>Home</li>
          <li>Senapan Angin</li>
        </ul>
      </div>
      <div className="flex-row mt-5 gap-10 lg:flex">
        <div className="lg:w-1/2">
          <div className="flex">
            <div>
              <Image src={cardImage1} width={300} height={300}></Image>
            </div>
            <div className="flex-col">
              <div>
                <p className="text-xl font-bold uppercase">
                  Senapan Angin PCP RIFLE FX IMPACT X MKII BLACK
                </p>
                <p className="text-lg font-bold uppercase">Rp 32.000.000,00</p>
              </div>
              <div className="form-control">
                <div className="input-group">
                  <span className="bg-primary-lighter text-secondary-lighter">
                    Jumlah
                  </span>
                  <input
                    type="number"
                    name="txtJumlah"
                    id="txtJumlah"
                    className="input input-bordered"
                    placeholder="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col mt-5">
            <div className="tabs">
              <a href="#" className="tab tab-lifted tab-active">
                Detail
              </a>
              <a href="#" className="tab tab-lifted">
                Informasi Penting
              </a>
            </div>
            <div className="flex-initial">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                pariatur accusantium voluptas excepturi cupiditate magni nisi
                doloribus architecto consectetur. Error atque accusamus
                dignissimos cumque voluptatum a adipisci laboriosam ea voluptas!
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col">
          <div className="form-control mt-5 lg:mt-0">
            <label htmlFor="" className="text-lg font-bold label">
              <span className="label-text">Notes</span>
            </label>
            <textarea
              name="txtNote"
              id="txtNote"
              cols="50"
              rows="8"
              className="textarea textarea-bordered"
            ></textarea>
          </div>
          <div className="flex lg:flex-col gap-5 my-10">
            <button
              type="submit"
              className="btn btn-block bg-tertriary hover:bg-blue-400"
            >
              Beli
            </button>
            <button className="btn btn-block btn-outline btn-accent">
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
