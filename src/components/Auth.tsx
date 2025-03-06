import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import type { AuthUser } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fwengqohrtjzmjjzyfwh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZW5ncW9ocnRqem1qanp5ZndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2ODE3MzcsImV4cCI6MjA1NjI1NzczN30.gAFD8x35DDJ30c9rxGsCLoC-okAwDtwn1qCBPlHQ1ew"
);

function Auth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    checkUser();
  }, []);

  // Verifico si hay un usuario
  async function checkUser() {
    const { data } = await supabase.auth.getUser();
    setUser(data.user);
  }

  // Registro
  async function signUp() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Error al registrarse:", error.message);
    } else {
      console.log("Registro exitoso:", data);
      console.log(data.user);
    }
  }

  // Inicio de sesión
  async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error al iniciar sesión:", error.message);
    } else {
      setUser(data.user);
      console.log("Inicio de sesión exitoso:", data);
    }
  }

  // Cerrar sesión
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    console.log("Cierre de sesión exitoso");
  }

  return (
    <div>
      <h1>Autenticación con Supabase</h1>

      {!user ? (
        <div>
          <h2>Iniciar Sesión o Registrarse</h2>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signUp}>Registrarse</button>
          <button onClick={signIn}>Iniciar Sesión</button>
        </div>
      ) : (
        <div>
          <h2>Bienvenido, {user.email}</h2>
          <button onClick={signOut}>Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default Auth;
