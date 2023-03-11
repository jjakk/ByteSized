import '../styles/components/Link.css'

const Link = (props) => {
    const {children, href, style} = props
    return(
        <a className='Link' href={href} style={style}>{children}</a>
    )
}

export default Link