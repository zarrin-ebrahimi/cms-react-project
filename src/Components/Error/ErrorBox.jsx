import React from 'react'

export default function ErrorBox({mesage}) {
  return (
    <div className='bg-green-500/10 p-3 rounded-lg'>
        {mesage}
    </div>
  )
}
