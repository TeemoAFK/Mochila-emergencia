///Pagina de registro de nuevos usuarios
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: setError(error.message)
          })
    }
  };

  return (
    <div className="w-full max-w-2xl m-auto pt-[15%] h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 "
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-violet-900 text-sm font-bold mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="mail@vocesexpertas.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-violet-900 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="*************"
          />
        </div>

        <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Registrarse
        </button>
      </form>
      <p className="my-4 text-sm text-violet-900 flex justify-between px-3 dark:text-slate-100">
        ¿Ya tienes una cuenta?
        <Link to="/" className="text-violet-900 hover:text-violet-500 dark:text-slate-100 hover:text-slate-300 ">
          Ingresar
        </Link>
      </p>
    </div>
  );
}