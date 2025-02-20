function RegisterForm() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent font-mulish">
      <h1 className="text-2xl mb-8 font-bold text-center text-gray-50 md:hidden font-press-start-2">
        Registro
      </h1>
      <div className="hidden md:block mb-8 transform bg-gray-50 md:w-13/24 lg:w-7/24 text-center py-4 rounded-lg shadow-md text-gray-900">
        Crea una cuenta para guardar tu progreso :)
      </div>
      <div className="w-11/12 max-w-md p-6 bg-gray-50 rounded-2xl shadow-xl md:w-13/24 lg:w-7/24 relative">
        <div className="flex items-center justify-around mt-6">
          <button className="px-8 py-3 font-medium text-gray-50 bg-blue-400 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 active:shadow-inner transition cursor-pointer">
            Google
          </button>
          <button className="px-8 py-3 font-medium text-gray-50 bg-blue-400 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 active:shadow-inner transition cursor-pointer">
            GitHub
          </button>
        </div>
        <div className="relative flex items-center justify-center my-6">
          <span className="mx-2 text-lg text-blue-900">-O-</span>
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
            className="w-full px-4 py-2 text-gray-50 bg-blue-400 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 active:shadow-inner transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          >
            Registrarse gratis
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-blue-950">
            Al registrarme, acepto los términos y condiciones.
          </p>
          <p className="mt-2 text-sm text-blue-950">
            ¿Ya tienes una cuenta?{" "}
            <a href="#" className="font-medium text-blue-900 underline">
              Iniciar Sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
