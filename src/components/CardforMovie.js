import "./CardforMovie.css";
import third from '../db/third.json';
import React from "react";

import { useState } from "react";
import SingleMovieComp from "./SingleMovieComp";

const CardforMovie = ({Title,img,star,reviews,prevPrice,newPrice,Year,Runtime}) => {

  const data = third;

  // let key=false;
  const [keystate, setKeystate] = useState(false);

const   handleclickedOK =()=>{
  console.log('clicked')
  setKeystate(!keystate)

}

  return (
    <>
    <div className='display-method-two'>
      <div className="title-design">{Title}</div> 
      <div onClick={handleclickedOK}><img alt={Title} src={img}></img></div> 
      <div>{star} {star} {star}</div>
      <div>{reviews}</div>
      <div>{prevPrice}</div>
      <div>{newPrice}</div>
      <div>{Year}</div>
      <div>{Runtime}</div>
    </div>

    <div className="display-method-three-for">
     {/* {key}&& {
        data.map(({img,Title})=>(
           <div className="single-Movie-comp"> {Title},{img} </div>

        ))

      } */}

      {keystate &&  data.map(({Title,img,star,reviews,prevPrice,newPrice,Year,Runtime})=>(
           <div className=" display-method"> <SingleMovieComp Title={Title} img={img} star={star} reviews={reviews}
           prevPrice={prevPrice} newPrice={newPrice} Year={Year} Runtime={Runtime}
           /> </div>

        ))}

    </div>
    </>
  )
}

export default CardforMovie
