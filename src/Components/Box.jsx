 import React from 'react'
 import Item from "./Item"; 
 
 export default function Box({data, handleDelete}) {
   //console.log(data)
  const items = data.map(
     (singleData) => {
      return <Item key={singleData.id} removeHandler={handleDelete} item={singleData} />
     }
  )
   return (
     <div className='p-3'>
        {items}
     </div>
   )
 }
