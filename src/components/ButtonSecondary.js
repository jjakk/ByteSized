import '../styles/components/ButtonSecondary.css'

const ButtonSecondary = (props) => {
    const {text} = props
    return (
        <button className="Button">{text}</button>
    )
}

export default ButtonSecondary