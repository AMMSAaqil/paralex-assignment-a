import React from 'react'
import { useState } from 'react';
import jsonData from './db/first.json';
import CardforMovie from './components/CardforMovie';
import secondjson from "./db/second.json";
import "./App.css";
const App = () => {
  

    const [data, setData] = useState(jsonData);
    
   const handleClick=()=>{
        setData(secondjson);
   }

   const handleClickchange=()=>{
    setData(jsonData)
   }
  return (
    

    <>
    <div className='display-method-three'>
      
    { data.map(({Title,img,star,reviews,prevPrice,newPrice,Year,Runtime})=>(<div className='display-method'><CardforMovie Title={Title} img={img}
    star={star} reviews={reviews}
    prevPrice={prevPrice} newPrice={newPrice} Year={Year} Runtime={Runtime}/></div> )) }
        
    </div>

       <button onClick={handleClickchange}>previeous</button>  
       <button onClick={handleClick}>next</button>
      
    </>
  )
}

export default App



