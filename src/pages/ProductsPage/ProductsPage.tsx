import { useEffect, useState } from "react"
import { axiosApi } from "../../axiosApi"
import type { IProduct } from "../../types"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import { Link } from "react-router"

export const ProductsPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect( () => {
      const getProducts = async() => {
        try {
            const response = await axiosApi<IProduct[]>('/products')
            setProducts(response.data)
        } catch (error) {
          console.log(error)
        } 
      }
      getProducts()
    }, [])

    return (
<div>
    <Link to='/product/create'>
        Create Product
    </Link>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
            {
                products.map((productItem) => (
                    <ProductCard
                        product={productItem}
                        key={productItem.id}
                    />
                ))
            }
        </div>
</div>
    )
}