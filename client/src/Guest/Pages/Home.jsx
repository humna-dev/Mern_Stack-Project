import React from 'react'
import { Link } from 'react-router-dom';
import Brands from '../Components/Brands'


function Home() {
  return (
    <>
   <div className="web-banner">
   
    <p className="overlay-text">20% OFF <br></br> ETUDE</p>
    <small className="overlay-texts">Save big on Etude <br /> our excelling brand to rescue your skin!</small>
    <Link to="/login" className="btnPink">
  Explore Us
</Link>



</div>
  <Brands/>
    </>
  )
}

export default Home