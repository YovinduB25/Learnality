import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import "../SignIn.css";
import SimpleReactValidator from 'simple-react-validator';
import Logo from "../images/logo.png"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function StudentSignIn() {

    const { register,
         handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);

    const username = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        var axios = require('axios');
        var data = JSON.stringify({
            "username": username?.current?.value,
            "password": password?.current?.value
        });
        
        console.log(data);

        var config = {
            method: 'post',
            url: 'https://learnality-api.herokuapp.com/api/user/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                const userId = response.data[0].id;
                localStorage.setItem("userId", userId)
                navigate("/Home");
            })
            .catch(function (error) {
                alert("Incorrect password/username combination");
            });
    };
    return (
        <div className="main-sign-in">
            <div className="sign-in-pic"></div>
            <div className="sign-in-container">
                <div className="container-heading-section">
                    <img src={Logo} alt="logo"></img>
                    <h1 className="container-heading">Learnality</h1>
                </div>
                <form method="POST" onSubmit={handleLogin}>
                    <div className="username">
                        <input 
                        type="text"
                        name="username"
                        ref={username} 
                        placeholder="Username"
                        className="form-control" 
                        // {...register("username", { required: 'Name is Required'})}
                        />
                        <br/><small className='text-danger'>Name is Required</small>

                    </div>

                    <div className="password">
                        <input
                        type="password" 
                        name="password" 
                        ref={password} 
                        placeholder="Password" 
                        className="form-control"
                        // {...register("password", { required: 'Password is Required'})}
                        />
                        <small className='text-danger'>Password is Required</small>
                    </div>

                    <div className="log-in-button">
                        <button>Log in</button>
                    </div>
                </form>


                <div className="forgot-password">
                    <Link to="/ResetPassword" className="forgot-password">Forgotten your password?</Link>
                </div>

            </div>
            <div className="sign-in-sub-container">
                <p>Don't have an account? <Link to="/StudentSignUp" className="sign-in-sign-up-link">Sign Up</Link></p>
            </div>
        </div>
    );

}

