import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';
import '../styles/HomeScreen.css'; // Reusing grid styles


const ProductListingScreen = () => {

  const [products, setProducts]= useState([]);
    
  useEffect(()=>{fetchProducts();},[]);
    
  async function fetchProducts(){
    const {data, error} = await supabase
    .schema('marketplace_dataspace')
    .from('products')
    .select('*');
    
    if (error){
      console.error(error);
        return;
    }
    setProducts(data);
    }

  return (
    <div className="section" style={{ paddingTop: '120px' }}>
      <div className="container">
        <BackButton />
        <h2 className="section-title">All Products</h2>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}; 

export default ProductListingScreen;
