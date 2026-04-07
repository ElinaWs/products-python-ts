import { Button, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material"
import { useState } from "react"
import { axiosApi } from "../../axiosApi"
import { useNavigate } from "react-router"

export const RegisterPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const handleRegister = async(event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            return console.error("Passwords don't match!")
        }

        const registerBody = {
            email,
            password,
            password_2: confirmPassword
        }

        try {
            const response = await axiosApi.post('/users/register', registerBody)
            const data = response.data;
            console.log(data)
            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Typography variant="h4" align="center">Registration</Typography>
            <form onSubmit={handleRegister}>
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

                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                    <OutlinedInput 
                        type="Password"
                        label='confirmPassword' 
                        value={confirmPassword} 
                        id='product-confirmPassword' 
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </FormControl>
                <Button type="submit" fullWidth variant="contained">Register</Button>
            </form>
        </div>
    )
}