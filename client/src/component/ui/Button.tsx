type ButtonProps = {
  children: string;
  onClick?: () => void;
  className?: string
};
function Button({ children, onClick, className}: ButtonProps) {
  return <button className={`border p-1 bg-blue-600 rounded-md w-[150px] text-white font-bold${className}`} onClick={onClick}>{children}</button>;
}
export default Button;
