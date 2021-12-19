import LayoutDashboard from '../components/LayoutDashboard';

const product = () => {
  return (
    <LayoutDashboard>
      <div class="overflow-x-auto mt-14">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>ID_Produk</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Merk</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Senapan Angin PCP</td>
              <td>Air arms Galahad</td>
              <td>50.000</td>
              <td>10</td>
              <td>Air Arms</td>
              <td className="flex gap-1">
                <button class="btn btn-xs btn-success">Edit</button>
                <button class="btn btn-xs btn-error">Delete</button>
                <button class="btn btn-xs btn-info">Publish</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </LayoutDashboard>
  );
};

export default product;
