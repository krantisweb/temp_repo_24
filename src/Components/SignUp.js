import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import VinayanLogo from '../assets/images/vinayan-logo.png'; // Import the logo image

 function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            name: name,
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response && error.response.status === 401) {
                alert("Invalid credentials");
            } else {
                alert("An error occurred while processing your request.");
            }
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <img src={VinayanLogo} alt="Vinayan Logo" className="mb-4 mx-auto " style={{ width: '150px' }} /> {/* Use the logo image */}
                <div className="mb-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter a valid email address"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        placeholder="Enter password"
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <button type="button" className="w-full py-2 bg-[#BE2323]  text-white rounded-md  focus:outline-none" onClick={() => registerUser()}>Sign Up</button>
                </div>
                <p className="text-center mt-4">Login to your account <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
            </div>
        </div>
    );
}
export default RegisterPage;