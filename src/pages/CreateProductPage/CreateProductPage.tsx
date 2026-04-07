import { Typography } from "@mui/material"
import { ProductForm } from "../../components/ProductForm/ProductForm"
import { axiosApi } from "../../axiosApi"
import type { ProductCreate } from "../../types"
import { useNavigate } from "react-router"

export const CreateProductPage = () => {
    const navigate = useNavigate()

    const createProduct = async(data: ProductCreate) => {
        try {
            await axiosApi.post('/products', data)
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap:'20px'
            }}
        >
            <Typography align="center" variant="h3">
                Create product
            </Typography>
            <ProductForm onSubmit={createProduct}/>
        </div>
    )
}