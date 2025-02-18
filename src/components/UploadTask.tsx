const UploadTask = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blue-900">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-center mb-4 font-mulish">
            (Nombre de la tarea)
          </h2>
  
          <div className="flex justify-center">
            <button className="w-50 bg-blue-400 text-gray-50 py-2 rounded-lg shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 font-mulish">
              Descargar Enunciado
            </button>
          </div>
  
          <label className="block mt-4 text-sm font-medium text-blue-950 font-mulish">
            Comentarios del profesor
          </label>
          <textarea
            className="w-full border rounded-lg p-2 mt-1 text-blue-950 placeholder-blue-950 font-mulish"
            placeholder="Escribe un comentario..."
          ></textarea>
  
          <div className="mt-4 border-dashed border-2 border-blue-900 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-10 h-10 text-blue-950"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V8m-4 4l4-4m0 0l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              />
            </svg>
            <span className="mt-2 text-blue-900 font-mulish">Subir Archivo</span>
          </div>
  
          <div className="mt-2 p-2 border-2 border-blue-900 rounded-lg text-left text-sm font-mulish">
            File_01.zip
          </div>
  
          <div className="flex justify-center">
            <button className="w-50 bg-blue-400 text-gray-50 py-2 rounded-lg mt-4 shadow-lg shadow-gray-500/50 active:shadow-none hover:opacity-60 active:opacity-60 font-mulish">
              Enviar tarea
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default UploadTask;
  