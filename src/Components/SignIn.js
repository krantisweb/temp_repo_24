import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import VinayanLogo from '../assets/images/vinayan-logo.png';

 function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const logInUser = () => {
        if (email.length === 0) {
            alert("Email has been left blank!");
        } else if (password.length === 0) {
            alert("Password has been left blank!");
        } else {
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                navigate("/dashboard");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                    <img className="mx-auto h-40 w-auto mb-4" src={VinayanLogo} alt="Vinayan Logo" />
                    <h2 className="text-1xl font-extrabold text-gray-900">Log Into Your Account</h2>
                </div>
                <form className="mt-6 space-y-6" onSubmit={logInUser}>
                    <div className="space-y-2">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-600">Email address</label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={logInUser}
                            className="w-full py-2 bg-[#BE2323]  text-white rounded-md  focus:outline-none "
                        >
                            Sign In
                        </button>
                    </div>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default SignIn;