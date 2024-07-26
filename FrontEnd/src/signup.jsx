import React from "react";
import { useFormik } from "formik";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import Select, { SelectChangeEvent } from '@mui/material/Select';

const validate = (values) => {

    const errors = {};
    if (!values.Name) {
        errors.Name = 'Required';
    }
    if (!values.Email) {
        errors.Email = 'Required';
    }
    if (!values.User_Type) {
        errors.User_Type = 'Required';
    }
    if (!values.Password) {
        errors.Password = 'Required';
    }
    if (!values.Confirm_Password) {
        errors.Confirm_Password = 'Required';
    }
    if (values.Password != values.Confirm_Password) {
        errors.Confirm_Password = "Passwords don't Match"
    }
    return errors;

}

const SignUp = () => {
    const [usertype, setUsertype] = React.useState<string>('');

  const handleChange = (event: SelectChangeEvent<string> ) => {
    setUsertype(event.target.value as string);
  };
    const formikk = useFormik({
        initialValues: {
            Name: "",
            Email: "",
            User_Type: "",
            Password: "",
            Confirm_Password: ""
        }, validate,
        onSubmit: {

        }
    })
    return (
        <>
            <div className="register">
                <form onSubmit={formikk.handleSubmit} >
                    <h2 style={{ fontSize: '40px', paddingBottom: '0px' }}>Sign-Up</h2><br />


                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Name" variant="filled" type="text"
                            name="Name"
                            onBlur={formikk.handleBlur}
                            onChange={formikk.handleChange}
                            value={formikk.values.Name} />
                    </Box>
                    {formikk.touched.Name && formikk.errors.Name ? <div>{formikk.errors.Name}</div> : null}<br />
                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField label="Email" variant="filled" type="text"
                            name="Email"
                            onBlur={formikk.handleBlur}
                            onChange={formikk.handleChange}
                            value={formikk.values.Email} />
                    </Box>
                    {formikk.touched.Email && formikk.errors.Email ? <div>{formikk.errors.Email}</div> : null}
                    <br />
                    <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="user_type">User Type</InputLabel>
                        <Select
                            labelId="user_type"
                            id="demo-simple-select-required"
                            value={usertype}
                            label="User Type"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                    <br />
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
                        <TextField label="Confirm Password" variant="filled" type="password"
                            name="Confirm_Password"
                            onBlur={formikk.handleBlur}
                            onChange={formikk.handleChange}
                            value={formikk.values.Confirm_Password} />
                    </Box>
                    {formikk.touched.Confirm_Password && formikk.errors.Confirm_Password ? <div>{formikk.errors.Confirm_Password}</div> : null}
                    <br />


                    <Button variant="contained" type="submit" > Register </Button>
                </form>
            </div>
        </>
    )
}

export default SignUp;