import React, { useEffect, useState } from 'react';
import "./MyLogin.css"
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
import CallIcon from '@mui/icons-material/Call';
import MenuItem from '@mui/material/MenuItem';
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

        // const url = 'http://localhost:8080/api/saveUser';
        const url = 'https://1163-115-98-202-101.ngrok-free.app/signup';
        
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
            alert("User has created by this email or phone no : " + myObj.email + myObj.phone_number);
            // alert("User has created by the email: ",myObj.email);
            nav('/');

        } catch (error) {
            console.error('Error sending POST request:', error.message);
        }
    }

    // const clearSigupnData = () => {
    //     setFormData({
    //         username: '',
    //         email: '',
    //         password: '',
    //         confpass: ''
    //     })
    //     const errors = {};
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };

    const [formData, setFormData] = useState({
        // username: '',
        first_name:'',
        last_name:'',
        email: '',
        phone_number: '+91',
        password: '',
        confpass: ''
    });
    const [errors, setErrors] = useState({
        // username: '',
        first_name:'',
        last_name:'',
        email: '',
        phone_number: '+91',
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

    const handleKeyDown = (e) => {
        const numericKeys = /[0-9]/;
        const isBackspace = e.key === 'Backspace';
        const isDelete = e.key === 'Delete';
        const isLeftArrow = e.key === 'ArrowLeft';
        const isRightArrow = e.key === 'ArrowRight';

        // Disable backspace, delete, left arrow, and right arrow if the length is 3 or less
        if ((isBackspace || isDelete || isLeftArrow || isRightArrow) && formData.phone_number.length <= 3) {
            e.preventDefault();
        }

        // Allow backspace, delete, left arrow, right arrow, and numeric keys
        if (!numericKeys.test(e.key) && !isBackspace && !isDelete && !isLeftArrow && !isRightArrow) {
            e.preventDefault();
        }
    };

    const validateForm = () => {
        const errors = {};
        // if (!formData.username) {
        //     errors.username = "Username is required"
        // }
        if (!formData.first_name) {
            errors.first_name = "First Name is required"
        }
        if (!formData.last_name) {
            errors.last_name = "Last Name is required"
        }
        
        if (!formData.phone_number || !formData.phone_number.startsWith("+91") || formData.phone_number.length !== 13) {
            errors.phone_number = "Phone Number is required, must start with +91, and must be 13 characters long";
        }
            
        
        if (!formData.email) {
            errors.email = "Email Id is required"
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
        // if(formData.phone_number === "" || formData.phone_number ===){
        //     errors.phone_number = "Phone number should be 10 digits only"
        // }
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

                {/* <center>
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
                </center> */}

                <center>
                    <PersonIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        name="first_name"
                        type='text'
                        value={formData.first_name}
                        onChange={onHandleChange}
                        error={Boolean(errors.first_name)}
                        className='inputFieldsCss' /><br /><br />
                </center>
                <center>
                    <PersonIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        name="last_name"
                        type='text'
                        value={formData.last_name}
                        onChange={onHandleChange}
                        error={Boolean(errors.last_name)}
                        className='inputFieldsCss' /><br /><br />
                </center>

                <center>
                    <MailIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <TextField
                        id="outlined-basic"
                        label="Your Email"
                        variant="outlined"
                        name="email"
                        type='text'
                        value={formData.email}
                        onChange={onHandleChange}
                        error={Boolean(errors.email)}
                        className='inputFieldsCss' /><br /><br />
                </center>

                <center>
                    <CallIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <TextField
                        id="outlined-basic"
                        label="Your Phone No"
                        variant="outlined"
                        name="phone_number"
                        type='tel'
                        value={formData.phone_number}
                        onChange={onHandleChange}
                        onKeyDown={handleKeyDown}
                        error={Boolean(errors.phone_number)}
                        className='inputFieldsCss'
                        inputProps={{ maxLength: 13, inputMode: 'numeric' }}
                    /><br /><br />
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
                        onClick={() => { nav('/'); }}
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