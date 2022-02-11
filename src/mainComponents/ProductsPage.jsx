import React, { useEffect } from "react";
import HeaderProductsPage from "../subComponents/HeaderProductsPage";
import { Box } from "@mui/system";
import CardProductPage from "../subComponents/CardProductPage";
// Apolo
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { PRODUCTS } from "../gql";

const ProductsPage = ({ setSingleProductData }) => {
  const { loading, error, data } = useQuery(PRODUCTS);
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <Box>
      {/* Header */}
      <p style={{ fontSize: "42px", fontFamily: "Raleway" }}>{data.category.name}</p>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.category.products.map((product) => (
          <CardProductPage key={product.id} productData={product} setSingleProductData={setSingleProductData} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductsPage;
