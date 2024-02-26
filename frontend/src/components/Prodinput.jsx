
import React from 'react'

const Prodinput = ({onchange,type, placeholder}) => {
  return (<>
    <div className=' font-bold p-4'>
    {/* <h1 className=' font-bold '>{inputheader}</h1> */}
    </div>
    <div>
    <input onChange={onchange} type={`${type}`} placeholder={`${placeholder}`}/>
    </div>
    </>
  )
}

export default Prodinput