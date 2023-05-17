///Componente que genera la validadción de rutas y crea las rutas protegidas
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Cargando</h1>;
  if (!user) return <Navigate to="/" />;

  return <>{children}</>;
}