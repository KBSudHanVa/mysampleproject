import React, { useEffect, useState } from 'react';
import "./Sample.css"
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import HttpsIcon from '@mui/icons-material/Https';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function MySignup() {

    const nav = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [showConformPass, setShowConformPass] = React.useState(false);
    const handleClickShowConformPass = () => setShowConformPass((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const myRegisterApi = async (myObj) => {

        

        const url = 'http://localhost:8080/api/saveUser';
        const dataToSend = myObj;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });
            if (!response.ok) {
                throw new Error('Failed to send POST request');
            }
            console.log('POST request successful user is registered');
            alert("User has created by this email: "+ myObj.emailid);
            // alert("User has created by the email: ",myObj.emailid);
            nav('/');

        } catch (error) {
            console.error('Error sending POST request:', error.message);
        }
    }

    // const clearSigupnData = () => {
    //     setFormData({
    //         username: '',
    //         emailid: '',
    //         password: '',
    //         confpass: ''
    //     })
    //     const errors = {};
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };

    const [formData, setFormData] = useState({
        username: '',
        emailid: '',
        password: '',
        confpass: ''
    });
    const [errors, setErrors] = useState({
        username: '',
        emailid: '',
        password: '',
        confpass: ''
    });
    const { confpass, ...formDataWithoutConfpass } = formData;

    const onHandleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        // validateForm();
    };

    const onHandleSubmit = (event) => {
        event.preventDefault();
        if (validateForm() && validateFormm) {
            console.log(formDataWithoutConfpass);
            myRegisterApi(formDataWithoutConfpass);
        } else {
            console.log("enter valid data");
        }
    }

    const validateForm = () => {
        const errors = {};
        if (!formData.username) {
            errors.username = "Username is required"
        }
        if (!formData.emailid) {
            errors.emailid = "Email Id is required"
        }
        if (!formData.password) {
            errors.password = "Password is required"
        }
        if (formData.confpass !== formData.password || !formData.confpass) {
            errors.confpass = "Password should match"
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const validateFormm = () => {
        const errors = {};
        if (formData.confpass !== formData.password) {
            errors.confpass = "Password should match"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    useEffect(() => {
        validateFormm();
    }, [formData.password, formData.confpass])

    return (
        <div className='container'>
            <div className={'sign-up-container'}>

                {/* style={{display:'none'}}> */}

                <h1 className='sign-padding'>Sign up</h1>

                <center>
                    <PersonIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <TextField
                        id="outlined-basic"
                        label="Your Name"
                        variant="outlined"
                        name="username"
                        type='text'
                        value={formData.username}
                        onChange={onHandleChange}
                        error={Boolean(errors.username)}
                        className='inputFieldsCss' /><br /><br />
                </center>

                <center>
                    <MailIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <TextField
                        id="outlined-basic"
                        label="Your Email"
                        variant="outlined"
                        name="emailid"
                        type='text'
                        value={formData.emailid}
                        onChange={onHandleChange}
                        error={Boolean(errors.emailid)}
                        className='inputFieldsCss' /><br /><br />
                </center>

                <center>
                    <HttpsIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <FormControl sx={{ m: 0.5, width: '70%', fontSize: '6px' }} variant="outlined">
                        <InputLabel error={Boolean(errors.password)} htmlFor="outlined-adornment-password" >Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            name='password'
                            value={formData.password}
                            onChange={onHandleChange}
                            error={Boolean(errors.password)}
                        />
                    </FormControl><br /><br />
                </center>

                <center>
                    <KeyIcon style={{ fontSize: 30, paddingTop: '13px', marginRight: '8px' }} />
                    <FormControl sx={{ m: 0.5, width: '70%', fontSize: '6px' }} variant="outlined">
                        <InputLabel error={Boolean(errors.confpass)} htmlFor="outlined-adornment-password">Conform Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showConformPass ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConformPass}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConformPass ? <VisibilityOff /> : <Visibility />}
                                    </IconButton >
                                </InputAdornment>
                            }
                            label="Conform Password"
                            name='confpass'
                            value={formData.confpass}
                            onChange={onHandleChange}
                            error={Boolean(errors.confpass)}
                        />
                    </FormControl><br /><br />
                </center>

                <center>
                    <Button variant="contained" onClick={onHandleSubmit}>Register</Button>
                    {/* <Button variant="text" onClick={() => { handleButtonClickSignup(); handleButtonClickMoveImg() }} style={{ marginLeft: '50px' }}>Sign in</Button> */}
                    <Button variant="text" 
                    onClick={()=>{nav('/');}}
                    // onClick={() => {
                    //     toggleVisibility();
                    //     clearSigninData();}} 
                    style={{ marginLeft: '50px' }}>Sign in</Button>

                </center>
            </div>

            {/* ============================================================================== */}

            <div className={"img-container"} >
                {/* {`img-container moveable-div ${isMoved ? 'move-left' : ''}`}> */}
                <img className='imgCss' src={require("../../Asserts/sample1.png")} alt="React Image" />
            </div>

        </div>
    )


}

export default MySignup;