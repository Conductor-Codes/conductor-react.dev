/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';

interface Product {
  name: string;
  price: string;
  description: string;
  color: string;
  image: string;
}

const products: Product[] = [
  {
    name: 'Black Tote',
    price: '$10 USD',
    description:
      'A sleek and professional black tote bag perfect for carrying your laptop, books, and React swag. Made with durable materials for everyday use.',
    color: '#374151',
    image: '/images/store/black-tote.jpg',
  },
  {
    name: 'Pink Tote',
    price: '$10 USD',
    description:
      'A vibrant pink tote bag that stands out in any crowd. Perfect for React enthusiasts who want to show their style while carrying their essentials.',
    color: '#ec4899',
    image: '/images/store/pink-tote.jpg',
  },
  {
    name: 'White Tote',
    price: '$10 USD',
    description:
      'A clean and minimalist white tote bag that goes with everything. Ideal for developers who prefer a classic, understated look.',
    color: '#d1d5db',
    image: '/images/store/white-tote.jpg',
  },
  {
    name: 'Green Tote',
    price: '$10 USD',
    description:
      'An eco-friendly green tote bag that represents growth and sustainability. Perfect for environmentally conscious React developers.',
    color: '#10b981',
    image: '/images/store/green_tote.jpg',
  },
];

export function ProductGrid() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        marginTop: '32px',
      }}>
      {products.map((product, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            transition: 'box-shadow 0.2s ease-in-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
          }}>
          {/* Product Image */}
          <div
            style={{
              aspectRatio: '1',
              backgroundColor: '#f9fafb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>

          {/* Product Info */}
          <div style={{padding: '20px'}}>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '600',
                marginBottom: '8px',
                color: '#111827',
              }}>
              {product.name}
            </h3>

            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.5',
                marginBottom: '16px',
                minHeight: '60px',
              }}>
              {product.description}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}>
              <span
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#0ea5e9',
                }}>
                {product.price}
              </span>
            </div>

            <button
              style={{
                width: '100%',
                backgroundColor: '#0ea5e9',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0284c7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0ea5e9';
              }}
              onClick={() => {
                alert(`Added ${product.name} to bag!`);
              }}>
              Add to Bag
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
