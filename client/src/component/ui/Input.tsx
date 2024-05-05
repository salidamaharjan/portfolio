type InputProps = {
  className?: string;
  placeholder: string;
  type: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};
function Input({ className, placeholder, value, onChange, type }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className={`rounded-md border p-1 border-gray-700 ${className}`}
    ></input>
  );
}
export default Input;
