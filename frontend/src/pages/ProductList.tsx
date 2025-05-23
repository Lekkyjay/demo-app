import { useLoaderData } from 'react-router'
import type { IProduct } from '../lib/types'

export default function Products() {
  const { products } = useLoaderData() as { products: IProduct[] }
  const food = { pizza: '🍕', burger: '🍔', fries: '🍟' }
  // if (food.burger === '🍔') {
  //   throw new Error('error: no burger allowed!!!')
  // }

  // setTimeout(() => {
  //   throw new Error('setTimeout..... Something went wrong')
  // }, 1000)

  const onClickHandler = () => {
    throw new Error('onClickHandler..... Something went wrong')
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <p>Burger....: {food.burger}</p>
      <button onClick={onClickHandler}>Click</button>
      <Cat />
      {products.length > 0 
      ? (
          <ul className="list-disc list-inside">
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        ) 
      : (<div>No products available.</div>)}
    </div>
  )
}


const Cat = () => {
  // throw new Error('error')
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
    </div>
  )
}