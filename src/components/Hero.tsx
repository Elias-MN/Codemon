function Hero() {
  return (
    <div className="w-full h-4/6 absolute bg-[url('/images/fondo.jpg')] bg-cover bg-center pt-24">
      <div className="absolute inset-0 bg-gradient-to-t from-[#162456] to-[#3445f2]/0"></div>
      <div className="relative z-2 flex flex-col items-center gap-7">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-yellow-400 font-press-start-2 filter drop-shadow-[0_4px_0_rgba(0,0,0,1)] lg:drop-shadow-[0_8px_0_rgba(0,0,0,1)]">
          Codemon
        </h1>
        <p className="text-white text-xl md:text-2xl lg:text-3xl text-center font-mulish text-balance w-3/4">
          La mejor forma de empezar a programar: fácil, divertida y accesible.
        </p>
        <button className="bg-yellow-400 w-44 md:w-48 lg:w-52 h-10 md:h-12 lg:h-14 text-base rounded-lg font-press-start-2 shadow-md hover:opacity-60 active:opacity-60 active:shadow-none cursor-pointer">
          <span className="filter drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]">
            Comenzar
          </span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
