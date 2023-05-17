///Componnete que muestra una página cuando no esta logueado. 
import React from "react";
import errorimage from "../assets/images/error.png"
export function NotFoundPage() {
    return (
        <>
            <div className="h-max-w-screen-2xl h-screen-3xl max-w-screen-2xl m-auto py-[5%] px-[15%]">
      <center>
      <img src={errorimage} alt="mochila-emergencia" className="w-[25%] py-10"/>
      </center>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-20 mb-10">
                    <h1 className="text-4xl my-10 font-semibold text-gray-700">Error 404</h1>
                    <p className="text-xl font-medium text-slate-700">
                        Lo sentimos, pero la página solicitada ya no esta disponible o no existe
                    </p>
                    <a href="/">
                    <button className="bg-gray-500 hover:gray-700 text-white font-bold shadow rounded border-2 border-gray-500 py-2 px-4 w-full my-10">
                        Regresar al sitio
                    </button>
                    </a>
                </div>
            </div>
        </>

    );
}