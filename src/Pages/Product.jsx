import React, { useContext } from "react";
import {useParams } from "react-router-dom";
import {ShopContext} from '../Context/ShopContext';
import Breadcrum from "../Components/Breadcrums.jsx/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DiscriptionBox from "../Components/DiscriptionBox/DiscriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

function Product() {
  const {all_product} =  useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div className="product" >
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProducts/>
    </div>
  );
}
export default Product;