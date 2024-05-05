type ButtonProps = {
  children: string;
  onClick: () => void
};
function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
export default Button;
