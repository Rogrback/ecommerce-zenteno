import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export const Secret = () => {
  const { user } = useContext(AuthContext)
  return (
    <div>
      <h1>Secret</h1>
      {
        user.role === 'ADMIN'
          ? <h2>Hola Admin</h2>
          : <h2>Hola Customer</h2>
      }

      {
        user.role === 'CUSTOMER' && <h4>Bienvenido seas Cliente</h4>
      }

      {
        user.role === 'ADMIN' && <h4>Bienvenido seas Admin</h4>
      }
    </div>
  )
}
