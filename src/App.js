import React from 'react';

// Importamos el router de react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importamos las páginas
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {Menu} from './pages/Menu';
import {NotFoundPage} from './pages/NotFoundPage';
import {Inventario} from './pages/Inventario';

// Importamos el componente ProtectedRoute
import {ProtectedRoute} from './components/ProtectedRoute';

// Importamos el provider y el hook useAuth
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <div className="bg-white text-black flex text-white dark:bg-gray-800 h-screen-3xl">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/menu" element={<ProtectedRoute> <Menu /> </ProtectedRoute>} />
            <Route path="/inventario" element={<ProtectedRoute> <Inventario /> </ProtectedRoute>} />
            <Route path="/registro" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
