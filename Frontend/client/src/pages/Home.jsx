import { useEffect, useState } from 'react';
import axios from 'axios';
import React from "react"

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg">
          <img src={product.image} className="w-full h-50 object-cover" alt={product.title} />
          <h2 className="font-bold text-lg mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button className="bg-blue-500 text-white py-2 px-4 mt-2 w-full">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;




// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center">Welcome to Our Store</h1>
//       <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-6">
//         {products.map(product => (
//           <div key={product.id} className="border p-4 shadow-md rounded-lg">
//             <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
//             <h2 className="text-xl mt-2">{product.title}</h2>
//             <p className="text-lg font-semibold">${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

