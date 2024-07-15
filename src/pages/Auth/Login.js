import React, { useState } from "react";
import Layout from "../../component/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authData, setAuthData] = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    // form function
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        try {
            const res = await axios.post("/api/v1/auth/login", {
                email,
                password,
            });
            console.log(res);
            if (res && res.data.success) {
                setAuthData(res.data.user);
                localStorage.setItem("auth", res.data.token);
                if(res.data.user.role === 1){
                    window.location.href = "/admin-panel";
                }else{
                    window.location.href = "/user-panel";
                }
                
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    return (
        <Layout title="Register - Ecommer App">
            <div className="form-container ">
                <form onSubmit={handleSubmit}>
                    <h4 className="title">LOGIN FORM</h4>

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email "
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>



                    <div className="mb-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("/ForgetPassword");
                            }}
                        >
                            Forgot Password
                        </button>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        LOGIN
                    </button>

                </form>
            </div>
        </Layout>
    );
};

export default Login;