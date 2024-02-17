"use client";

import { useEffect } from "react";
import getOrders from '@/services/getOrders';

const Request = () => {
  useEffect(() => {
    getOrders("2").then((data) => console.log("data", data));
  }, []);

  return <div>5</div>;
}
export default Request;