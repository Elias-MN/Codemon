export function TasksList() {
    return (
        <div className="bg-blue-950 text-gray-50 w-screen h-screen place-items-center
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            id="container-TasksList">

            <div className="text-center">
                <h2 className="text-2xl">Proyectos</h2>
            </div>

            <div className="w-80 h-56 bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col" id="tarea-TasksList">
                <div className="bg-yellow-400 p-4 rounded-t-lg"></div>
                <div className="flex-1 p-2">
                    <h3>Titulo de la tarea</h3>
                    <time>23/03/2003</time>
                </div>
            </div>

            <div className="w-80 h-56 bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col" id="tarea-TasksList">
                <div className="bg-yellow-400 p-4 rounded-t-lg"></div>
                <div className="flex-1 p-2">
                    <h3>Titulo de la tarea</h3>
                    <time>23/03/2003</time>
                </div>
            </div>

            <div>
                <h2 className="text-2xl">Proyectos</h2>
            </div>

            <div id="container-Statistics">

                <div className="flex flex-row text-center ">
                    <div className="p-4">
                        <h3>Tareas por hacer</h3>
                        <span>0</span>
                    </div>
                    <div className="p-4">
                        <h3>Tareas hacidas</h3>
                        <span>0</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
