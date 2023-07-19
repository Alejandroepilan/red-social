import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';

const RegisterPage = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res);
    });

    return (
        <div className="h-screen flex items-center justify-center">
            <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                <form onSubmit={onSubmit}>
                    <div className='w-full mb-4'>
                        <a className=' text-2xl'>Crea una cuenta</a>
                    </div>
                    <input type='text' {... register("username", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Nombre de usuario'
                    />
                    <input type='email' {... register("email", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Correo'
                    />
                    <input type='password' {... register("password", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 outline-none'
                        placeholder='Contraseña'
                    />
                    <button type='submit'
                        className='w-full bg-zinc-700 outline-none rounded-md py-2 my-2 focus:bg-zinc-600'
                    >Registrarse</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
