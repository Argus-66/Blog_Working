import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" 
      alt=""
      className='rounded-full'
      style={{ width, height: width }}
      />
    </div>
  )
}

export default Logo