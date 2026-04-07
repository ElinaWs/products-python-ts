import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { IProduct } from '../../types';
import { useNavigate } from 'react-router';

interface Props {
    product: IProduct
}

export const ProductCard = ({product}:Props) => {
    const navigate = useNavigate()
    const goToProductPage = () => {
        navigate(`/products/${product.id}`)
    }
    return (
        <Card>
            <CardContent>
                <Typography>{product.name}</Typography>
                <Typography>{product.price} som</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={goToProductPage}>
                    More info
                </Button>
            </CardActions>
        </Card>
    )
}