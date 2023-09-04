import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostsProvider } from "./context/PostsContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./components/UserProfile";
import NotFoundPage from "./pages/NotFoundPage";
import ChatsPage from "./pages/ChatsPage";
import AdminPage from "./pages/AdminPage";

import TestPage from "./pages/TestPage";

import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/test" element={<TestPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/u/:username" element={<UserProfile />} />
              <Route path="/chats" element={<ChatsPage />} />

              <Route path="/admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
};

export default App;

/*

---------- BUGS ----------

 - Estando logeado, al ir a las rutas (/login) y (/register), te devuelve a (/), pero se llegan a ver las paginas por unos instantes.
 - Los mensajes de error en las paginas (/login) y (/register), no desaparecen a los 5 segundos.
 - La cookie con el token solo se guarda mientras chrome este abierto.



*/

/*

---------- FALLOS DE SEGURIDAD ----------

 - Al obtener los posts, obtiene todos los posts de la db y luego muestra los seleccionado, en vez de obtener solamente los seleccionados.

*/
