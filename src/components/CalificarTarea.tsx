const CalificarTarea = () => {
  return (
    <>
        {/* <div className="flex flex-col justify-center items-center min-h-screen bg-blue-950 p-4"> */}
            <h1 className="text-white text-4xl font-press-start-2 mb-2 text-center">NOMBRE DE TAREA</h1>
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-xl shadow-lg p-6 font-mulish">
                <h2 className="text-2xl lg:text-3xl font-press-start-2 text-blue-950 text-left">
                    Calificar tarea
                </h2>
                <p className="text-blue-900 text-left text-base mt-2">
                    Evaluación del alumno XXX
                </p>
                
                <form className="mt-4">
                    <label className="block text-blue-950 font-semibold text-sm mb-1" htmlFor="puntuacion">
                        Puntuación
                    </label>
                    <input type="text" className="w-full border border-blue-950 rounded-lg p-2"/>
                    
                    <label className="block text-blue-950 font-semibold text-sm mt-4 mb-1" htmlFor="premio">
                        Premio
                    </label>
                    <select className="w-full border border-blue-950 rounded-lg p-2">
                        <option className="text-blue-950">Selecciona un premio</option>
                    </select>
                    
                    <label className="block text-blue-950 font-semibold text-sm mt-4 mb-1" htmlFor="retroalimentacion">
                        Retroalimentación
                    </label>
                    <textarea
                        id="retroalimentacion"
                        className="w-full border border-blue-950 rounded-lg p-2"
                        placeholder="Escribe un comentario..."
                    ></textarea>
                    
                    <button type="submit" className="w-full mt-6 bg-blue-400 text-white font-semibold py-2 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 transition active:shadow-none">
                        Evaluar
                    </button>
                </form>
            </div>
        {/* </div> */}
    </>
  );
};

export default CalificarTarea;