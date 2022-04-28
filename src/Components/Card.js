import React, { useContext } from "react";
import nftContext from "../context/nftContext";

const Card = (props) => {
  const { nft, addNftToCart, editUser, cart, deleteNft, editNft, market, refresh } =
    props;
  let button;
  if (cart) {
    button = (
      <button onClick={() => editUser(null, null, null, nft._id)} className="custom-btn Btn red"><span>Remove</span></button>
    );
  } else if (market) {
    button = (
      <button onClick={() => addNftToCart(nft._id)} className="custom-btn Btn green"><span>Add to Cart</span></button>
    );
  } else {
    button = [
      <button onClick={() => deleteNft(nft._id)} className="custom-btn Btn red">
        <span>Delete NFT</span>
      </button>,
      <button  className="custom-btn Btn green">
        <span>Edit NFT</span>
      </button>
    ];
  }
  // onClick={() => editNft(nft._id)}
  return (
    <div className="col-lg-4">
      <div className="card" style={{width: "18rem"}}>
        <span id="heart" className="heart">
          <i className="fas fa-heart"></i>
        </span>
        <img
          src={nft.img}
          className="first-image"
        />
        <div className="card-body">
          <center>
          <h5 className="card-title">&#8377;{nft.price}</h5>
            <h5 className="card-title">{nft.title}</h5>
            <h6 className="card-title">{nft.description}</h6>
            <h6 className="card-title">#{nft.tag}</h6>
          </center>
        </div>
        <div style={{display:"flex"}}>
          {button}
          {market||cart?<button className="custom-btn Btn green"><span>Buy Now</span></button>:<></>}
        </div>
      </div>
    </div>
  );
};

export default Card;
