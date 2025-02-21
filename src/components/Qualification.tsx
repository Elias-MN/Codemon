const Qualification = () => {
    return (
        /*<div className="flex justify-center items-center h-screen">*/
        <table className="shadow-lg rounded-xl border-spacing-0 overflow-hidden">
            <thead className="hidden sm:table-header-group">
                <tr className="bg-blue-900 text-white">
                    <th className="py-7 px-9 border-b border-black rounded-tl-xl border-r ">Nombre Estudiante</th>
                    <th className="py-7 px-9 border-b border-black border-r ">Estado Entrega</th>
                    <th className="py-7 px-9 border-b border-black border-r ">Puntos</th>
                    <th className="py-7 px-9 border-b border-black rounded-tr-xl"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="flex flex-col mb-4 sm:table-row w-2xs">
                    <td className="py-4 px-9 border-b border-black rounded-t-xl sm:rounded-none border-r ">Nombre Estudiante</td>
                    <td className="py-4 px-9 border-b border-black sm:rounded-none border-r ">Entrega: Pendiente</td>
                    <td className="py-4 px-9 border-b border-black sm:rounded-none border-r ">Entrega: X</td>
                    <td className="py-4 px-9 border-b border-black sm:rounded-none flex justify-center">
                        <button className="w-28 bg-blue-400 text-gray-50 py-1 rounded-lg shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 cursor-pointer">
                            CALIFICAR
                        </button>
                    </td>
                </tr>
                <tr className="flex flex-col mb-4 sm:table-row">
                    <td className="py-4 px-9 border-b border-black sm:rounded-none border-r ">Nombre Estudiante</td>
                    <td className="py-4 px-9 border-b border-black sm:rounded-none border-r ">Entrega: Pendiente</td>
                    <td className="py-4 px-9 border-b border-black sm:rounded-none border-r ">Entrega: X</td>
                    <td className="py-4 px-9 border-b border-black flex justify-center sm:rounded-none">
                        <button className="w-28 bg-blue-400 text-gray-50 py-1 rounded-lg shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 cursor-pointer">
                            CALIFICAR
                        </button>
                    </td>
                </tr>
                <tr className="flex flex-col mb-4 sm:table-row">
                    <td className="py-4 px-9 sm:rounded-none border-r border-black">Nombre Estudiante</td>
                    <td className="py-4 px-9 sm:rounded-none border-r border-black">Entrega: Pendiente</td>
                    <td className="py-4 px-9 sm:rounded-none border-r border-black">Entrega: X</td>
                    <td className="py-4 px-9 rounded-b-xl flex justify-center sm:rounded-none rounded-br-xl">
                        <button className="w-28 bg-blue-400 text-gray-50 py-1 rounded-lg shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 cursor-pointer">
                            CALIFICAR
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        /*</div>*/
    );
}

export default Qualification;
