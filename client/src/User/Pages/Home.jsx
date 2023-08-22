import React from 'react'
import Brands from '../Pages/Brands'
import Category from './Category'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
   <div className="web-banner">
   
    <p className="overlay-text">20% OFF <br></br> ETUDE</p>
    <small className="overlay-texts">Save big on Etude <br /> our excelling brand to rescue your skin!</small>
    <Link to="/brands" className="btnPink">
  Login
</Link>

</div>
    <Brands/>
    <Category/>
    </>
  )
}

export default Home