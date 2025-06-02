import React, { createContext, useState, useMemo } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const searchProducts = (term) => {
    setSearchTerm(term);
  };

  // Memoize the context value
  const value = useMemo(() => ({
    products,
    setProducts,
    addProduct,
    removeProduct,
    searchProducts
  }), [products]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;