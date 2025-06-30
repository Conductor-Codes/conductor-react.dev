import React, {useState, useEffect} from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'React Conf 2019 Mug',
    description: 'A stylish mug from React Conf 2019.',
    image: '/images/home/conf2019/nat.jpg',
    price: 12.99,
  },
  {
    id: 2,
    name: 'React Conf 2019 T-shirt',
    description: 'Comfy T-shirt from React Conf 2019.',
    image: '/images/home/conf2019/sophie.jpg',
    price: 19.99,
  },
  {
    id: 3,
    name: 'React Conf 2019 Sticker',
    description: 'Sticker pack from React Conf 2019.',
    image: '/images/home/conf2019/tae.jpg',
    price: 4.99,
  },
];

export default function Store() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  return (
    <div style={{maxWidth: 800, margin: '0 auto', padding: 24}}>
      <h1>Store</h1>
      <Link href="/Cart" style={{float: 'right', marginBottom: 16}}>
        Go to Cart ({cart.length})
      </Link>
      <div style={{display: 'flex', gap: 32, flexWrap: 'wrap'}}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: 16,
              width: 220,
            }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 140,
                objectFit: 'cover',
                borderRadius: 4,
              }}
            />
            <h2 style={{fontSize: 20}}>{product.name}</h2>
            <p>{product.description}</p>
            <p style={{fontWeight: 'bold'}}>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)} style={{marginTop: 8}}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
