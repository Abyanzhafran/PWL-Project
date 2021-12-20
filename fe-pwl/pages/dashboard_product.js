import { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutDashboard from '../components/LayoutDashboard';

const dashboard_product = () => {
  const url = 'http://127.0.0.1:8000/api/product';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, []);

  // console.log(products);

  return (
    <LayoutDashboard>
      {/* <div className="flex flex-col w-screen"> */}
      {/* <div className="flex gap-2">
          <button class="btn btn-info">info</button>
          <button class="btn btn-info">info</button>
        </div> */}
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
            {products.map((prod) => (
              <tr>
                <th>{prod.id_kategori}</th>
                <td>{prod.id_produk}</td>
                <td>{prod.nama_produk}</td>
                <td>{prod.harga}</td>
                <td>{prod.stok_barang}</td>
                <td>{prod.merk}</td>
                <td className="flex gap-1">
                  <button class="btn btn-xs btn-success">Edit</button>
                  <button class="btn btn-xs btn-error">Delete</button>
                  <button class="btn btn-xs btn-info">Publish</button>
                </td>
              </tr>
            ))}
            {/* <tr>
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
            </tr> */}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </LayoutDashboard>
  );
};

export default dashboard_product;
