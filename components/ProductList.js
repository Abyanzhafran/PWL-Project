import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import steyr_1 from '../public/steyr_1.jpeg';

const ProductList = () => {
  const url = 'https://be-pwl.herokuapp.com/api/product';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="flex items-center justify-center text-center pb-10 lg:pb-20">
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((item) => (
          <Card
            cardImage={steyr_1}
            head={item.nama_produk}
            price={item.harga}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
