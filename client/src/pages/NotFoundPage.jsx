import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="grid h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center bg-white p-20 rounded-2xl">
        <p className="text-base font-semibold text-yellow-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Lo sentimos, no hemos podido encontrar la página que busca.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={"/"}
            className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white  hover:bg-yellow-500"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
