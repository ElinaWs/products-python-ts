import type { ProductCreate } from "../../types"
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { Button } from "@mui/material";
import { useState } from "react";


interface Props {
    onSubmit: (product: ProductCreate) => void
}
export const ProductForm = ({onSubmit}:Props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('0')

    const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        const productForCreating:ProductCreate = {
            name: name,
            price: Number(price)
        }
        onSubmit(productForCreating)
    }

    return(
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="product-name">Name</InputLabel>
                <OutlinedInput label='Name' value={name} id='product-name' onChange={(e) => setName(e.target.value)} />
            </FormControl>
                
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">som</InputAdornment>}
                    label="Price"
                />
            </FormControl>
            <Button type='submit'>Create</Button>

        </form>
    )
}