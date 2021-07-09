import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../components/carousel/Slider";
import Category from "../../components/category/category";
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";
import kids from "../../assets/kids.jpg";
import "./home.scss";

function Home() {
  return (
    <section>
      <Slider />
      <div className="category-wrapper">
        <span className="category-title">EXPLORE</span>
        <Link to="/categories">SEE ALL</Link>
        <span className="category-items">
          <Category imageSrc={men} name="men" />
          <Category imageSrc={women} name="women" />
          <Category imageSrc={kids} name="kids" />
        </span>
      </div>
    </section>
  );
}

export default Home;
