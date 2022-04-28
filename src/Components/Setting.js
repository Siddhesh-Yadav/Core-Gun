import React,{useContext,useState} from "react";
import nftContext from "../context/nftContext";

const Setting = () => {
    const context = useContext(nftContext);
    const {editUser}= context
    const [credentials, setcredentials] = useState({
        name: "",
        img:"",
        description:""
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        editUser(credentials.name,credentials.img,credentials.description);
      };
    
      const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
      };
  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Edit User Details</h1>
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
            value={credentials.name || ""}
            onChange={onChange}
          />
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
              value={credentials.img || ""}
              onChange={onChange}
              placeholder="Provide link to your image"
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
              value={credentials.description || ""}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="text-center">
        <button type="submit" className="custom-btn Btn green"><span>Update</span></button>
        </div>
      
      </form>
    </div>
  );
};

export default Setting;
