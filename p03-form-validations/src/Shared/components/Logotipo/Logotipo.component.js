import React from 'react'

import logo from '../../svg/logo.svg'
export const Logotipo = ({removeAnimation}) => {
  return (
    <img src={logo} className={`App-logo ${removeAnimation && 'logo-animation'}` } alt="logo" />
  )
}



export default Logotipo