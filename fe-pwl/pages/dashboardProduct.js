import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import LayoutDashboard from '../components/LayoutDashboard';
import AddIcon from '@mui/icons-material/Add';

const dashboard_product = () => {
  const url = 'http://127.0.0.1:8000/api/product';
  const [products, setProducts] = useState([]);
  const [ProductId, setProductId] = useState('');
  const [updateProductName, setUpdateProductName] = useState('');
  const [updateProductHarga, setUpdateProductHarga] = useState('');
  const [updateProductStok, setUpdateProductStok] = useState('');
  const [updateProductMerk, setUpdateProductMerk] = useState('');

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const updateProduct = () => {
    axios
      .put(url + `/${ProductId}`, {
        nama_produk: updateProductName,
        harga: updateProductHarga,
        stok_barang: updateProductStok,
        merk_barang: updateProductMerk,
      })
      .then(() => {
        alert('Product Updated');
      });
  };

  const deleteProduct = () => {
    axios.delete(url + `/${ProductId}`).then(() => {
      alert('Product Deleted');
    });
  };

  return (
    <LayoutDashboard>
      <div className="flex flex-col w-full px-4 mt-14">
        <div className="flex justify-between gap-2">
          <div className="ml-4">
            <span className="font-bold text-2xl">PRODUCT</span>
          </div>
          <Link href="/formInputProduct">
            <a class="btn btn-info btn-sm">
              <AddIcon />
              Add Product
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
                  <td>{prod.id}</td>
                  <td>{prod.nama_produk}</td>
                  <td>{prod.harga}</td>
                  <td>{prod.stok_barang}</td>
                  <td>{prod.merk_barang}</td>
                  <td className="flex gap-1">
                    <label
                      class="btn btn-xs btn-success modal-button"
                      for="my-modal-2"
                      onClick={() => setProductId(prod.id)}
                    >
                      Edit
                    </label>
                    <label
                      class="btn btn-xs btn-error"
                      for="my-modal-3"
                      onClick={() => setProductId(prod.id)}
                    >
                      Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* update modal */}
        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
        <div className="modal overflow-y-auto">
          <div className="modal-box">
            {products
              .filter((x) => x.id == ProductId)
              .map((prod) => (
                <div className="flex flex-col gap-4 mt-8">
                  <span>{ProductId}</span>
                  <input
                    placeholder={prod.nama_produk}
                    class="input input-bordered"
                    type="text"
                    onChange={(e) => setUpdateProductName(e.target.value)}
                  />

                  <input
                    placeholder={prod.harga}
                    class="input input-bordered"
                    type="number"
                    onChange={(e) => setUpdateProductHarga(e.target.value)}
                  />

                  <input
                    placeholder={prod.stok_barang}
                    class="input input-bordered"
                    type="number"
                    onChange={(e) => setUpdateProductStok(e.target.value)}
                  />

                  <input
                    placeholder={prod.merk_barang}
                    class="input input-bordered"
                    type="text"
                    onChange={(e) => setUpdateProductMerk(e.target.value)}
                  />
                </div>
              ))}
            <div className="modal-action">
              <label
                for="my-modal-2"
                className="btn btn-primary"
                onClick={() => updateProduct()}
              >
                Update
              </label>
              <label for="my-modal-2" className="btn">
                Close
              </label>
            </div>
          </div>
        </div>
        {/* delete modal */}
        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box">
            <span>Sure want to Delete ??</span>
            <div class="modal-action">
              <label
                for="my-modal-3"
                class="btn btn-primary"
                onClick={() => deleteProduct()}
              >
                Delete
              </label>
              <label for="my-modal-3" class="btn">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

// dashboard_product.LayoutDashboard;

export default dashboard_product;
