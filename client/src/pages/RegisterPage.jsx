import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
    const { signup, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className='bg-gray-800 max-w-md p-10 rounded-md'>
                <form onSubmit={onSubmit}>
                    <div className='w-full mb-4'>
                        <a className=' text-2xl'>Crea una cuenta</a>
                    </div>
                    <input type='text' {... register("username", { required: true })}
                        className='w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Nombre de usuario'
                    />
                    <input type='email' {... register("email", { required: true })}
                        className='w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Correo'
                    />
                    <input type='password' {... register("password", { required: true })}
                        className='w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Contraseña'
                    />
                    <button type='submit'
                        className='w-full bg-gray-700 outline-none rounded-md py-2 my-2 focus:bg-gray-600'
                    >Registrarse</button>

                    <div className='mt-8'>
                        <span>¿Ya tienes una cuenta? </span>
                        <Link to="/login" className='focus:text-gray-600 text-gray-500 outline-none'>
                            Iniciar sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
