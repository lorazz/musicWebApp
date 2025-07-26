import React from 'react'

export default function Parent(props) {
  return (
    <>
        <div className='w-[200px] h-[200px] bg-blue-200'>Parent</div>
        {props.children}
    </>
  )
}
