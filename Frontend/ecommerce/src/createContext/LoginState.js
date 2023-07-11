import React, { useState } from 'react'
import loginContext from './createContextLogin'


const LoginState=(props)=> {
  
  
  const [loginFlag,setLoginFlag]=useState(false);
  
  const toggleFlag=()=>{
    setLoginFlag(!loginFlag);
  }

  
  return (
    <div>
      <loginContext.Provider value={{loginFlag,toggleFlag}}>
        {props.children}
      </loginContext.Provider>
    </div>
  )
}
export default LoginState