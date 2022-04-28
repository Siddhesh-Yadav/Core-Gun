import React,{useContext,useEffect} from 'react';
import nftContext from '../context/nftContext';
import Card from './Card';

const Cart = () => {
    const context = useContext(nftContext);
    const {cartNfts,getCartNfts, addNftToCart, editUser}= context;
    useEffect(() => {
        getCartNfts();
    }, []);
  return (
    <div className="container ]">
      <h2>Cart Items</h2>
      <div className='row'>
          {cartNfts.map((nft)=>{ 
            return <Card cart={true} nft={nft} addNftToCart={addNftToCart} editUser={editUser} key={nft._id}/>         
          })}
      </div>
    </div>
  )
}

export default Cart