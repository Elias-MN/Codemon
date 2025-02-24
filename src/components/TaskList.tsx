function TasksList() {
    return (
        <div className=" text-gray-50 min-h-screen w-full p-4 font-mulish">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">

                <section className="col-span-12 md:col-span-3 lg:col-span-2 bg-blue-900 p-4 rounded-lg">
                    <h3 className="text-center font-bold text-xl mb-4 p-4">Estadísticas</h3>
                    <div className="flex justify-around text-center flex-row md:flex-col">
                        <div className='md:p-4'>
                            <h4 className="font-semibold">Tareas por hacer</h4>
                            <span>0</span>
                        </div>
                        <div className="bg-gray-400 w-px h-10 sm:hidden justify-center "></div>
                        <div className=" border-gray-400 md:p-4 md:border-l-0 md:border-t md:mt-4">
                            <h4 className="font-semibold">Tareas Realizadas</h4>
                            <span>0</span>
                        </div>
                        <div className="hidden md:block border-l border-gray-400 md:p-4 md:border-l-0 md:border-t md:mt-4">
                            <h4 className="font-semibold">Puntos</h4>
                            <span>0</span>
                        </div>
                    </div>
                </section>

                <main className="col-span-12 md:col-span-9 lg:col-span-10 p-2 sm:p-4">
                    <h3 className="text-2xl font-bold mb-4 text-center">Proyectos</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                        <div className="bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <div className="bg-yellow-400 p-6 rounded-t-lg"></div>
                            <div className="p-4 h-35">
                                <h3 className="font-semibold">Título de la tarea</h3>
                                <time>31/01/2025</time>
                            </div>
                        </div>

                        <div className="bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <div className="bg-yellow-400 p-6 rounded-t-lg"></div>
                            <div className="p-4 h-35">
                                <h3 className="font-semibold">Título de la tarea</h3>
                                <time>31/01/2025</time>
                            </div>
                        </div>

                        <div className="bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <div className="bg-yellow-400 p-6 rounded-t-lg"></div>
                            <div className="p-4 h-35">
                                <h3 className="font-semibold">Título de la tarea</h3>
                                <time>31/01/2025</time>
                            </div>
                        </div>

                        <div className="bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <div className="bg-yellow-400 p-6 rounded-t-lg"></div>
                            <div className="p-4 h-35">
                                <h3 className="font-semibold">Título de la tarea</h3>
                                <time>31/01/2025</time>
                            </div>
                        </div>

                        <div className="bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <div className="bg-yellow-400 p-6 rounded-t-lg"></div>
                            <div className="p-4 h-35">
                                <h3 className="font-semibold">Título de la tarea</h3>
                                <time>31/01/2025</time>
                            </div>
                        </div>

                        <div className="bg-gray-50 text-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col">
                            <div className="bg-yellow-400 p-6 rounded-t-lg"></div>
                            <div className="p-4 h-35">
                                <h3 className="font-semibold">Título de la tarea</h3>
                                <time>31/01/2025</time>
                            </div>
                        </div>

                    </div>


                </main>

            </div>

        </div>
    );
}

export default TasksList;
