import '../../scss/_input.scss'
const Input = ({label, name, className = 'form-control',  type ,placeholder }) => {
    return ( 
        <>
            
            <label className="form-label" style={{display:(label===' ')?'none':'block'}}>{label}</label>
            <input className={className} type={type} name={name} placeholder={placeholder} required pattern="[a-zA-Z ]+" />
        </>
    );
}
export default Input;