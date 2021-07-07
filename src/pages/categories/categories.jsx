import React from "react";
import Category from "../../components/category/category";
import men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";
import kids from "../../assets/kids.jpg";
import "./categories.scss";

function Categories() {
  return (
    <section>
      <h1 className="title">CATEGORIES</h1>
      <span className="category-items">
        <Category imageSrc={men} name="men" />
        <Category imageSrc={women} name="women" />
        <Category imageSrc={kids} name="kids" />
      </span>
    </section>
  );
}

export default Categories;
