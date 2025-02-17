export function UserInfo(){
  return (
    <>

    <div className="bg-blue-950 h-[calc(0.3*100vh)] flex flex-col items-center">
      <div className="bg-blue-400 w-72 h-2/5 border-black border-t border-r border-l">
        <div>
         Foto de agustin
        </div>
      </div>
      <div className="bg-blue-900 w-72 h-3/5 rounded-b-2xl border-black border-b border-r border-l ">
        {/*aqui va la el texto*/}
        <div >
          <p>Nombre</p>
          <p>@user_</p>
        </div>
        <div>
          <button className="bg-blue-400">Editar Perfil</button>
        </div>
      </div>
    </div>
    </>
  )
}
