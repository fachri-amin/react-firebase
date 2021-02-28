import './Button.scss';

const Button = ({ onClick, title, isLoading }) => {

    if (isLoading) {
        return (
            <button className='btn disable' onClick={onClick}>Loading...</button>
        )
    }

    return (
        <button className='btn' onClick={onClick}>{title}</button>
    )
}

export default Button;