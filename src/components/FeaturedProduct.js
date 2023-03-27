import React from "react";
import Product from "./Product";
import { useGetAllProductsQuery } from "../slice/api-slice";
import { Link } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";

const FeaturedProduct = () => {
  const {
    data = {},
    isFetching,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllProductsQuery();
  const { products: allProducts, featuredProducts } = data;

  return (
    <section
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="section__featured"
    >
      <h2 className="heading-secondary heading-secondary--after u-margin-bottom-big u-center ">
        Featured Products
      </h2>
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <div className="container section__featured-container grid grid-autofit">
          {featuredProducts?.slice(0, 3)?.map((product) => {
            const { name, price, image, id } = product;
            return (
              <Product
                key={id}
                id={id}
                name={name}
                image={image}
                price={price}
                className={"product__featured"}
              />
            );
          })}
        </div>
      )}
      <Link className="link link-btn link-product" to="/products">
        All products
      </Link>
    </section>
  );
};

export default FeaturedProduct;
