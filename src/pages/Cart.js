import React, {useEffect, useState} from 'react';
import Link from 'next/link';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  function removeFromCart(index) {
    const newCart = cart.slice();
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24}}>
      <h1>Your Cart</h1>
      <Link href="/Store" style={{float: 'right', marginBottom: 16}}>
        Back to Store
      </Link>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{listStyle: 'none', padding: 0}}>
          {cart.map((item, idx) => (
            <li
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 16,
                borderBottom: '1px solid #eee',
                paddingBottom: 8,
              }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: 48,
                  height: 48,
                  objectFit: 'cover',
                  borderRadius: 4,
                  marginRight: 16,
                }}
              />
              <div style={{flex: 1}}>
                <div style={{fontWeight: 'bold'}}>{item.name}</div>
                <div>${item.price.toFixed(2)}</div>
              </div>
              <button
                onClick={() => removeFromCart(idx)}
                style={{marginLeft: 8}}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
