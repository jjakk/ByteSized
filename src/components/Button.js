import '../styles/components/Button.css';

const Button = (props) => {
    const {
        text,
        secondary=false
    } = props;
    return(
        <button className={`Button ${secondary ? "secondary" : ""}`}>{text}</button>
    )
}

export default Button;