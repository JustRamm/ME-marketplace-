import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/BackButton';
import { Trophy } from 'lucide-react';

const BestSellersScreen = () => {

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
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <Trophy size={48} color="var(--accent)" style={{ marginBottom: '20px' }} />
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Best Sellers</h1>
          <p style={{ color: 'var(--text-secondary)' }}>The products our community can't get enough of.</p>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellersScreen;
