type InputProps = {
className?: string,
placeholder: string,
type: string
}
function Input({className, placeholder, type}: InputProps) {
    return <input placeholder={placeholder} type={type} className={`rounded-md border p-1 border-gray-700 ${className}`}>   
    </input>
}
export default Input;