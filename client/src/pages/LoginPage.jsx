import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-800 max-w-md p-10 rounded-md">
        {loginErrors.map((error, i) => (
          <div className="bg-red-500 p-2" key={i}>
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit}>
          <div className="w-full mb-4">
            <a className=" text-2xl font-bold">Iniciar sesión</a>
          </div>

          <input
            type="email"
            {...register("email", { required: true })}
            className={`${
              errors.email && "border-2 border-red-600"
            } w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 outline-none`}
            placeholder="Correo electrónico"
          />
          {errors.email && (
            <p className=" text-red-600 text-sm ml-1">
              Correo electrónico requerido.
            </p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className={`${
              errors.password && "border-2 border-red-600"
            } w-full bg-gray-700 text-white px-4 py-2 rounded-md my-2 outline-none`}
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className=" text-red-600 text-sm ml-1">Contraseña requerida.</p>
          )}

          <button
            type="submit"
            className="w-full bg-sky-700 outline-none rounded-md py-2 my-2 focus:bg-sky-800"
          >
            Iniciar sesión
          </button>

          <div className="mt-6">
            <span>¿No tienes una cuenta? </span>
            <Link
              to="/register"
              className="focus:text-sky-700 text-sky-600 outline-none"
            >
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
