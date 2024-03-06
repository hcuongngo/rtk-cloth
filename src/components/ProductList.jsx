import React, { useEffect } from 'react'
import fakeAPI from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/product/productSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product)
  console.log("products", products);

  const fetchProducts = async () => {
    const response = await fakeAPI().get("")
    console.log("response", response);
    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return products?.length === 0 ? (<>Loading</>):(
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto',
      gap: 20,
      padding: 20,
      cursor: "pointer",
    }}>
      {
        products.map((item, index) => {
          const { id, price, category, image, description } = item;
          
          return (
            <div onClick={() => {
              console.log({id})
            }} key={index} style={{
              border: '1px solid black',
              borderRadius: 10,
              padding: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
              <img style={{
                width: 200,
                height: 200,
              }} src={image} alt="image" />
              <div>
                <h3>{category}</h3>
                <p>{price}</p>
                <p>{description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductList