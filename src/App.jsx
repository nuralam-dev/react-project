import { useEffect, useState } from "react";
import "./App.css";
import SingleProducts from "./SingleProducts";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products);
  return (
    <>
      <div className="main-container mx-auto p-8">

       <div>
         {products.map((pd) => (
          <SingleProducts></SingleProducts>
        ))}
       </div>

        <div className="flex justify-around mx-auto p-8">
          
        <div className="card-container text-3xl w-xs shadow-[4px_4px_8px_gray] p-4">
          <h1>Add To card</h1>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
