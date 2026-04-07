import { Button, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import { axiosApi } from "../../axiosApi"

export const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = async(event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const response = await axiosApi.post(`users/login?email=${email}&password=${password}`)
            const data = response.data
            if (data.access_token) {
                localStorage.setItem('token', data.access_token)
                navigate('/')
            }
        } catch (e) {
            console.log (e)
        }
    }
    
    return (
        <div>
            <Typography variant="h4" align="center">Sign In</Typography>
            <form onSubmit={handleLogin}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput 
                        label='Name' 
                        value={email} 
                        id='product-name' 
                        onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput 
                        type="password"
                        label='password' 
                        value={password} 
                        id='product-password' 
                        onChange={(e) => setPassword(e.target.value)} />
                </FormControl>
                <Button type="submit" fullWidth variant="contained">Sign In</Button>
            </form>
        </div>
    )
}