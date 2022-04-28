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

    const [nftVal, setnftVal] = useState({title:"", description:"", tag:"", img:"", price:""})
    const onChange = (e) =>{
        setnftVal({...nftVal,[e.target.name]:e.target.value})
    }
    const handleClick = (e)=>{
        e.preventDefault();
        addNfts(nftVal.title, nftVal.description, nftVal.tag, nftVal.img, nftVal.price);
        setnftVal({title:"", description:"", tag:"", img:"", price:""})
    }


    const navigate= useNavigate()
    if(localStorage.getItem("token")===null){
      navigate("/login");
    }
  
    return (
      <div className='container '>
      <h2 style={{textAlign:"center"}}>Create NFT</h2>
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
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">
          Img Link
        </label>
        <textarea
          className="form-control bg-dark text-light"
          id="img"
          name='img'
          rows="3"
          onChange={onChange}
          value={nftVal.img}
          placeholder="Provide link to your image"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <textarea
          className="form-control bg-dark text-light"
          id="price"
          name='price'
          rows="3"
          onChange={onChange}
          value={nftVal.price}
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleClick}
      >
        Create
      </button>
    </div>
    )
}

export default Home