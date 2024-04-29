import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const phoneCodes = [
  {
    value: '+1',
    label: '+1',
  },
  {
    value: '+44',
    label: '+44',
  },
  {
    value: '+91',
    label: '+91',
  },
  // Add more phone codes as needed
];

function MyComponent() {
  const [formData, setFormData] = React.useState({ phoneno: '', countryCode: '+1' });
  const [errors, setErrors] = React.useState({ phoneno: false });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <center>
      <CallIcon style={{ fontSize: 30, paddingTop: '10px', marginRight: '8px' }} />
      <TextField
        id="outlined-basic"
        label="Your Phone No"
        variant="outlined"
        name="phoneno"
        type='text'
        value={formData.phoneno}
        onChange={onHandleChange}
        error={Boolean(errors.phoneno)}
        className='inputFieldsCss'
        InputProps={{
          startAdornment: (
            <TextField
              select
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              variant="outlined"
            >
              {phoneCodes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          ),
        }}
      />
      <br /><br />
    </center>
  );
}

export default MyComponent;
