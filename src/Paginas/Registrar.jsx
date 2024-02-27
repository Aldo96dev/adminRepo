import { Link } from 'react-router-dom';
import { useState } from 'react';
import  Alerta  from '../components/Alerta'

const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');

  const [alerta, setAlerta ] = useState({})
  /*
  const handleSubmit = e =>{
    e.preventDefault(); 
    console.log('Enviando Formulario')
  }
  */
  async function handleSubmit(e) {

    e.preventDefault();
    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({ msg:'Faltan campos por llenar', error: true})
      return;
    }
    if (password !== repetirPassword){
      setAlerta({ msg:'Las contraseñas no son iguales', error: true}) 
      return;
    }
    if(password.length<6){
      setAlerta({ msg:'El contraseña debe tener minimo 6 caracteres', error: true})
      return;
    }
    setAlerta({})
    console.log("Campos validados")

    //CONSUMIR API
    try {
      var url = 'https://localhost:7065/generos';
      const respuesta = await fetch(url, 
        {
            method: 'POST',
            body: JSON.stringify({nombre}), //SE MANDAN TANTOS PARAMETROS COMO SEAN NECESARIOS
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const json = await respuesta.text();
        console.log(json);  
      
    } catch (error) {
      console.log(error)      
    }

  }
  
  const {msg} = alerta

  return (
    <> 
      <div>
        <h1 className='text-slate-800 font-black text-3xl'>Crea tú cuenta</h1>
      </div>

      <div className='mt-20 md:mt-5 shadow-lg px-5 py-5 rounded-xl bg-white'>
        
        
        { msg &&<Alerta
          alerta={alerta}
        />}
        <form
          onSubmit={handleSubmit}
        >
          <div className="mt-5">
            <label
              className='text-slate-700 block text-xl font-bold'>Nombre</label>
            <input type="text"
              placeholder='Nombre'
              className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <label
              className='text-slate-700 block text-xl font-bold'>Email</label>
            <input type="email"
              placeholder='Email'
              className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <label
              className='text-slate-700 block text-xl font-bold'>Contraseña</label>
            <input type="password"
              placeholder='Contraseña'
              className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <label
              className='text-slate-700 block text-xl font-bold'>Repetir Contraseña</label>
            <input type="password"
              placeholder='Repetir Contraseña'
              className='border w-full p-3 mt-3 bg-gray-50 rounded-xl'
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-green-600 w-full py-3 rounded-xl text-white font-bold mt-5 hover:cursor-pointer
              hover:bg-green-800 md:auto"
          />
        </form>

        <nav className='mt-5 lg:flex lg:justify-between'>
          <Link
            className='block text-center my-5 text-gray-500'
            to='/adminRepo'>¿Ya tienes una cuenta? Inicia Sesión
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

export default Registrar