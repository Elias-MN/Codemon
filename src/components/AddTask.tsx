function AddTask() {
    return (
        <>
            {/* <div className="flex flex-col justify-center items-center min-h-screen bg-blue-950 p-4"> */}
                <h1 className="text-center font-bold text-white mb-4 text-3xl font-press-start-2 tracking-widest">
                    AÑADIR TAREA
                </h1>
                <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white p-6 rounded-2xl shadow-lg font-mulish">
                    

                    <div className="flex flex-col gap-2 w-10/12 m-auto">
                        <h1 className="text-2xl sm:text-3xl font-bold font-press-start text-center mb-4">
                            Nombre de la tarea
                        </h1>

                        <label className="block text-lg text-blue-950 font-bold">
                            Requisitos de entrega
                        </label>
                        <textarea
                            className="w-full p-2 border rounded-lg focus:outline-none text-gray-900"
                            rows={3}
                            placeholder="Requisitos..."
                        ></textarea>

                        <div className="mt-4">
                            <input 
                                type="file" 
                                id="file-upload"
                                className="hidden"
                            />
                            <label 
                                htmlFor="file-upload"
                                className="flex flex-col items-center justify-center p-4 sm:p-6 border-3 border-dashed border-blue-900 rounded-lg cursor-pointer"
                            >
                                <i className='bx bx-upload font-bold text-5xl sm:text-6xl text-blue-900 p-3 sm:p-4'></i>
                                <p className="text-blue-900 text-lg sm:text-2xl">
                                    Subir Archivo
                                </p>
                            </label>
                        </div>

                        <div className="mt-3 border-blue-900 border-solid border-2 p-2 rounded-xl text-left text-gray-900">
                            File_01.zip
                        </div>

                        <button className="bg-blue-400 w-full sm:w-2/5 text-white font-mulish font-semibold py-2 px-4 rounded-lg shadow-md shadow-gray-400 transition hover:opacity-60 active:opacity-60 active:shadow-none m-auto cursor-pointer">
                            Subir tarea
                        </button>
                    </div>
                </div>
            {/* </div> */}
        </>
        
    );
}

export default AddTask;