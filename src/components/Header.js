import '../styles/components/Header.css';

const Header = (props) => {
    const {children, style} = props
    return(
        <h1 className='Header' style={style}>{children}</h1>
    )
}

export default Header;