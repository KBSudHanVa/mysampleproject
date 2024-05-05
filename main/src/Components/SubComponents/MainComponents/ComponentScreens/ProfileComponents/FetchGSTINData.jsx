import React, { useState } from 'react';
import axios from 'axios';


const YourComponent = () => {
    const [responseData, setResponseData] = useState(null);
    const apiKey = 'bec931f2840a1d6bd9d5aa207e9dc4f8'; // Replace with your actual API key
    const gstinNumber = '36AAKCB4699K1ZY'; // Replace with the GSTIN number

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://sheet.gstincheck.co.in/check/${apiKey}/${gstinNumber}`);
            setResponseData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {responseData && (
                <div>
                    {/* Display response data here */}
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default YourComponent;
