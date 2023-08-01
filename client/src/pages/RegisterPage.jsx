import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-neutral-800 max-w-md p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2" key={i}>
            {error}
          </div>
        ))}

        <form onSubmit={onSubmit}>
          <div className="w-full mb-4">
            <a className=" text-2xl font-bold">Crea una cuenta</a>
          </div>
          <input
            type="text"
            {...register("username", { required: true })}
            className={`${
              errors.username && "border-2 border-red-600"
            } w-full bg-neutral-700 text-white px-4 py-2 rounded-md my-2 outline-none`}
            placeholder="Nombre de usuario"
          />
          {errors.username && (
            <p className=" text-red-600 text-sm ml-1">
              Nombre de usuario requerido.
            </p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className={`${
              errors.email && "border-2 border-red-600"
            } w-full bg-neutral-700 text-white px-4 py-2 rounded-md my-2 outline-none`}
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
            } w-full bg-neutral-700 text-white px-4 py-2 rounded-md my-2 outline-none`}
            placeholder="Contraseña"
          />
          {errors.password && (
            <p className=" text-red-600 text-sm ml-1">Contraseña requerida.</p>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 outline-none rounded-md py-2 my-2 hover:bg-yellow-600"
          >
            Registrarse
          </button>

          <div className="mt-6">
            <span>¿Ya tienes una cuenta? </span>
            <Link
              to="/login"
              className="text-yellow-500 outline-none hover:text-yellow-600 hover:underline"
            >
              Iniciar sesión
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
