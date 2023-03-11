import '../styles/components/Button.css';

const Button = (props) => {
    const {
        children,
        secondary=false,
        style
    } = props;
    return(
        <button
            className={`Button ${secondary ? "secondary" : ""}`}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button;