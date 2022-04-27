import React,{ useState } from "react";
import nftContext from "./nftContext";

const State = (props) => {
    const host = "http://localhost:5000";
    const marketNftIntial =[];
    const [marketNfts, setmarketNfts] = useState(marketNftIntial);
    const myNftInitial = [];
    const [myNfts, setmyNfts] = useState(myNftInitial);
    const cartNftInitial = [];
    const [cartNfts, setcartNfts] = useState(cartNftInitial);
    const userDetails = [];
    const [user, setuser] = useState(userDetails);

    // **** Market Nfts **** 
    // Route 1 fetch all nfts for market 
    const getMarketNfts = async () => {
      const response = await fetch(`${host}/api/nfts/fetchallnfts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const json = await response.json();
      setmarketNfts(json);
    };

    // **** MY Nfts **** 
    // Route 1 add nfts to my account
    const addNfts = async (title,description,tag,img,price) => {
      const response = await fetch(`${host}/api/nfts/addnfts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        
        body: JSON.stringify({title:title,description:description,tag:tag,img:img,price:price}),
      });
      const nft = await response.json();
    };
    
    // Route 2 get my nfts 
    const getMyNfts = async () => {
      const response = await fetch(`${host}/api/nfts/fetchmynfts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setmyNfts(json);
    };


    // Route 3 edit nft 
    const editNft = async (id, title, tag, description) => {
      const response = await fetch(`${host}/api/nfts/updatenft/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("token"),
        },
  
        body: JSON.stringify({
          title: title,
          description: description,
          tag: tag,
        }),
      });
  
      let newNfts  = JSON.parse(JSON.stringify(myNfts))
      for (let index = 0; index < newNfts.length; index++) {
        const element = newNfts[index];
        if (element._id === id) {
          newNfts[index].title = title;
          newNfts[index].tag = tag;
          newNfts[index].description = description;
          break;
        }
      }
      setmyNfts(newNfts);
    };


    // Route 4 delete nft 
    const deleteNft = async (id) => {
      const response = await fetch(`${host}/api/nfts/deletenft/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem("token"),
        },
      });
  
      // Logic fot delting note
        const newNft = myNfts.filter((nft) => {
          return nft._id !== id;
        });
        setmyNfts(newNft);
    };

    // **** CART NFTs **** 
    // Route 1 get all the cart nfts 
    const getCartNfts = async () => {
      const response = await fetch(`${host}/api/nfts/fetchcart`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setcartNfts(json);
    };

    // Route 2 add nfts to cart 
    const addNftToCart = async (cart) => {
      const response = await fetch(`${host}/api/auth/addtocart`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        
        body: JSON.stringify({cart}),
      });
      const nft = await response.json();
    };

    // **** USER DETAILS **** 
    const getUserDetails = async () => {
      const response = await fetch(`${host}/api/auth/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setuser(json);
    }

    const editUser = async (name , img , description, cartId) => {
      const response = await fetch(`${host}/api/auth/edituser`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          name: name,
          img:img,
          description: description,
          cartId: cartId
        }),
      });
      const json = await response.json();
      setuser(json);
    }

    return (
        <nftContext.Provider
          value={{
            marketNfts, getMarketNfts,
            myNfts, addNfts, getMyNfts, editNft, deleteNft,
            cartNfts, getCartNfts, addNftToCart,
            user, getUserDetails, editUser
          }}
        >
          {props.children}
        </nftContext.Provider>
    );
};
    
export default State;