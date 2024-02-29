import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ProductBox from "./ProductBox";
import { RevealWrapper } from 'next-reveal';

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ProductsGrid({ products, wishedProducts = [] }) {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    // Shuffle the products array when the component mounts or when products change
    shuffleProducts();
  }, [products]);

  const shuffleProducts = () => {
    const shuffledArray = [...products];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    setShuffledProducts(shuffledArray);
  };

  return (
    <StyledProductsGrid interval={100}>
      {shuffledProducts?.length > 0 && shuffledProducts.map((product, index) => (
        <RevealWrapper key={product._id} delay={index * 50}>
          <ProductBox {...product}
            wished={wishedProducts.includes(product._id)} />
        </RevealWrapper>
      ))}
    </StyledProductsGrid>
  );
}



