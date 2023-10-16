import React from 'react';
import { storeData } from '../../assets/data/dummyData';
import ProductSectionItem from './ProductSectionItem';

const ProductSection = () => {
  return (
    <div>

      <div className="pt-16 grid grid-cols-2 lg:grid-cols-3 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {storeData.slice(0, 12).map((product, index) => (
            <ProductSectionItem
              id={product.id}
              type={product.type}
              name={product.name}
              img={product.img}
              text={product.text}
              price={product.price}
              totalPrice={product.totalPrice}
              color={product.color}
              size={product.size}
            ></ProductSectionItem>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
