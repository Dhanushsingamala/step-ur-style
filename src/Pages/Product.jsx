import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <BreadCrum product = {product}/>
      <ProductDisplay product = {product} />
      <h2 style={{ color: 'grey', fontSize: '24px', margin: '20px 10px' }}>Reviews/opinions will be updated at the earliest possible..</h2>
    </div>
  )
}

export default Product