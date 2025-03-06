import { useForm, FormProvider } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function SignUpPage() {
  const methods = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FormData) => {
    console.log("Formulario enviado", data);
    reset();
  };

  return (
    <div className="flex mt-8 flex-col min-h-screen bg-transparent font-mulish">
      <h1 className="text-2xl mb-80 font-bold text-center text-gray-50 md:hidden font-press-start-2">
        Regístrate
      </h1>

      <div className="w-11/12 max-w-md p-6 bg-gray-50 rounded-2xl shadow-xl md:w-13/24 lg:w-7/24 relative">
        <div className="flex items-center justify-around mt-6">
          <button className="px-8 py-3 font-medium text-gray-50 bg-blue-400 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 active:shadow-inner transition cursor-pointer">
            Google
          </button>
          <button className="px-8 py-3 font-medium text-gray-50 bg-blue-400 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 active:shadow-inner transition cursor-pointer">
            Github
          </button>
        </div>

        <div className="relative flex items-center justify-center my-6">
          <span className="mx-2 text-lg text-blue-900">-O-</span>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "El email no es válido",
                  },
                })}
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-900 placeholder-opacity-50"
                placeholder="Email"
              />
              {errors.email && (
                <p style={{ color: "red" }}>{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <input
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Debe tener al menos 6 caracteres",
                  },
                })}
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-blue-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-blue-900 placeholder-opacity-50"
                placeholder="Contraseña"
              />
              {errors.password && (
                <p style={{ color: "red" }}>{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-gray-50 bg-blue-400 rounded-lg shadow-md shadow-gray-400 hover:opacity-60 active:shadow-inner transition focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            >
              Registrar
            </button>
          </form>
        </FormProvider>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-900">
            ¿Tienes una cuenta ya?{" "}
            <a href="#" className="font-medium text-blue-900 underline">
              Inicia Sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
