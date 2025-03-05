import React from "react";
import { UseFormRegister, FieldErrors, RegisterOptions } from "react-hook-form";
import { REGEX, ERROR_MESSAGES } from "./validationRules";

interface CardFactoryProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

export const CardFactory: React.FC<CardFactoryProps> = ({
  label,
  name,
  type,
  placeholder = "",
  register,
  errors,
}) => {
  const validationRules: RegisterOptions = {
    required: `${label} es obligatorio`,
  };

  const typeKey = type.toUpperCase() as keyof typeof REGEX;

  if (REGEX[typeKey]) {
    validationRules.pattern = {
      value: REGEX[typeKey],
      message: ERROR_MESSAGES[typeKey],
    };
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type.toLowerCase()}
        id={name}
        placeholder={placeholder}
        {...register(name, validationRules)}
      />
      {errors[name] && (
        <p style={{ color: "red", marginTop: "0.25rem" }}>
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};
