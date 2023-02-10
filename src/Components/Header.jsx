import {useContext} from 'react'
import { ContextObj } from '../Context'
import { Weather } from './Weather'

export const Header = () => {
  const {user} = useContext(ContextObj)
  return (
    <div className='header'>
      <h3>Welcome Back, {user.usrName === "" ? "Guest" : user.usrName}</h3>
      <Weather />
    </div>
  )
}
