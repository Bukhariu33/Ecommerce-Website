import React from 'react';

export default function ProductItem({ prod }) {
  let productt = prod.map((p, i) => (
    <div key={i} className='shadow-lg text-center pb-4'>
      <img src={p.thumbnail} alt={p.title} className='w-[100%] h-[220px]' />
      <h3>{p.title}</h3>
      <p className='font-bold'>{p.price}</p>
    </div>
  ));

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {productt}
    </div>
  );
}
