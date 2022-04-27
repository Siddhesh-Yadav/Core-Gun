import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const host = "http://localhost:5000";
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    img:"",
    description:""
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name,email,password,img,description} = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify({name,email,password,img,description}),
    });
    const json = await response.json();
    if(json.success){
      localStorage.setItem('token', json.authtoken);
      navigate("/");
    }
    else{
      console.log("invalid credentials error");
    };
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group mb-3 my-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control bg-dark text-light"
            id="name"
            name="name"
            placeholder="@Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={credentials.name||""}
            onChange={onChange}
          />
        </div>
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
              value={credentials.email||""}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-3 row my-3">
          <label htmlFor="img" className="col-sm-2 col-form-label">
            Img
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control-plaintext bg-dark text-light"
              id="img"
              name="img"
              value={credentials.img||""}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-3 row my-3">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control-plaintext bg-dark text-light"
              id="description"
              name="description"
              value={credentials.description||""}
              onChange={onChange}
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
              value={credentials.password||""}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="mb-3 row my-3">
          <label htmlFor="cpassword" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control bg-dark text-light"
              id="cpassword"
              name="cpassword"
              value={credentials.cpassword||""}
              onChange={onChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;