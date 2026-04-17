import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map(p => (
        <div key={p.id} style={{border:"1px solid #ccc", margin:"10px", padding:"10px"}}>
          
          <img 
            src={p.image || "https://via.placeholder.com/150"} 
            width="150" 
            alt={p.name}
          />

          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <p>Category: {p.category}</p>
          <p>Stock: {p.stock}</p>

        </div>
      ))}

    </div>
  );
}

export default App;