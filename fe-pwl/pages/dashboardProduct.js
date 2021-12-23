import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import LayoutDashboard from '../components/LayoutDashboard';
import AddIcon from '@mui/icons-material/Add';

const dashboard_product = () => {
  const url = 'http://127.0.0.1:8000/api/product';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  // console.log(setProducts(res.data));

  return (
    <LayoutDashboard>
      <div className="flex flex-col w-full px-4 mt-14">
        <div className="flex gap-2">
          <Link href="/formInputProduct">
            <a class="btn btn-info btn-sm">
              <AddIcon />
              Tambah
            </a>
          </Link>
        </div>
        <div class="overflow-x-auto mt-10">
          <table class="table w-full">
            <thead>
              <tr>
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
                  <td>{prod.id_produk}</td>
                  <td>{prod.nama_produk}</td>
                  <td>{prod.harga}</td>
                  <td>{prod.stok_barang}</td>
                  <td>{prod.merk_barang}</td>
                  <td className="flex gap-1">
                    <button class="btn btn-xs btn-success">Edit</button>
                    <button class="btn btn-xs btn-error">Delete</button>
                    <button class="btn btn-xs btn-info">Publish</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default dashboard_product;
