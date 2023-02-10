import {useContext} from 'react'
import { ContextObj } from '../Context'
import { Weather } from './Weather'

export const Header = () => {
  const {user} = useContext(ContextObj)
  return (
    <div>
      <h3>welcome back, {user.usrName === "" ? "Guest" : user.usrName}</h3>
      <Weather />
    </div>
  )
}
