import React from 'react';

// Importamos el router de react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importamos las páginas
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import Crud from './components/Crud';
import {NotFoundPage} from './pages/NotFoundPage';

// Importamos el componente ProtectedRoute
import {ProtectedRoute} from './components/ProtectedRoute';

// Importamos el provider y el hook useAuth
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <div className="bg-white text-black flex text-white dark:bg-gray-800">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/crud" element={<ProtectedRoute> <Crud /> </ProtectedRoute>} />
            <Route path="/registro" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
