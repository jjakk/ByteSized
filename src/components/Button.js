import '../styles/components/Button.css';

const Button = (props) => {
    const {
        children,
        secondary=false,
        style,
        onClick
    } = props;
    return(
        <button
            className={`Button ${secondary ? "secondary" : ""}`}
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;