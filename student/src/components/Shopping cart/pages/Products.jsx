import React, { useState } from "react";
import data from "../../../data.json";
import Product from "./Product";
const Products = () => {
  const [products, setProducts] = useState(data.products);
  return (
    <div className="container my-5">
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((p) => {
       return <Product 
       key={p.id}
       product={p} 
       
       />;
      })}
    </div>
    </div>
  );
};

export default Products;
