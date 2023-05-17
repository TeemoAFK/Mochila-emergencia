///Componnete que muestra una página cuando no esta logueado. 
import React from "react";

export function NotFoundPage() {
    return (
        <>
            <div className="w-full max-w-xl m-auto my-20 text-black text-center">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-20 mb-10">
                    <h1 className="text-4xl my-10 font-semibold text-violet-700">Error 404</h1>
                    <p className="text-xl font-medium text-slate-700">
                        Lo sentimos, pero la página solicitada ya no esta disponible o no existe
                    </p>
                    <a href="/">
                    <button className="bg-violet-500 hover:violet-700 text-white font-bold shadow rounded border-2 border-violet-500 py-2 px-4 w-full my-10">
                        Regresar al sitio
                    </button>
                    </a>
                </div>
            </div>
        </>

    );
}