export const REGEX = {
    TEXT: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    NUMBER: /^-?\d+(\.\d+)?$/
  };
  
  export const ERROR_MESSAGES = {
    TEXT: 'El campo solo puede contener letras y espacios.',
    EMAIL: 'El formato del correo electrónico no es válido.',
    PASSWORD: 'La contraseña debe tener al menos 8 caracteres, incluir una letra, un número y un carácter especial.',
    NUMBER: 'El valor ingresado debe ser un número válido.',
  };