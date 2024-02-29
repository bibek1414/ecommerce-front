import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
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

  const fetchRecommendations = async () => {
    try {
      const res = await axios.get('/api/recommendations');
      return res.data;
    } catch (error) {
      console.error('Failed to fetch recommendations:', error);
      return [];
    }
  };

  useEffect(() => {
    const loadRecommendations = async () => {
      const recommendedProducts = await fetchRecommendations();
      const mergedProducts = [...products, ...recommendedProducts];
      shuffleProducts(mergedProducts);
    };
    loadRecommendations();
  }, [products]);

  const shuffleProducts = (mergedProducts) => {
    const shuffledArray = [...mergedProducts];
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
