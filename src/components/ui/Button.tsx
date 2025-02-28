// Hereda todas las propiedades nativas de un botÃ³n en HTML, como onClick, disabled, type, etc
// React.ReactNode es un tipo que puede ser cualquier contenido renderizable en React (texto, TSX, componentes, etc.).
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "delete"
    size?: "sm" | "md" | "lg"
    icon?: React.ReactNode
  }
  
  function Button({ children, variant = "primary", size = "md", icon, disabled, className = "", ...props }: ButtonProps) {
    const baseStyles = "drop-shadow-[0_2px_0_rgba(0,0,0,0.75)] font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors cursor-pointer"
  
    const variants = {
      primary: "bg-blue-400 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary: "bg-yellow-400 text-black hover:bg-yellow-300 focus:ring-yellow-500",
      delete: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    }
  
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }
  
    const buttonStyles = `
      ${baseStyles}
      ${variants[variant]}
      ${sizes[size]}
      ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      ${className}
    `
  
    return (
      <button className={buttonStyles} disabled={disabled} {...props}>
        <span className="flex items-center justify-center">
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </span>
      </button>
    )
  }
  
  export default Button