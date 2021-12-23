import LayoutDashboard from '../components/LayoutDashboard';

const formInputProduct = () => {
  const inputItem = [
    {
      name: 'Nama',
    },
    {
      name: 'Harga',
    },
    {
      name: 'Stok',
    },
    {
      name: 'Merk',
    },
  ];

  return (
    <LayoutDashboard>
      <div className="w-full px-10 mt-10">
        <span className="font-bold text-2xl">Input Data Produk</span>
        <div class="flex flex-col gap-4 mt-8">
          {inputItem.map((i) => (
            <input
              placeholder={i.name}
              class="input input-bordered"
              type="text"
            />
          ))}
        </div>
        <div className="mt-4">
          <button class="btn btn-info">submit</button>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default formInputProduct;
