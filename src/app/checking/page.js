"use client";

import { useEffect, useState } from "react";
import getProducts from "./check";

const Page = () => {
  const [products, setProducts] = useState([]);

  console.log(products);
  return <div>page</div>;
};

export default Page;
