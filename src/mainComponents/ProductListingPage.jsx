import React, { useEffect } from "react";
import CardProductPage from "../subComponents/CardProductPage";
// Apolo
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../gql";

const ProductLisitingPage = ({ currency, setSingleProductData, categoryType }) => {
  const { loading, error, data } = useQuery(PRODUCTS, {
    variables: { type: `${categoryType}` },
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <p style={{ fontSize: "42px", fontFamily: "Raleway", margin: "0px 0px 103px 0px" }}>{data.category.name}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.category.products.map((product) => (
          <CardProductPage key={product.id} currency={currency} productData={product} setSingleProductData={setSingleProductData} />
        ))}
      </div>
    </div>
  );
};

export default ProductLisitingPage;
