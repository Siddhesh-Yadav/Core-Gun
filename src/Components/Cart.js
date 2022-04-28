import React,{useContext,useEffect} from 'react';
import nftContext from '../context/nftContext';
import Card from './Card';

const Cart = () => {
    const context = useContext(nftContext);
    const {cartNfts,getCartNfts, addNftToCart, editUser}= context;
    useEffect(() => {
        getCartNfts();
    }, []);
    const refresh =()=>{
      getCartNfts();
    }
  return (
    <div className="container ]">
      <h1 style={{textAlign:"center"}}>Cart Items</h1>
      <div className='row'>
          {cartNfts.map((nft)=>{ 
            return <Card cart={true} refresh={refresh} nft={nft} addNftToCart={addNftToCart} editUser={editUser} key={nft._id}/>         
          })}
      </div>
    </div>
  )
}

export default Cart