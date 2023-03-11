import '../styles/components/Header.css';

const Header = (props) => {
    const {children} = props
    return(
        <h1 className='Header'>{children}</h1>
    )
}

export default Header;