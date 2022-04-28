import React,{useContext,useEffect} from 'react';
import nftContext from '../context/nftContext';
import Card from './Card';

const Market = () => {
    const context = useContext(nftContext);
    const {marketNfts,getMarketNfts, addNftToCart}= context;
    useEffect(() => {
        getMarketNfts();
    }, []);
  return (
    <div className="container">
      <h1 style={{textAlign:"center"}}>Buy NFTs</h1>
      <div className='row'>
        {marketNfts.map((nft)=>{ 
          return <Card market={true} nft={nft} addNftToCart={addNftToCart} key={nft._id}/>         
        })}
      </div>
    </div>
  )
}

export default Market