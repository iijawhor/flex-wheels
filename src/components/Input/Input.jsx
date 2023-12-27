import React, { useId, useState } from "react";
import "./Input.css";
const Input = React.forwardRef(function Input({
  label,
  className = "",
  value,
  type = "text",
  ref,
  formContext,
  placeholder,
  ...props
}) {
  const id = useId();
  const inputId = formContext ? `${formContext}-${id}` : id;
  const [placeholderValue, setPlaceholderValue] = useState(placeholder);
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
    setPlaceholderValue("");
  };
  return (
    <section className="inputComponent">
      <fieldset
        className={`inputFieldset ${focused ? "active" : ""} ${className}`}
      >
        <legend
          htmlFor={id}
          className={`inputLabel ${focused ? "actives" : ""} ${className}`}
        >
          {focused ? placeholder : ""}
        </legend>

        <input
          type={type}
          className={`inputField ${className}`}
          id={inputId}
          value={value}
          onChange=""
          ref={ref}
          placeholder={placeholderValue}
          onFocus={handleFocus}
          {...props}
        />
      </fieldset>
    </section>
  );
});

export default Input;
