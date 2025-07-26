import React, { useState } from 'react'

export default function Child(props) {
const [color, setColor]= useState();
    function handleChange(e){
        setColor(e.target.value);
    }
  return (
    <div className='w-[50px] h-[50px] bg-green-200'>
        <input type="color" id="favcolor" name="favcolor" value="#ff0000" onChange={(e)=>handleChange(e)}/>
    </div>
  )
}
