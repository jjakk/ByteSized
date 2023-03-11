import '../styles/components/Link.css'

const Link = (props) => {
    const {text} = props
    return(
        <a className='Link'>{text}</a>
    )
}

export default Link