type InputProps = {
className?: string,
placeholder: string
}
function Input({className, placeholder}: InputProps) {
    return <input placeholder={placeholder} className={`rounded-md border p-2 border-gray-700 ${className}`}>
        
    </input>
}
export default Input;