import './Input.scss';

const Input = ({ className, onChange, type, id, placeholder, value }) => {

    const classNames = className ? `input ${className}` : 'input';

    return (
        <input
            className={classNames}
            onChange={onChange}
            type={type}
            id={id}
            placeholder={placeholder}
            value={value} />
    )
}


export default Input;