import { useFormik } from "formik";
// import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import './login.css'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


const validate = (values) => {
    const errors = {};
    if (!values.Name) {
        errors.Name = "Username Required !!!";
    }
    if (!values.Password) {
        errors.Name = "Password Required !!!";
    } 
    return errors
}

const Login = () => {
    const navi = useNavigate();
    const formikk = useFormik({
        initialValues: {
            Username: "",
            Password: ""
        }, validate,
        onSubmit: async (values) => {
            console.log(values);
            const data = {
                Username: formikk.values.Username,
                Password: formikk.values.Password
            }

            Axios.post("http://localhost:8000/login", data)
                .then((res) => {
                    if (res.data == "1") {
                        localStorage.setItem('userData', JSON.stringify(data));
                        console.log("Logged In Succesfully!!!");
                        navi('/userpage')
                    }
                    else {
                        console.log("User Doesn't Exist")
                        alert("User Doesn't Exist")
                    }
                })
        }
    })
    return (
        <div className="login">
            <form onSubmit={formikk.handleSubmit} >
                <h2 style={{ fontSize: '40px' }}>Log-In</h2><br />


                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Username" variant="filled" type="text"
                        name="Username"
                        onBlur={formikk.handleBlur}
                        onChange={formikk.handleChange}
                        value={formikk.values.Username} />
                </Box>
                {formikk.touched.Username && formikk.errors.Username ? <div>{formikk.errors.Username}</div> : null}<br />
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Password" variant="filled" type="password"
                        name="Password"
                        onBlur={formikk.handleBlur}
                        onChange={formikk.handleChange}
                        value={formikk.values.Password} />
                </Box>
                {formikk.touched.pass && formikk.errors.Password ? <div>{formikk.errors.Password}</div> : null}
                <br />


                <Button variant="contained" type="submit" > Log In</Button>
            </form>
        </div>
    )
}
export default Login