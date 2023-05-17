import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import loginimage from "../assets/images/mochila.png"

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/menu");
    } catch (error) {
      Swal.fire({
            icon: 'error',
            title: '¡Algo no esta bien!',
            text: 'Revisa el formulario y vuelve a intentar',
            timer: 1500
          })
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/menu");
    } catch (error) {
      Swal.fire({
            icon: 'error',
            title: '¡Algo no esta bien!',
            text: 'Revisa el formulario y vuelve a intentar',
            timer: 2500
          })
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return Swal.fire({
      icon: 'error',
      title: '¡Algo no esta bien!',
      text: 'Escriba un correo para restablecer su contraseña'
    });
    try {
      await resetPassword(user.email);
    } catch (error) {
      Swal.fire({
            icon: 'error',
            title: '¡Algo no esta bien!',
            text: 'Hemos enviado un correo para que resetee su contraseña',
            timer: 2500
          })
    }
  };

  return (
    <div className="h-max-w-screen-2xl max-w-screen-2xl m-auto py-[5%] px-[15%]">
      <center>
      <img src={loginimage} alt="mochila-emergencia" className="w-[25%] py-10"/>
      </center>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="mail@google.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ingresar
          </button>
          <a
            className=" ml-2 inline-block align-baseline font-bold text-sm text-gray-900 hover:text-gray-500"
            href="#!"
            onClick={handleResetPassword}
          >
            ¿Olvido su contraseña?
          </a>
        </div>
      </form>
      <button
        onClick={handleGoogleSignin}
        className="bg-gray-500 hover:gray-700 text-white font-bold shadow rounded border-2 border-gray-500 py-2 px-4 w-full"
      >
        Ingresa con Google
      </button>
      <p className="my-4 text-sm text-gray-900 flex justify-between px-3 dark:text-slate-100">
        ¿No tienes una cuenta?
        <Link to="/registro" className="text-gray-900 hover:text-gray-500 dark:text-slate-100 hover:text-slate-300">
          Regístrate
        </Link>
      </p>
    </div>
  );
}