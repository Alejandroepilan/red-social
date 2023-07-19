import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className='bg-gray-800 max-w-md p-10 rounded-md'>
                <form /*onSubmit={onSubmit}*/>
                    <div className='w-full mb-4'>
                        <a className=' text-2xl'>Iniciar sesión</a>
                    </div>
                    <input type='text'
                        className='w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Nombre de usuario'
                    />
                    <input type='password'
                        className='w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Contraseña'
                    />
                    <button type='submit'
                        className='w-full bg-gray-700 outline-none rounded-md py-2 my-2 focus:bg-gray-600'
                    >Iniciar sesión</button>
                    <div className='mt-8'>
                        <span>¿No tienes una cuenta? </span>
                        <Link to="/register" className='focus:text-gray-600 text-gray-500 outline-none'>
                            Regístrate
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
