import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import CallIcon from '@mui/icons-material/Call';

const YourComponent = () => {
    const [formData, setFormData] = useState({
        username: '',
        phoneno: '+91',
        emailid: '',
        password: '',
        confpass: ''
    });

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const errors = {}; // Assuming you have errors object

    return (
        <center>
            <CallIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
            <TextField
                id="outlined-basic"
                label="Your Phone No"
                variant="outlined"
                name="phoneno"
                type='tel'
                value={formData.phoneno}
                onChange={onHandleChange}
                error={Boolean(errors.phoneno)}
                className='inputFieldsCss' 
                inputProps={{ maxLength: 13, inputMode: 'numeric' }}
            /><br /><br />
        </center>
    );
};

export default YourComponent;
