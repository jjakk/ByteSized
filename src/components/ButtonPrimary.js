import '../styles/components/ButtonPrimary.css';

const PrimaryButton = (props) => {
    const {text} = props
    return(
        <button className='Button'>{text}</button>
    )
}

export default PrimaryButton;