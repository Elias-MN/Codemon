export function UserInfo() {
  return (
    <div className="bg-blue-950 flex flex-col items-center py-4 md:py-6 lg:py-8 relative">
      <div className="w-72 md:w-96 lg:w-[750px] h-24 md:h-32 lg:h-40 relative rounded-t-2xl overflow-hidden border-black border-t border-r border-l">
        <img
          src="/images/fondo.jpg"
          alt="Banner de perfil"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-72 md:w-96 lg:w-[750px] h-32 md:h-40 lg:h-44 bg-blue-900 rounded-b-2xl border-black border-b border-r border-l flex items-center p-4 relative">

        <div className="absolute -top-10 left-4 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-blue-400 border-4 border-blue-900 rounded-full overflow-hidden">
          <img
            src="/images/default.jpg"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start ml-4 mt-10">
          <p className="text-white text-lg md:text-xl lg:text-2xl font-bold">Agustín</p>
          <p className="text-gray-50 text-sm md:text-base lg:text-lg">@agustin_51</p>
        </div>

        <div className="ml-auto">
          <button className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm md:text-base lg:text-lg hover:bg-blue-500 transition-all">
            Editar perfil
          </button>
        </div>
      </div>
    </div>
  );
}
