import { useFormik } from "formik";
// import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'
import './register.css'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
const Register = () =>{
    const navi = useNavigate();
const formikk= useFormik({
    initialValues:{
        Username:"",
        Password:"",
        Hobbies:"",
        Interests:""
    },
    onSubmit:async(values)=>{
        console.log(values);
        const data={
            Username:formikk.values.Username,
            Password:formikk.values.Password,
            Hobbies:formikk.values.Hobbies,
            Interests:formikk.values.Interests
        }
            Axios.post("http://localhost:8000/register",data)
        .then((res)=>{
            if(res.data=="1")
                {
                    console.log("Registered Succesfully!!!")
                    navi('/login')
                }
                else{
                    console.log("Couldn't Register")
                    alert("Couldn't Register")
                }
        })
    }
})
return(
    <div className="register">
        <form onSubmit={formikk.handleSubmit} >
        <h2 style={{ fontSize: '40px' ,paddingBottom:'0px'}}>Register</h2><br/>

                        
                        <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  label="Username" variant="filled" type="text"
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
                        {formikk.touched.Password && formikk.errors.Password ? <div>{formikk.errors.Password}</div> : null}
                        <br />
                        <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Hobbies" variant="filled" type="text"
                            name="Hobbies"
                            onBlur={formikk.handleBlur}
                            onChange={formikk.handleChange}
                            value={formikk.values.Hobbies} />
                    </Box>
                        {formikk.touched.Hobbies && formikk.errors.Hobbies ? <div>{formikk.errors.Hobbies}</div> : null}
                        <br />
                        <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Interests" variant="filled" type="text"
                            name="Interests"
                            onBlur={formikk.handleBlur}
                            onChange={formikk.handleChange}
                            value={formikk.values.Interests} />
                    </Box>
                        {formikk.touched.Interests && formikk.errors.Interests ? <div>{formikk.errors.Interests}</div> : null}
                        <br />
                      
                        
                        <Button  variant="contained" type="submit" > Register </Button>
        </form>
    </div>
)
}
export default Register