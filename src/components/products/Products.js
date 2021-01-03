import React, { useEffect, useState } from "react";

const Product = () => {
  const getProducts = async () => {
    let res = await fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=4209&limit=48&store=US&country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c95beda05emsh9492caf20e6130ap1e9ddcjsn21f32352259b",
          "x-rapidapi-host": "asos2.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    console.log(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <div className="products"></div>;
};

export default Product;