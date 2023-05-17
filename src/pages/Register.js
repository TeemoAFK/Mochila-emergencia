///Pagina de registro de nuevos usuarios
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import registerimage from "../assets/images/registro.png"
import Swal from "sweetalert2";

export function Register() {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: '¡Algo no esta bien!',
            text: 'Revisa el formulario y vuelve a intentar',
            timer: 1500
          })
    }
  };

  return (
    <div className="h-max-w-screen-2xl max-w-screen-2xl m-auto py-[25%] px-[15%]">
      <center>
      <img src={registerimage} alt="mochila-emergencia" className="w-[25%] py-10"/>
      </center>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-6 mb-4 "
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-900 text-sm font-bold mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="mail@google.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-900 text-sm font-bold mb-2"
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

        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Registrarse
        </button>
      </form>
      <p className="my-4 text-sm text-gray-900 flex justify-between px-3 dark:text-slate-100">
        ¿Ya tienes una cuenta?
        <Link to="/" className="text-gray-900 hover:text-gray-500 dark:text-slate-100 hover:text-slate-300 ">
          Ingresar
        </Link>
      </p>
    </div>
  );
}