import { useEffect, useState } from "react";
import Axios from 'axios';

const User = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch stored user data from localStorage
        const storedData = JSON.parse(localStorage.getItem('userData'));

        // Check if storedData is available
        console.log(storedData)
        if (storedData) {
            // Prepare data object to send as query parameters
            const data = {
                Username: storedData.Username,
                Password: storedData.Password
            };

            // Send GET request to backend API
            Axios.get("http://localhost:8000/getData", { params: data })
                .then((res) => {
                    // Handle response data
                    if (res.data) {
                        setUserData(res.data);
                    } else {
                        console.log("User not found or credentials do not match.");
                    }
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <div>
            
            {userData && (
                <div>
                    <h2>Hello, {userData.Username}</h2>
                    <p>Hobbies: {userData.Hobbies}</p>
                    <p>Interests: {userData.Interests}</p>
                </div>
            )}
        </div>
    );
};

export default User;
