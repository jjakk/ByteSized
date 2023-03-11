import '../styles/components/Subheader.css'

const Subheader = (props) => {
    const {text} = props
    return(
        <h1 className='Subheader'>{text}</h1>
    )
}