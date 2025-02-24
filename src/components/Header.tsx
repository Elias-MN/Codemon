import { useState } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-zinc-900 text-gray-50 ${!isOpen ? "pb-4" : ""} lg:pb-0`}
    >
      <div className="h-16 flex justify-between items-center px-6 pt-6 lg:flex-row lg:justify-start lg:gap-10 lg:py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-press-start-2">Codemon</span>
        </div>
        <div className="hidden lg:gap-10 lg:flex lg:w-4/5 lg:justify-evenly">
          <a
            href="#"
            className="text-2xl font-mulish font-bold text-gray-50 hover:text-gray-300"
          >
            Retos
          </a>
          <a
            href="#"
            className="text-2xl font-mulish font-bold text-gray-50 hover:text-gray-300"
          >
            Recursos
          </a>
        </div>
        <div className="hidden lg:flex ml-auto">
          <button className="text-zinc-900 bg-yellow-400 lg:w-32 lg:h-8 rounded-lg font-mulish shadow-md hover:opacity-60 active:opacity-60 active:shadow-none cursor-pointer">
            <span>Iniciar Sesión</span>
          </button>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-50 lg:hidden"
        >
          <span className="text-2xl">
            <img className="w-6" src="/images/menu.png" alt="menu" />
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 border-t border-blue-400 lg:hidden">
          <a
            href="#"
            className="flex justify-between items-center p-3 border-b border-blue-400"
          >
            <span className="font-mulish font-bold flex items-center gap-4">
              <img className="w-6" src="/images/retos.png" alt="retos" /> Retos
            </span>
            <span className="mx-3">
              <img className="w-6" src="/images/flecha.png" alt="flecha" />
            </span>
          </a>
          <a
            href="#"
            className="flex justify-between items-center p-3 border-b border-blue-400"
          >
            <span className="font-mulish font-bold flex items-center gap-4">
              <img className="w-6" src="/images/recursos.png" alt="recursos" />{" "}
              Recursos
            </span>
            <span className="mx-3">
              <img className="w-6" src="/images/flecha.png" alt="flecha" />
            </span>
          </a>
          <a
            href="#"
            className="flex justify-between items-center p-3 border-b border-blue-400"
          >
            <span className="font-mulish font-bold flex items-center gap-4">
              <img className="w-6" src="/images/login.png" alt="login" />{" "}
              Iniciar sesión
            </span>
            <span className="mx-3">
              <img className="w-6" src="/images/flecha.png" alt="flecha" />
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Header;
