import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { MessageProvider } from "./context/MessageContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

import TestPage from "./pages/TestPage";

import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <MessageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/test" element={<TestPage />} />

            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MessageProvider>
    </AuthProvider>
  );
};

export default App;
