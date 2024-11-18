import { ChangeEvent, FC, forwardRef, InputHTMLAttributes, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/utils";

const inputStyles = cva("w-full p-2 border rounded-md outline-none transition-all", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    },
    error: {
      true: "border-red-500 focus:border-red-600",
      false: "border-gray-300 focus:border-blue-500"
    }
  },
  defaultVariants: {
    size: "md",
    error: false
  }
});

export interface ValidatedInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputStyles> {
  label: string;
  minLength?: number;
  validationRegex?: RegExp;
  errorMessage?: string;
}

export const ValidatedInput: FC<ValidatedInputProps> = forwardRef<HTMLInputElement, ValidatedInputProps>(
  ({ label, type, minLength, validationRegex, errorMessage, size, error, onChange, ...props }, ref) => {
    const [value, setValue] = useState("");
    const [hasError, setHasError] = useState(error);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);

      let isError = false;

      // Validación de longitud mínima
      if (minLength && newValue.length < minLength) {
        isError = true;
      } else if (validationRegex && !validationRegex.test(newValue)) {
        // Validación con expresión regular
        isError = true;
      }

      setHasError(isError);
      // if (onChange) onChange(newValue);
    };

    return (
      <div className="validated-input mb-4">
        <label className="block text-gray-700 mb-2">{label}</label>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          className={cn(inputStyles({ size, error: hasError ? true : false }))}
          ref={ref}
          {...props}
        />
        {hasError && <span className="text-red-500 text-sm mt-1 block">{errorMessage || "Formato inválido."}</span>}
      </div>
    );
  }
);
