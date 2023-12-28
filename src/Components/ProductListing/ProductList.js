import React, { useEffect, useState } from "react";
import ProductListView from "./ProductListView";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [dataLimit, setDataLimit] = useState(10);
  const [singleProductData, setSingleProductData] = useState([]);
  const [shortOrder, setShortOrder] = useState("asc");

  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${dataLimit}&sort=${shortOrder}`
      );
      console.log(response);
      setAllProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${productId}`);
      toast.success("Product deleted successfully !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${productId}`
      );
      setSingleProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [dataLimit, shortOrder]);

  return (
    <ProductListView
      allProducts={allProducts}
      setDataLimit={setDataLimit}
      setShortOrder={setShortOrder}
      dataLimit={dataLimit}
      shortOrder={shortOrder}
      deleteProduct={deleteProduct}
      getSingleProduct={getSingleProduct}
      singleProductData={singleProductData}
    />
  );
};

export default ProductList;
