import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useAuth();

    if (loading) return <></>; // Para que al cargar no se vea la pagina, sin estar logeado
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />;

    return <Outlet/>;
};

export default ProtectedRoute;
