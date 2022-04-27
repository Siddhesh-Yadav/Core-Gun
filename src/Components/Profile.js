import React,{useContext,useEffect} from 'react';
import nftContext from '../context/nftContext';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const context = useContext(nftContext);
    const {myNfts, getMyNfts, editNft, deleteNft, user, getUserDetails}= context;
    useEffect(() => {
        getMyNfts();
        getUserDetails();
    }, []);
  return (
    <>
      <div className='profilePg'>
        <div className="profilePgUp">
          <div className='profileImg'><img src={user.img} alt="" /></div> 
          <div className="profileDetails">          
            <h3 className='profileName'>{user.name}</h3>
            <h5 className='profileDesc'>{user.description}</h5>
          </div>       
        </div>
        <h3>Your NFTs</h3>
        <div className='row'>
          {myNfts.map((nft)=>{ 
            return <Card nft={nft} editNft={editNft} deleteNft={deleteNft} key={nft._id}/>         
          })}
        </div>
      </div>
    </>
  )
}

export default Profile