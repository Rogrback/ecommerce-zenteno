import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import useForm from '../Hooks/useForm'
import axios from 'axios'
import '../assets/css/form.css'
import logoZ from '../img/logos/logoZ.png'

export const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const sendData = (data) => {
    axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', data)
      .then((response) => {
        if (response.status === 200) {console.log(response.data)
          loginUser(response.data.token)
          navigate('/')
          console.log(response.data)
        }
      }).catch((error) => {
        console.log(error)
      })
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src={logoZ} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Inicie sesión</h1>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            value={input.email}
            onChange={handleInputChange}
          />
          <label htmlFor='email'>Correo</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            value={input.password}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>Contraseña</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Ingresar</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}
