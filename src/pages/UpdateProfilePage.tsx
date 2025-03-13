function UpdateProfileComponent() {

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Editar Perfil</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Imagen de perfil</label>
          <img src="" alt="Foto de perfil" className="w-24 h-24 rounded-full object-cover mb-2"/>
          <input type="file" className="block"/>
        </div>
        <button type="submit" className="w-full px-4 py-2 text-gray-50 bg-blue-400 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 active:shadow-inner transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
          Añadir Imagen
        </button>
      </form>
    </div>
  );
}

export default UpdateProfileComponent
