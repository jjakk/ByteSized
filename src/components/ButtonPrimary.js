import '../styles/components/ButtonPrimary-style.css';

const PrimaryButton = (props) => {
    const {text} = props
    return(
        <button className='Button'>{text}</button>
    )
}

export default PrimaryButton;