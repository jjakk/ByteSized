import '../styles/components/Header.css'

const Header = (props) => {
    const {text} = props
    return(
        <h1 className='Header'>{text}</h1>
    )
}