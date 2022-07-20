import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logoZ from '../img/logos/logoZ.png'
import useForm from '../Hooks/useForm'


export const SignUp = () => {
    const navigate = useNavigate()
    const sendData = (data) => {
        if (data.password === data.password_confirm) {
            delete data.password_confirm
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', data)
                .then((response) => {
                    if (response.status === 200) {
                        console.log(response.status)
                        navigate('/login')
                    }
                }).catch((error) => {
                    console.log(error.message)
                })
        } else {
            console.log('Passwords no coinciden')
        }
    }

    const { input, handleInputChange, handleSubmit } = useForm(sendData, {
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        password: '',
        password_confirm: ''
      })

    return (
        <main className='form-signin w-100 m-auto'>
            <form onSubmit={handleSubmit}>
                <img className='mb-4' src={logoZ} alt='' width='72' height='57' />
                <h1 className='h3 mb-3 fw-normal'>Please create an account</h1>

                <div className='form-floating'>
                    <input
                        type='text'
                        className='form-control'
                        id='first_name'
                        name='first_name'
                        placeholder='John'
                        value={input.first_name}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='first_name'>What's your name?</label>
                </div>

                <div className='form-floating'>
                    <input
                        type='text'
                        className='form-control'
                        id='last_name'
                        name='last_name'
                        placeholder='Doe'
                        value={input.last_name}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='last_name'>What's your last name?</label>
                </div>

                <div className='form-floating'>
                    <select
                        className='form-select'
                        id='gender'
                        name='gender'
                        value={input.gender}
                        onChange={handleInputChange}
                    >
                        <option value=''>Choose...</option>
                        <option value='M'>Male</option>
                        <option value='F'>Female</option>
                    </select>
                    <label htmlFor='gender'>Gender</label>
                </div>

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
                    <label htmlFor='email'>Email address</label>
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
                    <label htmlFor='password'>Password</label>
                </div>

                <div className='form-floating'>
                    <input
                        type='password'
                        className='form-control'
                        id='password_confirm'
                        name='password_confirm'
                        placeholder='Password'
                        value={input.password_confirm}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='password_confirm'>Repeat your Password</label>
                </div>

                <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
                <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
            </form>
        </main>
    )
}
