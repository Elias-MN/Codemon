function AddTask() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-950">
            <h1 className="text-center font-bold text-white mb-4 text-3xl font-press-start-2 tracking-widest">
                AÑADIR TAREA
            </h1>

            <div className="bg-white p-6 rounded-2xl shadow-lg w-3/5 h-4/6 font-mulish">
                <div className="flex flex-col gap-2 w-10/12 m-auto">
                    <h1 className="text-3xl font-bold font-press-start text-center mb-4">
                        Nombre de la tarea
                    </h1>

                    <label className="block text-sm text-gray-700 mb-2">
                        Requisitos de entrega
                    </label>
                    <textarea
                        className="w-full p-2 border rounded-lg focus:outline-none text-gray-900"
                        rows={3}
                    ></textarea>


                    <div className="mt-4">
                        <input 
                            type="file" 
                            id="file-upload"
                            className="hidden"
                        />
                        <label 
                            htmlFor="file-upload"
                            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
                        >
                            <p className="text-blue-400 font-medium">
                                Subir Archivo
                            </p>
                        </label>
                    </div>


                    <div className="mt-3 bg-gray-200 p-2 rounded-md text-center text-gray-900">
                        File_01.zip
                    </div>


                    <button className="bg-blue-400 w-2/5 text-white font-mulish font-semibold py-2 px-4 rounded-lg shadow-lg transition hover:opacity-60 active:opacity-60 active:shadow-none m-auto">
                        Subir tarea
                    </button>

                </div>
            </div>
        </div>
    );
}

export default AddTask;