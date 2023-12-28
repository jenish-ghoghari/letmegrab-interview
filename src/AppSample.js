import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [allProducts, setAllProducts] = useState([])
  const [dataLimit, setDataLimit] = useState(10)
  const [shortOrder, setShortOrder] = useState('asc')

  const getAllProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=${dataLimit}&sort=${shortOrder}`)
      console.log(response)
      setAllProducts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async (productId) => {
    try {
      const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProducts()
    deleteProduct(1)
  }, [dataLimit,shortOrder])
  
  return (
    <div className="App">

      <div style={{display:'flex',flexDirection:'column', width:'max-content'}}>
        <input 
          type="range" 
          name="data-limit" 
          id="data-limit" 
          value={dataLimit}
          max={20} 
          onChange={(e)=>{
            setDataLimit(e.target.value)
          }} 
        />

        <div style={{display:'flex'}}>
          <input 
            type="radio" 
            name="short" 
            id="short"
            checked={shortOrder === 'asc' ? true : false}
            onChange={(e)=>{
              if (e.target.checked) setShortOrder('asc')
            }} 
          />
          <label htmlFor="">Short to ascending order</label>
        </div>

        <div style={{display:'flex'}}>
          <input 
            type="radio" 
            name="short" 
            id="short"
            checked={shortOrder === 'desc' ? true : false}
            onChange={(e)=>{
              if (e.target.checked) setShortOrder('desc')
            }} 
          />
        <label htmlFor="">Short to descending order</label>
        </div>      
      </div>

      <table style={{border:"2px solid black"}}>
        <tr>
          <th>Sr no.</th>
          <th>Product category</th>
          <th>Product Price</th>
        </tr>
        {allProducts && allProducts.map((item)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td><img src={item.image} alt="" srcset="" /></td>
          </tr>
        ))}
      </table>

    </div>
  );
}

export default App;