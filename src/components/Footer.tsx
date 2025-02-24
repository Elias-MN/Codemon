export function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-50 py-6 px-4 text-center font-mulish">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 font-press-start-2">Hecho con ❤️ en Mérida, IES Albarregas</p>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <a href="#" className="hover:underline">
            Sobre nosotros
          </a>
          <a href="#" className="hover:underline">
            Recursos
          </a>
          <a href="#" className="hover:underline">
            Términos
          </a>
          <a href="#" className="hover:underline">
            Política de privacidad
          </a>
        </div>

        <p className="">
          © {new Date().getFullYear()} Mérida, Inc. Términos | Política de
          privacidad
        </p>

        <div className="flex justify-center gap-4 mt-4 ">
          <a href="#">
            <img src="" alt="TikTok" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="" alt="X" className="w-6 h-6" />
          </a>
          <a href="#">
            <img src="" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
