import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden p-4 transition hover:scale-[1.02] duration-200">
      <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
    </div>
  );
};

export default ProductCard;
