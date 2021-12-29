import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import cardImage1 from '../public/images/cards/1.jpg';

const ProductList = () => {
  const url = 'http://127.0.0.1:8000/api/product';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="flex items-center justify-center text-center pb-10 lg:pb-20">
      <div className="shadow-lg rounded-box">
        <p className="text-lg uppercase font-bold mb-5">Semua produk</p>
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((item) => (
            <Card
              cardImage={cardImage1}
              head={item.nama_produk}
              price={item.harga}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
