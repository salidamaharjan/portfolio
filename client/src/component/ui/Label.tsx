type LabelProps = {
    children: React.ReactNode,
    className?: string
}
function Label({children, className}: LabelProps){
    return <label className={className}>{children}</label>
}

export default Label
