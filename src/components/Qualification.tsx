const Qualification = () => {

    return (
        <div className="flex justify-center items-center">
            <table className="border">
                <tr className="bg-blue-900 ">
                    <th className="border text-gray-50 p-9 rounded-tl-xl">Nombre Estudiante</th>
                    <th className="border text-gray-50 p-9">Estado Entrega</th>
                    <th className="border text-gray-50 p-9">Puntos</th>
                    <th className="border text-gray-50 p-9 rounded-tr-xl"></th>
                </tr>
                <tr >
                    <td className="border p-8">Nombre Estudiante</td>
                    <td className="border p-8">Entrega: Pendiente</td>
                    <td className="border p-8">Entrega: X</td>
                    <td className="border p-8">
                        <button className="w-28 bg-blue-400 text-gray-50 py-1 rounded-lg mt-4 shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 font-mulish">
                            CALIFICAR
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="border p-8">Nombre Estudiante</td>
                    <td className="border p-8">Entrega: Pendiente</td>
                    <td className="border p-8">Entrega: X</td>
                    <td className="border p-8">
                        <button className="w-28 bg-blue-400 text-gray-50 py-1 rounded-lg mt-4 shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 font-mulish">
                            CALIFICAR
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="border p-8 rounded-bl-xl">Nombre Estudiante</td>
                    <td className="border p-8">Entrega: Pendiente</td>
                    <td className="border p-8">Entrega: X</td>
                    <td className="border p-8 rounded-br-xl">
                        <button className="w-28 bg-blue-400 text-gray-50 py-1 rounded-lg mt-4 shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 font-mulish">
                            CALIFICAR
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )

}

export default Qualification;