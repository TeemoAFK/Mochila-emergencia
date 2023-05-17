import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";


export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/perfil");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: setError(error.message)
      })
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/perfil");
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: setError(error.message)
      })
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escriba un correo para restablecer su contraseña");
    try {
      await resetPassword(user.email);
      setError('Hemos enviado un correo para que resetee su contraseña')
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
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
            name="email"
            id="email"
            onChange={handleChange}
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
            name="password"
            id="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="************"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ingresar
          </button>
          <a
            className=" ml-2 inline-block align-baseline font-bold text-sm text-violet-900 hover:text-violet-500"
            href="#!"
            onClick={handleResetPassword}
          >
            ¿Olvido su contraseña?
          </a>
        </div>
      </form>
      <button
        onClick={handleGoogleSignin}
        className="bg-violet-500 hover:violet-700 text-white font-bold shadow rounded border-2 border-violet-500 py-2 px-4 w-full"
      >
        Ingresa con Google
      </button>
      <p className="my-4 text-sm text-violet-900 flex justify-between px-3 dark:text-slate-100">
        ¿No tienes una cuenta?
        <Link to="/registro" className="text-violet-900 hover:text-violet-500 dark:text-slate-100 hover:text-slate-300">
          Regístrate
        </Link>
      </p>
    </div>
  );
}