// // import { useEffect, useState } from "react";
// // import API from "../api/api";

// // function Products() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     API.get("/products").then(res => setProducts(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Products</h2>
// //       {products.map(p => (
// //         <div key={p.id}>
// //           {p.name} - ₹{p.price}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Products;



// import { useEffect, useState } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Products List</h2>

//       <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price (₹)</th>
//           </tr>
//         </thead>

//         <tbody>
//           {products.length > 0 ? (
//             products.map((p) => (
//               <tr key={p.id}>
//                 <td>{p.id}</td>
//                 <td>{p.name}</td>
//                 <td>{p.price}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="3">Loading products...</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Products;
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://firstproject-1-tm8k.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Table</h2>

      <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
