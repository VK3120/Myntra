// src/components/ThriftStore/AddProduct.js
import React, { useState } from 'react';
import './Thriftstore.css'; // Ensure this file exists for styling

const AddProduct = ({ onAddProduct }) => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [uses, setUses] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      email,
      description,
      price,
      category,
      uses,
      imageUrl: URL.createObjectURL(image),
    };
    onAddProduct(newProduct);
    setEmail('');
    setDescription('');
    setPrice('');
    setCategory('');
    setUses('');
    setImage(null);
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add a New Product</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
      </label>
      <label>
        Number of Uses:
        <input type="number" value={uses} onChange={(e) => setUses(e.target.value)} required />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
