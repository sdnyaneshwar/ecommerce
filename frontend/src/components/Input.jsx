import React from 'react';

const Input = ({ placeholder, texture, type, value, setformData, formData, field }) => {
  const handleChange = (e) => {
    setformData({ ...formData, [field]: e.target.value });
  };

  return (
    <input 
      type={type} 
      className={`border rounded-md border-gray-600 ${texture}`} 
      value={value}  
      placeholder={placeholder}   
      onChange={handleChange} 
    />
  );
};

export default Input;
