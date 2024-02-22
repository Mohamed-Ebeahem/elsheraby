import React from 'react'

const WhoAreWeComponent = ({icon , Title ,desc}) => {
  return (
    <div>
      <div className='text-center'>
        <img className='w-25' src={icon} alt=''/>
        <h5 style={{color:'#1D479B'}}>{Title} </h5>
        <p style={{color:'#1D479B'}}>{desc}</p>
      </div>
    </div>
  )
}

export default WhoAreWeComponent
