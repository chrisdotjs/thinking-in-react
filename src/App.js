import React, { useState, UseEffect } from 'react';
import './App.css';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]

function SearchBar() {
  return (
    <div>SearchBar</div>
  )
}

function ProductCategoryRow() {
  return (
    <div>ProductCategoryRow</div>
  )
}

function ProductRow() {
  return (
    <div>ProductRow</div>
  )
}

function ProductTable({products}) {

  return (
    <div>
      ProductTable
      <ProductCategoryRow />
      <ProductRow />
    </div>
  )
}

function FilterableProductTable({products}) {
  return (
    <div>
      FilterableProductTable
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

function App() {
  return <FilterableProductTable products={PRODUCTS} />
}

export default App
