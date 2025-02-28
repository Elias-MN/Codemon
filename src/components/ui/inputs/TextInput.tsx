import { REGEX, ERROR_MESSAGES } from "./validationRules.ts";

const Input = ({ label, type, id, name, pattern, error }) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} pattern={pattern} />
        <p>{error}</p>
    </div>
);

export const CardFactory = (label, type, id, name) => {
    switch (type) {
      case "text":
        return <Input label={label} type={type} id={id} name={name} pattern={REGEX.TEXT} error={ERROR_MESSAGES.TEXT} />;
      case "number":
        return <Input label={label} type={type} id={id} name={name} pattern={REGEX.NUMBER} error={ERROR_MESSAGES.NUMBER} />;
      case "email":
        return <Input label={label} type={type} id={id} name={name} pattern={REGEX.EMAIL} error={ERROR_MESSAGES.EMAIL} />;
      case "password":
        return <Input label={label} type={type} id={id} name={name} pattern={REGEX.PASSWORD} error={ERROR_MESSAGES.PASSWORD} />;
      default:
        throw new Error("Tipo de input no válido");
    }
};