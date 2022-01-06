import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import LayoutDashboard from '../components/LayoutDashboard';

const formInputProduct = () => {
  const url = 'http://127.0.0.1:8000/api/product';
  const [insertProductName, setInsertProductName] = useState('');
  const [insertProductHarga, setInsertProductHarga] = useState('');
  const [insertProductStok, setInsertProductStok] = useState('');
  const [insertProductMerk, setInsertProductMerk] = useState('');

  const addProduct = () => {
    axios
      .post(url, {
        nama_produk: insertProductName,
        harga: insertProductHarga,
        stok_barang: insertProductStok,
        merk_barang: insertProductMerk,
      })
      .then(() => {
        alert('Product Added');
      });
  };

  return (
    <LayoutDashboard>
      <div className="w-full px-10 mt-10">
        <div className="flex justify-between">
          <span className="font-bold text-2xl">Input Data Produk</span>
          <Link href="/dashboardProduct">
            <a class="btn btn-info btn-sm">Kembali</a>
          </Link>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <input
            placeholder="Nama"
            className="input input-bordered"
            type="text"
            onChange={(e) => setInsertProductName(e.target.value)}
          />

          <input
            placeholder="Harga"
            className="input input-bordered"
            type="number"
            onChange={(e) => setInsertProductHarga(e.target.value)}
          />

          <input
            placeholder="Stok"
            className="input input-bordered"
            type="number"
            onChange={(e) => setInsertProductStok(e.target.value)}
          />

          <input
            placeholder="Merk"
            className="input input-bordered"
            type="text"
            onChange={(e) => setInsertProductMerk(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-info" onClick={() => addProduct()}>
            submit
          </button>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default formInputProduct;
