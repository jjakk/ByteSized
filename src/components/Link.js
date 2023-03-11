import '../styles/components/Link-style.css'

const Link = (props) => {
    const {text} = props
    return(
        <a className='Link'>{text}</a>
    )
}

export default Link