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
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


function MySignin() {

    const nav = useNavigate();

    const [isVisible, setIsVisible] = useState(true);

    const handleTransition = () => {
        setIsVisible(false);
    };

    const [showPasswordSignin, setShowPasswordSignin] = useState(false);
    const handleClickShowPasswordSignin = () => setShowPasswordSignin((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const myLoginApi = async (myObj) => {
        const url = 'http://localhost:8080/api/login';
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
                // throw new Error('Failed to send POST request');
                alert("User Name or Password is not valid");
                localStorage.clear();
                throw new Error('User is or password wrong', response);
            }

            console.log('POST request successful');

            localStorage.clear();

            const responseObj = await response.json();

            console.log(responseObj.response['username']);
            console.log(responseObj.response['email']);
            console.log(responseObj.response['token']);

            localStorage.setItem('token', responseObj.response['token']);
            
            // console.log(response.json());
            nav('/home');

        } catch (error) {
            console.error('Error sending POST request:', error.message);
            // console.error('User is or password wrong', response);

        }
    }

    const clearSigninData = () => {
        setSigninData({
            emailid: '',
            password: ''
        })
        const errors = {};
        setSigninDataError(errors);
        return Object.keys(errors).length === 0;
    };

    const [signinData, setSigninData] = useState({
        emailid: '',
        password: ''
    });
    const [signinDataError, setSigninDataError] = useState({
        emailid: '',
        password: ''
    });
    const validateFormSigin = () => {
        const errors = {};

        if (!signinData.emailid) {
            errors.emailid = "Username is required"
        }
        if (!signinData.password) {
            errors.password = "Password is required"
        }
        setSigninDataError(errors);

        return Object.keys(errors).length === 0;
    }

    const onHandleSubmitSignin = (event) => {
        event.preventDefault();
        if (validateFormSigin()) {
            console.log(signinData);
            myLoginApi(signinData);
        } else {
            console.log("enter valid data");
        }
    }
    const onHandleChangeSignin = (event) => {
        const { name, value } = event.target;
        setSigninData((prevState) => ({ ...prevState, [name]: value }));
        setSigninDataError((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    return (
        // <div className={`transition-content transition-container ${isVisible ? 'visible' : 'hidden'}`}>
        <div className={`container`}>
            <div className={`img-container `} >
                {/* {`img-container moveable-div ${isMoved ? 'move-left' : ''}`}> */}
                <img className='imgCss' src={require("../../Asserts/sample1.png")} alt="React Image" />
            </div>

            {/* ==================================================================================== */}

            {/* <form onSubmit={onHandleSubmitSignin}> */}
            <div className={'sign-in-container'}>
                {/* <div className={`sign-in-container`} style={{ display: 'none' }}> */}
                <h1 className='sign-in-padding'>Sign in</h1>

                <center>
                    <MailIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
                    <TextField
                        id="outlined-basic"
                        label="Email Id / Phone No"
                        variant="outlined"
                        className='inputFieldsCss'

                        name="emailid"
                        type='text'
                        value={signinData.emailid}
                        onChange={onHandleChangeSignin}
                        error={Boolean(signinDataError.emailid)}
                    /><br /><br />
                </center>

                <center>
                    <HttpsIcon style={{ fontSize: 30, paddingTop: '12px', marginRight: '8px' }} />
                    <FormControl sx={{ m: 0.5, width: '70%', fontSize: '6px' }} variant="outlined">
                        <InputLabel error={Boolean(signinDataError.password)} htmlFor="outlined-adornment-password" >Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPasswordSignin ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordSignin}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPasswordSignin ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                            name='password'
                            value={signinData.password}
                            onChange={onHandleChangeSignin}
                            error={Boolean(signinDataError.password)}
                        />
                    </FormControl><br /><br />
                </center>

                <center>
                    <Button variant="text"
                        onClick={() => { nav('signup'); handleTransition() }}
                    // onClick={() => { toggleVisibility(); clearSigupnData() }}
                    >Register</Button>
                    <Button variant="contained" onClick={onHandleSubmitSignin} style={{ marginLeft: '50px' }}>Sign in</Button>
                </center>
            </div>
        </div>
        // </div>
    )

}

export default MySignin;