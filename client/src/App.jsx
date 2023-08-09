import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostsProvider } from "./context/PostsContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UserProfile from "./components/UserProfile";
import NotFoundPage from "./pages/NotFoundPage";
import ChatsPage from "./pages/ChatsPage";

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

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/u/:username" element={<UserProfile />} />
              <Route path="/chats" element={<ChatsPage />} />

              <Route path="/test" element={<TestPage />} />
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


*/
