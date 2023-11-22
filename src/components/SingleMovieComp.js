import React from 'react'
import "./CardforMovie.css"

const SingleMovieComp = ({Title,img,star,reviews,prevPrice,newPrice,Year,Runtime}) => {
  return (
    <div className='display-method-two' >
      <div className="title-design">{Title}</div>
      <div><img src={img} alt='Title'></img></div>
      <div>{star} {star} {star}</div>
      <div>{reviews}</div>
      <div>{prevPrice}</div>
      <div>{newPrice}</div>
      <div>{Year}</div>
      <div>{Runtime}</div>
      
    </div>
  )
}

export default SingleMovieComp
