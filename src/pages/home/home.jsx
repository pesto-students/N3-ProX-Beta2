import React from "react";
import Slider from "../../components/carousel/Slider";
import Category from "../../components/category/category";
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";
import kids from "../../assets/kids.jpg";
import BottomBanner from "../../components/bottom-banner/bottom-banner";
import BottomProducts from "../../components/bottom-products/bottom-products";
import Second from "../../assets/bottom-banner.jpg";
import Recommended from "../../components/recommended/recommended";
import "./home.scss";

function Home() {
  return (
    <section>
      <Slider />
      <div className="category-wrapper">
        <span className="category-title">CATEGORIES</span>
        <span className="category-items">
          <Category imageSrc={men} name="men" />
          <Category imageSrc={women} name="women" />
          <Category imageSrc={kids} name="kids" />
        </span>
      </div>
      <BottomBanner />
      <BottomProducts />
      <img className="bottom-img" src={Second} alt="img" />
      <Recommended />
    </section>
  );
}

export default Home;
