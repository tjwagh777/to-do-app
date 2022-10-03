import React, { useState } from 'react'
import {FaTrash} from "react-icons/fa";

export default function Item(props) {
    const [done, setDone] = useState(false);
  return (
    <div onClick={() => setDone(!done)}  className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
        <div>
            <span className='pr-2 text-[12px] text-slate-400'>
                {props.time}
            </span>
            <span className={`${done === true ? 'line-through' :' '} text-[16px]`}>
                {props.item}
            </span>
        </div>
        <div onClick={() => props.removeHandler(props.id)}>
            <FaTrash className='text-[#e74c3c]'/>
        </div>
    </div>
  )
}

