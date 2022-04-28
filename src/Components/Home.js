import React,{useContext,useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import nftContext from '../context/nftContext';

const Home = () => {
    const context = useContext(nftContext);
    const {user,getUserDetails}= context;
    useEffect(() => {
      getUserDetails()
    }, []);
    const { addNfts } = context;

    const [nftVal, setnftVal] = useState({title:"", description:"", tag:"", img:"", price:""});
    const onChange = (e) =>{
        setnftVal({...nftVal,[e.target.name]:e.target.value})
    }

    const [textColor, settextColor] = useState("");
    const handleClick = (e)=>{
        e.preventDefault();
        if (nftVal.title===""|| nftVal.description===""|| nftVal.tag===""|| nftVal.img===""|| nftVal.price==="") {
          settextColor("text-danger");
          setTimeout(() => {
            settextColor("");            
          }, 700);
        }else{          
          settextColor("text-success");
          setTimeout(() => {
            settextColor("");            
          }, 700);
        }
        addNfts(nftVal.title, nftVal.description, nftVal.tag, nftVal.img, nftVal.price);
        setnftVal({title:"", description:"", tag:"", img:"", price:""})
    }


    const navigate= useNavigate()
    if(localStorage.getItem("token")===null){
      navigate("/login");
    }
  
    return (
      <form className='container .was-validated'>
      <h2 className={`${textColor}`} style={{textAlign:"center"}}>Create NFT</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control bg-dark text-light"
          id="title "
          name='title'
          placeholder="@example... Bored Ape"
          onChange={onChange}
          value={nftVal.title}
          style={{padding:"0 20px"}}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tag
        </label>
        <input
          type="text"
          className="form-control bg-dark text-light"
          id="tag"
          name='tag'
          placeholder="#General"
          onChange={onChange}
          value={nftVal.tag}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control bg-dark text-light"
          id="description"
          name='description'
          rows="3"
          onChange={onChange}
          value={nftVal.description}
          required
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">
          Img Link
        </label>
        <input
          className="form-control bg-dark text-light"
          id="img"
          name='img'
          onChange={onChange}
          value={nftVal.img}
          placeholder="Provide link to your image"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          className="form-control bg-dark text-light"
          id="price"
          name='price'
          onChange={onChange}
          value={nftVal.price}
        ></input>
      </div>
      <div className="text-center">
        <button type="submit" onClick={handleClick} className="custom-btn Btn green"><span>Create</span></button>
      </div>
    </form>
    )
}

export default Home