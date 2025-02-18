function Hero() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-yellow-400 font-press-start-2 filter drop-shadow-[0_4px_0_rgba(0,0,0,1)]">
          Codemon
        </h1>
        <p className="text-xl text-center font-mulish">
          La mejor forma de empezar a programar: fácil, divertida y accesible.
        </p>
        <button className="bg-yellow-400 w-44 h-10 text-base rounded-lg font-press-start-2 shadow-md hover:opacity-60 active:opacity-60 active:shadow-none">
          <span className="filter drop-shadow-[0_2px_0_rgba(0,0,0,0.3)]">
            Comenzar
          </span>
        </button>
      </div>
    </>
  );
}

export default Hero;
