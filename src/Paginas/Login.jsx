import React from 'react'
import { Link } from 'react-router-dom';
import imgDev from './dev.jpg'; 


const Login = () => {
  return (
    <>

      <div>
        <h1 className='text-slate-800 font-black text-3xl'>Iniciar Sesión</h1>
        <img className='mt-10 rounded-xl' src={imgDev}/>
      </div>


      <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
        
        <form>
          <div className="mt-5">
            <label
              className='text-slate-700 block text-xl font-bold'>Email</label>
            <input type="email"
              placeholder='Email de Registro'
              className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' />
          </div>

          <div className="mt-5">
            <label
              className='text-slate-700 block text-xl font-bold'>Contraseña</label>
            <input type="password"
              placeholder='Contraseña'
              className='border w-full p-3 mt-3 bg-gray-50 rounded-xl' />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-slate-400 w-full py-3 rounded-xl text-white font-bold mt-5 hover:cursor-pointer
              hover:bg-slate-800 md:auto"
          />
        </form>

        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link
            className='block text-center my-5 text-gray-500'
            to='/adminRepo/registrar'>¿No tienes una cuenta? Registrate
          </Link>
          <Link
            className='block text-center my-5 text-gray-500'
            to='/adminRepo/olvide-password'>Olvide Contraseña
          </Link>
        </nav>

      </div>



    </>
  )
}

export default Login