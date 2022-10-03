 import React from 'react'
 import Item from "./Item"; 
 
 export default function Box(props) {
  const items = props.data.map(
     (singleData,index) => {
      return <Item removeHandler={props.removeToDo} key={index} id={index} item={singleData.item} time={singleData.time} />
     }
  )
   return (
     <div className='p-3'>
        {items}
     </div>
   )
 }
 