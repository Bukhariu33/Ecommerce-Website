// Catagories.js
import React from 'react';

export default function Catagories({ products, setCatName }) {
  let cat = products.map((value, index) => (
    <li key={index} onClick={() => setCatName(value)} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'>
      {value}
    </li>
  ));

  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul>{cat}</ul>
    </div>
  );
}
