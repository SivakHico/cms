import { useEffect, useState } from "react"
import useContentful from "./useContentful"
import ProductCard from "./ProductCard"
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const { getProducts } = useContentful()

  useEffect(() => {
    getProducts().then((response) => setProducts(response));
  }, []);

  return (
    <div className="App">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default App
