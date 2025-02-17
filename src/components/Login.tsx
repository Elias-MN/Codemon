function LoginForm() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen bg-blue-950 font-['Mulish']">
      
      <h1 className="text-3xl mb-8 font-bold text-center text-gray-50 md:hidden font-['Press_Start_2P']">
        Iniciar Sesión
      </h1>

      <div className="hidden md:block mb-8 transform bg-gray-50 md:w-11/24 lg:w-7/24 text-center py-4 rounded-lg shadow-md text-gray-900">
        Inicia sesión para reanudar tu viaje~
      </div>

      <div className="w-11/12 max-w-md p-6 bg-gray-50 rounded-2xl shadow-xl md:w-13/24 lg:w-7/24 relative">
        
        <div className="flex items-center justify-center gap-4 mt-6">
          <button className="px-4 py-2 font-medium text-gray-50 bg-blue-400 rounded-lg shadow-md hover:shadow-lg hover:opacity-80 active:shadow-inner transition">
            Google
          </button>
          <button className="px-4 py-2 font-medium text-gray-50 bg-blue-400 rounded-lg shadow-md hover:shadow-lg hover:opacity-80 active:shadow-inner transition">
            GitHub
          </button>
        </div>

        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-blue-900"></div>
          <span className="mx-2 text-lg text-blue-900">o</span>
          <div className="flex-grow border-t border-blue-900"></div>
        </div>

        <form>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-900 placeholder-opacity-50"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-900 placeholder-opacity-50"
              placeholder="Contraseña"
            />
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 text-gray-50 bg-blue-400 rounded-lg shadow-md hover:shadow-lg hover:opacity-80 active:shadow-inner transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-900">
            ¿Necesitas una Cuenta?{" "}
            <a href="#" className="font-medium text-blue-900 hover:underline">
              Regístrate
            </a>
          </p>
          <p className="mt-2 text-sm text-gray-600">
            <a href="#" className="font-medium text-blue-900 hover:underline">
              Reiniciar Contraseña
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
