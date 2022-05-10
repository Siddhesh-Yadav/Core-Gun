import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const host = "https://core-gun.herokuapp.com";
  
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if(json.success){
      // login and redirect 
      localStorage.setItem('token', json.authtoken);
      navigate('/');
    }
      
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const signUp=()=>{
    navigate("/signup")
  }
  return (
    <div className="text-center">
      <h1>Login to your account</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3 row my-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control-plaintext bg-dark text-light"
              id="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              placeholder="Email must be valid     dummy email-test1@gmail.com"
            />
          </div>
        </div>
        <div className="mb-3 row my-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control bg-dark text-light"
              id="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              placeholder="Password must be 6 characters longs   dummy password-test1zzz"
            />
          </div>
        </div>
        <button type="submit"  className="custom-btn Btn green"><span>Login</span></button>
        <button onClick={signUp} className="custom-btn Btn green"><span>Signup</span></button>
        
      </form>
    </div>
  );
};

export default Login;
