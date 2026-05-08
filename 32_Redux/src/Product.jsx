import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Product = () => {
  useEffect(() => {
    console.log("Product Rerender triggered ...");
  });
  //   const state = useSelector((state) => state); //We have subscrive entire state here, the disadvantage is even if we make the changes in count , the product component will get rerendered, which is bad thing
  //   That's why subscrive only those things which you will use in that particular component
  //   console.log(state);

  const products = useSelector((state) => state.products);

  return (
    <div>
      Product
      <div>{JSON.stringify(products)}</div>
    </div>
  );
};

export default Product;
