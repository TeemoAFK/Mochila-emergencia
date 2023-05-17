///Página de atterizaje tras el login
import { useAuth } from "../context/AuthContext";
import inventario from "../assets/images/inventario.png"

export function Menu() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-screen-2xl m-auto py-[10%] px-[15%]">
    <h1 className="text-xl mb-4">Bienvenido {user.displayName || user.email}</h1>
      <div className="whitespace-normal">
      <center>
      <img src={inventario} alt="mochila-emergencia" className="w-[25%] py-10"/>
      </center>
          <a href="/inventario" className="mb-8">
            <button
              className="bg-gray-500 hover:gray-700 text-white font-bold shadow rounded border-2 border-gray-500 py-2 px-4 w-full">
              Ver Inventario
            </button>
          </a>
        </div>
    <br />
    <center>
      <img src={inventario} alt="mochila-emergencia" className="w-[25%] py-10"/>
      </center>
    <div className="whitespace-normal">
          <a href="/inventario" className="mb-8">
            <button
              className="bg-gray-500 hover:gray-700 text-white font-bold shadow rounded border-2 border-gray-500 py-2 px-4 w-full">
              Ver Inventario
            </button>
          </a>
        </div>
    <br />
    <center>
      <img src={inventario} alt="mochila-emergencia" className="w-[25%] py-10"/>
      </center>
    <div className="whitespace-normal">
          <a href="/inventario" className="mb-8">
            <button
              className="bg-gray-500 hover:gray-700 text-white font-bold shadow rounded border-2 border-gray-500 py-2 px-4 w-full">
              Ver Inventario
            </button>
          </a>
        </div>
    <br />
      <button
            className="bg-red-500 hover:red-700 text-white font-bold shadow rounded border-2 border-red-500 py-2 px-4 w-full"
            onClick={handleLogout}>
            Salir
    </button>
    </div>

  );
}