import React from 'react'
import { Products } from '../../Utilities/ProductData'
import ProductCard from '../ProductCard/ProductCard'
import "./Women.css"
import { Link } from 'react-router-dom'

const Women = () => {
  return (
    <main>
      <section className="breadcrumb">
        <span>Home</span> / <span>Clothing</span> / <span>Tops Online</span>
      </section>
      <section className="content">
        <aside className="filter">
          <h2>Filters</h2>
          <div className="categories">
            <h3>Categories</h3>
            <ul style={{ listStyleType: "circle" }}>
              <li>Tops</li>
              <li>Thermal Tops</li>
              <li>Swim Tops</li>
            </ul>
          </div>
          <div className="brands">
            <h3>Brand</h3>
            <ul style={{ listStyleType: "circle" }}>
              <li>LULU &amp; SKY</li>
              <li>BAESD</li>
              <li>StyleCast</li>
              <li>Trendyol</li>
              <li>DressBerry</li>
              <li>Poshyaa</li>
              <li>Tokyo Talkies</li>
            </ul>
          </div>
        </aside>
        <section className="products">
            {Products.map((Product, id) => (
              <ProductCard Product={Product} />
            ))}
        </section>
      </section>
    </main>
  );
}

export default Women