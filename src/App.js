// App.js
import React, { useEffect, useState } from 'react';
import Catagories from './Catagories';
import ProductItem from './ProductItem';
import axios from 'axios';
import '../src/App.css';

export default function App() {
  let [productCat, setProductCat] = useState([]);
  let [prod, setProd] = useState([]);
  let [catName, setCatName] = useState('');

  let getData = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalResponse) => setProductCat(finalResponse));
  };

  let getProudct = () => {
    axios.get('https://dummyjson.com/products')
      .then((Presp) => Presp.data)
      .then((finalResponse) => setProd(finalResponse.products));
  };

  useEffect(() => {
    getData();
    getProudct();
  }, []);

  useEffect(() => {
    if (catName !== '') {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
        .then((Presp) => Presp.data)
        .then((finalResponse) => setProd(finalResponse.products));
    }
  }, [catName]);

  return (
    <div className='py-[40px]'>
      <div className='max-w-[1320px] '>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[40px] p-[10px]'>
          <div>
            <Catagories products={productCat} setCatName={setCatName} />
          </div>
          <div>
            <ProductItem prod={prod} />
          </div>
        </div>
      </div>
    </div>
  );
}
