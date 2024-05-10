import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
};
function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`border px-4 py-1 bg-blue-600 rounded-md  text-white font-bold${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
