import React, { useState } from 'react';

const SignInPage = () => {
    const [formData, setFormData] = useState({
        loginMethod: 'phone', // Default login method
        phoneNumber: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission based on selected login method
        if (formData.loginMethod === 'phone') {
            // Handle phone number login
            console.log("Phone Number:", formData.phoneNumber);
        } else {
            // Handle email login
            console.log("Email:", formData.email);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="radio" 
                        id="phoneLogin" 
                        name="loginMethod" 
                        value="phone" 
                        checked={formData.loginMethod === 'phone'}
                        onChange={handleChange} 
                    />
                    <label htmlFor="phoneLogin">Phone Number</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="emailLogin" 
                        name="loginMethod" 
                        value="email" 
                        checked={formData.loginMethod === 'email'}
                        onChange={handleChange} 
                    />
                    <label htmlFor="emailLogin">Email</label>
                </div>
                {formData.loginMethod === 'phone' ? (
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder="Enter Phone Number" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        required 
                    />
                ) : (
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Enter Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                )}
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default SignInPage;
